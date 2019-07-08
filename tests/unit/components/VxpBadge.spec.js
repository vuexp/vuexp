import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import VxpBadge from '../../../src/components/VxpBadge';
import localVue from '../local-vue';

describe('VxpBadge.vue', () => {
  const badge = 5;
  const newBadge = 35;

  const wrapper = mount(VxpBadge, {
    name: 'VxpBadge',
    propsData: {
      badge,
    },
    localVue,
  });
  describe('the component received given props correctly.', () => {
    it(`initial value taken from badge is equal to: ${badge}.`, () => {
      expect(wrapper.props().badge).to.equal(badge);
    });
    it(`badge changing with : ${newBadge}.`, () => {
      wrapper.setProps({ badge: newBadge });
      expect(wrapper.props().badge).to.equal(newBadge);
    });
    it(`badge changing.`, () => {
      wrapper.setProps({ badge: newBadge });
      if (newBadge) {
        expect(wrapper.find('.vxp-badge--multi-digit').exists()).to.equal(true);
      }
    });
  });
});
