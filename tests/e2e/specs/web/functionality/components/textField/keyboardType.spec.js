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
  /*'Check keyboardType datetime'() {
    this.currentPage
      .selectKeyBoardType('datetime')
      .setTextToTextField('01.02.2018 01.02.2018 12:00')
      .assert.containsText('@textFieldInputField', '01.02.2018 12:00')
      .assert.attributeContains('@textFieldInputField', 'type', 'datetime-local');
  },
  */
  'Check keyboardType phone'() {
    this.currentPage
      .selectKeyBoardType('phone')
      .setTextToTextField('5068669636')
      .assert.containsText('@textFieldInputField', '5068669636')
      .assert.attributeContains('@textFieldInputField', 'type', 'tel');
  },
  'Check keyboardType number'() {
    this.currentPage
      .selectKeyBoardType('number')
      .setTextToTextField('885')
      .assert.containsText('@textFieldInputField', '885')
      .assert.attributeContains('@textFieldInputField', 'type', 'number');
  },
  'Check keyboardType url'() {
    this.currentPage
      .selectKeyBoardType('url')
      .setTextToTextField('https://www.youtube.com/watch?v=fh5ci6eVlu0')
      .assert.containsText('@textFieldInputField', 'https://www.youtube.com/watch?v=fh5ci6eVlu0')
      .assert.attributeContains('@textFieldInputField', 'type', 'url');
  },
  'Check keyboardType email'() {
    this.currentPage
      .selectKeyBoardType('email')
      .setTextToTextField('irem.test@nurd.com')
      .assert.containsText('@textFieldInputField', 'irem.test@nurd.com')
      .assert.attributeContains('@textFieldInputField', 'type', 'email');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
