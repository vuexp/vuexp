<template>
  <label ref="slider" class="vxp-switch" :style="checkControl">
    <input type="checkbox" :checked="checked" @change="$emit('checkedChange', $event)" @click="updateValue" :disabled="disabled" />
    <span class="slider round"></span>
  </label>
</template>

<script>
import CommonDirective from '../../directives/CommonDirective';
import Gestures from '../../mixins/GestureMixin';

export default {
  name: 'Switcher',
  model: {
    event: 'input',
    prop: 'checked',
  },

  data() {
    return {
      localChecked: false,
    };
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
    backgroundColor: {
      type: String,
      default: '#2196f3',
    },
    offBackgroundColor: {
      type: String,
      default: '#ccc',
    },
    color: {
      type: String,
      default: '#ffffff',
    },
    buttonSize: {
      type: String,
      default: '26px',
    },
  },
  methods: {
    updateValue: function(event) {
      this.$emit('input', event.target.checked);
      this.localChecked = event.target.checked;
    },
  },
  watch: {
    checked: {
      handler: function() {
        this.localChecked = this.checked;
      },
      immediate: true,
    },
  },
  computed: {
    checkControl() {
      if (this.localChecked) {
        return {
          '--toggle-circle-background-color': this.backgroundColor,
          '--button-color': this.color,
          '--toggle-circle-size': this.buttonSize,
        };
      } else {
        return {
          '--toggle-circle-background-color': this.offBackgroundColor,
          '--button-color': this.color,
          '--toggle-circle-size': this.buttonSize,
        };
      }
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
};
</script>
<style lang="scss">
.vxp-switch {
  position: relative;
  display: inline-block;
  width: 100%;
  background: transparent !important;
  height: calc(var(--toggle-circle-size) + 10px);
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  input:checked + .slider {
    background-color: #2196f3;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
  input:checked + .slider:before {
    left: calc(100% - var(--toggle-circle-size) - 10px);
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--toggle-circle-background-color);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: '';
      background-color: var(--button-color);
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
      margin: 5px 5px;
      width: var(--toggle-circle-size);
      height: var(--toggle-circle-size);
      left: 0;
    }
  }
}
</style>
