<template>
  <StackLayout id="vxpmultiselectdropdown-doc">
    <VxpMultiSelectDropdown
      :items="selectableItems"
      :hint="hint"
      :emptySuggestionsLabel="emptySuggestionsLabel"
      v-model="selectedIndexes"
      id="vxpmultiselectdropdown"
    ></VxpMultiSelectDropdown>
    <StackLayout class="demo-panel">
      <Label class="demo-panel__title" text="Behaviour Configuration"></Label>

      <StackLayout class="margin-top-10">
        <Label text="Hint: "/>
        <TextField id="vxpmultiselectdropdown__hint__input" v-model="hint"/>
      </StackLayout>

      <StackLayout class="margin-top-10">
        <Label text="Empty Suggestions Label: "/>
        <TextField
          id="vxpmultiselectdropdown__emptySuggestionsLabel__input"
          v-model="emptySuggestionsLabel"
        />
      </StackLayout>
    </StackLayout>

    <StackLayout class="demo-panel">
      <Label class="demo-panel__title" text="Items Configuration"></Label>

      <StackLayout orientation="horizontal">
        <Button @tap="addNewItem()" id="vxpmultiselectdropdown_addNewItem__button">Add New Item</Button>
        <Button @tap="removeAll()" id="vxpmultiselectdropdown_removeAll__button">Clear Items</Button>
      </StackLayout>

      <StackLayout class="margin-top-10" v-for="(item,index) in selectableItems" :key="index" orientation="horizontal">
        <StackLayout class="m-r-10" orientation="horizontal">
          <Label class="m-r-10" text="Label: "></Label>
          <TextField :id="'vxpmultiselectdropdown_items__label_' + index + '_input'" v-model="item.label"></TextField>
        </StackLayout>
        <StackLayout class="m-r-10" orientation="horizontal">
          <Label class="m-r-10" text="Selected: "></Label>
          <input :id="'vxpmultiselectdropdown_items__selected_' + index + '_checkbox'" type="checkbox" @change="changeStatus($event.target.checked,item)" :checked="isItemSelected(item)">
        </StackLayout>
      </StackLayout>
    </StackLayout>

    <StackLayout class="margin-top-10" orientation="horizontal">
      <Label text="Selected Indexes :"></Label>
      <Label id="vxpmultiselectdropdown_selected_indexes" :text="selectedIndexes.join(',')"></Label>
    </StackLayout>
  </StackLayout>
</template>

<script>
import VxpMultiSelectDropdown from '../../../src/components/VxpMultiSelectDropdown/VxpMultiSelectDropdown';

export default {
  name: 'VxpMultiSelectDropdownLiveDemoDoc',
  components: {
    VxpMultiSelectDropdown,
  },
  mounted(){
    this.addNewItem('Lorem');
    this.addNewItem('ipsum dolor');
    this.addNewItem('quis nostrud');
    this.addNewItem('voluptate velit');
    this.addNewItem('esse');
    this.addNewItem('occaecat');
    this.addNewItem('mollit anim');
  },
  data() {
    return {
      selectedIndexes: [],
      selectableItems: [],
      hint: 'Select items',
      emptySuggestionsLabel: 'There is no items to select',
    };
  },
  methods: {
    addNewItem(label) {
      this.selectableItems.push({
        label: label || '',
        value: {},
      });
    },
    removeAll() {
      this.selectableItems = [];
      this.selectedIndexes = [];
    },
    changeStatus(checked,item) {
      const itemIndex = this.selectableItems.indexOf(item);
      const selectedArrayIndex = this.selectedIndexes.indexOf(itemIndex);
      if (selectedArrayIndex > -1) {
        this.selectedIndexes.splice(selectedArrayIndex, 1);
      } else {
        this.selectedIndexes.push(itemIndex);
      }
    },
    isItemSelected(item) {
      const itemIndex = this.selectableItems.indexOf(item);
      if (itemIndex > -1) {
        return this.selectedIndexes.indexOf(itemIndex) > -1;
      }
      return false;
    },
  },
};
</script>
<style lang="scss" scoped>
.margin-top-10 {
  margin-top: 10px;
}

.m-r-10 {
  margin-right: 10px;
}

.demo-panel {
  overflow: auto;
  padding: 10px;
  background-color: #eee;
  border: #6c495e;
  border-radius: 5px;
  margin: 10px;
  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>

