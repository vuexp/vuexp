const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    segment0: '.vxp-stack-layout.vxp-stack-layout--vertical > div:nth-child(1) > div > button:nth-child(1)',
    segment1: '.vxp-stack-layout.vxp-stack-layout--vertical > div:nth-child(1) > div > button:nth-child(2)',
    segment2: '.vxp-stack-layout.vxp-stack-layout--vertical > div:nth-child(1) > div > button:nth-child(3)',
    segment3: '.vxp-stack-layout.vxp-stack-layout--vertical > div:nth-child(1) > div > button:nth-child(4)',
    colorSelect: '#segmentedBar__selectedBackgroundColor__select',
    selectedIndex_label: '#segmentedBar__selectedIndex__label',
    segment0_title: '#segmentedBar__title__input__0',
    segment1_title: '#segmentedBar__title__input__1',
    segment2_title: '#segmentedBar__title__input__2',
    segment3_title: '#segmentedBar__title__input__3',
    increment_button: '#segmentedBar__items__increment',
    decrement_button: '#segmentedBar__items__decrement',
    segmen3_button_title: '.vxp-stack-layout--vertical > div:nth-child(1) > div > button:nth-child(4) > span',
    segmen0_button_title: '.vxp-segmentedBar__button--active > span',
    segmen1_button_title: '.vxp-stack-layout--vertical > div:nth-child(1) > div > button:nth-child(2) > span',
    segmen2_button_title: '.vxp-stack-layout--vertical > div:nth-child(1) > div > button:nth-child(3) > span',
    //colors
    red: '#segmentedBar__selectedBackgroundColor__select > option:nth-child(2)',
    green: '#segmentedBar__selectedBackgroundColor__select > option:nth-child(3)',
    blue: '#segmentedBar__selectedBackgroundColor__select > option:nth-child(4)',
    yellow: '#segmentedBar__selectedBackgroundColor__select > option:nth-child(5)',
    cyan: '#segmentedBar__selectedBackgroundColor__select > option:nth-child(6)',
    orange: '#segmentedBar__selectedBackgroundColor__select > option:nth-child(7)',
    gray: '#segmentedBar__selectedBackgroundColor__select > option:nth-child(8)',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@segment0').to.be.visible;

        return this;
      },
      selectAnIndex: function(segment_no) {
        switch (segment_no) {
          case 0:
            return this.click('@segment0');
          case 1:
            return this.click('@segment1');
          case 2:
            return this.click('@segment2');
          case 3:
            return this.click('@segment3');
        }
      },
      setBackgroundColor: function(color) {
        this.waitForElementVisible('@colorSelect', 10000).click('@colorSelect');
        switch (color) {
          case 'red':
            //  return this.setValue('@colorSelect','red');
            return this.click('@red');
          case 'green':
            return this.click('@green');
          case 'blue':
            return this.click('@blue');
          case 'yellow':
            return this.click('@yellow');
          case 'cyan':
            return this.click('@cyan');
          case 'orange':
            return this.click('@orange');
          case 'gray':
            // return this.setValue('@colorSelect','gray');
            return this.click('@gray');
        }
      },
      addItem: function(title) {
        return this.waitForElementVisible('@increment_button', 10000)
          .click('@increment_button')
          .waitForElementVisible('@segment3_title', 10000)
          .clearValue('@segment3_title')
          .setValue('@segment3_title', title);
      },
      changeItemTitle: function(item_no) {
        switch (item_no) {
          case 0:
            return this.clearValue('@segment0_title').setValue('@segment0_title', 'change 0');
          case 1:
            return this.clearValue('@segment1_title').setValue('@segment1_title', 'change 1');
          case 2:
            return this.clearValue('@segment2_title').setValue('@segment2_title', 'change 2');
          case 3:
            return this.clearValue('@segment3_title').setValue('@segment3_title', 'change 3');
        }
      },
      deleteItem: function() {
        return this.waitForElementVisible('@decrement_button', 10000).click('@decrement_button');
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
