<template>
  <Label :text="text" :textWrap="textWrap" v-on="$listeners" />
</template>

<script>
import Label from '../core/components/Label/Label';

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
