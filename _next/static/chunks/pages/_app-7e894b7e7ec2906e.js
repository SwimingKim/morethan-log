(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{3454:function(e,n,t){"use strict";var o,r;e.exports=(null===(o=t.g.process)||void 0===o?void 0:o.env)&&"object"===typeof(null===(r=t.g.process)||void 0===r?void 0:r.env)?t.g.process:t(7663)},6840:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(9579)}])},9313:function(e,n,t){"use strict";var o=t(3454),r={profile:{name:"devskim",image:"/avatar.svg",role:"developer",bio:"No pain no gain.",email:"rumex13@naver.com",linkedin:"rumex13",github:"swimingkim",instagram:""},projects:[{name:"devskim blog",href:"https://swimingkim.github.io/blog"}],blog:{title:"devskim blog",description:"welcome to devskim blog!",theme:"light"},link:"https://swimingkim.github.io/blog",since:2022,lang:"en-US",ogImageGenerateURL:"https://og-image-korean.vercel.app",seo:{keywords:["Blog","Website","Notion"]},notionConfig:{pageId:o.env.NOTION_PAGE_ID},googleAnalytics:{enable:!1,config:{measurementId:o.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID||""}},googleSearchConsole:{enable:!1,config:{siteVerification:o.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION||""}},utterances:{enable:!1,config:{repo:"morethanmin/morethan-log","issue-term":"og:title",label:"\ud83d\udcac Utterances"}},cusdis:{enable:!1,config:{host:"https://cusdis.com",appid:""}},isProd:"production"===o.env.VERCEL_ENV};e.exports={CONFIG:r}},185:function(e,n,t){"use strict";t.d(n,{g:function(){return i}});var o=t(7294),r=t(9313),i=function(){var e=r.CONFIG.blog.theme;return"auto"!==e?e:"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};n.Z=function(){(0,o.useEffect)((function(){"object"===typeof document&&("dark"===i()?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"))}),[])}},9579:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var o=t(5893),r=(t(1004),t(7174),t(1098),t(7107),t(951),t(185)),i=t(7294),a=t(1163),c=t(9313),u=c.CONFIG.googleAnalytics.config.measurementId,s=function(){var e=(0,a.useRouter)();return(0,i.useEffect)((function(){var n;if(c.CONFIG.isProd&&(null===c.CONFIG||void 0===c.CONFIG||null===(n=c.CONFIG.googleAnalytics)||void 0===n?void 0:n.enable)){var t=function(e){!function(e){window.gtag("config",u,{page_path:e})}(e)};return e.events.on("routeChangeComplete",t),function(){e.events.off("routeChangeComplete",t)}}}),[e.events]),null},l=t(4298),f=t.n(l),g=function(){var e;return(0,o.jsx)(o.Fragment,{children:!0===(null===c.CONFIG||void 0===c.CONFIG||null===(e=c.CONFIG.googleAnalytics)||void 0===e?void 0:e.enable)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f(),{src:"https://www.googletagmanager.com/gtag/js?id=".concat(c.CONFIG.googleAnalytics.config.measurementId)}),(0,o.jsx)(f(),{strategy:"lazyOnload",id:"ga",children:"window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(c.CONFIG.googleAnalytics.config.measurementId,"', {\n              page_path: window.location.pathname,\n            });")})]})})};function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){m(e,n,t[n])}))}return e}var p=function(e){var n=e.Component,t=e.pageProps,i=n.getLayout||function(e){return e};return(0,r.Z)(),s(),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g,{}),i((0,o.jsx)(n,d({},t)))]})}},1098:function(){},1004:function(){},7174:function(){},7107:function(){},951:function(){},7663:function(e){!function(){var n={162:function(e){var n,t,o=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(o){try{return n.call(null,e,0)}catch(o){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:r}catch(e){n=r}try{t="function"===typeof clearTimeout?clearTimeout:i}catch(e){t=i}}();var c,u=[],s=!1,l=-1;function f(){s&&c&&(s=!1,c.length?u=c.concat(u):l=-1,u.length&&g())}function g(){if(!s){var e=a(f);s=!0;for(var n=u.length;n;){for(c=u,u=[];++l<n;)c&&c[l].run();l=-1,n=u.length}c=null,s=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===i||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function m(e,n){this.fun=e,this.array=n}function d(){}o.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];u.push(new m(e,n)),1!==u.length||s||a(g)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}},t={};function o(e){var r=t[e];if(void 0!==r)return r.exports;var i=t[e]={exports:{}},a=!0;try{n[e](i,i.exports,o),a=!1}finally{a&&delete t[e]}return i.exports}o.ab="//";var r=o(162);e.exports=r}()},1163:function(e,n,t){e.exports=t(880)},4298:function(e,n,t){e.exports=t(3573)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[9774,179],(function(){return n(6840),n(880)}));var t=e.O();_N_E=t}]);