module.exports = {
  tags: ['component', 'progress'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.progressPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/progress.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843423 Event / Name : valueChange'() {
    this.currentPage
      .checkInitialElements()
      .icreament()
      .assert.containsText('@event_label', 'Event: valueChange 0 to 10')
      .setTextToIncreamentInput(15)
      .icreament()
      .assert.containsText('@event_label', 'Event: valueChange 10 to 25')
      .setTextToIncreamentInput(20)
      .icreament()
      .assert.containsText('@event_label', 'Event: valueChange 25 to 45')
      .setTextToMaxValueInput(65)
      .icreament()
      .assert.containsText('@event_label', 'Event: valueChange 45 to 65')
      .setTextToIncreamentInput(10)
      .decreament()
      .assert.containsText('@event_label', 'Event: valueChange 65 to 55')
      .setTextToIncreamentInput(55)
      .decreament()
      .assert.containsText('@event_label', 'Event: valueChange 55 to 0');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
