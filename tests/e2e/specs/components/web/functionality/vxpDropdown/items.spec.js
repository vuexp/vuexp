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
  'C13890217  Props:/Name: items, Type: Array'() {
    this.currentPage
      .editItem('England')
      .assert.elementPresent('@dropdownItemLabelFirst')
      .assert.containsText('@dropdownItemLabelFirst', 'England')
      .closeDropdown()
      .addFirstItem('Spain')
      .assert.elementPresent('@addedItemField')
      .selectIndex('9')
      .assert.containsText('@selectIndexLabel', 'id":10,"value":"Spain')
      .addSecondItem('Italy');
    this.client.pause('10000');
    this.currentPage.selectIndex('10').assert.containsText('@selectIndexLabel', 'id":10,"value":"Italy');

    // .addSecondItem('Italy')
    // .selectIndex('10')
    // .assert.containsText('@dropdownItemLabelFirst', 'id":10,"value":"Italy')

    /* this.currentPage
        .assert.elementPresent('@dropdownItemLabelFirst');
    this.currentPage
       .assert.elementPresent('@dropdownaddedItemFirst')
       .assert.containsText('@dropdownaddedItemFirst', 'Spain')
       .addSecondItem('Italy')
       .assert.elementPresent('@dropdownaddedItemSecond')
       .assert.containsText('@dropdownaddedItemSecond', 'Italy')
       .deleteItem()
       .assert.elementNotPresent('@dropdownItemLabelFirst') */
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
