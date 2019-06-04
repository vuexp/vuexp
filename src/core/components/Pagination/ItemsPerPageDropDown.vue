<template>
  <StackLayout orientation="horizontal">
    <VxpLabel horizontalAlignment="center" v-if="label" :text="label" class="items-per-page-label" />
    <VxpDropDown
      horizontalAlignment="center"
      class="items-per-page-dropdown"
      :items="listItemsPerPage"
      :disabled="disabled"
      @changeIndex="onChangeIndex"
      :index="selectedIndex()"
    />
  </StackLayout>
</template>
<script>
import StackLayout from '../../../layouts/StackLayout';
import VxpDropDown from '../../../components/VxpDropDown';
import VxpLabel from '../../../components/VxpLabel';

export default {
  name: 'ItemsPerPageDropDown',
  components: {
    VxpDropDown,
    StackLayout,
    VxpLabel,
  },
  props: {
    listItemsPerPage: {
      type: Array,
      default: () => [10, 30, 50],
    },
    selectedItem: {
      type: Number,
      default: 10,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
  },
  methods: {
    onChangeIndex(index) {
      this.$emit('onItemsPerPageUpdated', this.listItemsPerPage[index]);
    },
    selectedIndex() {
      let index = this.listItemsPerPage.indexOf(this.selectedItem);
      return index > -1 ? index : 0;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../../assets/styles/helpers.scss';
.items-per-page-dropdown {
  margin: 0 unit(5);
  width: unit(50);
}
.items-per-page-dropdown .vxp-drop-down__menu {
  height: unit(50);
}
.items-per-page-label {
  margin-right: unit(10);
}
</style>
