<template>
  <StackLayout class="vxp-dropdown-item" :class="{ 'is-active': isActive }" orientation="horizontal">
    <Label v-if="(icon && iconClass) || (item.icon && item.iconClass)" :text="(icon || item.icon) | fonticon" :class="iconClass || item.iconClass"></Label>
    <Label v-if="item.title" :text="item.title" class="vxp-dropdown-item__title"></Label>
    <Label v-else :text="title" class="vxp-dropdown-item__title"></Label>
  </StackLayout>
</template>

<script>
import Label from '../Label';
import StackLayout from '../../layouts/StackLayout';

export default {
  name: 'DropdownItem',
  props: {
    item: {
      type: Object,
      default: null,
    },
    title: String,
    icon: String,
    iconClass: String,
    elementIndex: Number,
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    StackLayout,
    Label,
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
