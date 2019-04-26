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

| Name          | Type                                              | Default | Web | Mobile |
| ------------- | ------------------------------------------------- | ------- | --- | ------ |
| text          | String                                            |         | ✔   | ✔      |
| hint          | String                                            |         | ✔   | ✔      |
| editable      | Boolean                                           |         | ✔   | ✔      |
| maxLength     | Number                                            |         | ✔   | ✔      |
| secure        | Boolean                                           | `false` | ✔   | ✔      |
| keyboardType  | `datetime` , `phone` , `number` , `url` , `email` |         | ✔   | ✔      |
| returnKeyType | `done`,`next`,`go`,`search`,`send`                |         | ✘   | ✔      |
| autocorrect   | Boolean                                           |         | ✔   | ✔      |

## Events

| Name        | Web | Mobile |
| ----------- | --- | ------ |
| textChange  | ✔   | ✔      |
| returnPress | ✔   | ✔      |
| focus       | ✔   | ✔      |
| blur        | ✔   | ✔      |

