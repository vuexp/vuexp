const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    switch_label: '#switcher__value__label',
    switch: '.slider.round',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@switch_label').to.be.visible;
        return this;
      },

      checkTextWrapCheckbox: function() {
        this.waitForElementVisible('@textWrapCheckBox', 10000);
        if (this.verify.attributeContains('@textOutputField', 'style', 'white-space: nowrap;')) {
          return this.click('@textWrapCheckBox');
        }
        return 'textWrap already selected';
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
