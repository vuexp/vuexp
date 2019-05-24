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
  'C13840785 Check textfield blur'() {
    this.currentPage
      .setTextToTextField('textfield blur')
      .click('@textInputField')
      .assert.containsText('@eventOutput', 'blur');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
