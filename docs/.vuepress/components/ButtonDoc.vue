<template>
  <StackLayout>
    <Button id="button" :text="buttonText" @tap="onButtonTap" :textWrap="textWrap" horizontalAlignment="center" />
    <br>
    Text :<input type="text" id="text" v-model="buttonText" />
    <br>
    Label :<Label :text="labelText" id="label" />
    <br>
    Word Wrap :<input type="checkbox" v-model="textWrap" id="textWrap" />
  </StackLayout>
</template>

<script>
import Button from "../../../src/components/Button";
import Label from "../../../src/components/Label";

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
        this.labelText="pressed";
    }
  },
  components:{
     Button,
     Label
  }
};
</script>