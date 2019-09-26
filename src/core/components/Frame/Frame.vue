<template>
  <div class="vxp-frame">
    <slot></slot>
  </div>
</template>

<script>
import Gestures from '../../mixins/GestureMixin';

export default {
  name: 'Frame',
  mixins: [Gestures],
};
</script>

<style lang="scss">
.vxp-frame {
  height: 100%;
}
</style>
