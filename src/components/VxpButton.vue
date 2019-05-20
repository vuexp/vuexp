<template>
  <Button
    v-show="visible"
    :text="text"
    @tap="onTap"
    :textWrap="textWrap"
    :class="vxpButtonClass"
    class="vxpInnerButton"
    :type="type"
    :isEnabled="!disabled"
  ></Button>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';
import Gestures from '../mixins/GestureMixin';
import Button from './Button';

export default {
  name: 'VxpButton',
  components: { Button },
  data: function() {
    return {};
  },
  props: {
    text: String,
    textWrap: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
      validator: val => ['button', 'reset', 'submit'].includes(val),
    },
    size: {
      type: String,
      default: 'medium',
      validator: val => ['small', 'medium'].includes(val),
    },
    primary: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    //Base Button Class
    vxpButtonClass: function() {
      const classList = ['vxp-button'];

      // Enable state
      if (this.disabled) classList.push('vxp-button--disabled');

      // Size
      classList.push(`vxp-button--${this.size}`);

      if (this.size === 'small') classList.push('typ-button-1');
      else classList.push('typ-button');

      // Type
      if (this.primary) classList.push('vxp-button--primary');
      if (this.secondary) classList.push('vxp-button--secondary typ-button-1');

      return classList.join(' ');
    },
  },
  methods: {
    onTap(event, cancelBubbling) {
      if (cancelBubbling) cancelBubbling();
      this.$emit('tap', event);
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
@import '../themes/themes';
@import '../assets/styles/helpers';

.vxp-button {
  background-color: #d6d7d7;
  padding: 10px;
  min-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  border: none;
  border-radius: 2px;
  font-weight: bolder;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2), 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
  transition-delay: 0.3s;
  transition: box-shadow 0.2s, background-color 0.2s, transform 1s;
  &:hover {
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.2), 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  &:active {
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.2), 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
    background-color: #c0c1c1;
  }
  &:focus {
    outline: 0 !important;
  }

  &--small {
    border-radius: unit(32);
    padding: unit(6) unit(16) unit(6) unit(16);

    &.vxp-button--disabled {
      cursor: default;
    }
  }

  &--medium {
    border-radius: unit(20);
    padding: unit(10) unit(32) unit(10) unit(32);

    &.vxp-button--disabled {
      cursor: default;
    }
  }

  @include themed($themes) {
    color: getvar(primary-light-text);
    background: getvar(base-10);

    &:hover {
      background: getvar(base-19);
      box-shadow: none;
    }

    &:active {
      background: getvar(base-10);
      box-shadow: none;
    }

    &--primary {
      color: getvar(primary-text);
      background: getvar(base-01);

      &:hover {
        background: getvar(base-18);
        box-shadow: none;
      }

      &:active {
        background: getvar(base-01);
        box-shadow: none;
      }

      &.vxp-button--disabled {
        color: $white;
        background: getvar(base-13);
      }
    }

    &--secondary {
      color: getvar(primary-light-text);
      background: getvar(primary-text);
      border-width: unit(1);
      border-color: getvar(base-03);
      border-style: solid;

      &:hover {
        color: getvar(primary-light-text);
        background: getvar(primary-text);
        box-shadow: none;
      }
    }
  }
}
</style>
