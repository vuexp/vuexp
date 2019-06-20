module.exports = {
  tags: ['component', 'vxpDatePicker'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpDatePickerPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-datePicker.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  deneme() {
    let months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    this.currentPage.setMonthsName(months);
    this.client.pause(10000);
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
