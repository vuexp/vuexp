const checkScreenshot = require('../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    segmentedBarFirstInput: '#segmentedBar__title__input__0',
    segmentedBarSecondInput: '#segmentedBar__title__input__1',
    segmentedBarBackgroundColor: '#segmentedBar__selectedBackgroundColor__label',
    incrementItemButton: '#segmentedBar__items__increment',
    decrementItemButton: '#segmentedBar__items__decrement',
    addedSegmentedBarItem: '.vxp-stack-layout.vxp-stack-layout--vertical > div:nth-child(1) > div > button:nth-child(4)',
    segmentedBarTwo: '.nudoc-example__content > div.vxp-stack-layout.vxp-stack-layout--vertical > div:nth-child(1) > div > button:nth-child(2)',
    selectedIndexLabel: '#segmentedBar__selectedIndex__label',
    activeSegmentedBarItem:
      '.vxp-stack-layout.vxp-stack-layout--vertical > div:nth-child(1) > div > button.vxp-segmentedBar__button.vxp-segmentedBar__button--active',
    segmentedBarImage: '.content > div:nth-child(4) > div.nudoc-example__content > div.vxp-stack-layout.vxp-stack-layout--vertical > div:nth-child(1)',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@segmentedBarFirstInput').to.be.visible;
        this.expect.element('@segmentedBarSecondInput').to.be.visible;
        this.expect.element('@segmentedBarBackgroundColor').to.be.visible;
        this.expect.element('@incrementItemButton').to.be.visible;
        this.expect.element('@decrementItemButton').to.be.visible;
        return this;
      },
      setItemsofSegmentedBar: function(text) {
        return this.waitForElementVisible('@segmentedBarFirstInput', 30000)
          .clearValue('@segmentedBarFirstInput')
          .setValue('@segmentedBarFirstInput', text)
          .waitForElementVisible('@segmentedBarSecond', 30000)
          .clearValue('@segmentedBarSecondInput')
          .setValue('@segmentedBarSecondInput', text);
      },
      selectBackgroundColor: function(color) {
        return this.waitForElementVisible('@segmentedBarBackgroundColor', 30000).setValue('@segmentedBarSecondInput', color);
      },
      addItemtoSegmentedBar: function() {
        return this.waitForElementVisible('@incrementItemButton', 30000).click('@incrementItemButton');
      },
      deleteItemFromSegmentedBar: function() {
        return this.waitForElementVisible('@decrementItemButton', 30000).click('@decrementItemButton');
      },
      changeSelectedIndex: function() {
        return this.waitForElementVisible('@segmentedBarTwo', 30000).click('@segmentedBarTwo');
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
