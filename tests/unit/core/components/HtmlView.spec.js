import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import HtmlView from '../../../../src/core/components/HtmlView/HtmlView';

describe('HtmlView Test.', () => {
  const html = '<div><h1>Initial Html</h1></div>';
  const wrapper = mount(HtmlView, {
    name: 'HtmlView',
    props: {
      html: String,
    },
    propsData: {
      html,
    },
  });

  describe('The component receives given props correctly.', () => {
    it(`should html property is equal to: ${html}.`, () => {
      expect(wrapper.props().html).to.equal(html);
    });
    it(`should the component contains span element`, () => {
      expect(wrapper.contains('span')).to.equal(true);
    });
  });
  describe('The span inside the component has attributes', () => {
    it(`should finding span element and the element has attribute html`, () => {
      wrapper.find('span').element.setAttribute('html', '<div><h1>Initial Html</h1></div>');
      expect(wrapper.find('span').attributes().html).to.equal(html);
    });
  });
});
