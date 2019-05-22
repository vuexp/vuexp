import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import * as sinon from 'sinon';
import localVue from '../local-vue';
import ListPickerModal from '../../../src/components/ListPickerModal';

describe('ListPickerModal.', () => {
  const listOfItems = ['nativescript', 'vue', 'nurd', 'nuweb'];
  const selectedIndex = 3;
  const modalCloseSpy = sinon.spy();
  const wrapper = mount(ListPickerModal, {
    propsData: {
      listOfItems,
      selectedIndex,
    },
    mocks: {
      $modal: { close: modalCloseSpy },
    },
    localVue,
  });

  describe('The component received given props correctly.', () => {
    it(`should given items property is equal to ${listOfItems}.`, () => {
      expect(wrapper.props().listOfItems).to.equal(listOfItems);
    });
    it(`should given index property is equal to ${selectedIndex}.`, () => {
      expect(wrapper.props().selectedIndex).to.equal(selectedIndex);
    });
  });

  describe('onClicked Method test.', () => {
    it(`should close method is not call.`, () => {
      let tempWrapper = mount(ListPickerModal);
      tempWrapper.vm.onClicked();
      expect(modalCloseSpy.called).to.eq(false);
    });

    it(`should close method is called once.`, () => {
      wrapper.vm.onClicked();
      expect(modalCloseSpy.called).to.eq(true);
    });
  });
});
