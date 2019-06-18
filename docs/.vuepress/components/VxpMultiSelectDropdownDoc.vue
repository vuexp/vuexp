<template>
  <StackLayout>
    <VxpMultiSelectDropdown
      :items="{label: 'label', values: selectableItems}"
      hint="Pick Some Lorem"
      emptySuggestionsLabel="Nothing to select here"
      v-model="selectedItems"
    ></VxpMultiSelectDropdown>
    <StackLayout class="margin-top-10" orientation="horizontal">
      <VxpLabel text="Selected Items :"></VxpLabel>
      <VxpLabel :text="selectedItems.map(item => item.label).join(',')"></VxpLabel>
    </StackLayout>
  </StackLayout>
</template>

<script>
import VxpMultiSelectDropdown from '../../../src/components/VxpMultiSelectDropdown';
import StackLayout from '../../../src/layouts/StackLayout';
import VxpLabel from '../../../src/components/VxpLabel';

export default {
  name: 'VxpMultiSelectDropdownDoc',
  components: {
    VxpMultiSelectDropdown,
    StackLayout,
    VxpLabel,
  },
  data() {
    return {
      selectedItems: [],
      selectableItems: [
        {
          label: 'Lorem', 
        },
        {
          label: 'ipsum dolor', 
        },
        {
          label: 'sit amet', 
        },
        {
          label: 'consectetur', 
        },
        {
          label: 'adipiscing', 
        },
        {
          label: 'eiusmod', 
        },
        {
          label: 'Risus pretium', 
        },
        {
          label: 'Ornare arcu', 
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss">
.margin-top-10 {
  margin-top: 10px;
}
</style>

