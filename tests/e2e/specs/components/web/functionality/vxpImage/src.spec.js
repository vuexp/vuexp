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
    this.currentPage.loadImage(
      'https://indigodergisi.com/wp-content/uploads/2017/05/1494118823_EpilepsiveBen_6_11Ya_____kincisi__Berat___pek-e1494238706926-265x198.jpg',
    );
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
