import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import StackLayout from '../../../src/layouts/StackLayout';
import TextField from '../../../src/core/components/TextField/TextField';
import Label from '../../../src/core/components/Label/Label';
import VxpTextField from '../../../src/components/VxpTextField';
import localVue from '../local-vue';

describe('VxpTextField', () => {
  // TextField mock up values.
  const text = 'initial string';
  const disabled = false;
  const maxLength = 10;
  const autocorrect = false;
  const keyboardType = 'text';
  const hint = 'VxpTextField';
  const returnKeyType = 'done';
  const autoFocus = true;

  const blur = sinon.spy();
  const focus = sinon.spy();
  const returnPress = sinon.spy();
  const textChange = sinon.spy();

  // Label mock up values.
  const label = 'VxpTextField Label';

  // Initializing the component.
  const wrapper = mount(VxpTextField, {
    name: 'VxpTextField',
    model: {
      event: 'input',
      prop: 'text',
    },
    props: {
      maxLength: Number,
      disabled: Boolean,
      label: String,
      text: String,
      hint: String,
      autocorrect: Boolean,
      returnKeyType: String,
      autoFocus: Boolean,
      errors: {
        type: Array,
        default: () => [],
      },
    },
    propsData: {
      maxLength,
      disabled,
      label,
      hint,
      text,
      autocorrect,
      returnKeyType,
      autoFocus,
    },
    listeners: {
      blur,
      focus,
      returnPress,
      textChange,
    },
    localVue,
  });

  describe('the component contains exactly one label, one textfield and one stacklayout.', () => {
    it('there is one StackLayout.', () => {
      expect(wrapper.contains(StackLayout)).to.equal(true);
      expect(wrapper.findAll(StackLayout).length).to.equal(1);
    });
    it('there is one Label.', () => {
      expect(wrapper.contains(Label)).to.equal(true);
      expect(wrapper.findAll(Label).length).to.equal(1);
    });
    it('there is one TextField.', () => {
      expect(wrapper.contains(TextField)).to.equal(true);
      expect(wrapper.findAll(TextField).length).to.equal(1);
    });
  });

  describe('the component receives given props correctly.', () => {
    it(`maxLength property is equal to: ${maxLength}.`, () => {
      expect(wrapper.props().maxLength).to.equal(maxLength);
    });

    it(`initial value taken from v-model is equal to: ${text}.`, () => {
      expect(wrapper.props().text).to.equal(text);
    });

    it(`hint property is equal to: ${hint}.`, () => {
      expect(wrapper.props().hint).to.equal(hint);
    });

    it(`returnKeyType property is equal to: ${returnKeyType}.`, () => {
      expect(wrapper.props().returnKeyType).to.equal(returnKeyType);
    });

    it(`disabled property is equal to: ${disabled}.`, () => {
      expect(wrapper.props().disabled).to.equal(disabled);
    });

    it(`auto correct property is equal to: ${autocorrect}.`, () => {
      expect(wrapper.props().autocorrect).to.equal(autocorrect);
    });

    it(`auto Focus property is equal to: ${autoFocus}.`, () => {
      expect(wrapper.props().autoFocus).to.equal(autoFocus);
    });

    it('focus event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.focus).to.not.equal(undefined);
    });

    it('change event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.textChange).to.not.equal(undefined);
    });

    it('blur event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.blur).to.not.equal(undefined);
    });

    it('pressing return key event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.returnPress).to.not.equal(undefined);
    });
  });

  describe(`the label inside the component has displayed the correct label`, () => {
    it(`Label displays ${label}.`, () => {
      expect(wrapper.find(Label).element.textContent.trim()).to.equal(label);
    });
  });

  describe('the input inside the component named TextField has attributes with correct values.', () => {
    it(`the maxlength attribute is equal to${maxLength}.`, () => {
      // The component returns the attribute as string so, the maxLength property is converted to string type.
      expect(wrapper.find('input').attributes().maxlength).to.equal(maxLength.toString());
    });

    it(`the placeholder attribute is equal to${hint}.`, () => {
      expect(wrapper.find('input').attributes().placeholder).to.equal(hint);
    });

    it(`the spellCheck attribute which is equivalent of autoCorrect in Nativescript-Vue is equal to${autocorrect}.`, () => {
      // The component returns the attribute as string so, the autoCorrect property is converted to string type.
      expect(wrapper.find('input').attributes().spellcheck).to.equal(autocorrect.toString());
    });

    it(`the disabled attribute which is equivalent of editable in Nativescript-Vue is equal to${disabled}.`, () => {
      expect(wrapper.find('input').element.disabled).to.equal(disabled);
    });
  });

  describe('the attributes of the TextField component can be changed later on.', () => {
    it('the disabled attribute of the component is changed to true from false ?', () => {
      wrapper.find('input').element.disabled = true;
      expect(wrapper.find('input').element.disabled).to.equal(true);
    });

    it(`the maxlength attribute of the component is changed to 15 from ${maxLength}?`, () => {
      wrapper.find('input').element.setAttribute('maxlength', 15);
      expect(wrapper.find('input').attributes().maxlength).to.equal('15');
    });

    it(`the placeholder(hint) attribute of the component is changed to new placeholder from ${hint}.`, () => {
      wrapper.find('input').element.setAttribute('placeholder', 'new placeholder');
      expect(wrapper.find('input').attributes().placeholder).to.equal('new placeholder');
    });

    it(`the spellCheck(autoCorrect) attribute of the component is changed to true from ${autocorrect}.`, () => {
      wrapper.find('input').element.setAttribute('spellCheck', true);
      expect(wrapper.find('input').attributes().spellcheck).to.equal('true');
    });

    it(`the type(keyboardType) attribute of the component is changed to password from ${keyboardType}.`, () => {
      wrapper.find('input').element.setAttribute('type', 'password');
      expect(wrapper.find('input').attributes().type).to.equal('password');
    });
  });

  describe('the textfield inside the VxpTextField detects changes in the input and also throw appropriate events.', () => {
    it('the textfield component gets focused and the focus event handler gets thrown', () => {
      // Focus to the input field.
      wrapper.find('input').trigger('focus');
      expect(wrapper.emitted().focus.length).to.equal(2);
      expect(focus.called).to.equal(true);
    });

    it('the value of the textfield component change to new value', () => {
      // Change the value of the input field.
      wrapper.find('input').setValue('new value');
      expect(wrapper.find('input').element.value).to.equal('new value');
    });

    it('the textfield loses its focus and throws blur event so, the blur event handler gets thrown', () => {
      wrapper.find('input').trigger('blur');
      expect(wrapper.emitted().blur.length).to.equal(1);
      expect(blur.called).to.equal(true);
    });

    it('the textfield emits change event so, event handler named textChange gets thrown', () => {
      wrapper.find('input').trigger('change');
      expect(wrapper.emitted().textChange.length).to.equal(1);
      expect(textChange.called).to.equal(true);
    });

    it('the user pushes the enter button to return a value so, event handler named returnPress gets thrown', () => {
      wrapper.find('input').trigger('keyup.enter');
      expect(wrapper.emitted().returnPress.length).to.equal(1);
      expect(returnPress.called).to.equal(true);
    });
  });
});
