<template>
  <StackLayout class="vxp-text-input typ-body">
    <VxpLabel class="vxp-text-input__label" :class="labelClass" :text="label" v-if="label" />
    <TextField
      class="typ-body"
      ref="textField"
      :class="textFieldClass"
      :text="text"
      :hint="hint"
      :editable="!disabled"
      :maxLength="maxLength"
      :autocorrect="autocorrect"
      :keyboardType="keyboardType"
      :secure="isSecure"
      :returnKeyType="returnKeyType"
      @loaded="textFieldLoaded"
      @textChange="onTextChange($event)"
      v-on="filteredListeners"
    />
    <StackLayout v-if="errors.length" class="vxp-text-input__error-messages typ-body">
      <VxpLabel :text="error" v-for="(error, index) in errors" :key="index" :textWrap="true" />
    </StackLayout>
    <slot name="password-strength" />
  </StackLayout>
</template>

<script>
import utils from '../utils';
import platform from '../platform';
import StackLayout from '../layouts/StackLayout';
import TextField from '../core/components/TextField/TextField';
import VxpLabel from './VxpLabel';

export default {
  name: 'TextInput',
  model: {
    event: 'textChange',
    prop: 'text',
  },
  components: {
    TextField,
    StackLayout,
    VxpLabel,
  },
  props: {
    label: String,
    text: String,
    maxLength: {
      type: Number,
      default: 255,
    },
    hint: String,
    autocorrect: Boolean,
    keyboardType: {
      type: String,
      default: 'text',
    },
    secure: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    errors: {
      type: Array,
      default: () => [],
    },
    returnKeyType: {
      type: String,
    },
    autoFocus: {
      type: [Boolean],
      default: false,
    },
  },
  mounted() {
    if (platform.platform === 'web' && this.autoFocus) {
      this.$refs.textField.$el.focus();
    }
  },
  computed: {
    isSecure: function() {
      return this.secure || this.type === 'password';
    },
    labelClass: function() {
      return this.disabled ? 'vxp-text-input__label--disable' : '';
    },
    textFieldClass: function() {
      return `vxp-text-input__textfield ${this.disabled ? 'vxp-text-input__textfield--disabled' : ''}`;
    },
    filteredListeners() {
      let { loaded, textChange, ...listeners } = this.$listeners;
      return listeners;
    },
  },
  methods: {
    onTextChange: function(event) {
      if (platform.platform === 'web') {
        this.$emit('textChange', event.target.value);
      } else {
        this.$emit('textChange', event.value);
      }
    },
    textFieldLoaded(args) {
      this.$emit('textFieldLoaded', args);
      if (this.autoFocus) {
        const textField = args.object;
        if (textField.ios) {
          textField.focus();
        } else {
          setTimeout(() => {
            utils.ad.dismissSoftInput();
            textField.android.requestFocus();
            const imm = utils.ad.getInputMethodManager();
            imm.showSoftInput(textField.android, 0);
          }, 120);
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/helpers';
@import '../themes/themes';

.vxp-text-input {
  @include themed($themes) {
    &__error-messages {
      color: getvar(alert);
      margin-top: unit(8);
    }
    &__label {
      margin-bottom: unit(3);
      font-weight: 600;
      color: getvar(default-text);
      &--disable {
        color: $secondary-gray;
      }
    }

    .vxp-text-input__textfield {
      background-color: getvar(default-background);
      border: none;
      border-bottom-style: solid;
      border-bottom-color: $secondary-gray;
      border-bottom-width: unit(1);
      padding: unit(8) unit(0);
      outline: none;
      color: getvar(default-text);

      &:focus,
      &--focused {
        box-shadow: none;
        border-bottom-style: solid;
        //default focus color is primary
        border-bottom-color: getvar(primary);
        border-bottom-width: unit(1);
        outline: none;
      }

      &:disabled,
      &--disabled {
        border-color: getvar(base-4);
      }
    }

    &[primary] {
      .vxp-text-input__textfield {
        &:focus,
        &--focused {
          border-bottom-color: getvar(primary);
        }
      }
    }
    &[secondary] {
      .vxp-text-input__textfield {
        &:focus,
        &--focused {
          border-bottom-color: getvar(secondary);
        }
      }
    }
    &[alert] {
      .vxp-text-input__textfield {
        &:focus,
        &--focused {
          border-bottom-color: getvar(alert);
        }
      }
    }
  }
}

.vxp-validate {
  &--invalid#{&}--dirty {
    @include themed($themes) {
      .vxp-text-input__textfield,
      .vxp-text-input__textfield:focus,
      .vxp-text-input__textfield--focused {
        border-bottom-style: solid;
        border-bottom-width: unit(1);
        border-bottom-color: getvar(alert);
      }
    }
  }

  &--valid#{&}--dirty {
    @include themed($themes) {
      .vxp-text-input__textfield,
      .vxp-text-input__textfield:focus,
      .vxp-text-input__textfield--focused {
        border-bottom-style: solid;
        border-bottom-width: unit(1);
        border-bottom-color: getvar(success);
      }
    }
  }
}
</style>
