<template>
  <StackLayout>
    <StackLayout class="demo-panel">
      <Label text="VxpListView Options" class="demo-panel__title"/>

     <FlexboxLayout flexWrap="wrap">
        <Label text="List Height" class="option-label"/>
        <TextField id="vxplistview_listheight_textfield" v-model="listViewHeight" class="option-input"/>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Is list reversed?" class="option-label"/>
        <input id="vxplistview_reversed_cb" v-model="isListReversed" type="checkbox">
      </FlexboxLayout>
      
      <FlexboxLayout flexWrap="wrap">
        <Label text="Scroll to start" class="option-label"/>
        <Button
          id="vxplistview_scrolltostart_button"
          text="scrollToStart"
          @tap="$refs.listView.scrollToStart(scrollToStartAnimated)"
        />
        <Label text="Animated?" style="margin-left: 10px"/>
        <input id="vxplistview_scrolltostartanimated_cb" v-model="scrollToStartAnimated" type="checkbox">
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Scroll to end" class="option-label"/>
        <Button
          id="vxplistview_scrolltoend_button"
          text="scrollToEnd"
          @tap="$refs.listView.scrollToEnd(scrollToEndAnimated)"
        />
        <Label text="Animated?" style="margin-left: 10px"/>
        <input id="vxplistview_scrolltoendanimated_cb" v-model="scrollToEndAnimated" type="checkbox">
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Scroll Index" class="option-label"/>
        <TextField id="vxplistview_scrolltoindex_textfield" v-model="scrollToIndex" class="option-input"/>
      </FlexboxLayout>
      <FlexboxLayout flexWrap="wrap">
        <Label text="Scroll to index" class="option-label"/>
        <Button
          id="vxplistview_scrolltoindex_button"
          text="scrollToIndex"
          @tap="$refs.listView.scrollToIndex(scrollToIndex, scrollToIndexAnimated)"
        />
        <Label text="Animated?" style="margin-left: 10px"/>
        <input id="vxplistview_scrolltoindexanimated_cb" v-model="scrollToIndexAnimated" type="checkbox">
      </FlexboxLayout>


      <Label text="Status Indicator Properties" class="demo-panel__title"/>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Indicator Text" class="option-label"/>
        <TextField id="vxplistview_indicator_textfield" v-model="statusIndicator.text" class="option-input"/>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Indicator State" class="option-label"/>
        <input id="vxplistview_indicatorstate_cb" v-model="statusIndicator.state" type="checkbox">
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Black v-template" class="option-label"/>
        <Button
          id="vxplistview_indicatorshow_button"
          text="Show"
          @tap="$refs.listView.showStatusIndicator(true, statusIndicator)"
        />
        <Button text="Hide" id="vxplistview_indicatorhide_button" @tap="$refs.listView.showStatusIndicator(false)"/>
      </FlexboxLayout>

      <Label text="List Items" class="demo-panel__title"/>
      <FlexboxLayout flexWrap="wrap">
        <Label text="Item Text" class="option-label"/>
        <TextField id="vxplistview_currentitem_textfield" v-model="currentItem.text" class="option-input"/>
      </FlexboxLayout>
      <FlexboxLayout flexWrap="wrap">
        <Label text="Black v-template?" class="option-label"/>
        <input id="vxplistview_currentitem_cb" v-model="currentItem.state" type="checkbox">
      </FlexboxLayout>
      <FlexboxLayout flexWrap="wrap">
        <Label text="Actions" class="option-label"/>
        <Button text="Add Item to List" id="vxplistview_additem_button" @tap="addCurrentItem"/>
        <Button text="Remove All Items" id="vxplistview_removeitems_button" @tap="removeAllItems"/>
      </FlexboxLayout>

      
    </StackLayout>

    <StackLayout class="demo-panel">
      <Label text="Component" class="demo-panel__title"/>
      <VxpListView
        ref="listView"
        id="vxplistview_component_listview"
        :items="itemList"
        :itemSelect="itemConditions"
        :reversed="isListReversed"
        :height="listViewHeight"
        @tap="onListViewTap"
        @loadMoreItems="onLoadMoreItems"
        @listViewLoaded="onListViewLoaded"
        @scrolled="onListViewScrolled"
      >
        <v-template slot-scope="{ item }" slot="showIfStateTrue">
          <Label :text="item.text" color="black"/>
        </v-template>
        <v-template slot-scope="{ item }" slot="showIfStateFalse">
          <Label :text="item.text" color="red"/>
        </v-template>
      </VxpListView>
    </StackLayout>

    <StackLayout class="demo-panel">
      <FlexboxLayout flexWrap="wrap">
        <Label text="Component Events" class="demo-panel__title"/>
        <Button
          id="vxplistview_clearevents_button"
          text="Clear"
          @tap="listViewEvents = []"
        />
      </FlexboxLayout>
      <Label :id="'vxplistview_event'+index+'_label'" v-for="(item, index) in listViewEvents" v-bind:key="index" :text="item" :textWrap="true"/>
    </StackLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label';
import StackLayout from '../../../src/layouts/StackLayout';
import TextField from '../../../src/components/TextField';
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';
import VxpListView from '../../../src/components/VxpListView';
import Button from '../../../src/components/Button';

export default {
  name: 'VxpListViewDoc',
  data() {
    return {
      listViewHeight: "200",
      isListReversed: false,
      scrollToStartAnimated: true,
      scrollToEndAnimated: true,
      scrollToIndexAnimated: true,
      scrollToIndex: "5",
      itemList: [],
      itemConditions: {
        showIfStateTrue: 'item.state === true',
        showIfStateFalse: 'item.state === false',
      },
      statusIndicator: {
        text: 'loading...',
        state: true,
      },
      currentItem: {
          text: 'Item Text',
          state: true,
      },
      listViewEvents: [],
    };
  },
  components: {
    FlexboxLayout,
    Label,
    StackLayout,
    TextField,
    VxpListView,
    Button,
  },
  methods: {
    onListViewTap(item, index) {
      this.listViewEvents.push("Item is tapped, index: " + index);
    },
    onLoadMoreItems() {
      this.listViewEvents.push("'Load more items' event is triggered.");
    },
    onListViewLoaded() {
      this.listViewEvents.push("List view is loaded.");
    },
    onListViewScrolled() {
      this.listViewEvents.push("List view is scrolled.");
    },
    addCurrentItem() {
        this.itemList.push({
            text: this.currentItem.text,
            state: this.currentItem.state,
        });
    },
    removeAllItems() {
        this.itemList = [];
    }
  },
};
</script>

<style lang="scss" scoped>
.flexbox {
  color: #2c3e50;
}

.demo-panel {
  padding: 10px;
  border: #3c495e;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid #f1f1f1;

  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}

.editor-param-input {
  width: 50px;
}

.option-label {
  margin-right: 10px;
  margin-bottom: 5px;
  width: 140px;
}

.option-input {
  width: 130px;
}

.option-row {
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  width: 100%;
}

.editor-param-title {
  margin: 0 5px 0 5px;
}

select {
  border: 1px solid #eaeaea;
  border-radius: 3px;
  padding: 2px 10px 2px 0;
}

button {
  padding: unset;
  padding-left: 5px;
  padding-right: 5px;
  min-width: unset;
}
</style>
