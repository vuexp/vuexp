module.exports = {
  tags: ['component', 'actionBar'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.actionBarPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/action-bar.html')
      .waitForElementVisible('body', 100000)
      .customPerform(function() {
        done();
      });
  },
  'C13843440 Props:/Name:title, Type:string'() {
    this.currentPage.setTitletoInput('actionBar').assert.containsText('@titleLabelField', 'actionBar');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
