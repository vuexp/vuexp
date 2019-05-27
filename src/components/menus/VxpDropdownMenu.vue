<template>
  <StackLayout class="vxp-dropdown">
    <StackLayout
      class="vxp-dropdown__menu"
      :class="{ 'vxp-dropdown__is-open': isMenuOpen, 'vxp-dropdown__menu__disabled': disabled }"
      orientation="horizontal"
      @tap="toggleMenu()"
    >
      <VxpLabel class="vxp-dropdown__menu__title" :text="title"></VxpLabel>
      <VxpLabel class="vxp-dropdown__menu__icon" :text="icon | fonticon" :class="iconClass" />
    </StackLayout>
    <StackLayout class="vxp-dropdown__itemContainer" :class="{ 'is-visible': isMenuOpen }" v-if="items && !isNative">
      <VxpDropdownItem
        class="vxp-dropdown__itemContainer__item"
        v-for="(item, index) in items"
        :item="item"
        :key="index"
        :elementIndex="index"
        :isActive="currentIndex === index"
        :id="'dropdownmenu__item(' + index + ')__label'"
        @tap="selectItem(index, item)"
        @keyup.enter="selectItem(index, item)"
        @keyup.space="selectItem(index, item)"
      />
    </StackLayout>
  </StackLayout>
</template>

<script>
import Gestures from '../../core/mixins/GestureMixin';
import StackLayout from '../../layouts/StackLayout';
import platform from '../../platform';
import VxpDropdownItem from './VxpDropdownItem';
import VxpLabel from '../VxpLabel';

export default {
  name: 'VxpDropdownMenu',
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
    selectedIndex: {
      type: Number,
      default: null,
    },
    nativeCancelBtnText: {
      type: String,
      default: 'Cancel',
    },
  },
  data() {
    return {
      isMenuOpen: false,
      currentIndex: this.selectedIndex,
    };
  },
  computed: {
    isNative() {
      return platform.platform !== 'web';
    },
  },
  methods: {
    toggleMenu() {
      if (!this.disabled) {
        if (!this.isNative) {
          this.isMenuOpen = !this.isMenuOpen;
        } else {
          // action(this.title, this.nativeCancelBtnText, this.items.map(i => i.title)).then(result => {
          //   this.$emit('selectedIndexChanged', result);
          // });
        }
      }
    },
    selectItem(index, item) {
      this.currentIndex = index | this.$emit('selectedIndexChanged', { index, item });
    },
  },
  components: {
    VxpLabel,
    VxpDropdownItem,
    StackLayout,
  },
  mixins: [Gestures],
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
    &__icon {
      margin-left: 0.6rem;
    }
  }
  &__itemContainer {
    position: relative;
    top: 0.2rem;
    background: white;
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
  &__is-open {
    background: rgb(240, 240, 252);
  }
}
.vxp-dropdown__menu__disabled {
  border-color: #585858;
  color: #585858;
  cursor: not-allowed !important;
}
</style>
