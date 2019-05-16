import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import localVue from '../local-vue';
import IconButton from '../../../src/components/IconButton';

describe('IconButton.vue', () => {
  const icon = 'basket';
  const newIcon = 'blue';
  const isEnabled = false;
  const iconSizePercentage = 0.45;
  const size = 35;
  const newSize = 50;
  const font = 'nuicon';
  const tap = sinon.spy();
  const wrapper = mount(IconButton, {
    name: 'IconButton',
    props: {
      icon: String,
      size: [Number, String],
      font: String,
      isEnabled: Boolean,
    },
    propsData: {
      icon,
      size,
      font,
      isEnabled,
    },
    listeners: {
      tap,
    },
    localVue,
  });
  describe('the component received given props correctly.', () => {
    it(`initial value taken from icon is equal to: ${icon}.`, () => {
      expect(wrapper.props().icon).to.equal(icon);
    });
    it(`icon property doesn't receive value.`, () => {
      const classes = wrapper.classes();
      wrapper.setProps({ icon: undefined });
      expect(wrapper.classes()).to.not.equal(classes);
    });
    it(`button icon changing with : ${newIcon}.`, () => {
      wrapper.setProps({ icon: newIcon });
      expect(wrapper.props().icon).to.equal(newIcon);
    });
    it(`size property is equal to: ${size}.`, () => {
      expect(wrapper.props().size).to.equal(size);
    });
    it(`button size changing with : ${newSize}.`, () => {
      wrapper.setProps({ size: newSize });
      expect(wrapper.props().size).to.equal(newSize);
    });
    it(`button isEnabled changing  : ${isEnabled}.`, () => {
      const classes = wrapper.classes();
      wrapper.setProps({ isEnabled: isEnabled });
      expect(wrapper.classes()).to.not.equal(classes);
    });
  });
  describe('the component rendered the attributes and style values correctly.', () => {
    it(`the size attribute which changes font-size and line-height in Nativescript-vue is equal to: ${newSize}.`, () => {
      if (newSize) {
        const iconSize = iconSizePercentage * newSize;
        expect(wrapper.find('button').element.style.fontSize).to.equal(iconSize + 'px');
        wrapper.vm.platform = 'android';
        expect(wrapper.find('button').element.style.height).to.equal(newSize + 'px');
      }
    });
    it(`the font attribute which changes font family equal to: ${font}.`, () => {
      if (font) {
        expect(wrapper.find('button').element.style.fontFamily).to.equal(font);
      }
    });
  });
  describe('Events testing', () => {
    it('click event property is passed to the component successfully.', () => {
      wrapper.setProps({ isEnabled: true });
      wrapper.trigger('click');
      wrapper.trigger('click');
      expect(wrapper.emitted().tap.length).to.equal(2);
      expect(tap.calledTwice).to.equal(true);
    });
  });
});
