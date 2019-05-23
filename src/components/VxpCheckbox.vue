<template>
  <AbsoluteLayout class="vxp-checkbox" :class="{ 'vxp-checkbox--checked': checkedLocal, 'vxp-checkbox__disabled': disabled }" @tap="onTap">
    <FadeTransition :duration="200">
      <StackLayout
        top="0"
        left="0"
        v-if="checkedLocal"
        class="vxp-checkbox__background vxp-checkbox__checked"
        :class="{ 'vxp-checkbox__checked__disabled': disabled }"
      >
        <Label class="vxp-checkbox__checked__icon" text=" " />
      </StackLayout>
    </FadeTransition>
    <FadeTransition :duration="200">
      <StackLayout
        top="0"
        left="0"
        v-if="!checkedLocal"
        class="vxp-checkbox__background vxp-checkbox__unchecked"
        :class="{ 'vxp-checkbox__unchecked__disabled': disabled }"
      ></StackLayout>
    </FadeTransition>
  </AbsoluteLayout>
</template>

<script>
import FadeTransition from '../transitions/FadeTransition';
import AbsoluteLayout from '../layouts/AbsoluteLayout';
import StackLayout from '../layouts/StackLayout';

export default {
  name: 'VxpCheckbox',
  components: {
    FadeTransition,
    AbsoluteLayout,
    StackLayout,
  },
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checkedLocal: this.checked,
    };
  },
  methods: {
    onTap(event, cancelBubbling) {
      if (cancelBubbling) cancelBubbling();
      if (!this.disabled) {
        this.checkedLocal = !this.checkedLocal;
        this.$emit('change', this.checkedLocal);
      }
    },
  },
  watch: {
    checked() {
      this.checkedLocal = this.checked;
    },
  },
};
</script>

<style lang="scss">
@import '../themes/themes';
@import '../assets/styles/helpers';
.checkbox_label {
  &__margin_top {
    margin-top: 10px;
  }
}

.vxp-checkbox {
  width: unit(18);
  height: unit(18);
  align-items: center;

  > * {
    border-radius: unit(2);
  }

  &[circle] {
    > * {
      border-radius: 50%;
    }
  }

  &__background {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    user-select: none;
    align-items: center;
  }

  &__checked {
    background-color: #4286f4;
    &__disabled {
      cursor: not-allowed;
      background-color: #cfd8dc !important;
      label {
        cursor: not-allowed !important;
      }
    }
    &__icon {
      width: 40%;
      height: 20%;
      margin-top: unit(6, 8);
      transform: translateZ(1px) rotate(-45deg);
      border-width: 0 0 unit(2) unit(2);
      border-style: solid;
      border-color: $white;
      border-radius: unit(1);
    }
  }

  &__unchecked {
    border-width: unit(2);
    border-style: solid;
    border-color: #cfd8dc;
    &__disabled {
      cursor: not-allowed;
      background-color: transparent !important;
    }
  }

  @include themed($themes) {
    &[primary] {
      .vxp-checkbox__checked {
        background-color: getvar(primary);

        &--disabled {
          background-color: getvar(base-2);
        }
      }

      .vxp-checkbox__unchecked {
        border-color: getvar(base-3);
        &--disabled {
          border-color: #cfd8dc;
          background-color: transparent;
        }
      }
    }

    &[secondary] {
      .vxp-checkbox__checked {
        background-color: getvar(secondary);

        &--disabled {
          background-color: getvar(base-2);
        }
      }
      .vxp-checkbox__unchecked {
        border-color: getvar(base-3);

        &--disabled {
          border-color: #cfd8dc;
          background-color: transparent;
        }
      }
    }

    &[alert] {
      .vxp-checkbox__checked {
        background-color: getvar(alert);
        &--disabled {
          background-color: getvar(base-2);
        }
      }
      .vxp-checkbox__unchecked {
        border-color: getvar(base-3);

        &--disabled {
          border-color: #cfd8dc;
          background-color: transparent;
        }
      }
    }
  }
}
</style>
