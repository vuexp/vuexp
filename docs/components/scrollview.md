---
sidebarDepth: 0
---

# ScrollView

## Props

| Name                      | Type                     | Default    | Web | Mobile | Description |
| ------------------------- | ------------------------ | ---------- | --- | ------ | ----------- |
| orientation               | `horizontal`, `vertical` | `vertical` | ✔   | ✔      | Gets or sets the direction in which the content can be scrolled: horizontal or vertical.Default value: vertical.|
| scrollBarIndicatorVisible | Boolean                  | `true`     | ✔   | ✘      | Specifies if the scrollbar is visible. Default value: true. |

## Events

| Name   | Web | Mobile | Description |
| ------ | --- | ------ |------------ |
| scroll | ✔   | ✔      | Emitted when a scroll event occurs. |

## Live Demo


This is an overview of the most common usage of `<ScrollView>`.

<DocExampleBox codeBox="https://codesandbox.io/s/y3jzz2v5mv?module=%2Fsrc%2FApp.vue">

```html
<ScrollView orientation="horizontal">
  <StackLayout orientation="horizontal">
    <Label text="this" />
    <Label text="text" />
    <Label text="scrolls" />
    <Label text="horizontally" />
    <Label text="if necessary" />
  </StackLayout>
</ScrollView>

```

```scss
.scroll-view {
  &__horizontal {
    width: 150px;
  }
  &__vertical {
    height: 100px;
    width: 150px;
    margin-top: 15px;
  }
}
```

<ScrollViewDoc />
</DocExampleBox>