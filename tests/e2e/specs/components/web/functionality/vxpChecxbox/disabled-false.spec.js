module.exports = {
  tags: ['component', 'vxpCheckbox'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.switchPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxpcheckbox.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'Props:/Name: disabled, Type: Boolean, Value : false (default)'() {
    this.currentPage.assert
      .containsText('@disable_label', 'Enabled')
      .click('@disable_checkbox')
      .assert.containsText('@disable_label', 'Disabled');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
