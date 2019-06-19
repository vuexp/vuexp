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
  /*'Check keyboardType datetime'() {
    this.currentPage
      .selectKeyBoardType('datetime')
      .setTextToTextField('01.02.2018 01.02.2018 12:00')
      .assert.containsText('@textFieldInputField', '01.02.2018 12:00')
      .assert.attributeContains('@textFieldInputField', 'type', 'datetime-local');
  },
  */
  '	C13840779 Check keyboardType phone'() {
    this.currentPage
      .selectKeyBoardType('phone')
      .setTextToTextField(5068669636)
      .assert.attributeContains('@textFieldInputField', 'value', 5068669636)
      .assert.attributeContains('@textFieldInputField', 'type', 'tel');
  },
  '	C13840779 Check keyboardType number'() {
    this.currentPage
      .selectKeyBoardType('number')
      .setTextToTextField(885)
      .assert.attributeContains('@textFieldInputField', 'value', 885)
      .assert.attributeContains('@textFieldInputField', 'type', 'number');
  },
  '	C13840779 Check keyboardType url'() {
    this.currentPage
      .selectKeyBoardType('url')
      .setTextToTextField('https://www.youtube.com/watch?v=fh5ci6eVlu0')
      .assert.attributeContains('@textFieldInputField', 'value', 'https://www.youtube.com/watch?v=fh5ci6eVlu0')
      .assert.attributeContains('@textFieldInputField', 'type', 'url');
  },
  '	C13840779 Check keyboardType email'() {
    this.currentPage
      .selectKeyBoardType('email')
      .setTextToTextField('irem.test@nurd.com')
      .assert.attributeContains('@textFieldInputField', 'value', 'irem.test@nurd.com')
      .assert.attributeContains('@textFieldInputField', 'type', 'email');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
