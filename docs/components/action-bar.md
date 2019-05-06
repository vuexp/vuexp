---
sidebarDepth: 0
---

# ActionBar

The `<ActionBar>` component is a NativeScript abstraction for the Android ActionBar, iOS NavigationBar and Web Toolbar.

This component is a UI component that provides a toolbar at the top of the activity window.

## Live Demo

<DocExampleBox :liveDemoMode="true">
  <ActionBarLiveDemo />
</DocExampleBox>

## Example Usages

<DocExampleBox codeBox="https://codesandbox.io/s/92p675pw4r?module=%2Fsrc%2FApp.vue">

```html
<ActionBar title="My App">
  <ActionItem @tap="onTapShare($event)" webIcon="fa fa-share" />
  <ActionItem @tap="onTapDelete($event)" webIcon="fa fa-remove" />
</ActionBar>
<ActionBar style="margin-top:15px">
  <StackLayout orientation="horizontal">
    <Label text="VueXP" verticalAlignment="center" />
    <Label text="Cross Platform" verticalAlignment="center" />
  </StackLayout>
</ActionBar>
<ActionBar title="VueXP" style="margin-top:15px">
  <NavigationButton text="Go back" @tap="goBack($event)" webIcon="fa fa-arrow-left" />
</ActionBar>
```

```js
onTapShare(event) {
  event.stopImmediatePropagation();
  alert('Share button clicked.');
},
onTapDelete(event) {
  event.stopImmediatePropagation();
  alert('Delete button clicked.');
},
goBack(event) {
  event.stopImmediatePropagation();
  alert('Back button clicked.');
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

### Removing the border
By default, a border is drawn at the bottom of the `<ActionBar>`. In addition to the border, on iOS devices a translucency filter is also applied over the `<ActionBar>`.

## Props

| Name  | Type   | Default | Web | Mobile | Description |
| ----- | ------ | ------- | --- | ------ | ----------- |
| title | String |         | ✔   | ✔      | Gets or sets the title shown in the bar. |

