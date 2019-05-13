module.exports = {
  tags: ['actionItem'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.actionItemPage();
    this.currentPage
      .navigate('http://localhost:8080/components/action-item.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'Check ActionItem Share Button Text'() {
    this.currentPage
      .selectShareIconOption()
      .clickShareButton()
      .assert.containsText('@shareButtonLabel', 'Share Icon Clicked');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
