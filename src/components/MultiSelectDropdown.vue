<template>
  <StackLayout orientation="vertical" class="vxp-multiselectdropdown">
    <WrapLayout>
      <StackLayout orientation="horizontal">
        <StackLayout
          class="vxp-multiselectdropdown__pill"
          orientation="horizontal"
          v-for="selectedItemIndex in selected"
          @tap="removeSelection(items[selectedItemIndex])"
          :key="items[selectedItemIndex][keyProp]"
        >
          <Label class="vxp-multiselectdropdown__pill-label" :text="items[selectedItemIndex][labelProp]"></Label>
          <Label class="vxp-multiselectdropdown__pill-remove-text" v-html="'&times;'"></Label>
        </StackLayout>
      </StackLayout>
      <StackLayout flexGrow="1">
        <TextField
          ref="searchInput"
          class="vxp-multiselectdropdown__search-input"
          v-model="searchText"
          :placeholder="placeholder"
          @tap="activateSuggestions()"
        ></TextField>
      </StackLayout>
    </WrapLayout>
    <StackLayout class="vxp-multiselectdropdown__suggestions-box" ref="suggestionsBox" v-if="suggestionsOpened && !isNative" v-click-outside>
      <StackLayout v-if="displayItems.length">
        <Label
          class="vxp-multiselectdropdown__suggestions-box__selectable-item"
          v-for="item in displayItems"
          @tap="selectItem(item)"
          :key="item[keyProp]"
          :text="item[labelProp]"
        ></Label>
      </StackLayout>
      <StackLayout v-else>
        <Label @tap="deactivateSuggestions()" class="vxp-multiselectdropdown__suggestions-box__empty" :text="emptySuggestionsLabel"></Label>
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import Gestures from '../mixins/GestureMixin';
import StackLayout from '../layouts/StackLayout';
import WrapLayout from '../layouts/WrapLayout';
import TextField from './TextField';
import Label from './Label';
import Platform from '../platform.js';

export default {
  name: 'MultiSelectDropdown',
  model: {
    prop: 'selected',
    event: 'selectedChange',
  },
  data() {
    return {
      suggestionsOpened: false,
      searchText: '',
    };
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: Array,
    keyProp: {
      type: String,
      default: 'value',
    },
    labelProp: {
      type: String,
      default: 'label',
    },
    placeholder: {
      type: String,
      default: '',
    },
    emptySuggestionsLabel: {
      type: String,
      default: 'Nothing to select right now',
    },
  },
  mounted() {
    if (!this.isNative) {
      document.body.addEventListener('mousedown', this.clickOutsideListener);
      this.$refs.searchInput.$el.addEventListener('focus', this.activateSuggestions);
    }
  },
  destroyed() {
    if (this.isNative) {
      document.body.removeEventListener('mousedown', this.clickOutsideListener);
      this.$refs.searchInput.$el.removeEventListener('focus', this.activateSuggestions);
      this.$refs.searchInput.$el.removeEventListener('blur', this.deactivateSuggestions);
    }
  },
  methods: {
    selectedChange() {
      this.$emit('selectedChange', this.selected);
    },
    removeLastSelection() {
      if (this.selected.length > 0) {
        const lastItemIndex = this.selected[this.selected.length - 1];
        const selectedItem = this.items[lastItemIndex];
        this.toggleSelect(selectedItem);
      }
    },
    selectItem(item) {
      this.toggleSelect(item);
      if (!this.isNative) {
        this.$refs.searchInput.$el.focus();
      }
    },
    toggleSelect(item) {
      const itemIndex = this.items.indexOf(item);
      const selectedItemIndex = this.selected.indexOf(itemIndex);
      if (selectedItemIndex > -1) {
        this.selected.splice(selectedItemIndex, 1);
      } else {
        this.selected.push(itemIndex);
      }

      if (this.selected.length === 0 || this.selected.length === this.items.length) {
        this.deactivateSuggestions();
      }

      this.selectedChange();
    },
    activateSuggestions() {
      this.suggestionsOpened = true;
    },
    deactivateSuggestions() {
      this.suggestionsOpened = false;
    },
    removeSelection(item) {
      if (!this.isNative) {
        this.$refs.searchInput.$el.focus();
      }
      this.toggleSelect(item);
      this.activateSuggestions();
    },
    unSelectedItems() {
      return this.items.filter((item, index) => this.selected.indexOf(index) === -1);
    },
    clickOutsideListener(event) {
      if (!this.suggestionsOpened) {
        return;
      }
      const wrapperElement = this.$el;
      let targetElement = event.target; // clicked element

      do {
        if (targetElement === wrapperElement) {
          // This is a click inside. Do nothing, just return.
          return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
      } while (targetElement);

      this.deactivateSuggestions();
    },
  },
  computed: {
    displayItems() {
      if (!this.searchText) {
        return this.unSelectedItems();
      }
      return this.unSelectedItems().filter(item => item[this.labelProp].toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
    },
    isNative() {
      return Platform.platform !== 'web';
    },
  },
  mixins: [Gestures],
  components: {
    StackLayout,
    WrapLayout,
    TextField,
    Label,
  },
};
</script>

<style lang="scss" scoped>
.vxp-multiselectdropdown {
  border: 0px solid #ccc;
  position: relative;
  border-radius: 5px;
  padding: 3px;

  &__pill {
    font-family: 'Times New Roman', Times, serif;
    padding: 2px 5px 2px 5px;
    background: #ccc;
    border-radius: 15%;
    border: 1px solid #aaa;
    margin-right: 3px;
    height: 15px;
    position: relative;

    &:hover {
      background: #999;
      cursor: pointer;
      border-color: #aaa;
    }

    &-label,
    &-remove-text {
      color: #666;
      position: relative;
      top: 50%;
    }

    &-label {
      font-size: 14px;
      transform: translateY(-50%);
    }

    &-remove-text {
      font-size: 16px;
      font-weight: 800;
      margin-left: 4px;
      transform: translateY(-50%);
      cursor: pointer;
      &:hover {
        color: #333;
      }
    }
  }

  &__suggestions-box {
    max-height: 350px;
    overflow: auto;
    border: 1px solid #ccc;
    border-top: none;
    position: absolute;
    top: 27px;
    width: 100%;
    background: #fff;
    margin-left: -4px;

    &__selectable-item,
    &__empty {
      padding: 8px;
      border-top: 1px solid #ccc;
      &:hover {
        background: #ccc;
        cursor: pointer;
      }
    }
  }
}
</style>
