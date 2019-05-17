const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    frame_label: '#Frame_label',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@frame_label').to.be.visible;
        return this;
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
