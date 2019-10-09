(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{374:function(t,s,e){"use strict";e.r(s);var n=e(43),r=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"如何搭建一个组件库的开发环境"}},[t._v("如何搭建一个组件库的开发环境")]),t._v(" "),e("h2",{attrs:{id:"技术选型"}},[t._v("技术选型")]),t._v(" "),e("h3",{attrs:{id:"css-解决方案"}},[t._v("css 解决方案")]),t._v(" "),e("p",[t._v("由于CSS 本身的众多缺陷，如书写繁琐（不支持嵌套）、样式易冲突（没有作用域概念）、缺少变量（不便于一键换主题）等不一而足。为了解决这些问题，社区里的解决方案也是出了一茬又一茬，从最早的 CSS prepocessor（SASS、LESS、Stylus）到后来的后起之秀 PostCSS，再到 CSS Modules、Styled-Components 等。")]),t._v(" "),e("p",[t._v("Antd 选择了 less 作为 css 的预处理方案,Bootstrap 选择了 Scss,这两种方案孰优孰劣已经争论了很多年了:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.zhihu.com/question/34606506",target:"_blank",rel:"noopener noreferrer"}},[t._v("SCSS和LESS相比有什么优势？"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("但是不管是哪种方案都有一个很烦人的点,就是需要额外引入 css,比如 Antd 需要这样显示引入:")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Button "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd/lib/button'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd/lib/button/style'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("为了解决这种尴尬的情况,Antd 用 "),e("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel 插件"),e("OutboundLink")],1),t._v("将这种情况 Hack 掉了")]),t._v(" "),e("p",[t._v("而"),e("code",[t._v("material-ui")]),t._v("并不存在这种情况,他不需要显示引入 css,这个最流行的 React 前端组件库里面只有 js 和 ts 两种代码,并不存在 css 相关的代码,为什么呢?")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/20/167c7ebf0abe55f9?w=983&h=292&f=png&s=56375",alt:""}})]),t._v(" "),e("p",[t._v("他们用 "),e("code",[t._v("jss")]),t._v(" 作为css-in-js 的解决方案,jsx 的引入已经将 js 和 html 耦合,css-in-js将 css 也耦合进去,此时组件便不需要显示引入 css,而是直接引用 js 即可.")]),t._v(" "),e("p",[t._v("这不是退化到史前前端那种写内联样式的时代了吗?")]),t._v(" "),e("p",[t._v("并不是,史前前端的内联样式是整个项目耦合的状态,当然要被抛弃到历史的垃圾堆中,后来的样式和逻辑分离,实际上是以页面为维度将 js css html 解耦的过程,如今的时代是组件化的时代了,jsx 已经将 js 和 html 框定到一个组件中,css 依然处于分离状态,这就导致了每次引用组件却还需要显示引入 css,css-in-js 正式彻底组件化的解决方案.")]),t._v(" "),e("p",[t._v("当然,我个人目前在用 styled-components,其优点"),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/26878157",target:"_blank",rel:"noopener noreferrer"}},[t._v("引用"),e("OutboundLink")],1),t._v("如下:")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("首先，styled-components 所有语法都是标准 css 语法，同时支持 scss 嵌套等常用语法，覆盖了所有 css 场景。")])]),t._v(" "),e("li",[e("p",[t._v("在样式复写场景下，styled-components 支持在任何地方注入全局 css，就像写普通 css 一样")])]),t._v(" "),e("li",[e("p",[t._v("styled-components 支持自定义 className，两种方式，一种是用 "),e("a",{attrs:{href:"https://github.com/styled-components/babel-plugin-styled-components",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel 插件"),e("OutboundLink")],1),t._v(', 另一种方式是使用 styled.div.withConfig({ componentId: "prefix-button-container" }) 相当于添加 className="prefix-button-container"')])]),t._v(" "),e("li",[e("p",[t._v("className 语义化更轻松，这也是 class 起名的初衷")])]),t._v(" "),e("li",[e("p",[t._v('更适合组件库使用，直接引用 import "module" 即可，否则你有三条路可以走：像 antd 一样，单独引用 css，你需要给 node_modules 添加 css-loader；组件内部直接 import css 文件，如果任何业务项目没有 css-loader 就会报错；组件使用 scss 引用，所有业务项目都要配置一份 scss-loader 给 node_modules；这三种对组件库来说，都没有直接引用来的友好')])]),t._v(" "),e("li",[e("p",[t._v("当你写一套组件库，需要单独发包，又有统一样式的配置文件需求，如果这个配置文件是 js 的，所有组件直接引用，对外完全不用关注。否则，如果是 scss 配置文件，摆在面前还是三条路：每个组件单独引用 scss 文件，需要每个业务项目给 node_modules 添加 scss-loader（如果业务用了 less，还要装一份 scss 是不）；或者业务方只要使用了你的组件库，就要在入口文件引用你的 scss 文件，比如你的组件叫 button，scss 可能叫 common-css，别人听都没听过，还要查文档；或者业务方在 webpack 配置中单独引用你的 common-css，这也不科学，如果用了3个组件库，天天改 webpack 配置也很不方便。")])]),t._v(" "),e("li",[e("p",[t._v("当 css 设置了一半样式，另一半真的需要 js 动态传入，你不得不 css + css-in-js 混合使用，项目久了，维护的时候发现某些 css-in-js 不变了，可以固化在 css 里，css 里固定的值又因为新去求变得可变了，你又得拿出来放在 css-in-js 里，实践过就知道有多么烦心。")])])]),t._v(" "),e("h3",{attrs:{id:"js-解决方案"}},[t._v("js 解决方案")]),t._v(" "),e("p",[t._v("选 Typescript ,因为巨硬大法好...")]),t._v(" "),e("p",[t._v("可以看看知乎问题下我的回答"),e("a",{attrs:{href:"https://www.zhihu.com/question/273619114/answer/369180721",target:"_blank",rel:"noopener noreferrer"}},[t._v("你为什么不用 Typescript"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("或者看此文"),e("a",{attrs:{href:"https://juejin.im/post/59c46bc86fb9a00a4636f939",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript体系调研报告"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"如何快速启动一个组件库项目"}},[t._v("如何快速启动一个组件库项目")]),t._v(" "),e("p",[t._v("组件的具体实现部分当然是组件库的核心,但是在现代前端库中其他部分也必不可少,我们需要一堆工具来辅助我们开发,例如编译工具、代码检测工具、打包工具等等。")]),t._v(" "),e("h3",{attrs:{id:"打包工具-rollup-vs-webpack"}},[t._v("打包工具(rollup vs webpack)")]),t._v(" "),e("p",[t._v("市面上打包工具数不胜数,最火爆的当然是需要"),e("em",[t._v("配置工程师")]),t._v("专门配置的webpack,但是在类库开发领域它有一个强大的对手就是 rollup。")]),t._v(" "),e("p",[t._v("现代市面上主流的库基本都选择了 rollup 作为打包工具，包括Angular React 和 Vue, 作为基础类库的打包工具 rollup 的优势如下:")]),t._v(" "),e("ul",[e("li",[t._v("Tree Shaking: 自动移除未使用的代码, 输出更小的文件")]),t._v(" "),e("li",[t._v("Scope Hoisting: 所有模块构建在一个函数内, 执行效率更高")]),t._v(" "),e("li",[t._v("Config 文件支持通过 ESM 模块格式书写\n可以一次输出多种格式:")]),t._v(" "),e("li",[t._v("模块规范: IIFE, AMD, CJS, UMD, ESM\nDevelopment 与 production 版本: .js, .min.js")])]),t._v(" "),e("p",[t._v("虽然上面部分功能已经被 webpack 实现了,但是 rollup 明显引入得更早,而Scope Hoisting更是杀手锏,由于 webpack 不得不在打包代码中构建模块系统来适应 app 开发(模块系统对于单一类库用处很小),Scope Hoisting将模块构建在一个函数内的做法更适合类库的打包.")]),t._v(" "),e("h3",{attrs:{id:"代码检测"}},[t._v("代码检测")]),t._v(" "),e("p",[t._v("由于 JavaScript 各种诡异的特性和大型前端项目的出现,代码检测工具已经是前端开发者的标配了,Douglas Crockford最早于2002创造出了 JSLint,但是其无法拓展,具有极强的Douglas Crockford个人色彩,Anton Kovalyov由于无法忍受 JSLint 无法拓展的行为在2011年发布了可拓展的JSHint,一时之间JSHint成为了前端代码检测的流行解决方案.")]),t._v(" "),e("p",[t._v("随后的2013年,Nicholas C. Zakas鉴于JSHint拓展的灵活度不够的问题开发了全新的基于 AST 的 Lint 工具 ESLint,并随着 ES6的流行统治了前端界,ESLint 基于Esprima进行 JavaScript 解析的特性极易拓展,JSHint 在很长一段时间无法支持 ES6语法导致被 ESLint 超越.")]),t._v(" "),e("p",[t._v("但是在 Typescript 领域 ESLint 却处于弱势地位,TSLint 的出现要比 ESLint 正式支持 Typescript 早很多,"),e("s",[t._v("目前 TSLint 似乎是 TS 的事实上的代码检测工具")]),t._v(".")]),t._v(" "),e("blockquote",[e("p",[t._v("注: 文章成文较早,我也没想到前阵子 TS 官方钦点了 ESLint,TSLint 失宠了,面向未来的官方标配的代码检测工具肯定是 ESLint 了,但是 TSLint 目前依然被大量使用,现在仍然可以放心使用")])]),t._v(" "),e("p",[t._v("代码检测工具是一方面,代码检测风格也需要我们做选择,市面上最流行的代码检测风格应该是 Airbnb 出品的"),e("code",[t._v("eslint-config-airbnb")]),t._v(",其最大的特点就是极其严格,没有给开发者任何选择的余地,当然在大型前端项目的开发中这种严格的代码风格是有利于协作的,但是作为一个类库的代码检测工具而言并不适合,所以我们选择了"),e("code",[t._v("eslint-config-standard")]),t._v("这种相对更为宽松的代码检测风格.")]),t._v(" "),e("h3",{attrs:{id:"commit-规范"}},[t._v("commit 规范")]),t._v(" "),e("p",[t._v("以下两种 commit 哪个更严谨且易于维护?\n"),e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/20/167ca31603fcf26e?w=519&h=395&f=png&s=72712",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/20/167ca324293d58e5?w=348&h=271&f=png&s=14674",alt:""}})]),t._v(" "),e("p",[t._v("最开始使用 commit 的时候我也经常犯下图的错误,直到看到很多明星类库的 commit 才意识到自己的错误,写好 commit message 不仅有助于他人 review, 还可以有效的输出 CHANGELOG, 对项目的管理实际至关重要.")]),t._v(" "),e("p",[t._v("目前流行的方案是 Angular 团队的"),e("a",{attrs:{href:"https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范"),e("OutboundLink")],1),t._v(",其关于 head 的大致规范如下:")]),t._v(" "),e("ul",[e("li",[t._v("type: commit 的类型")]),t._v(" "),e("li",[t._v("feat: 新特性")]),t._v(" "),e("li",[t._v("fix: 修改问题")]),t._v(" "),e("li",[t._v("refactor: 代码重构")]),t._v(" "),e("li",[t._v("docs: 文档修改")]),t._v(" "),e("li",[t._v("style: 代码格式修改, 注意不是 css 修改")]),t._v(" "),e("li",[t._v("test: 测试用例修改")]),t._v(" "),e("li",[t._v("chore: 其他修改, 比如构建流程, 依赖管理.")]),t._v(" "),e("li",[t._v("scope: commit 影响的范围, 比如: route, component, utils, build...")]),t._v(" "),e("li",[t._v("subject: commit 的概述, 建议符合  50/72 formatting")]),t._v(" "),e("li",[t._v("body: commit 具体修改内容, 可以分为多行, 建议符合 50/72 formatting")]),t._v(" "),e("li",[t._v("footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.")])]),t._v(" "),e("p",[t._v("当然规范人们不一定会遵守,我最初知道此类规范的时候也并没有严格遵循,因为人总会偷懒,直到用"),e("code",[t._v("commitizen")]),t._v("将此规范集成到工具流中,每个 commit 就不得不遵循规范了.")]),t._v(" "),e("p",[t._v("我具体参考了这篇文章: "),e("a",{attrs:{href:"https://juejin.im/post/5afc5242f265da0b7f44bee4",target:"_blank",rel:"noopener noreferrer"}},[t._v("优雅的提交你的 Git Commit Message"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"测试工具"}},[t._v("测试工具")]),t._v(" "),e("p",[t._v("业务开发中由于前端需求变动频繁的特性,导致前端对测试的要求并没有后端那么高,后端业务逻辑一旦定型变动很少,比较适合测试.")]),t._v(" "),e("p",[t._v("但是基础类库作为被反复依赖的模块和较为稳定的需求是必须做测试的,前端测试库也可谓是种类繁多了,经过比对之后我还是选择了目前最流行也是被三大框架同时选择了的 Jest 作为测试工具,其优点很明显:")]),t._v(" "),e("ol",[e("li",[t._v("开箱即用,内置断言、测试覆盖率工具,如果你用 MoCha 那可得自己手动配置 n 多了")]),t._v(" "),e("li",[t._v("快照功能,Jest 可以利用其特有的快照测试功能，通过比对 UI 代码生成的快照文件")]),t._v(" "),e("li",[t._v("速度优势,Jest 的测试用例是并行执行的，而且只执行发生改变的文件所对应的测试，提升了测试速度")])]),t._v(" "),e("h3",{attrs:{id:"其它"}},[t._v("其它")]),t._v(" "),e("p",[t._v("当然以上是主要工具的选择,还有一些比如:")]),t._v(" "),e("ul",[e("li",[t._v("代码美化工具 prettier,解放人肉美化,同时利于不同人协作的风格一致")]),t._v(" "),e("li",[t._v("持续集成工具 travis-ci,解放人肉测试 lint,利于保证每次 push 的可靠程度")])]),t._v(" "),e("h3",{attrs:{id:"快速启动脚手架"}},[t._v("快速启动脚手架")]),t._v(" "),e("p",[t._v("那么以上这么多配置难道要我们每次都自己写吗?组件的具体实现才是组件库的核心,我们为什么要花这么多时间在配置上面?")]),t._v(" "),e("p",[t._v("我们在建立 APP 项目时通常会用到框架官方提供的脚手架,比如 React 的 create-react-app,Angular 的 Angular-Cli 等等,那么能不能有一个专门用于组件开发的快速启动的脚手架呢?")]),t._v(" "),e("p",[t._v("有的,我最近开发了一款快速启动组件库开发的命令行工具--"),e("a",{attrs:{href:"https://github.com/xiaomuzhu/create-component",target:"_blank",rel:"noopener noreferrer"}},[t._v("create-component"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("利用")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("create-component init <name>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("来快速启动项目,我们提供了丰富的可选配置,只要你做好技术选型后,根据提示去选择配置即可,create-component 会自动根据配置生成脚手架,其灵感就来源于 vue-cli和 Angular-cli.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/20/167ca5470645ad89?w=421&h=242&f=png&s=104820",alt:""}})]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"参考链接"}},[t._v("参考链接")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/akiran/react-slick",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-slick"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29034015",target:"_blank",rel:"noopener noreferrer"}},[t._v("复杂组件设计"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/26878157",target:"_blank",rel:"noopener noreferrer"}},[t._v("精读《请停止 css-in-js 的行为》"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/34218678",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 rollup"),e("OutboundLink")],1)])]),t._v(" "),e("hr")])},[],!1,null,null,null);r.options.__file="componentCli.md";s.default=r.exports}}]);