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
  'C13843233 Props /Name:hint, type : String'() {
    this.currentPage.setHintToSearchBar('nightwatch').verify.attributeContains('@searchTextInputField', 'placeholder', 'nightwatch');
  },
  'C13843232 Props /Name:text, type : String'() {
    this.currentPage.setSearchTextToSearchBar('nightwatch').verify.attributeContains('@textOutputField', 'value', 'nightwatch');
  },
  'C13843234 Props /Name:textFieldBackgroundColor, type : String'() {
    this.currentPage.setBackgroundColor().verify.attributeContains('@searchBarBackground', 'style', 'background-color: red;');
  },
  'C13843236 Props /Name:textFieldHintColor, type : String'() {
    this.currentPage.setHintColor().verify.attributeContains('@searchTextInputField', 'style', '--hint-color:blue;');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
