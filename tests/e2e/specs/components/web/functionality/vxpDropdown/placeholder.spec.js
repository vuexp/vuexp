module.exports = {
  tags: ['component', 'vxpListView'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpDropdownPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-dropDown.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13890216  Props:/Name: placeholder, Type: String'() {
    this.currentPage.editPlaceholder('Choose Item').assert.attributeContains('@dropdownPlaceholder', 'placeholder', 'Choose Item');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
