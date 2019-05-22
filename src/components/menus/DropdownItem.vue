<template>
  <StackLayout class="vxp-dropdown-item" :class="{ 'is-active': isActive }" orientation="horizontal">
    <Label
      class="vxp-dropdown-item__icon"
      v-if="(icon && iconClass) || (item.icon && item.iconClass)"
      :text="(icon || item.icon) | fonticon"
      :class="iconClass || item.iconClass"
    ></Label>
    <Label v-if="item.title" :text="item.title" class="vxp-dropdown-item__title"></Label>
    <Label v-else :text="title" class="vxp-dropdown-item__title"></Label>
  </StackLayout>
</template>

<script>
import Gestures from '../../core/mixins/GestureMixin';
import Label from '../../core/components/Label/Label';
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
  mixins: [Gestures],
};
</script>

<style lang="scss">
@import '../../assets/styles/components/dialogs';

.vxp-dropdown-item {
  border-radius: 5px;
  padding: 0.7rem;
  &__icon {
    padding-right: 10px;
  }
  &:hover {
    cursor: pointer;
    background: rgb(235, 235, 235);
  }
}
</style>
