---
sidebarDepth: 0
---

# ActionBar

The `<ActionBar>` component is a NativeScript abstraction for the Android ActionBar, iOS NavigationBar and Web Toolbar.

<DocExampleBox codeBox="https://codesandbox.io/s/92p675pw4r?module=%2Fsrc%2FApp.vue">

```html
<ActionBar title="My App">
  <ActionItem @tap="onTapShare"
    ios.systemIcon="9" ios.position="left"
    android.systemIcon="ic_menu_share" android.position="actionBar" webIcon="fa fa-share" />
  <ActionItem @tap="onTapDelete"
    ios.systemIcon="16" ios.position="right"
    text="delete" android.position="popup" webIcon="fa fa-remove" />
</ActionBar>
<ActionBar style="margin-top:15px">
  <StackLayout orientation="horizontal">
    <Label text="NativeScript" verticalAlignment="center" />
      <Label text="Vue Web" verticalAlignment="center" />
    </StackLayout>
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

<ActionBarDoc />
</DocExampleBox>

## Props

| Name  | Type   | Default | Web | Mobile |
| ----- | ------ | ------- | --- | ------ |
| title | String |         | ✔   | ✔      |

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/action-bar/action-bar/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionbar)
