<template>
  <StackLayout>
    <StackLayout orientation="horizontal">
        <AbsoluteLayout
        v-if="checkedLocal2"
        id="checkbox_component"
        class="vxp-checkbox"
        :class="{ 'vxp-checkbox--checked': checkedLocal1, 'vxp-checkbox__disabled': checkboxDisabled }"
        @tap="onTapCheckbox1"                             
        >
        <FadeTransition :duration="200">
            <StackLayout
            top="0"
            left="0"
            v-if="checkedLocal1"
            class="vxp-checkbox__background vxp-checkbox__checked"
            :class="{ 'vxp-checkbox__checked__disabled': checkboxDisabled }"
            >
            <Label class="vxp-checkbox__checked__icon" text=" "/>
            </StackLayout>
        </FadeTransition>
        <FadeTransition :duration="200">
            <StackLayout
            top="0"
            left="0"
            v-if="!checkedLocal1"
            class="vxp-checkbox__background vxp-checkbox__unchecked"
            :class="{ 'vxp-checkbox__unchecked__disabled': checkboxDisabled }"
            ></StackLayout>
        </FadeTransition>
        </AbsoluteLayout>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label
        id="checkbox_status_label"
        text="Status :"
        width="100"
        class="checkbox_label__margin_top"
      ></Label>
      <Label
        :text="checkedLocal1 ? 'Checked' : 'Unchecked'"
        id="checkbox_status_label_result"
        width="100"
        class="checkbox_label__margin_top"
      ></Label>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label text="Visible :" id=" checkbox_visible_label" width="100" class="checkbox_label__margin_top"></Label>
      <AbsoluteLayout
        style="margin-top: 10px;"
        id=" checkbox_visible_selectbox"
        class="vxp-checkbox"
        :class="{ 'vxp-checkbox--checked': checkedLocal2 }"
        @tap="onTapCheckbox2"
      >
        <FadeTransition :duration="200">
          <StackLayout
            top="0"
            left="0"
            v-if="checkedLocal2"
            class="vxp-checkbox__background vxp-checkbox__checked"
          >
            <Label class="vxp-checkbox__checked__icon" text=" "/>
          </StackLayout>
        </FadeTransition>
        <FadeTransition :duration="200">
          <StackLayout
            top="0"
            left="0"
            v-if="!checkedLocal2"
            class="vxp-checkbox__background vxp-checkbox__unchecked"
          ></StackLayout>
        </FadeTransition>
      </AbsoluteLayout>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label text="Enable :" id="checkbox_enabled_label" width="100" class="checkbox_label__margin_top"></Label>
      <AbsoluteLayout
        style="margin-top: 10px;"
        id="checkbox_enabled_selectbox"
        class="vxp-checkbox"
        :class="{ 'vxp-checkbox--checked': checkedLocal3 }"
        @tap="onTapCheckbox3"
      >
        <FadeTransition :duration="200">
          <StackLayout
            top="0"
            left="0"
            v-if="checkedLocal3"
            class="vxp-checkbox__background vxp-checkbox__checked"
          >
            <Label class="vxp-checkbox__checked__icon" text=" "/>
          </StackLayout>
        </FadeTransition>
        <FadeTransition :duration="200">
          <StackLayout
            top="0"
            left="0"
            v-if="!checkedLocal3"
            class="vxp-checkbox__background vxp-checkbox__unchecked"
          ></StackLayout>
        </FadeTransition>
      </AbsoluteLayout>
      <Label :text="checkedLocal3 ? 'Enabled' : 'Disabled'" id="checkbox_enabled_label_result" width="100" class="checkbox_label__margin_left"></Label>
    </StackLayout>
  </StackLayout>
</template>

<script>
import FadeTransition from '../../../src/transitions/FadeTransition';
import StackLayout from '../../../src/layouts/StackLayout';
import AbsoluteLayout from '../../../src/layouts/AbsoluteLayout';
import Label from '../../../src/components/Label';

export default {
  name: 'Checkbox',
  components: {
    FadeTransition,
    StackLayout,
    AbsoluteLayout,
    Label,
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
      checkedLocal1: true,
      checkedLocal2: true,
      checkedLocal3: true,
      checkboxDisabled: false,
    };
  },
  methods: {
    onTapCheckbox1(event, cancelBubbling) {
      if (cancelBubbling) cancelBubbling();
      if (!this.checkboxDisabled) {
        this.checkedLocal1 = !this.checkedLocal1;
        this.$emit('change', this.checkedLocal1);
      }
    },
    onTapCheckbox2(event, cancelBubbling) {
      if (cancelBubbling) cancelBubbling();
      this.checkedLocal2 = !this.checkedLocal2;
      this.$emit('change', this.checkedLocal2);
    },
    onTapCheckbox3(event, cancelBubbling) {
      if (cancelBubbling) cancelBubbling();
      this.checkedLocal3 = !this.checkedLocal3;
      this.$emit('change', this.checkedLocal3);
      this.checkboxDisabled = !this.checkboxDisabled;
    },
 
  },
};
</script>

<style lang="scss">
@import '../../../src/themes/themes';
@import '../../../src/assets/styles/helpers';
.checkbox_label {
  &__margin_top {
    margin-top: 10px;
  }
  &__margin_left {
    margin-top: 10px;
    margin-left: 10px;
  }
}

.checkbox_platform {
  &__margin_top {
    margin-left: 10px;
    margin-right: 10px;
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
