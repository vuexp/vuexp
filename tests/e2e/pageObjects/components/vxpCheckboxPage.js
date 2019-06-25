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
    theme_label: '#checkbox_theme_label',
    theme_checkbox: '#checkbox_theme_checkbox label',
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
      selectCheck: function() {
        this.waitForElementVisible('@checkbox', 10000);
        return this.click('@checkbox');
      },
      selectTheme: function() {
        this.waitForElementVisible('@theme_checkbox', 10000);
        return this.click('@theme_checkbox');
      },
      selectDisable: function() {
        this.waitForElementVisible('@disable_checkbox', 10000);
        return this.click('@disable_checkbox');
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};