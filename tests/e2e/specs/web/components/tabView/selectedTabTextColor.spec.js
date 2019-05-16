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
    this.client.execute("document.getElementById('tabView__tabTextColor__input').setAttribute('value', '#ff80c0')");
    this.client.execute("document.getElementById('tabView__tabTextColor__input').dispatchEvent(new Event('input'))").pause(200000);
    this.currentPage.click('@selectedIndexLabel');
    this.currentPage.assert.attributeContains(".vxp-tab-view__header button[role='tab']:nth-child(2) span", 'style', 'color: rgb(255, 128, 192);');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
