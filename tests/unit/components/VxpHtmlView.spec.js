import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import VxpHtmlView from '../../../src/components/VxpHtmlView';
import WebView from '../../../src/core/components/WebView/WebView';
import localVue from '../local-vue';

describe('VxpHtmlView Test.', () => {
  const src = '<div><h1>Initial Html</h1></div>';
  const wrapper = mount(VxpHtmlView, {
    name: 'VxpHtmlView',
    propsData: {
      src,
    },
    localVue,
  });

  describe('The component receives given props correctly.', () => {
    it(`should src property is equal to: ${src}.`, () => {
      expect(wrapper.props().src).to.equal(src);
    });
    it(`should the component contains WebView element.`, () => {
      expect(wrapper.contains(WebView)).to.equal(true);
    });
  });
});
