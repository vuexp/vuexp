import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import BounceTransition from '../../../src/transitions/BounceTransition';
import TextField from '../../../src/components/TextField';
import localVue from '../local-vue';

describe('BounceTransition Unit Test.', () => {
  let wrapper;
  let child;
  let text;
  beforeEach(() => {
    // Child component will be wrapped with BounceTransition.
    child = {
      render(h) {
        return h(TextField, {
          propsData: {
            label: 'Username',
            text,
            hint: 'BounceTransition',
          },
        });
      },
    };
    wrapper = mount(BounceTransition, {
      slots: {
        default: [child],
      },
      localVue,
    });
  });
  describe('BounceTransition component has slot which is TextField.', () => {
    it('The length of the default slots is equal to 1.', () => {
      expect(wrapper.vm.$slots.default.length).to.equal(1);
    });
    it('The given child is TextField which has the classes below.', () => {
      expect(wrapper.find('.vxp-textfield').exists()).to.equal(true);
    });
  });
});
