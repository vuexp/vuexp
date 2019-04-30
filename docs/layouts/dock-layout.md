---
sidebarDepth: 0
---

# DockLayout

The `<DockLayout>` is a layout container that lets you dock child elements to the sides or the center of the layout.

- Uses the dock property to dock its children to the `left`, `right`, `top`, `bottom` or `center` of the layout.
- To dock a child element to the `center`, it **must** be the **last** child of the container and you must set the `stretchLastChild` property of the parent to `true`.
- Enforces layout constraints to its children.
- Resizes its children at runtime when its size changes.

## Live Demo

<DocExampleBox :liveDemoMode="true">
  <DockLayoutLiveDemo />
</DocExampleBox>


## Example Usages
<DocExampleBox codeBox="https://codesandbox.io/s/1zlq9x6954?module=%2Fsrc%2FApp.vue">

```html
<DockLayout :stretchLastChild="false" backgroundColor="#3c495e" class="container">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
</DockLayout>


<DockLayout :stretchLastChild="true" backgroundColor="#3c495e" class="container">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
  <Label text="center" backgroundColor="#1c6b48" />
</DockLayout>
```

<DockLayoutDoc />
</DocExampleBox>

## Props

| Name             | Type    | Default | Web | Mobile | Description |
| ---------------- | ------- | ------- | --- | ------ | ----------- |
| stretchLastChild | Boolean | `false` | ✔   | ✔      | Enables or disables stretching the last child to fit the remaining space. |

## Additional Children Props

When an element is a direct child of `<DockLayout>`, you can work with the following additional properties.

| Name | Type                                        | Default | Web | Mobile | Description |
| ---- | ------------------------------------------- | ------- | --- | ------ | ----------- |
| dock | `top`, `right`, `bottom`, `left` , `center` |         | ✔   | ✔      | Specifies which side to dock the element to. |
