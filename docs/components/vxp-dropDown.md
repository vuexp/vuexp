---
sidebarDepth: 0
---

# VxpDropDown

This is an overview of the most common usage of `<VxpDropDown>`.

## Live Demo

<DocExampleBox>

```html
<VxpDropDown :items="countries" @changeIndex="onChangeIndex" />
```

<VxpDropDownDoc />

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

| Name        | Web | Mobile | Description
| ----------- | --- | ------ | -----------
| changeIndex | ✔   | ✔      | Event occurs whenever dropDown item changes by user interaction
