import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import localVue from '../../local-vue';
import Label from '../../../../src/core/components/Label/Label';
import VxpDropdownItem from '../../../../src/components/menus/VxpDropdownItem';

describe('Vxp Dropdown Item', () => {
  const item = {
    icon: 'fa-share',
    iconClass: 'fa',
    title: 'sample title',
  };
  let wrapper;
  before(() => {
    wrapper = mount(VxpDropdownItem, {
      name: 'VxpDropdownItem',
      props: {
        item: {
          type: Object,
          default: null,
        },
        title: String,
        icon: String,
        iconClass: String,
        elementIndex: Number,
        isActive: {
          type: Boolean,
          default: false,
        },
      },
      propsData: {
        item,
      },
      localVue,
    });
  });
  describe('dropdown item component contains label component', () => {
    it('at least one label component inside the dropdown item.', () => {
      const labelWrappers = wrapper.findAll(Label).wrappers;
      expect(labelWrappers.length).to.above(1);
    });
  });
});
