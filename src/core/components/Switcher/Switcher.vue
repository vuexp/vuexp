<template>
  <label ref="slider" class="vxp-switch" :style="checkControl">
    <input type="checkbox" :checked="checked" @change="$emit('checkedChange', $event)" @click="updateValue" :disabled="!isEnabled" />
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
    isEnabled: {
      type: Boolean,
      default: true,
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
      return {
        '--background-color': this.backgroundColor,
        '--off-background-color': this.offBackgroundColor,
        '--circle-color': this.color,
        '--circle-size': this.buttonSize,
      };
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
  width: 60px;
  background: transparent !important;
  height: calc(var(--circle-size) + 10px);
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  input:checked + .slider {
    background-color: var(--background-color);
  }
  input:checked + .slider:before {
    left: calc(100% - var(--circle-size) - 10px);
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--off-background-color);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: '';
      background-color: var(--circle-color);
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
      margin: 5px 5px;
      width: var(--circle-size);
      height: var(--circle-size);
      left: 0;
    }
  }
}
</style>
