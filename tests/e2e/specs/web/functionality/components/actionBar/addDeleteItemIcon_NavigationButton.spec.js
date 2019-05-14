module.exports = {
  tags: ['component', 'actionItem'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.actionBarPage();
    this.currentPage
      .navigate('http://localhost:8080/components/action-bar.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'Add ActionItems and Check ActionItem Label'() {
    this.currentPage
      .selectActionItemIcons()
      .addNavigationButton()
      .checkScreenshot('@actionBarTwo')
      .assert.containsText('@deleteIconLabel', 'Delete Icon Clicked');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
