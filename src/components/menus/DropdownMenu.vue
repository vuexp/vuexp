<template>
  <StackLayout class="vxp-dropdown">
    <StackLayout :disabled="disabled" v-if="items">
      <DropdownItem class="vxp-dropdown__item" v-for="(item, key) in items" :item="item" :key="key" />
    </StackLayout>
    <slot></slot>
  </StackLayout>
</template>

<script>
import DropdownItem from './DropdownItem';
import StackLayout from '../../layouts/StackLayout';

export default {
  name: 'DropdownMenu',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    itemClicked() {
      this.$emit('submit', this.cancelButtonText);
    },
  },
  components: {
    StackLayout,
    DropdownItem,
  },
};
</script>

<style lang="scss">
@import '../../assets/styles/components/dialogs';

.vxp-action-dialog {
  &__body {
    &__item {
      padding: 0;
      margin: 0;
      .vxp-button {
        width: 100%;
        text-align: left;
        background-color: #fff;
        border: none;
        outline: none;
        padding: 8px 6px;
        margin: 2px 0;

        &:hover {
          cursor: pointer;
          background-color: #ebebeb;
        }
      }
    }
  }
  &__footer {
    &__cancel-button {
      @include vxp-dialog-button;
    }
  }
}
</style>
