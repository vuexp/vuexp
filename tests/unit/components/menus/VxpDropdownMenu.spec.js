import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import localVue from '../../local-vue';
import VxpDropdownMenu from '../../../../src/components/menus/VxpDropdownMenu';
import VxpDropdownItem from '../../../../src/components/menus/VxpDropdownItem';

import platform from '../../../../src/platform';

describe.only('Vxp Dropdown Menu', () => {
  const selectedIndex = 1;
  const title = 'Test Title';
  const items = [{ title: 'Title 1', icon: 'fa-share', iconClass: 'fa' }, { title: 'Title 2', icon: 'fa-times', iconClass: 'fa' }];
  let wrapper;
  let wrapperDisabled;
  let defaultWrapper;
  before(() => {
    wrapper = mount(VxpDropdownMenu, {
      name: 'VxpDropdownMenu',
      propsData: {
        selectedIndex,
        title,
        items,
      },
      localVue,
    });
    defaultWrapper = mount(VxpDropdownMenu, {
      name: 'VxpDropdownMenu',
      propsData: {
        selectedIndex,
        title,
      },
      localVue,
    });
    wrapperDisabled = mount(VxpDropdownMenu, {
      name: 'VxpDropdownMenu',
      propsData: {
        selectedIndex,
        title,
        items,
        disabled: true,
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
  it(`should items be an empty array`, () => {
    expect(
      defaultWrapper
        .props()
        .items.values()
        .next().value,
    ).to.eql(undefined);
  });
  it(`should call action method when platform is native`, () => {
    nativeScope(() => {
      const actionSpy = (global.action = sinon.stub().returns(Promise.resolve()));
      let wrapper = mount(VxpDropdownMenu, {
        name: 'VxpDropdownMenu',
        propsData: {
          selectedIndex,
          title,
          items,
        },
        localVue,
      });
      wrapper.vm.toggleMenu();
      expect(actionSpy.calledOnce).to.be.true;
      const firstCall = actionSpy.getCall(0);
      expect(firstCall.args[0]).to.be.eq(title);
      global.action = null;
    });
  });
  it(`should select an item`, () => {
    wrapper.setData({
      isMenuOpen: true,
    });
    const suggestions = wrapper.findAll(VxpDropdownItem);
    suggestions.wrappers[0].trigger('click');
    expect(wrapper.vm.currentIndex).to.eq(0);
    suggestions.wrappers[1].trigger('click');
    expect(wrapper.vm.currentIndex).to.eq(1);
  });
  it(`should disabled`, () => {
    wrapperDisabled.vm.toggleMenu();
    expect(wrapperDisabled.vm.disabled).to.be.true;
  });
});

function nativeScope(testFn) {
  const platformOriginal = platform.platform;
  platform.platform = 'native';
  testFn();
  platform.platform = platformOriginal;
}
