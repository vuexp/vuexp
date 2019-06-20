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
  'C13840779	 Props /Name: keyBoardType , type : Enum , value : datetime , phone , number , url , email'() {
    this.currentPage.selectKeyboardTypeAsDatetime();
    this.client.pause(1000);
    if (this.client.capabilities.browserName === 'firefox') {
      this.currentPage.assert.attributeContains('@textFieldInputField', 'type', 'text');
    } else {
      this.currentPage.assert.attributeContains('@textFieldInputField', 'type', 'datetime');
    }
    this.currentPage
      .selectKeyboardType('phone')
      .assert.attributeContains('@textFieldInputField', 'type', 'tel')
      .selectKeyboardType('number')
      .assert.attributeContains('@textFieldInputField', 'type', 'number')
      .selectKeyboardType('url')
      .assert.attributeContains('@textFieldInputField', 'type', 'url')
      .selectKeyboardType('email')
      .assert.attributeContains('@textFieldInputField', 'type', 'email');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
