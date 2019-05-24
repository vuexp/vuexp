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
  'C13843456 TabViewItem Props:/Name: id, Type: String'() {
    this.currentPage.setItemId('444555').assert.attributeContains('@idLabel', 'id', '444555');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
