module.exports = {
  tags: ['actionItem'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.actionItemPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/action-item.html')
      .waitForElementVisible('body', 100000)
      .customPerform(function() {
        done();
      });
  },
  'C13843430 Click Share Button on Action Bar'() {
    this.currentPage
      .selectShareIconOption()
      .clickShareButton()
      .assert.containsText('@shareButtonLabel', 'Share Icon Clicked');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
