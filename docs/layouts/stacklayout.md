---
sidebarDepth: 0
---

# StackLayout

The `<StackLayout>` is a layout container that lets you stack the child elements vertically (default) or horizontally.

- Lets you stack the child views vertically or horizontally with **orientation** property.
- Positioning is determined by the order views were added to the layout and the layout options of the views.
- Views in a StackLayout can be positioned using layout options. Each view can be given **VerticalAlignment** and **HorizontalAlignment**, defining how the views will position themselves relative to the layout.

## Live Demo

<DocExampleBox :liveDemoMode="true">
  <StackLayoutLiveDemo />
</DocExampleBox>

Default stacking

<DocExampleBox codeBox="https://codesandbox.io/s/9yv6r4ok7y?module=%2Fsrc%2FApp.vue">

```html
<StackLayout class="container__layout" backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" height="70" backgroundColor="#289062"/>
  <Label text="third" height="70" backgroundColor="#1c6b48"/>
</StackLayout>
```

<StackLayoutDoc />
</DocExampleBox>

Horizontal stacking

<DocExampleBox codeBox="https://codesandbox.io/s/9yv6r4ok7y?module=%2Fsrc%2FApp.vue">

```html
<StackLayout orientation="horizontal" backgroundColor="#3c495e">
  <Label text="first" width="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" backgroundColor="#289062"/>
  <Label text="third" width="70" backgroundColor="#1c6b48"/>
</StackLayout>
```

<StackLayoutHorizontalDoc />
</DocExampleBox>

Stack layout with horizontally aligned children

<DocExampleBox codeBox="https://codesandbox.io/s/9yv6r4ok7y?module=%2Fsrc%2FApp.vue">

```html
<StackLayout backgroundColor="#3c495e">
  <Label text="left" horizontalAlignment="left"
         width="33%" height="70" backgroundColor="#43b883"/>
  <Label text="center" horizontalAlignment="center"
         width="33%" height="70" backgroundColor="#289062"/>
  <Label text="right" horizontalAlignment="right"
         width="33%" height="70" backgroundColor="#1c6b48"/>
  <Label text="stretch" horizontalAlignment="stretch"
         height="70" backgroundColor="#43b883"/>
</StackLayout>
```

<StackLayoutHorizontalChildrenDoc />
</DocExampleBox>

Horizontal stack layout with vertically aligned children

<DocExampleBox codeBox="https://codesandbox.io/s/9yv6r4ok7y?module=%2Fsrc%2FApp.vue">

```html
<StackLayout orientation="horizontal" backgroundColor="#3c495e">
  <Label text="top" verticalAlignment="top"
         width="70" height="33%" backgroundColor="#43b883"/>
  <Label text="center" verticalAlignment="center"
         width="70" height="33%" backgroundColor="#289062"/>
  <Label text="bottom" verticalAlignment="bottom"
         width="70" height="33%" backgroundColor="#1c6b48"/>
  <Label text="stretch" verticalAlignment="stretch"
         width="70" backgroundColor="#43b883"/>
</StackLayout>
```

<StackLayoutVerticalChildrenDoc />
</DocExampleBox>

## Props

| Name        | Type                     | Default    | Web | Mobile |
| ----------- | ------------------------ | ---------- | --- | ------ |
| orientation | `vertical`, `horizontal` | `vertical` | ✔   | ✔      |

