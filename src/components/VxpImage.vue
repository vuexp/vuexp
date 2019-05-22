<template>
  <Img
    v-common-directive
    @onLoadError="$emit('onLoadError', $event)"
    @onLoad="$emit('onLoad', $event)"
    :src="src"
    :width="width"
    :height="height"
    :alt="placeholder"
  />
</template>

<script>
import CommonDirective from '../core/directives/CommonDirective';
import Gestures from '../core/mixins/GestureMixin';
import Img from '../core/components/Img/Img';

export default {
  name: 'VxpImage',
  props: {
    src: String,
    stretch: {
      type: String,
      default: 'none',
    },
    width: [String, Number],
    height: [String, Number],
    placeholder: String,
  },
  components: {
    Img,
  },
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
};
</script>
