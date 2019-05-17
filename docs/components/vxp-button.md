---
sidebarDepth: 0
---

# VxpButton

This is an overview of the most common usage of `<VxpButton>`.

## Live Demo

<DocExampleBox codeBox="https://codesandbox.io/s/n5y3lym66p?module=%2Fsrc%2FApp.vue">

```html
<VxpButton text="Button" size="medium" primary="true" @tap="onButtonTap" />
```

```js
 onButtonTap() {
      console.log("clicked");
    }
```

<VxpButtonDoc />
</DocExampleBox>

`VxpButton` is a UI component that displays a button which reacts to a user gesture.

## Props

| Name      | Type    | Default  | Web | Mobile | Desctiption                                                                                                    |
| --------- | ------- | -------- | --- | ------ | -------------------------------------------------------------------------------------------------------------- |
| text      | String  |          | ✔   | ✔      | Sets the label of the button.                                                                                  |
| textWrap  | Boolean | `false`  | ✔   | ✔      | Gets or sets whether the widget wraps the text of the label. Useful for longer labels. Default value is false. |
| visible   | Boolean | `true`   | ✔   | ✔      | Sets the visibility of the Button                                                                              |
| disabled  | Boolean | `false`  | ✔   | ✔      | Sets the disability of the Button                                                                              |
| primary   | Boolean | `false`  | ✔   | ✔      | Set this button as Primary                                                                                     |
| secondary | Boolean | `false`  | ✔   | ✔      | Set this button as Secondary                                                                                   |
| size      | String  | `medium` | ✔   | ✔      | Sets button size                                                                                               |

## Events

| Name | Web | Mobile | Description                        |
| ---- | --- | ------ | ---------------------------------- |
| tap  | ✔   | ✔      | Emitted when the button is tapped. |
