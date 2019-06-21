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
  'C13842754 - Props /Name: columns & row, type : String , value : number,* - auto sizing with star (*)'() {
    this.currentPage
      .clearAllGrid()
      .add2NewColumns()
      .add2NewRows()
      .setColumnSettingsForCase3();
    this.client.execute("document.querySelector('div.nudoc-example__content > div > div:nth-child(2)').scrollIntoView()");
    this.currentPage.setRowSettingsForCase3();
    this.client.execute("document.querySelector('div.nudoc-example__content > div > div:nth-child(4)').scrollIntoView()");
    this.currentPage.setCellColorsCase2().checkScreenshot('@renderedResult');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
