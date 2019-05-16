<template>
  <StackLayout>
    <Button text="Show Action Dialog" width="200" @tap="showActionDialog" />
  </StackLayout>
</template>

<script>
import StackLayout from '../../../src/layouts/StackLayout';
import Button from "../../../src/components/Button";

export default {
  name: "ActionDialogDoc",
  components: {
    StackLayout,
    Button
  },
  methods: {
    showActionDialog: function() {
      action("Your message", "Cancel button text", ["Option1", "Option2"]).then(
        result => {
          console.log(result);
        }
      );
    }
  }
};
</script>

