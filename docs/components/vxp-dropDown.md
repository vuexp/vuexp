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

| Name        | Type    | Default       | Web | Mobile | Description                             |
| ----------- | ------- | ------------- | --- | ------ | --------------------------------------- |
| errors      | Array   | []            | ✔   | ✔      | Set errors of the dropDown.             |
| disabled    | Boolean | `false`       | ✔   | ✔      | Set enable or disabled of the dropDown. |
| index       | Number  | null          | ✔   | ✔      | Set and get item index of the dropdown. |
| items       | Array   | null          | ✔   | ✔      | Set items array of the dropDown.        |
| placeholder | String  | `Select Item` | ✔   | ✔      | Set placeholder of the dropDown.        |

### Events

| Name        | Web | Mobile | Description                                                      |
| ----------- | --- | ------ | ---------------------------------------------------------------- |
| changeIndex | ✔   | ✔      | Event occurs whenever dropDown item changes by user interaction. |
