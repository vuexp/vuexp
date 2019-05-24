const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    buttonComponent: 'button[id="button"]',
    buttonTextInput: '#button_text_input',
    buttonActionLabel: '#button_label',
    textWrapSelectBox: '#button_textWrap_selectbox',
    buttonWidth: '#button_width_input',
    buttonHeight: '#button_height_input',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@buttonComponent').to.be.visible;
        this.expect.element('@buttonTextInput').to.be.visible;
        this.expect.element('@textWrapSelectBox').to.be.visible;
        this.expect.element('@buttonWidth').to.be.visible;
        this.expect.element('@buttonHeight').to.be.visible;
        return this;
      },
      setTextToButton: function(text) {
        return this.waitForElementVisible('@buttonTextInput', 10000)
          .clearValue('@buttonTextInput')
          .setValue('@buttonTextInput', text);
      },
      setButtonWidth: function(text) {
        return this.waitForElementVisible('@buttonWidth', 10000)
          .clearValue('@buttonWidth')
          .setValue('@buttonWidth', text);
      },
      setButtonHeight: function(text) {
        return this.waitForElementVisible('@buttonHeight', 10000)
          .clearValue('@buttonHeight')
          .setValue('@buttonHeight', text);
      },
      checkTextWrapSelectBox: function(width, height) {
        this.waitForElementVisible('@textWrapSelectBox', 10000);
        if (this.verify.attributeContains('@buttonComponent', 'style', 'white-space: nowrap; width: ' + width + 'px; height: ' + height + 'px;')) {
          return this.click('@textWrapSelectBox');
        }
        return 'textWrap already selected';
      },
      uncheckTextWrapSelectBox: function(width, height) {
        this.waitForElementVisible('@textWrapSelectBox', 10000);
        if (this.verify.attributeContains('@buttonComponent', 'style', 'white-space: normal; width: ' + width + 'px; height: ' + height + 'px;')) {
          return this.click('@textWrapSelectBox');
        }
        return 'textWrap already unselected';
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
