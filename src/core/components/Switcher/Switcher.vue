<template>
  <label ref="slider" class="vxp-switch">
    <input type="checkbox" :checked="checked" @change="$emit('checkedChange', $event)" @click="updateValue" :disabled="disabled" />
    <span :style="checkControl" class="slider round"></span>
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
      check: false,
      width: '35px',
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
    },
  },
  created() {
    this.check = this.checked;
  },
  updated() {
    this.setStyle();
  },
  mounted() {
    this.setStyle();
  },
  methods: {
    updateValue: function(event) {
      this.$emit('input', event.target.checked);
      this.check = event.target.checked;
    },
    setStyle() {
      if (this.$refs.slider.style.height) {
        this.width = this.$refs.slider.style.height;
      }
    },
  },
  watch: {
    buttonSize() {
      this.width = this.buttonSize;
    },
    checked() {
      this.check = this.checked;
    },
  },
  computed: {
    checkControl() {
      if (this.check) {
        return {
          'background-color': this.backgroundColor,
          '--button-color': this.color,
          '--width': this.width,
        };
      } else {
        return {
          'background-color': this.offBackgroundColor,
          '--button-color': this.color,
          '--width': this.width,
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
  height: 40px;
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
    left: calc(98% - var(--width));
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background-color);
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
      height: calc(100% - 10px);
      margin: 5px 5px;
      width: calc(var(--width) - 5px);
    }
  }
}
</style>
