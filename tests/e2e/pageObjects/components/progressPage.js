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
    progress_bar: '.vxp-progress__bar',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@increament_button').to.be.visible;
        return this;
      },

      setTextToIncreamentInput: function(number) {
        this.waitForElementVisible('@increament_input', 10000).clearValue('@increament_input');
        return this.setValue('@increament_input', number);
      },
      setTextToMaxValueInput: function(number) {
        this.waitForElementVisible('@maxvalue_input', 10000).clearValue('@maxvalue_input');
        return this.setValue('@maxvalue_input', number);
      },
      icreament: function() {
        this.waitForElementVisible('@increament_button', 10000);
        return this.click('@increament_button');
      },
      decreament: function() {
        this.waitForElementVisible('@decreament_button', 10000);
        return this.click('@decreament_button');
      },
      alert: function() {
        this.waitForElementVisible('@alert_ok', 20000);
        return this.click('@alert_ok');
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
