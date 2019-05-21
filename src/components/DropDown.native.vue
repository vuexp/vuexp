<template>
  <StackLayout class="vxp-drop-down-picker typ-body">
    <FlexboxLayout class="vxp-drop-down-picker__list" @tap="onClicked" justifyContent="space-between">
      <Label :text="labelText" class="vxp-drop-down-picker__list__label" :class="{ 'vxp-drop-down-picker__list__label--placeholder': placeholderActive }" />
      <Label :text="'pz-arrow-fill-down' | fonticon" class="pz" />
    </FlexboxLayout>
  </StackLayout>
</template>

<script>
import ListPickerModal from './ListPickerModal';

export default {
  name: 'DropDown',
  props: {
    placeholder: {
      type: String,
    },
    items: {
      type: Array,
      required: true,
    },
    index: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedIndex: this.index,
      labelText: this.placeholder || this.items[this.index],
      placeholderActive: true,
    };
  },
  methods: {
    onClicked() {
      if (!this.disabled) {
        this.$showModal(ListPickerModal, {
          props: {
            listOfItems: this.items,
            selectedIndex: this.selectedIndex,
          },
        }).then(selectedIndex => {
          if (typeof selectedIndex !== 'undefined') {
            this.selectedIndex = selectedIndex;
            this.labelText = this.items[selectedIndex];
            this.placeholderActive = false;
          }
          this.$emit('changeIndex', selectedIndex, this.items[selectedIndex]);
        });
      }
    },
  },
  created() {
    this.$emit('changeIndex', this.index, this.items[this.index]);
  },
};
</script>

<style lang="scss">
@import '../themes/themes';
@import '../assets/styles/helpers';

$border-color: #e2e4e8;
$placeholder-color: #898d90;

.vxp-drop-down-picker {
  @include themed($themes) {
    color: getvar(default-text);
  }

  &__list {
    width: 100%;
    border-bottom-style: solid;
    border-bottom-width: unit(1);
    border-bottom-color: $border-color;
    min-height: unit(20);
    padding: unit(5) unit(5) unit(5) 0;

    &__label {
      &--placeholder {
        color: $placeholder-color;
      }
    }
  }
}
</style>
