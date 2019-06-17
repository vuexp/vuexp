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
  'C13890245 Props/Name:size, Value : small/medium'() {
    this.currentPage
      .selectSmall()
      .assert.attributeContains('@buttonComponent', 'class', 'small')
      .selectMedium()
      .assert.attributeContains('@buttonComponent', 'class', 'medium');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
