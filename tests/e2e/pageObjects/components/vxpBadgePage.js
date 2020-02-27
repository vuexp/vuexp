const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    vxpBadge: '#vxp-badge',
    badge_count: '#vxp-badge__badge input',
    width: '#vxp-badge__width input',
    height: '#vxp-badge__height input',
    theme: '#vxp-badge__theme input',
    primary: '#vxp-badge__theme > ul > li.active',
    secondary: '#vxp-badge__theme > ul > li:nth-child(2)',
    alert: '#vxp-badge__theme > ul > li:nth-child(3)',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@vxpBadge').to.be.visible;

        return this;
      },
      setBadgeCount: function(number) {
        this.waitForElementVisible('@badge_count', 10000).clearValue('@badge_count');
        return this.setValue('@badge_count', number);
      },
      setWidth: function(number) {
        this.waitForElementVisible('@width', 10000).clearValue('@width');
        return this.setValue('@width', number);
      },
      setHeight: function(number) {
        this.waitForElementVisible('@height', 10000).clearValue('@height');
        return this.setValue('@height', number);
      },
      selectTheme: function(theme) {
        this.waitForElementVisible('@theme', 10000).click('@theme');
        switch (theme) {
          case 'primary':
            return this.click('@primary');
          case 'secondary':
            return this.click('@secondary');
          case 'alert':
            return this.click('@alert');
        }
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
