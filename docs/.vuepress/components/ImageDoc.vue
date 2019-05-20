<template>
  <StackLayout style="width: 400px; margin:auto;">
    <StackLayout style="width: 400px; height: 200px;" class="stack-cell">
      <Img id="image" :src="src" :stretch="stretch" :placeholder="placeholder" :width="width" :height="height" />
    </StackLayout>

    <Label text="Source URL: ">
      <TextField v-model="src" id="image__src__input"></TextField>
    </Label>
    <Label text="Stretch Mode: ">
      <select v-model="stretch" id="image__stretchMode__select">
        <option value="none">none</option>
        <option value="aspectFill">aspectFill</option>
        <option value="aspectFit">aspectFit</option>
        <option value="fill">fill</option>
      </select>
    </Label>
    <Label text="Placeholder: ">
      <TextField v-model="placeholder" id="image__placeholder__input"></TextField>
    </Label>
    <Label text="Width: ">
      <TextField v-model="width" keyboard-type="number" id="image__width__input"></TextField>
    </Label>
    <Label text="Height: ">
      <TextField v-model="height" keyboard-type="number" id="image__height__input"></TextField>
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

.demo-panel {
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid #f1f1f1;

  &__title {
    font-size:20px;
    font-weight:bold;
    margin-bottom:10px;
  }
}

select {
  border: 1px solid #eaeaea;
  border-radius: 3px;
  padding: 2px 10px 2px 0;
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
      stretch: "none",
      placeholder: "",
      height: "1000",
      width: "1000",
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
