<template>
  <MultiSelectDropdown :items="items" v-model="selectedIndexes"></MultiSelectDropdown>
</template>

<script>
import MultiSelectDropdown from '../../../src/components/MultiSelectDropdown';

export default {
  name: 'MultiSelectDropdownDoc',
  components: {
    MultiSelectDropdown,
  },
  data() {
    return {
      selectedIndexes: [0],
      items: [
        {
          label: 'test',
          value: '1',
        },
        {
          label: 'naber2',
          value: '2',
        },
        {
          label: 'volkan',
          value: '3',
        },
      ].concat([4,5,6,7,8,9,10,11,12,13,14,15,16,17].map(c => ({ value: c, label : 'item' + c }))),
    };
  },
  methods: {},
};
</script>
<style lang="scss">
</style>

