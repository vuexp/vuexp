import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import Span from '../../../../src/core/components/Span/Span.vue';

describe('Span.vue', () => {
  const text = 'initial string';
  const number = 3;
  const tap = sinon.spy();
  const wrapper = mount(Span, {
    name: 'Span',
    props: {
      text: String,
    },
    propsData: {
      text,
    },
    listeners: {
      tap,
    },
  });
  it(`initial value taken from text is equal to: ${text}.`, () => {
    expect(wrapper.props().text).to.equal(text);
  });
  it('click event property is passed to the component successfully.', () => {
    wrapper.trigger('click');
    wrapper.trigger('click');
    expect(tap.calledTwice).to.equal(true);
    expect(wrapper.emitted().tap.length).to.equal(2);
  });
  it(`the text inside the Span component is equal to a number.${number}`, done => {
    wrapper.setProps({ text: number });
    expect(wrapper.props().text).to.equal(number);
    done();
  });
});

describe('the shows icon correctly.', () => {
  const text = 'bell | fonticon';
  const wrapper = mount(Span, {
    name: 'Label',
    props: {
      text: String,
    },
    propsData: {
      text,
    },
  });
  it(`Icon component given \`bell\` class`, () => {
    expect(wrapper.find(Span).classes()).to.includes('bell');
  });
  it(`Icon components text should be empty`, () => {
    expect(
      wrapper
        .find('span')
        .text()
        .replace(/\n/g, '')
        .trim(),
    ).to.equal('');
  });
});
