const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    textInputField: '#labeldoc-input',
    textWrapCheckBox: '#labeldoc-checkbox-textwrap',
    textOutputField: '#labeldoc-label',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@textInputField').to.be.visible;
        this.expect.element('@textWrapCheckBox').to.be.visible;
        this.expect.element('@textOutputField').to.be.visible;
        return this;
      },

      setTextToLabel: function(text) {
        return this.waitForElementVisible('@textInputField', 10000)
          .clearValue('@textInputField')
          .setValue('@textInputField', text);
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
