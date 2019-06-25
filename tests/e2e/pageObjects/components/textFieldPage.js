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

    datetime: '#TextField_keyboardType_dateTime_option',
    phone: '#TextField_keyboardType_phone_option',
    number: '#TextField_keyboardType_number_option',
    url: '#TextField_keyboardType_url_option',
    email: '#TextField_keyboardType_email_option',

    retunKeyType: '#TextField_returnKeyType_select',
    done: '#TextField_returnKeyType_done_option',
    next: '#TextField_returnKeyType_next_option',
    go: '#TextField_returnKeyType_go_option',
    search: '#TextField_returnKeyType_search_option',
    send: '#TextField_returnKeyType_send_option',
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
        return this.waitForElementVisible('@editableCheckButton', 10000).click('@editableCheckButton');
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
      blur: function() {
        this.waitForElementVisible('@textFieldInputField', 10000).click('@textFieldInputField');
        return this.click('@textInputField');
      },
      focus: function() {
        this.waitForElementVisible('@textFieldInputField', 10000);
        return this.click('@textFieldInputField');
      },

      selectKeyboardTypeAsDatetime: function() {
        this.click('@datetime');
        this.waitForElementVisible('@textFieldInputField', 3000);
        return this;
      },
      selectKeyboardType: function(type) {
        switch (type) {
          case 'phone':
            return this.click('@phone');
          case 'number':
            return this.click('@number');
          case 'url':
            return this.click('@url');
          case 'email':
            return this.click('@email');
        }
      },
      selectReturnkeyType: function(type) {
        switch (type) {
          case 'done':
            return this.click('@done');
          case 'next':
            return this.click('@next');
          case 'go':
            return this.click('@go');
          case 'search':
            return this.click('@search');
          case 'send':
            return this.click('@send');
        }
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
