import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { Page, Label } from '../../../src/main';

describe('Page.vue', () => {
  const LabelWrapper = {
    render(h) {
      return h(Label, {
        props: {
          text: 'label',
        },
        attrs: {
          height: 120,
          alignSelf: 'flex-start',
        },
      });
    },
  };
  const wrapper = mount(Page, {
    name: 'Page',
    slots: {
      default: [LabelWrapper],
    },
  });
  describe('the component contains exactly one div.', () => {
    it('there is one div.', () => {
      expect(wrapper.contains('div')).to.equal(true);
      expect(wrapper.findAll('div').length).to.equal(1);
    });
  });

  describe('page component contains label component', () => {
    it('there is one label component inside the page.', () => {
      const labelWrappers = wrapper.findAll(Label).wrappers;
      expect(labelWrappers.length).to.equal(1);
    });

    it('label component displays the given text prop(`label`) correctly inside the page.', () => {
      const labelWrappers = wrapper.findAll(Label).wrappers;
      const label = labelWrappers[0].find(Label);
      expect(label.element.textContent.trim()).to.equal('label');
    });
  });
});
