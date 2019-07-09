import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import VxpAccordion from '../../../src/components/VxpAccordion';
import VxpAccordionItem from '../../../src/components/VxpAccordionItem';

describe('VxpAccordion', () => {
  const initialExpandedItems = [];
  const autoCollapse = false;
  let wrapper;
  before(() => {
    wrapper = mount(VxpAccordion, {
      name: 'VxpAccordion',
      props: {
        initialExpandedItems: {
          type: Array,
          default: [],
        },
        autoCollapse: {
          type: Boolean,
          default: false,
        },
      },
      propsData: {
        initialExpandedItems,
        autoCollapse,
      },
    });
  });
  it(`initialExpandedItems property is equal to: ${initialExpandedItems}.`, () => {
    expect(wrapper.props().initialExpandedItems).to.equal(initialExpandedItems);
  });
  it(`autoCollapse is equal to: ${autoCollapse}.`, () => {
    expect(wrapper.vm.autoCollapse).to.equal(autoCollapse);
  });
});

describe('VxpAccordion+VxpAccordionItem', () => {
  const accordionItem1Title = 'item 1';
  const accordionItem2Title = 'item 2';
  let accordionItem1, accordionItem2, wrapper;
  before(() => {
    accordionItem1 = {
      render(h) {
        return h(VxpAccordionItem, {
          props: {
            title: accordionItem1Title,
          },
        });
      },
    };
    accordionItem2 = {
      render(h) {
        return h(VxpAccordionItem, {
          props: {
            title: accordionItem2Title,
          },
        });
      },
    };

    wrapper = mount(VxpAccordion, {
      name: 'VxpAccordion',
      sync: false,
      props: {
        initialExpandedItems: {
          type: Array,
          default: [2],
        },
        autoCollapse: {
          type: Boolean,
          default: false,
        },
      },
      slots: {
        default: [accordionItem1, accordionItem2],
      },
    });
  });

  it(`initialExpandedItems property length equal to: 1.`, () => {
    expect(wrapper.props().initialExpandedItems.length).to.equal(1);
  });

  it(`child component length equal to 2.`, () => {
    expect(wrapper.vm.$slots.default.length).to.equal(2);
  });

  xit(`children length equal to 2.`, () => {
    expect(wrapper.vm.children.length).to.equal(2);
  });
  xit(`Accordion Item titles are correct.`, () => {
    expect(wrapper.find('#accordionItem1').text()).to.equal(accordionItem1Title);
    expect(wrapper.find('#accordionItem2').text()).to.equal(accordionItem2Title);
  });
});
