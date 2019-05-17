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
  'C13843452 Props:/Name: tabTextColor, Type: Color'() {
    this.currentPage.selectTabTextColor().assert.attributeContains('@tabTwoText', 'style', 'color: green;');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
