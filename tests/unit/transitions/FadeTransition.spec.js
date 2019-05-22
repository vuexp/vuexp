import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import FadeTransition from '../../../src/transitions/FadeTransition';
import TextField from '../../../src/core/components/TextField/TextField';
import localVue from '../local-vue';

describe('FadeTransition Unit Test.', () => {
  let wrapper;
  let child;
  let text;
  beforeEach(() => {
    // Child component will be wrapped with FadeTransition.
    child = {
      render(h) {
        return h(TextField, {
          propsData: {
            label: 'Username',
            text,
            hint: 'ozercevikaslan',
          },
        });
      },
    };
    wrapper = mount(FadeTransition, {
      slots: {
        default: [child],
      },
      localVue,
    });
  });
  describe('FadeTransition component has slot which is Textfield.', () => {
    it('The length of the default slots is equal to 1.', () => {
      expect(wrapper.vm.$slots.default.length).to.equal(1);
    });
    it('The given child is textfield which has the classes below.', () => {
      expect(wrapper.find('.vxp-textfield').exists()).to.equal(true);
    });
  });
});
