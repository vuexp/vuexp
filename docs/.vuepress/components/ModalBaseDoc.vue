<template>
  <StackLayout>
    <Button text="Show Modal Base" width="200" @tap="showModalBase" id="modalBase_docs" />
    <FlexboxLayout flexDirection="row" flexWrap="wrap">
      <Label text="Clicked Action:" class="label"></Label>
      <Label :text="eventText" class="form-input" id="modalBase_event_label"></Label>
    </FlexboxLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/core/components/Label/Label';
import StackLayout from '../../../src/layouts/StackLayout';
import Button from '../../../src/core/components/Button/Button';
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';
import ModalBase from '../../../src/core/components/BaseModal/ModalBase';

export default {
  name: 'ModalBaseDoc',
  data() {
    return {
      eventText: '-',
    };
  },
  methods: {
    showModalBase: function() {

     // this.$showModal(Button, { props: { text: "hello", textWrap : true , isEnabled : true } }).then();
     // this.$showModal(Label, { props: { text: "'hello'", textWrap : true , isEnabled : true } }).then();
      this.$showModal(Label, { context: { props: { text: "'hello'", textWrap : true , isEnabled : true } }, fullscreen: false });
    },
  },
  components: {
    FlexboxLayout,
    StackLayout,
    Label,
    Button,
    ModalBase,
  },
};
</script>

<style lang="scss" scoped></style>
