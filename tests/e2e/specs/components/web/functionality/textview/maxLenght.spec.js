module.exports = {
  tags: ['component', 'textView'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.textviewPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/textview.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843250 Props /Name:maxLength, type : Number , value : text'() {
    this.currentPage
      .setNumberToMaxLenght(25)
      .setTextToTextField('textview-maxLenght-test')
      .assert.attributeContains('@textview', 'value', 'textview-maxLenght-test')
      .setNumberToMaxLenght(10)
      .setTextToTextField('maxLenght')
      .assert.attributeContains('@textview', 'value', 'maxLenght')
      .setNumberToMaxLenght(3)
      .setTextToTextField('textview-')
      .assert.attributeContains('@textview', 'value', 'tex');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
