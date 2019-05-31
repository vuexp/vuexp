import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import * as sinon from 'sinon';
import localVue from '../../local-vue';
import ListPickerModal from '../../../../src/core/components/ListPickerModal/ListPickerModal';
import Button from '../../../../src/core/components/Button/Button';

let wrapper;

describe('ListPickerModal.', () => {
  const listOfItems = ['nativescript', 'vue', 'nurd', 'nuweb'];
  const selectedIndex = 3;
  const modalCloseSpy = sinon.spy();

  beforeEach(() => {
    modalCloseSpy.resetHistory();
    wrapper = mount(ListPickerModal, {
      propsData: {
        listOfItems,
        selectedIndex,
      },
      mocks: {
        $modal: { close: modalCloseSpy },
      },
      localVue,
    });
  });

  describe('The component received given props correctly.', () => {
    it(`should given items property is equal to ${listOfItems}.`, () => {
      expect(wrapper.props().listOfItems).to.equal(listOfItems);
    });
    it(`should given index property is equal to ${selectedIndex}.`, () => {
      expect(wrapper.props().selectedIndex).to.equal(selectedIndex);
    });
  });

  describe('done & cancel Method test.', () => {
    it(`should close method is not call.`, () => {
      expect(modalCloseSpy.called).to.eq(false);
    });

    it(`should cancel method is called once.`, () => {
      wrapper
        .findAll(Button)
        .at(0)
        .trigger('click');

      expect(modalCloseSpy.called).to.eq(true);
    });

    it(`should done method is called once.`, () => {
      wrapper
        .findAll(Button)
        .at(1)
        .trigger('click');

      expect(modalCloseSpy.called).to.eq(true);
    });

    it(`should close method is not call when $modal is undefined.`, () => {
      let tempWrapper = mount(ListPickerModal, { localVue });
      tempWrapper
        .findAll(Button)
        .at(0)
        .trigger('click');

      tempWrapper
        .findAll(Button)
        .at(1)
        .trigger('click');

      expect(modalCloseSpy.called).to.eq(false);
    });
  });
});
