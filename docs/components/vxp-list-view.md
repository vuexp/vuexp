---
sidebarDepth: 0
---

# VxpListView

This is an overview of the most common usage of VxpListView. 

`<VxpListView>` is a UI component that shows items in a vertically scrolling list. To set how the list shows individual items, you can use the `<v-template>` component.

<DocExampleBox :liveDemoMode="true">
<VxpListViewDoc />
</DocExampleBox>

## Using `<VxpListView>` with multiple `<v-template>` blocks

The v-template component is used to define how each list item is shown on the screen.

If you need to visualize one or more list items differently than the rest, you can enclose them in additional `<v-template>` blocks and use conditions. You can have as many `<v-template>` blocks as needed within one `<VxpListView>`.

```html
<VxpListView :items="itemList" :itemSelect="itemConditions">
  <v-template slot-scope="{ item }" slot="showIfStateTrue">
    <Label :text="item.text" color="black" />
  </v-template>

  <v-template slot-scope="{ item }" slot="showIfStateFalse">
    <Label :text="item.text" color="red" />
  </v-template>
</VxpListView>
<script>
  export default {
  name: 'VxpListViewDoc',
  data() {
    return {
      itemList: [
        {text: 'Item 1', state: true},
        {text: 'Item 2', state: true},
        {text: 'Item 3', state: false}
      ],
      itemConditions: {
          showIfStateTrue: 'item.state === true',
          showIfStateFalse: 'item.state === false',
      }
    };
  },
};
</script>
```

When you create conditions for `<v-template>`, you can use any valid JavaScript expression.

## Props

| Name       | Type         | Default | Web | Mobile | Description |
| ---------- | ------------ | ------- | --- | ------ | ----------- |
| items      | `Array<any>` | []      | ✔   | ✔      | List items array. |
| reversed   | `Boolean`    | false   | ✔   | ✔      | Render order of list items. |
| itemSelect | `Object`     | {}      | ✔   | ✔      | This object is used for selecting v-templates for particular items. See the example usage. |

## Events

| Name          | Web | Mobile | Description |
| ------------- | --- | ------ | ----------- |
| tap           | ✔   | ✔      | This event is generated when user taps/clicks on an item. Event params are `item` and `index`|
| scrolled      | ✔   | ✔      | This event is generated list is scrolled. No parameters are passed.|
| loadMoreItems | ✔   | ✔      | This event is generated when scroll is close to the end of the list. This event can be used for retrieving new items.|
| listViewLoaded | ✔   | ✔      | This event is generated when listview is mounted and initialized. |

## Methods

| Name                                    | Web | Mobile | Description |
| --------------------------------------- | --- | ------ | ----------- |
| scrollToStart(animated = true)          | ✔   | ✔      | Scrolls to the top of the list. |
| scrollToEnd(animated = true)            | ✔   | ✔      | Scrolls to the end of the list.|
| scrollToIndex(index)                    | ✔   | ✔      | Scrolls to the item with the given index. |
| showStatusIndicator(showIndicator, item)| ✔   | ✔      | Shows or hides status indicator item. If `showIndicator` is set to false, status indicator will be hidden. If `showIndicator` is set to true, given `item` will be listed as an status indicator.  |

