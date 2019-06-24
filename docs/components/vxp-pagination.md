---
sidebarDepth: 0
---

# VxpPagination

This is an overview of the most common usage of `<VxpPagination>`.
`VxpPagination` is a UI component that displays page number for the given properties.

## Live Demo
<DocExampleBox :liveDemoMode="true">
```html

```
<VxpPaginationLiveDemo />
</DocExampleBox>

## Props

| Name             | Type    | Default | Web | Mobile | Description |
| ---------------- | ------- | ------- | --- | ------ | ----------- |
| totalItems       | Number  | `-`     | ✔   | ✔      | Total number of items in the list that is paginated. |
| itemsPerPage     | Number  |  10     | ✔   | ✔      | Number of items that are displayed in a page |
| page             | Number  |  1      | ✔   | ✔      | Selected page in pagination component. Page number starts from 1. [1, MaxPageNumber] |
| showFirstPage    | Boolean | `true`  | ✔   | ✔      | Enables jump to first page button |
| showLastPage     | Boolean | `true`  | ✔   | ✔      | Enables jump to last page button |
| showNextPage     | Boolean | `true`  | ✔   | ✔      | Enables next page button |
| showPreviousPage | Boolean | `true`  | ✔   | ✔      | Enables previous page button |

## Events

| Name                | Web | Mobile | Description |
| ------------------- | --- | ------ | ----------- |
| onPaginationUpdate  | ✔   | ✔      | This event is generated when user taps/clicks on a page link to change. Event params are `currentPage` and `targetPage`|
| onUpdateCurrentPage | ✔   | ✔      | This event is generated when page needs to be updated. This is generated when items-per-page or total-items change. Event param is `currentPage`|
