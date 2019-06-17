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

## Example Items Data Structure
```html
      items: {
        label: 'value',
        values: [
          { id: 1, value: 'Albania' },
          { id: 2, value: 'Algeria' },
          { id: 3, value: 'American Samoa' },
          { id: 4, value: 'Andorra' },
          { id: 5, value: 'Angola' },
          { id: 6, value: 'Anguilla' },
          { id: 7, value: 'United States' },
          { id: 8, value: 'Germany' },
          { id: 9, value: 'Turkey' },
        ],
      }
```

### Props

| Name        | Type    | Default       | Web | Mobile | Description                             |
| ----------- | ------- | ------------- | --- | ------ | --------------------------------------- |
| errors      | Array   | []            | ✔   | ✔      | Set errors of the dropDown.             |
| disabled    | Boolean | `false`       | ✔   | ✔      | Set enable or disabled of the dropDown. |
| index       | Number  | null          | ✔   | ✔      | Set and get item index of the dropdown. |
| items       | Object   | default: { label: '',values: []}        | ✔   | ✔      | Set items object of the dropDown.        |
| placeholder | String  | `Select Item` | ✔   | ✔      | Set placeholder of the dropDown.        |

### Events

| Name        | Web | Mobile | Description                                                      |
| ----------- | --- | ------ | ---------------------------------------------------------------- |
| changeIndex | ✔   | ✔      | Event occurs whenever dropDown item changes by user interaction. |
