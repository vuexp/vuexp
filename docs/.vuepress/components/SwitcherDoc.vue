<template>
  <StackLayout>
    <Switcher v-model="value" @checkedChange="switchValueChange" />
    <Label id="switcher__value__label" style="margin-top: 20px;" :text="labelText"></Label>
  </StackLayout>
</template>

<script>
import Switcher from '../../../src/core/components/Switcher/Switcher';
import Label from '../../../src/core/components/Label/Label';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'SwitcherDoc',
  components: {
    Switcher,
    StackLayout,
    Label,
  },
  data() {
    return {
      value: false,
      labelText: 'Switcher Off',
    };
  },
  methods: {
    switchValueChange: function(event) {
      this.labelText = this.value === true ? 'Switcher On' : 'Switcher Off';
    },
  },
};
</script>
<style lang="scss"></style>
