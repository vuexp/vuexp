const checkScreenshot = require('../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    titleInputField: '#actionbar__title__input',
    titleLabelField: 'span[class="vxp-action-bar__title"]',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@titleInputField').to.be.visible;
        return this;
      },
      setTitletoInput: function(text) {
        return this.waitForElementVisible('@titleInputField', 10000)
          .clearValue('@titleInputField')
          .setValue('@titleInputField', text);
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
