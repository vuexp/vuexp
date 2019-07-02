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
  'C13890218  Props:/Name: index, Type: Number - Events / Name : changeIndex'() {
    this.currentPage
      .addFirstItem('Spain')
      .assert.elementPresent('@addedItemField')
      .selectIndex('9')
      .assert.containsText('@selectIndexLabel', 'id":10,"value":"Spain')
      .addSecondItem('Italy')
      .selectIndexTwo('10')
      .assert.containsText('@selectIndexLabel', 'id":10,"value":"Italy')
      .selectItemonDropdown()
      .assert.containsText('@selectIndexLabel', 'id":2,"value":"Algeria')
      .deleteItem()
      .assert.containsText('@dropdownItemLabelFirst', 'Algeria');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
