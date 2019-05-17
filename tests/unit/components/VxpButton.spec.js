import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import VxpButton from '../../../src/components/VxpButton.vue';

describe('VxpButton.vue', () => {
  const text = 'VxpButton Text';
  const type = 'button';
  const newText = 'VxpButton New Text';
  const textWrap = false;
  const primary = true;
  const secondary = false;
  const disabled = false;
  const size = 'medium';
  const tap = sinon.spy();
  const wrapper = mount(VxpButton, {
    name: 'VxpButton',
    props: {
      text: String,
      textWrap: Boolean,
      primary: Boolean,
      secondary: Boolean,
      type: String,
      disabled: Boolean,
      size: String,
    },
    propsData: {
      text,
      textWrap,
      primary,
      secondary,
      type,
      disabled,
      size,
    },
    listeners: {
      tap,
    },
  });
  describe('the component received given props correctly.', () => {
    it(`initial value taken from text is equal to: ${text}.`, () => {
      expect(wrapper.props().text).to.equal(text);
    });
    it(`initial value taken from disabled is equal to: ${disabled}.`, () => {
      expect(wrapper.props().disabled).to.equal(disabled);
    });
    it(`initial value taken from size is equal to: ${size}.`, () => {
      expect(wrapper.props().size).to.equal(size);
    });
    it(`button text changing with : ${newText}.`, () => {
      wrapper.setProps({ text: newText });
      expect(wrapper.props().text).to.equal(newText);
    });
    it(`button text is equal to: ${newText}. on render`, () => {
      expect(wrapper.text()).to.equal(newText);
    });
    it(`textWrap property is equal to: ${textWrap}.`, () => {
      expect(wrapper.props().textWrap).to.equal(textWrap);
    });
    it(`button types checking primary to: ${primary}.`, () => {
      expect(wrapper.props().primary).to.equal(primary);
    });
    it(`button types checking secondary to: ${secondary}.`, () => {
      expect(wrapper.props().secondary).to.equal(secondary);
    });
  });
  describe('the component rendered the attributes and style values correctly.', () => {
    it(`the type attribute which is equivalent of white-space in Nativescript-vue is equal to: ${textWrap ? 'normal' : 'nowrap'}.`, () => {
      if (textWrap) {
        expect(wrapper.find('button').element.style.whiteSpace).to.equal('normal');
      } else {
        expect(wrapper.find('button').element.style.whiteSpace).to.equal('nowrap');
      }
    });
    it('changing button types and watching type/class changes', () => {
      const classes = wrapper.classes();
      wrapper.setProps({ primary: false });
      wrapper.setProps({ secondary: true });
      expect(wrapper.classes()).to.not.equal(classes);
    });
  });
  describe('Events testing', () => {
    it('click event property is passed to the component successfully.', () => {
      wrapper.trigger('click');
      wrapper.trigger('click');
      expect(wrapper.emitted().tap.length).to.equal(2);
      expect(tap.calledTwice).to.equal(true);
    });
    it(`when disabled is true disabled class is added.`, () => {
      const classes = wrapper.classes();
      wrapper.setProps({ disabled: true });
      expect(wrapper.classes()).to.not.equal(classes);
    });
    it(`when size is small, small class is added.`, () => {
      const classes = wrapper.classes();
      wrapper.setProps({ size: 'small' });
      expect(wrapper.classes()).to.not.equal(classes);
    });
  });
  describe('the shows icon correctly.', () => {
    const text = 'bell | fonticon';
    const wrapper = mount(VxpButton, {
      name: 'Label',
      props: {
        text: String,
      },
      propsData: {
        text,
      },
    });
    it(`Icon component given \`bell\` class`, () => {
      expect(wrapper.find(VxpButton).classes()).to.includes('bell');
    });
    it(`Icon components text should be empty`, () => {
      expect(
        wrapper
          .find('button')
          .text()
          .replace(/\n/g, '')
          .trim(),
      ).to.equal('');
    });
  });
});
