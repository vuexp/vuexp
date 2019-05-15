module.exports = {
  tags: ['component', 'navigationButton'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.navigationButtonPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/navigation-button.html')
      .waitForElementVisible('body', 100000)
      .customPerform(function() {
        done();
      });
  },
  'C13843450 Event / Name : tap'() {
    this.currentPage
      .selectWebIconOption()
      .clickBackButton()
      .assert.containsText('@backIconLabel', 'Back Icon Clicked');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
