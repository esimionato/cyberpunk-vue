(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{262:function(t,n,e){},270:function(t,n,e){var i=e(11).f,o=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in o||e(4)&&i(o,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},272:function(t,n,e){"use strict";var i={name:"CButton",components:{"c-icon":e(261).a},props:{icon:{type:String},iconPosition:{type:String,default:"left"},loading:{type:Boolean},disabled:{type:Boolean,default:!1},size:{type:String,validator:function(t){return["mini","small","large"].indexOf(t)>=0}}}},o=(e(274),e(2)),r=Object(o.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"c-button",class:[t.iconPosition,{disabled:t.disabled},t.size],on:{click:function(n){return t.$emit("click")}}},[t.icon&&!t.loading?e("c-icon",{staticClass:"c-button-icon",attrs:{type:t.icon}}):t._e(),t._v(" "),t.loading?e("c-icon",{staticClass:"c-button-loading-icon",attrs:{type:"loading"}}):t._e(),t._v(" "),e("span",{staticClass:"c-button-content"},[t._t("default")],2)],1)}),[],!1,null,"6419ba14",null);n.a=r.exports},274:function(t,n,e){"use strict";var i=e(262);e.n(i).a},302:function(t,n,e){"use strict";var i=e(263)(!0);e(44)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=i(n,e),this._i+=t.length,{value:t,done:!1})}))},312:function(t,n,e){t.exports=e(313)},313:function(t,n,e){e(297),e(314),t.exports=e(275).Array.from},314:function(t,n,e){"use strict";var i=e(298),o=e(286),r=e(295),a=e(315),s=e(316),c=e(310),u=e(317),l=e(344);o(o.S+o.F*!e(318)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,o,p,f=r(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,g=0,y=l(f);if(m&&(h=i(h,v>2?arguments[2]:void 0,2)),null==y||d==Array&&s(y))for(e=new d(n=c(f.length));n>g;g++)u(e,g,m?h(f[g],g):f[g]);else for(p=y.call(f),e=new d;!(o=p.next()).done;g++)u(e,g,m?a(p,h,[o.value,g],!0):o.value);return e.length=g,e}})},315:function(t,n,e){var i=e(281);t.exports=function(t,n,e,o){try{return o?n(i(e)[0],e[1]):n(e)}catch(n){var r=t.return;throw void 0!==r&&i(r.call(t)),n}}},316:function(t,n,e){var i=e(299),o=e(277)("iterator"),r=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||r[o]===t)}},317:function(t,n,e){"use strict";var i=e(276),o=e(283);t.exports=function(t,n,e){n in t?i.f(t,n,o(0,e)):t[n]=e}},318:function(t,n,e){var i=e(277)("iterator"),o=!1;try{var r=[7][i]();r.return=function(){o=!0},Array.from(r,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var r=[7],a=r[i]();a.next=function(){return{done:e=!0}},r[i]=function(){return a},t(r)}catch(t){}return e}},324:function(t,n,e){var i=e(8);t.exports=function(t,n,e,o){try{return o?n(i(e)[0],e[1]):n(e)}catch(n){var r=t.return;throw void 0!==r&&i(r.call(t)),n}}},325:function(t,n,e){var i=e(19),o=e(6)("iterator"),r=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||r[o]===t)}},326:function(t,n,e){var i=e(264),o=e(6)("iterator"),r=e(19);t.exports=e(18).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||r[i(t)]}},327:function(t,n,e){var i=e(6)("iterator"),o=!1;try{var r=[7][i]();r.return=function(){o=!0},Array.from(r,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var r=[7],a=r[i]();a.next=function(){return{done:e=!0}},r[i]=function(){return a},t(r)}catch(t){}return e}},335:function(t,n,e){},336:function(t,n,e){"use strict";var i=e(343),o=e.n(i);var r=e(312),a=e.n(r),s=e(345),c=e.n(s);function u(t){return function(t){if(o()(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return a()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.d(n,"a",(function(){return u}))},360:function(t,n,e){"use strict";var i=e(29),o=e(27),r=e(40),a=e(324),s=e(325),c=e(41),u=e(361),l=e(326);o(o.S+o.F*!e(327)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,o,p,f=r(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,g=0,y=l(f);if(m&&(h=i(h,v>2?arguments[2]:void 0,2)),null==y||d==Array&&s(y))for(e=new d(n=c(f.length));n>g;g++)u(e,g,m?h(f[g],g):f[g]);else for(p=y.call(f),e=new d;!(o=p.next()).done;g++)u(e,g,m?a(p,h,[o.value,g],!0):o.value);return e.length=g,e}})},361:function(t,n,e){"use strict";var i=e(11),o=e(20);t.exports=function(t,n,e){n in t?i.f(t,n,o(0,e)):t[n]=e}},441:function(t,n,e){"use strict";var i=e(335);e.n(i).a},445:function(t,n,e){"use strict";e(270),e(302),e(360);var i=e(336),o=e(261);var r={post:function(t,n){!function(t,n,e){var i=new XMLHttpRequest;i.open(t,n),i.onload=function(){e.success&&e.success(i.response)},i.onerror=function(){e.error&&e.error(i)},i.send(e.data)}("post",t,n)}},a={name:"CUpload",components:{CIcon:o.a},props:{name:{type:String,required:!0},method:{type:String,default:"POST"},action:{type:String,required:!0},fileList:{type:Array,default:function(){return[]},required:!0},multiple:{type:Boolean,default:!1},accept:{type:String}},data:function(){return{uploadStatus:{},tempFileList:[],idCount:0}},methods:{onClickUpload:function(){var t=this,n=this.createInput();n.addEventListener("change",(function(e){var i=n.files;t.uploadFiles(i),n.remove()})),n.click()},onRemoveFile:function(t){var n=Object(i.a)(this.fileList),e=n.indexOf(t);n.splice(e,1),this.tempFileList.splice(e,1),this.$emit("update:fileList",n)},createInput:function(){var t=document.createElement("input");return this.accept&&(t.accept=this.accept),t.multiple=this.multiple,t.type="file",this.$refs.uploadInput.appendChild(t),t},beforeUploadFiles:function(t){var n=this,e=Array.from(t);this.idCount=0;var o=e.map((function(t,e){var i=t.name,o=t.type,r=t.size,a=e;return n.tempFileList.push(t),n.fileList.map((function(t){return t.id})).indexOf(e)>=0&&(a=n.fileList.length+n.idCount++),{id:a,name:i,type:o,size:r,status:"pending"}}));this.$emit("update:fileList",[].concat(Object(i.a)(this.fileList),Object(i.a)(o)))},uploadFiles:function(t){var n=this;this.beforeUploadFiles(t),this.$nextTick((function(){for(var t=function(t){if(n.fileList&&"pending"!==n.fileList[t].status)return"continue";var e=new FormData;e.append(n.name,n.tempFileList[t]),n.ajax(e,(function(e){n.$emit("onchange",e),n.updateFileStatus(t,"success")}),(function(){n.updateFileStatus(t,"error")}))},e=0;e<n.tempFileList.length;e++)t(e)}))},updateFileStatus:function(t,n){var e=this.fileList.filter((function(n){return n.id===t}))[0],o=this.fileList.indexOf(e);if(e){var r=JSON.parse(JSON.stringify(e));r.status=n;var a=Object(i.a)(this.fileList);a.splice(o,1,r),this.$emit("update:fileList",a)}},ajax:function(t,n,e){r[this.method.toLowerCase()](this.action,{success:n,error:e,data:t})}}},s=(e(441),e(2)),c=Object(s.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"c-upload"},[e("div",{staticClass:"c-upload-trigger",on:{click:t.onClickUpload}},[t._t("default")],2),t._v(" "),e("div",{ref:"uploadInput",staticClass:"c-upload-input"}),t._v(" "),t.$slots.tips?e("div",{staticClass:"c-upload-tips"},[e("c-icon",{attrs:{type:"prompt"}}),t._v(" "),t._t("tips")],2):t._e(),t._v(" "),e("ol",{staticClass:"c-upload-file-list"},t._l(t.fileList,(function(n,i){var o;return e("li",{key:i},[e("span",{staticClass:"content",class:(o={},o[n.status]=!0,o)},["success"===n.status?e("c-icon",{attrs:{type:"success"}}):t._e(),t._v(" "),"error"===n.status?e("c-icon",{attrs:{type:"reeor"}}):t._e(),t._v(" "),"pending"===n.status?e("c-icon",{staticClass:"loading",attrs:{type:"loading"}}):t._e(),t._v(" "),e("a",{attrs:{href:n.url,title:n.name}},[t._v(t._s(n.name))])],1),t._v(" "),e("span",{staticClass:"close",on:{click:function(e){return t.onRemoveFile(n)}}},[e("c-icon",{attrs:{type:"close"}})],1)])})),0)])}),[],!1,null,"3e23c6df",null);n.a=c.exports},611:function(t,n,e){"use strict";e.r(n);var i=e(272),o=e(445),r=e(261),a={name:"Demo",mixins:[e(271).a],components:{CButton:i.a,CIcon:r.a,CUpload:o.a},data:function(){return{uploadFileList:[],uploadPreviewUrl:"",codeStr:'\n        <c-upload\n          multiple\n          name="file"\n          method="POST"\n          accept="image/*"\n          action="https://file-upload-simple-server.herokuapp.com/upload"\n          :file-list.sync="uploadFileList"\n          @onchange="onUploadChange"\n        >\n          <c-button icon="upload">Upload</c-button>\n          <div slot="tips">Please upload jpg or png files</div>\n        </c-upload>\n      '}},methods:{onUploadChange:function(t){var n=JSON.parse(t).key;this.uploadPreviewUrl="https://file-upload-simple-server.herokuapp.com/preview/".concat(n)}}},s=e(2),c=Object(s.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo"},[e("h2",[t._v("Click to upload")]),t._v(" "),e("p",[t._v("Upload files by clicking.")]),t._v(" "),e("div",{staticClass:"component-wrapper"},[e("div",{staticClass:"component-wrapper-demo"},[e("div",[e("img",{attrs:{src:t.uploadPreviewUrl}})]),t._v(" "),e("c-upload",{attrs:{multiple:"",name:"file",method:"POST",accept:"image/*",action:"https://file-upload-simple-server.herokuapp.com/upload","file-list":t.uploadFileList},on:{"update:fileList":function(n){t.uploadFileList=n},"update:file-list":function(n){t.uploadFileList=n},onchange:t.onUploadChange}},[e("c-button",{attrs:{icon:"upload"}},[t._v("Upload")]),t._v(" "),e("div",{attrs:{slot:"tips"},slot:"tips"},[t._v("Please upload jpg or png files")])],1)],1),t._v(" "),e("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[e("div",{staticClass:"code-content-height"},[e("pre",[e("code",{staticClass:"html"},[t._v(t._s(t.parseCode(t.codeStr)))])])])]),t._v(" "),e("div",{staticClass:"lock-code",on:{click:function(n){return t.showCode(0)}}},[e("c-icon",{staticClass:"icon-down",attrs:{type:t.isShowCode(0,"icon","cn")}}),t._v(" "),e("span",{staticClass:"lock-code-word"},[t._v(t._s(t.isShowCode(0,"text","cn")))])],1)])])}),[],!1,null,"305fd4d7",null);n.default=c.exports}}]);