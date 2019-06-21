module.exports = {
  tags: ['component', 'vxpTextfield'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpTextfieldPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-textfield.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13943413 Props /Name: keyBoardType , type : Enum , value : datetime , phone , number , url , email'() {
    this.currentPage.selectKeyboardTypeAsDatetime();
    this.client.pause(1000);
    if (this.client.capabilities.browserName === 'firefox') {
      this.currentPage.assert.attributeContains('@vxpTextfield2', 'type', 'text');
    } else {
      this.currentPage.assert.attributeContains('@vxpTextfield2', 'type', 'datetime');
    }
    this.currentPage
      .selectKeyboardType('phone')
      .assert.attributeContains('@vxpTextfield2', 'type', 'tel')
      .selectKeyboardType('number')
      .assert.attributeContains('@vxpTextfield2', 'type', 'number')
      .selectKeyboardType('url')
      .assert.attributeContains('@vxpTextfield2', 'type', 'url')
      .selectKeyboardType('email')
      .assert.attributeContains('@vxpTextfield2', 'type', 'email');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
