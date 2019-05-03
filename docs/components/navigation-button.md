---
sidebarDepth: 0
---

# NavigationButton

The `<NavigationButton>` component is a NativeScript abstraction for the Android navigation button and back button for iOS and web.

## Live Demo

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

| Name    | Type   | Default | Web | Mobile | Description |
| ------- | ------ | ------- | --- | ------ | ----------- |
| text    | String |         | ✘   | ✔      | (iOS-only) Sets the text of the button. |
| webIcon | String |         | ✔   | ✘      | The icon to be shown in the button. |
| android.systemIcon | String |         | ✘   | ✔      | (Android-only) The icon to be shown in the button. You can specify any system icon whose name begins with the ic_ prefix. For a complete list of the available icons, see the R.drawable Android class. |

## Events

| Name | Web | Mobile | Description |
| ---- | --- | ------ | ----------- |
| tap  | ✔   | ✔      | Emitted when the `<NavigationButton>` is tapped. |

