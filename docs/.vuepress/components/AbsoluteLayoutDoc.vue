<template>
  <StackLayout>
    <AbsoluteLayout backgroundColor="#3c495e" height="230">
      <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
      <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
      <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
      <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
    </AbsoluteLayout>
  </StackLayout>
  
</template>

<script>

import Label from '../../../src/components/Label'
import StackLayout from '../../../src/layouts/StackLayout'
import AbsoluteLayout from '../../../src/layouts/AbsoluteLayout'

export default {
  name: "AbsoluteLayoutDoc",
  components: {
    StackLayout,
    AbsoluteLayout,
    Label
  }
};
</script>
