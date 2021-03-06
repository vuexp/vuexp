import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import TextView from '../../../../src/core/components/TextView/TextView';
import VxpLabel from '../../../../src/components/VxpLabel';

describe('TextView', () => {
  // Mock up values.
  const text = 'initial string';
  const editable = true;
  const maxLength = 10;
  const keyboardType = 'email';
  const hint = 'some placeholder';
  const autocorrect = false;
  const preventNextLine = true;

  // Spy events.
  const updateValueSpy = sinon.spy(TextView.methods, 'updateValue');
  const blur = sinon.spy();
  const focus = sinon.spy();
  const returnPress = sinon.spy();
  const textChange = sinon.spy();
  const input = sinon.spy();
  const onKeyDown = sinon.spy();
  const onPaste = sinon.spy();

  const LabelWrapper = {
    render(h) {
      return h(VxpLabel, {
        props: {
          text: 'label',
        },
        attrs: {
          height: 120,
          alignSelf: 'flex-start',
        },
      });
    },
  };

  const wrapper = mount(TextView, {
    model: {
      event: 'input',
      prop: 'text',
    },
    name: 'TextView',
    // This will converted to props.
    props: {
      preventNextLine: Boolean,
      maxLength: Number,
      editable: Boolean,
      keyboardType: String,
      hint: String,
      text: String,
      autocorrect: Boolean,
    },
    propsData: {
      maxLength,
      editable,
      keyboardType,
      hint,
      text,
      autocorrect,
      preventNextLine,
    },
    listeners: {
      blur,
      focus,
      returnPress,
      textChange,
      input,
      onKeyDown,
      onPaste,
    },
    slots: {
      default: [LabelWrapper],
    },
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

    it(`preventNextLine is equal to: ${preventNextLine}.`, () => {
      expect(wrapper.props().preventNextLine).to.equal(preventNextLine);
    });

    it(`editable property is equal to: ${editable}.`, () => {
      expect(wrapper.props().editable).to.equal(editable);
    });

    it(`keyboardType property is equal to ${keyboardType}.`, () => {
      expect(wrapper.props().keyboardType).to.equal(keyboardType);
    });

    it(`auto correct property is equal to: ${autocorrect}.`, () => {
      expect(wrapper.props().autocorrect).to.equal(autocorrect);
    });

    it('focus event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.focus).to.not.equal(undefined);
    });

    it('input event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.input).to.not.equal(undefined);
    });

    it('change event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.textChange).to.not.equal(undefined);
    });

    it('blur event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.blur).to.not.equal(undefined);
    });

    it('onKeyDown key event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.onKeyDown).to.not.equal(undefined);
    });

    it('onPaste key event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.onPaste).to.not.equal(undefined);
    });

    it('pressing return key event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.returnPress).to.not.equal(undefined);
    });
  });

  describe('TextView component contains label component', () => {
    it('there is one label component inside the textview.', () => {
      const labelWrappers = wrapper.findAll(VxpLabel).wrappers;
      expect(labelWrappers.length).to.equal(1);
    });

    it('label component displays the given text prop{`label`} correctly inside the textview.', () => {
      const labelWrappers = wrapper.findAll(VxpLabel).wrappers;
      const label = labelWrappers[0].find(VxpLabel);
      expect(label.element.textContent.trim()).to.equal('label');
    });
  });

  describe('the textview inside the component has attributes with correct values.', () => {
    it(`the maxlength attribute is equal to${maxLength}.`, () => {
      // The component returns the attribute as string so, the maxLength property is converted to string type.
      expect(wrapper.find('textarea').attributes().maxlength).to.equal(maxLength.toString());
    });

    it(`the spellCheck attribute which is equivalent of autocorrect in Nativescript-Vue is equal to ${autocorrect}.`, () => {
      // The component returns the attribute as string so, the autocorrect property is converted to string type.
      expect(wrapper.find('textarea').attributes().spellcheck).to.equal(autocorrect.toString());
    });

    it(`the placeholder attribute which is equivalent of hint in NativeScript-Vue is equal to ${hint}.`, () => {
      expect(wrapper.find('textarea').attributes().placeholder).to.equal(hint.toString());
    });

    it(`the disabled attribute which is equivalent of editable in Nativescript-Vue is equal to${editable}.`, () => {
      expect(wrapper.find('textarea').element.disabled).to.equal(!editable);
    });
  });

  describe('the attributes of the component can be changed later on.', () => {
    it('the disabled attribute of the component is changed to true from false ?', () => {
      wrapper.find('textarea').element.disabled = true;
      expect(wrapper.find('textarea').element.disabled).to.equal(true);
      wrapper.find('textarea').element.disabled = false;
    });

    it(`the maxlength attribute of the component is changed to 15 from ${maxLength}?`, () => {
      wrapper.find('textarea').element.setAttribute('maxlength', 15);
      expect(wrapper.find('textarea').attributes().maxlength).to.equal('15');
    });

    it(`the placeholder(hint) attribute of the component is changed to new placeholder from ${hint}.`, () => {
      wrapper.find('textarea').element.setAttribute('placeholder', 'new placeholder');
      expect(wrapper.find('textarea').attributes().placeholder).to.equal('new placeholder');
    });

    it(`the spellCheck(autocorrect) attribute of the component is changed to true from ${autocorrect}.`, () => {
      wrapper.find('textarea').element.setAttribute('spellCheck', true);
      expect(wrapper.find('textarea').attributes().spellcheck).to.equal('true');
    });

    it(`the type(keyboardType) attribute of the component is changed to password from ${keyboardType}.`, () => {
      wrapper.find('textarea').element.setAttribute('type', 'password');
      expect(wrapper.find('textarea').attributes().type).to.equal('password');
    });
  });

  describe('the textView detects changes in the textarea and also throw appropriate events.', () => {
    it('the textView component gets focused and the focus event handler gets thrown', () => {
      // Focus to the textarea field.
      wrapper.find('textarea').trigger('focus');
      expect(wrapper.emitted().focus.length).to.equal(1);
      expect(focus.called).to.equal(true);
    });

    it('the value of the textview component change to new value, textview throws input and also textChange.', () => {
      // Change the value of the input field.
      wrapper.find('textarea').setValue('new value');
      expect(wrapper.find('textarea').element.value).to.equal('new value');
      expect(wrapper.emitted().input.length).to.equal(1);
      expect(wrapper.emitted().textChange.length).to.equal(1);
      expect(input.called).to.equal(true);
      expect(textChange.called).to.equal(true);
      expect(updateValueSpy.called).to.equal(true);
    });

    it('the textView loses its focus and throws blur event so, the blur event handler gets thrown', () => {
      wrapper.find('textarea').trigger('blur');
      expect(wrapper.emitted().blur.length).to.equal(1);
      expect(blur.called).to.equal(true);
    });

    it(`the user pushes the enter button to return a value so while the input field prevents next line,
      only the event handler named returnPress gets thrown.`, () => {
      wrapper.find('textarea').trigger('keydown.enter', {
        shiftKey: false,
      });
      wrapper.find('textarea').trigger('keyup.enter', {
        shiftKey: false,
      });
      expect(wrapper.emitted().returnPress.length).to.equal(1);
      expect(returnPress.called).to.equal(true);
    });

    it(`the user pushes the shift+enter buttons to return a value so while the input field does not prevent next line,
      the input gets next line but does not throw returnpress.`, () => {
      wrapper.find('textarea').trigger('keyup.enter', {
        shiftKey: true,
      });
      expect(wrapper.emitted().returnPress.length).to.equal(1);
      expect(returnPress.called).to.equal(true);
    });

    it(`the user pushes the enter button to return a value so while the input field does not prevent next line,
      the input gets next line but does not throw returnpress.`, () => {
      wrapper.setProps({ preventNextLine: false });
      wrapper.find('textarea').trigger('keyup.enter', {
        shiftKey: false,
      });
      expect(wrapper.emitted().returnPress.length).to.equal(2);
      expect(returnPress.called).to.equal(true);
    });

    it('setting listeners to null of the component so that it will not throw appropriate events.', () => {
      wrapper.vm.$listeners.input = null;
      wrapper.vm.$listeners.textChange = null;
      wrapper.vm.$listeners.returnPress = null;
      wrapper.find('textarea').setValue('newest value');
      expect(wrapper.emitted().input.length).to.equal(1);
      expect(wrapper.emitted().textChange.length).to.equal(1);
      expect(input.calledTwice).to.equal(false);

      expect(onKeyDown.called).to.equal(true);
      expect(wrapper.emitted().onKeyDown.length).to.equal(1);
      expect(textChange.calledTwice).to.equal(false);

      wrapper.vm.$listeners.onKeyDown = null;
      wrapper.find('textarea').trigger('keydown');
      expect(wrapper.emitted().onKeyDown.length).to.equal(1);

      expect(onPaste.called).to.equal(false);
      wrapper.find('textarea').trigger('paste', { type: 'paste', clipboardData: {} });
      expect(onPaste.called).to.equal(true);
      expect(wrapper.emitted().onPaste.length).to.equal(1);

      wrapper.vm.$listeners.onPaste = null;
      wrapper.find('textarea').trigger('paste', { type: 'paste', clipboardData: {} });
      expect(wrapper.emitted().onPaste.length).to.equal(1);
    });
  });
});
