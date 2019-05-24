const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    actionBar: '#Page_actionBarHidden_input',
    actionBar_label: '#Page_actionBarHidden_label',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@actionBar').to.be.visible;
        this.expect.element('@actionBar_label').to.be.visible;
        return this;
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
