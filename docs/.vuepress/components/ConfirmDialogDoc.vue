<template>
  <StackLayout>
    <Button text="Show Confirm Dialog" width="200" id="confirm_dialog_container" @tap="showConfirmDialog" />
    <StackLayout orientation="horizontal" class="confirm_dialog__margin">
      <Label text ="Result: "/>
      <Label id="label_result_text" :text ="result"/>
    </StackLayout>
  </StackLayout>
</template>

<script> 
import Button from '../../../src/components/Button';
import Label from '../../../src/components/Label';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: "ConfrimDialogDoc",
  data(){
    return {
      result: ''
    }
  },
  methods: {
    showConfirmDialog() {
      confirm("Your title", "Your message", "OK", "Cancel").then((result) => {
        this.result = result ? "Pressed OK" : "Pressed Cancel";
      });
    }
  },
  components: {
    Button,
    Label, 
    StackLayout
  }
};
</script>

<style lang="scss" scoped>
.confirm_dialog {
   &__margin {
   margin-top: 25px;
   margin-left: 2px;
  }
}
</style>