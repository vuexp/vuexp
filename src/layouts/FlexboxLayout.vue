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
    :flex-direction="flexDirection"
    :flex-wrap="flexWrap"
    :justify-content="justifyContent"
    :align-items="alignItems"
    :align-content="alignContent"
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

  &[flex-direction='column'] {
    * {
      max-width: 100%;
    }
  }
}
</style>
