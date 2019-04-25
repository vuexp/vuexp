---
sidebarDepth: 0
---

# SearchBar

This is an overview of the most common usage of `<SearcBar>`.

`<SearchBar>` is a UI component that provides a user interface for entering search queries and submitting requests to the search provider.

<DocExampleBox codeBox="https://codesandbox.io/s/m7yz90mn6p?module=%2Fsrc%2FApp.vue">
```html
<SearchBar hint="Search hint" :text="searchPhrase" />
```
```js
onSubmit(){
    alert("Searching...");
}
```
<SearchBarDoc />
</DocExampleBox>

`<SearchBar>` provides two-way data binding using v-model.

```html
<SearchBar v-model="searchQuery" />
```

## Props

| Name                     | Type   | Default | Web | Mobile |
| ------------------------ | ------ | ------- | --- | ------ |
| hint                     | String |         | ✔   | ✔      |
| text                     | String |         | ✔   | ✘      |
| textFieldBackgroundColor | String |         | ✔   | ✔      |
| textFieldHintColor       | String |         | ✘   | ✔      |

## Events

| Name       | Web | Mobile |
| ---------- | --- | ------ |
| textChange | ✔   | ✔      |
| submit     | ✔   | ✔      |
| clear      | ✔   | ✔      |

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/search-bar/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_search_bar_.searchbar)
