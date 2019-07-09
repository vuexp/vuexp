import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import VxpAccordionItem from '../../../src/components/VxpAccordionItem';

describe('VxpAccordionItem', () => {
  const id = '#id';
  const title = '#title';
  const wrapper = mount(VxpAccordionItem, {
    name: 'VxpAccordionItem',
    props: {
      id: { default: null },
      title: { type: String, required: true },
    },
    propsData: {
      id,
      title,
    },
  });

  it(`title property is equal to: ${title}.`, () => {
    expect(wrapper.props().title).to.equal(title);
  });
  it(`change title prop to new title: ${title + '-new'}.`, () => {
    wrapper.setProps({ title: title + '-new' });
    expect(wrapper.props().title).to.equal(title + '-new');
  });
  it(`computedId is equal to: ${id}.`, () => {
    expect(wrapper.vm.computedId).to.equal(id);
  });
  it(`id property is equal to: ${id}.`, () => {
    expect(wrapper.props().id).to.equal(id);
  });
  it(`change id prop to new id: ${id + '-new'}.`, () => {
    wrapper.setProps({ id: id + '-new' });
    expect(wrapper.props().id).to.equal(id + '-new');
  });
});
