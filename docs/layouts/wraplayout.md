---
sidebarDepth: 0
---

# WrapLayout

`<WrapLayout>` is a layout container that lets you stack the child elements vertically (default) or horizontally.

The following example creates a row of equally-sized items. When the row runs out of space, the container wraps the last item on a new row.

<DocExampleBox codeBox="https://codesandbox.io/s/xmj262j64?module=%2Fsrc%2FApp.vue">

```html
<WrapLayout height="300" width="450" backgroundColor="#3c495e">
  <Label text="first" class="wrapLayoutItem" backgroundColor="#43b883"/>
  <Label text="second" class="wrapLayoutItem" backgroundColor="#1c6b48"/>
  <Label text="third" class="wrapLayoutItem" backgroundColor="#289062"/>
  <Label text="fourth" class="wrapLayoutItem" backgroundColor="#289062"/>
</WrapLayout>
```

```scss
.wrapLayoutItem {
  width: 140px;
  height: 140px;
}
```

<WrapLayoutDoc />
</DocExampleBox>

The following example creates a column of equally-sized items. When the row runs out of space, the container wraps the last item on a new column.

<DocExampleBox codeBox="https://codesandbox.io/s/xmj262j64?module=%2Fsrc%2FApp.vue">

```html
<WrapLayout height="300" width="450" orientation="vertical" backgroundColor="#3c495e">
  <Label text="first" class="wrapLayoutItem" backgroundColor="#43b883"/>
  <Label text="second" class="wrapLayoutItem" backgroundColor="#1c6b48"/>
  <Label text="third" class="wrapLayoutItem" backgroundColor="#289062"/>
  <Label text="fourth" class="wrapLayoutItem" backgroundColor="#289062"/>
</WrapLayout>
```

```scss
.wrapLayoutItem {
  width: 140px;
  height: 140px;
}
```

<WrapLayoutEqualColumnDoc />
</DocExampleBox>

## Props

| Name        | Type   | Default      | Web | Mobile |
| ----------- | ------ | ------------ | --- | ------ |
| orientation | String | `horizontal` | ✔   | ✔      |
| itemWidth   | Number | `Number.NaN` | X   | ✔      |
| itemHeight  | Number | `Number.NaN` | X   | ✔      |

## Live Demo
<DocExampleBox>
  ```html
    <WrapLayout height="width" width="height">
  ```

  <WrapLayoutLiveDemoDoc />
</DocExampleBox>