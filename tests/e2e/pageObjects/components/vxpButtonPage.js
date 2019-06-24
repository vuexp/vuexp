const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    buttonComponent: 'button[id="button"]',
    button: '#button_text_input',
    buttonTextInput: '#button_text_input',
    buttonActionLabel: '#button_label',
    textWrapSelectBox: '#button_textWrap_selectbox',
    primary: '#button_primary_checkbox',
    secondary: '#button_secondary_checkbox',
    primary_label: '#button_primary_status_label',
    secondary_label: '#button_secondary_status_label',
    disabled_checkbox: '#button_disabled_checkbox',
    disabled_label: '#button_disabled_status_label',
    size: '#button_size_select',
    iconClass: '#button_iconClass_select',
    icon: '#button_icon_select',
    iconPosition: '#button_icon_pos_select',
    small_option: '#button_size_small_option',
    medium_option: '#button_size_medium_option',
    small_class: '.vxp-button.Button.vxp-button.vxp-button--small.typ-button-1',
    medium_class: '.vxp-button.Button.vxp-button.vxp-button--medium.typ-button',
    icon_smile: '#button_icon_smile_option',
    icon_user: '#button_icon_circle_option',
    icon_triangle: '#button_icon_triangle_option',
    position_left: '#button_icon_pos_left_option',
    position_right: '#button_icon_pos_right_option',
    icon_class: '#button_iconClass_label',
    icon_label: '#button_icon_label',
    iconPos_label: '#button_icon_pos_label',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@buttonComponent').to.be.visible;
        this.expect.element('@primary_label').to.be.visible;
        this.expect.element('@secondary_label').to.be.visible;
        return this;
      },
      setTextToButton: function(text) {
        this.waitForElementVisible('@buttonTextInput', 10000).clearValue('@buttonTextInput');
        return this.setValue('@buttonTextInput', text);
      },
      clickButton: function() {
        return this.click('@buttonComponent');
      },
      checkTextWrapSelectBox: function() {
        this.waitForElementVisible('@textWrapSelectBox', 10000);
        if (this.verify.attributeContains('@buttonComponent', 'style', 'white-space: normal;')) {
          return this.click('@textWrapSelectBox');
        }
        return 'textWrap already selected';
      },
      uncheckTextWrapSelectBox: function() {
        this.waitForElementVisible('@textWrapSelectBox', 10000);
        if (this.verify.attributeContains('@buttonComponent', 'style', 'white-space: nowrap;')) {
          return this.click('@textWrapSelectBox');
        }
        return 'textWrap already unselected';
      },
      checkButtonDisable: function() {
        this.waitForElementVisible('@disabled_checkbox', 10000);
        if (this.verify.attributeContains('@buttonComponent', 'disabled', 'true')) {
          this.click('@disabled_checkbox');
          return this.click('@buttonComponent');
        }
        return 'already enabled';
      },
      checkButtonEnable: function() {
        this.waitForElementVisible('@disabled_checkbox', 10000);
        if (this.expect.element('@buttonComponent').to.not.have.attribute('disabled')) {
          this.click('@disabled_checkbox');
          return this.click('@buttonComponent');
        }
        return 'already disabled';
      },
      selectPrimary: function() {
        this.waitForElementVisible('@buttonComponent', 10000);
        return this.click('@primary');
      },
      selectSecondary: function() {
        this.waitForElementVisible('@buttonComponent', 10000);
        return this.click('@secondary');
      },
      selectSmall: function() {
        this.waitForElementVisible('@button', 10000);
        if (this.verify.attributeContains('@buttonComponent', 'class', 'medium')) {
          return this.click('@small_option');
        }
        return 'small already selected';
      },
      selectMedium: function() {
        this.waitForElementVisible('@button', 10000);
        if (this.verify.attributeContains('@buttonComponent', 'class', 'small')) {
          return this.click('@medium_option');
        }
        return 'medium already selected';
      },

      selectIcon: function(icon) {
        this.waitForElementVisible('@icon', 10000);
        switch (icon) {
          case 'smile':
            return this.click('@icon_smile');
          case 'user':
            return this.click('@icon_user');
          case 'triangle':
            return this.click('@icon_triangle');
        }
      },
      selectPosition: function(position) {
        this.waitForElementVisible('@iconPosition', 10000);
        switch (position) {
          case 'left':
            return this.click('@position_left');
          case 'right':
            return this.click('@position_right');
        }
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
