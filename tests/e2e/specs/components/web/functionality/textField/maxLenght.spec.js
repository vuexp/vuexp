module.exports = {
  tags: ['component', 'Textfield'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.textfieldPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/textfield.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13840777 Props /Name:maxLength, type : Number , value : text'() {
    this.currentPage
      .setNumberToMaxLenght(25)
      .setTextToTextField('textfield-maxLenght-test')
      .assert.attributeContains('@textFieldInputField', 'value', 'textfield-maxLenght-test')
      .setNumberToMaxLenght(10)
      .setTextToTextField('maxLenght')
      .assert.attributeContains('@textFieldInputField', 'value', 'maxLenght')
      .setNumberToMaxLenght(3)
      .setTextToTextField('textfield-')
      .assert.attributeContains('@textFieldInputField', 'value', 'tex');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
