---
sidebarDepth: 0
---

# TextField

This is an overview of the most common usage of `<TextField>`.

```html
<TextField :text="textFieldValue" hint="Enter text..." />
```

`TextField` provides two-way data binding using v-model.

```html
<TextField
v-model="textFieldInput"
hint="This is placeholder"
:editable="true"
@returnPress="textFieldreturnPress"
@textChange="textFieldtextChange" />
```

<DocExampleBox codeBox="https://codesandbox.io/s/l764j9p8pl?module=%2Fsrc%2FApp.vue">

```html
<StackLayout>
  <TextField
    v-model="textFieldInput"
    @textChange="textFieldOnChange"
    @input="textFieldOnInput"
    @focus="textFieldOnFocus"
    @blur="textFieldOnBlur"
    @returnPress="textFieldOnReturnPress"
    :editable="true"
    keyboardType="email"
  />
  <Label style="margin-top: 15px; font-weight: bold" text="Textfield value: " /><Label :text="textFieldInput" />
</StackLayout>
```

```js
textFieldOnChange: event => console.log("Change event :", event),
textFieldOnInput: event => console.log("Input event :", event),
textFieldOnFocus: event => console.log("Focus event :", event),
textFieldOnBlur: event => console.log("Blur event :", event),
textFieldOnReturnPress: event => console.log("Return Press event :", event)
```

<TextFieldDoc />
</DocExampleBox>

## Props

| Name | Type | Default | Web | Mobile | Description |
| --- | --- | --- | --- | --- | --- |
| text | String | | ✔ | ✔ | Gets or sets the value of the component. |
| hint | String | | ✔ | ✔ | Gets or sets the placeholder text when the component is editable. |
| editable | Boolean | | ✔ | ✔ | When true, indicates that the user can edit the contents of the container. |
| maxLength | Number | | ✔ | ✔ | Sets the maximum number of characters that can be entered in the container. |
| secure | Boolean | `false` | ✔ | ✔ | Hides the entered text when true. Use this property to create password input fields. |
| keyboardType | `datetime` , `phone` , `number` , `url` , `email` | | ✔ | ✔ | Shows a custom keyboard for easier input. |
| returnKeyType | `done` , `next` , `go` , `search` , `send` | | ✘ | ✔ | Gets or sets the label of the return key. |
| autocorrect | Boolean | | ✔ | ✔ | Enables or disables autocorrect. | 

## Events

| Name | Web | Mobile | Description |
| --- | --- | --- | --- |
| textChange | ✔ | ✔ | Emitted when the text changes. |
| returnPress | ✔ | ✔ | Emitted when the return key is pressed. |
| focus | ✔ | ✔ | Emitted when the container is in focus. |
| blur | ✔ | ✔ | Emitted when the container loses focus. |

