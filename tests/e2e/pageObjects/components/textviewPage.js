const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    textview: '#TextView textarea',
    textInputField: '#TextView_text_textfield',
    hintInputField: '#TextView_hint_textfield',
    editableCheckButton: '#TextView_editable_input',
    maxLenghtInputField: '#TextView_maxLength_textfield',
    returnKeyTypeSelect: '#TextView_returnKeyType_select',
    autoCorrectCheck: '#TextView_autocorrect_input',
    eventOutput: '#VxpTextField_eventOutput_Label',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@textview').to.be.visible;
        this.expect.element('@editableCheckButton').to.be.visible;
        return this;
      },

      setTextToText: function(text) {
        return this.waitForElementVisible('@textInputField', 10000)
          .clearValue('@textInputField')
          .setValue('@textInputField', text);
      },
      setTextToHint: function(text) {
        return this.waitForElementVisible('@hintInputField', 10000)
          .clearValue('@hintInputField')
          .setValue('@hintInputField', text);
      },
      checkEditableTextField: function() {
        this.waitForElementVisible('@textview', 10000);
        if (this.verify.attributeContains('@textview', 'style', 'disabled: disabled;')) {
          return 'false';
        }
        return 'true';
      },
      setNumberToMaxLenght: function(lenght) {
        return this.waitForElementVisible('@maxLenghtInputField', 10000)
          .clearValue('@maxLenghtInputField')
          .setValue('@maxLenghtInputField', lenght);
      },
      setTextToTextField: function(text) {
        return this.waitForElementVisible('@textview', 10000)
          .clearValue('@textview')
          .setValue('@textview', text);
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
