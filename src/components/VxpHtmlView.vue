<template>
  <WebView :src="src"></WebView>
</template>

<script>
import Gestures from '../core/mixins/GestureMixin';
import WebView from '../core/components/WebView/WebView';

export default {
  name: 'VxpHtmlView',
  props: {
    src: String,
  },
  mixins: [Gestures],
  components: {
    WebView,
  },
};
</script>

<style lang="scss"></style>
