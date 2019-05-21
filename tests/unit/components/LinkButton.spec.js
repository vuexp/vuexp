import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import LinkButton from '../../../src/components/LinkButton.vue';
import localVue from '../local-vue';

describe('LinkButton.vue', () => {
  const text = 'LinkButton Text';
  const newText = 'LinkButton New Text';
  const externalUrl = 'https://www.google.com';
  const tap = sinon.spy();

  const wrapper = mount(LinkButton, {
    name: 'LinkButton',
    propsData: {
      text,
    },
    listeners: {
      tap,
    },
    localVue,
  });

  const externalWrapper = mount(LinkButton, {
    name: 'LinkButton',
    propsData: {
      text,
      externalUrl,
    },
    listeners: {
      tap,
    },
    localVue,
  });

  describe('the component received given props correctly.', () => {
    it(`initial value taken from text is equal to: ${text}.`, () => {
      expect(wrapper.props().text).to.equal(text);
    });
    it(`button text changing with : ${newText}.`, () => {
      wrapper.setProps({ text: newText });
      expect(wrapper.props().text).to.equal(newText);
    });
    it(`button text is equal to: ${newText}. on render`, () => {
      expect(wrapper.text()).to.equal(newText);
    });
    it(`button default externalUrl to false`, () => {
      expect(typeof wrapper.props().externalUrl).to.equal('undefined');
    });
  });

  describe('External Url Testing.', () => {
    it(`button external url given correctly`, () => {
      expect(externalWrapper.props().externalUrl).to.equal(externalUrl);
    });
    it(`button external url given correctly`, () => {
      expect(externalWrapper.find('a').element.getAttribute('href')).to.equal(externalUrl);
    });
  });

  describe('Events testing', () => {
    it('click event property is passed to the component successfully.', () => {
      wrapper.find('a').trigger('click');
      expect(wrapper.emitted().tap.length).to.equal(1);
      expect(tap.calledOnce).to.equal(true);
    });
  });
});
