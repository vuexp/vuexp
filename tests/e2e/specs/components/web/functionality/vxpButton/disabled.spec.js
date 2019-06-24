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
  'C13890233 Props/Name:disabled, Type : Boolean'() {
    this.currentPage.assert
      .containsText('@buttonActionLabel', '-')
      .checkButtonEnable()
      .assert.containsText('@buttonActionLabel', '-')
      .checkButtonDisable()
      .assert.containsText('@buttonActionLabel', 'Button Pressed');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
