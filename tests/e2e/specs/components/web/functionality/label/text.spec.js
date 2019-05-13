module.exports = {
  tags: ['component', 'label'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.labelPage();
    this.currentPage
      .navigate('http://localhost:8080/components/label.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843481 Check Label Text'() {
    this.currentPage.setTextToLabel('nightwatch').assert.containsText('@textOutputField', 'nightwatch');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
