const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    increament_button: '#progress__increment__button',
    decreament_button: '#progress__decrement__button',
    increament_input: '#progress__increment__input',
    maxvalue_input: '#progress__maxValue__input',
    prog_value: '#progress__value__label',
    event_label: '#progress__eventChange__label',
    alert_label: '.vxp-alert-dialog__body',
    alert_ok: '.vxp-button.vxp-alert-dialog__footer__ok-button.Ok',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@increament_button').to.be.visible;
        return this;
      },

      setTextToIncreamentInput: function(number) {
        return this.waitForElementVisible('@increament_input', 10000)
          .clearValue('@increament_input')
          .setValue('@increament_input', number);
      },
      setTextToMaxValueInput: function(number) {
        return this.waitForElementVisible('@maxvalue_input', 10000)
          .clearValue('@maxvalue_input')
          .setValue('@maxvalue_input', number);
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
