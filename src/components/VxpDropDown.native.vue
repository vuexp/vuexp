<template>
  <StackLayout class="vxp-drop-down typ-body">
    <FlexboxLayout verticalAlignment="center" class="vxp-drop-down__container" @tap="onClicked" justifyContent="space-between">
      <VxpLabel :text="labelText" class="vxp-drop-down__container__label" :class="{ 'vxp-drop-down__container__label--placeholder': placeholderActive }" />
      <VxpLabel class="vxp-drop-down__container__icon" text="▼"></VxpLabel>
    </FlexboxLayout>
    <FlexboxLayout flexDirection="column" v-if="errors.length">
      <VxpLabel :text="error" v-for="(error, index) in errors" :key="index" :textWrap="true" class="vxp-drop-down__error-messages" />
    </FlexboxLayout>
  </StackLayout>
</template>

<script>
import ListPickerModal from '../core/components/ListPickerModal/ListPickerModal';
import VxpLabel from './VxpLabel';
import StackLayout from '../layouts/StackLayout';
import FlexboxLayout from '../layouts/FlexboxLayout';

export default {
  name: 'VxpDropDown',
  props: {
    placeholder: {
      type: String,
    },
    items: {
      type: Object,
      default() {
        return {
          label: '',
          values: [],
        };
      },
    },
    index: {
      type: Number,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedIndex: null,
      placeholderActive: !(this.index === 0 || this.index),
      labelPathArray: [],
    };
  },
  computed: {
    selectableItems() {
      return this.items.values.map(value => this.getLabel(value));
    },
    labelText() {
      return this.selectableItems[this.selectedIndex] || this.placeholder;
    },
  },
  watch: {
    index() {
      this.selectedIndex = this.index;
    },
    'items.label'() {
      this.labelPathArray = this.items.label.split('.');
    },
  },
  methods: {
    onClicked() {
      if (!this.disabled) {
        this.$showModal(ListPickerModal, {
          props: {
            listOfItems: this.selectableItems,
            selectedIndex: this.selectedIndex,
          },
        }).then(selectedIndex => {
          if (typeof selectedIndex !== 'undefined') {
            this.selectedIndex = selectedIndex;
            this.placeholderActive = false;
          }
          this.$emit('changeIndex', selectedIndex, this.items.values[selectedIndex]);
        });
      }
    },
    getLabel(value) {
      let tempItemObject = { ...value };
      this.labelPathArray.forEach(labelPath => {
        if (tempItemObject) {
          tempItemObject = tempItemObject[labelPath];
        }
      });
      return tempItemObject;
    },
  },
  created() {
    this.labelPathArray = this.items.label.split('.');
    this.selectedIndex = this.index;
    this.$emit('changeIndex', this.index, this.items[this.index]);
  },
  components: {
    FlexboxLayout,
    StackLayout,
    VxpLabel,
  },
};
</script>

<style lang="scss">
@import '../themes/themes';
@import '../assets/styles/helpers';

$border-color: #e2e4e8;
$placeholder-color: #898d90;

.vxp-drop-down {
  /*padding: unit(9) unit(15) unit(9) unit(0);*/
  color: #000000;

  @include themed($themes) {
    color: getvar(default-text);
  }

  &__container {
    width: 100%;
    padding: unit(9) unit(5) unit(9) 0;
    background-color: #ffffff;

    &__label {
      &--placeholder {
        color: $placeholder-color;
      }
    }
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
</style>
