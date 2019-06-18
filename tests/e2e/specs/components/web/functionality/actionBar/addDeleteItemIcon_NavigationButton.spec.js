module.exports = {
  tags: ['component', 'actionItem'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.actionBarPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/action-bar.html')
      .waitForElementVisible('body', 100000)
      .customPerform(function() {
        done();
      });
  },
  'C13850488 Add ActionItems and Check ActionItem Label'() {
    this.currentPage.selectActionItemIcons();
    this.client.pause(3000);
    this.currentPage.waitForElementVisible('@actionBarTwo', 2000);
    this.currentPage.checkScreenshot('@actionBarTwo').assert.containsText('@deleteIconLabel', 'Delete Icon Clicked');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
