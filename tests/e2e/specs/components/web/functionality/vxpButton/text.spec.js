module.exports = {
  tags: ['component', 'vxpButton'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpButtonPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-button.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  ' Set Text to Button and Click'() {
    this.currentPage
      .setTextToButton('nightwatch')
      .assert.containsText('@buttonComponent', 'nightwatch')
      .clickButton()
      .assert.containsText('@buttonActionLabel', 'Button Pressed');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
