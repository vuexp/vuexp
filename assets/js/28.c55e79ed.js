(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{294:function(t,e,a){},295:function(t,e,a){"use strict";var i=a(2),l=a(15),r=a(21),n=a(77),o=a(75),s=a(5),c=a(99).f,u=a(102).f,p=a(9).f,d=a(298).trim,v=i.Number,x=v,h=v.prototype,f="Number"==r(a(76)(h)),_="trim"in String.prototype,m=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var a,i,l,r=(e=_?e.trim():d(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(a=e.charCodeAt(2))||120===a)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:i=2,l=49;break;case 79:case 111:i=8,l=55;break;default:return+e}for(var n,s=e.slice(2),c=0,u=s.length;c<u;c++)if((n=s.charCodeAt(c))<48||n>l)return NaN;return parseInt(s,i)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof v&&(f?s(function(){h.valueOf.call(a)}):"Number"!=r(a))?n(new x(m(e)),a,v):m(e)};for(var b,y=a(6)?c(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;y.length>g;g++)l(x,b=y[g])&&!l(v,b)&&p(v,b,u(x,b));v.prototype=h,h.constructor=v,a(11)(i,"Number",v)}},296:function(t,e,a){},297:function(t,e,a){"use strict";a(14),a(100),a(101),a(295);var i=a(24),l=a(8),r={name:"Label",props:{text:{type:[String,Number],default:""},textWrap:{type:Boolean,default:!1}},directives:{"common-directive":i.a},computed:{fontClass:function(){return"string"==typeof this.text&&this.text.includes(" | fonticon")?this.text.replace(" | fonticon",""):""},textValue:function(){return"string"==typeof this.text&&this.text.includes(" | fonticon")?"":this.text}},mixins:[l.a]},n=(a(300),a(0)),o=Object(n.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("span",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-label",class:this.fontClass,style:{"white-space":this.textWrap?"normal":"nowrap"}},[this._v("\n  "+this._s(this.textValue)+"\n  "),this._t("default")],2)},[],!1,null,null,null);e.a=o.exports},298:function(t,e,a){var i=a(7),l=a(16),r=a(5),n=a(299),o="["+n+"]",s=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),u=function(t,e,a){var l={},o=r(function(){return!!n[t]()||"​"!="​"[t]()}),s=l[t]=o?e(p):n[t];a&&(l[a]=s),i(i.P+i.F*o,"String",l)},p=u.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(c,"")),t};t.exports=u},299:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},300:function(t,e,a){"use strict";var i=a(294);a.n(i).a},301:function(t,e,a){},302:function(t,e,a){"use strict";a(295);var i=a(24),l=a(8),r={model:{event:"input",prop:"text"},name:"TextField",props:{maxLength:Number,keyboardType:{type:String,default:"text"},secure:{type:Boolean,default:!1},text:String,hint:String,editable:{type:Boolean,default:!0},autocorrect:Boolean},directives:{"common-directive":i.a},methods:{updateValue:function(t){this.$emit("textChange",t),this.$emit("input",t.target.value)}},computed:{handleKeyboardType:function(){switch(this.keyboardType){case"phone":return"tel";case"datetime":return"datetime-local";case"email":return"email";case"url":return"url";case"number":return"number";default:return"text"}}},mixins:[l.a]},n=(a(303),a(0)),o=Object(n.a)(r,function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-textfield",attrs:{placeholder:t.hint,disabled:!t.editable,maxlength:t.maxLength,type:t.secure?"password":t.handleKeyboardType,spellcheck:t.autocorrect},domProps:{value:t.text},on:{blur:function(e){return t.$emit("blur",e)},focus:function(e){return t.$emit("focus",e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("returnPress",e)},input:t.updateValue}})},[],!1,null,"967a7238",null);e.a=o.exports},303:function(t,e,a){"use strict";var i=a(296);a.n(i).a},304:function(t,e,a){"use strict";var i=a(24),l=a(8),r={name:"FlexboxLayout",props:{flexDirection:String,flexWrap:String,justifyContent:String,alignItems:String,alignContent:String},directives:{"common-directive":i.a},mixins:[l.a]},n=(a(306),a(0)),o=Object(n.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-flexbox-layout",style:{flexDirection:this.flexDirection,flexWrap:this.flexWrap,justifyContent:this.justifyContent,alignItems:this.alignItems,alignContent:this.alignContent}},[this._t("default")],2)},[],!1,null,null,null);e.a=o.exports},306:function(t,e,a){"use strict";var i=a(301);a.n(i).a},380:function(t,e,a){},472:function(t,e,a){"use strict";var i=a(380);a.n(i).a},586:function(t,e,a){"use strict";a.r(e);var i=a(297),l=a(17),r=a(302),n=a(304),o=a(74),s={name:"FlexboxLayoutLiveDemo",components:{FlexboxLayout:n.a,StackLayout:o.a,Label:i.a,Button:l.a,TextField:r.a},data:function(){return{containerWidth:"auto",containerHeight:"auto",containerColor:"transparent",containerFlexDirection:"row",flexWrap:"nowrap",justifyContent:"flex-start",alignItems:"stretch",alignContent:"stretch",childName:"child-name",childWidth:"auto",childHeight:"auto",childColor:"transparent",childOrder:"0",childFlexGrow:"0",childFlexShrink:"1",childAlignSelf:"stretch",childWrapBefore:!1,childrenList:[]}},methods:{addChild:function(){this.childrenList.push({text:this.childName,width:this.childWidth,height:this.childHeight,backgroundColor:this.childColor,order:this.childOrder,flexGrow:this.childFlexGrow,flexShrink:this.childFlexShrink,alignSelf:this.childAlignSelf,flexWrapBefore:this.childWrapBefore})},removeChildren:function(){this.childrenList=[]},getRandInt:function(){return Math.floor(1e5*Math.random())},removeChildAtIndex:function(t){this.childrenList.splice(t,1)}}},c=(a(472),a(0)),u=Object(c.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("StackLayout",[a("StackLayout",{staticClass:"demo-panel"},[a("Label",{staticClass:"demo-panel__title",attrs:{text:"Container Properties"}}),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"option-label",attrs:{text:"Width"}}),t._v(" "),a("TextField",{staticClass:"option-input",attrs:{id:"flexboxlayout_containerwidth_input"},model:{value:t.containerWidth,callback:function(e){t.containerWidth=e},expression:"containerWidth"}})],1),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"option-label",attrs:{text:"Height"}}),t._v(" "),a("TextField",{staticClass:"option-input",attrs:{id:"flexboxlayout_containerheight_input"},model:{value:t.containerHeight,callback:function(e){t.containerHeight=e},expression:"containerHeight"}})],1),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"option-label",attrs:{text:"Color"}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.containerColor,expression:"containerColor"}],staticClass:"option-input",attrs:{id:"flexboxlayout_containercolor_selectbox"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.containerColor=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"transparent"}},[t._v("transparent")]),t._v(" "),a("option",{attrs:{value:"red"}},[t._v("red")]),t._v(" "),a("option",{attrs:{value:"green"}},[t._v("green")]),t._v(" "),a("option",{attrs:{value:"blue"}},[t._v("blue")]),t._v(" "),a("option",{attrs:{value:"yellow"}},[t._v("yellow")])])],1),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"option-label",attrs:{text:"Flex Direction"}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.containerFlexDirection,expression:"containerFlexDirection"}],staticClass:"option-input",attrs:{id:"flexboxlayout_flexdirection_selectbox"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.containerFlexDirection=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}}),t._v(" "),a("option",{attrs:{value:"row"}},[t._v("row")]),t._v(" "),a("option",{attrs:{value:"row-reverse"}},[t._v("row-reverse")]),t._v(" "),a("option",{attrs:{value:"column"}},[t._v("column")]),t._v(" "),a("option",{attrs:{value:"column-reverse"}},[t._v("column-reverse")])])],1),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"option-label",attrs:{text:"Flex Wrap"}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.flexWrap,expression:"flexWrap"}],staticClass:"option-input",attrs:{id:"flexboxlayout_flexwrap_selectbox"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.flexWrap=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}}),t._v(" "),a("option",{attrs:{value:"nowrap"}},[t._v("nowrap")]),t._v(" "),a("option",{attrs:{value:"wrap"}},[t._v("wrap")]),t._v(" "),a("option",{attrs:{value:"wrap-reverse"}},[t._v("wrap-reverse")])])],1),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"option-label",attrs:{text:"Justify Content"}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.justifyContent,expression:"justifyContent"}],staticClass:"option-input",attrs:{id:"flexboxlayout_justifycontent_selectbox"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.justifyContent=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}}),t._v(" "),a("option",{attrs:{value:"flex-start"}},[t._v("flex-start")]),t._v(" "),a("option",{attrs:{value:"flex-end"}},[t._v("flex-end")]),t._v(" "),a("option",{attrs:{value:"center"}},[t._v("center")]),t._v(" "),a("option",{attrs:{value:"space-between"}},[t._v("space-between")]),t._v(" "),a("option",{attrs:{value:"space-around"}},[t._v("space-around")])])],1),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"option-label",attrs:{text:"Align Items"}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.alignItems,expression:"alignItems"}],staticClass:"option-input",attrs:{id:"flexboxlayout_alignitems_selectbox"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.alignItems=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}}),t._v(" "),a("option",{attrs:{value:"flex-start"}},[t._v("flex-start")]),t._v(" "),a("option",{attrs:{value:"flex-end"}},[t._v("flex-end")]),t._v(" "),a("option",{attrs:{value:"center"}},[t._v("center")]),t._v(" "),a("option",{attrs:{value:"baseline"}},[t._v("baseline")]),t._v(" "),a("option",{attrs:{value:"stretch"}},[t._v("stretch")])])],1),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"option-label",attrs:{text:"Align Content"}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.alignContent,expression:"alignContent"}],staticClass:"option-input",attrs:{id:"flexboxlayout_aligncontent_selectbox"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.alignContent=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}}),t._v(" "),a("option",{attrs:{value:"flex-start"}},[t._v("flex-start")]),t._v(" "),a("option",{attrs:{value:"flex-end"}},[t._v("flex-end")]),t._v(" "),a("option",{attrs:{value:"center"}},[t._v("center")]),t._v(" "),a("option",{attrs:{value:"space-between"}},[t._v("space-between")]),t._v(" "),a("option",{attrs:{value:"space-around"}},[t._v("space-around")]),t._v(" "),a("option",{attrs:{value:"stretch"}},[t._v("stretch")])])],1)],1),t._v(" "),a("StackLayout",{staticClass:"demo-panel"},[a("Label",{staticClass:"demo-panel__title",attrs:{text:"Child Properties"}}),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"option-label",attrs:{text:"Name"}}),t._v(" "),a("TextField",{staticClass:"option-input",attrs:{id:"flexboxlayout_childname_input"},model:{value:t.childName,callback:function(e){t.childName=e},expression:"childName"}})],1),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"option-label",attrs:{text:"Width"}}),t._v(" "),a("TextField",{staticClass:"option-input",attrs:{id:"flexboxlayout_childwidth_input"},model:{value:t.childWidth,callback:function(e){t.childWidth=e},expression:"childWidth"}})],1),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"option-label",attrs:{text:"Height"}}),t._v(" "),a("TextField",{staticClass:"option-input",attrs:{id:"flexboxlayout_childheight_input"},model:{value:t.childHeight,callback:function(e){t.childHeight=e},expression:"childHeight"}})],1),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"option-label",attrs:{text:"Color"}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.childColor,expression:"childColor"}],staticClass:"option-input",attrs:{id:"flexboxlayout_childcolor_selectbox"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.childColor=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"transparent"}},[t._v("transparent")]),t._v(" "),a("option",{attrs:{value:"red"}},[t._v("red")]),t._v(" "),a("option",{attrs:{value:"green"}},[t._v("green")]),t._v(" "),a("option",{attrs:{value:"blue"}},[t._v("blue")]),t._v(" "),a("option",{attrs:{value:"yellow"}},[t._v("yellow")])])],1),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"option-label",attrs:{text:"Order"}}),t._v(" "),a("TextField",{staticClass:"option-input",attrs:{id:"flexboxlayout_childorder_input"},model:{value:t.childOrder,callback:function(e){t.childOrder=e},expression:"childOrder"}})],1),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"option-label",attrs:{text:"Flex Grow"}}),t._v(" "),a("TextField",{staticClass:"option-input",attrs:{id:"flexboxlayout_childflexgrow_input"},model:{value:t.childFlexGrow,callback:function(e){t.childFlexGrow=e},expression:"childFlexGrow"}})],1),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"option-label",attrs:{text:"Flex Shrink"}}),t._v(" "),a("TextField",{staticClass:"option-input",attrs:{id:"flexboxlayout_childflexshrink_input"},model:{value:t.childFlexShrink,callback:function(e){t.childFlexShrink=e},expression:"childFlexShrink"}})],1),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"option-label",attrs:{text:"Align Self"}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.childAlignSelf,expression:"childAlignSelf"}],staticClass:"option-input",attrs:{id:"flexboxlayout_childalignself_selectbox"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.childAlignSelf=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}}),t._v(" "),a("option",{attrs:{value:"flex-start"}},[t._v("flex-start")]),t._v(" "),a("option",{attrs:{value:"flex-end"}},[t._v("flex-end")]),t._v(" "),a("option",{attrs:{value:"center"}},[t._v("center")]),t._v(" "),a("option",{attrs:{value:"baseline"}},[t._v("baseline")]),t._v(" "),a("option",{attrs:{value:"stretch"}},[t._v("stretch")])])],1),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"option-label",attrs:{text:"Flex Wrap Before"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.childWrapBefore,expression:"childWrapBefore"}],attrs:{id:"flexboxlayout_childflexwrapbefore_cb",type:"checkbox"},domProps:{checked:Array.isArray(t.childWrapBefore)?t._i(t.childWrapBefore,null)>-1:t.childWrapBefore},on:{change:function(e){var a=t.childWrapBefore,i=e.target,l=!!i.checked;if(Array.isArray(a)){var r=t._i(a,null);i.checked?r<0&&(t.childWrapBefore=a.concat([null])):r>-1&&(t.childWrapBefore=a.slice(0,r).concat(a.slice(r+1)))}else t.childWrapBefore=l}}})],1),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("Button",{staticStyle:{margin:"10px 10px 10px 0px"},attrs:{id:"flexboxlayout_addchild_button",text:"Add Child"},on:{tap:t.addChild}}),t._v(" "),a("Button",{staticStyle:{margin:"10px 10px 10px 10px"},attrs:{id:"flexboxlayout_removeallchildren_button",text:"Remove All Children"},on:{tap:t.removeChildren}})],1)],1),t._v(" "),a("StackLayout",{staticClass:"demo-panel",attrs:{orientation:"vertical"}},[a("Label",{staticClass:"demo-panel__title",attrs:{text:"Children list ("+t.childrenList.length+")"}}),t._v(" "),t._l(t.childrenList,function(e,i){return a("StackLayout",{key:"children_list_row_"+i,attrs:{orientation:"horizontal"}},[a("FlexboxLayout",{staticClass:"option-row",attrs:{flexWrap:"wrap"}},[a("Label",{staticClass:"editor-param-title",attrs:{text:"Text: "}}),t._v(" "),a("TextField",{staticStyle:{width:"50px"},attrs:{id:"docklayout_childreneditor_name"+i},model:{value:t.childrenList[i].text,callback:function(e){t.$set(t.childrenList[i],"text",e)},expression:"childrenList[index].text"}}),t._v(" "),a("Label",{staticClass:"editor-param-title",attrs:{text:"Width:"}}),t._v(" "),a("TextField",{staticClass:"editor-param-input",attrs:{id:"docklayout_childreneditor_width"+i},model:{value:t.childrenList[i].width,callback:function(e){t.$set(t.childrenList[i],"width",e)},expression:"childrenList[index].width"}}),t._v(" "),a("Label",{staticClass:"editor-param-title",attrs:{text:"Height: "}}),t._v(" "),a("TextField",{staticClass:"editor-param-input",attrs:{id:"docklayout_childreneditor_height"+i},model:{value:t.childrenList[i].height,callback:function(e){t.$set(t.childrenList[i],"height",e)},expression:"childrenList[index].height"}}),t._v(" "),a("Label",{staticClass:"editor-param-title",attrs:{text:"Color: "}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.childrenList[i].backgroundColor,expression:"childrenList[index].backgroundColor"}],staticStyle:{"margin-left":"5px"},attrs:{id:"docklayout_childreneditor_color"+i},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.childrenList[i],"backgroundColor",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Color")]),t._v(" "),a("option",[t._v("red")]),t._v(" "),a("option",[t._v("green")]),t._v(" "),a("option",[t._v("blue")]),t._v(" "),a("option",[t._v("yellow")]),t._v(" "),a("option",[t._v("cyan")]),t._v(" "),a("option",[t._v("orange")]),t._v(" "),a("option",[t._v("gray")])]),t._v(" "),a("Button",{staticStyle:{"min-width":"auto",padding:"2px","margin-left":"5px"},attrs:{id:"docklayout_childreneditor_removechild"+i,text:"❌"},on:{tap:function(e){return t.removeChildAtIndex(i)}}})],1)],1)})],2),t._v(" "),a("StackLayout",{staticClass:"demo-panel"},[a("Label",{staticClass:"demo-panel__title",attrs:{text:"Container"}}),t._v(" "),a("FlexboxLayout",{staticClass:"flexbox",attrs:{id:"flexboxlayout_container",backgroundColor:t.containerColor,width:t.containerWidth,height:t.containerHeight,flexDirection:t.containerFlexDirection,flexWrap:t.flexWrap,justifyContent:t.justifyContent,alignItems:t.alignItems,alignContent:t.alignContent}},t._l(t.childrenList,function(e){return a("Label",t._b({key:"flexboxLayoutChild_"+t.getRandInt()},"Label",e,!1))}),1)],1)],1)},[],!1,null,"671d3143",null);e.default=u.exports}}]);