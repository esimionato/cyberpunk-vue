(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{416:function(c,t,s){},540:function(c,t,s){"use strict";var o=s(416);s.n(o).a},587:function(c,t,s){"use strict";s.r(t);var o=s(476),n=s(477),i=s(261),l={name:"Demo",mixins:[s(271).a],components:{CRow:o.a,CCol:n.a,CIcon:i.a},data:function(){return{codeStr:'\n        <c-row class="grid">\n          <c-col span="24"><div class="grid-content bg-color"></div></c-col>\n        </c-row>\n        <c-row class="grid">\n          <c-col span="12"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col span="12"><div class="grid-content bg-color"></div></c-col>\n        </c-row>\n        <c-row class="grid">\n          <c-col span="8"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col span="8"><div class="grid-content bg-color"></div></c-col>\n          <c-col span="8"><div class="grid-content bg-color-light"></div></c-col>\n        </c-row>\n        <c-row class="grid">\n          <c-col span="6"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col span="6"><div class="grid-content bg-color"></div></c-col>\n          <c-col span="6"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col span="6"><div class="grid-content bg-color"></div></c-col>\n        </c-row>\n        <c-row class="grid">\n          <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col span="4"><div class="grid-content bg-color"></div></c-col>\n          <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col span="4"><div class="grid-content bg-color"></div></c-col>\n          <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col span="4"><div class="grid-content bg-color"></div></c-col>\n        </c-row>\n\n        <style>\n          .grid {\n            margin-bottom: 12px;\n          }\n\n          .grid .grid-content {\n            width: 100%;\n            text-align: center;\n            height: 50px;\n            color: white;\n          }\n\n          .grid .grid-content.bg-color {\n            background-color: #99a9bf;\n          }\n\n          .grid .grid-content.bg-color-light {\n            background-color: #d3dce6;\n          }\n        </style>\n      ',codeStr2:'\n        <c-row class="grid" gutter="10">\n          <c-col span="24"><div class="grid-content bg-color"></div></c-col>\n        </c-row>\n        <c-row class="grid" gutter="10">\n          <c-col span="12"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col span="12"><div class="grid-content bg-color"></div></c-col>\n        </c-row>\n        <c-row class="grid" gutter="10">\n          <c-col span="8"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col span="8"><div class="grid-content bg-color"></div></c-col>\n          <c-col span="8"><div class="grid-content bg-color-light"></div></c-col>\n        </c-row>\n        <c-row class="grid" gutter="10">\n          <c-col span="6"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col span="6"><div class="grid-content bg-color"></div></c-col>\n          <c-col span="6"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col span="6"><div class="grid-content bg-color"></div></c-col>\n        </c-row>\n        <c-row class="grid" gutter="10">\n          <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col span="4"><div class="grid-content bg-color"></div></c-col>\n          <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col span="4"><div class="grid-content bg-color"></div></c-col>\n          <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col span="4"><div class="grid-content bg-color"></div></c-col>\n        </c-row>\n\n        <style>\n          .grid {\n            margin-bottom: 12px;\n          }\n\n          .grid .grid-content {\n            width: 100%;\n            text-align: center;\n            height: 50px;\n            color: white;\n          }\n\n          .grid .grid-content.bg-color {\n            background-color: #99a9bf;\n          }\n\n          .grid .grid-content.bg-color-light {\n            background-color: #d3dce6;\n          }\n        </style>\n        ',codeStr3:'\n        <c-row gutter="10">\n          <c-col class="grid" span="8"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col class="grid" span="5" offset="1"><div class="grid-content bg-color"></div></c-col>\n          <c-col class="grid" span="8" offset="1"><div class="grid-content bg-color-light"></div></c-col>\n        </c-row>\n        <c-row gutter="10">\n          <c-col class="grid" span="6"><div class="grid-content bg-color"></div></c-col>\n          <c-col class="grid" span="8"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col class="grid" span="8" offset="2"><div class="grid-content bg-color"></div></c-col>\n        </c-row>\n        <c-row gutter="10">\n          <c-col class="grid" span="6" offset="3"><div class="grid-content bg-color"></div></c-col>\n          <c-col class="grid" span="6" offset="3"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col class="grid" span="6"><div class="grid-content bg-color"></div></c-col>\n        </c-row>\n        <c-row gutter="10">\n          <c-col class="grid" span="5"><div class="grid-content bg-color"></div></c-col>\n          <c-col class="grid" span="5" offset="2"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col class="grid" span="5" offset="2"><div class="grid-content bg-color"></div></c-col>\n          <c-col class="grid" span="5"><div class="grid-content bg-color"></div></c-col>\n        </c-row>\n\n        <style>\n          .grid {\n            margin-bottom: 12px;\n          }\n\n          .grid .grid-content {\n            width: 100%;\n            text-align: center;\n            height: 50px;\n            color: white;\n          }\n\n          .grid .grid-content.bg-color {\n            background-color: #99a9bf;\n          }\n\n          .grid .grid-content.bg-color-light {\n            background-color: #d3dce6;\n          }\n        </style>\n        ',codeStr4:'\n        <c-row class="grid" gutter="20" align="center">\n          <c-col span="12"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col span="4"><div class="grid-content bg-color"></div></c-col>\n        </c-row>\n        <c-row class="grid" gutter="20" align="left">\n          <c-col span="12"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col span="4"><div class="grid-content bg-color"></div></c-col>\n        </c-row>\n        <c-row class="grid" gutter="20" align="right">\n          <c-col span="12"><div class="grid-content bg-color-light"></div></c-col>\n          <c-col span="4"><div class="grid-content bg-color"></div></c-col>\n        </c-row>\n\n        <style>\n          .grid {\n            margin-bottom: 12px;\n          }\n\n          .grid .grid-content {\n            width: 100%;\n            text-align: center;\n            height: 50px;\n            color: white;\n          }\n\n          .grid .grid-content.bg-color {\n            background-color: #99a9bf;\n          }\n\n          .grid .grid-content.bg-color-light {\n            background-color: #d3dce6;\n          }\n        </style>\n        ',codeStr5:'\n        <c-row gutter="20" class="grid">\n          <c-col\n            :xs="{ span: 24 }"\n            sm="12"\n            :md="4"\n            :lg="{ span: 2, offset: \'1\' }"\n            :xl="6"\n            :xxl="8"\n          ><div class="grid-content bg-color-light"></div></c-col>\n          <c-col\n            :xs="{ span: 24 }"\n            sm="12"\n            :md="8"\n            :lg="{ span: 8, offset: \'1\' }"\n            :xl="6"\n            :xxl="4"\n          ><div class="grid-content bg-color"></div></c-col>\n          <c-col\n            :xs="{ span: 24 }"\n            sm="12"\n            :md="8"\n            :lg="{ span: 8, offset: \'1\' }"\n            :xl="6"\n            :xxl="4"\n          ><div class="grid-content bg-color-light"></div></c-col>\n          <c-col\n            :xs="{ span: 24 }"\n            sm="12"\n            :md="4"\n            :lg="{ span: 2, offset: \'1\' }"\n            :xl="6"\n            :xxl="8"\n          ><div class="grid-content bg-color"></div></c-col>\n        </c-row>\n\n        <style>\n          .grid {\n            margin-bottom: 12px;\n          }\n\n          .grid .grid-content {\n            width: 100%;\n            text-align: center;\n            height: 50px;\n            color: white;\n          }\n\n          .grid .grid-content.bg-color {\n            background-color: #99a9bf;\n          }\n\n          .grid .grid-content.bg-color-light {\n            background-color: #d3dce6;\n          }\n        </style>\n        '}}},a=(s(540),s(2)),r=Object(a.a)(l,(function(){var c=this,t=c.$createElement,s=c._self._c||t;return s("div",{staticClass:"demo"},[s("h2",[c._v("Basic layout")]),c._v(" "),s("p",[c._v("Create basic grid layout using columns.")]),c._v(" "),s("div",{staticClass:"component-wrapper"},[s("div",{staticClass:"component-wrapper-demo"},[s("c-row",{staticClass:"grid"},[s("c-col",{attrs:{span:"24"}},[s("div",{staticClass:"grid-content bg-color"})])],1),c._v(" "),s("c-row",{staticClass:"grid"},[s("c-col",{attrs:{span:"12"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{span:"12"}},[s("div",{staticClass:"grid-content bg-color"})])],1),c._v(" "),s("c-row",{staticClass:"grid"},[s("c-col",{attrs:{span:"8"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{span:"8"}},[s("div",{staticClass:"grid-content bg-color"})]),c._v(" "),s("c-col",{attrs:{span:"8"}},[s("div",{staticClass:"grid-content bg-color-light"})])],1),c._v(" "),s("c-row",{staticClass:"grid"},[s("c-col",{attrs:{span:"6"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{span:"6"}},[s("div",{staticClass:"grid-content bg-color"})]),c._v(" "),s("c-col",{attrs:{span:"6"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{span:"6"}},[s("div",{staticClass:"grid-content bg-color"})])],1),c._v(" "),s("c-row",{staticClass:"grid"},[s("c-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-color"})]),c._v(" "),s("c-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-color"})]),c._v(" "),s("c-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-color"})])],1)],1),c._v(" "),s("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[s("div",{staticClass:"code-content-height"},[s("pre",[s("code",{staticClass:"html"},[c._v(c._s(c.parseCode(c.codeStr)))])])])]),c._v(" "),s("div",{staticClass:"lock-code",on:{click:function(t){return c.showCode(0)}}},[s("c-icon",{staticClass:"icon-down",attrs:{type:c.isShowCode(0,"icon")}}),c._v(" "),s("span",{staticClass:"lock-code-word"},[c._v(c._s(c.isShowCode(0,"text")))])],1)]),c._v(" "),s("h2",[c._v("Column spacing")]),c._v(" "),s("p",[c._v("Column spacing is supported.")]),c._v(" "),s("div",{staticClass:"component-wrapper"},[s("div",{staticClass:"component-wrapper-demo"},[s("c-row",{staticClass:"grid",attrs:{gutter:"10"}},[s("c-col",{attrs:{span:"24"}},[s("div",{staticClass:"grid-content bg-color"})])],1),c._v(" "),s("c-row",{staticClass:"grid",attrs:{gutter:"10"}},[s("c-col",{attrs:{span:"12"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{span:"12"}},[s("div",{staticClass:"grid-content bg-color"})])],1),c._v(" "),s("c-row",{staticClass:"grid",attrs:{gutter:"10"}},[s("c-col",{attrs:{span:"8"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{span:"8"}},[s("div",{staticClass:"grid-content bg-color"})]),c._v(" "),s("c-col",{attrs:{span:"8"}},[s("div",{staticClass:"grid-content bg-color-light"})])],1),c._v(" "),s("c-row",{staticClass:"grid",attrs:{gutter:"10"}},[s("c-col",{attrs:{span:"6"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{span:"6"}},[s("div",{staticClass:"grid-content bg-color"})]),c._v(" "),s("c-col",{attrs:{span:"6"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{span:"6"}},[s("div",{staticClass:"grid-content bg-color"})])],1),c._v(" "),s("c-row",{staticClass:"grid",attrs:{gutter:"10"}},[s("c-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-color"})]),c._v(" "),s("c-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-color"})]),c._v(" "),s("c-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-color"})])],1)],1),c._v(" "),s("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[s("div",{staticClass:"code-content-height"},[s("pre",[s("code",{staticClass:"html"},[c._v(c._s(c.parseCode(c.codeStr2)))])])])]),c._v(" "),s("div",{staticClass:"lock-code",on:{click:function(t){return c.showCode(1)}}},[s("c-icon",{staticClass:"icon-down",attrs:{type:c.isShowCode(1,"icon")}}),c._v(" "),s("span",{staticClass:"lock-code-word"},[c._v(c._s(c.isShowCode(1,"text")))])],1)]),c._v(" "),s("h2",[c._v("Column offset")]),c._v(" "),s("p",[c._v("You can specify column offsets.")]),c._v(" "),s("div",{staticClass:"component-wrapper"},[s("div",{staticClass:"component-wrapper-demo"},[s("c-row",{attrs:{gutter:"10"}},[s("c-col",{staticClass:"grid",attrs:{span:"8"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{staticClass:"grid",attrs:{span:"5",offset:"1"}},[s("div",{staticClass:"grid-content bg-color"})]),c._v(" "),s("c-col",{staticClass:"grid",attrs:{span:"8",offset:"1"}},[s("div",{staticClass:"grid-content bg-color-light"})])],1),c._v(" "),s("c-row",{attrs:{gutter:"10"}},[s("c-col",{staticClass:"grid",attrs:{span:"6"}},[s("div",{staticClass:"grid-content bg-color"})]),c._v(" "),s("c-col",{staticClass:"grid",attrs:{span:"8"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{staticClass:"grid",attrs:{span:"8",offset:"2"}},[s("div",{staticClass:"grid-content bg-color"})])],1),c._v(" "),s("c-row",{attrs:{gutter:"10"}},[s("c-col",{staticClass:"grid",attrs:{span:"6",offset:"3"}},[s("div",{staticClass:"grid-content bg-color"})]),c._v(" "),s("c-col",{staticClass:"grid",attrs:{span:"6",offset:"3"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{staticClass:"grid",attrs:{span:"6"}},[s("div",{staticClass:"grid-content bg-color"})])],1),c._v(" "),s("c-row",{attrs:{gutter:"10"}},[s("c-col",{staticClass:"grid",attrs:{span:"5"}},[s("div",{staticClass:"grid-content bg-color"})]),c._v(" "),s("c-col",{staticClass:"grid",attrs:{span:"5",offset:"2"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{staticClass:"grid",attrs:{span:"5",offset:"2"}},[s("div",{staticClass:"grid-content bg-color"})]),c._v(" "),s("c-col",{staticClass:"grid",attrs:{span:"5"}},[s("div",{staticClass:"grid-content bg-color"})])],1)],1),c._v(" "),s("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[s("div",{staticClass:"code-content-height"},[s("pre",[s("code",{staticClass:"html"},[c._v(c._s(c.parseCode(c.codeStr3)))])])])]),c._v(" "),s("div",{staticClass:"lock-code",on:{click:function(t){return c.showCode(2)}}},[s("c-icon",{staticClass:"icon-down",attrs:{type:c.isShowCode(2,"icon")}}),c._v(" "),s("span",{staticClass:"lock-code-word"},[c._v(c._s(c.isShowCode(2,"text")))])],1)]),c._v(" "),s("h2",[c._v("Alignment")]),c._v(" "),s("p",[c._v("Use the flex layout to make flexible alignment of columns.")]),c._v(" "),s("div",{staticClass:"component-wrapper"},[s("div",{staticClass:"component-wrapper-demo"},[s("c-row",{staticClass:"grid",attrs:{gutter:"20",align:"center"}},[s("c-col",{attrs:{span:"12"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-color"})])],1),c._v(" "),s("c-row",{staticClass:"grid",attrs:{gutter:"20",align:"left"}},[s("c-col",{attrs:{span:"12"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-color"})])],1),c._v(" "),s("c-row",{staticClass:"grid",attrs:{gutter:"20",align:"right"}},[s("c-col",{attrs:{span:"12"}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-color"})])],1)],1),c._v(" "),s("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[s("div",{staticClass:"code-content-height"},[s("pre",[s("code",{staticClass:"html"},[c._v(c._s(c.parseCode(c.codeStr4)))])])])]),c._v(" "),s("div",{staticClass:"lock-code",on:{click:function(t){return c.showCode(3)}}},[s("c-icon",{staticClass:"icon-down",attrs:{type:c.isShowCode(3,"icon")}}),c._v(" "),s("span",{staticClass:"lock-code-word"},[c._v(c._s(c.isShowCode(3,"text")))])],1)]),c._v(" "),s("h2",[c._v("Responsive Layout")]),c._v(" "),s("p",[c._v("Taking example by Bootstrap's responsive design, five breakpoints are preset: xs, sm, md, lg, xl and xxl.")]),c._v(" "),s("div",{staticClass:"component-wrapper"},[s("div",{staticClass:"component-wrapper-demo"},[s("c-row",{staticClass:"grid",attrs:{gutter:"20"}},[s("c-col",{attrs:{xs:{span:24},sm:"12",md:4,lg:{span:2,offset:"1"},xl:6,xxl:8}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{xs:{span:24},sm:"12",md:8,lg:{span:8,offset:"1"},xl:6,xxl:4}},[s("div",{staticClass:"grid-content bg-color"})]),c._v(" "),s("c-col",{attrs:{xs:{span:24},sm:"12",md:8,lg:{span:8,offset:"1"},xl:6,xxl:4}},[s("div",{staticClass:"grid-content bg-color-light"})]),c._v(" "),s("c-col",{attrs:{xs:{span:24},sm:"12",md:4,lg:{span:2,offset:"1"},xl:6,xxl:8}},[s("div",{staticClass:"grid-content bg-color"})])],1)],1),c._v(" "),s("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[s("div",{staticClass:"code-content-height"},[s("pre",[s("code",{staticClass:"html"},[c._v(c._s(c.parseCode(c.codeStr5)))])])])]),c._v(" "),s("div",{staticClass:"lock-code",on:{click:function(t){return c.showCode(4)}}},[s("c-icon",{staticClass:"icon-down",attrs:{type:c.isShowCode(4,"icon")}}),c._v(" "),s("span",{staticClass:"lock-code-word"},[c._v(c._s(c.isShowCode(4,"text")))])],1)])])}),[],!1,null,"f00732d8",null);t.default=r.exports}}]);