module.exports = {
  tags: ['component', 'tabView'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.tabViewPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/tabview.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843457 TabViewItem Props:/Name: title, Type: String'() {
    this.currentPage.setTitle('gokce').assert.containsText('@titleLabel', 'gokce');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
