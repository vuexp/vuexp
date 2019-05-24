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
      <VxpLabel class="demo-panel__title" text="Behaviour Configuration"></VxpLabel>

      <StackLayout class="margin-top-10">
        <VxpLabel text="Hint: "/>
        <TextField id="vxpmultiselectdropdown__hint__input" v-model="hint"/>
      </StackLayout>

      <StackLayout class="margin-top-10">
        <VxpLabel text="Empty Suggestions Label: "/>
        <TextField
          id="vxpmultiselectdropdown__emptySuggestionsLabel__input"
          v-model="emptySuggestionsLabel"
        />
      </StackLayout>
    </StackLayout>

    <StackLayout class="demo-panel">
      <VxpLabel class="demo-panel__title" text="Items Configuration"></VxpLabel>

      <StackLayout orientation="horizontal">
        <VxpButton
          @tap="addNewItem()"
          id="vxpmultiselectdropdown_addNewItem__button"
          text="Add New Item"
        ></VxpButton>
        <VxpButton
          @tap="removeAll()"
          id="vxpmultiselectdropdown_removeAll__button"
          text="Clear Items"
        ></VxpButton>
      </StackLayout>

      <StackLayout
        class="margin-top-10"
        v-for="(item,index) in selectableItems"
        :key="index"
        orientation="horizontal"
      >
        <StackLayout class="m-r-10" orientation="horizontal">
          <VxpLabel class="m-r-10" text="Label: "></VxpLabel>
          <TextField
            :id="'vxpmultiselectdropdown_items__label_' + index + '_input'"
            v-model="item.label"
          ></TextField>
        </StackLayout>
        <StackLayout class="m-r-10" orientation="horizontal">
          <VxpLabel class="m-r-10" text="Selected: "></VxpLabel>
          <VxpCheckbox
            :id="'vxpmultiselectdropdown_items__selected_' + index + '_checkbox'"
            @change="changeStatus($event,item)"
            :checked="isItemSelected(item)"
          />
        </StackLayout>
      </StackLayout>
    </StackLayout>

    <StackLayout class="margin-top-10" orientation="horizontal">
      <VxpLabel text="Selected Indexes :"></VxpLabel>
      <VxpLabel id="vxpmultiselectdropdown_selected_indexes" :text="selectedIndexes.join(',')"></VxpLabel>
    </StackLayout>
  </StackLayout>
</template>

<script>
import VxpMultiSelectDropdown from '../../../src/components/VxpMultiSelectDropdown';

import StackLayout from '../../../src/layouts/StackLayout';
import VxpLabel from '../../../src/components/VxpLabel';
import VxpCheckbox from '../../../src/components/VxpCheckbox';
import VxpButton from '../../../src/components/VxpButton';
import TextField from '../../../src/core/components/TextField/TextField';

export default {
  name: 'VxpMultiSelectDropdownLiveDemoDoc',
  components: {
    VxpMultiSelectDropdown,
    StackLayout,
    VxpLabel,
    VxpButton,
    TextField,
    VxpCheckbox,
  },
  mounted() {
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
    changeStatus(checked, item) {
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

