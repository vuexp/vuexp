const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    scrollViewComponent: '#scrollview_container',
    scrollBarSelectBox: 'input[aria-label="Scroll Bar Enabled"]',
    horizontalScrollSelectBox: 'input[aria-label="Horizontal Scrolling"]',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@scrollViewComponent').to.be.visible;
        this.expect.element('@scrollBarSelectBox').to.be.visible;
        this.expect.element('@horizontalScrollSelectBox').to.be.visible;
        return this;
      },
      checkHorizontalScrollSelectBox: function() {
        this.waitForElementVisible('@horizontalScrollSelectBox', 10000);
        if (this.verify.attributeContains('@scrollViewComponent', 'class', 'scroll-view__vertical vxp-scrollview vxp-scrollview--vertical')) {
          return this.click('@horizontalScrollSelectBox');
        }
        return 'Horizontal Scrolling already selected';
      },
      uncheckHorizontalScrollSelectBox: function() {
        this.waitForElementVisible('@horizontalScrollSelectBox', 10000);
        if (this.verify.attributeContains('@scrollViewComponent', 'class', 'scroll-view__vertical vxp-scrollview vxp-scrollview--horizontal')) {
          return this.click('@horizontalScrollSelectBox');
        }
        return 'Horizontal Scrolling already unselected';
      },
      checkScrollBarSelectBox: function() {
        this.waitForElementVisible('@scrollBarSelectBox', 10000);
        if (this.verify.attributeContains('@scrollViewComponent', 'class', 'scroll-view__vertical vxp-scrollview vxp-scrollview--vertical--hide')) {
          return this.click('@scrollBarSelectBox');
        }
        return 'Scroll Bar already enabled';
      },
      uncheckScrollBarSelectBox: function() {
        this.waitForElementVisible('@scrollBarSelectBox', 10000);
        if (this.verify.attributeContains('@scrollViewComponent', 'class', 'scroll-view__vertical vxp-scrollview vxp-scrollview--vertical')) {
          return this.click('@scrollBarSelectBox');
        }
        return 'Scroll Bar already disabled';
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
