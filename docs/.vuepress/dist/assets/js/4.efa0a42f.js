(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{296:function(e,t,n){},302:function(e,t,n){"use strict";n(295);var i=n(24),a=n(8),r={model:{event:"input",prop:"text"},name:"TextField",props:{maxLength:Number,keyboardType:{type:String,default:"text"},secure:{type:Boolean,default:!1},text:String,hint:String,editable:{type:Boolean,default:!0},autocorrect:Boolean},directives:{"common-directive":i.a},methods:{updateValue:function(e){this.$emit("textChange",e),this.$emit("input",e.target.value)}},computed:{handleKeyboardType:function(){switch(this.keyboardType){case"phone":return"tel";case"datetime":return"datetime-local";case"email":return"email";case"url":return"url";case"number":return"number";default:return"text"}}},mixins:[a.a]},s=(n(303),n(0)),o=Object(s.a)(r,function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-textfield",attrs:{placeholder:e.hint,disabled:!e.editable,maxlength:e.maxLength,type:e.secure?"password":e.handleKeyboardType,spellcheck:e.autocorrect},domProps:{value:e.text},on:{blur:function(t){return e.$emit("blur",t)},focus:function(t){return e.$emit("focus",t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("returnPress",t)},input:e.updateValue}})},[],!1,null,"967a7238",null);t.a=o.exports},303:function(e,t,n){"use strict";var i=n(296);n.n(i).a},305:function(e,t,n){"use strict";n(295);var i=n(297),a={name:"VxpLabel",props:{text:{type:[String,Number],default:""},textWrap:{type:Boolean,default:!1}},components:{Label:i.a}},r=n(0),s=Object(r.a)(a,function(){var e=this.$createElement;return(this._self._c||e)("Label",{attrs:{text:this.text,textWrap:this.textWrap}})},[],!1,null,null,null);t.a=s.exports},311:function(e,t,n){},324:function(e,t,n){},325:function(e,t,n){"use strict";function i(e,t,n){var i;return function(){var a=this,r=arguments;clearTimeout(i),i=setTimeout(function(){i=null,n||e.apply(a,r)},t),n&&!i&&e.apply(a,r)}}n.d(t,"a",function(){return i})},330:function(e,t,n){"use strict";var i=n(311);n.n(i).a},337:function(e,t,n){"use strict";n(14),n(100),n(101),n(105),n(10);var i=n(24),a=n(8),r={name:"GridLayout",props:{columns:{type:String,default:""},rows:{type:String,default:""}},computed:{formattedColumns:function(){var e=[];return this.columns.split(",").forEach(function(t){if(t.trim().includes("*")){var n=""===t.trim().replace("*","")?"1":parseInt(t.trim().replace("*",""));e.push(n+"fr")}else"auto"===t.trim()?e.push("min-content"):e.push(parseInt(t.trim())+"px")}),e.join(" ")},formattedRows:function(){var e=[];return this.rows.split(",").forEach(function(t){if(t.trim().includes("*")){var n=""===t.trim().replace("*","")?"1":parseInt(t.trim().replace("*",""));e.push(n+"fr")}else"auto"===t.trim()?e.push("min-content"):e.push(parseInt(t.trim())+"px")}),e.join(" ")}},directives:{"common-directive":i.a},mixins:[a.a]},s=(n(330),n(0)),o=Object(s.a)(r,function(){var e=this.$createElement;return(this._self._c||e)("div",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-grid-layout",style:{gridTemplateColumns:this.formattedColumns,gridTemplateRows:this.formattedRows}},[this._t("default")],2)},[],!1,null,null,null);t.a=o.exports},338:function(e,t,n){"use strict";n(29),n(80),n(104),Object.freeze({Phone:1,Tablet:2,Browser:3}),Object.freeze({landscape:1,portrait:2,unknown:3});var i=Object.freeze({Unknown:1,Windows:2,MacOS:3,UNIX:4,Linux:5}),a=Object.freeze({One:"col-1",Two:"col-2",Three:"col-3"});var r=n(325),s=i.Unknown;function o(){if("undefined"==typeof navigator||navigator&&"node.js"===navigator.userAgent)return{name:"NodeJS",version:process.version};var e,t=navigator.userAgent,n=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(n[1])?{name:"IE",version:(e=/\brv[ :]+(\d+)/g.exec(t)||[])[1]||""}:"Chrome"===n[1]&&null!==(e=t.match(/\bOPR|Edge\/(\d+)/))?{name:"Opera",version:e[1]}:(n=n[2]?[n[1],n[2]]:[navigator.appName,navigator.appVersion,"-?"],null!==(e=t.match(/version\/(\d+)/i))&&n.splice(1,1,e[1]),{name:n[0],version:n[1]})}function c(e){e(function(e,t,n,i){return"web"===t?i<=600?a.One:i<=1024?a.Two:a.Three:"Phone"===n?a.One:"portrait"===e?a.One:i<=1024?a.Two:a.Three}("undefined"!=typeof window?window.innerWidth>window.innerHeight?"landscape":"portrait":"landscape",l.platform,l.deviceType,l.screenWidth()))}"undefined"!=typeof navigator&&(-1!==navigator.appVersion.indexOf("Win")&&(s=i.Windows),-1!==navigator.appVersion.indexOf("Mac")&&(s=i.MacOS),-1!==navigator.appVersion.indexOf("X11")&&(s=i.UNIX),-1!==navigator.appVersion.indexOf("Linux")&&(s=i.Linux));var l={deviceType:"browser",language:"en",os:s,osVersion:null,sdkVersion:null,platform:"web",browser:o().name,browserVersion:o().version,screenWidth:function(){return"undefined"!=typeof window?window.innerWidth:1024},screenHeight:function(){return"undefined"!=typeof window?window.innerHeight:768},onGridChange:function(e){c(e),"undefined"!=typeof window&&window.addEventListener("resize",function(){Object(r.a)(function(){c(e)},500)()})},screenScale:function(){return 1}};t.a=l},349:function(e,t,n){"use strict";var i=n(19),a=n(7),r=n(30),s=n(106),o=n(107),c=n(22),l=n(350),u=n(108);a(a.S+a.F*!n(82)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,d,p=r(e),h="function"==typeof this?this:Array,m=arguments.length,f=m>1?arguments[1]:void 0,v=void 0!==f,x=0,g=u(p);if(v&&(f=i(f,m>2?arguments[2]:void 0,2)),null==g||h==Array&&o(g))for(n=new h(t=c(p.length));t>x;x++)l(n,x,v?f(p[x],x):p[x]);else for(d=g.call(p),n=new h;!(a=d.next()).done;x++)l(n,x,v?s(d,f,[a.value,x],!0):a.value);return n.length=x,n}})},350:function(e,t,n){"use strict";var i=n(9),a=n(58);e.exports=function(e,t,n){t in e?i.f(e,t,a(0,n)):e[t]=n}},351:function(e,t,n){"use strict";var i=n(324);n.n(i).a},352:function(e,t,n){"use strict";n(10),n(349),n(295);var i=n(24),a=n(8),r={name:"WrapLayout",props:{itemWidth:{type:Number,default:NaN},itemHeight:{type:Number,default:NaN},orientation:{type:String,default:"horizontal"}},directives:{"common-directive":i.a},mounted:function(){this.calculateChildrenSizes()},updated:function(){this.calculateChildrenSizes()},methods:{calculateChildrenSizes:function(){var e=this;this.itemWidth&&Array.from(this.$el.children).forEach(function(t){t.style.width=e.itemWidth+"px"});this.itemHeight&&Array.from(this.$el.children).forEach(function(t){t.style.height=e.itemHeight+"px"})}},mixins:[a.a]},s=(n(351),n(0)),o=Object(s.a)(r,function(){var e=this.$createElement;return(this._self._c||e)("div",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-wrap-layout",style:{flexDirection:"vertical"===this.orientation?"column":"row"}},[this._t("default")],2)},[],!1,null,null,null);t.a=o.exports},435:function(e,t,n){},436:function(e,t,n){},454:function(e,t,n){"use strict";var i=n(338),a=n(8),r={data:function(){return{searchText:""}},props:{items:{type:Array,default:function(){return[]}},selected:{type:Array,default:function(){return[]}},labelProp:{type:String,default:"label"},hint:{type:String,default:""},emptySuggestionsLabel:{type:String,default:""}},computed:{displayItems:function(){var e=this;return this.searchText?this.notSelectedItems().filter(function(t){return t[e.labelProp].toLocaleLowerCase().indexOf(e.searchText.toLocaleLowerCase())>-1}):this.notSelectedItems()}},methods:{selectItem:function(e){this.selected.push(e),this.selectedChange()},selectedChange:function(){this.$emit("selectedChange",this.selected)},notSelectedItems:function(){var e=this;return this.items.filter(function(t){return-1===e.selected.indexOf(t)})},removeSelection:function(e){var t=this.selected.indexOf(e);this.selected.splice(t,1),this.selectedChange()},searchTextChanged:function(e){this.$emit("searchTextChange",e)},clearSearchText:function(){this.searchText=""}}},s={mixins:[r]},o=(n(523),n(0)),c=Object(o.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Frame",[n("Page",[n("ActionBar",{attrs:{title:""}},[n("ActionItem",{attrs:{text:"Done","ios.position":"right"},on:{tap:e.$modal.close}})],1),e._v(" "),n("StackLayout",{staticClass:"vxp-multiselectdropdown-native-modal"},[n("WrapLayout",[n("WrapLayout",{attrs:{orientation:"horizontal"}},e._l(e.selected,function(t,i){return n("StackLayout",{key:i,staticClass:"vxp-multiselectdropdown-native-modal__selected-items",attrs:{orientation:"horizontal"},on:{tap:function(n){return e.removeSelection(t)}}},[n("Label",{staticClass:"vxp-multiselectdropdown-native-modal__selected-item",attrs:{text:t[e.labelProp]+"  ×"}})],1)}),1),e._v(" "),n("SearchBar",{ref:"searchInput",staticClass:"vxp-multiselectdropdown-native-modal__search-input",attrs:{width:"100%",hint:e.hint},on:{textChange:function(t){return e.searchTextChanged(e.searchText)}},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1),e._v(" "),n("StackLayout",[e.displayItems.length?n("StackLayout",[n("ListView",{attrs:{for:"item in displayItems",height:"100%"}},[n("v-template",[n("Label",{staticClass:"vxp-multiselectdropdown-native-modal__selectable-item",attrs:{text:e.item[e.labelProp]},on:{tap:function(t){return e.selectItem(e.item)}}})],1)],1)],1):e.emptySuggestionsLabel?n("StackLayout",[n("Label",{attrs:{text:e.emptySuggestionsLabel}})],1):e._e()],1)],1)],1)],1)},[],!1,null,null,null).exports,l=n(74),u=n(352),d=n(337),p=n(297),h=n(302),m={name:"MultiSelectDropdown",model:{prop:"selected",event:"selectedChange"},components:{StackLayout:l.a,WrapLayout:u.a,GridLayout:d.a,Label:p.a,TextField:h.a},data:function(){return{suggestionsOpened:!1}},mounted:function(){this.isNative||document.body.addEventListener("mousedown",this.clickOutsideListener)},destroyed:function(){this.isNative||document.body.removeEventListener("mousedown",this.clickOutsideListener)},computed:{isNative:function(){return"web"!==i.a.platform}},methods:{activateSuggestions:function(){this.isNative?this.showNativeModal():this.suggestionsOpened=!0},deactivateSuggestions:function(){this.suggestionsOpened=!1},selectableItemTapped:function(e){this.selectItem(e),this.focusSearchInput(),this.selected.length===this.items.length&&this.deactivateSuggestions()},selectedItemTapped:function(e){this.isNative?this.showNativeModal():(this.removeSelection(e),this.focusSearchInput(),this.activateSuggestions())},showNativeModal:function(){var e=this;this.$showModal(c,{props:this.$props,fullscreen:!0}).then(function(){e.selectedChange()})},focusSearchInput:function(){this.$refs.searchInput&&this.$refs.searchInput.$el.focus()},clickOutsideListener:function(e){if(this.suggestionsOpened){var t=this.$el,n=e.target;do{if(n===t)return;n=n.parentNode}while(n);this.deactivateSuggestions()}}},mixins:[a.a,r]},f=(n(524),Object(o.a)(m,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("StackLayout",{staticClass:"vxp-multiselectdropdown",attrs:{orientation:"vertical"}},[n("WrapLayout",[n("WrapLayout",{attrs:{orientation:"horizontal"}},e._l(e.selected,function(t,i){return n("StackLayout",{key:i,staticClass:"vxp-multiselectdropdown__pill",attrs:{orientation:"horizontal"},on:{tap:function(n){return e.selectedItemTapped(t)}}},[n("Label",{staticClass:"vxp-multiselectdropdown__pill-label",attrs:{text:t[e.labelProp]}}),e._v(" "),e.isNative?e._e():n("Label",{staticClass:"vxp-multiselectdropdown__pill-remove-text",attrs:{text:"×"}})],1)}),1),e._v(" "),n("GridLayout",{staticClass:"vxp-multiselectdropdown__search-input__wrapper",attrs:{columns:"*, auto",rows:"auto, *, auto",width:"100%",flexGrow:"1",orientation:"horizontal"}},[n("TextField",{ref:"searchInput",staticClass:"vxp-multiselectdropdown__search-input",attrs:{col:"0",row:"0",colSpan:"2",editable:!e.isNative,hint:e.hint,flexGrow:"1"},on:{focus:function(t){return e.activateSuggestions()},input:function(t){return e.searchTextChanged(t)},tap:function(t){return e.activateSuggestions()}},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),e._v(" "),e.isNative||e.searchText?e._e():n("Label",{staticClass:"vxp-multiselectdropdown__pill-caret-down",attrs:{col:"1",row:"0",text:"▼"},on:{tap:function(t){return e.activateSuggestions()}}}),e._v(" "),e.isNative?e._e():n("Label",{directives:[{name:"show",rawName:"v-show",value:e.searchText,expression:"searchText"}],staticClass:"vxp-multiselectdropdown__pill-remove-search",attrs:{col:"1",row:"0",text:"×"},on:{tap:function(t){return e.clearSearchText()}}})],1)],1),e._v(" "),e.suggestionsOpened&&!e.isNative?n("StackLayout",{staticClass:"vxp-multiselectdropdown__suggestions-box"},[e.displayItems.length?n("StackLayout",e._l(e.displayItems,function(t,i){return n("StackLayout",{key:i,staticClass:"vxp-multiselectdropdown__suggestions-box__selectable-item",on:{tap:function(n){return e.selectableItemTapped(t)}}},[n("Label",{attrs:{text:t[e.labelProp]}})],1)}),1):e.emptySuggestionsLabel?n("StackLayout",[n("Label",{staticClass:"vxp-multiselectdropdown__suggestions-box__empty",attrs:{text:e.emptySuggestionsLabel},on:{tap:function(t){return e.deactivateSuggestions()}}})],1):e._e()],1):e._e()],1)},[],!1,null,null,null));t.a=f.exports},523:function(e,t,n){"use strict";var i=n(435);n.n(i).a},524:function(e,t,n){"use strict";var i=n(436);n.n(i).a}}]);