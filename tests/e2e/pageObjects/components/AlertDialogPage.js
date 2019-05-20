const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    alert_button: '#alertDialog_docs',
    alert_label: '#alertDialog_event_label',
    alert_ok: '.vxp-button.vxp-alert-dialog__footer__ok-button.OK',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@alert_button').to.be.visible;
        this.expect.element('@alert_label').to.be.visible;
        this.expect.element('@alert_ok').to.be.visible;
        return this;
      },

      checkTextWrapCheckbox: function() {
        this.waitForElementVisible('@textWrapCheckBox', 10000);
        if (this.verify.attributeContains('@textOutputField', 'style', 'white-space: nowrap;')) {
          return this.click('@textWrapCheckBox');
        }
        return 'textWrap already selected';
      },
      uncheckTextWrapCheckbox: function() {
        this.waitForElementVisible('@textWrapCheckBox', 10000);
        if (this.verify.attributeContains('@textOutputField', 'style', 'white-space: normal;')) {
          return this.click('@textWrapCheckBox');
        }
        return 'textWrap already unselected';
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
