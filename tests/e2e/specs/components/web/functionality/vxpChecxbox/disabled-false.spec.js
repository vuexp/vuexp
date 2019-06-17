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
  'C13890277 Props:/Name: disabled, Type: Boolean, Value : false (default)'() {
    this.currentPage.assert
      .containsText('@disable_label', 'Enabled')
      .selectDisable()
      .assert.containsText('@disable_label', 'Disabled');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
