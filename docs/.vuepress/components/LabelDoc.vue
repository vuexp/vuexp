<template>
  <StackLayout>
    <input id="labeldoc-input" type="text" v-model="labelValue">
    <Label text="Text Wrap?" />
    <input id="labeldoc-checkbox-textwrap" type="checkbox" v-model="textWrap">
    <Label id="labeldoc-label" :text="labelValue" :textWrap="textWrap" />
  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label'
import StackLayout from '../../../src/layouts/StackLayout'

export default {
  name: 'LabelDoc',
  data() {
    return {
      labelValue: 'Label',
      textWrap: true
    };
  },
  components: {
    Label,
    StackLayout
  }
};
</script>

