---
sidebarDepth: 0
---

# ActionItem

The `<ActionItem>` component is used to add additional action buttons to the ActionBar.

<DocExampleBox codeBox="https://codesandbox.io/s/ooqn530l26?module=%2Fsrc%2FApp.vue">

```html
<ActionBar title="My App">
  <ActionItem @tap="onTapShare"
    ios.systemIcon="9" ios.position="left"
    android.systemIcon="ic_menu_share" android.position="actionBar" webIcon="fa fa-share" />
<ActionItem @tap="onTapDelete"
  ios.systemIcon="16" ios.position="right"
  text="delete" android.position="popup" webIcon="fa fa-remove" />
</ActionBar>
```

```js
  onTapShare() {
    alert("shared");
  },
  onTapDelete() {
    alert("deleted");
  }
```

```scss
@font-face {
  font-family: "FontAwesome";
  src: url("../public/fonts/fontawesome-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.fa {
  font-family: "FontAwesome";
}

.fa-share:before {
  content: "\f064";
}

.fa-remove:before {
  content: "\f00d";
}
```

<ActionItemDoc />
</DocExampleBox>

## Props

| Name    | Type   | Default | Web | Mobile | Description |
| ------- | ------ | ------- | --- | ------ | ----------- |
| webIcon | String |         | ✔   | ✘      | Gets or sets the icon of the ActionItem |

## Events

| Name | Web | Mobile | Description |
| ---- | --- | ------ | ----------- |
| tap  | ✔   | ✔      | Emitted when the `<ActionItem>` is tapped.

