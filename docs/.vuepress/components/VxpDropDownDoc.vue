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
    <StackLayout orientation="horizontal" class="dropDown__margin_top">
      <Label id="dropDown_item_label" class="dropDown" text="Selected Index: " />
      <Label id="dropDown_selectItem_label" :text="selectedIndex" />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label id="dropDown_placeholder_label" class="dropDown__margin_top" text="Placeholder:" width="100"></Label>
      <input type="text" id="dropDown_placeholder_input" class="dropDown__margin_top" v-model="dropDownPlaceholder" />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label id="dropDown_disabled_label" class="dropDown__margin_top" text="Disabled :" width="100"></Label>
      <input type="checkbox" id="dropDown_disabled_checkbox" class="dropDown__margin_top" v-model="dropDownDisabled" />
      <Label id="dropDown_checkbox_text_label" class="dropDown__margin_top dropDown__m-l-10" text="Is Disabled :" width="100"></Label>
      <Label id="dropDown_checkbox_value_label" class="dropDown__margin_top" width="100">{{dropDownDisabled}}</Label>
    </StackLayout>
    <Label id="dropDown_items_label" class="dropDown__margin_top" text="Items :" width="100"></Label>
    <StackLayout class="dropDown_m-b-10" v-for="(country, index) in countries" :key="index" orientation="horizontal">
      <TextField :id="`dropDown_items_textField_${index}`" v-model="countries[index]" hint="This is placeholder" :editable="true" />
      <Button id="dropDown_items_plus_button" class="dropDown__m-l-10" text="+" @tap="addItem" style="background=dodgerblue"></Button>
      <Button id="dropDown_items_minus_button" class="dropDown__m-l-10" text="-" @tap="removeItem(index)" v-show="countries.length > 1"></Button>
    </StackLayout>
    <Label id="dropDown_errors_label" class="dropDown__margin_top" text="Errors :" width="100"></Label>
    <StackLayout class="dropDown_m-b-10" v-for="(error, index) in errors"  orientation="horizontal">
      <TextField :id="`dropDown_errors_textField_${index}`" v-model="errors[index]" hint="This is placeholder" :editable="true" />
      <Button id="dropDown_errors_plus_button" class="dropDown__m-l-10" text="+" @tap="addErrorItem" style="background=dodgerblue"></Button>
      <Button id="dropDown_errors_minus_button" class="dropDown__m-l-10" text="-" @tap="removeErrorItem(index)" v-show="errors.length > 1"></Button>
    </StackLayout>
  </StackLayout>
</template>

<script>
import VxpDropDown from '../../../src/components/VxpDropDown';
import Label from '../../../src/components/Label';
import StackLayout from '../../../src/layouts/StackLayout';
import TextField from '../../../src/components/TextField';
import Button from '../../../src/components/Button';

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
    Label,
    StackLayout,
    TextField,
    Button,
  },
};
</script>

<style lang="scss" scoped>
@import '../../../src/assets/styles/helpers';

.dropDown {
  &__margin_top {
    margin-top: unit(10);
  }
  &__m-l-10 {
    margin-left: unit(10);
  }
  &__m-b-10 {
    margin-bottom: unit(10);
  }
}
</style>
