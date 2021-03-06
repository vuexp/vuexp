---
sidebarDepth: 0
---

# GridLayout

`GridLayout` is a layout container that lets you arrange its child elements in a table-like manner.

The grid consists of rows, columns, and cells. A cell can span one or more rows and one or more columns. It can contain multiple child elements which can span over multiple rows and columns, and even overlap each other.

By default, `GridLayout` has one column and one row. You can add columns and rows by configuring the columns and the rows properties. In these properties, you need to set the number of columns and rows and their width and height. You set the number of columns by listing their widths, separated by a comma. You set the number of rows by listing their heights, separated by a comma.

You can set a fixed size for column width and row height or you can create them in a responsive manner:

An absolute number: Indicates a fixed size.
auto: Makes the column as wide as its widest child or makes the row as tall as its tallest child.
*: Takes as much space as available after filling all auto and fixed size columns or rows.


## Live Demo

<DocExampleBox :liveDemoMode="true">
  <GridLayoutLiveDemo />
</DocExampleBox>

The following example creates a simple 2-by-2 grid with fixed column widths and row heights.

<DocExampleBox >

```html
<GridLayout class="grid" width="200" height="220" columns="115, 115" rows="115, 115">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```

```scss
.grid {
  margin-bottom: 12px;
}
```

<GridLayoutDoc />
</DocExampleBox>

The following example creates a grid with responsive design, where space is alotted proportionally to child elements.

<DocExampleBox >

```html
<GridLayout width="200" height="200" columns="*, 2*" rows="2*, 3*" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```

<GridLayoutResponsiveDoc />
</DocExampleBox>

The following example creates a complex grid with responsive design, mixed width and height settings, and some merged cells.

<DocExampleBox >

```html
<GridLayout width="200" height="200" columns="40, auto, *" rows="40, auto, *" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" colSpan="2" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" rowSpan="2" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
  <Label text="1,2" row="1" col="2" backgroundColor="#289062"/>
  <Label text="2,1" row="2" col="1" backgroundColor="#1c6b48"/>
  <Label text="2,2" row="2" col="2" backgroundColor="#43b883"/>
</GridLayout>
```

<GridLayoutComplexGridDoc />
</DocExampleBox>

## Props

| Name    | Type   | Default | Web | Mobile | Description |
| ------- | ------ | ------- | --- | ------ | ----------- |
| columns | String |    -    | ✔   | ✔      | A string value representing column widths delimited with commas. <br/>Valid values: an absolute number, auto, or \*. <br/> A number indicates an absolute column width. auto makes the column as wide as its widest child. \* makes the column occupy all available horizontal space. The space is proportionally divided over all star-sized columns. You can set values such as 3\* and 5\* to indicate a ratio of 3:5 in sizes. |
| rows    | String |    -    | ✔   | ✔      | A string value representing row heights delimited with commas.<br/> Valid values: an absolute number, auto, or \*.<br/> A number indicates an absolute row height. auto makes the row as tall as its tallest child. \* makes the row occupy all available vertical space. The space is proportionally divided over all star-sized rows. You can set values such as 3\* and 5\* to indicate a ratio of 3:5 in sizes. |

## Additional Children Props

| Name    | Type   | Default | Web | Mobile | Description |
| ------- | ------ | ------- | --- | ------ | ----------- |
| row     | Number | `0`     | ✔   | ✔      | Specifies the row for this element. Combined with a col property, specifies the cell coordinates of the element.<br/> The first row is indicated by 0. |
| col     | Number | `0`     | ✔   | ✔      | Specifies the column for the element. Combined with a row property, specifies the cell coordinates of the element.<br/> The first column is indicated by 0. | 
| rowSpan | Number | `1`     | ✔   | ✔      | Specifies the number of rows which this element spans across. |
| colSpan | Number | `1`     | ✔   | ✔      | Specifies the number of columns which this element spans across. |