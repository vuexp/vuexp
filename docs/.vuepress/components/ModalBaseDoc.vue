<template>
  <StackLayout orientation="vertical" class="theme--vuexp">
     <StackLayout orientation="horizontal" >
    <VxpButton
      text="Show Modal Base"
      width="500px !important"
      @tap="showModalButton"
      id="modalbase_component"
      primary
    />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <VxpLabel class="modalBase__label" id="label_fullscreen" text="Fullscreen:"></VxpLabel>
      <FlexboxLayout>
        <VxpCheckbox
          class="checkbox-doc-container__flexboxLayout__checkbox"
          id="checkbox_fullscreen"
          v-model="checkforbutton"
          style="margin-top:10px;"
        />
      </FlexboxLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import VxpLabel from '../../../src/components/VxpLabel';
import StackLayout from '../../../src/layouts/StackLayout';
import VxpButton from '../../../src/components/VxpButton';
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';
import ModalBaseButton from './ModalBaseButton';
import VxpCheckbox from '../../../src/components/VxpCheckbox';

export default {
  name: 'ModalBaseDoc',
  data() {
    return {
      eventText: '-',
      checkforlabel: false,
      checkforbutton: false,
    };
  },
  methods: {
    showModalButton() {
      this.$showModal(ModalBaseButton, { fullscreen: this.checkforbutton }).then(textWrap => {});
    },
    showModalLabel() {
      this.$showModal(ModalBaseLabel, { fullscreen: this.checkforlabel }).then(textWrap => {});
    },
  },
  components: {
    FlexboxLayout,
    StackLayout,
    VxpLabel,
    VxpButton,
    VxpCheckbox,
  },
};
</script>
<style lang="scss">
@import '../../../src/themes/themes';
@import '../../../src/assets/styles/helpers';
.modalBase {
  &__label {
    margin: 10px;
    font-weight: bold;
  }
}
</style>
