(self.webpackChunkmy_demo=self.webpackChunkmy_demo||[]).push([[989],{7757:function(t,e,r){t.exports=r(5666)},1624:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(u){return void r(u)}c.done?e(l):Promise.resolve(l).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,l,"next",t)}function l(t){n(i,o,a,c,l,"throw",t)}c(void 0)}))}}r.r(e),r.d(e,{default:function(){return u}});var a=r(7757),i=r.n(a),c=r(7294),l=r(341);function u(){var t=function(){var t=o(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[{id:1,title:"data1"},{id:2,title:"data2"}],t.abrupt("return",e);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e=(0,c.useState)([]),r=e[0],n=e[1];(0,c.useEffect)((function(){a()}),[]);var a=function(){var e=o(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,t();case 3:e.t1=e.sent,(0,e.t0)(e.t1),console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.createElement(c.Fragment,null,c.createElement(l.Z,null,c.createElement("title",null,"demo page"),c.createElement("section",null,c.createElement("p",null,"This is React Demo App")),c.createElement("section",null,c.createElement("h2",null,"Blog"),c.createElement("ul",null,r.map((function(t){var e=t.id,r=t.title;return c.createElement("li",{key:e},c.createElement("a",null,e,". ",r))}))))))}},6197:function(t,e,r){"use strict";r.d(e,{Z:function(){return g}});var n=r(2122),o=r(9756),a=r(7294),i=r(6010),c=r(6742),l=r(9306),u=r(4996),s=r(3919),f="footerLogoLink_qW4Z",h="imgSize_1pPw",m=r(8465),p=r(8617),v=["to","href","label","prependBaseUrlToHref"];function y(t){var e=t.to,r=t.href,i=t.label,l=t.prependBaseUrlToHref,f=(0,o.Z)(t,v),h=(0,u.Z)(e),m=(0,u.Z)(r,{forcePrependBaseUrl:!0});return a.createElement(c.Z,(0,n.Z)({className:"footer__link-item"},r?{href:l?m:r}:{to:h},f),r&&!(0,s.Z)(r)?a.createElement("span",null,i,a.createElement(p.Z,null)):i)}var d=function(t){var e=t.sources,r=t.alt;return a.createElement(m.Z,{className:"footer__logo "+h,alt:r,sources:e})};var g=function(){var t=(0,l.LU)().footer,e=t||{},r=e.copyright,n=e.links,o=void 0===n?[]:n,s=e.logo,h=void 0===s?{}:s,m={light:(0,u.Z)(h.src),dark:(0,u.Z)(h.srcDark||h.src)};return t?a.createElement("footer",{className:(0,i.Z)("footer",{"footer--dark":"dark"===t.style})},a.createElement("div",{className:"container"},o&&o.length>0&&a.createElement("div",{className:"row footer__links"},o.map((function(t,e){return a.createElement("div",{key:e,className:"col footer__col"},null!=t.title?a.createElement("div",{className:"footer__title"},t.title):null,null!=t.items&&Array.isArray(t.items)&&t.items.length>0?a.createElement("ul",{className:"footer__items"},t.items.map((function(t,e){return t.html?a.createElement("li",{key:e,className:"footer__item",dangerouslySetInnerHTML:{__html:t.html}}):a.createElement("li",{key:t.href||t.to,className:"footer__item"},a.createElement(y,t))}))):null)}))),(h||r)&&a.createElement("div",{className:"footer__bottom text--center"},h&&(h.src||h.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},h.href?a.createElement(c.Z,{href:h.href,className:f},a.createElement(d,{alt:h.alt,sources:m})):a.createElement(d,{alt:h.alt,sources:m})),r?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:r}}):null))):null}},5666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===m)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var l=s(t,e,r);if("normal"===l.type){if(n=r.done?p:h,l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",m="executing",p="completed",v={};function y(){}function d(){}function g(){}var w={};w[a]=function(){return this};var E=Object.getPrototypeOf,_=E&&E(E(j([])));_&&_!==r&&n.call(_,a)&&(w=_);var L=g.prototype=y.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function r(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function j(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return d.prototype=L.constructor=g,g.constructor=d,d.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(L),l(L,c,"Generator"),L[a]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(Z),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),Z(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;Z(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(r){Function("r","regeneratorRuntime = r")(e)}}}]);