const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  monthInputPath: '#dropDown_months_textField_',
  elements: {
    datePickerLabel: '.vxp-label.vxp-date-picker__label',
    daySelectBox: '.vxp-drop-down.vxp-date-picker__day input',
    monthSelectBox: '.vxp-drop-down.vxp-date-picker__month input',
    yearSelectBox: '.vxp-drop-down.vxp-date-picker__year input',
    firstErrorLabel: 'div.vxp-flexbox-layout.vxp-date-picker__error-messages.typ-body > span:nth-child(1)',
    secondErrorLabel: 'div.vxp-flexbox-layout.vxp-date-picker__error-messages.typ-body > span:nth-child(2)',
    selectedDateLabel: '#datePicker_changeDate_value_label',
    dayPlaceholderField: '#datePicker_day_placeholder_textField',
    monthPlaceholderField: '#datePicker_month_placeholder_textField',
    yearPlaceholderField: '#datePicker_year_placeholder_textField',
    disabledCheckbox: '#datePicker_disabled_checkbox',
    isDisabledValueLabel: '#datePicker_checkbox_value_label',
    selectDayField: '#datePicker_day_textField',
    selectMonthField: '#datePicker_month_textField',
    selectMinYear: '#datePicker_min_year_textField',
    selectMaxYear: '#datePicker_max_year_textField',
    selectYearField: '#datePicker_year_textField',

    monthInputPath: '#dropDown_months_textField_',
    monthInput1: '#dropDown_months_textField_',
    monthInput2: '#dropDown_months_textField_1',
    monthInput3: '#dropDown_months_textField_2',
    monthInput4: '#dropDown_months_textField_3',
    monthInput5: '#dropDown_months_textField_4',
    monthInput6: '#dropDown_months_textField_5',
    monthInput7: '#dropDown_months_textField_6',
    monthInput8: '#dropDown_months_textField_7',
    monthInput9: '#dropDown_months_textField_8',
    monthInput10: '#dropDown_months_textField_9',
    monthInput11: '#dropDown_months_textField_10',
    monthInput12: '#dropDown_months_textField_11',

    errorInput1: '#datePicker_errors_textField_0',
    errorInput2: '#datePicker_errors_textField_1',
    errorOutput1: '#div.vxp-flexbox-layout.vxp-date-picker__error-messages.typ-body > span:nth-child(1)',
    errorOutput2: '#div.vxp-flexbox-layout.vxp-date-picker__error-messages.typ-body > span:nth-child(2)',
    addErrorButton: '#datePicker_errors_plus_button',
    removeErrorButton: '#dropDown_errors_minus_button',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@daySelectBox').to.be.visible;
        this.expect.element('@monthSelectBox').to.be.visible;
        this.expect.element('@yearSelectBox').to.be.visible;
        return this;
      },

      changeDatePickerPlaceHolder: function(day, month, year) {
        this.waitForElementVisible('@dayPlaceholderField', 10000)
          .clearValue('@dayPlaceholderField')
          .setValue('@dayPlaceholderField', day)
          .waitForElementVisible('@monthPlaceholderField', 10000)
          .clearValue('@monthPlaceholderField')
          .setValue('@monthPlaceholderField', month)
          .waitForElementVisible('@yearPlaceholderField', 10000)
          .clearValue('@yearPlaceholderField', 10000)
          .setValue('@yearPlaceholderField', year);
        return this;
      },
      clickDisabledCheckBox: function() {
        this.waitForElementVisible('@disabledCheckbox', 10000);
        return this.click('@disabledCheckbox');
      },
      setDate: function(day, month, year) {
        this.waitForElementVisible('@selectDayField', 10000)
          .clearValue('@selectDayField')
          .setValue('@selectDayField', day)
          .waitForElementVisible('@selectMonthField', 10000)
          .clearValue('@selectMonthField')
          .setValue('@selectMonthField', month)
          .waitForElementVisible('@selectYearField', 10000)
          .clearValue('@selectYearField')
          .setValue('@selectYearField', year);
        return this;
      },
      setMinAndMaxYear: function(minYear, maxYear) {
        this.waitForElementVisible('@selectMinYear', 10000)
          .clearValue('@selectMinYear')
          .setValue('@selectMinYear', minYear)
          .waitForElementVisible('@selectMaxYear', 10000)
          .clearValue('@selectMaxYear')
          .setValue('@selectMaxYear', maxYear);
        return this;
      },
      setMonthsName: function() {},
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
