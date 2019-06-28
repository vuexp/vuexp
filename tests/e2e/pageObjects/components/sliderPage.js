const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    minValue: '#slider__minValue__input',
    maxValue: '#slider__maxValue__input',
    setValue: '#slider__setValue__input',
    slider_scroll: '.vxp-slider__scroll',
    label: '#slider__value__label',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@minValue').to.be.visible;
        return this;
      },

      setNumberToMinValueInput: function(number) {
        return this.waitForElementVisible('@minValue', 10000)
          .clearValue('@minValue')
          .setValue('@minValue', number);
      },
      setNumberToMaxValueInput: function(number) {
        return this.waitForElementVisible('@maxValue', 10000)
          .clearValue('@maxValue')
          .setValue('@maxValue', number);
      },
      setNumberToValueInput: function(number) {
        return this.waitForElementVisible('@setValue', 10000)
          .clearValue('@setValue')
          .setValue('@setValue', number);
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
