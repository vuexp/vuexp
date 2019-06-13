module.exports = {
  tags: ['component', 'vxpButton'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpButtonPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-button.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  ' Props/Name:size, Value : small/medium'() {
    this.currentPage
      // .selectSize('small')
      .selectSmall()
      .assert.attributeContains('@buttonComponent', 'class', 'small')
      .selectMedium()
      // .selectSize('medium')
      .assert.attributeContains('@buttonComponent', 'class', 'medium');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
