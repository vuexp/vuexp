<template>
  <div class="vxp-drop-down" ref="vxpDropDown">
    <div class="vxp-drop-down__container">
      <input
        class="vxp-drop-down__container__toggle typ-body"
        type="text"
        readonly
        :placeholder="placeholder"
        :disabled="disabled"
        :value="selectedItem"
        @click="onInputClick"
        @keydown.up="keyUp"
        @keydown.down="keyDown"
        @keydown.tab="closeDropDown"
        @keydown.esc="closeDropDown"
        @keyup.enter="keyEnter"
        @keyup="onKeyUp"
        @keypress="onKeyPress"
      />
      <div class="vxp-drop-down__container__icon">▼</div>
    </div>
    <transition name="slide-fade">
      <ul v-show="showMenu" class="vxp-drop-down__menu" ref="vxpDropdownMenu">
        <li
          @click="itemClick(index)"
          @mouseover="hoverIndex = index"
          :class="{ active: index === selectedIndex, hover: index === hoverIndex }"
          v-for="(item, index) in items"
          v-bind:key="index"
        >
          {{ item }}
        </li>
      </ul>
    </transition>
    <FlexboxLayout flexDirection="column" v-if="errors.length" class="vxp-drop-down__container__toggle__error-messages typ-body">
      <VxpLabel :text="error" v-for="(error, index) in errors" :key="index" :textWrap="true" />
    </FlexboxLayout>
  </div>
</template>

<script>
import debounce from '../helpers/debounce';
import VxpLabel from './VxpLabel';
import FlexboxLayout from '../layouts/FlexboxLayout';

export default {
  name: 'VxpDropDown',
  props: {
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
    },
    index: {
      type: Number,
      default: null,
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      ignoreBlur: false,
      showMenu: false,
      selectedIndex: null,
      hoverIndex: null,
      pressedKey: {
        key: null,
        count: 0,
      },
      searchedWord: '',
    };
  },
  computed: {
    selectedItem() {
      return this.items[this.selectedIndex];
    },
  },
  watch: {
    selectedItem() {
      this.$emit('changeIndex', this.selectedIndex, this.items[this.selectedIndex]);
    },
    index() {
      this.selectedIndex = this.index;
    },
  },
  methods: {
    onInputClick() {
      this.ignoreBlur = true;
      this.toggleMenu();
    },
    itemClick(index) {
      this.selectedIndex = index;
      this.toggleMenu();
    },
    onBlur(event) {
      if (this.ignoreBlur) {
        this.ignoreBlur = false;
        return;
      }
      let path = event.path || (event.composedPath && event.composedPath()) || this.composedPath(event.target);
      if (path.indexOf(this.$refs.vxpDropDown) === -1) {
        this.toggleMenu();
      }
    },
    toggleMenu(close) {
      this.showMenu = close === true ? false : !this.showMenu;
      this.hoverIndex = null;
      if (this.showMenu) {
        document.addEventListener('click', this.onBlur, false);
      } else {
        document.removeEventListener('click', this.onBlur, false);
      }
    },
    composedPath(el) {
      const path = [];
      while (el) {
        path.push(el);
        if (el.tagName === 'HTML') {
          path.push(document);
          path.push(window);
          return path;
        }
        el = el.parentElement;
      }
    },
    searchFilter(key) {
      const result = this.items.filter(item =>
        item
          .toString()
          .toLowerCase()
          .startsWith(this.searchedWord),
      );
      if (this.pressedKey.key !== key) {
        this.pressedKey = {
          key: key,
          count: 0,
        };
      } else {
        this.pressedKey.count++;
      }
      const selectedItem = result[this.pressedKey.count % result.length];
      if (this.items.indexOf(selectedItem) !== -1 && result.length !== 0) {
        this.selectedIndex = this.items.indexOf(selectedItem);
        this.hoverIndex = this.selectedIndex;
      }
      return result;
    },
    onKeyUp: debounce(function() {
      this.searchedWord = '';
    }, 300),
    onKeyPress(e) {
      const key = String.fromCharCode(e.which);
      if (key.length === 1) {
        this.searchedWord += key;

        const result = this.searchFilter(key);
        if (result.length === 0) {
          this.searchedWord = this.searchedWord.slice(0, -1);
          if (this.searchedWord !== '') {
            this.pressedKey.count--;
            this.searchFilter(key);
          }
        }
        const element = this.$refs.vxpDropdownMenu ? this.$refs.vxpDropdownMenu.children[this.hoverIndex] : false;
        const scrollTo = element ? element.offsetHeight * this.hoverIndex : 0;
        this.scrollTo(scrollTo);
      }
    },
    closeDropDown() {
      this.toggleMenu(true);
    },
    keyUp() {
      this.hoverIndex = this.hoverIndex === null ? this.selectedIndex - 1 : this.hoverIndex <= 0 ? 0 : this.hoverIndex - 1;
      this.selectedIndex = this.hoverIndex;
      this.maybeAdjustScroll();
    },
    keyDown() {
      this.hoverIndex = this.hoverIndex === null ? this.selectedIndex + 1 : this.hoverIndex + 1 < this.items.length ? this.hoverIndex + 1 : this.hoverIndex;
      this.selectedIndex = this.hoverIndex;
      this.maybeAdjustScroll();
    },
    keyEnter() {
      if (this.hoverIndex) this.selectedIndex = this.hoverIndex;
      this.toggleMenu();
    },
    maybeAdjustScroll() {
      let pixelsToPointerTop = this.pixelsToPointerTop();
      let pixelsToPointerBottom = this.pixelsToPointerBottom();
      if (pixelsToPointerTop <= this.viewport().top) {
        return this.scrollTo(pixelsToPointerTop);
      } else if (pixelsToPointerBottom >= this.viewport().bottom) {
        return this.scrollTo(this.viewport().top + this.pointerHeight());
      }
    },
    pixelsToPointerTop() {
      let pixelsToPointerTop = 0;
      if (this.$refs.vxpDropdownMenu) {
        for (let i = 0; i < this.hoverIndex; i++) {
          pixelsToPointerTop += this.$refs.vxpDropdownMenu.children[i].offsetHeight;
        }
      }
      return pixelsToPointerTop;
    },
    pixelsToPointerBottom() {
      return this.pixelsToPointerTop() + this.pointerHeight();
    },
    pointerHeight() {
      let element = this.$refs.vxpDropdownMenu ? this.$refs.vxpDropdownMenu.children[this.hoverIndex] : false;
      return element ? element.offsetHeight : 0;
    },
    viewport() {
      return {
        top: this.$refs.vxpDropdownMenu ? this.$refs.vxpDropdownMenu.scrollTop : 0,
        bottom: this.$refs.vxpDropdownMenu ? this.$refs.vxpDropdownMenu.offsetHeight + this.$refs.vxpDropdownMenu.scrollTop : 0,
      };
    },
    scrollTo(position) {
      return this.$refs.vxpDropdownMenu ? (this.$refs.vxpDropdownMenu.scrollTop = position) : null;
    },
  },
  created() {
    this.selectedIndex = this.index;
  },
  components: {
    VxpLabel,
    FlexboxLayout,
  },
};
</script>

<style lang="scss">
@import '../themes/themes';
@import '../assets/styles/helpers';

$border-color: #e2e4e8;
$placeholder-color: #898d90;

.slide-fade-enter-active {
  transition: all 0.1s ease;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(unit(-10));
  opacity: 0;
}

.vxp-drop-down {
  position: relative;
  text-align: left;
  user-select: none;

  @include themed($themes) {
    color: getvar(default-text);
  }

  &__container {
    display: flex;
    flex-direction: row-reverse;
    cursor: pointer;
    background-color: #ffffff;

    &__toggle {
      min-height: unit(20);
      padding: unit(9) unit(15) unit(9) unit(0);
      border: none;
      box-sizing: border-box;
      width: 100%;
      cursor: pointer;

      font-style: normal;
      color: #080808;
      user-select: none;
      caret-color: transparent;
      background-color: transparent;

      &::placeholder {
        color: $placeholder-color;
      }

      &:active,
      &:focus {
        outline: none;
      }

      &__error-messages {
        color: red;
      }

      @include themed($themes) {
        &__error-messages {
          color: getvar(alert);
          margin-top: unit(8);
        }
      }
    }

    &__icon {
      height: 100%;
      padding: 12px;
      color: black;
      position: absolute;
      z-index: 2;
      font-size: unit(10);
      pointer-events: none;
      box-sizing: border-box;
    }
  }

  &__menu {
    position: absolute;
    z-index: 3;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    border-right: solid unit(1) $border-color;
    border-left: solid unit(1) $border-color;
    border-bottom: solid unit(1) $border-color;
    background-color: #ffffff;
    overflow-y: auto;

    box-shadow: unit(0) unit(12) unit(13) unit(-11) rgba(0, 0, 0, 0.1), unit(-10) unit(-3) unit(13) unit(-11) rgba(0, 0, 0, 0.1),
      unit(10) unit(-3) unit(13) unit(-11) rgba(0, 0, 0, 0.1);

    li {
      min-height: unit(20);
      padding: unit(6) unit(5);
      background-color: #ffffff;

      &.hover {
        background-color: #8cc2ff;
      }

      &.active:not(.hover) {
        background-color: #ebebeb;
      }

      cursor: pointer;
    }
  }
}
</style>
