module.exports = {
  tags: ['component', 'gridLayout'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.gridLayoutPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'layouts/grid-layout.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13842752 Props /Name: columns & row, type : String , value : number,auto,* - for basic Grid usage'() {
    this.currentPage
      .clearAllGrid()
      .add3NewColumns()
      .add3NewRows()
      .setColumnSettingsForCase1();
    this.client.execute("document.querySelector('div.nudoc-example__content > div > div:nth-child(2)').scrollIntoView()");
    this.currentPage.setRowSettingsForCase1();
    this.client.execute("document.querySelector('div.nudoc-example__content > div > div:nth-child(4)').scrollIntoView()");
    this.currentPage
      .setCellsSettingsForCase1()
      .setCellColorsCase1()
      .checkScreenshot('@renderedResult');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
