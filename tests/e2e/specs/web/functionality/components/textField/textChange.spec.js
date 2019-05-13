module.exports = {
  tags: ['component', 'textfield'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.textFieldPage();
    this.currentPage
      .navigate('http://localhost:8080/components/textfield.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'Check textfield textChange'() {
    this.currentPage.setTextToTextField('textChange text').assert.containsText('@eventOutput', 'textChange');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
