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
  'C13890559 Probs: /Name : Errors'() {
    this.currentPage
      .fillTheErrorName('error_name_1')
      .assert.containsText('@error_label', 'error_name_1')
      .fillTheErrorName('error_name_2')
      .assert.containsText('@error_label2', 'error_name_2')
      .fillTheErrorName('error_name_3')
      .assert.containsText('@error_label3', 'error_name_3')
      .clearErrors()
      .expect.element('@error_label').to.not.be.present;
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
