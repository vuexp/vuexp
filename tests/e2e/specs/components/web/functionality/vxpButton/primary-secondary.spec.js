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
  ' Props/Name:primary,secondary'() {
    this.currentPage
      .selectPrimary()
      .assert.containsText('@primary_label', 'active')
      .selectSecondary()
      .assert.containsText('@secondary_label', 'active');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
