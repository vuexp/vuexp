<template>
  <span v-common-directive :class="fontClass" class="vxp-span">
    <template v-if="textValue">{{ textValue }}</template>
    <slot v-else />
  </span>
</template>

<script>
import CommonDirective from '../../directives/CommonDirective';
import Gestures from '../../mixins/GestureMixin';

export default {
  name: 'Span',
  props: {
    text: String,
  },
  computed: {
    fontClass() {
      if (typeof this.text === 'string' && this.text.includes(' | fonticon')) {
        return this.text.replace(' | fonticon', '');
      }

      return '';
    },
    textValue() {
      if (typeof this.text === 'string') {
        return this.text.includes(' | fonticon') ? '' : this.text;
      } else {
        return this.text;
      }
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
};
</script>
