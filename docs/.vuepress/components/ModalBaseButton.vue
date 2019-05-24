<template>
  <Page>
    <StackLayout class="theme--nuweb" orientation="vertical">
      <StackLayout orientation="vertical">
        <VxpLabel text="Label" id="label_modaldialog" class="modalBase__label"/>
         <i class="bar"></i>
      </StackLayout>
      <StackLayout orientation="horizontal">
        <VxpLabel
          class="modalBase__label"
          text="Button : "
          width="100"
          id="label_modaldialog_button"
        />
        <VxpButton text="VxpButton" width="100px" id="button_modaldialog" primary @tap="onButtonTap"/>
        <VxpLabel :text="buttonText" class="modalBase__label" id="button_modaldialog_result"/>
      </StackLayout>
      <StackLayout orientation="horizontal">
        <VxpLabel
          class="modalBase__label"
          text="Checkbox : "
          id="checkbox_modaldialog_label"
          width="100"
        />
        <VxpCheckbox
          class="checkbox-doc-container__config__checkbox"
          style="margin-top: 10px;"
          id="checkbox_modaldialog_checkbox"
          @tap="onMainCheck"
          v-model="checked"
          primary
        />
        <VxpLabel
          :text="checked ? 'Checked' : 'Unchecked'"
          id="checkbox_modaldialog_result"
          class="modalBase__label"
          width="100"
        />
      </StackLayout>
    </StackLayout>
  </Page>
</template>
<script>
import VxpButton from '../../../src/components/VxpButton';
import VxpCheckbox from '../../../src/components/VxpCheckbox';
import VxpLabel from '../../../src/components/VxpLabel';
import StackLayout from '../../../src/layouts/StackLayout';
import Page from '../../../src/components/Page';

export default {
  data() {
    return {
      buttonText: '',
      checked: true,
    };
  },
  components: {
    VxpButton,
    StackLayout,
    Page,
    VxpLabel,
    VxpCheckbox,
  },
  methods: {
    onButtonTap() {
      this.buttonText = 'Button Pressed';
    },
    onMainCheck() {
      this.checked = !checked;
    },
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
