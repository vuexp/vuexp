<template>
  <StackLayout>
    <FlexboxLayout class="vxp-date-picker" justifyContent="flex-start">
      <VxpLabel flexGrow="1" flexShrink="1" v-if="label" class="vxp-date-picker__label" :text="label" />
      <VxpDropDown
        class="vxp-date-picker__day"
        :index="selectedDayIndex"
        :items="days"
        :placeholder="dayPlaceholder"
        :disabled="disabled"
        @changeIndex="dayChange"
      ></VxpDropDown>
      <VxpDropDown
        class="vxp-date-picker__month"
        :index="selectedMonthIndex"
        :items="months"
        :placeholder="monthPlaceholder"
        :disabled="disabled"
        @changeIndex="monthChange"
      ></VxpDropDown>
      <VxpDropDown
        class="vxp-date-picker__year"
        :index="selectedYearIndex"
        :items="years"
        :placeholder="yearPlaceholder"
        :disabled="disabled"
        @changeIndex="yearChange"
      ></VxpDropDown>
    </FlexboxLayout>
    <FlexboxLayout flexDirection="column" v-if="errors.length" class="vxp-date-picker__error-messages typ-body">
      <VxpLabel :text="error" v-for="(error, index) in errors" :key="index" :textWrap="true" />
    </FlexboxLayout>
  </StackLayout>
</template>

<script>
import VxpDropDown from './VxpDropDown';
import VxpLabel from './VxpLabel';
import FlexboxLayout from '../layouts/FlexboxLayout';
import StackLayout from '../layouts/StackLayout';

export default {
  name: 'VxpDatePicker',
  props: {
    dayPlaceholder: {
      type: String,
      default: 'Day',
    },
    monthPlaceholder: {
      type: String,
      default: 'Month',
    },
    yearPlaceholder: {
      type: String,
      default: 'Year',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    day: {
      type: Number,
      default: null,
    },
    month: {
      type: Number,
      default: null,
    },
    year: {
      type: Number,
      default: null,
    },
    months: {
      type: Object,
      default: () => {
        return {
          label: 'value',
          values: [
            { id: 1, value: 'January' },
            { id: 2, value: 'February' },
            { id: 3, value: 'March' },
            { id: 4, value: 'April' },
            { id: 5, value: 'May' },
            { id: 6, value: 'June' },
            { id: 7, value: 'July' },
            { id: 8, value: 'August' },
            { id: 9, value: 'September' },
            { id: 10, value: 'October' },
            { id: 11, value: 'November' },
            { id: 12, value: 'December' },
          ],
        };
      },
      validator: function(value) {
        return value.values.length === 12;
      },
    },
    minYear: {
      type: Number,
      default: 1900,
    },
    maxYear: {
      type: Number,
      default: 2018,
    },
    label: {
      type: String,
      default: '',
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedDay: null,
      selectedMonth: null,
      selectedYear: null,
    };
  },
  computed: {
    days() {
      let days = { label: 'value' };
      let daysValues = [];
      let year = (this.selectedYear && this.selectedYear.value) || null;
      let daysLength = this.daysInMonth(this.selectedMonth, year);
      for (let i = 1; i <= daysLength; i++) {
        daysValues.push({ value: i });
      }
      days.values = daysValues;
      return days;
    },
    years() {
      let years = { label: 'value' };
      let yearsValues = [];
      for (let i = this.minYear; i <= this.maxYear; i++) {
        yearsValues.push({ value: i });
      }
      years.values = yearsValues.reverse();
      return years;
    },
    selectedDayIndex() {
      return this.days.values.findIndex(v => v.value === this.day) >= 0 ? this.days.values.findIndex(v => v.value === this.day) : null;
    },
    selectedMonthIndex() {
      return this.month === null ? null : this.month - 1;
    },
    selectedYearIndex() {
      return this.years.values.findIndex(v => v.value === this.year) >= 0 ? this.years.values.findIndex(v => v.value === this.year) : null;
    },
  },
  methods: {
    daysInMonth(month, year) {
      return /8|3|5|10/.test(month) ? 30 : month === 1 ? ((!(year % 4) && year % 100) || !(year % 400) ? 29 : 28) : 31;
    },
    dayChange(index, value) {
      this.selectedDay = value;
      this.watchDate();
    },
    monthChange(index) {
      this.selectedMonth = index; // month index: 0 jan - 11 Dec
      this.watchDate();
    },
    yearChange(index, value) {
      this.selectedYear = value;
      this.watchDate();
    },
    watchDate() {
      if (this.selectedDay && this.selectedMonth !== null && this.selectedMonth !== undefined && this.selectedYear) {
        this.$emit('dateChange', new Date(this.selectedYear.value, this.selectedMonth, this.selectedDay.value));
      }
    },
  },
  components: {
    StackLayout,
    VxpDropDown,
    VxpLabel,
    FlexboxLayout,
  },
};
</script>

<style lang="scss">
@import '../assets/styles/helpers';
@import '../themes/themes';

.vxp-date-picker {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;

  &__label {
    flex: 1 1 100%;
  }

  &__day {
    width: unit(104, 30%);
  }

  &__month {
    padding-left: unit(20);
    width: unit(104, 30%);
  }

  &__year {
    padding-left: unit(20);
    width: unit(104, 30%);
  }

  @include themed($themes) {
    &__error-messages {
      color: getvar(alert);
      margin-top: unit(8);
    }
  }
}
</style>
