module.exports = {
  tags: ['component', 'textView'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.textviewPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/textview.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843248	 Props/Name: editable, type : Boolean , value : false'() {
    this.currentPage
      .click('@editableCheckButton')
      .waitForElementPresent('@textview', 3000)
      .assert.attributeEquals('@textview', 'disabled', 'true')
      .setTextToTextField('editablefa')
      .assert.attributeContains('@textview', 'value', '');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
