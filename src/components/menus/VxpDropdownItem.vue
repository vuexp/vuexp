<template>
  <StackLayout class="vxp-dropdown-item" :class="{ 'is-active': isActive }" orientation="horizontal">
    <VxpLabel
      class="vxp-dropdown-item__icon"
      v-if="(icon && iconClass) || (item.icon && item.iconClass)"
      :text="(icon || item.icon) | fonticon"
      :class="iconClass || item.iconClass"
    ></VxpLabel>
    <VxpLabel v-if="item.title" :text="item.title" class="vxp-dropdown-item__title"></VxpLabel>
    <VxpLabel v-else :text="title" class="vxp-dropdown-item__title"></VxpLabel>
  </StackLayout>
</template>

<script>
import Gestures from '../../core/mixins/GestureMixin';
import StackLayout from '../../layouts/StackLayout';
import VxpLabel from '../VxpLabel';

export default {
  name: 'VxpDropdownItem',
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
    VxpLabel,
    StackLayout,
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
