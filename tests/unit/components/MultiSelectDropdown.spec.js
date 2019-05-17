import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import MultiSelectDropdown from '../../../src/components/MultiSelectDropdown';

describe('MultiSelectDropdown', () => {
  const wrapperClass = 'vxp-multiselectdropdown';

  let wrapper = shallowMount(MultiSelectDropdown, {});
  beforeEach(() => {
    wrapper = shallowMount(MultiSelectDropdown, {});
  });

  it('mounts with default props', () => {
    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('will have correct default props', () => {
    expect(wrapper.props().items instanceof Array).to.eq(true);
    expect(wrapper.props().items.length).to.eq(0);
  });

  it(`will have a wrapper with ${wrapperClass} class`, () => {
    expect(wrapper.vm.$el.className).to.contains(wrapperClass);
  });
});
