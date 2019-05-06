<template>
    <WrapLayout height="300" width="450" backgroundColor="#3c495e">
        <Label text="first" class="wrapLayoutItem" backgroundColor="#43b883"/>
        <Label text="second" class="wrapLayoutItem" backgroundColor="#1c6b48"/>
        <Label text="third" class="wrapLayoutItem" backgroundColor="#289062"/>
        <Label text="fourth" class="wrapLayoutItem" backgroundColor="#289062"/>
    </WrapLayout>
</template>

<script>
import Label from '../../../src/components/Label'
import WrapLayout from '../../../src/layouts/WrapLayout'

export default {
  name: "WrapLayoutDoc",
  components : {
    WrapLayout,
    Label
  }
};
</script>

<style lang="scss" scoped>
.wrapLayoutItem {
  width: 140px;
  height: 140px;
}
</style>
