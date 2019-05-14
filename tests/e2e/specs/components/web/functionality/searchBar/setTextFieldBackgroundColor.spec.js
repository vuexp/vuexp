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
  'C13843234 Set color to Text Field Background Color'() {
    this.currentPage.setBackgroundColor();
    this.client.pause('30000');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
