<template>
  <div class="vxp-formatted-string">
    <slot></slot>
  </div>
</template>

<script>
import Gestures from '../../mixins/GestureMixin';

export default {
  name: 'FormattedString',
  props: {
    editable: Boolean,
  },
  mixins: [Gestures],
};
</script>
