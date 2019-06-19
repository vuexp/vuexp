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
  'C13840774 Check textfield text'() {
    this.currentPage.setTextToText('textfield-').assert.attributeContains('@vxpTextfield', 'value', 'textfield-');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
