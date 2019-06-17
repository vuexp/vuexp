const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    textFieldInputField: '#TextField',
    textInputField: '#TextField_text_textfield',
    hintInputField: '#TextField_hint_textfield',
    editableCheckButton: '#TextField_editable_input',
    maxLenghtInputField: '#TextField_maxLength_input',
    secureCheckButton: '#TextField_secure_input',
    keyboardTypeSelect: '#TextField_keyboardType_select',
    returnKeyTypeSelect: '#TextField_returnKeyType_select',
    autoCorrectCheck: '#TextField_autocorrect_input',
    eventOutput: '#TextField_eventOutput_Label',

    datetime_option: '#TextField_keyboardType_dateTime_option',
    phone_option: '#TextField_keyboardType_phone_option',
    number_option: '#TextField_keyboardType_number_option',
    url_option: '#TextField_keyboardType_url_option',
    email_option: '#TextField_keyboardType_email_option',

    retunKeyType: '#TextField_returnKeyType_select',
    done_option: '#TextField_returnKeyType_done_option',
    next_option: '#TextField_returnKeyType_next_option',
    go_option: '#TextField_returnKeyType_go_option',
    search_option: '#TextField_returnKeyType_search_option',
    send_option: '#TextField_returnKeyType_send_option',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@textFieldInputField').to.be.visible;
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
        this.waitForElementVisible('@textFieldInputField', 10000);
        if (this.verify.attributeContains('@textFieldInputField', 'style', 'disabled: disabled;')) {
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
        return this.waitForElementVisible('@textFieldInputField', 10000)
          .clearValue('@textFieldInputField')
          .setValue('@textFieldInputField', text);
      },
      checkSecure: function() {
        this.waitForElementVisible('@textFieldInputField', 10000);
        if (this.verify.attributeContains('@textFieldInputField', 'type', 'password')) {
          return this.click('@secureCheckButton');
        }
      },
      uncheckSecure: function() {
        if (this.verify.attributeContains('@textFieldInputField', 'type', 'email')) {
          return this.click('@secureCheckButton');
        }
      },
      selectKeyBoardType: function(type) {
        switch (type) {
          case 'datetime':
            this.click('@datetime_option');
            break;
          case 'phone':
            this.click('@phone_option');
            break;
          case 'number':
            this.click('@number_option');
            break;
          case 'url':
            this.click('@url_option');
            break;
          case 'email':
            this.click('@email_option');
            break;
        }
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
