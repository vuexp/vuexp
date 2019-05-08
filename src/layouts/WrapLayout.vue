<template>
  <div v-common-directive class="vxp-wrap-layout" :style="{ flexDirection: orientation === 'vertical' ? 'column' : 'row' }">
    <slot></slot>
  </div>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'WrapLayout',
  props: {
    itemWidth: {
      type: Number,
      default: NaN,
    },
    itemHeight: {
      type: Number,
      default: NaN,
    },
    orientation: {
      type: String,
      default: 'horizontal',
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
  mounted() {
    this.calculateChildrenSizes();
  },
  updated() {
    this.calculateChildrenSizes();
  },
  methods: {
    calculateChildrenSizes() {
      if (this.itemWidth) {
        const childrenArray = Array.from(this.$el.children);
        childrenArray.forEach(childElement => {
          childElement.style.width = this.itemWidth + 'px';
        });
      }

      if (this.itemHeight) {
        const childrenArray = Array.from(this.$el.children);
        childrenArray.forEach(childElement => {
          childElement.style.height = this.itemHeight + 'px';
        });
      }
    },
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.vxp-wrap-layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
}
</style>
