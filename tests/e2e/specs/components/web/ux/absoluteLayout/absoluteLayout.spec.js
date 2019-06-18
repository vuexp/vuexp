module.exports = {
  tags: ['component', 'absoluteLayout'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.absoluteLayoutPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'layouts/absolute-layout.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13842825 Props /Name: top/left, type : Number'() {
    this.currentPage
      .setAbsoluteLayout(380)
      .checkInitialElements()
      .setLayoutChildren()
      .addAndSetChildElement()
      .checkChildLayouts();
    this.client.execute('scrollTo(0,0)').pause(2000);
    /*
      If you want to scroll to element until is visible, you can use following code
      this.client.execute("document.querySelector('h1#absolutelayout').scrollIntoView()").pause(2000);
      */
    this.currentPage.checkScreenshot('@absoluteLayout');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
