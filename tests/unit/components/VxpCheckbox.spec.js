import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import VxpCheckbox from '../../../src/components/VxpCheckbox';
import localVue from '../local-vue';

describe('Checkbox Component Tests', () => {
  let wrapper;

  const checked = true;
  const disabled = false;
  const visibility = true;

  const inVisibleVxpCheckbox = mount(VxpCheckbox, {
    props: {
      visible: Boolean,
    },
    propsData: {
      visibility: false,
    },
  });

  beforeEach(() => {
    wrapper = mount(VxpCheckbox, {
      name: 'VxpCheckbox',
      model: {
        prop: 'checked',
        event: 'change',
      },
      props: {
        checked,
        disabled,
        visibility,
      },
      propsData: {
        checked,
        disabled,
        visibility,
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
  it('display:none css rule is NOT applied when visible prop is not provided', () => {
    const hasInvisibleClass = inVisibleVxpCheckbox.find(VxpCheckbox).element.className.indexOf('vpx-label-invisible') != -1;
    expect(hasInvisibleClass).to.equal(false);
  });
});
