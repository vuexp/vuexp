<template>
  <StackLayout v-if="visibility" class="vxp-dropdown">
    <StackLayout class="vxp-dropdown__menu" orientation="horizontal" @tap="toggleMenu()">
      <Label class="vxp-dropdown__menu__title" :text="title"></Label>
      <Label class="vxp-dropdown__menu_icon" :text="icon | fonticon" :disabled="disabled" :class="iconClass" />
    </StackLayout>
    <StackLayout class="vxp-dropdown__itemContainer" :class="{ 'is-visible': isMenuOpen }" v-if="items">
      <DropdownItem class="vxp-dropdown__itemContainer__item" v-for="(item, key) in items" :item="item" :key="key" :elementIndex="key" />
    </StackLayout>
  </StackLayout>
</template>

<script>
import DropdownItem from './DropdownItem';
import Label from '../Label';
import StackLayout from '../../layouts/StackLayout';

export default {
  name: 'DropdownMenu',
  props: {
    title: String,
    icon: String,
    iconClass: String,
    items: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    visibility: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  components: {
    StackLayout,
    DropdownItem,
    Label,
  },
};
</script>

<style lang="scss">
@import '../../assets/styles/components/dialogs';

.vxp-dropdown {
  &__menu {
    &:hover {
      cursor: pointer;
    }
  }
  &__itemContainer {
    padding: 0.5rem;
    display: none;
    border: 1px solid;
    &__item {
      padding: 0.5rem;
    }
    &.is-visible {
      display: block;
    }
  }
}
</style>
