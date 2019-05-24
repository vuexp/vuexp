module.exports = {
  tags: ['component', 'button'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.buttonPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/button.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843418 Set Text to Button and Click'() {
    this.currentPage
      .setTextToButton('nightwatch')
      .assert.containsText('@buttonComponent', 'nightwatch')
      .click('@buttonComponent')
      .assert.containsText('@buttonActionLabel', 'Button Pressed');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
