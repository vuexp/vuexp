---
sidebarDepth: 0
---

# DropDown

This is an overview of the most common usage of `<DropDown>`.

## Live Demo

<DocExampleBox>

```html
<DropDown :items="countries" @changeIndex="onChangeIndex" />
```

<DropDownDoc />

</DocExampleBox>

### Props

| Name        | Type   | Default | Web | Mobile | Description |
| ----------- | ------ | ------- | --- | ------ | -----------|
| errors      | Array  | []      | ✔   | ✔      |
| disabled    | Boolean| `false` | ✔   | ✔      | Enable or disabled DropDown.
| index       | Number | null    | ✔   | ✔      | Selected Dropdown item index.
| items       | Array  | null    | ✔   | ✔      | Item array for DropDown.
| placeholder | String | `Select Item`| ✔   | ✔      | Placeholder prop for DropDown.

### Events

| Name        | Web | Mobile |
| ----------- | --- | ------ |
| changeIndex | ✔   | ✔      |

### Dependencies

#### Note: The following components to be used from 'nativescript-vue-web'

| StackLayout, FlexboxLayout, FormattedString |
