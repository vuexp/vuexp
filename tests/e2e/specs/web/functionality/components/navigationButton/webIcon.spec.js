module.exports = {
  tags: ['component', 'navigationButton'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.navigationButtonPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/navigation-button.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843448 Props:/Name: webIcon, Type:string'() {
    this.currentPage.selectWebIconOption().checkScreenshot('@actionBar');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
