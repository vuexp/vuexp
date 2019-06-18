import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import ActionDialog from '../../../../../src/core/dialogs/ActionDialog';
import Button from '../../../../../src/core/components/Button/Button';
import StackLayout from '../../../../../src/layouts/StackLayout';

describe('ActionDialog', () => {
  // ActionDialog mock up values.
  const title = 'initial string';
  const cancelButtonText = 'cancelButtonText';
  const options = ['option0', 'option1'];

  const close = sinon.spy(ActionDialog.methods, 'close');

  // Initializing the component.
  const wrapper = mount(ActionDialog, {
    name: 'ActionDialog',
    props: {
      title: String,
      cancelButtonText: String,
      options: Array,
    },
    propsData: {
      title,
      cancelButtonText,
      options,
    },
  });
  wrapper.setData({ isModalVisible: true });
  describe('the component receives given events correctly.', () => {
    it(`title property is equal to: ${title}.`, () => {
      expect(wrapper.props().title).to.equal(title);
    });
    it(`cancelButtonText property is equal to: ${cancelButtonText}.`, () => {
      expect(wrapper.props().cancelButtonText).to.equal(cancelButtonText);
    });
    it(`options property is equal to: ${options.toString()}.`, () => {
      expect(wrapper.props().options.toString()).to.equal(options.toString());
    });
    it(`should run options prop  default line.`, () => {
      mount(ActionDialog, {
        propsData: {
          options: undefined,
        },
      });
    });
  });
  describe('the component contains exactly two Button.', () => {
    it('there is two Button.', done => {
      expect(wrapper.contains(Button)).to.equal(true);
      expect(wrapper.findAll(Button).length).to.equal(3);
      done();
    });
  });

  describe('the component contains elements.', () => {
    it('the component contains one StackLayout element', () => {
      expect(wrapper.contains(StackLayout)).to.equal(true);
    });
  });

  describe('Events testing', () => {
    it('the click event of Button element with cancel-button class is passed to the component successfully and the action dialog gets hidden.', () => {
      wrapper.setData({ isModalVisible: true });
      const button = wrapper.find('.vxp-action-dialog__footer__cancel-button');
      button.trigger('click');
      expect(wrapper.emitted().submit.length).to.equal(1);
      expect(wrapper.emitted().submit[0][0]).to.equal(cancelButtonText);
      expect(close.called).to.equal(true);
      expect(wrapper.vm.isModalVisible).to.equal(false);
    });

    it('Event triggered on selected item', () => {
      wrapper.setData({ isModalVisible: true });
      const emittedCount = wrapper.emitted().submit.length;
      wrapper
        .findAll(StackLayout)
        .at(1)
        .find('button')
        .trigger('click');
      expect(wrapper.emitted().submit.length).to.equal(emittedCount + 1);
      const result = wrapper.emitted().submit.pop();
      expect(result[0]).to.equal(options[0]);
    });
  });
});
