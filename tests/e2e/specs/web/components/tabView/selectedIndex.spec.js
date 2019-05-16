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
  'C13843451 Props:/Name: selectedIndex, Type: Number'() {
    this.currentPage.selectTab().assert.containsText('@selectedIndexLabel', 'Selected Index: 1');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
