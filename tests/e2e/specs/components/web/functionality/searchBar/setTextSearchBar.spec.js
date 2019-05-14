module.exports = {
  tags: ['component', 'searchBar'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.searchBarPage();
    this.currentPage
      .navigate(client.globals.defaultDevUrl + 'components/search-bar.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843232 Set text to SearchBar'() {
    this.currentPage.setSearchTextToSearchBar('nightwatch').verify.attributeContains('@textOutputField', 'value', 'nightwatch');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
