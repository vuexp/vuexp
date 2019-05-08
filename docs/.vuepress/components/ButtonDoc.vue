<template>
  <StackLayout>
    <Button id="button" :text="buttonText" @tap="onButtonTap" :style="{'width': width + 'px' ,'height': height + 'px' }" :textWrap="textWrap" horizontalAlignment="left" />
    <StackLayout orientation="horizontal">
      <Label text="Text:" width="100" class="scroll-view__margin_top"></Label>
      <input type="text" id="button_text_input" v-model="buttonText" class="scroll-view__margin_top" />
    </StackLayout>  
    <StackLayout orientation="horizontal">
      <Label text="Label:" width="100" class="scroll-view__margin_top"></Label>
      <Label :text="labelText" id="button_label" class="scroll-view__margin_top" ></Label>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label text="Text Wrap :" width="100" class="scroll-view__margin_top"></Label>
      <input type="checkbox" v-model="textWrap" id="button_textWrap_selectbox" class="scroll-view__margin_top" />
    </StackLayout>
     <StackLayout orientation="horizontal">
      <Label text="Width :" width="100" class="scroll-view__margin_top"></Label>
      <TextField type="number" v-model="width" id="button_width_input" class="scroll-view__margin_top" />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label text="Height :" width="100" class="scroll-view__margin_top"></Label>
      <TextField type="number" v-model="height" id="button_height_input" class="scroll-view__margin_top" />
    </StackLayout>
  </StackLayout>
</template>

<script>
import Button from "../../../src/components/Button";
import Label from "../../../src/components/Label";
import StackLayout from "../../../src/layouts/StackLayout";
import TextField from "../../../src/components/TextField";

export default {
  name: "ButtonDoc",
  data(){
      return {
          labelText : '',
          textWrap : false,
          buttonText: 'Button',
          width :100,
          height :40
      };
  },
  methods: {
    onButtonTap() {
        this.labelText="Button Pressed";
    }
  },
  components:{
     Button,
     Label,
     StackLayout,
     TextField
  }
};
</script>
<style lang="scss" scoped>
.scroll-view {
   &__margin_top {
   margin-top: 10px;
  }
}
</style>