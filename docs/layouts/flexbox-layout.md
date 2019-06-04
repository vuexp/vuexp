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

| Name           | Type   | Default      | Web | Mobile | Description |
| -------------- | ------ | ------------ | --- | ------ | ----------- |
| flexDirection  | String | `row`        | ✔   | ✔      | Sets the direction for placing child elements in the flexbox container. Possible values are `row`, `row-reverse`, `column`, `column-reverse`|
| flexWrap       | String | `nowrap`     | ✔   | ✔      |Sets whether child elements are forced in a single line or can flow into multiple lines. If set to multiple lines, also defines the cross axis which determines the direction new lines are stacked in. Possible values are `nowrap`, `wrap`, `wrap-reverse`|
| justifyContent | String | `flex-start` | ✔   | ✔      |Sets the alignment of child elements along the main axis. You can use it to distribute leftover space when all the child elements on a line are inflexible or are flexible but have reached their maximum size. You can also use it to control the alignment of items when they overflow the line. Possible values are `flex-start`, `flex-end`, `center`, `space-between`, `space-around`|
| alignItems     | String | `stretch`    | ✔   | ✔      | Sets the alignment of child elements along the cross axis on the current line. Acts as justifyContent for the cross axis. Possible values are `flex-start`, `flex-end`, `center`, `baseline`, `stretch`|
| alignContent   | String | `stretch`    | ✔   | ✔      |Sets how lines are aligned in the flex container on the cross axis, similar to how justifyContent aligns individual items within the main axis. This property has no effect when the flex container has only one line. Possible values are `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`|

## Additional Children Props

When an element is a direct child of `<FlexboxLayout>`, you can work with the following additional properties.

| Name           | Type    | Default   | Web | Mobile | Description |
| -------------- | ------- | --------- | --- | ------ | ----------- |
| order          | Number  | `0`       | ✔   | ✔      |Sets the order in which child element appear in relation to one another.|
| flexGrow       | Number  | `0`       | ✔   | ✔      |Indicates that the child should grow in size, if necessary. Sets how much the child will grow in proportion to the rest of the child elements in the flex container.|
| flexShrink     | Number  | `1`       | ✔   | ✔      |Indicates that the child should shrink when the row runs out of space. Sets how much the flex item will shrink in proportion to the rest of the child elements in the flex container. When not specified, its value is set to 1.|
| alignSelf      | String  | `stretch` | ✔   | ✔      |Overrides the alignItems value for the child. Possible values are `flex-start`, `flex-end`, `center`, `baseline`, `stretch`|
| flexWrapBefore | Boolean | `false`   | ✔   | ✔      |When true, forces the item to wrap onto a new line. |

