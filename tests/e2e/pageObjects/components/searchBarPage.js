const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    searchBarBackground: '#searchbar__docs',
    searchTextInputField: '.vxp-searchbar__search-input',
    hintTextInputField: '#searchbar__hint__input',
    textOutputField: '#searchbar__text__input',

    hintColorDropdown: '#searchbar__textFieldHintColor__input',
    hintColor_blue: '#searchbar__textFieldHintColor__input option[value="blue"]',

    backgroundColorDropdown: '#searchbar__textFieldBackgroundColor__input',
    backgroundColor_red: '#searchbar__textFieldBackgroundColor__input option[value="red"]',
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
        this.expect.element('@hintColorDropdown').to.be.visible;
        this.expect.element('@backgroundColorDropdown').to.be.visible;
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
        return this.waitForElementVisible('@backgroundColorDropdown', 10000)
          .click('@backgroundColorDropdown')
          .waitForElementVisible('@backgroundColor_red', 10000)
          .click('@backgroundColor_red');
      },
      setHintColor: function() {
        return this.waitForElementVisible('@hintColorDropdown', 10000)
          .click('@hintColorDropdown')
          .waitForElementVisible('@hintColor_blue', 10000)
          .click('@hintColor_blue');
      },
      clickSubmitButton() {
        return this.waitForElementVisible('@submitButton', 10000).click('@submitButton');
      },
      clickClearButton() {
        return this.waitForElementVisible('@clearButton', 10000).click('@clearButton');
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
