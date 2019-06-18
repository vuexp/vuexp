module.exports = {
  tags: ['component', 'actionItem'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.actionItemPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/action-item.html')
      .waitForElementVisible('body', 100000)
      .customPerform(function() {
        done();
      });
  },
  'C13843424 Props:/Name: webIcon, Type:string'() {
    this.currentPage
      .selectDeleteIconOption()
      .selectShareIconOption()
      .checkScreenshot('@actionBar');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
