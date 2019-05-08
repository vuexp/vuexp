---
sidebarDepth: 0
---

# Button

This is an overview of the most common usage of `<Button>`.


## Live Demo

<DocExampleBox codeBox="https://codesandbox.io/s/n5y3lym66p?module=%2Fsrc%2FApp.vue">

```html
<Button text="Button" @tap="onButtonTap" horizontalAlignment="center" />
```

```js
 onButtonTap() {
      console.log("clicked");
    }
```

<ButtonDoc />
</DocExampleBox>

`Button` is a UI component that displays a button which reacts to a user gesture.

## Props

| Name     | Type    | Default | Web | Mobile | Desctiption |
| -------- | ------- | ------- | --- | ------ |------|
| text     | String  |         | ✔   | ✔      |Sets the label of the button.|
| textWrap | Boolean | `false` | ✔   | ✔      |Gets or sets whether the widget wraps the text of the label. Useful for longer labels. Default value is false.|

## Events

| Name | Web | Mobile | Description |
| ---- | --- | ------ |------|
| tap  | ✔   | ✔      |Emitted when the button is tapped.|



