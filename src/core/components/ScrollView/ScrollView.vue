<template>
  <div v-common-directive @scroll="onScroll($event)" :class="scrollViewClass">
    <slot></slot>
  </div>
</template>

<script>
import { debounce, camelCaseToDash } from '../../../helpers/helpers';
import CommonDirective from '../../directives/CommonDirective';
import Gestures from '../../mixins/GestureMixin';

export default {
  name: 'ScrollView',
  props: {
    orientation: {
      type: String,
      default: 'vertical',
      validator: value => ['horizontal', 'vertical'].indexOf(value) !== -1,
    },
    scrollBarIndicatorVisible: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    scrollViewClass: function() {
      return `vxp-scrollview vxp-scrollview--${camelCaseToDash(this.orientation)}${this.scrollBarIndicatorVisible ? '' : '--hide'}`;
    },
  },
  methods: {
    onScroll: debounce(function(event) {
      this.$emit('scroll', event);
    }, 100),
  },
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.vxp-scrollview {
  &--horizontal {
    overflow-x: auto;
    overflow-y: hidden;
    // Child elements width must be same as parent width.
    * {
      white-space: nowrap !important;
    }
  }
  &--vertical {
    overflow-x: hidden;
    overflow-y: auto;
  }
  //TODO Web browsers not supported hidden scrollbar. If overflow set to hidden, scrolling will disable.
  &--horizontal,
  &--vertical {
    &--hide {
    }
  }
}
</style>
