(self.webpackChunke_comerce_vape=self.webpackChunke_comerce_vape||[]).push([[190],{7757:function(t,e,r){t.exports=r(5666)},6968:function(t,e,r){"use strict";function n(t,e,r,n,o,a,c){try{var i=t[a](c),s=i.value}catch(u){return void r(u)}i.done?e(s):Promise.resolve(s).then(n,o)}r.r(e),r.d(e,{default:function(){return G}});var o=r(7757),a=r.n(o),c=r(6125),i=r(7294),s=r(4942),u=r(5987),l=r(5900),f=r.n(l),h=r(9541),p=r(5893),d=["bsPrefix","className","as"];function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){(0,s.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m=["xxl","xl","lg","md","sm","xs"],g=i.forwardRef((function(t,e){var r=t.bsPrefix,n=t.className,o=t.as,a=void 0===o?"div":o,c=(0,u.Z)(t,d),i=(0,h.vE)(r,"row"),s="".concat(i,"-cols"),l=[];return m.forEach((function(t){var e,r=c[t];delete c[t],e=null!=r&&"object"==typeof r?r.cols:r;var n="xs"!==t?"-".concat(t):"";null!=e&&l.push("".concat(s).concat(n,"-").concat(e))})),(0,p.jsx)(a,v(v({ref:e},c),{},{className:f().apply(void 0,[n,i].concat(l))}))}));g.displayName="Row";var b=g,w=r(885),E=["as","bsPrefix","className"],O=["className"];function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){(0,s.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var P=["xxl","xl","lg","md","sm","xs"];var _=i.forwardRef((function(t,e){var r=function(t){var e=t.as,r=t.bsPrefix,n=t.className,o=(0,u.Z)(t,E);r=(0,h.vE)(r,"col");var a=[],c=[];return P.forEach((function(t){var e,n,i,s=o[t];delete o[t],"object"==typeof s&&null!=s?(e=s.span,n=s.offset,i=s.order):e=s;var u="xs"!==t?"-".concat(t):"";e&&a.push(!0===e?"".concat(r).concat(u):"".concat(r).concat(u,"-").concat(e)),null!=i&&c.push("order".concat(u,"-").concat(i)),null!=n&&c.push("offset".concat(u,"-").concat(n))})),[j(j({},o),{},{className:f().apply(void 0,[n].concat(a,c))}),{as:e,bsPrefix:r,spans:a}]}(t),n=(0,w.Z)(r,2),o=n[0],a=o.className,c=(0,u.Z)(o,O),i=n[1],s=i.as,l=void 0===s?"div":s,d=i.bsPrefix,y=i.spans;return(0,p.jsx)(l,j(j({},c),{},{ref:e,className:f()(a,!y.length&&d)}))}));_.displayName="Col";var C=_,L=r(6187),N=r(539),G=function(){var t=(0,i.useState)([]),e=t[0],o=t[1];return(0,i.useEffect)((function(){var t=function(){var t,e=(t=a().mark((function t(){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://vp-store.herokuapp.com/products");case 2:return e=t.sent,t.next=5,e.json();case 5:r=t.sent,o(r);case 7:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,a){var c=t.apply(e,r);function i(t){n(c,o,a,i,s,"next",t)}function s(t){n(c,o,a,i,s,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}();t()}),[]),i.createElement(i.Fragment,null,i.createElement(N.Z,null,i.createElement(L.Z,null,i.createElement(b,null,e.map((function(t,e){return i.createElement(C,{xs:"3",key:e},i.createElement("div",{className:"product"},i.createElement("div",{className:"product__img"},i.createElement(c.S,{alt:"",src:"https://image.made-in-china.com/2f0j00rspavwZArDog/High-Quality-EGO-CE4-EGO-T-CE4-Electronic-Cigarette-650-900-1100mAh.jpg",__imageData:r(2662)})),i.createElement("div",{className:"product__body"},i.createElement("div",{className:"product__body-title"},t.name),i.createElement("div",{className:"product__body-text"},t.prices,"$"))))}))))))}},5666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(k){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),c=new L(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return G()}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var i=P(c,r);if(i){if(i===y)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:h,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,c),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function v(){}function m(){}function g(){}var b={};s(b,a,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(N([])));E&&E!==r&&n.call(E,a)&&(b=E);var O=g.prototype=v.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,c,i){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,i)}),(function(t){r("throw",t,c,i)})):e.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,i)}))}i(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function P(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:G}}function G(){return{value:e,done:!0}}return m.prototype=g,s(O,"constructor",g),s(g,"constructor",m),m.displayName=s(g,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,i,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(j.prototype),s(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var c=new j(u(e,r,n,o),a);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},x(O),s(O,i,"Generator"),s(O,a,(function(){return this})),s(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var s=n.call(c,"catchLoc"),u=n.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},2662:function(t){"use strict";t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8c8","images":{"fallback":{"src":"/static/107c229ad9d8b5b96fd0674c2f0384cb/d7788/High-Quality-EGO-CE4-EGO-T-CE4-Electronic-Cigarette-650-900-1100mAh.jpg","srcSet":"/static/107c229ad9d8b5b96fd0674c2f0384cb/87188/High-Quality-EGO-CE4-EGO-T-CE4-Electronic-Cigarette-650-900-1100mAh.jpg 123w,\\n/static/107c229ad9d8b5b96fd0674c2f0384cb/47ab2/High-Quality-EGO-CE4-EGO-T-CE4-Electronic-Cigarette-650-900-1100mAh.jpg 246w,\\n/static/107c229ad9d8b5b96fd0674c2f0384cb/d7788/High-Quality-EGO-CE4-EGO-T-CE4-Electronic-Cigarette-650-900-1100mAh.jpg 491w","sizes":"(min-width: 491px) 491px, 100vw"},"sources":[{"srcSet":"/static/107c229ad9d8b5b96fd0674c2f0384cb/c23ec/High-Quality-EGO-CE4-EGO-T-CE4-Electronic-Cigarette-650-900-1100mAh.webp 123w,\\n/static/107c229ad9d8b5b96fd0674c2f0384cb/76441/High-Quality-EGO-CE4-EGO-T-CE4-Electronic-Cigarette-650-900-1100mAh.webp 246w,\\n/static/107c229ad9d8b5b96fd0674c2f0384cb/00dbd/High-Quality-EGO-CE4-EGO-T-CE4-Electronic-Cigarette-650-900-1100mAh.webp 491w","type":"image/webp","sizes":"(min-width: 491px) 491px, 100vw"}]},"width":491,"height":492}')}}]);
//# sourceMappingURL=component---src-pages-products-jsx-94b378884f561ea2c38d.js.map