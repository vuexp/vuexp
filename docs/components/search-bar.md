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

| Name                     | Type   | Default | Web | Mobile |  Description |
| ------------------------ | ------ | ------- | --- | ------ | ------ |
| hint                     | String |         | ✔   | ✔      | A hint text written in the input when input value is empty |
| text                     | String |         | ✔   | ✘      | The value of the input |
| textFieldBackgroundColor | String |         | ✔   | ✔      | Background color for the searchbar |
| textFieldHintColor       | String |         | ✔   | ✔      | Hint color of the search bar |

## Events

| Name       | Web | Mobile |  Description |
| ---------- | --- | ------ | ------ |
| textChange | ✔   | ✔      | Event occurs whenever a text value changes by user interaction |
| submit     | ✔   | ✔      | Event occurs when user taps search icon or submit key |
| clear      | ✔   | ✔      | Event occurs when after user taps clear button |
