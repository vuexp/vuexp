---
sidebarDepth: 0
---

# Button

This is an overview of the most common usage of `<Button>`.

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

| Name     | Type    | Default | Web | Mobile |
| -------- | ------- | ------- | --- | ------ |
| text     | String  |         | ✔   | ✔      |
| textWrap | Boolean | `false` | ✔   | ✔      |

## Events

| Name | Web | Mobile |
| ---- | --- | ------ |
| tap  | ✔   | ✔      |