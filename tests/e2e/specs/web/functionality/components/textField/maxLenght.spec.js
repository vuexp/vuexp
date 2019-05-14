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
  '	C13840777 Check textfield MaxLenght over'() {
    this.currentPage
      .setNumberToMaxLenght(25)
      .setTextToTextField('textfield-maxLenght-test')
      .assert.attributeContains('@textFieldInputField', 'value', 'textfield-maxLenght-test');
  },
  'C13840777 Check textfield MaxLenght lover'() {
    this.currentPage
      .setNumberToMaxLenght(10)
      .setTextToTextField('maxLenght')
      .assert.attributeContains('@textFieldInputField', 'value', 'maxLenght');
  },
  '	C13840777 Check textfield MaxLenght same'() {
    this.currentPage
      .setNumberToMaxLenght(3)
      .setTextToTextField('textfield-')
      .assert.attributeContains('@textFieldInputField', 'value', 'tex');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
