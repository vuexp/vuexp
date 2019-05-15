import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Checkbox from '../../../src/components/Checkbox';
import localVue from '../local-vue';

describe('Checkbox Component Tests', () => {
  let wrapper;

  const checked = true;
  const disabled = false;

  beforeEach(() => {
    wrapper = mount(Checkbox, {
      name: 'Checkbox',
      model: {
        prop: 'checked',
        event: 'change',
      },
      props: {
        checked,
        disabled,
      },
      propsData: {
        checked,
        disabled,
      },
      localVue,
    });
  });

  it(`initial value taken from checked is equal to: ${checked}.`, () => {
    expect(wrapper.props().checked).to.equal(checked);
  });

  it(`initial value taken from checked is equal to: ${disabled}.`, () => {
    expect(wrapper.props().disabled).to.equal(disabled);
  });

  it(`initial value taken from checked is equal to: ${!checked}.`, () => {
    wrapper.setProps({
      checked: !checked,
    });
    expect(wrapper.props().checked).to.equal(!checked);
  });

  it(`Changing disabled prop ${disabled} to ${!disabled}`, () => {
    wrapper.setProps({
      disabled: !disabled,
    });
    expect(wrapper.props().disabled).to.equal(!disabled);
  });

  it(`click event property is passed to the component successfully`, () => {
    wrapper.trigger('click');
    expect(wrapper.emitted('change').length).to.equal(1);
  });

  it(`If checkbox is disabled, it isn't clickable`, () => {
    wrapper.trigger('click');
    wrapper.setProps({
      disabled: true,
    });
    wrapper.trigger('click');
    expect(wrapper.emitted('change').length).to.equal(1);
  });
});
