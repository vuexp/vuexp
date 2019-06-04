<template>
  <FlexboxLayout class="flexbox" backgroundColor="#3c495e">
    <Label text="first" width="70" backgroundColor="#43b883"/>
    <Label text="second" width="70" backgroundColor="#1c6b48"/>
    <Label text="third" width="70" backgroundColor="#289062"/>
  </FlexboxLayout>
</template>

<script>
import Label from '../../../src/core/components/Label/Label'
import FlexboxLayout from '../../../src/layouts/FlexboxLayout'

export default {
  name: "FlexboxLayoutDoc",
  components: {
    FlexboxLayout,
    Label
  }
};
</script>

<style lang="scss" scoped>
.flexbox {
  color: #2c3e50;
}
</style>
