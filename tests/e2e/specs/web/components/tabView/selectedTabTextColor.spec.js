module.exports = {
  tags: ['component', 'tabView'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.tabviewpage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/tabview.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843454 Props:/Name: selectedTabTextColor, Type: Color'() {
    this.currentPage.selectSelectedTabTextColor().assert.attributeContains('@selectedTab', 'style', 'color: blue;');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
