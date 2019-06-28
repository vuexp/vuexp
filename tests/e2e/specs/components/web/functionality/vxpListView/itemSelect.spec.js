module.exports = {
  tags: ['component', 'vxpListView'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpListViewPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-list-view.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13875361  Props:/Name: itemSelect , Type: Object'() {
    this.currentPage
      .addItemToList('Gokce')
      .selectVTemplate()
      .assert.attributeContains('@itemThird', 'style', 'white-space: nowrap; color: red;')
      .assert.attributeContains('@itemFourth', 'style', 'white-space: nowrap; color: red;');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
