<template>
  <Img @onLoadError="$emit('onLoadError', $event)" @onLoad="$emit('onLoad', $event)" :src="src" :width="width" :height="height" :alt="placeholder" />
</template>

<script>
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
};
</script>
