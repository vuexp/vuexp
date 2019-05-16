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
  'C13843452 Props:/Name: tabTextColor, Type: Color'() {
    this.browser.execute("document.getElementById('tabView__tabTextColor__input').setAttribute('value', '#ff80c0')");
    this.currentPage.assert.containsText('@tabTextColorLabel', '#ff80c0');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
