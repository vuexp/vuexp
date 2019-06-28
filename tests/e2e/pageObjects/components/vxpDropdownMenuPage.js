const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    dropdown: '#dropdownmenu__title__label',
    dropdown_click: '#dropdownmenu__title__label div',
    //menu
    menu_title_input: '#dropdownmenu__title__input',
    menu_title: '.vxp-dropdown__menu__title',
    menu_icon: '.vxp-dropdown__menu__icon.undefined.fa.fa',
    menu_icon_input: '#dropdownmenu__icon__select',
    //items
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
    item0: '#dropdownmenu__item\\(0\\)__label',
    item1: '#dropdownmenu__item\\(1\\)__label',
    item2: '#dropdownmenu__item\\(2\\)__label',
    item3: '#dropdownmenu__item\\(3\\)__label',
    container: '.vxp-stack-layout--vertical.is-visible',
    //menu icons
    trash: '#dropdownmenu__icon__select > option:nth-child(1)',
    plus_circle: '#dropdownmenu__icon__select > option:nth-child(2)',
    calendar: '#dropdownmenu__icon__select > option:nth-child(3)',
    pencil: '#dropdownmenu__icon__select > option:nth-child(4)',
    share: '#dropdownmenu__icon__select > option:nth-child(5)',
    times: '#dropdownmenu__icon__select > option:nth-child(6)',
    refresh: '#dropdownmenu__icon__select > option:nth-child(7)',
    smile: '#dropdownmenu__icon__select > option:nth-child(8)',
    user_circle: '#dropdownmenu__icon__select > option:nth-child(9)',
    triangle: '#dropdownmenu__icon__select > option:nth-child(10)',
    //items
    item1_title: '#dropdownmenu__item\\(0\\)__label > span.vxp-label.vxp-dropdown-item__title',
    item1_icon: '#dropdownmenu__item\\(0\\)__label > span.vxp-label.vxp-dropdown-item__icon.fa',
    item2_title: '#dropdownmenu__item\\(1\\)__label > span.vxp-label.vxp-dropdown-item__title',
    item2_icon: '#dropdownmenu__item\\(1\\)__label > span.vxp-label.vxp-dropdown-item__icon.fa',
    item3_title: '#dropdownmenu__item\\(2\\)__label > span.vxp-label.vxp-dropdown-item__title',
    item3_icon: '#dropdownmenu__item\\(2\\)__label > span.vxp-label.vxp-dropdown-item__icon.fa',
    item4_title: '#dropdownmenu__item\\(3\\)__label > span.vxp-label.vxp-dropdown-item__title',
    item4_icon: '#dropdownmenu__item\\(3\\)__label > span.vxp-label.vxp-dropdown-item__icon.fa',

    item1_icon_times: '#dropdownmenuitem__icon__select__1 > option:nth-child(6)',
    item2_icon_user: '#dropdownmenuitem__icon__select__2 > option:nth-child(9)',
    item3_icon_refresh: '#dropdownmenuitem__icon__select__3 > option:nth-child(7)',
    item4_icon_share: '#dropdownmenuitem__icon__select__4 > option:nth-child(5)',
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
        this.waitForElementVisible('@dropdown_click', 10000);
        return this.click('@dropdown_click');
      },
      addNewItem: function() {
        return this.waitForElementVisible('@addItem_button', 10000).click('@addItem_button');
      },
      resetItems: function() {
        return this.click('@resetItems');
      },
      selectAnItem: function(item_no) {
        this.waitForElementVisible('@container', 10000);
        switch (item_no) {
          case 0:
            return this.click('@item0');
          case 1:
            return this.click('@item1');
          case 2:
            return this.click('@item2');
          case 3:
            return this.click('@item3');
        }
      },
      selectAddedItem: function() {
        this.waitForElementVisible('@added_id', 10000);
        return this.click('@added_id');
      },
      changeMenuTitle: function(title) {
        return this.waitForElementVisible('@menu_title_input', 10000)
          .clearValue('@menu_title_input')
          .setValue('@menu_title_input', title);
      },
      changeMenuIcon: function(icon) {
        this.waitForElementVisible('@menu_icon_input', 10000).click('@menu_icon_input');
        switch (icon) {
          case 'trash':
            return this.click('@trash');
          case 'plus_circle':
            return this.click('@plus_circle');
          case 'calendar':
            return this.click('@calendar');
          case 'pencil':
            return this.click('@pencil');
          case 'share':
            return this.click('@share');
          case 'times':
            return this.click('@times');
          case 'refresh':
            return this.click('@refresh');
          case 'smile':
            return this.click('@smile');
          case 'user_circle':
            return this.click('@user_circle');
          case 'triangle':
            return this.click('@triangle');
        }
      },
      changeItemTitle: function(item_no, title) {
        switch (item_no) {
          case 1:
            return this.clearValue('@input1_title').setValue('@input1_title', title);
          case 2:
            return this.clearValue('@input2_title').setValue('@input2_title', title);
          case 3:
            return this.clearValue('@input3_title').setValue('@input3_title', title);
          case 4:
            return this.clearValue('@input4_title').setValue('@input4_title', title);
        }
      },
      changeItemIcon: function(item_no) {
        switch (item_no) {
          case 1:
            return this.click('@input1_icon').click('@item1_icon_times');
          case 2:
            return this.click('@input2_icon').click('@item2_icon_user');
          case 3:
            return this.click('@input3_icon').click('@item3_icon_refresh');
          case 4:
            return this.click('@input4_icon').click('@item4_icon_share');
        }
        /*
        return this.waitForElementVisible('@input1_icon', 10000)
          .click('@input1_icon')
          .click('@item_icon_times');
          */
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
