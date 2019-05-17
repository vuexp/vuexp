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
    padding: 1rem;
    border: 1px solid rgb(52, 52, 187);
    color: rgb(52, 52, 187);
    border-radius: 3rem;
    width: auto;
    &:hover {
      cursor: pointer;
    }
  }
  &__itemContainer {
    position: relative;
    top: 0.5rem;
    background: white;
    // box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 7px;
    padding: 0.5rem;
    display: none;
    &__item {
      padding: 0.5rem;
    }
    &.is-visible {
      display: block;
    }
  }
}
</style>
