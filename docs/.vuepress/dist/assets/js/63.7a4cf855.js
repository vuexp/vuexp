(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{438:function(t,e,s){},526:function(t,e,s){"use strict";var a=s(438);s.n(a).a},568:function(t,e,s){"use strict";s.r(e);var a=s(454),l=s(74),i=s(305),n=s(313),o=s(336),c=s(302),d={name:"VxpMultiSelectDropdownLiveDemoDoc",components:{VxpMultiSelectDropdown:a.a,StackLayout:l.a,VxpLabel:i.a,VxpButton:o.a,TextField:c.a,VxpCheckbox:n.a},mounted:function(){this.addNewItem("Lorem"),this.addNewItem("ipsum dolor"),this.addNewItem("quis nostrud"),this.addNewItem("voluptate velit"),this.addNewItem("esse"),this.addNewItem("occaecat"),this.addNewItem("mollit anim")},data:function(){return{selectedItems:[],selectableItems:[],hint:"Select items",emptySuggestionsLabel:"There is no items to select"}},methods:{addNewItem:function(t){this.selectableItems.push({label:t||"",value:{}})},removeAll:function(){this.selectableItems=[],this.selectedItems=[]},changeStatus:function(t,e){var s=this.selectedItems.indexOf(e);s>-1?this.selectedItems.splice(s,1):this.selectedItems.push(e)},isItemSelected:function(t){return this.selectableItems.indexOf(t)>-1&&this.selectedItems.indexOf(t)>-1}}},r=(s(526),s(0)),u=Object(r.a)(d,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("StackLayout",{attrs:{id:"vxpmultiselectdropdown-doc"}},[s("VxpMultiSelectDropdown",{attrs:{items:t.selectableItems,hint:t.hint,emptySuggestionsLabel:t.emptySuggestionsLabel,id:"vxpmultiselectdropdown"},model:{value:t.selectedItems,callback:function(e){t.selectedItems=e},expression:"selectedItems"}}),t._v(" "),s("StackLayout",{staticClass:"demo-panel"},[s("VxpLabel",{staticClass:"demo-panel__title",attrs:{text:"Behaviour Configuration"}}),t._v(" "),s("StackLayout",{staticClass:"margin-top-10"},[s("VxpLabel",{attrs:{text:"Hint: "}}),t._v(" "),s("TextField",{attrs:{id:"vxpmultiselectdropdown__hint__input"},model:{value:t.hint,callback:function(e){t.hint=e},expression:"hint"}})],1),t._v(" "),s("StackLayout",{staticClass:"margin-top-10"},[s("VxpLabel",{attrs:{text:"Empty Suggestions Label: "}}),t._v(" "),s("TextField",{attrs:{id:"vxpmultiselectdropdown__emptySuggestionsLabel__input"},model:{value:t.emptySuggestionsLabel,callback:function(e){t.emptySuggestionsLabel=e},expression:"emptySuggestionsLabel"}})],1)],1),t._v(" "),s("StackLayout",{staticClass:"demo-panel"},[s("VxpLabel",{staticClass:"demo-panel__title",attrs:{text:"Items Configuration"}}),t._v(" "),s("StackLayout",{attrs:{orientation:"horizontal"}},[s("VxpButton",{attrs:{id:"vxpmultiselectdropdown_addNewItem__button",text:"Add New Item"},on:{tap:function(e){return t.addNewItem()}}}),t._v(" "),s("VxpButton",{attrs:{id:"vxpmultiselectdropdown_removeAll__button",text:"Clear Items"},on:{tap:function(e){return t.removeAll()}}})],1),t._v(" "),t._l(t.selectableItems,function(e,a){return s("StackLayout",{key:a,staticClass:"margin-top-10",attrs:{orientation:"horizontal"}},[s("StackLayout",{staticClass:"m-r-10",attrs:{orientation:"horizontal"}},[s("VxpLabel",{staticClass:"m-r-10",attrs:{text:"Label: "}}),t._v(" "),s("TextField",{attrs:{id:"vxpmultiselectdropdown_items__label_"+a+"_input"},model:{value:e.label,callback:function(s){t.$set(e,"label",s)},expression:"item.label"}})],1),t._v(" "),s("StackLayout",{staticClass:"m-r-10",attrs:{orientation:"horizontal"}},[s("VxpLabel",{staticClass:"m-r-10",attrs:{text:"Selected: "}}),t._v(" "),s("VxpCheckbox",{attrs:{id:"vxpmultiselectdropdown_items__selected_"+a+"_checkbox",checked:t.isItemSelected(e)},on:{change:function(s){return t.changeStatus(s,e)}}})],1)],1)})],2),t._v(" "),s("StackLayout",{staticClass:"margin-top-10",attrs:{orientation:"horizontal"}},[s("VxpLabel",{attrs:{text:"Selected Items :"}}),t._v(" "),s("VxpLabel",{attrs:{id:"vxpmultiselectdropdown_selected_indexes",text:t.selectedItems.map(function(t){return t.label}).join(",")}})],1)],1)},[],!1,null,"611429a0",null);e.default=u.exports}}]);