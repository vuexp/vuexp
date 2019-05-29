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
  'C13843249 Props /Name: editable, type : Boolean , value : default(true)'() {
    this.currentPage
      .setTextToTextField('editabletu')
      .assert.attributeContains('@textview', 'style', '')
      .assert.attributeContains('@textview', 'value', 'editabletu');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
