import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import Modal from '../../../../src/core/components/Modal/Modal';
import Slider from '../../../../src/core/components/Slider/Slider';

describe('Modal which is used as a wrapper of given component by showModal functionality Test.', () => {
  const closeModal = sinon.spy(Modal.methods, 'closeModal');
  const fullscreen = false;
  // Initializing the component.
  const wrapper = mount(Modal, {
    name: 'Modal',
    props: {
      fullscreen: {
        type: Boolean,
        default: false,
      },
    },
    propsData: {
      contentComponent: Slider,
      fullscreen,
    },
  });
  wrapper.setData({ isModalVisible: true });

  describe('the component receives given props correctly.', () => {
    it(`Fullscreen property is equal to: ${fullscreen}.`, done => {
      expect(wrapper.props().fullscreen).to.equal(fullscreen);
      done();
    });
    it(`contentComponent property is equal to: ${Slider}.`, done => {
      expect(wrapper.props().contentComponent).to.equal(Slider);
      done();
    });
  });

  describe('Style testing of the Modal.', () => {
    it('Fullscreen is false so the top class must be "vxp-modal".', done => {
      expect(wrapper.find('.vxp-modal').exists()).to.equal(true);
      done();
    });
  });

  describe('click testing of the top div tag.', () => {
    it('the div at top gets clicked and close event is emitted.', done => {
      wrapper.find('.vxp-modal').trigger('click');
      expect(closeModal.called).to.equal(true);
      expect(wrapper.vm.isModalVisible).to.equal(false);
      done();
    });
  });

  describe('Change the fullscreen prop and test the style.', () => {
    it('Setting fullscreen to true and the class name should equal to "vxp-modal--fullscreen".', done => {
      wrapper.setProps({ fullscreen: true });
      wrapper.setData({ isModalVisible: true });
      expect(wrapper.find('.vxp-modal.vxp-modal--fullscreen').exists()).to.equal(true);
      wrapper.find('.vxp-modal.vxp-modal--fullscreen').trigger('click');
      expect(closeModal.calledTwice).to.equal(true);
      expect(wrapper.vm.isModalVisible).to.equal(false);
      done();
    });
  });
});
