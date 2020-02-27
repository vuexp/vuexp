const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    textview: '#textview textarea',
    textInputField: '#textview__text__input',
    hintInputField: '#textview__hint__input',
    editableCheckButton: '#textview__editable__input',
    maxLenghtInputField: '#textview___maxlength__input',
    autoCorrectCheck: '#textview__autocorrect__input',
    eventOutput: '#textview__eventOutput__label',

    retunKeyType: '#textview__returnKeyType__select',
    done: '#TextView_returnKeyType_done_option',
    next: '#TextView_returnKeyType_next_option',
    go: '#TextView_returnKeyType_go_option',
    search: '#TextView_returnKeyType_search_option',
    send: '#TextView_returnKeyType_send_option',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@textview').to.be.visible;

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
        return this.waitForElementVisible('@textview', 10000)
          .clearValue('@textview')
          .setValue('@textview', text);
      },
      checkSecure: function() {
        this.waitForElementVisible('@textview', 10000);
        if (this.verify.attributeContains('@textview', 'type', 'password')) {
          return true;
        }
      },
      uncheckSecure: function() {
        if (this.verify.attributeContains('@textview', 'type', 'email')) {
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
        this.waitForElementVisible('@textview', 10000).click('@textview');
        return this.click('@textInputField');
      },
      focus: function() {
        this.waitForElementVisible('@textview', 10000);
        return this.click('@textview');
      },
      selectKeyboardTypeAsDatetime: function() {
        this.click('@datetime');
        this.waitForElementVisible('@textview', 3000);
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
