<template>
  <Label :text="text" :textWrap="textWrap" :class="{ 'vpx-label-invisible': !visibility }" />
</template>

<script>
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
    visibility: {
      type: Boolean,
      default: true,
    },
  },
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
