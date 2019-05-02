---
sidebarDepth: 0
---

# FlexboxLayout
## Live Demo

<DocExampleBox :liveDemoMode="true">
<FlexboxLayoutLiveDemo />
</DocExampleBox>

# FlexboxLayout
The `<FlexboxLayout>` helps to adjust child components both horizontally and vertically.

The following example creates a row of three equally-sized elements that span across the entire height of the screen.

<DocExampleBox>

```html
<FlexboxLayout class="flexbox" backgroundColor="#3c495e">
  <Label text="first" width="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" backgroundColor="#1c6b48"/>
  <Label text="third" width="70" backgroundColor="#289062"/>
</FlexboxLayout>
```

```scss
.flexbox {
  color: #2c3e50;
}
```

<FlexboxLayoutDoc />
</DocExampleBox>

The following example creates a column of three equally-sized elements that span across the entire width of the screen.

<DocExampleBox>

```html
<FlexboxLayout class="flexbox" flexDirection="column" backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```

```scss
.flexbox {
  color: #2c3e50;
}
```

<FlexboxLayoutColumnDoc />
</DocExampleBox>

The following example shows how to use:
flexDirection to place items in a column, starting from the bottom.
justifyContent to create equal spacing between the vertically placed items.
alignSelf to modify the position of items across the main axis.

<DocExampleBox>

```html
<FlexboxLayout class="flexbox" flexDirection="column-reverse" justifyContent="space-around" backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" alignSelf="center" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" alignSelf="flex-end" width="70" height="70" backgroundColor="#289062"/>
  <Label text="fourth" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```

```scss
.flexbox {
  color: #2c3e50;
}
```

<FlexboxLayoutColumnReverseDoc />
</DocExampleBox>

## Props

| Name           | Type   | Default      | Web | Mobile |
| -------------- | ------ | ------------ | --- | ------ |
| flexDirection  | String | `row`        | ✔   | ✔      |
| flexWrap       | String | `nowrap`     | ✔   | ✔      |
| justifyContent | String | `flex-start` | ✔   | ✔      |
| alignItems     | String | `stretch`    | ✔   | ✔      |
| alignContent   | String | `stretch`    | ✔   | ✔      |

## Additional Children Props

When an element is a direct child of `<FlexboxLayout>`, you can work with the following additional properties.

| Name           | Type    | Default   | Web | Mobile |
| -------------- | ------- | --------- | --- | ------ |
| order          | Number  |           | ✔   | ✔      |
| flexGrow       | Number  |           | ✔   | ✔      |
| flexShrink     | Number  | `1`       | ✔   | ✔      |
| alignSelf      | String  | `stretch` | ✔   | ✔      |
| flexWrapBefore | Boolean | `false`   | ✔   | ✔      |

