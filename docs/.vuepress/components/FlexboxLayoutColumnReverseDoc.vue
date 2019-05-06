<template>
  <FlexboxLayout class="flexbox" flexDirection="column-reverse" justifyContent="space-around" backgroundColor="#3c495e">
    <Label text="first" height="70" backgroundColor="#43b883"/>
    <Label text="second" alignSelf="center" width="70" height="70" backgroundColor="#1c6b48"/>
    <Label text="third" alignSelf="flex-end" width="70" height="70" backgroundColor="#289062"/>
    <Label text="fourth" height="70" backgroundColor="#289062"/>
  </FlexboxLayout>
</template>

<script>
import Label from '../../../src/components/Label'
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
