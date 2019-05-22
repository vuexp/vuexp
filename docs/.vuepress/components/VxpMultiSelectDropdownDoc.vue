<template>
  <StackLayout>
    <VxpMultiSelectDropdown :items="selectableItems" hint="Pick Some Lorem" emptySuggestionsLabel="Nothing to select here" v-model="selectedIndexes"></VxpMultiSelectDropdown>
    <StackLayout class="margin-top-10" orientation="horizontal">
      <Label text="Selected Indexes :"></Label>
      <Label :text="selectedIndexes.join(',')"></Label>
    </StackLayout>
  </StackLayout>
</template>

<script>
import VxpMultiSelectDropdown from '../../../src/components/VxpMultiSelectDropdown/VxpMultiSelectDropdown';

export default {
  name: 'VxpMultiSelectDropdownDoc',
  components: {
    VxpMultiSelectDropdown,
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
    margin-top:10px;
  }
</style>

