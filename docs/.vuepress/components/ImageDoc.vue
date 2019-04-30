<template>
  <StackLayout rows="*, *" columns="*, *" style="height: 600px; width: 400px; margin:auto;">
    <StackLayout row="0" col="0" class="stack-cell">
      <Label text="none" class="label-text" />
      <!-- >> image-stretch-none -->
      <Img src="~/images/logo.png" stretch="none" />
      <!-- << image-stretch-none -->
    </StackLayout>
    <StackLayout row="1" col="0" class="stack-cell">
      <Label text="fill" class="label-text" />
      <!-- >> image-stretch-fill -->
      <Img src="~/images/logo.png" stretch="fill" />
      <!-- << image-stretch-fill -->
    </StackLayout>
    <StackLayout row="0" col="1" class="stack-cell">
      <Label text="aspectFill" class="label-text" />
      <!-- >> image-stretch-aspect-fill -->
      <Img src="~/images/logo.png" stretch="aspectFill" />
      <!-- << image-stretch-aspect-fill -->
    </StackLayout>
    <StackLayout row="1" col="1" class="stack-cell">
      <Label text="aspectFit" class="label-text" />
      <!-- >> image-stretch-aspect-fit -->
      <Img src="~/images/logo.png" stretch="aspectFit" />
      <!-- << image-stretch-aspect-fit -->
    </StackLayout>
  </StackLayout>
</template>
<style lang="scss">
.label-text {
  text-align: center;
  font-weight: bold;
  background-color: rgba(166, 178, 181, 0.3);
  padding: 5px auto;
}

.stack-cell {
  border: solid 1px #a6b2b5;
  margin: 10px;
}
</style>
<script>
import StackLayout from "../../../src/layouts/StackLayout";
import Label from "../../../src/components/Label";
import Img from "../../../src/components/Img";

export default {
  name: "ImageDoc",
  components: {
    StackLayout,
    Label,
    Img
  }
};
</script>
