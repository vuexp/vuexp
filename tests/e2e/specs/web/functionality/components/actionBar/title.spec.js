module.exports = {
  tags: ['component', 'actionBar'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.actionBarPage();
    this.currentPage
      .navigate('http://localhost:8080/components/action-bar.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843424 Check ActionBar Text'() {
    this.currentPage.setTitletoInput('actionBar').assert.containsText('@titleLabelField', 'actionBar');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
