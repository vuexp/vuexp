<template>
  <label ref="slider" class="vxp-switch">
    <input type="checkbox" :checked="checked" @change="$emit('checkedChange', $event)" @click="updateValue" />
    <span :style="{ '--background-color': backgroundColor, '--button-color': buttonColor }" class="slider round"></span>
  </label>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'Switcher',
  model: {
    event: 'input',
    prop: 'checked',
  },
  data() {
    return {
      backgroundColor: '#ccc',
      buttonColor: 'white',
    };
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
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
    },
    setStyle() {
      if (this.$refs.slider.style.color) {
        this.buttonColor = this.$refs.slider.style.color;
      }
      if (this.$refs.slider.style.background) {
        this.backgroundColor = this.$refs.slider.style.background;
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
  width: 60px;
  height: 34px;
  background: transparent !important;
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
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
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
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: var(--button-color);
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
}
</style>
