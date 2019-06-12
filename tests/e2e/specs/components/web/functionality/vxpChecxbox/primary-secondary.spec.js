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
  'C13890279 Props/Name:primary,secondary'() {
    this.currentPage
      .click('@checkbox')
      .assert.attributeContains('@checkbox', 'secondary', 'true')
      .click('@theme_checkbox')
      .expect.element('@checkbox')
      .to.not.have.attribute('secondary');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
