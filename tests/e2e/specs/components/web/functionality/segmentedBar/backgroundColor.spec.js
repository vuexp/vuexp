module.exports = {
  tags: ['component', 'segmentedBar'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.segmentedBarPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/segmented-bar.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843434 Props:/Name: selectedIndex, Type: Number'() {
    this.currentPage
      .checkInitialElements()
      //.selectAnIndex(0)
      .assert.containsText('@selectedIndex_label', '0')
      .setBackgroundColor('red')
      .assert.attributeContains('@segment0', 'style', 'red')
      .setBackgroundColor('blue')
      .assert.attributeContains('@segment0', 'style', 'blue')
      .selectAnIndex(1)
      .assert.containsText('@selectedIndex_label', '1')
      .assert.attributeContains('@segment1', 'style', 'blue')
      .setBackgroundColor('orange')
      .assert.attributeContains('@segment1', 'style', 'orange')
      .setBackgroundColor('green')
      .assert.attributeContains('@segment1', 'style', 'green')
      .setBackgroundColor('cyan')
      .assert.attributeContains('@segment1', 'style', 'cyan')
      .selectAnIndex(2)
      .assert.containsText('@selectedIndex_label', '2')
      .setBackgroundColor('yellow')
      .assert.attributeContains('@segment2', 'style', 'yellow')
      .setBackgroundColor('gray')
      .assert.attributeContains('@segment2', 'style', 'gray')
      //new item background color
      .addItem('new added item')
      .assert.containsText('@segmen3_button_title', 'new added item')
      .selectAnIndex(3)
      .assert.containsText('@selectedIndex_label', '3')
      .setBackgroundColor('yellow')
      .assert.attributeContains('@segment3', 'style', 'yellow')
      .setBackgroundColor('cyan')
      .assert.attributeContains('@segment3', 'style', 'cyan');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
