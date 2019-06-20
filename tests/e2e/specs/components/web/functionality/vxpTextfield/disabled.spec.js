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
  'C13890558 Probs: /Name : disabled'() {
    this.currentPage
      .setDisabled()
      .assert.attributeContains('@vxpTextfield', 'disabled', 'true')
      .setEnabled()
      .expect.element('@vxpTextfield')
      .to.not.have.attribute('disabled');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
