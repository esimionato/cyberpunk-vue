(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{260:function(e,t,n){"use strict";var s,c,i=n(268),a=RegExp.prototype.exec,r=String.prototype.replace,o=a,l=(s=/a/,c=/b*/g,a.call(s,"a"),a.call(c,"a"),0!==s.lastIndex||0!==c.lastIndex),u=void 0!==/()??/.exec("")[1];(l||u)&&(o=function(e){var t,n,s,c,o=this;return u&&(n=new RegExp("^"+o.source+"$(?!\\s)",i.call(o))),l&&(t=o.lastIndex),s=a.call(o,e),l&&s&&(o.lastIndex=o.global?s.index+s[0].length:t),u&&s&&s.length>1&&r.call(s[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(s[c]=void 0)})),s}),e.exports=o},263:function(e,t,n){var s=n(26),c=n(17);e.exports=function(e){return function(t,n){var i,a,r=String(c(t)),o=s(n),l=r.length;return o<0||o>=l?e?"":void 0:(i=r.charCodeAt(o))<55296||i>56319||o+1===l||(a=r.charCodeAt(o+1))<56320||a>57343?e?r.charAt(o):i:e?r.slice(o,o+2):a-56320+(i-55296<<10)+65536}}},264:function(e,t,n){var s=n(28),c=n(6)("toStringTag"),i="Arguments"==s(function(){return arguments}());e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),c))?n:i?s(t):"Object"==(a=s(t))&&"function"==typeof t.callee?"Arguments":a}},265:function(e,t,n){"use strict";var s=n(263)(!0);e.exports=function(e,t,n){return t+(n?s(e,t).length:1)}},266:function(e,t,n){"use strict";var s=n(264),c=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var i=n.call(e,t);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==s(e))throw new TypeError("RegExp#exec called on incompatible receiver");return c.call(e,t)}},267:function(e,t,n){"use strict";n(269);var s=n(10),c=n(3),i=n(9),a=n(17),r=n(6),o=n(260),l=r("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var h=r(e),v=!i((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),p=v?!i((function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[l]=function(){return n}),n[h](""),!t})):void 0;if(!v||!p||"replace"===e&&!u||"split"===e&&!d){var f=/./[h],m=n(a,h,""[e],(function(e,t,n,s,c){return t.exec===o?v&&!c?{done:!0,value:f.call(t,n,s)}:{done:!0,value:e.call(n,t,s)}:{done:!1}})),g=m[0],x=m[1];s(String.prototype,e,g),c(RegExp.prototype,h,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}}},268:function(e,t,n){"use strict";var s=n(8);e.exports=function(){var e=s(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},269:function(e,t,n){"use strict";var s=n(260);n(27)({target:"RegExp",proto:!0,forced:s!==/./.exec},{exec:s})},270:function(e,t,n){var s=n(11).f,c=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in c||n(4)&&s(c,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},273:function(e,t,n){"use strict";var s=n(8),c=n(40),i=n(41),a=n(26),r=n(265),o=n(266),l=Math.max,u=Math.min,d=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;n(267)("replace",2,(function(e,t,n,p){return[function(s,c){var i=e(this),a=null==s?void 0:s[t];return void 0!==a?a.call(s,i,c):n.call(String(i),s,c)},function(e,t){var c=p(n,e,this,t);if(c.done)return c.value;var d=s(e),h=String(this),v="function"==typeof t;v||(t=String(t));var m=d.global;if(m){var g=d.unicode;d.lastIndex=0}for(var x=[];;){var C=o(d,h);if(null===C)break;if(x.push(C),!m)break;""===String(C[0])&&(d.lastIndex=r(h,i(d.lastIndex),g))}for(var y,_="",w=0,S=0;S<x.length;S++){C=x[S];for(var I=String(C[0]),b=l(u(a(C.index),h.length),0),k=[],A=1;A<C.length;A++)k.push(void 0===(y=C[A])?y:String(y));var T=C.groups;if(v){var E=[I].concat(k,b,h);void 0!==T&&E.push(T);var $=String(t.apply(void 0,E))}else $=f(I,h,b,k,T,t);b>=w&&(_+=h.slice(w,b)+$,w=b+I.length)}return _+h.slice(w)}];function f(e,t,s,i,a,r){var o=s+e.length,l=i.length,u=v;return void 0!==a&&(a=c(a),u=h),n.call(r,u,(function(n,c){var r;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,s);case"'":return t.slice(o);case"<":r=a[c.slice(1,-1)];break;default:var u=+c;if(0===u)return n;if(u>l){var h=d(u/10);return 0===h?n:h<=l?void 0===i[h-1]?c.charAt(1):i[h-1]+c.charAt(1):n}r=i[u-1]}return void 0===r?"":r}))}}))},320:function(e,t,n){},321:function(e,t,n){},404:function(e,t,n){"use strict";var s=n(320);n.n(s).a},405:function(e,t,n){"use strict";var s=n(321);n.n(s).a},407:function(e,t,n){},447:function(e,t,n){"use strict";n(42),n(270),n(43);var s={name:"CCarousel",components:{CIcon:n(261).a},props:{height:{type:[String,Number]},selected:{type:[String,Number]},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:2e3},reverseAutoplay:{type:Boolean,default:!1}},data:function(){return{childrenLength:0,lastSelectedIndex:void 0,timerId:void 0,startTouch:null}},computed:{styles:function(){return{height:"".concat(this.height,"px")}},names:function(){return this.items.map((function(e){return e.name}))},selectedIndex:function(){return this.names.indexOf(this.selected)||0},items:function(){return this.$children.filter((function(e){return"CCarouselItem"===e.$options.name}))}},mounted:function(){this.updateChildren(),this.playAutomatically(),this.childrenLength=this.items.length},updated:function(){this.updateChildren()},methods:{onMouseEnter:function(){this.pauseAutomatically()},onMouseLeave:function(){this.playAutomatically()},onTouchStart:function(e){this.pauseAutomatically(),e.touches.length>1||(this.startTouch=e.touches[0])},onTouchEnd:function(e){var t=this,n=e.changedTouches[0],s=this.startTouch,c=s.clientX,i=s.clientY,a=n.clientX,r=n.clientY;Math.sqrt(Math.pow(a-c,2)+Math.pow(r-i,2))/Math.abs(r-i)>2&&(a>c?this.select(this.selectedIndex-1):this.select(this.selectedIndex+1)),this.$nextTick((function(){t.playAutomatically()}))},getSelected:function(){var e=this.$children[0];return this.selected||e.name},select:function(e){this.lastSelectedIndex=this.selectedIndex,-1===e&&(e=this.names.length-1),e===this.names.length&&(e=0),this.$emit("update:selected",this.names[e])},playAutomatically:function(){var e=this;if(this.autoplay&&!this.timerId){this.timerId=setTimeout((function t(){var n=e.names.indexOf(e.getSelected())+(e.reverseAutoplay?-1:1);e.select(n),e.timerId=setTimeout(t,e.interval)}),this.interval)}},pauseAutomatically:function(){window.clearTimeout(this.timerId),this.timerId=void 0},updateChildren:function(){var e=this,t=this.getSelected();this.items.forEach((function(n){var s=e.selectedIndex<=e.lastSelectedIndex;(e.timerId||e.startTouch)&&(e.lastSelectedIndex===e.items.length-1&&0===e.selectedIndex&&(s=!1),0===e.lastSelectedIndex&&e.selectedIndex===e.items.length-1&&(s=!0)),n.reverse=s,e.$nextTick((function(){n.selected=t}))}))}}},c=(n(404),n(2)),i=Object(c.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-carousel",style:e.styles,on:{mouseenter:e.onMouseEnter,mouseleave:e.onMouseLeave,touchstart:e.onTouchStart,touchend:e.onTouchEnd}},[n("div",{staticClass:"c-carousel-wrapper"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"c-carousel-dots"},e._l(e.childrenLength,(function(t){return n("span",{key:t,class:{active:e.selectedIndex===t-1},attrs:{"data-index":t.toString()},on:{click:function(n){return e.select(t-1)}}})})),0),e._v(" "),n("div",{staticClass:"c-carousel-action"},[n("span",{staticClass:"button",attrs:{"data-button":"left"},on:{click:function(t){return e.select(e.selectedIndex-1)}}},[n("c-icon",{attrs:{type:"arrow-lift"}})],1),e._v(" "),n("span",{staticClass:"button",attrs:{"data-button":"right"},on:{click:function(t){return e.select(e.selectedIndex+1)}}},[n("c-icon",{attrs:{type:"arrow-right"}})],1)])])}),[],!1,null,"c8ef1890",null);t.a=i.exports},448:function(e,t,n){"use strict";n(270),n(43);var s={name:"CCarouselItem",props:{name:{type:[String,Number],required:!0}},data:function(){return{selected:void 0,reverse:!0}},computed:{visible:function(){return this.selected===this.name}}},c=(n(405),n(2)),i=Object(c.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"carousel"}},[this.visible?t("div",{staticClass:"c-carousel-item",class:{reverse:this.reverse}},[this._t("default")],2):this._e()])}),[],!1,null,"245214da",null);t.a=i.exports},533:function(e,t,n){"use strict";var s=n(407);n.n(s).a},579:function(e,t,n){"use strict";n.r(t);var s=n(447),c=n(448),i=n(261),a={name:"Demo",mixins:[n(271).a],components:{CCarousel:s.a,CCarouselItem:c.a,CIcon:i.a},data:function(){return{selectedCarousel:"1",selectedCarousel2:"1",selectedCarousel3:"1",codeStr:'\n        <c-carousel :selected.sync="selectedCarousel" :autoplay="false">\n          <c-carousel-item :name="index + \'\'" v-for="index in 6" :key="index">\n            <div class="carousel-item">\n              <h1>{{index}}</h1>\n            </div>\n          </c-carousel-item>\n        </c-carousel>\n      ',codeStr2:'\n        <c-carousel :selected.sync="selectedCarousel2">\n          <c-carousel-item :name="index + \'\'" v-for="index in 6" :key="index">\n            <div class="carousel-item">\n              <h1>{{index}}</h1>\n            </div>\n          </c-carousel-item>\n        </c-carousel>\n      ',codeStr3:'\n        <c-carousel :selected.sync="selectedCarousel3" reverseAutoplay>\n          <c-carousel-item :name="index + \'\'" v-for="index in 6" :key="index">\n            <div class="carousel-item">\n              <h1>{{index}}</h1>\n            </div>\n          </c-carousel-item>\n        </c-carousel>\n      '}}},r=(n(533),n(2)),o=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("h2",[e._v("Basic usage")]),e._v(" "),n("p",[e._v("In a limited space, play the same type of pictures, text and other content in a loop.")]),e._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[n("c-carousel",{attrs:{selected:e.selectedCarousel,autoplay:!1},on:{"update:selected":function(t){e.selectedCarousel=t}}},e._l(6,(function(t){return n("c-carousel-item",{key:t,attrs:{name:t+""}},[n("div",{staticClass:"carousel-item"},[n("h1",[e._v(e._s(t))])])])})),1)],1),e._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"html"},[e._v(e._s(e.parseCode(e.codeStr)))])])])]),e._v(" "),n("div",{staticClass:"lock-code",on:{click:function(t){return e.showCode(0)}}},[n("c-icon",{staticClass:"icon-down",attrs:{type:e.isShowCode(0,"icon")}}),e._v(" "),n("span",{staticClass:"lock-code-word"},[e._v(e._s(e.isShowCode(0,"text")))])],1)]),e._v(" "),n("h2",[e._v("Auto play")]),e._v(" "),n("p",[e._v("The carousel will switch automatically, and the interval can be set in milliseconds.")]),e._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[n("c-carousel",{attrs:{selected:e.selectedCarousel2},on:{"update:selected":function(t){e.selectedCarousel2=t}}},e._l(6,(function(t){return n("c-carousel-item",{key:t,attrs:{name:t+""}},[n("div",{staticClass:"carousel-item"},[n("h1",[e._v(e._s(t))])])])})),1)],1),e._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"html"},[e._v(e._s(e.parseCode(e.codeStr2)))])])])]),e._v(" "),n("div",{staticClass:"lock-code",on:{click:function(t){return e.showCode(1)}}},[n("c-icon",{staticClass:"icon-down",attrs:{type:e.isShowCode(1,"icon")}}),e._v(" "),n("span",{staticClass:"lock-code-word"},[e._v(e._s(e.isShowCode(1,"text")))])],1)]),e._v(" "),n("h2",[e._v("Play in reverse order")]),e._v(" "),n("p",[e._v("The auto play sequence is reversed.")]),e._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[n("c-carousel",{attrs:{selected:e.selectedCarousel3,reverseAutoplay:""},on:{"update:selected":function(t){e.selectedCarousel3=t}}},e._l(6,(function(t){return n("c-carousel-item",{key:t,attrs:{name:t+""}},[n("div",{staticClass:"carousel-item"},[n("h1",[e._v(e._s(t))])])])})),1)],1),e._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"html"},[e._v(e._s(e.parseCode(e.codeStr3)))])])])]),e._v(" "),n("div",{staticClass:"lock-code",on:{click:function(t){return e.showCode(2)}}},[n("c-icon",{staticClass:"icon-down",attrs:{type:e.isShowCode(2,"icon")}}),e._v(" "),n("span",{staticClass:"lock-code-word"},[e._v(e._s(e.isShowCode(2,"text")))])],1)])])}),[],!1,null,"0249bdc0",null);t.default=o.exports}}]);