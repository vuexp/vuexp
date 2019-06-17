const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    primary_icon: '#iconbutton__click__primarybutton',
    secondary_icon: '#iconbutton__click__secondarybutton',
    alert_icon: '#iconbutton__click__alertbutton',
    isEnable_check: '#iconbutton__check__checkbox',
    icon_Class: '#iconbutton__icon__select',
    primary_size: '#iconbutton__iconsize1__select',
    secondary_size: '#iconbutton__iconsize2__select',
    alert_size: '#iconbutton__iconsize3__select',
    isEnable_label: '#iconbutton__enabled__label',
    selected_icon: '#iconbutton__buttonicon__label',
    selected_primary_size: '#iconbutton__primaryicon__label',
    selected_secondary_size: '#iconbutton__secondaryicon__label',
    selected_alert_size: '#iconbutton__alerticon__label',
    cliked_button: '#iconbutton__eventname__label',
    clikCount_label: '#iconbutton__clickcount__label',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@primary_icon').to.be.visible;
        this.expect.element('@secondary_icon').to.be.visible;
        this.expect.element('@alert_icon').to.be.visible;
        this.expect.element('@selected_primary_size').to.be.visible;
        this.expect.element('@selected_secondary_size').to.be.visible;
        this.expect.element('@selected_alert_size').to.be.visible;
        return this;
      },

      selectIcon: function(icon) {
        this.waitForElementVisible('@icon_Class', 10000);
        switch (icon) {
          case 'smile':
            return this.setValue('@icon_Class', 'fa fa-smile-o');
          case 'user':
            return this.setValue('@icon_Class', 'fa fa-user-circle-o');
          case 'triangle':
            return this.setValue('@icon_Class', 'fa fa-exclamation-triangle');
          default:
            return 'icon can not be selected';
        }
      },

      selectIconSmile: function() {
        this.waitForElementVisible('@icon_Class', 10000).setValue('@icon_Class', 'fa fa-smile-o');
      },
      selectIconUser: function() {
        this.waitForElementVisible('@icon_Class', 10000).setValue('@icon_Class', 'fa fa-user-circle-o');
      },
      selectIconTri: function() {
        this.waitForElementVisible('@icon_Class', 10000).setValue('@icon_Class', 'fa fa-exclamation-triangle');
      },

      isEnable: function() {
        this.waitForElementVisible('@isEnable_check', 10000);
        return this.click('@isEnable_check');
      },
      selectSize: function(button, size) {
        this.waitForElementVisible('@isEnable_check', 10000);
        switch (button) {
          case 'primary':
            return this.setValue('@primary_size', size);
          case 'secondary':
            return this.setValue('@secondary_size', size);
          case 'alert':
            return this.setValue('@alert_size', size);
          default:
            return 'size can not be selected';
        }
      },
      clickIconButton: function(button) {
        switch (button) {
          case 'primary':
            return this.click('@primary_icon');
          case 'secondary':
            return this.click('@secondary_icon');
          case 'alert':
            return this.click('@alert_icon');
          default:
            return 'button can not be clicked';
        }
      },
    },
  ],
};
