(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{294:function(t,e,a){},295:function(t,e,a){"use strict";var n=a(2),i=a(15),r=a(21),c=a(77),s=a(75),o=a(5),l=a(99).f,u=a(102).f,d=a(9).f,p=a(298).trim,x=n.Number,f=x,h=x.prototype,v="Number"==r(a(76)(h)),m="trim"in String.prototype,b=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var a,n,i,r=(e=m?e.trim():p(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(a=e.charCodeAt(2))||120===a)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var c,o=e.slice(2),l=0,u=o.length;l<u;l++)if((c=o.charCodeAt(l))<48||c>i)return NaN;return parseInt(o,n)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof x&&(v?o(function(){h.valueOf.call(a)}):"Number"!=r(a))?c(new f(b(e)),a,x):b(e)};for(var _,k=a(6)?l(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;k.length>y;y++)i(f,_=k[y])&&!i(x,_)&&d(x,_,u(f,_));x.prototype=h,h.constructor=x,a(11)(n,"Number",x)}},296:function(t,e,a){},297:function(t,e,a){"use strict";a(14),a(100),a(101),a(295);var n=a(24),i=a(8),r={name:"Label",props:{text:{type:[String,Number],default:""},textWrap:{type:Boolean,default:!1}},directives:{"common-directive":n.a},computed:{fontClass:function(){return"string"==typeof this.text&&this.text.includes(" | fonticon")?this.text.replace(" | fonticon",""):""},textValue:function(){return"string"==typeof this.text&&this.text.includes(" | fonticon")?"":this.text}},mixins:[i.a]},c=(a(300),a(0)),s=Object(c.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("span",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-label",class:this.fontClass,style:{"white-space":this.textWrap?"normal":"nowrap"}},[this._v("\n  "+this._s(this.textValue)+"\n  "),this._t("default")],2)},[],!1,null,null,null);e.a=s.exports},298:function(t,e,a){var n=a(7),i=a(16),r=a(5),c=a(299),s="["+c+"]",o=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),u=function(t,e,a){var i={},s=r(function(){return!!c[t]()||"​"!="​"[t]()}),o=i[t]=s?e(d):c[t];a&&(i[a]=o),n(n.P+n.F*s,"String",i)},d=u.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(o,"")),2&e&&(t=t.replace(l,"")),t};t.exports=u},299:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},300:function(t,e,a){"use strict";var n=a(294);a.n(n).a},302:function(t,e,a){"use strict";a(295);var n=a(24),i=a(8),r={model:{event:"input",prop:"text"},name:"TextField",props:{maxLength:Number,keyboardType:{type:String,default:"text"},secure:{type:Boolean,default:!1},text:String,hint:String,editable:{type:Boolean,default:!0},autocorrect:Boolean},directives:{"common-directive":n.a},methods:{updateValue:function(t){this.$emit("textChange",t),this.$emit("input",t.target.value)}},computed:{handleKeyboardType:function(){switch(this.keyboardType){case"phone":return"tel";case"datetime":return"datetime-local";case"email":return"email";case"url":return"url";case"number":return"number";default:return"text"}}},mixins:[i.a]},c=(a(303),a(0)),s=Object(c.a)(r,function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-textfield",attrs:{placeholder:t.hint,disabled:!t.editable,maxlength:t.maxLength,type:t.secure?"password":t.handleKeyboardType,spellcheck:t.autocorrect},domProps:{value:t.text},on:{blur:function(e){return t.$emit("blur",e)},focus:function(e){return t.$emit("focus",e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("returnPress",e)},input:t.updateValue}})},[],!1,null,"967a7238",null);e.a=s.exports},303:function(t,e,a){"use strict";var n=a(296);a.n(n).a},305:function(t,e,a){"use strict";a(295);var n=a(297),i={name:"VxpLabel",props:{text:{type:[String,Number],default:""},textWrap:{type:Boolean,default:!1}},components:{Label:n.a}},r=a(0),c=Object(r.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("Label",{attrs:{text:this.text,textWrap:this.textWrap}})},[],!1,null,null,null);e.a=c.exports},307:function(t,e,a){},308:function(t,e,a){},312:function(t,e,a){},313:function(t,e,a){"use strict";var n=a(327),i=a(321),r=a(74),c={name:"VxpCheckbox",components:{FadeTransition:n.a,AbsoluteLayout:i.a,StackLayout:r.a},model:{prop:"checked",event:"change"},props:{checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},data:function(){return{checkedLocal:this.checked}},methods:{onTap:function(t,e){e&&e(),this.disabled||(this.checkedLocal=!this.checkedLocal,this.$emit("change",this.checkedLocal,t))}},watch:{checked:function(){this.checkedLocal=this.checked}}},s=(a(331),a(0)),o=Object(s.a)(c,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("AbsoluteLayout",{staticClass:"vxp-checkbox",class:{"vxp-checkbox--checked":t.checkedLocal,"vxp-checkbox__disabled":t.disabled},on:{tap:t.onTap}},[a("FadeTransition",{attrs:{duration:200}},[t.checkedLocal?a("StackLayout",t._b({staticClass:"vxp-checkbox__background vxp-checkbox__checked",class:{"vxp-checkbox__checked__disabled":t.disabled},attrs:{top:"0",left:"0"}},"StackLayout",t.$attrs,!1),[a("Label",{staticClass:"vxp-checkbox__checked__icon",attrs:{text:" "}})],1):t._e()],1),t._v(" "),a("FadeTransition",{attrs:{duration:200}},[t.checkedLocal?t._e():a("StackLayout",t._b({staticClass:"vxp-checkbox__background vxp-checkbox__unchecked",class:{"vxp-checkbox__unchecked__disabled":t.disabled},attrs:{top:"0",left:"0"}},"StackLayout",t.$attrs,!1))],1)],1)},[],!1,null,null,null);e.a=o.exports},321:function(t,e,a){"use strict";var n=a(24),i=a(8),r={name:"AbsoluteLayout",directives:{"common-directive":n.a},mixins:[i.a]},c=(a(323),a(0)),s=Object(c.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-absolute-layout"},[this._t("default")],2)},[],!1,null,null,null);e.a=s.exports},323:function(t,e,a){"use strict";var n=a(307);a.n(n).a},326:function(t,e,a){"use strict";var n=a(308);a.n(n).a},327:function(t,e,a){"use strict";a(295);var n={name:"FadeTransition",props:{duration:{type:[String,Number],default:"500"}},computed:{enterActiveClass:function(){return"fade-enter-active-duration-".concat(this.duration)},leaveActiveClass:function(){return"fade-leave-active-duration-".concat(this.duration)}}},i=(a(326),a(0)),r=Object(i.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"fade","enter-active-class":this.enterActiveClass,"leave-active-class":this.leaveActiveClass}},[this._t("default")],2)},[],!1,null,null,null);e.a=r.exports},331:function(t,e,a){"use strict";var n=a(312);a.n(n).a},347:function(t,e,a){},366:function(t,e,a){"use strict";var n=a(305),i={name:"VxpLink",props:{text:{type:String,required:!0},externalUrl:{type:String},disabled:{type:Boolean,default:!1}},components:{VxpLabel:n.a}},r=(a(411),a(0)),c=Object(r.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.disabled?a("VxpLabel",{staticClass:"typ-body",attrs:{text:t.text}}):t.externalUrl?a("a",{staticClass:"vxp-link typ-body",attrs:{href:t.externalUrl,target:t.externalUrl?"_blank":""}},[t._v(t._s(t.text))]):a("a",{staticClass:"vxp-link typ-body",on:{click:function(e){return t.$emit("tap",e)}}},[t._v(t._s(t.text))])},[],!1,null,null,null);e.a=c.exports},411:function(t,e,a){"use strict";var n=a(347);a.n(n).a},432:function(t,e,a){},518:function(t,e,a){"use strict";var n=a(432);a.n(n).a},565:function(t,e,a){"use strict";a.r(e);var n=a(302),i=a(297),r=a(74),c=a(366),s=a(313),o={name:"VxpLinkLiveDemo",components:{StackLayout:r.a,TextField:n.a,Label:i.a,VxpLink:c.a,VxpCheckbox:s.a},data:function(){return{text:"Link to another site",externalUrl:"https://github.com/vuexp",eventName:"",isDisabled:!1}},computed:{eventLog:function(){return"event: ".concat(this.eventName)}},methods:{onClicked:function(t){var e=t.type;this.eventName=e}}},l=(a(518),a(0)),u=Object(l.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("StackLayout",[a("StackLayout",{staticClass:"demo-panel",staticStyle:{"margin-top":"20px"}},[a("Label",{staticClass:"demo-panel__title",attrs:{text:"Live example"}}),t._v(" "),a("VxpLink",{attrs:{text:t.text,externalUrl:t.externalUrl,id:"linkButton",disabled:t.isDisabled}}),t._v(" "),a("VxpLink",{attrs:{text:"Another link without externalUrl to test click event",id:"linkButtonWithOutUrl",disabled:t.isDisabled},on:{tap:function(e){return t.onClicked(e)}}})],1),t._v(" "),a("StackLayout",{staticClass:"demo-panel"},[a("Label",{staticClass:"demo-panel__title",attrs:{text:"Manage VxpLink Properties"}}),t._v(" "),a("StackLayout",{staticClass:"m-b-10",attrs:{orientation:"horizontal"}},[a("Label",{attrs:{text:"Text:"}}),t._v(" "),a("TextField",{attrs:{id:"linkButton__text__textfield",editable:!0},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),t._v(" "),a("StackLayout",{staticClass:"m-b-10",attrs:{orientation:"horizontal"}},[a("Label",{attrs:{text:"External Url:"}}),t._v(" "),a("TextField",{attrs:{id:"linkButton__externalUrl__textfield",editable:!0},model:{value:t.externalUrl,callback:function(e){t.externalUrl=e},expression:"externalUrl"}})],1),t._v(" "),a("StackLayout",{staticClass:"m-b-10",attrs:{orientation:"horizontal"}},[a("Label",{attrs:{id:"linkButton__tap__eventLog",text:t.eventLog}})],1),t._v(" "),a("StackLayout",{staticClass:"m-b-10",attrs:{orientation:"horizontal"}},[a("Label",{attrs:{text:"Disable clicking:"}}),t._v(" "),a("VxpCheckbox",{attrs:{id:"linkButton__disable__checkbox"},model:{value:t.isDisabled,callback:function(e){t.isDisabled=e},expression:"isDisabled"}})],1)],1)],1)},[],!1,null,"4ffae4e9",null);e.default=u.exports}}]);