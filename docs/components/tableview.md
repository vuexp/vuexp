---
sidebarDepth: 0
---

This is an overview of the most common usage of `<TableView>`.

## Live Demo

<DocExampleBox :liveDemoMode="true">
<TableViewLiveDemo />
</DocExampleBox>


## Props

| Name     | Type   | Default | Web | Mobile | Description |
| -------- | ------ | ------- | --- | ------ | ----------- |
| headerFields | Array | `null` | ✔   | ✔      | Definition of each column of the table. In each item of this array you will define how this column will behave. |
| data | Array | `null`     | ✔   | ✔      | Array of objects that will feed the datatable. |
| notFoundMsg | String | `null`   | ✔   | ✔      | Message to by show when no data was found. |
| isLoading | Boolean | `false`   | ✔   | ✔      | Flag to indicate to datatable if the data is loading. If it is, given spinner slot will be show. |
| rowSelectionEnabled | Boolean | `true`   | ✔   | ✔      | Show/hides row selection column |

## Events

| Name        | Web | Mobile | Description |
| ----------- | --- | ------ | ----------- |
| onRowSelected | ✔   | ✔      | Emitted after one of the rows selected. It will return the row number as event data|
| onRowDeselected | ✔   | ✔      | Emitted when the row is deselected. It will return the row number as event data |
| onSelectAllRows | ✔   | ✔      | Emitted when 'select all' checkbox is selected |
| onDeselectAllRows | ✔   | ✔      | Emitted when 'select all' checkbox is deselected |
| onButtonClicked | ✔   | ✔      | Emitted when the button component is clicked (if the table view has button component as table data) |
| onImageLoaded | ✔   | ✔      | Emitted after image source is loaded succesfully. (if the table view has image component as table data)|
| onImageLoadError | ✔   | ✔      | Emitted when there is an error while image source loading. (if the table view has image component as table data) |
| onAscendingClicked | ✔   | ✔      | Emitted after ascending icon is clicked on one of the table headers. Sorting options will be visible if the sorting prop is true in given table header. Header name will be returned as event data.  |
| onDescendingClicked | ✔   | ✔      | Emitted after descending icon is clicked on one of the table headers. Sorting options will be visible if the sorting prop is true in given table header. Header name will be returned as event data. |

## Header Fields Data Types


| Name     | Type   | Default | Description |
| -------- | ------ | ------- | ----------- |
| type | String | `null` | Defines the type of data that will be rendered in the column. Currently, supported data types are; 'image', 'text', 'button', 'link', 'icon', 'checkbox'  |
| name | String | `null` | Attribute that the DataTable will try to retrieve the value from the data array. |
| label | String | `null` | Attribute that the DataTable will show on the header for the column. |
| sortable | Boolean | `false` | Defines if that column will be sortable or not. In case the value is true, two arrows will be show on the header. |
| rowSelection | Boolean | `true` | Attribute to show/hide row selection column |
| disabled | Boolean | `false` | Attribute to show/hide column header |