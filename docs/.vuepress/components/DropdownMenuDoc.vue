<template>
  <StackLayout>
    <DropdownMenu :items="items" :title="title"></DropdownMenu>
  </StackLayout>
</template>

<script>
import DropdownMenu from '../../../src/components/menus/DropdownMenu';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'DropdownMenuDoc',
  components: {
    StackLayout,
    DropdownMenu,
  },
  data() {
    return {
      title: 'Dropdown',
      items: [
        { icon: 'fa-share', title: 'Option 1', iconClass: 'fa' },
        { icon: 'fa-times', title: 'Option 2', iconClass: 'fa' },
        { icon: 'fa-refresh', title: 'Option 3', iconClass: 'fa' },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import url('/fonts/fontawesome.min.css');
@import url('/custom-input.css');
</style>
