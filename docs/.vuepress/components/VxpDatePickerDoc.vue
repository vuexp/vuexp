<template>
  <StackLayout class="theme--nuweb">
    <VxpDatePicker
      class="vxp-date-picker-doc"
      :label="label"
      :dayPlaceholder="dayPlaceholder"
      :monthPlaceholder="monthPlaceholder"
      :yearPlaceholder="yearPlaceholder"
      :disabled="datePickerDisabled"
      :minYear="setMinYearNumber"
      :maxYear="setMaxYearNumber"
      :year="setYearNumber"
      :day="setDayNumber"
      :month="setMonthNumber"
      :months="months"
      :errors="errors"
      @dateChange="dateChange"
    />
    <StackLayout orientation="horizontal" class="vxp-datePicker-doc__margin_top">
      <VxpLabel id="datePicker_changeDate_text_label" class="vxp-datePicker-doc__label_width" text="Selected Date: " />
      <VxpLabel id="datePicker_changeDate_value_label" :text="SetDateString" />
    </StackLayout>
    <StackLayout orientation="horizontal" class="vxp-datePicker-doc__margin_top">
      <VxpLabel id="datePicker_label_label" class="vxp-datePicker-doc__label_width" text="Set Label: " />
      <TextField type="text" id="datePicker_label_textField" v-model="label" />
    </StackLayout>
    <StackLayout orientation="horizontal" class="vxp-datePicker-doc__margin_top">
      <VxpLabel id="datePicker_day_placeholder_label" class="vxp-datePicker-doc__label_width" text="Set Day Placeholder: " />
      <TextField type="text" id="datePicker_day_placeholder_textField" v-model="dayPlaceholder" />
    </StackLayout>
    <StackLayout orientation="horizontal" class="vxp-datePicker-doc__margin_top">
      <VxpLabel id="datePicker_month_placeholder_label"  class="vxp-datePicker-doc__label_width" text="Set Month Placeholder: " />
      <TextField type="text" id="datePicker_month_placeholder_textField" v-model="monthPlaceholder" />
    </StackLayout>
    <StackLayout orientation="horizontal" class="vxp-datePicker-doc__margin_top">
      <VxpLabel id="datePicker_year_placeholder_label" class="vxp-datePicker-doc__label_width" text="Set Year Placeholder: " />
      <TextField type="text" id="datePicker_year_placeholder_textField" v-model="yearPlaceholder" />
    </StackLayout>
    <StackLayout orientation="horizontal" class="vxp-datePicker-doc__margin_top">
      <VxpLabel id="datePicker_disabled_label" class="vxp-datePicker-doc__label_width" text="Disabled :"></VxpLabel>
      <VxpCheckbox id="datePicker_disabled_checkbox" v-model="datePickerDisabled" />
      <VxpLabel id="datePicker_checkbox_text_label" text="Is Disabled :" style="padding-left: 20px; width: 100px"></VxpLabel>
      <VxpLabel id="datePicker_checkbox_value_label" :text="datePickerDisabled.toString()"></VxpLabel>
    </StackLayout>
    <StackLayout orientation="horizontal" class="vxp-datePicker-doc__margin_top">
      <VxpLabel id="datePicker_day_label" class="vxp-datePicker-doc__label_width" text="Select Day: " />
      <TextField type="number" id="datePicker_day_textField" min="1" max="31" v-model="day" />
    </StackLayout>
    <StackLayout orientation="horizontal" class="vxp-datePicker-doc__margin_top">
      <VxpLabel id="datePicker_month_label" class="vxp-datePicker-doc__label_width" text="Select Month: " />
      <TextField type="number" id="datePicker_month_textField" min="1" max="12" v-model="month" />
    </StackLayout>
    <StackLayout orientation="horizontal" class="vxp-datePicker-doc__margin_top">
      <VxpLabel id="datePicker_min_year_label" class="vxp-datePicker-doc__label_width" text="Select Min Year: " />
      <TextField type="number" id="datePicker_min_year_textField" min="0" v-model="minYear" />
    </StackLayout>
    <StackLayout orientation="horizontal" class="vxp-datePicker-doc_margin_top">
      <VxpLabel id="datePicker_max_year_label" class="vxp-datePicker-doc__label_width" text="Select Max Year: " />
      <TextField type="number" id="datePicker_max_year_textField" min="0" class="vxp-datePicker-doc__margin_top" v-model="maxYear" />
    </StackLayout>
    <StackLayout orientation="horizontal" class="vxp-datePicker-doc__margin_top">
      <VxpLabel id="datePicker_year_label" class="vxp-datePicker-doc__label_width" text="Select Year: " />
      <TextField type="number" id="datePicker_year_textField" min="0" v-model="year" />
    </StackLayout>
    <VxpLabel id="datePicker_months_label" class="vxp-datePicker-doc__margin_top" text="Months :" width="100"></VxpLabel>
    <StackLayout class="vxp-datePicker-doc" v-for="(month, index) in months" :key="index" orientation="horizontal">
      <TextField :id="`dropDown_months_textField_${index}`" v-model="months[index]" :editable="true" />
    </StackLayout>
    <VxpLabel id="datePicker_errors_label" class="vxp-datePicker-doc__margin_top" text="Errors :" width="100"></VxpLabel>
    <StackLayout v-for="(error, index) in errors" :key="'error' + index" orientation="horizontal">
      <TextField :id="`datePicker_errors_textField_${index}`" v-model="errors[index]" :editable="true" />
      <VxpButton id="datePicker_errors_plus_button" text="+" @tap="addErrorItem" style="background=dodgerblue"></VxpButton>
      <VxpButton id="datePicker_errors_minus_button" text="-" @tap="removeErrorItem(index)" v-show="errors.length > 1"></VxpButton>
    </StackLayout>
  </StackLayout>
</template>
<script>
import VxpLabel from '../../../src/components/VxpLabel';
import VxpDatePicker from '../../../src/components/VxpDatePicker';
import TextField from '../../../src/core/components/TextField/TextField';
import VxpCheckbox from '../../../src/components/VxpCheckbox';
import VxpButton from '../../../src/components/VxpButton';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  data() {
    return {
      label: null,
      dayPlaceholder: 'Day',
      monthPlaceholder: 'month',
      yearPlaceholder: 'Year',
      datePickerDisabled: false,
      months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
      day: null,
      month: null,
      minYear: '1900',
      maxYear: '2990',
      year: '1991',
      errors: ['error_1'],
      selectedDate: null,
    };
  },
  computed: {
    setDayNumber() {
      return Number(this.day);
    },
    setMonthNumber() {
      return Number(this.month);
    },
    setMinYearNumber() {
      return Number(this.minYear);
    },
    setMaxYearNumber() {
      return Number(this.maxYear);
    },
    setYearNumber() {
      return Number(this.year);
    },
    SetDateString() {
      let date = 'Selected Date';
      if (this.selectedDate) {
        date = this.selectedDate.getDate() + '-' + (this.selectedDate.getMonth() + 1) + '-' + this.selectedDate.getFullYear();
      } else {
      }
      return date;
    },
  },
  methods: {
    dateChange(date) {
      this.selectedDate = date;
    },
    addErrorItem() {
      this.errors.push('Example Error');
    },
    removeErrorItem(i) {
      this.errors.splice(i, 1);
    },
  },
  components: {
    VxpLabel,
    VxpDatePicker,
    StackLayout,
    TextField,
    VxpCheckbox,
    VxpButton,
  },
};
</script>

<style lang="scss" scoped>
@import '../../../src/assets/styles/helpers';

.vxp-datePicker-doc {
  &__margin_top {
    margin-top: unit(10);
  }
  &__label_width {
    width: unit(200);
  }
}
</style>
