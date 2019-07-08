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
  'C13890222  Props:/Name: disabled, Type: Boolean, Value : false (default)'() {
    this.currentPage
      .selectDisabled()
      .assert.containsText('@disabledLabel', 'true')
      .openDropdown()
      .assert.attributeContains('@dropdownContainer', 'style', 'display: none;');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
