<template>
  <div class="vxp-slider" ref="slider" :class="{ 'vxp-slider--edge': isEdgeBrowser }">
    <input
      class="vxp-slider__scroll"
      type="range"
      :style="{ '--thumb-color': thumbColor, '--background-color': backgroundColor }"
      :min="minValue"
      :max="maxValue"
      :value="value"
      @change="$emit('valueChange', $event)"
      @input="updateValue"
    />
  </div>
</template>

<script>
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'Slider',
  props: {
    value: {
      type: [String, Number],
      default: 0,
    },
    minValue: {
      type: [String, Number],
      default: 0,
    },
    maxValue: {
      type: [String, Number],
      default: 100,
    },
  },
  data() {
    return {
      isEdgeBrowser: false,
      thumbColor: 'dodgerblue',
      backgroundColor: '#d3d3d3',
    };
  },
  updated() {
    this.setStyle();
  },
  mounted() {
    this.setStyle();
  },
  beforeMount() {
    const isIE = false || !!document.documentMode;
    const isEdge = !isIE && !!window.StyleMedia;
    if (isEdge) this.isEdgeBrowser = true;
  },
  methods: {
    setStyle() {
      if (this.$refs.slider.style.color) {
        this.thumbColor = this.$refs.slider.style.color;
      }
      if (this.$refs.slider.style.background) {
        this.backgroundColor = this.$refs.slider.style.background;
      }
    },
    updateValue: function(event) {
      // Since the value returned from DOM input element is in the type of String,
      // we convert it to the integer so that we avoid the warning of mismatching of the prop type.
      this.$emit('input', parseInt(event.target.value));
    },
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.vxp-slider {
  width: 100%;
  background: transparent !important;
  &__scroll {
    -webkit-appearance: none;
    width: 100%;
    height: 2px;
    background: var(--background-color);
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    &:hover {
      opacity: 2;
    }
    &::-webkit-slider-thumb {
      width: 15px;
      height: 15px;
      background: var(--thumb-color);
      cursor: pointer;
      -webkit-appearance: none;
      border-radius: 50%;
    }
    &::-moz-range-thumb {
      width: 15px;
      height: 15px;
      background: dodgerblue;
      cursor: pointer;
      -webkit-appearance: none;
      border-radius: 50%;
    }
  }

  //MARK: MS Edge Support
  &.vxp-slider--edge {
    $ui-color-rangeslider: #d3d3d3;

    @mixin rangetrack {
      background: $ui-color-rangeslider;
      height: 2px;
      cursor: pointer;
      border: 0;
    }

    @mixin rangethumb {
      width: 15px;
      height: 15px;
      border-radius: 2em;
      background: #51abff;
      cursor: pointer;
      border: solid 2px #51abff;
      // box-shadow:0px 2px 1px 1px rgba(0,0,0,.25);
      margin: 0;

      &:focus {
        box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.5);
      }
      &:hover {
        box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.3);
      }
      &:active {
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.8);
      }
    }

    @mixin rangethumb-focus {
      background: rgb(73, 135, 218);
    }

    input[type='range'] {
      background-color: transparent;
      -webkit-appearance: none;
      width: 100%;
      margin: 5px 0;
      position: relative;
      height: 30px;

      &:focus {
        outline: none;

        &::-ms-thumb {
          @include rangethumb-focus;
        }
      }
    }
    input[type='range']:focus {
      outline: none;
    }
    // Microsoft Track
    input[type='range']::-ms-track {
      @include rangetrack;
    }
    // Microsoft Thumb
    input[type='range']::-ms-thumb {
      @include rangethumb;
    }
    // Microsoft Tooltip
    input::-ms-tooltip {
      display: none;
    }
  }
}
</style>
