<template>
  <StackLayout orientation="vertical" class="vxpbutton-wrapper">
    <StackLayout>
      <VxpButton
        id="button"
        :text="buttonText"
        :size="buttonSize"
        :disabled="isDisabled"
        :secondary="isSecondary"
        :primary="isPrimary"
        @tap="onButtonTap"
        :textWrap="textWrap"
        :visible="isVisible"
        horizontalAlignment="left"
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
      <input type="checkbox" v-model="textWrap" id="button_textWrap_selectbox" />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label id="button_visible_label" text="Visible :" width="100"></Label>
      <input type="checkbox" v-model="isVisible" id="button_visible_checkbox" />
      <Label id="button_visible_status_label" :text="isVisible ? 'active' : ''" width="100"></Label>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label id="button_primary_label" text="Primary :" width="100"></Label>
      <input type="checkbox" v-model="isPrimary" id="button_primary_checkbox" />
      <Label id="button_primary_status_label" :text="isPrimary ? 'active' : ''" width="100"></Label>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label id="button_secondary_label" text="Secondary :" width="100"></Label>
      <input type="checkbox" v-model="isSecondary" id="button_secondary_checkbox" />
      <Label id="button_secondary_status_label" :text="isSecondary ? 'active' : ''" width="100"></Label>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label id="button_disabled_label" text="Disabled :" width="100"></Label>
      <input type="checkbox" v-model="isDisabled" id="button_disabled_checkbox" />
      <Label id="button_disabled_status_label" :text="isDisabled ? 'active' : ''" width="100"></Label>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label id="button_size_label" text="Size:" width="100"></Label>
      <select v-model="buttonSize" id="button_size_select">
        <option value="small" id="button_size_small_option">small</option>
        <option value="medium" id="button_size_medium_option">medium</option>
      </select>
    </StackLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label';
import StackLayout from '../../../src/layouts/StackLayout';
import TextField from '../../../src/components/TextField';
import VxpButton from '../../../src/components/VxpButton';

export default {
  name: 'ButtonDoc',
  data() {
    return {
      labelText: '-',
      textWrap: false,
      buttonText: 'Button',
      width: 100,
      height: 40,
      isVisible: true,
      isDisabled: false,
      buttonSize: 'medium',
      isPrimary: false,
      isSecondary: false,
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
  },
};
</script>
<style lang="scss" scoped>
@import url('/fonts/fontawesome.min.css');

.vxpbutton-wrapper * {
  margin: 2px;
}
</style>
