module.exports = {
  tags: ['component', 'page'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.pagecompPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/page.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843469 Check that Action Bar Hiden is false'() {
    this.currentPage.assert
      .containsText('@actionBar_label', 'false')
      .click('@actionBar')
      .click('@actionBar')
      .assert.containsText('@actionBar_label', 'false');
  },
  'C13843470 Check that Action Bar Hiden is true'() {
    this.currentPage.click('@actionBar').assert.containsText('@actionBar_label', 'true');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
