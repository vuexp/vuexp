<template>
  <StackLayout class="theme--nuweb">
    <VxpDropDown
      id="dropDown_docs"
      :items="countries"
      :placeholder="dropDownPlaceholder"
      :disabled="dropDownDisabled"
      @changeIndex="onChangeIndex"
      :errors="errors"
    />
    <StackLayout orientation="horizontal" class="vxp-dropDown-doc__margin_top">
      <VxpLabel id="dropDown_item_label" class="vxp-dropDown-doc__label_width" text="Selected Index: " />
      <VxpLabel id="dropDown_selectItem_label" :text="selectedIndex" />
    </StackLayout>
    <StackLayout orientation="horizontal" class="vxp-dropDown-doc__margin_top">
      <VxpLabel id="dropDown_placeholder_label" class="vxp-dropDown-doc__label_width" text="Placeholder:"></VxpLabel>
      <TextField type="text" id="dropDown_placeholder_textField" v-model="dropDownPlaceholder" />
    </StackLayout>
    <StackLayout orientation="horizontal" class="vxp-dropDown-doc__margin_top">
      <VxpLabel id="dropDown_disabled_label" class="vxp-dropDown-doc__label_width"  text="Disabled :"></VxpLabel>
      <VxpCheckBox id="dropDown_disabled_checkbox" v-model="dropDownDisabled" />
      <VxpLabel id="dropDown_checkbox_text_label" text="Is Disabled :" style="padding-left: 20px; width: 100px"></VxpLabel>
      <VxpLabel id="dropDown_checkbox_value_label" :text="dropDownDisabled.toString()" width="100"></VxpLabel>
    </StackLayout>
    <VxpLabel id="dropDown_items_label" class="vxp-dropDown-doc__margin_top" text="Items :" width="100"></VxpLabel>
    <StackLayout class="vxp-dropDown-doc_m-b-10" v-for="(country, index) in countries" :key="index" orientation="horizontal">
      <TextField :id="`dropDown_items_textField_${index}`" v-model="countries[index]" hint="This is placeholder" :editable="true" />
      <VxpButton id="dropDown_items_plus_button" text="+" @tap="addItem" style="background=dodgerblue"></VxpButton>
      <VxpButton id="dropDown_items_minus_button" text="-" @tap="removeItem(index)" v-show="countries.length > 1"></VxpButton>
    </StackLayout>
    <VxpLabel id="dropDown_errors_label" class="vxp-dropDown-doc__margin_top" text="Errors :" width="100"></VxpLabel>
    <StackLayout class="vxp-dropDown-doc_m-b-10" v-for="(error, index) in errors" :key="'error' + index" orientation="horizontal">
      <TextField :id="`dropDown_errors_textField_${index}`" v-model="errors[index]" hint="This is placeholder" :editable="true" />
      <VxpButton id="dropDown_errors_plus_button" class="vxp-dropDown-doc__m-l-10" text="+" @tap="addErrorItem" style="background=dodgerblue"></VxpButton>
      <VxpButton
        id="dropDown_errors_minus_button"
        class="vxp-dropDown-doc__m-l-10"
        text="-"
        @tap="removeErrorItem(index)"
        v-show="errors.length > 1"
      ></VxpButton>
    </StackLayout>
  </StackLayout>
</template>

<script>
import VxpDropDown from '../../../src/components/VxpDropDown';
import VxpLabel from '../../../src/components/VxpLabel';
import StackLayout from '../../../src/layouts/StackLayout';
import TextField from '../../../src/core/components/TextField/TextField';
import VxpButton from '../../../src/components/VxpButton';
import VxpCheckBox from '../../../src/components/VxpCheckbox';

export default {
  name: 'VxpDropDownDoc',
  data() {
    return {
      errors: ['error_1'],
      countries: ['Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'United States', 'Germany', 'Turkey'],
      selectedIndex: null,
      dropDownPlaceholder: 'Select Item',
      dropDownDisabled: false,
    };
  },
  methods: {
    onChangeIndex(index) {
      this.selectedIndex = index;
    },
    addItem() {
      this.countries.push('Example Item');
    },
    removeItem(i) {
      this.countries.splice(i, 1);
    },
    addErrorItem() {
      this.errors.push('Example Error');
    },
    removeErrorItem(i) {
      this.errors.splice(i, 1);
    },
  },
  components: {
    VxpDropDown,
    VxpLabel,
    StackLayout,
    TextField,
    VxpButton,
    VxpCheckBox,
  },
};
</script>

<style lang="scss" scoped>
@import '../../../src/assets/styles/helpers';

.vxp-dropDown-doc {
  &__margin_top {
    margin-top: unit(10);
  }
  &__m-l-10 {
    margin-left: unit(10);
  }
  &__m-b-10 {
    margin-bottom: unit(10);
  }
  &__label_width {
    width: unit(200);
  }
}
</style>
