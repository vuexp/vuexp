const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    showDrawer: '#VxpSideDrawer_show-button_button',
    closeDrawer: '#VxpSideDrawer_close-button_button',
    event_label: '#VxpSideDrawer_open-closed-status_label',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@showDrawer').to.be.visible;

        return this;
      },
      openSideMenu: function() {
        this.waitForElementVisible('@showDrawer', 1000);
        return this.click('@showDrawer');
      },
      closeSideMenu: function() {
        this.waitForElementVisible('@closeDrawer', 1000);
        return this.click('@closeDrawer');
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
