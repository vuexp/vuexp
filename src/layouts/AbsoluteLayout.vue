<template>
  <div v-common-directive class="vxp-absolute-layout">
    <slot></slot>
  </div>
</template>

<script>
import CommonDirective from '../core/directives/CommonDirective';
import Gestures from '../core/mixins/GestureMixin';

export default {
  name: 'AbsoluteLayout',
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.vxp-absolute-layout {
  position: relative;
  width: 100%;
  height: 100%;
}

.vxp-absolute-layout > * {
  position: absolute !important;
}
</style>
