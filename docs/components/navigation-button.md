---
sidebarDepth: 0
---

# NavigationButton

The `<NavigationButton>` component is a NativeScript abstraction for the Android navigation button and back button for iOS and web.

<DocExampleBox codeBox="https://codesandbox.io/s/9y51w9oj54?module=%2Fsrc%2FApp.vue">

```html
<ActionBar title="My App">
  <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" webIcon="fa fa-arrow-left" />
</ActionBar>
```

```js
  goBack() {
    alert("goBack");
  }
```

```scss
@font-face {
  font-family: "FontAwesome";
  src: url("/fonts/fontawesome-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
.fa {
  font-family: "FontAwesome";
}
.fa-arrow-left:before {
  content: "\f060";
}
```

<NavigationButtonDoc />
</DocExampleBox>

## Props

| Name    | Type   | Default | Web | Mobile |
| ------- | ------ | ------- | --- | ------ |
| text    | String |         | ✔   | ✔      |
| webIcon | String |         | ✔   | ✘      |

## Events

| Name | Web | Mobile |
| ---- | --- | ------ |
| tap  | ✔   | ✔      |

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/action-bar/navigation-button/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.navigationbutton)
