module.exports = {
  tags: ['component', 'tabView'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.tabViewPage();
    this.currentPage
      .navigate('http://localhost:8080/components/tabview.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843456 TabViewItem Props:/Name: id, Type: String'() {
    this.currentPage.setItemId('7').assert.attributeEquals('@idLabel', 'id', '7');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
