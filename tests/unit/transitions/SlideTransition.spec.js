import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import SlideTransition from '../../../src/transitions/SlideTransition';
import TextField from '../../../src/core/components/TextField/TextField';
import localVue from '../local-vue';

describe('SlideTransition Unit Test.', () => {
  let wrapper;
  let child;
  let text;
  beforeEach(() => {
    // Child component will be wrapped with SlideTransition.
    child = {
      render(h) {
        return h(TextField, {
          propsData: {
            label: 'Name',
            text,
            hint: 'SlideTransition',
          },
        });
      },
    };
    wrapper = mount(SlideTransition, {
      slots: {
        default: [child],
      },
      localVue,
    });
  });
  describe('SlideTransition component has slot which is TextField.', () => {
    it('The length of the default slots is equal to 1.', () => {
      expect(wrapper.vm.$slots.default.length).to.equal(1);
    });
    it('The given child is textfield which has the classes below.', () => {
      expect(wrapper.find('.vxp-textfield').exists()).to.equal(true);
    });
  });
});

describe('SlideTransition Unit Test.', () => {
  const direction = 'right';
  const wrapper = mount(SlideTransition, {
    props: {
      direction: {
        type: String,
        default: 'left',
      },
    },
    propsData: {
      direction,
    },
    localVue,
  });
  describe('the component received given props correctly.', () => {
    it(`SlideTransition direction is equal to: ${'right'}.`, () => {
      expect(wrapper.props().direction).to.equal('right');
    });
    it(`Changing direction prop.`, () => {
      wrapper.setProps({
        direction: 'up',
      });
      expect(wrapper.props().direction).to.equal('up');
      wrapper.setProps({
        direction: 'down',
      });
      expect(wrapper.props().direction).to.equal('down');
      wrapper.setProps({
        direction: '',
      });
      expect(wrapper.props().direction).to.equal('');
    });
  });
});
