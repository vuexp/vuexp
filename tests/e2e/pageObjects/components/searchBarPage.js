const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    hintTextInputField: '#searchbar__hint__input',
    searchTextInputField: '#searchbar__text__input',
    setHintColor: '#searchbar__textFieldHintColor__input',
    setBackgroundColor: '#searchbar__textFieldBackgroundColor__input',
    showLastEventFields: '.vxp-label.form-input',
    submitButton: '.vxp-label.vxp-searchbar__search-icon',
    clearButton: '.vxp-label.vxp-searchbar__clear-icon',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@hintTextInputField').to.be.visible;
        this.expect.element('@searchTextInputField').to.be.visible;
        this.expect.element('@setHintColor').to.be.visible;
        this.expect.element('@setHintColor').to.be.visible;
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

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
