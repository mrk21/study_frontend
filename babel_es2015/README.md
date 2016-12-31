# Babel ES2015

## How to start

1. `nodenv install`
2. `npm install`
3. `npm start`

## Components

### Build Tool

* npm script
* gulp

### JavaScript Language

* Babel

```
Babel => JS
```

## Refer to

### Babel

* Babel
    * [Babelを使って次期JavaScript、ES6を体験しよう : アシアルブログ](http://blog.asial.co.jp/1434)
* babel-preset-es2015
    * [gulpfileをES6で書く - Qiita](http://qiita.com/kosuke_nishaya/items/cf7f8a2dbb8e47d064fd)
* babel-plugin-transform-runtime
    * [babel/packages/babel-plugin-transform-runtime at master · babel/babel](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime)
    * [babel-polyfillの導入方法につきまして · Issue #9 · frontainer/frontplate](https://github.com/frontainer/frontplate/issues/9#issuecomment-188496865)
    * [babel-polyfillとbabel-runtimeの使い分けに迷ったので調べた - Qiita](http://qiita.com/inuscript/items/d2a9d5d4daedaacff924)
* babel-preset-react
    * [Babelで書いたReactのJSXがNo Display Nameになる - はらへり日記](http://sota1235.hatenablog.com/entry/2015/11/07/132832)

### ES2015

* [lukehoban/es6features: Overview of ECMAScript 6 features](https://github.com/lukehoban/es6features)
* [ES2015 (ES6)についてのまとめ - Qiita](http://qiita.com/tuno-tky/items/74ca595a9232bcbcd727)
* [ECMAScript 2015(ES6)の概要と次世代JavaScriptの新たな機能 | HTML5Experts.jp](https://html5experts.jp/1000ch/16984/)

#### iterator/generator/symbol

* [JavaScript の イテレータ を極める！ - Qiita](http://qiita.com/kura07/items/cf168a7ea20e8c2554c6)
* [JavaScript の ジェネレータ を極める！ - Qiita](http://qiita.com/kura07/items/d1a57ea64ef5c3de8528)
* [ES2015新機能: ジェネレータをマスターしたい - Qiita](http://qiita.com/niisan-tokyo/items/562b1ec8b059b81e6d85)
* [最近のjs非同期処理 PromiseとGeneratorの共存 - Qiita](http://qiita.com/kidach1/items/d997df84a0ede39d76ad)
* [ES6時代のJavaScript - クックパッド開発者ブログ](http://techlife.cookpad.com/entry/2015/02/02/094607)
* [tj/co: The ultimate generator based flow-control goodness for nodejs (supports thunks, promises, etc)](https://github.com/tj/co)
* [ES6, ES2015 : for..of loop](http://putaindecode.io/en/articles/js/es2015/for-of/)
* [ECMAScript6にシンボルができた理由 - Qiita](http://qiita.com/naruto/items/312adeb6145eb6221be7)

#### set

* [Set - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set)

#### map

* [Map - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map)

#### weak set

* [WeakSet - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
* [ECMAScript 6: maps and sets](http://www.2ality.com/2015/01/es6-maps-sets.html)

#### weak map

* [WeakMap - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

#### proxy

* [Direct Proxiesでmethod missing的なことをやる - Qiita](http://qiita.com/hokaccha/items/3a3ea6180e94e70bc335)
* [【今更ES2015を追ってみるシリーズ 2】Proxy編 - 俺、サービス売って家買うんだ](http://www.ie-kau.net/entry/2015/10/21/【今更ES2015を追ってみるシリーズ_2】Proxy編)
* [Proxy - Learn ES2015 · Babel](http://babeljs.io/docs/learn-es2015/#proxies)

#### Reflect API

* [Reflect APIが実装された - JS.next](http://js-next.hatenablog.com/entry/2015/03/24/190111)

#### ArrayBuffer/ArrayBufferView

* [ArrayBuffer - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
* [[JavaScript] ArrayBufferについて調べてみた - Qiita](http://qiita.com/edo_m18/items/612d2b31498d22d13b7b)
* [DataView - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/DataView)

### ES2016

* [JavaScript最新仕様ES2016がリリース、新機能Array.prototype.includes()メソッドとは一体何か？ - Qiita](http://qiita.com/tonkotsuboy_com/items/e88e4c4d8006ef67782c)

### ES2017

* [bettiolo/babel-preset-es2017: Babel preset to make node compatible with ES2015, ES2016 and ES2017 stage 3 and stage 4](https://github.com/bettiolo/babel-preset-es2017)

### ES-next

* [hemanth/es-next](https://github.com/hemanth/es-next)
* [Class Property Declarations](https://github.com/hemanth/es-next#class-property-declarations)
* [Rest and Spread properties](https://github.com/hemanth/es-next#rest-and-spread-properties)
* [Async Functions - Qiita](http://qiita.com/berlysia/items/ce14f023f10100e35d35)

#### Stage-2: Promise.prototype.finally

* [ECMAScript 6 promises (2/2): the API](http://www.2ality.com/2014/10/es6-promises-api.html)

#### Stage-2: Template literal Revision

* [tc39/proposal-template-literal-revision](https://github.com/tc39/proposal-template-literal-revision)
* [ES proposal: Template Literal Revision](http://www.2ality.com/2016/09/template-literal-revision.html)
* [Template Literal Revision](https://tc39.github.io/proposal-template-literal-revision/)

#### Stage-2: Asynchronous iterator

* [ES proposal: asynchronous iteration](http://www.2ality.com/2016/10/asynchronous-iteration.html)

#### Stage-2: Shared Memory and Atomics

* [ECMAScript Shared Memory and Atomics](https://tc39.github.io/ecmascript_sharedmem/shmem.html)

#### Stage-2: function.sent Meta Property

* [function.sentメタプロパティが実装された - JS.next](http://js-next.hatenablog.com/entry/2016/01/29/184411)
* [Syntax function.sent · Babel](https://babeljs.io/docs/plugins/syntax-function-sent/)

#### Stage-3: global

* [System.global (ES.next stage1) - Qiita](http://qiita.com/ConquestArrow/items/f303ce0990049c8c9946)
* [tc39/proposal-global: ECMAScript Proposal, specs, and reference implementation for `global`](https://github.com/tc39/proposal-global)

#### Stage-3: Function.prototype.toString revision

* [ES proposal: Function.prototype.toString revision](http://www.2ality.com/2016/08/function-prototype-tostring.html)
* [azuさんのツイート: "そういえばついにFunction#toStringの挙動が規定されるっぽですよ "Function-prototype.toString revision" https://t.co/BGYvtuR5h9"](https://twitter.com/azu_re/status/722337687013699585)

### decorators

* [Babel6でreact-reduxの@connectを実現する。 - Qiita](http://qiita.com/hikaruworld@github/items/ca0a8c091cd199d1f1bb)
* [全力で ES Decorator使ってみた - Qiita](http://qiita.com/mizchi/items/6bdf9d100f564a5c5b08)
* [Exploring EcmaScript Decorators – Google Developers – Medium](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841)
* [wycats/javascript-decorators](https://github.com/wycats/javascript-decorators)
* [jayphelps/core-decorators.js: Library of stage-0 JavaScript decorators (aka ES2016/ES7 decorators but not accurate)](https://github.com/jayphelps/core-decorators.js)

#### defineProperty

* [Object.defineProperty() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

### ESLint

* [ESLint 最初の一歩 - Qiita](http://qiita.com/mysticatea/items/f523dab04a25f617c87d)
* [[GitHub 奮闘記] gulp で eslint 設定とコード チェック環境の共有 - Qiita](http://qiita.com/ynunokawa/items/5471ff84c83104450ecb)
* [eslint-config-airbnbの導入 - Qiita](http://qiita.com/bohebohechan/items/0332b557f80150e714de)
* [ESLintについてのメモ - Qiita](http://qiita.com/makotot/items/822f592ff8470408be18)

#### babel-eslint

* [サイでもわかる？！ ESLint 導入 - |> Weeeeeeb](http://kuriya0909.hatenablog.com/entry/2015/11/13/105846)

### Gulp

* browser-sync
    * [Browsersyncを利用してお手軽ブラウザ確認環境をつくろう - メドピア開発者ブログ](http://tech.medpeer.co.jp/entry/2015/06/09/071758)
* require-dir
    * [gulpタスクの分割 - Qiita](http://qiita.com/dhun/items/c8633800097f1e7ecf70)
* del
    * [ファイル削除にはgulpプラグインを使わない - Qiita](http://qiita.com/shinnn/items/bd7ad79526eff37cebd0)
* gulp-help
    * [chmontgomery/gulp-help: Adds a default help task to gulp and provides the ability to add custom help messages to your gulp tasks](https://github.com/chmontgomery/gulp-help)
