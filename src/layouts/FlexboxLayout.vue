<template>
  <div
    v-common-directive
    class="vxp-flexbox-layout"
    :style="{
      flexDirection: flexDirection,
      flexWrap: flexWrap,
      justifyContent: justifyContent,
      alignItems: alignItems,
      alignContent: alignContent,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
import CommonDirective from '../core/directives/CommonDirective';
import Gestures from '../core/mixins/GestureMixin';

export default {
  name: 'FlexboxLayout',
  props: {
    flexDirection: String,
    flexWrap: String,
    justifyContent: String,
    alignItems: String,
    alignContent: String,
  },
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.vxp-flexbox-layout {
  display: flex;
}
</style>
