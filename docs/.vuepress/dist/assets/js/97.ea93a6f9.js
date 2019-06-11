(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{631:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This is an overview of the most common usage of VxpListView.")]),t._v(" "),t._m(1),t._v(" "),a("DocExampleBox",{attrs:{liveDemoMode:!0}},[a("VxpListViewDoc")],1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("The v-template component is used to define how each list item is shown on the screen.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vxplistview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vxplistview","aria-hidden":"true"}},[this._v("#")]),this._v(" VxpListView")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("<VxpListView>")]),this._v(" is a UI component that shows items in a vertically scrolling list. To set how the list shows individual items, you can use the "),s("code",[this._v("<v-template>")]),this._v(" component.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"using-vxplistview-with-multiple-v-template-blocks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-vxplistview-with-multiple-v-template-blocks","aria-hidden":"true"}},[this._v("#")]),this._v(" Using "),s("code",[this._v("<VxpListView>")]),this._v(" with multiple "),s("code",[this._v("<v-template>")]),this._v(" blocks")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you need to visualize one or more list items differently than the rest, you can enclose them in additional "),s("code",[this._v("<v-template>")]),this._v(" blocks and use conditions. You can have as many "),s("code",[this._v("<v-template>")]),this._v(" blocks as needed within one "),s("code",[this._v("<VxpListView>")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("VxpListView")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":items")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("itemList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":itemSelect")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("itemConditions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("v-template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Label")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":text")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item.text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("v-template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("v-template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot-scope")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ item }"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("showIfStateTrue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Label")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":text")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item.text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("v-template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("VxpListView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VxpListViewDoc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      itemList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Item 1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Item 2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Item 3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      itemConditions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          showIfStateTrue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'item.state === true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          showIfStateFalse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'item.state === false'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("When you create conditions for "),s("code",[this._v("<v-template>")]),this._v(", you can use any valid JavaScript expression.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[this._v("#")]),this._v(" Props")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Web")]),t._v(" "),a("th",[t._v("Mobile")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("items")]),t._v(" "),a("td",[a("code",[t._v("Array<any>")])]),t._v(" "),a("td",[t._v("[]")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("List items array.")])]),t._v(" "),a("tr",[a("td",[t._v("reversed")]),t._v(" "),a("td",[a("code",[t._v("Boolean")])]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("Render order of list items.")])]),t._v(" "),a("tr",[a("td",[t._v("itemSelect")]),t._v(" "),a("td",[a("code",[t._v("Object")])]),t._v(" "),a("td",[t._v("{}")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("This object is used for selecting v-templates for particular items. See the example usage.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Web")]),t._v(" "),a("th",[t._v("Mobile")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("tap")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("This event is generated when user taps/clicks on an item. Event params are "),a("code",[t._v("item")]),t._v(" and "),a("code",[t._v("index")])])]),t._v(" "),a("tr",[a("td",[t._v("scrolled")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("This event is generated list is scrolled. No parameters are passed.")])]),t._v(" "),a("tr",[a("td",[t._v("loadMoreItems")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("This event is generated when scroll is close to the end of the list. This event can be used for retrieving new items.")])]),t._v(" "),a("tr",[a("td",[t._v("listViewLoaded")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("This event is generated when listview is mounted and initialized.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Web")]),t._v(" "),a("th",[t._v("Mobile")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("scrollToStart(animated = true)")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("Scrolls to the top of the list.")])]),t._v(" "),a("tr",[a("td",[t._v("scrollToEnd(animated = true)")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("Scrolls to the end of the list.")])]),t._v(" "),a("tr",[a("td",[t._v("scrollToIndex(index)")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("Scrolls to the item with the given index.")])]),t._v(" "),a("tr",[a("td",[t._v("showStatusIndicator(showIndicator, item)")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("✔")]),t._v(" "),a("td",[t._v("Shows or hides status indicator item. If "),a("code",[t._v("showIndicator")]),t._v(" is set to false, status indicator will be hidden. If "),a("code",[t._v("showIndicator")]),t._v(" is set to true, given "),a("code",[t._v("item")]),t._v(" will be listed as an status indicator.")])])])])}],!1,null,null,null);s.default=n.exports}}]);