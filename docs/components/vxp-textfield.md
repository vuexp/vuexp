---
sidebarDepth: 0
---

# VxpTextField

This is an overview of the most common usage of `<VxpTextField>`.

## Live Demo

<DocExampleBox>

```html
<StackLayout>
  <VxpTextField
    v-model="textFieldInput"
    @textChange="textFieldOnChange"
    @input="textFieldOnInput"
    @focus="textFieldOnFocus"
    @blur="textFieldOnBlur"
    @returnPress="textFieldOnReturnPress"
    keyboardType="email"
  />
  <VxpLabel style="margin-top: 15px; font-weight: bold" text="Textfield value: " /><Label :text="textFieldInput" />
</StackLayout>
```

<VxpTextFieldDoc />
</DocExampleBox>

## Example Usages

```html
<VxpTextField :text="textFieldValue" hint="Enter text..." />
```

`TextField` provides two-way data binding using v-model.

```html
<VxpTextField
v-model="textFieldInput"
hint="This is placeholder"
@returnPress="textFieldreturnPress"
@textChange="textFieldtextChange" />
```

## Props

| Name | Type | Default | Web | Mobile | Description |
| --- | --- | --- | --- | --- | --- |
| text | String | | ✔ | ✔ | Gets or sets the value of the component. |
| hint | String | | ✔ | ✔ | Gets or sets the placeholder text when the component is not disabled. |
| disabled | Boolean | `true` | ✔ | ✔ | When true, VxptextField component is disabled and user is not able to chance it's text. |
| maxLength | Number | unlimited | ✔ | ✔ | Sets the maximum number of characters that can be entered in the container. |
| secure | Boolean | `false` | ✔ | ✔ | Hides the entered text when true. Use this property to create password input fields. |
| keyboardType | `datetime` , `phone` , `number` , `url` , `email` | | ✔ | ✔ | Shows a custom keyboard for easier input. |
| returnKeyType | `done` , `next` , `go` , `search` , `send` | | ✘ | ✔ | Gets or sets the label of the return key. |
| autocorrect | Boolean | | ✔ | ✔ | Enables or disables autocorrect. | 
| autofocus | Boolean | | ✔ | ✔ | Autofocusses the input element when component is loaded. | 

## Events

| Name | Web | Mobile | Description |
| --- | --- | --- | --- |
| textChange | ✔ | ✔ | Emitted when the text changes. |
| returnPress | ✔ | ✔ | Emitted when the return key is pressed. |
| focus | ✔ | ✔ | Emitted when the container is in focus. |
| blur | ✔ | ✔ | Emitted when the container loses focus. |

