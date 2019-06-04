<template>
  <StackLayout>
    <Button text="Show Alert Dialog" width="200" @tap="showAlertDialog" id="alertDialog_docs" />
    <FlexboxLayout flexDirection="row" flexWrap="wrap">
      <Label text="Clicked Action:" class="label"></Label>
      <Label :text="eventText" class="form-input" id="alertDialog_event_label"></Label>
    </FlexboxLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/core/components/Label/Label';
import StackLayout from '../../../src/layouts/StackLayout';
import Button from '../../../src/core/components/Button/Button';
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';

export default {
  name: 'AlertDialogDoc',
  data() {
    return {
      eventText: '-',
    };
  },
  methods: {
    showAlertDialog: function() {
      alert({ title: 'Your title', message: 'Your message', okButtonText: 'OK' }).then(() => {
        this.eventText = 'OK';
      });
    },
  },
  components: {
    FlexboxLayout,
    StackLayout,
    Label,
    Button,
  },
};
</script>

<style lang="scss" scoped></style>
