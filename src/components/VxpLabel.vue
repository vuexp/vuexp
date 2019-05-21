<template>
  <Label :text="text" :textWrap="textWrap" />
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
  },
  components: {
    Label,
  },
};
</script>

<style lang="scss"></style>
