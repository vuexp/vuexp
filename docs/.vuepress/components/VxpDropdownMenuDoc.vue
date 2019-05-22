<template>
  <StackLayout>
    <VxpDropdownMenu :items="items" :title="title"></VxpDropdownMenu>
  </StackLayout>
</template>

<script>
import VxpDropdownMenu from '../../../src/components/menus/VxpDropdownMenu';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'VxpDropdownMenuDoc',
  components: {
    StackLayout,
    VxpDropdownMenu,
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
