import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import VxpLabel from '../../../src/components/VxpLabel.vue';
import Label from '../../../src/core/components/Label/Label';

describe('VxpLabel.vue', () => {
  const propText = 'VueXP is a greate project!';
  const propTextWrap = false;

  const wrapper = mount(VxpLabel, {
    props: {
      text: String,
      textWrap: String,
    },
    propsData: {
      text: propText,
      textWrap: propTextWrap,
    },
  });
  it('VxpLabel includes a label', () => {
    expect(wrapper.find(Label).exists()).to.equal(true);
  });
  it(`text prop is passed to Label correctly.`, () => {
    expect(wrapper.find(Label).props().text).to.equal(propText);
  });
  it(`textWrap prop is passed to Label correctly.`, () => {
    expect(wrapper.find(Label).props().textWrap).to.equal(propTextWrap);
  });
});
