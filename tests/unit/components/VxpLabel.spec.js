import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import VxpLabel from '../../../src/components/VxpLabel.vue';
import Label from '../../../src/core/components/Label/Label';

describe('VxpLabel.vue', () => {
  const wrapper = mount(VxpLabel);
  it('VxpLabel includes a label', () => {
    expect(wrapper.find(Label).exists()).to.equal(true);
  });
});
