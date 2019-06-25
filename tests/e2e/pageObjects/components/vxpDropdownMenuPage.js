const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    dropdown: '#dropdownmenu__title__label',
    dropdown_click: '#dropdownmenu__title__label div',
    menu_title: '#dropdownmenu__title__input',
    menu_icon: '#dropdownmenu__icon__select',
    disable_checkbox: '#dropdownmenu__disabled__checkbox',
    addItem_button: '#dropdownmenu__additem__button',
    resetItems: '#dropdownmenu__resetitems__button',
    input1_title: '#dropdownmenuitem__title__input__1',
    input1_icon: '#dropdownmenuitem__icon__select__1',
    input2_title: '#dropdownmenuitem__title__input__2',
    input2_icon: '#dropdownmenuitem__icon__select__2',
    input3_title: '#dropdownmenuitem__title__input__3',
    input3_icon: '#dropdownmenuitem__icon__select__3',
    input4_title: '#dropdownmenuitem__title__input__4',
    input4_icon: '#dropdownmenuitem__icon__select__4',
    disable_label: '#dropdownmenu__disabled__label',
    selected_index: '#dropdownmenu__selectedIndex__label',
    added_item_icon: '#dropdownmenu__item(3)__label > span.vxp-label.vxp-dropdown-item__icon.fa-user-circle-o.fa',
    added_item_title: '#dropdownmenu__item(3)__label > span.vxp-label.vxp-dropdown-item__title',
    item0: '#dropdownmenu__item(0)__label',
    item1: '#dropdownmenu__item(1)__label',
    item2: '#dropdownmenu__item(2)__label',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@dropdown').to.be.visible;
        this.expect.element('@disable_label').to.be.visible;
        return this;
      },
      setDisabled: function() {
        this.waitForElementVisible('@disable_checkbox', 10000);
        return this.click('@disable_checkbox');
      },
      openDropdownMenu: function() {
        this.waitForElementVisible('@dropdown', 10000);
        return this.click('@dropdown_click');
      },
      addNewItem: function(title, icon, text, icon_name) {
        return this.waitForElementVisible('@addItem_button', 10000)
          .click('@addItem_button')
          .clearValue(title)
          .setValue(title, text)
          .clearValue(icon)
          .setValue(icon, icon_name);
      },
      resetItems: function() {
        return this.click('@resetItems');
      },
      selectAnItem: function(item_no) {
        this.waitForElementVisible('@dropdown', 10000);
        switch (item_no) {
          case '0':
            return this.click('@item0');
          case '1':
            return this.click('@item1');
          case '2':
            return this.click('@item2');
        }
      },
      selectAddedItem: function() {
        this.waitForElementVisible('@added_id', 10000);
        return this.click('@added_id');
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
