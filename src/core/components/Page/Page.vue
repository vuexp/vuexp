<template>
  <div class="vxp-page">
    <slot></slot>
  </div>
</template>

<script>
import Gestures from '../../mixins/GestureMixin';

export default {
  name: 'Page',
  mixins: [Gestures],
};
</script>

<style lang="scss">
.vxp-page {
  &[actionbarhidden='true'] {
    .vxp-action-bar {
      display: none;
      visibility: hidden;
    }
  }
}
</style>
