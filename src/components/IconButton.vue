<template>
  <Button
    @tap="$emit('tap', $event)"
    :style="{ width: unit(size), height: unit(size), fontFamily: this.font, fontSize: unit(iconSize) }"
    :text="this.icon | fonticon"
    :class="nuIconButtonClass"
    :isEnabled="isEnabled"
  />
</template>

<script>
import platform from '../platform';

export default {
  name: 'IconButton',
  data() {
    return {
      platform: platform.platform,
    };
  },
  props: {
    icon: String,
    size: { type: [Number, String], default: 40 },
    font: String,
    isEnabled: { type: Boolean, default: true },
  },
  computed: {
    nuIconButtonClass: function() {
      return `vxp-icon-button ${!this.isEnabled ? 'vxp-icon-button--disabled' : ''}`;
    },
    iconSize: function() {
      return this.size * 0.45;
    },
  },
  methods: {
    unit(value) {
      if (this.platform === 'web') {
        return value.toString().concat('px');
      } else {
        return value.toString();
      }
    },
  },
};
</script>

<style lang="scss">
@import '../themes/themes';
@import '../assets/styles/helpers';

.vxp-icon-button {
  // not supported by nativescript box-shadow, overflow,text-overflow,cursor,outline
  background-color: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: none;
  text-transform: uppercase;
  border: none;
  min-width: unit(10);
  min-height: unit(10);
  border-radius: 50%;
  vertical-align: middle;
  text-align: center;
  padding: 0;

  &:hover {
    box-shadow: none;
    border: none;
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
    background-color: transparent;
  }
  &:focus {
    outline: 0 !important;
  }
  @include themed($themes) {
    &:focus {
      outline: none;
    }

    &[primary] {
      color: getvar(primary-text);
      background: getvar(base-02);
      &:focus {
        outline: none;
      }
      &.vxp-icon-button--disabled {
        background: getvar(base-13);
        cursor: default;
      }
    }
    &[secondary] {
      color: getvar(secondary);

      &:hover {
        color: getvar(secondary-dark);
      }
      &:active {
        background-color: getvar(secondary-light);
      }

      &:focus {
        outline: none;
      }
      &.vxp-icon-button--disabled {
        color: getvar(base-2);
        cursor: default;
      }
    }
    &[alert] {
      color: getvar(alert);

      &:hover {
        color: getvar(alert-dark);
      }
      &:active {
        background-color: getvar(alert-light);
      }

      &:focus {
        outline: none;
      }
      &.vxp-icon-button--disabled {
        color: getvar(base-2);
        cursor: default;
      }
    }
  }
}
</style>
