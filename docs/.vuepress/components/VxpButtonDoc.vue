<template>
  <StackLayout orientation="vertical" class="vxpbutton-wrapper">
    <StackLayout class="theme--vuexp">
      <VxpButton
        id="button"
        :text="buttonText"
        :size="buttonSize"
        :disabled="isDisabled"
        :secondary="isSecondary"
        :primary="isPrimary"
        @tap="onButtonTap"
        :textWrap="textWrap"
        horizontalAlignment="left"
        :icon="buttonIcon"
        :iconClass="buttonIconClass"
        :iconPosition="buttonIconPosition"
      />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label text="Text:" width="100"></Label>
      <TextField type="text" id="button_text_input" v-model="buttonText" />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label text="Label:" width="100"></Label>
      <Label :text="labelText" id="button_label"></Label>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label text="Text Wrap :" width="100"></Label>
      <VxpCheckbox v-model="textWrap" id="button_textWrap_selectbox" />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label id="button_primary_label" text="Primary :" width="100"></Label>
      <VxpCheckbox v-model="isPrimary" id="button_primary_checkbox" />
      <Label id="button_primary_status_label" :text="isPrimary ? 'active' : ''" width="100"></Label>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label id="button_secondary_label" text="Secondary :" width="100"></Label>
      <VxpCheckbox v-model="isSecondary" id="button_secondary_checkbox" />
      <Label id="button_secondary_status_label" :text="isSecondary ? 'active' : ''" width="100"></Label>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label id="button_disabled_label" text="Disabled :" width="100"></Label>
      <VxpCheckbox v-model="isDisabled" id="button_disabled_checkbox" />
      <Label id="button_disabled_status_label" :text="isDisabled ? 'active' : ''" width="100"></Label>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label id="button_size_label" text="Size:" width="100"></Label>
      <select v-model="buttonSize" id="button_size_select">
        <option value="small" id="button_size_small_option">small</option>
        <option value="medium" id="button_size_medium_option">medium</option>
      </select>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label id="button_iconClass_label" text="Icon Class:" width="100"></Label>
      <select v-model="buttonIconClass" id="button_iconClass_select">
        <option value="fa" id="button_iconClass_fa_option">fa</option>
      </select>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label id="button_icon_label" text="Icon:" width="100"></Label>
      <select v-model="buttonIcon" id="button_icon_select">
        <option value="fa-smile-o" id="button_icon_smile_option">fa-smile-o</option>
        <option value="fa-user-circle-o" id="button_icon_circle_option">fa-user-circle-o</option>
        <option value="fa-exclamation-triangle" id="button_icon_triangle_option">fa-exclamation-triangle</option>
      </select>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label id="button_icon_pos_label" text="Icon Position:" width="100"></Label>
      <select v-model="buttonIconPosition" id="button_icon_pos_select">
        <option value="left" id="button_icon_pos_left_option">left</option>
        <option value="right" id="button_icon_pos_right_option">right</option>
      </select>
    </StackLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/core/components/Label/Label';
import StackLayout from '../../../src/layouts/StackLayout';
import TextField from '../../../src/core/components/TextField/TextField';
import VxpButton from '../../../src/components/VxpButton';
import VxpCheckbox from '../../../src/components/VxpCheckbox';

export default {
  name: 'ButtonDoc',
  data() {
    return {
      labelText: '-',
      textWrap: false,
      buttonText: 'Button',
      width: 100,
      height: 40,
      isDisabled: false,
      buttonSize: 'medium',
      isPrimary: false,
      isSecondary: false,
      buttonIcon: '',
      buttonIconClass: 'fa',
      buttonIconPosition: 'left',
    };
  },
  methods: {
    onButtonTap() {
      this.labelText = 'Button Pressed';
    },
  },
  components: {
    VxpButton,
    Label,
    StackLayout,
    TextField,
    VxpCheckbox,
  },
};
</script>
<style lang="scss" scoped>
@import url('/fonts/fontawesome.min.css');

.vxpbutton-wrapper * {
  margin: 2px;
}
</style>
