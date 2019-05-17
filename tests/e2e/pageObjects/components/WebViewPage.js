const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    srcInput: '#WebView_src_textfield',
    htmlInput: '#WebView_html_textfield',
    eventLabel: '#WebView_eventOutput_Label',
    image: '#app > div > div.page > div.content > div.nudoc-example > div.nudoc-example__content',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@srcInput').to.be.visible;
        this.expect.element('@htmlInput').to.be.visible;
        return this;
      },

      addSrc: function() {
        return this.waitForElementVisible('@srcInput', 10000)
          .setValue('@srcInput', 'http://nativescript-vue.org/')
          .checkScreenshot('@image');
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
