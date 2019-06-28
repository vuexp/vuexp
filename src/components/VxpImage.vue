<template>
  <Img :src="src" :stretch="stretch" :width="width" :height="height" :alt="placeholder" v-on="$listeners" />
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
