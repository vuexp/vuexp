const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    vxpTextfield: 'input[type=email]',
    vxpTextfield2: '#VxpTextField input',
    eventOutput: '#VxpTextField_eventOutput_Label',
    disabled_checkbox: '#VxpTextField_disabled_checkbox',
    error_name: '#VxpTextField_errors_textfield',
    error_label: '#VxpTextField div span',
    error_label2: '#VxpTextField div span:nth-child(2)',
    error_label3: '#VxpTextField div span:nth-child(3)',
    add_error: '#VxpTextField_add_error_button',
    clear_error: '#VxpTextField_clear_errors_button',
    text_input: '#VxpTextField_text_textfield',
    //keyboard type elements
    keyboardType: '#VxpTextField_keyboardType_select',
    datetime: '#VxpTextField_keyboardType_dateTime_option',
    number: '#VxpTextField_keyboardType_number_option',
    phone: '#VxpTextField_keyboardType_phone_option',
    email: '#VxpTextField_keyboardType_email_option',
    url: '#VxpTextField_keyboardType_url_option',
    //returnkeyType elements
    done: '#VxpTextField_returnKeyType_done_option',
    next: '#VxpTextField_returnKeyType_next_option',
    go: '#VxpTextField_returnKeyType_go_option',
    search: '#VxpTextField_returnKeyType_search_option',
    send: '#VxpTextField_returnKeyType_send_option',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@VxpTextField').to.be.visible;

        return this;
      },

      setTextToText: function(text) {
        this.waitForElementVisible('@text_input', 10000).clearValue('@text_input');
        return this.setValue('@text_input', text);
      },
      setTextToTextfield: function(text) {
        this.waitForElementVisible('@vxpTextfield', 10000).clearValue('@vxpTextfield');
        return this.setValue('@vxpTextfield', text);
      },

      setDisabled: function() {
        this.waitForElementVisible('@disabled_checkbox', 10000);
        if (this.expect.element('@vxpTextfield').to.not.have.attribute('disabled')) {
          return this.click('@disabled_checkbox');
        }
        return 'already disabled';
      },
      setEnabled: function() {
        this.waitForElementVisible('@disabled_checkbox', 10000);
        if (this.expect.element('@vxpTextfield').to.have.attribute('disabled')) {
          return this.click('@disabled_checkbox');
        }
        return 'already enabled';
      },
      fillTheErrorName: function(text) {
        this.waitForElementVisible('@error_name', 10000)
          .clearValue('@error_name')
          .setValue('@error_name', text)
          .waitForElementVisible('@add_error', 10000);
        return this.click('@add_error');
      },
      clearErrors: function() {
        this.waitForElementVisible('@clear_error', 10000);
        return this.click('@clear_error');
      },
      setBlur: function() {
        this.waitForElementVisible('@text_input', 10000);
        return this.click('@text_input');
      },
      focus: function() {
        this.waitForElementVisible('@vxpTextfield', 10000).click('@text_input');
        return this.click('@vxpTextfield');
      },
      selectKeyboardTypeAsDatetime: function() {
        this.click('@datetime');
        this.waitForElementVisible('@vxpTextfield2', 3000);
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
