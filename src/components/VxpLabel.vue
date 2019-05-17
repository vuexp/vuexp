<template>
  <Label :text="text" :textWrap="textWrap" :class="{ 'vpx-label-invisible': !visible }" />
</template>

<script>
import CommonDirective from '../directives/CommonDirective';
import Gestures from '../mixins/GestureMixin';
import Label from './Label';

export default {
  name: 'VxpLabel',
  props: {
    text: {
      type: [String, Number],
      default: '',
    },
    textWrap: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
  computed: {},
  mixins: [Gestures],
  components: {
    Label,
  },
};
</script>

<style lang="scss">
.vpx-label-invisible {
  display: none;
}
</style>
