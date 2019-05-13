const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    navigationButton: 'span[class="vxp-action-item__icon fa fa-arrow-left"]',
    navigationButtonOption: 'span[class="vxp-action-item__icon fa fa-angle-left"]',
    webIconSelectbox: '#navigationbutton__webicon__select',
    webIconSelectBoxOption: 'option[value="fa-angle-left"]',
    backIconLabel: '#navigationbutton__backicon__label',
    actionBar: 'div[class="vxp-action-bar"]',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@navigationButton').to.be.visible;
        this.expect.element('@webIconSelectbox').to.be.visible;
        return this;
      },
      selectWebIconOption: function() {
        return this.click('@webIconSelectbox')
          .waitForElementVisible('@webIconSelectBoxOption', 10000)
          .click('@webIconSelectBoxOption');
      },
      clickBackButton: function() {
        return this.click('@navigationButtonOption');
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
