<template>
  <GridLayout width="200" height="200" columns="40, auto, *" rows="40, auto, *" backgroundColor="#3c495e">
    <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
    <Label text="0,1 colSpan=2" row="0" col="1" colSpan="2" backgroundColor="#1c6b48"/>
    <Label text="1,0" row="1" col="0" rowSpan="2" backgroundColor="#289062"/>
    <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
    <Label text="1,2" row="1" col="2" backgroundColor="#289062"/>
    <Label text="2,1" row="2" col="1" backgroundColor="#1c6b48"/>
    <Label text="2,2" row="2" col="2" backgroundColor="#43b883"/>
  </GridLayout>
</template>

<script>
import Label from '../../../src/components/Label'
import GridLayout from '../../../src/layouts/GridLayout'

export default {
  name: "GridLayoutComplexGridDoc",
  components: {
    Label,
    GridLayout
  }
};
</script>
