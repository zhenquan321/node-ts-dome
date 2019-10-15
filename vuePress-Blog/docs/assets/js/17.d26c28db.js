(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{321:function(s,a,n){s.exports=n.p+"assets/img/nginx.e403281d.png"},410:function(s,a,n){"use strict";n.r(a);var t=n(43),e=Object(t.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"使用-nginx-反向代理"}},[s._v("使用 Nginx 反向代理")]),s._v(" "),t("p",[t("em",[s._v("Nginx")]),s._v(" (engine x)是，一款轻量级网页服务器、反向代理服务器及电子邮件（IMAP/POP3）代理服务器。由伊戈尔·赛索耶夫为俄罗斯访问量第二的Rambler.ru站点（俄文：Рамблер）开发的。其特点是占有内存少，并发能力强，且稳定、功能丰富。已经被各大互联网公司广泛使用。")]),s._v(" "),t("p",[s._v("在生产环境中使用Nginx反向代理Node.js是个很好的习惯，性能好、方便配置、易于扩展…除此之外还可以实现负载均衡。")]),s._v(" "),t("blockquote",[t("p",[s._v("有的同学不理解什么是反向代理，有反向就有正向。举个通俗易懂的例子：我们通过国外的代理来翻墙访问Google，这里的翻墙代理就"),t("strong",[s._v("正向代理")]),s._v("；我们打10086人工服务，我们不关心电话那头是谁，是男是女，能有人接听，解决问题就行。那么这里的10086总机号码就是"),t("strong",[s._v("反向代理")])])]),s._v(" "),t("p",[s._v("前面的章节中，我们在端口8080启动了一个node服务。但是想启动一个在80端口*(HTTP的默认端口是80 )*咋办？如果服务器上只有一个服务，你要直接监听80端口也是可以的，但是需要root权限，因为1024以内的端口都需要root权限才能开启，同时也需要放大node的权限，这样也不免有些麻烦。你的服务器上有多个站点需要占用80端口，只需要让node监听本地的端口，然后通过Nginx反向代理，就可以将多个站点域名指向同一台服务器了。")]),s._v(" "),t("h2",{attrs:{id:"安装nginx"}},[s._v("安装Nginx")]),s._v(" "),t("p",[s._v("在Ubuntu可以直接是用apt-get来安装Nginx")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载安装")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本")]),s._v("\n$ nginx -v\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx version: nginx/1.10.3 (Ubuntu)")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("现在直接访问服务器IP，将可以看见如下Nginx的欢迎页面")]),s._v(" "),t("p",[t("img",{attrs:{src:n(321),alt:"nginx"}})]),s._v(" "),t("h2",{attrs:{id:"配置nginx"}},[s._v("配置Nginx")]),s._v(" "),t("p",[s._v("进入到"),t("code",[s._v("/etx/nginx/conf.d")]),s._v("目录下，新建域名对应的配置文件如"),t("code",[s._v("jszen.com.conf")]),s._v("，随便叫啥名字都可以，关键这儿使用域名的名字主要是好记")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" jszen.com.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" jszen "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("120.78")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".67")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".160")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若要域名访问，这儿配置为域名即可如 test.com, www.test.com")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("jszen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" Host "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Real"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("IP "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Forwarded"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("For "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("NginX"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Proxy")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_redirect")]),s._v(" off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("测试配置文章是否有错误")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -t\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将Nginx重启，使配置生效")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -s reload\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("现在访问IP地址就可以看见，服务器返回了")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("你好，JavaScript之禅的朋友\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])},[],!1,null,null,null);e.options.__file="4.4使用Nginx反向代理.md";a.default=e.exports}}]);