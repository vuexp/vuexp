const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    srcInput: '#WebView_src_textfield input',
    htmlInput: '#WebView_html_textfield input',
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

      addSrc: function(text) {
        return this.waitForElementVisible('@srcInput', 10000).setValue('@srcInput', text);
      },
      addHtml: function(text2) {
        return this.waitForElementVisible('@htmlInput', 10000).setValue('@htmlInput', text2);
      },
      loadStartedPage: function(text3) {
        return this.waitForElementVisible('@srcInput', 10000).setValue('@srcInput', text3);
      },
      loadFinishedPage: function(text4) {
        return this.waitForElementVisible('@srcInput', 10000).setValue('@srcInput', text4);
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
