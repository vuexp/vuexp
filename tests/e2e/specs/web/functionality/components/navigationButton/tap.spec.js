module.exports = {
  tags: ['component', 'navigationButton'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.navigationButtonPage();
    this.currentPage
      .navigate('http://localhost:8080/components/navigation-button.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843450 Check Navigation Button Back Button Label'() {
    this.currentPage
      .selectWebIconOption()
      .clickBackButton()
      .assert.containsText('@backIconLabel', 'Back Icon Clicked');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
