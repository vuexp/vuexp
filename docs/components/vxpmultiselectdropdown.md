---
sidebarDepth: 0
---

# VxpMultiSelectDropdown

VxpMultiSelectDropdown is a UI component that allows users to make multiple selection from pre-populated lists with search functionality.

## Live Demo

## Example Usage



<DocExampleBox>
```html
  <StackLayout>
    <VxpMultiSelectDropdown :items="selectableItems" hint="Pick Some Lorem" v-model="selectedIndexes"></VxpMultiSelectDropdown>
    <StackLayout class="margin-top-10" orientation="horizontal">
      <Label text="Selected Indexes :"></Label>
      <Label :text="selectedIndexes.join(',')"></Label>
    </StackLayout>
  </StackLayout>
```
```js
 export default {
     data() {
         return {
             selectedIndexes: [],
             selectableItems : [{
                 label: 'Lorem',
                 value : 1
             },{
                 label: 'ipsum dolor',
                 value : 2
             },{
                 label: 'sit amet',
                 value : 3
             },{
                 label: 'consectetur',
                 value : 4
             },{
                 label: 'adipiscing',
                 value : 5
             },{
                 label: 'eiusmod',
                 value : 6
             },{
                 label: 'Risus pretium',
                 value : 7
             },{
                 label: 'Ornare arcu',
                 value : 7
             }]
         }
     }
 }
```

```scss 
    .margin-top-10 {
        margin-top:10px;
    }
```

<VxpMultiSelectDropdownDoc />
</DocExampleBox>


This is an overview of the most common usage of `<VxpMultiSelectDropdown>`.

## Props

| Name     | Type    | Default | Web | Mobile |
| -------- | ------- | ------- | --- | ------ |
| items    | Array   | []      | ✔   | ✔      |
| hint     | string  | ``      | ✔   | ✔      |
| selected (v-model)  | Array   | []      |      |        |


<MultiSelectDropdownDoc />