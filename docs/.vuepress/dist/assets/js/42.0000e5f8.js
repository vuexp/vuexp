(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{294:function(e,t,n){},295:function(e,t,n){"use strict";var a=n(2),r=n(15),i=n(21),u=n(77),l=n(75),o=n(5),s=n(99).f,c=n(102).f,d=n(9).f,m=n(298).trim,f=a.Number,p=f,h=f.prototype,v="Number"==i(n(76)(h)),x="trim"in String.prototype,b=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var n,a,r,i=(t=x?t.trim():m(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+t}for(var u,o=t.slice(2),s=0,c=o.length;s<c;s++)if((u=o.charCodeAt(s))<48||u>r)return NaN;return parseInt(o,a)}}return+t};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof f&&(v?o(function(){h.valueOf.call(n)}):"Number"!=i(n))?u(new p(b(t)),n,f):b(t)};for(var y,g=n(6)?s(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;g.length>_;_++)r(p,y=g[_])&&!r(f,y)&&d(f,y,c(p,y));f.prototype=h,h.constructor=f,n(11)(a,"Number",f)}},296:function(e,t,n){},297:function(e,t,n){"use strict";n(14),n(100),n(101),n(295);var a=n(24),r=n(8),i={name:"Label",props:{text:{type:[String,Number],default:""},textWrap:{type:Boolean,default:!1}},directives:{"common-directive":a.a},computed:{fontClass:function(){return"string"==typeof this.text&&this.text.includes(" | fonticon")?this.text.replace(" | fonticon",""):""},textValue:function(){return"string"==typeof this.text&&this.text.includes(" | fonticon")?"":this.text}},mixins:[r.a]},u=(n(300),n(0)),l=Object(u.a)(i,function(){var e=this.$createElement;return(this._self._c||e)("span",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-label",class:this.fontClass,style:{"white-space":this.textWrap?"normal":"nowrap"}},[this._v("\n  "+this._s(this.textValue)+"\n  "),this._t("default")],2)},[],!1,null,null,null);t.a=l.exports},298:function(e,t,n){var a=n(7),r=n(16),i=n(5),u=n(299),l="["+u+"]",o=RegExp("^"+l+l+"*"),s=RegExp(l+l+"*$"),c=function(e,t,n){var r={},l=i(function(){return!!u[e]()||"​"!="​"[e]()}),o=r[e]=l?t(d):u[e];n&&(r[n]=o),a(a.P+a.F*l,"String",r)},d=c.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(o,"")),2&t&&(e=e.replace(s,"")),e};e.exports=c},299:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},300:function(e,t,n){"use strict";var a=n(294);n.n(a).a},302:function(e,t,n){"use strict";n(295);var a=n(24),r=n(8),i={model:{event:"input",prop:"text"},name:"TextField",props:{maxLength:Number,keyboardType:{type:String,default:"text"},secure:{type:Boolean,default:!1},text:String,hint:String,editable:{type:Boolean,default:!0},autocorrect:Boolean},directives:{"common-directive":a.a},methods:{updateValue:function(e){this.$emit("textChange",e),this.$emit("input",e.target.value)}},computed:{handleKeyboardType:function(){switch(this.keyboardType){case"phone":return"tel";case"datetime":return"datetime-local";case"email":return"email";case"url":return"url";case"number":return"number";default:return"text"}}},mixins:[r.a]},u=(n(303),n(0)),l=Object(u.a)(i,function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-textfield",attrs:{placeholder:e.hint,disabled:!e.editable,maxlength:e.maxLength,type:e.secure?"password":e.handleKeyboardType,spellcheck:e.autocorrect},domProps:{value:e.text},on:{blur:function(t){return e.$emit("blur",t)},focus:function(t){return e.$emit("focus",t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("returnPress",t)},input:e.updateValue}})},[],!1,null,"967a7238",null);t.a=l.exports},303:function(e,t,n){"use strict";var a=n(296);n.n(a).a},399:function(e,t,n){},487:function(e,t,n){"use strict";var a=n(399);n.n(a).a},545:function(e,t,n){"use strict";n.r(t);n(295);var a=n(8),r={name:"Slider",props:{value:{type:[String,Number],default:0},minValue:{type:[String,Number],default:0},maxValue:{type:[String,Number],default:100}},data:function(){return{isEdgeBrowser:!1,thumbColor:"dodgerblue",backgroundColor:"#d3d3d3"}},updated:function(){this.setStyle()},mounted:function(){this.setStyle()},beforeMount:function(){!!!document.documentMode&&!!window.StyleMedia&&(this.isEdgeBrowser=!0)},methods:{setStyle:function(){this.$refs.slider.style.color&&(this.thumbColor=this.$refs.slider.style.color),this.$refs.slider.style.background&&(this.backgroundColor=this.$refs.slider.style.background)},updateValue:function(e){this.$emit("input",parseInt(e.target.value))}},mixins:[a.a]},i=(n(487),n(0)),u=Object(i.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"slider",staticClass:"vxp-slider",class:{"vxp-slider--edge":e.isEdgeBrowser}},[n("input",{staticClass:"vxp-slider__scroll",style:{"--thumb-color":e.thumbColor,"--background-color":e.backgroundColor},attrs:{"aria-label":"VXP Slider",type:"range",min:e.minValue,max:e.maxValue},domProps:{value:e.value},on:{change:function(t){return e.$emit("valueChange",t)},input:e.updateValue}})])},[],!1,null,null,null).exports,l=n(297),o=n(302),s={name:"SliderDoc",components:{StackLayout:n(74).a,Slider:u,Label:l.a,TextField:o.a},data:function(){return{value:"0",minValue:"0",maxValue:"100"}},methods:{onValueChanged:function(e){this.value=e.target.value}}},c=Object(i.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("StackLayout",[n("Slider",{attrs:{value:e.value,"min-value":e.minValue,"max-value":e.maxValue},on:{valueChange:function(t){return e.onValueChanged(t)}}}),e._v(" "),n("Label",{attrs:{text:"Value: "}},[n("Label",{attrs:{id:"slider__value__label",text:e.value}})],1),e._v(" "),n("Label",{attrs:{text:"Min Value: "}},[n("TextField",{attrs:{"keyboard-type":"number",id:"slider__minValue__input"},model:{value:e.minValue,callback:function(t){e.minValue=t},expression:"minValue"}})],1),e._v(" "),n("Label",{attrs:{text:"Max Value: "}},[n("TextField",{attrs:{"keyboard-type":"number",id:"slider__maxValue__input"},model:{value:e.maxValue,callback:function(t){e.maxValue=t},expression:"maxValue"}})],1),e._v(" "),n("Label",{attrs:{text:"Set Value: "}},[n("TextField",{attrs:{"keyboard-type":"number",id:"slider__setValue__input"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)},[],!1,null,null,null);t.default=c.exports}}]);