---
sidebarDepth: 0
---

# TextView

This is an overview of the most common usage of `<TextView>`.

`TextView` provides two-way data binding using v-model.


## Live Demo

<DocExampleBox codeBox="https://codesandbox.io/s/w61lryop88?module=%2Fsrc%2FApp.vue">
```html
<TextView text="Multi\nLine\nText" />
```
<TextViewDoc />
</DocExampleBox>

## Example Usages

```html
  <TextView v-model="textViewInput" :editable=true />
```

## Props

| Name | Type | Default | Web | Mobile | Description |
| --- | --- | --- | --- | --- | --- |
| text | String | | ✔ | ✔ | Gets or sets the value of the component. |
| hint | String | | ✔ | ✔ | Gets or sets the placeholder text when the component is editable. |
| editable | Boolean | | ✔ | ✔ | When true, indicates that the user can edit the contents of the container. |
| maxLength | Number | | ✔ | ✔ | Sets the maximum number of characters that can be entered in the container. |
| keyboardType | `datetime` , `phone` , `number` , `url` , `email` | | ✔ | ✔ | Shows a custom keyboard for easier text input. |
| returnKeyType | `done` , `next` , `go` , `search` , `send` | | ✘ | ✔ | Gets or sets the label of the return key. |
| autocorrect | Boolean | | ✔ | ✔ | Enables or disables autocorrect. |

## Events

| Name | Web | Mobile | Description |
| --- | --- | --- | --- |
| textChange | ✔ | ✔ | Emitted when the text changes. |
| returnPress | ✔ | ✔ | Emitted when the return key is pressed. |
| focus | ✔ | ✔ | Emitted when the container is in focus. |
| blur | ✔ | ✔ | Emitted when the container loses focus. |
