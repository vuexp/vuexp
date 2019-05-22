import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import localVue from '../../local-vue';
import VxpDropdownMenu from '../../../../src/components/menus/VxpDropdownMenu';

describe('Vxp Dropdown Menu', () => {
  const selectedIndex = 1;
  const title = 'Test Title';
  const items = [{ title: 'Title 1', icon: 'fa-share', iconClass: 'fa' }, { title: 'Title 2', icon: 'fa-times', iconClass: 'fa' }];
  let wrapper;
  let defaultWrapper;
  before(() => {
    wrapper = mount(VxpDropdownMenu, {
      name: 'VxpDropdownMenu',
      props: {
        title: String,
        icon: String,
        iconClass: String,
        items: {
          type: Array,
          default: () => [],
        },
        disabled: {
          type: Boolean,
          default: false,
        },
        selectedIndex: {
          type: Number,
          default: null,
        },
      },
      propsData: {
        selectedIndex,
        title,
        items,
      },
      localVue,
    });
    defaultWrapper = mount(VxpDropdownMenu, {
      name: 'VxpDropdownMenu',
      props: {
        title: String,
        icon: String,
        iconClass: String,
        items: {
          type: Array,
          default: () => [],
        },
        disabled: {
          type: Boolean,
          default: false,
        },
        selectedIndex: {
          type: Number,
          default: null,
        },
      },
      propsData: {
        selectedIndex,
        title,
      },
      localVue,
    });
  });

  it(`should selectedIndex be equal to: ${selectedIndex}.`, () => {
    expect(wrapper.props().selectedIndex).to.equal(selectedIndex);
  });
  it(`should items length be equal to: ${items.length}.`, () => {
    expect(wrapper.props().items.length).to.equal(items.length);
  });
  it(`should set isMenuOpen to false when toggleMenu is fired on web`, () => {
    wrapper.vm.toggleMenu();
    expect(wrapper.vm.isMenuOpen).to.be.true;
  });
  it(`should set selectedIndex to 1 when selectItem is fired`, () => {
    const selectedIndex = 0;
    wrapper.vm.selectItem(selectedIndex, wrapper.props().items[selectedIndex]);
    expect(wrapper.props().selectedIndex).to.equal(selectedIndex);
  });
  it(`should items be an empty array`, () => {
    expect(
      defaultWrapper
        .props()
        .items.values()
        .next().value,
    ).to.eql(undefined);
  });
});
