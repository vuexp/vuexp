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

export default {
  name: 'VxpDropDown2',
  props: {
    placeholder: {
      type: String,
    },
    items: {
      type: Array,
      required: true,
    },
    textDataPropName: {
      type: String,
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
      selectedIndex: this.index,
      labelText: this.placeholder || this.items[this.index][this.textDataPropName],
      placeholderActive: true,
    };
  },
  methods: {
    onClicked() {
      if (!this.disabled) {
        this.$showModal(ListPickerModal, {
          props: {
            listOfItems: this.visibleTextsOfItems,
            selectedIndex: this.selectedIndex,
          },
        }).then(selectedIndex => {
          if (typeof selectedIndex !== 'undefined') {
            this.selectedIndex = selectedIndex;
            this.labelText = this.items[selectedIndex][this.textDataPropName];
            this.placeholderActive = false;
          }
          this.$emit('changeIndex', selectedIndex, this.items[selectedIndex]);
        });
      }
    },
  },
  computed: {
    visibleTextsOfItems() {
      let resultList = [];

      this.items.forEach(currentItem => {
        resultList.push(currentItem[this.textDataPropName]);
      });
      return resultList;
    },
  },
  created() {
    this.$emit('changeIndex', this.index, this.items[this.index]);
  },
  components: {
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
