module.exports = {
  tags: ['component', 'vxpImage'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpImagePage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-image.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843461 Props/ Name:src, Value: URL or ImageSource'() {
    this.currentPage.assert
      .containsText('@event_label', 'onLoad')
      .loadImage('~/images/logo.png')
      .assert.containsText('@event_label', 'onLoad')
      .loadImage('~/images/logo.')
      .assert.containsText('@event_label', 'onLoadError')
      .loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBMypM074-O79tpkh_d8K31vFOxo2dlju305peWkEbG-_r-I6Kg')
      .assert.containsText('@event_label', 'onLoad')
      .loadImage('https://encrypted-tbn0.gstatic.com/images?q=')
      .assert.containsText('@event_label', 'onLoadError');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
