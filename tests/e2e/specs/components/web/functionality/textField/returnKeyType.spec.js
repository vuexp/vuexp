module.exports = {
  '@disabled': true,
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
  '	C13840780 Check textfield Return Key Type done option'() {
    this.currentPage.assert.attributeContains('@retunKeyType', 'option', 'done_option');
  },
  '	C13840780 Check textfield Return Key Type next option'() {
    this.currentPage.assert.attributeContains('@retunKeyType', 'option', 'next_option');
  },
  '	C13840780 Check textfield Return Key Type go_option '() {
    this.currentPage.assert.attributeContains('@retunKeyType', 'option', 'go_option');
  },
  '	C13840780 Check textfield Return Key Type search option '() {
    this.currentPage.assert.attributeContains('@retunKeyType', 'option', 'search_option');
  },
  '	C13840780 Check textfield Return Key Type send option'() {
    this.currentPage.assert.attributeContains('@retunKeyType', 'option', 'send_option');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
