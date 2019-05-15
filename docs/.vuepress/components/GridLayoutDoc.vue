<template>
   <GridLayout class="grid" width="200" height="220" columns="115, 115" rows="115, 115">
      <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
      <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
      <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
      <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
    </GridLayout>
</template>

<script>
import Label from '../../../src/components/Label'
import GridLayout from '../../../src/layouts/GridLayout'

export default {
  name: "GridLayoutDoc",
  components: {
    Label,
    GridLayout
  }
};
</script>

<style lang="scss" scoped>
  .grid {
    margin-bottom: 12px;
  }
</style>
