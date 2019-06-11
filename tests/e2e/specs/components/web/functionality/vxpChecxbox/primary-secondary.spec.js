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
  'Props/Name:primary,secondary'() {
    this.currentPage.assert.containsText('@switch_label', 'Switcher Off');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
