const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    linkLabel: '#linkButton',
    linkWithoutUrlLabel: '#linkButtonWithOutUrl',
    textInputField: '#linkButton__text__textfield',
    externalUrlInputField: '#linkButton__externalUrl__textfield',
    eventSpan: '#linkButton__tap__eventLog',
    disableClickingCheckbox: '#linkButton__disable__checkbox',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        return this.waitForElementVisible('@linkLabel', 3000)
          .waitForElementVisible('@linkWithoutUrlLabel', 3000)
          .waitForElementVisible('@textInputField', 3000)
          .waitForElementVisible('@externalUrlInputField', 3000)
          .waitForElementVisible('@eventSpan', 3000)
          .waitForElementVisible('@disableClickingCheckbox', 3000);
      },

      clickLinkLabel: function() {
        return this.click('@linkLabel');
      },

      clickLinkWithoutUrlLabel: function() {
        return this.click('@linkWithoutUrlLabel');
      },

      setLinkText: function(text) {
        return this.clearValue('@textInputField').setValue('@textInputField', text);
      },

      setExternalUrlText: function(text) {
        return this.clearValue('@externalUrlInputField').setValue('@externalUrlInputField', text);
      },

      clickDisableClickingCheckbox: function() {
        return this.click('@disableClickingCheckbox');
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
