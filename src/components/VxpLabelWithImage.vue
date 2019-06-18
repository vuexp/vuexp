<template>
  <StackLayout orientation="horizontal">
    <VxpImage :src="src" />
    <VxpLabel :text="text" :textWrap="false" />
  </StackLayout>
</template>
<script>
import StackLayout from '../layouts/StackLayout';
import VxpLabel from './VxpLabel';
import VxpImage from './VxpImage';

export default {
  name: 'VxpLabelWithImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {},
  components: {
    StackLayout,
    VxpLabel,
    VxpImage,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/helpers.scss';
@import url('/fonts/fontawesome.min.css');
</style>
