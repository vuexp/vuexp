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
  'Check textfield Return Key Type done option'() {
    this.currentPage.assert.attributeContains('@retunKeyType', 'option', 'done_option');
  },
  'Check textfield Return Key Type next option'() {
    this.currentPage.assert.attributeContains('@retunKeyType', 'option', 'next_option');
  },
  'Check textfield Return Key Type go_option '() {
    this.currentPage.assert.attributeContains('@retunKeyType', 'option', 'go_option');
  },
  'Check textfield Return Key Type search option '() {
    this.currentPage.assert.attributeContains('@retunKeyType', 'option', 'search_option');
  },
  'Check textfield Return Key Type send option'() {
    this.currentPage.assert.attributeContains('@retunKeyType', 'option', 'send_option');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
