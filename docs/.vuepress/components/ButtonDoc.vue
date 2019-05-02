<template>
  <StackLayout>
    <Button id="button" :text="buttonText" @tap="onButtonTap" :textWrap="textWrap" horizontalAlignment="left" />
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
      <input type="checkbox" v-model="textWrap" id="button_textWrap_input" class="scroll-view__margin_top" />
    </StackLayout>
  </StackLayout>
</template>

<script>
import Button from "../../../src/components/Button";
import Label from "../../../src/components/Label";
import StackLayout from "../../../src/layouts/StackLayout";

export default {
  name: "ButtonDoc",
  data(){
      return {
          labelText : '',
          textWrap : false,
          buttonText: 'Button'
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
     StackLayout
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