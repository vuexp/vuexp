module.exports = {
  tags: ['component', 'vxpCheckbox'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpCheckboxPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxpcheckbox.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13890283 Events/Name : checked, value :false (default)'() {
    this.currentPage.assert
      .containsText('@status_label', 'Unchecked')
      .click('@checkbox')
      .assert.containsText('@status_label', 'Checked');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
