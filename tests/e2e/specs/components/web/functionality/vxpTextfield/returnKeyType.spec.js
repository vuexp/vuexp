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
  'C13943414 Props /Name: returnkeyType , type : Enum , value : datetime , phone , number , url , email'() {
    this.currentPage
      .selectReturnkeyType('done')
      .assert.attributeContains('@vxpTextfield2', 'returnkeytype', 'done')
      .selectReturnkeyType('next')
      .assert.attributeContains('@vxpTextfield2', 'returnkeytype', 'next')
      .selectReturnkeyType('go')
      .assert.attributeContains('@vxpTextfield2', 'returnkeytype', 'go')
      .selectReturnkeyType('search')
      .assert.attributeContains('@vxpTextfield2', 'returnkeytype', 'search')
      .selectReturnkeyType('send')
      .assert.attributeContains('@vxpTextfield2', 'returnkeytype', 'send');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
