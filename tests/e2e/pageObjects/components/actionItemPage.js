const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    shareIconSelectBox: '#actionitem__shareicon__select',
    shareIconSelectBoxOption: 'option[value="fa-share-alt"]',
    actionBar: 'div[class="vxp-action-bar"]',
    deleteIconSelectBox: '#actionitem__deleteicon__select',
    deleteIconSelectBoxOption: 'option[value="fa-window-close"]',
    actionBarShareIcon: 'span[class="vxp-action-item__icon fa fa-share"]',
    actionBarDeleteIcon: 'span[class="vxp-action-item__icon fa fa-close"]',
    actionBarShareButton: 'span[class="vxp-action-item__icon fa fa-share-alt"]',
    actionBarDeleteButton: '.vxp-stack-layout.vxp-stack-layout--vertical > div.vxp-action-bar > div:nth-child(3) > span',
    shareButtonLabel: '#actionitem__shareicon__label',
    deleteButtonLabel: '#actionitem__deleteicon__label',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@shareIconSelectBox').to.be.visible;
        this.expect.element('@actionBar').to.be.visible;
        this.expect.element('@deleteIconSelectBox').to.be.visible;

        return this;
      },

      selectShareIconOption: function() {
        return this.waitForElementVisible('@shareIconSelectBox', 30000)
          .click('@shareIconSelectBox')
          .waitForElementVisible('@shareIconSelectBoxOption', 30000)
          .click('@shareIconSelectBoxOption');
      },
      selectDeleteIconOption: function() {
        return this.waitForElementVisible('@deleteIconSelectBox', 30000)
          .click('@deleteIconSelectBox')
          .waitForElementVisible('@deleteIconSelectBoxOption', 30000)
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
