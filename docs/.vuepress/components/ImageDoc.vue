<template>
  <StackLayout style="width: 400px; margin:auto;">
    <StackLayout class="stack-cell">
      <Img :src="src" :tintColor="tintColor" :stretch="stretch" :loadMode="loadMode" />
    </StackLayout>

    <Label text="Source URL: ">
      <TextField v-model="src" id="image__src__input"></TextField>
    </Label>
    <Label text="Tint Color: ">
      <TextField v-model="tintColor" id="image__tintColor__input"></TextField>
    </Label>
    <Label text="Stretch Mode: ">
      <select v-model="stretch" id="image__stretchMode__select">
        <option value="none">none</option>
        <option value="aspectFill">aspectFill</option>
        <option value="aspectFit">aspectFit</option>
        <option value="fill">fill</option>
      </select>
    </Label>
    <Label text="Load Mode: ">
      <select v-model="loadMode" id="image__loadMode__select">
        <option value="async">async</option>
        <option value="sync">sync</option>
      </select>
    </Label>
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
import TextField from "../../../src/components/TextField";

export default {
  name: "ImageDoc",
  data() {
    return {
      src: "~/images/logo.png",
      tintColor: "#000000",
      stretch: "none",
      loadMode: "async"
    }
  },
  components: {
    TextField,
    StackLayout,
    Label,
    Img
  }
};
</script>
