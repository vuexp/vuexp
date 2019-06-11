const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    stretchLastChildCheckbox: '#docklayout_stretchlastchild_cb',
    textInputField: '#docklayout_childname_input',
    widthInputField: '#docklayout_childtwidth_input',
    heightInputField: '#docklayout_childheight_input',
    colorSelectbox: '#docklayout_childcolor_selectbox',
    dockSelectbox: '#docklayout_childdock_selectbox',
    addChildButton: '#docklayout_addchild_button',
    removeAllChildrenButton: '#docklayout_removeallchildren_button',
    renderedResultArea: 'div.nudoc-example__content > div > div:nth-child(3)',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        return this.waitForElementVisible('@stretchLastChildCheckbox', 3000)
          .waitForElementVisible('@textInputField', 3000)
          .waitForElementVisible('@widthInputField', 3000)
          .waitForElementVisible('@heightInputField', 3000)
          .waitForElementVisible('@colorSelectbox', 3000)
          .waitForElementVisible('@dockSelectbox', 3000)
          .waitForElementVisible('@addChildButton', 3000)
          .waitForElementVisible('@renderedResultArea', 3000);
      },

      clickStretchLastChildCheckbox: function() {
        return this.click('@stretchLastChildCheckbox');
      },

      clickAddChildButton: function() {
        return this.click('@addChildButton');
      },

      clickRemoveAllChildrenButton: function() {
        return this.click('@removeAllChildrenButton');
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
