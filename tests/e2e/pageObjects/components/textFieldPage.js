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
        this.expect.element('@textInputField').to.be.visible;
        this.expect.element('@hintInputField').to.be.visible;
        this.expect.element('@editableCheckButton').to.be.visible;
        this.expect.element('@maxLenghtInputField').to.be.visible;
        this.expect.element('@secureCheckButton').to.be.visible;
        this.expect.element('@keyboardTypeSelect').to.be.visible;
        this.expect.element('@returnKeyTypeSelect').to.be.visible;
        this.expect.element('@autoCorrectCheck').to.be.visible;
        this.expect.element('@eventOutput').to.be.visible;
        this.expect.element('@datetime_option').to.be.visible;
        this.expect.element('@phone_option').to.be.visible;
        this.expect.element('@number_option').to.be.visible;
        this.expect.element('@url_option').to.be.visible;
        this.expect.element('@email_option').to.be.visible;
        this.expect.element('@retunKeyType').to.be.visible;
        this.expect.element('@done_option').to.be.visible;
        this.expect.element('@next_option').to.be.visible;
        this.expect.element('@go_option').to.be.visible;
        this.expect.element('@search_option').to.be.visible;
        this.expect.element('@send_option').to.be.visible;

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
          return true;
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
