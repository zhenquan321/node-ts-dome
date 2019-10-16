import  {MovieReptileService} from './../service';
import {IMovieModel,MovieModel}  from './../model';

var superagent = require('superagent'); //发起请求 
var cheerio = require('cheerio'); //可以像jquer一样操作界面
var charset = require('superagent-charset'); //解决乱码问题:
charset(superagent); 
var async = require('async'); //异步抓取
var eventproxy = require('eventproxy');  //流程控制
var ep = eventproxy();
var baseUrl:string = 'http://www.dytt8.net';  //迅雷首页链接
var newMovieLinkArr:any=[]; //存放新电影的url
var errLength:any=[];     //统计出错的链接数
var highScoreMovieArr:any=[] //高评分电影

/**
 * @export
 * @param {Response} res 
 * @param {NextFunction} next 
 * @returns {Promise < void >}
 */
export async function movieReptile(): Promise < void > {
      
    superagent.get(baseUrl)
    .charset('gb2312')
    .end(function (err:any, sres:any) {
        // 常规的错误处理
        if (err) {
            console.log('抓取'+baseUrl+'这条信息的时候出错了')
        }
        var $ = cheerio.load(sres&&sres.text);
        // 170条电影链接，注意去重
        getAllMovieLink($,"highScoreMovie");
        var linkElem:any=$('.co_content2 ul a');
        ep.once('highScoreMovie', function() {
            highScoreMovie(linkElem.eq(1).attr('href'));
        })
    });
 
}

// 获取首页中左侧栏的所有链接
async function getAllMovieLink($:any,next?:string){
    var linkElem:any=$('.co_content2 ul a');
	for(var i=2;i<170;i++){
        if(linkElem.eq(i).attr('href')){
            var url='http://www.dytt8.net'+linkElem.eq(i).attr('href');
            // 注意去重
            if(newMovieLinkArr.indexOf(url) ==-1){
                newMovieLinkArr.push(url);
            };
        }
    }
    insertUrl(newMovieLinkArr,"最新",next)
}

//评分8分以上影片 200余部!，这里只是统计数据，不再进行抓取
async function highScoreMovie(url:any,next?:string){
    console.log("评分8分以上影片 200余部:"+url);
    if(!url){
        return
    }
	var useUrl='http://www.dytt8.net'+url;  
	superagent
	.get(useUrl)
	.charset('gb2312')
	.end(function (err:any, sres:any) {
	    // 常规的错误处理
	    if (err) {
	    	console.log('抓取'+url+'这条信息的时候出错了',err)
	    }
	    var $ = cheerio.load(sres&&sres.text);
	    var elemP=$('#Zoom p');
	    var elemA=$('#Zoom a');
	    for (var k = 1; k < elemP.length; k++) {
	    	var Hurl=elemP.eq(k).find('a').text();
	    	if(highScoreMovieArr.indexOf(Hurl) ==-1){
	    		highScoreMovieArr.push(Hurl);
	    	};
        }
        insertUrl(highScoreMovieArr,"高分",next)
    });
}

//抓取详情
async function insertUrl (eps:any,type:string,next?:string) {
    var concurrencyCount = 0;
    var num=-4; //因为是5个并发，所以需要减4
    var yizhuqu=0;
    // 利用callback函数将结果返回去，然后在结果中取出整个结果数组。
    var fetchUrl = function (myurl:any, callback:any) {
        var fetchStart = new Date().getTime();
        concurrencyCount++;
        num+=1
        console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', myurl);
        superagent
        .get(myurl)
        .charset('gb2312') //解决编码问题
        .end(function (err:any, ssres:any) {
            yizhuqu++
            if (err) {
                callback(err, myurl + ' error happened!');
                errLength.push(myurl);
            }
            var time = new Date().getTime() - fetchStart;
            console.log(yizhuqu+'抓取 ' + myurl + ' 成功', '，耗时' + time + '毫秒');
            concurrencyCount--;
            var $ = cheerio.load(ssres&&ssres.text);
            // 对获取的结果进行处理函数
            getDownloadLink($,function(obj:IMovieModel){
                let movie:any={
                    name:obj.name,
                    downLink:obj.downLink,
                    href:myurl,
                    imgUrl:obj.imgUrl,
                    years:Number(obj.name.substring(0, 4))||0,
                    type:type
                }
                MovieReptileService.insert(movie)
            });
            var result = {
                movieLink: myurl
            };
            callback(null, result);
        });
    };
    // 控制最大并发数为5，在结果中取出callback返回来的整个结果数组。
    // mapLimit(arr, limit, iterator, [callback])
    async.mapLimit(eps, 5, function (myurl:any, callback:any) {
        fetchUrl(myurl, callback);
    }, function () {
        // 爬虫结束后的回调，可以做一些统计结果
        console.log('抓包结束，一共抓取了-->'+newMovieLinkArr.length+'条数据');
        console.log('出错-->'+errLength.length+'条数据');
        if(next){
            ep.emit(next)
        }
    });
}

// 获取下载链接
function getDownloadLink($:any,callback:any){
	var downLink:string=$('#Zoom table a').text();
    var movieName:string=$('.title_all h1 font').text();
    let imgUrl:string=$('#Zoom p img').attr("src");
	
	if(!downLink){
		downLink='该电影暂无链接';
    }
    var obj:any={
		'downLink':downLink,
        'name':movieName,
        "imgUrl":imgUrl,
        "href":"",
        years:0
	};
	callback(obj);
}