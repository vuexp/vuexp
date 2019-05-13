const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    titleInputField: '#actionbar__title__input',
    titleLabelField: 'span[class="vxp-action-bar__title"]',
    shareIconSelectBox: '#actionbar__shareicon__select',
    shareIconSelectBoxOption: 'option[value="fa-share-alt"]',
    deleteIconSelectBox: '#actionbar__deleteicon__select',
    deleteIconSelectBoxOption: 'option[value="fa-window-close"]',
    actionBarShareIcon: 'span[class="vxp-action-item__icon fa fa-share-alt"]',
    actionBarDeleteIcon: 'span[class="vxp-action-item__icon fa fa-window-close"]',
    actionItemButton: 'button[class="vxp-button ➕ Add Action Item"]',
    navigationButton: 'button[class="vxp-button ➕ Add Navigation Button"]',
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
      changeShareIconOption: function() {
        return this.click('@shareIconSelectBox')
          .waitForElementVisible('@shareIconSelectBoxOption', 10000)
          .click('@shareIconSelectBoxOption');
      },
      changeDeleteIconOption: function() {
        return this.click('@deleteIconSelectBox')
          .waitForElementVisible('@deleteIconSelectBoxOption', 10000)
          .click('@deleteIconSelectBoxOption');
      },
      clickShareButton: function() {
        return this.click('@actionBarShareButton');
      },
      clickDeleteButton: function() {
        return this.click('@actionBarDeleteButton');
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
