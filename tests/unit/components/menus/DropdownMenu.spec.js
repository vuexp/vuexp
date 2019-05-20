import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import DropdownMenu from '../../../../src/components/menus/DropdownMenu';

describe('Dropdown Menu', () => {
  const selectedIndex = 1;
  const title = 'Test Title';
  const items = [{ title: 'Title 1', icon: 'fa-share', iconClass: 'fa' }, { title: 'Title 2', icon: 'fa-times', iconClass: 'fa' }];
  let wrapper;
  before(() => {
    wrapper = mount(DropdownMenu, {
      name: 'DropdownMenu',
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
        visibility: {
          type: Boolean,
          default: true,
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
    });
  });
  it(`selectedIndex property is equal to: ${selectedIndex}.`, () => {
    expect(wrapper.props().selectedIndex).to.equal(selectedIndex);
  });
  it(`currentTabIndex is equal to: ${selectedIndex}.`, () => {
    expect(wrapper.vm.currentTabIndex).to.equal(selectedIndex);
  });
  it(`direction is equal to: to-right.`, () => {
    expect(wrapper.vm.direction).to.equal('to-right');
  });
});
