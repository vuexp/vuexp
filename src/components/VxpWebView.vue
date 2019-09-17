<template>
  <iframe v-if="isURL" class="vxp-webview" :src="srcValue" @load="$emit('loadFinished', $event)" />
  <div v-else v-html="src ? src : html"></div>
</template>

<script>
import Gestures from '../core/mixins/GestureMixin';

export default {
  name: 'VxpWebView',
  props: {
    src: String,
    html: String,
  },
  // Event called @loadstart does not get fired in the iframe so, the below method is a temporarily workaround to the problem.
  beforeMount(event) {
    if (navigator.onLine) {
      this.$emit('loadStarted', event);
    }
  },
  computed: {
    isURL: function() {
      if (!this.src) {
        return false;
      } else {
        return this.src.startsWith('http://') || this.src.startsWith('https://') || this.src.startsWith('~');
      }
    },
    srcValue: function() {
      return this.src.startsWith('~') ? this.src.replace('~', '') : this.src;
    },
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.vxp-webview {
  display: flex;
}
</style>
