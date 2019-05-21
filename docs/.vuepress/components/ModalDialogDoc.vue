<template>
  <StackLayout>
    <Button text="Show Modal Dialog" width="200" @tap="showModalDialog" id="modalDialog_docs" />
    <FlexboxLayout flexDirection="row" flexWrap="wrap">
      <Label text="Clicked Action:" class="label"></Label>
      <Label :text="eventText" class="form-input" id="modalDialog_event_label"></Label>
    </FlexboxLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label';
import StackLayout from '../../../src/layouts/StackLayout';
import Button from '../../../src/components/Button';
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';
import ModalDialog from '../../../src/components/ModalDialog';

export default {
  name: 'ModalDialogDoc',
  data() {
    return {
      eventText: '-',
    };
  },
  methods: {
    showModalDialog: function() {
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
    ModalDialog,
  },
};
</script>

<style lang="scss" scoped></style>
