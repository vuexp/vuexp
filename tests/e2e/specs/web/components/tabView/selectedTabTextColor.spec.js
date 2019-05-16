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
  'C13843454  Props:/Name: selectedTabTextColor, Type: Color'() {
    this.browser.execute("document.getElementById('tabView__tabTextColor__input').setAttribute('value', '#ff80c0')");
    this.currentPage.assert.containsText('@tabTextColorLabel', '#ff80c0');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
