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
  'Check textfield MaxLenght over'() {
    this.currentPage
      .setNumberToMaxLenght(10)
      .pause(10)
      .setTextToTextField('textfield-maxLenght-test')
      .assert.containsText('@textFieldInputField', 'textfield-');
  },
  'Check textfield MaxLenght lover'() {
    this.currentPage
      .setNumberToMaxLenght(10)
      .setTextToTextField('maxLenght')
      .assert.containsText('@textFieldInputField', 'maxLenght');
  },
  'Check textfield MaxLenght same'() {
    this.currentPage
      .setNumberToMaxLenght(10)
      .setTextToTextField('textfield-')
      .assert.containsText('@textFieldInputField', 'tex');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
