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
    renderedFirstChildren: '#docklayout_thedocklayout div.vxp-dock-layout__right__bottom__right > span',
    renderedSecondChildren: '#docklayout_thedocklayout div.vxp-dock-layout__right__bottom__left__bottom > span',
    renderedThirdChildren: '#docklayout_thedocklayout > div.vxp-dock-layout__left > span',
    renderedFourthChildren: '#docklayout_thedocklayout > div.vxp-dock-layout__right > div.vxp-dock-layout__right__top > span',
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
          .waitForElementVisible('@addChildButton', 3000);
      },

      clickStretchLastChildCheckbox: function() {
        return this.click('@stretchLastChildCheckbox');
      },

      setText: function(text) {
        return this.clearValue('@textInputField').setValue('@textInputField', text);
      },

      setWidth: function(text) {
        return this.clearValue('@widthInputField').setValue('@widthInputField', text);
      },

      setHeight: function(text) {
        return this.clearValue('@heightInputField').setValue('@heightInputField', text);
      },

      setColor: function(text) {
        return this.setValue('@colorSelectbox', text);
      },

      setDock: function(text) {
        return this.setValue('@dockSelectbox', text);
      },

      clickAddChildButton: function() {
        return this.click('@addChildButton');
      },

      clickRemoveAllChildrenButton: function() {
        return this.click('@removeAllChildrenButton');
      },

      checkRenderedChildren: function() {
        return this.waitForElementVisible('@renderedFirstChildren', 3000)
          .waitForElementVisible('@renderedSecondChildren', 3000)
          .waitForElementVisible('@renderedThirdChildren', 3000)
          .waitForElementVisible('@renderedFourthChildren', 3000);
      },

      checkRenderedResult: function() {
        return this.waitForElementVisible('@renderedResultArea', 3000);
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
