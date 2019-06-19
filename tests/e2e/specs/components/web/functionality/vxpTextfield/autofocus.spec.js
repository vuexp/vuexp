module.exports = {
  tags: ['component', 'vxpTextfield'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpTextfieldPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-textfield.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'Probs: Name : autofocus'() {
    this.currentPage.assert.containsText('@eventOutput', 'focus');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
