(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{294:function(t,e,a){},295:function(t,e,a){"use strict";var n=a(2),r=a(15),i=a(21),l=a(77),s=a(75),o=a(5),c=a(99).f,u=a(102).f,p=a(9).f,f=a(298).trim,x=n.Number,m=x,d=x.prototype,v="Number"==i(a(76)(d)),h="trim"in String.prototype,b=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var a,n,r,i=(e=h?e.trim():f(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(a=e.charCodeAt(2))||120===a)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var l,o=e.slice(2),c=0,u=o.length;c<u;c++)if((l=o.charCodeAt(c))<48||l>r)return NaN;return parseInt(o,n)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof x&&(v?o(function(){d.valueOf.call(a)}):"Number"!=i(a))?l(new m(b(e)),a,x):b(e)};for(var y,_=a(6)?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;_.length>g;g++)r(m,y=_[g])&&!r(x,y)&&p(x,y,u(m,y));x.prototype=d,d.constructor=x,a(11)(n,"Number",x)}},296:function(t,e,a){},297:function(t,e,a){"use strict";a(14),a(100),a(101),a(295);var n=a(24),r=a(8),i={name:"Label",props:{text:{type:[String,Number],default:""},textWrap:{type:Boolean,default:!1}},directives:{"common-directive":n.a},computed:{fontClass:function(){return"string"==typeof this.text&&this.text.includes(" | fonticon")?this.text.replace(" | fonticon",""):""},textValue:function(){return"string"==typeof this.text&&this.text.includes(" | fonticon")?"":this.text}},mixins:[r.a]},l=(a(300),a(0)),s=Object(l.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("span",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-label",class:this.fontClass,style:{"white-space":this.textWrap?"normal":"nowrap"}},[this._v("\n  "+this._s(this.textValue)+"\n  "),this._t("default")],2)},[],!1,null,null,null);e.a=s.exports},298:function(t,e,a){var n=a(7),r=a(16),i=a(5),l=a(299),s="["+l+"]",o=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function(t,e,a){var r={},s=i(function(){return!!l[t]()||"​"!="​"[t]()}),o=r[t]=s?e(p):l[t];a&&(r[a]=o),n(n.P+n.F*s,"String",r)},p=u.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(o,"")),2&e&&(t=t.replace(c,"")),t};t.exports=u},299:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},300:function(t,e,a){"use strict";var n=a(294);a.n(n).a},301:function(t,e,a){},302:function(t,e,a){"use strict";a(295);var n=a(24),r=a(8),i={model:{event:"input",prop:"text"},name:"TextField",props:{maxLength:Number,keyboardType:{type:String,default:"text"},secure:{type:Boolean,default:!1},text:String,hint:String,editable:{type:Boolean,default:!0},autocorrect:Boolean},directives:{"common-directive":n.a},methods:{updateValue:function(t){this.$emit("textChange",t),this.$emit("input",t.target.value)}},computed:{handleKeyboardType:function(){switch(this.keyboardType){case"phone":return"tel";case"datetime":return"datetime-local";case"email":return"email";case"url":return"url";case"number":return"number";default:return"text"}}},mixins:[r.a]},l=(a(303),a(0)),s=Object(l.a)(i,function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-textfield",attrs:{placeholder:t.hint,disabled:!t.editable,maxlength:t.maxLength,type:t.secure?"password":t.handleKeyboardType,spellcheck:t.autocorrect},domProps:{value:t.text},on:{blur:function(e){return t.$emit("blur",e)},focus:function(e){return t.$emit("focus",e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("returnPress",e)},input:t.updateValue}})},[],!1,null,"967a7238",null);e.a=s.exports},303:function(t,e,a){"use strict";var n=a(296);a.n(n).a},304:function(t,e,a){"use strict";var n=a(24),r=a(8),i={name:"FlexboxLayout",props:{flexDirection:String,flexWrap:String,justifyContent:String,alignItems:String,alignContent:String},directives:{"common-directive":n.a},mixins:[r.a]},l=(a(306),a(0)),s=Object(l.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-flexbox-layout",style:{flexDirection:this.flexDirection,flexWrap:this.flexWrap,justifyContent:this.justifyContent,alignItems:this.alignItems,alignContent:this.alignContent}},[this._t("default")],2)},[],!1,null,null,null);e.a=s.exports},305:function(t,e,a){"use strict";a(295);var n=a(297),r={name:"VxpLabel",props:{text:{type:[String,Number],default:""},textWrap:{type:Boolean,default:!1}},components:{Label:n.a}},i=a(0),l=Object(i.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("Label",{attrs:{text:this.text,textWrap:this.textWrap}})},[],!1,null,null,null);e.a=l.exports},306:function(t,e,a){"use strict";var n=a(301);a.n(n).a},431:function(t,e,a){},517:function(t,e,a){"use strict";var n=a(431);a.n(n).a},564:function(t,e,a){"use strict";a.r(e);var n=a(305),r=a(74),i=a(302),l={name:"VxpLabelLiveDemo",data:function(){return{labelValue:"Hello world!",textWrap:!1}},components:{FlexboxLayout:a(304).a,VxpLabel:n.a,StackLayout:r.a,TextField:i.a}},s=(a(517),a(0)),o=Object(s.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("StackLayout",[a("StackLayout",{staticClass:"demo-panel"},[a("VxpLabel",{staticClass:"demo-panel__title",attrs:{text:"Label Properties"}}),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("VxpLabel",{staticClass:"option-label",attrs:{text:"Text"}}),t._v(" "),a("TextField",{staticClass:"option-input",attrs:{id:"label_text_input"},model:{value:t.labelValue,callback:function(e){t.labelValue=e},expression:"labelValue"}})],1),t._v(" "),a("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[a("VxpLabel",{staticClass:"option-label",attrs:{text:"Text Wrap"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.textWrap,expression:"textWrap"}],attrs:{id:"label_textwrap_cb",type:"checkbox"},domProps:{checked:Array.isArray(t.textWrap)?t._i(t.textWrap,null)>-1:t.textWrap},on:{change:function(e){var a=t.textWrap,n=e.target,r=!!n.checked;if(Array.isArray(a)){var i=t._i(a,null);n.checked?i<0&&(t.textWrap=a.concat([null])):i>-1&&(t.textWrap=a.slice(0,i).concat(a.slice(i+1)))}else t.textWrap=r}}})],1)],1),t._v(" "),a("StackLayout",{staticClass:"demo-panel"},[a("VxpLabel",{staticClass:"demo-panel__title",attrs:{text:"Rendered Result"}}),t._v(" "),a("VxpLabel",{attrs:{id:"label_component",text:t.labelValue,textWrap:t.textWrap}})],1)],1)},[],!1,null,"32651da5",null);e.default=o.exports}}]);