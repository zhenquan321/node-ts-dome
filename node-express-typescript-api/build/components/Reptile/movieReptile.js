"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
var superagent = require('superagent'); //发起请求 
var cheerio = require('cheerio'); //可以像jquer一样操作界面
var charset = require('superagent-charset'); //解决乱码问题:
charset(superagent);
var async = require('async'); //异步抓取
var eventproxy = require('eventproxy'); //流程控制
var ep = eventproxy();
var baseUrl = 'http://www.dytt8.net'; //迅雷首页链接
var newMovieLinkArr = []; //存放新电影的url
var errLength = []; //统计出错的链接数
var highScoreMovieArr = []; //高评分电影
/**
 * @export
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
function movieReptile() {
    return __awaiter(this, void 0, void 0, function* () {
        superagent
            .get(baseUrl)
            .charset('gb2312')
            .end(function (err, sres) {
            // 常规的错误处理
            if (err) {
                console.log('抓取' + baseUrl + '这条信息的时候出错了');
            }
            var $ = cheerio.load(sres && sres.text);
            // 170条电影链接，注意去重
            getAllMovieLink($);
            /*
            *流程控制语句
            *当首页左侧的链接爬取完毕之后，我们就开始爬取里面的详情页
            */
            ep.emit('get_topic_html', 'get ' + baseUrl + ' successful');
        });
        // 命令 ep 重复监听 emit事件(get_topic_html)，当get_topic_html爬取完毕之后执行
        ep.after('get_topic_html', 1, function (eps) {
            var concurrencyCount = 0;
            var num = -4; //因为是5个并发，所以需要减4
            // 利用callback函数将结果返回去，然后在结果中取出整个结果数组。
            var fetchUrl = function (myurl, callback) {
                var fetchStart = new Date().getTime();
                concurrencyCount++;
                num += 1;
                console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', myurl);
                superagent
                    .get(myurl)
                    .charset('gb2312') //解决编码问题
                    .end(function (err, ssres) {
                    if (err) {
                        callback(err, myurl + ' error happened!');
                        errLength.push(myurl);
                    }
                    var time = new Date().getTime() - fetchStart;
                    console.log('抓取 ' + myurl + ' 成功', '，耗时' + time + '毫秒');
                    concurrencyCount--;
                    var $ = cheerio.load(ssres && ssres.text);
                    // 对获取的结果进行处理函数
                    getDownloadLink($, function (obj) {
                        let movie = {
                            name: obj.name,
                            downLink: obj.downLink,
                            href: myurl,
                            imgUrl: obj.imgUrl,
                            years: Number(obj.name.substring(0, 4)) || 0,
                            type: "最新"
                        };
                        service_1.default.insert(movie);
                    });
                    var result = {
                        movieLink: myurl
                    };
                    callback(null, result);
                });
            };
            // 控制最大并发数为5，在结果中取出callback返回来的整个结果数组。
            // mapLimit(arr, limit, iterator, [callback])
            async.mapLimit(newMovieLinkArr, 5, function (myurl, callback) {
                fetchUrl(myurl, callback);
            }, function (err, result) {
                // 爬虫结束后的回调，可以做一些统计结果
                console.log('抓包结束，一共抓取了-->' + newMovieLinkArr.length + '条数据');
                console.log('出错-->' + errLength.length + '条数据');
                console.log('高评分电影：==》' + highScoreMovieArr.length + '部');
                return false;
            });
        });
    });
}
exports.movieReptile = movieReptile;
// 获取首页中左侧栏的所有链接
function getAllMovieLink($) {
    var linkElem = $('.co_content2 ul a');
    highScoreMovie(linkElem.eq(1).attr('href'));
    for (var i = 2; i < 170; i++) {
        if (linkElem.eq(i).attr('href')) {
            var url = 'http://www.dytt8.net' + linkElem.eq(i).attr('href');
            // 注意去重
            if (newMovieLinkArr.indexOf(url) == -1) {
                newMovieLinkArr.push(url);
            }
            ;
        }
    }
}
//评分8分以上影片 200余部!，这里只是统计数据，不再进行抓取
function highScoreMovie(url) {
    console.log("评分8分以上影片 200余部:" + url);
    if (!url) {
        return;
    }
    var useUrl = 'http://www.dytt8.net' + url;
    superagent
        .get(useUrl)
        .charset('gb2312')
        .end(function (err, sres) {
        // 常规的错误处理
        if (err) {
            console.log('抓取' + url + '这条信息的时候出错了');
        }
        var $ = cheerio.load(sres && sres.text);
        var elemP = $('#Zoom p');
        var elemA = $('#Zoom a');
        for (var k = 1; k < elemP.length; k++) {
            var Hurl = elemP.eq(k).find('a').text();
            if (highScoreMovieArr.indexOf(Hurl) == -1) {
                highScoreMovieArr.push(Hurl);
            }
            ;
        }
    });
}
// 获取下载链接
function getDownloadLink($, callback) {
    var downLink = $('#Zoom table a').text();
    var movieName = $('.title_all h1 font').text();
    let imgUrl = $('#Zoom p img').attr("src");
    if (!downLink) {
        downLink = '该电影暂无链接';
    }
    var obj = {
        'downLink': downLink,
        'name': movieName,
        "imgUrl": imgUrl,
        "href": "",
        years: 0
    };
    callback(obj);
}
//# sourceMappingURL=movieReptile.js.map