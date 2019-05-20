<template>
  <StackLayout>
    <Button text="Show Modal Dialog" width="200" @tap="showAlertDialog" id="alertDialog_docs" />
    <FlexboxLayout flexDirection="row" flexWrap="wrap">
      <Label text="Clicked Action:" class="label"></Label>
      <Label :text="eventText" class="form-input" id="alertDialog_event_label"></Label>
    </FlexboxLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label';
import StackLayout from '../../../src/layouts/StackLayout';
import Button from '../../../src/components/Button';
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';

export default {
  name: 'ModalDialogDoc',
  data() {
    return {
      eventText: '-',
    };
  },
  methods: {
    showAlertDialog: function() {
      modal({ title: 'Your title', message: 'Your message', okButtonText: 'OK' }).then(() => {
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
