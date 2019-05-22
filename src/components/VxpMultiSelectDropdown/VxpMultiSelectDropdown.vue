<template>
  <StackLayout orientation="vertical" class="vxp-multiselectdropdown">
    <WrapLayout>
      <WrapLayout orientation="horizontal">
        <StackLayout
          class="vxp-multiselectdropdown__pill"
          orientation="horizontal"
          v-for="(selectedItemIndex, index) in selected"
          @tap="selectedItemTapped(items[selectedItemIndex])"
          :key="index"
        >
          <Label class="vxp-multiselectdropdown__pill-label" :text="items[selectedItemIndex][labelProp]"></Label>
          <Label v-if="!isNative" class="vxp-multiselectdropdown__pill-remove-text" text="×"></Label>
        </StackLayout>
      </WrapLayout>
      <GridLayout
        class="vxp-multiselectdropdown__search-input__wrapper"
        columns="*, auto"
        rows="auto, *, auto"
        width="100%"
        flexGrow="1"
        orientation="horizontal"
      >
        <TextField
          col="0"
          row="0"
          colSpan="2"
          @focus="activateSuggestions()"
          ref="searchInput"
          class="vxp-multiselectdropdown__search-input"
          v-model="searchText"
          @input="searchTextChanged($event)"
          :editable="!isNative"
          :hint="hint"
          flexGrow="1"
          @tap="activateSuggestions()"
        ></TextField>
        <Label col="1" row="0" @tap="activateSuggestions()" v-if="!isNative && !searchText" class="vxp-multiselectdropdown__pill-caret-down" text="▼"></Label>
        <Label
          @tap="clearSearchText()"
          col="1"
          row="0"
          v-if="!isNative"
          v-show="searchText"
          class="vxp-multiselectdropdown__pill-remove-search"
          text="×"
        ></Label>
      </GridLayout>
    </WrapLayout>
    <StackLayout class="vxp-multiselectdropdown__suggestions-box" v-if="suggestionsOpened && !isNative">
      <StackLayout v-if="displayItems.length">
        <StackLayout
          class="vxp-multiselectdropdown__suggestions-box__selectable-item"
          v-for="(item, index) in displayItems"
          :key="index"
          @tap="selectableItemTapped(item)"
        >
          <Label :text="item[labelProp]"></Label>
        </StackLayout>
      </StackLayout>
      <StackLayout v-else-if="emptySuggestionsLabel">
        <Label @tap="deactivateSuggestions()" class="vxp-multiselectdropdown__suggestions-box__empty" :text="emptySuggestionsLabel"></Label>
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import Platform from '../../platform';
import Gestures from '../../core/mixins/GestureMixin';
import NativeSelectionModal from './NativeSelectionModal';
import VxpMultiSelectDropdownMixins from './vxpMultiSelectDropdownMixins';

export default {
  name: 'MultiSelectDropdown',
  model: {
    prop: 'selected',
    event: 'selectedChange',
  },
  data() {
    return {
      suggestionsOpened: false,
    };
  },
  mounted() {
    if (!this.isNative) {
      document.body.addEventListener('mousedown', this.clickOutsideListener);
    }
  },
  destroyed() {
    if (!this.isNative) {
      document.body.removeEventListener('mousedown', this.clickOutsideListener);
    }
  },
  computed: {
    isNative() {
      return Platform.platform !== 'web';
    },
  },
  methods: {
    activateSuggestions() {
      if (this.isNative) {
        this.showNativeModal();
      } else {
        this.suggestionsOpened = true;
      }
    },
    deactivateSuggestions() {
      this.suggestionsOpened = false;
    },
    selectableItemTapped(item) {
      this.selectItem(item);
      this.focusSearchInput();

      if (this.selected.length === this.items.length) {
        this.deactivateSuggestions();
      }
    },
    selectedItemTapped(item) {
      if (this.isNative) {
        this.showNativeModal();
      } else {
        this.removeSelection(item);
        this.focusSearchInput();
        this.activateSuggestions();
      }
    },
    showNativeModal() {
      this.$showModal(NativeSelectionModal, {
        props: this.$props,
        fullscreen: true,
      }).then(() => {
        this.selectedChange();
      });
    },
    focusSearchInput() {
      this.$refs.searchInput && this.$refs.searchInput.$el.focus();
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
  mixins: [Gestures, VxpMultiSelectDropdownMixins],
};
</script>

<style lang="scss">
@import '../../assets/styles/helpers.scss';

.vxp-multiselectdropdown {
  padding: unit(3);
  position: relative;

  &__pill {
    padding: unit(4) unit(7) unit(4) unit(7);
    background: #e8e8e8;
    border-radius: 15%;
    border-style: solid;
    border-width: unit(1);
    border-color: #cacacb;
    margin-right: unit(3);
    margin-top: unit(2);
    position: relative;

    &:hover {
      background: #999999;
      cursor: pointer;
      border-color: #aaa;
    }

    &-label,
    &-remove-text {
      color: #666666;
      position: relative;
    }

    &-label {
      font-size: unit(14);
    }

    &-remove-text {
      font-size: unit(16);
      font-weight: 800;
      margin-left: unit(4);
      cursor: pointer;
      &:hover {
        color: #333;
      }
    }

    &-remove-search {
      position: absolute;
      right: unit(10);
      top: unit(0);
      z-index: 1;
      font-weight: 800;
      font-size: unit(16);
      cursor: pointer;
      &:hover {
        color: #000000;
      }
    }

    &-caret-down {
      font-size: unit(12);
      margin-right: unit(12);
    }
  }

  &__suggestions-box {
    max-height: unit(250);
    overflow: auto;
    border: unit(1) solid #ccc;
    border-top: none;
    position: absolute;
    top: 96%;
    width: 100%;
    background: #fff;
    margin-left: unit(-4);

    &__selectable-item,
    &__empty {
      padding: unit(8);
      border-top: unit(1) solid #ccc;
      &:hover {
        background: #ccc;
        cursor: pointer;
      }
    }
  }

  &__suggestions-box-modal {
    &__body {
      height: unit(200);
      overflow: auto;

      &__selectable-item,
      &__empty {
        padding: unit(8);
        border-top: unit(1) solid #ccc;
        &:hover {
          background: #ccc;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
