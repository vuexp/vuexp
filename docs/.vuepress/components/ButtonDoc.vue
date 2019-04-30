<template>
  <StackLayout>
    <Button id="button" :text="buttonText" @tap="onButtonTap" :textWrap="textWrap" horizontalAlignment="left" />
    <StackLayout orientation="horizontal">
      <Label text="Text:" width="100"></Label>
      <input type="text" id="button_text_input" v-model="buttonText" />
    </StackLayout>  
    <StackLayout orientation="horizontal">
      <Label text="Label:" width="100"></Label>
      <Label :text="labelText" id="button_label" ></Label>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label text="Text Wrap :" width="100"></Label>
      <input type="checkbox" v-model="textWrap" id="button_textWrap_input" />
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
