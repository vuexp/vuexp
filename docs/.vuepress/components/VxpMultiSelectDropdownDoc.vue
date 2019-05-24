<template>
  <StackLayout>
    <VxpMultiSelectDropdown
      :items="selectableItems"
      hint="Pick Some Lorem"
      emptySuggestionsLabel="Nothing to select here"
      v-model="selectedIndexes"
    ></VxpMultiSelectDropdown>
    <StackLayout class="margin-top-10" orientation="horizontal">
      <VxpLabel text="Selected Indexes :"></VxpLabel>
      <VxpLabel :text="selectedIndexes.join(',')"></VxpLabel>
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
      selectedIndexes: [],
      selectableItems: [
        {
          label: 'Lorem',
          value: 1,
        },
        {
          label: 'ipsum dolor',
          value: 2,
        },
        {
          label: 'sit amet',
          value: 3,
        },
        {
          label: 'consectetur',
          value: 4,
        },
        {
          label: 'adipiscing',
          value: 5,
        },
        {
          label: 'eiusmod',
          value: 6,
        },
        {
          label: 'Risus pretium',
          value: 7,
        },
        {
          label: 'Ornare arcu',
          value: 7,
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

