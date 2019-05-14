const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    searchTextInputField: '.vxp-searchbar__search-input',
    hintTextInputField: '#searchbar__hint__input',
    textOutputField: '#searchbar__text__input',
    setHintColorDropdown: '#searchbar__textFieldHintColor__input',
    setBackgroundColorDropdown: '#searchbar__textFieldBackgroundColor__input',
    showLastEventFields: '.vxp-label.form-input',
    submitButton: '.vxp-label.vxp-searchbar__search-icon',
    clearButton: '.vxp-label.vxp-searchbar__clear-icon',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@searchTextInputField').to.be.visible;
        this.expect.element('@hintTextInputField').to.be.visible;
        this.expect.element('@textOutputField').to.be.visible;
        this.expect.element('@setHintColor').to.be.visible;
        this.expect.element('@setBackgroundColor').to.be.visible;
        this.expect.element('@showLastEventFields').to.be.visible;
        return this;
      },
      setHintToSearchBar: function(text) {
        return this.waitForElementVisible('@hintTextInputField', 10000)
          .clearValue('@hintTextInputField')
          .setValue('@hintTextInputField', text);
      },
      setSearchTextToSearchBar: function(text) {
        return this.waitForElementVisible('@searchTextInputField', 10000)
          .clearValue('@searchTextInputField')
          .setValue('@searchTextInputField', text);
      },
      setBackgroundColor: function() {
        return this.waitForElementVisible('@setBackgroundColorDropdown', 10000)
          .click('@setBackgroundColorDropdown')
          .waitForElementVisible('#searchbar__textFieldHintColor__input option:nth-of-type(1)')
          .click('#searchbar__textFieldHintColor__input option:nth-of-type(1)')
          .click('@setBackgroundColors:nth-of-type(1)');
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
