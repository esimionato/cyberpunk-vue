(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{262:function(t,e,n){},272:function(t,e,n){"use strict";var o={name:"CButton",components:{"c-icon":n(261).a},props:{icon:{type:String},iconPosition:{type:String,default:"left"},loading:{type:Boolean},disabled:{type:Boolean,default:!1},size:{type:String,validator:function(t){return["mini","small","large"].indexOf(t)>=0}}}},s=(n(274),n(2)),c=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"c-button",class:[t.iconPosition,{disabled:t.disabled},t.size],on:{click:function(e){return t.$emit("click")}}},[t.icon&&!t.loading?n("c-icon",{staticClass:"c-button-icon",attrs:{type:t.icon}}):t._e(),t._v(" "),t.loading?n("c-icon",{staticClass:"c-button-loading-icon",attrs:{type:"loading"}}):t._e(),t._v(" "),n("span",{staticClass:"c-button-content"},[t._t("default")],2)],1)}),[],!1,null,"6419ba14",null);e.a=c.exports},274:function(t,e,n){"use strict";var o=n(262);n.n(o).a},331:function(t,e,n){},431:function(t,e,n){"use strict";var o=n(331);n.n(o).a},443:function(t,e,n){"use strict";var o=n(486),s=(n(43),{name:"CMessage",props:{position:{type:String,default:"top",validator:function(t){return-1!==["top","bottom","center"].indexOf(t)}},autoClose:{type:[Boolean,Number],default:3,validator:function(t){return!1===t||"number"==typeof t}},enableHtml:{type:Boolean,default:!1},closeButton:{type:Object,default:function(){return{text:"关闭",callback:void 0}}}},mounted:function(){this.execAutoClose()},computed:{messageClass:function(){return["position-".concat(this.position)]}},methods:{close:function(){this.$el.remove(),this.$emit("close"),this.$destroy()},onCloseMessage:function(){this.close(),this.closeButton&&"function"==typeof this.closeButton.callback&&this.closeButton.callback(this)},execAutoClose:function(){var t=this;this.autoClose&&setTimeout((function(){t.close()}),1e3*this.autoClose)}}}),c=(n(431),n(2)),i=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-message-wrapper",class:t.messageClass},[n("div",{staticClass:"c-message"},[[t.enableHtml?n("div",{domProps:{innerHTML:t._s(t.$slots.default?t.$slots.default[0]:"")}}):t._t("default")],t._v(" "),n("span",{staticClass:"close",on:{click:t.onCloseMessage}},[t.closeButton.text?n("span",[t._v(t._s(t.closeButton.text))]):n("c-icon",{attrs:{type:"close"}})],1)],2)])}),[],!1,null,"1ab4ee69",null).exports,a=null;e.a={install:function(t){t.prototype.$message=function(e){var n=e.message,s=Object(o.a)(e,["message"]);a&&a.close(),a=function(t){var e=t.Vue,n=t.message,o=t.propsData,s=t.onClose,c=new(e.extend(i))({propsData:o});return c.$slots.default=[n],c.$mount(),c.$on("close",s),document.body.appendChild(c.$el),c}({Vue:t,message:n,propsData:s,onClose:function(){a=null}})}}}},597:function(t,e,n){"use strict";n.r(e);var o=n(0),s=n(272),c=n(443),i=n(261),a=n(271);o.a.use(c.a);var l={name:"Demo",mixins:[a.a],components:{CButton:s.a,CIcon:i.a},data:function(){return{codeStr:'\n        <c-button icon="rising1" @click="onMessage(\'top\')">顶部提示</c-button>\n        <c-button icon="reduce" @click="onMessage(\'center\')">居中提示</c-button>\n        <c-button icon="falling" @click="onMessage(\'bottom\')">底部提示</c-button>\n\n        onMessage(position) {\n          this.$message({\n            message: "保存成功",\n            position,\n            autoClose: 3,\n            closeButton: {\n              callback: message => {\n                console.log(message);\n              }\n            }\n          });\n        }\n      ',codeStr2:'\n        <c-button icon="rising1" @click="onMessage2(\'top\')">HTML Dom</c-button>\n\n        onMessage2(position) {\n          this.$message({\n            message: "<i>HTML DOM</i>",\n            position,\n            autoClose: 3,\n            enableHtml: true,\n            closeButton: {\n              callback: message => {\n                console.log(message);\n              }\n            }\n          });\n        }\n      '}},methods:{onMessage:function(t){this.$message({message:"保存成功",position:t,autoClose:3,closeButton:{callback:function(t){console.log(t)}}})},onMessage2:function(t){this.$message({message:"<i>HTML DOM</i>",position:t,autoClose:3,enableHtml:!0,closeButton:{callback:function(t){console.log(t)}}})}}},u=n(2),r=Object(u.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("h2",[t._v("基础用法")]),t._v(" "),n("p",[t._v("从顶部出现，3 秒后自动消失。")]),t._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[n("c-button",{attrs:{icon:"rising1"},on:{click:function(e){return t.onMessage("top")}}},[t._v("Top")]),t._v(" "),n("c-button",{attrs:{icon:"reduce"},on:{click:function(e){return t.onMessage("center")}}},[t._v("Center")]),t._v(" "),n("c-button",{attrs:{icon:"falling"},on:{click:function(e){return t.onMessage("bottom")}}},[t._v("Bottom")])],1),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"html"},[t._v(t._s(t.parseCode(t.codeStr)))])])])]),t._v(" "),n("div",{staticClass:"lock-code",on:{click:function(e){return t.showCode(0)}}},[n("c-icon",{staticClass:"icon-down",attrs:{type:t.isShowCode(0,"icon","cn")}}),t._v(" "),n("span",{staticClass:"lock-code-word"},[t._v(t._s(t.isShowCode(0,"text","cn")))])],1)]),t._v(" "),n("h2",[t._v("支持HTML")]),t._v(" "),n("p",[t._v("message 属性支持传入 HTML 片段。")]),t._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[n("c-button",{attrs:{icon:"rising1"},on:{click:function(e){return t.onMessage2("top")}}},[t._v("HTML Dom")])],1),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"html"},[t._v(t._s(t.parseCode(t.codeStr2)))])])])]),t._v(" "),n("div",{staticClass:"lock-code",on:{click:function(e){return t.showCode(1)}}},[n("c-icon",{staticClass:"icon-down",attrs:{type:t.isShowCode(1,"icon","cn")}}),t._v(" "),n("span",{staticClass:"lock-code-word"},[t._v(t._s(t.isShowCode(1,"text","cn")))])],1)])])}),[],!1,null,"ef98c6ae",null);e.default=r.exports}}]);