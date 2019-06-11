const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    status_label: '#checkbox_status_label_result',
    checkbox: '#checkbox_component',
    disable_checkbox: '#checkbox_enabled_selectbox',
    disable_label: '#checkbox_enabled_label_result',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@checkbox').to.be.visible;
        return this;
      },

      checkTextWrapCheckbox: function() {
        this.waitForElementVisible('@textWrapCheckBox', 10000);
        if (this.verify.attributeContains('@textOutputField', 'style', 'white-space: nowrap;')) {
          return this.click('@textWrapCheckBox');
        }
        return 'textWrap already selected';
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
