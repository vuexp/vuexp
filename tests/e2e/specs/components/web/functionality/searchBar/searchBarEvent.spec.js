module.exports = {
  tags: ['component', 'searchBar'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.searchBarPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/search-bar.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843238 Event / Name : textChange'() {
    this.currentPage.setSearchTextToSearchBar('nightwatch').assert.containsText('@showLastEventFields', 'textChangeEvent');
  },
  'C13843240 Event / Name :submit'() {
    this.currentPage
      .setSearchTextToSearchBar('nightwatch')
      .clickSubmitButton()
      .assert.containsText('@showLastEventFields', 'submit');
  },
  'C13843241 Event / Name :clear'() {
    this.currentPage
      .setSearchTextToSearchBar('nightwatch')
      .clickClearButton()
      .assert.containsText('@showLastEventFields', 'clear');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
