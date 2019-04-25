<template>
  <StackLayout>
    <Button text="Show Confirm Dialog" width="200" @tap="showConfirmDialog" />
    <Label id="label_result_text" :text ="result"/>
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
        this.result = result;
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
