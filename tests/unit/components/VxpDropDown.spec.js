import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from '@vue/test-utils';
import VxpDropDown from '../../../src/components/VxpDropDown';
import localVue from '../local-vue';

describe('VxpDropDown Test.', () => {
  const placeholder = 'Select One';
  const disabled = false;
  const items = {
    label: 'value',
    values: [
      { id: 1, value: 'January' },
      { id: 2, value: 'February' },
      { id: 3, value: 'March' },
      { id: 4, value: 'April' },
      { id: 5, value: 'May' },
      { id: 6, value: 'June' },
      { id: 7, value: 'July' },
      { id: 8, value: 'August' },
      { id: 9, value: 'September' },
      { id: 10, value: 'October' },
      { id: 11, value: 'November' },
      { id: 12, value: 'December' },
    ],
  };
  const index = 3;
  const errors = ['error line 1', 'error line 2', 'error line 3'];
  let wrapper;
  beforeEach(() => {
    wrapper = mount(VxpDropDown, {
      propsData: {
        placeholder,
        disabled,
        items,
        index,
        errors,
      },
      localVue,
    });
  });

  describe('The component received given props correctly.', () => {
    it(`should placeholder property is equal to ${placeholder}.`, () => {
      expect(wrapper.props().placeholder).to.equal(placeholder);
    });

    it(`should disabled property is equal to ${disabled}.`, () => {
      expect(wrapper.props().disabled).to.equal(disabled);
    });

    it(`should items property is equal to ${items}.`, () => {
      expect(wrapper.props().items).to.equal(items);
    });

    it(`should index property is equal to ${index}.`, () => {
      expect(wrapper.props().index).to.equal(index);
    });

    it(`should errors property is equal to ${errors}.`, () => {
      expect(wrapper.props().errors).to.equal(errors);
    });

    it(`should run errors  default line.`, () => {
      wrapper = mount(VxpDropDown, {
        propsData: {
          placeholder,
          disabled,
          items,
          index,
          errors: undefined,
        },
        localVue,
      });
    });
    it(`should run items  default line.`, () => {
      wrapper = mount(VxpDropDown, {
        propsData: {
          placeholder,
          disabled,
          items: undefined,
          index,
          errors,
        },
        localVue,
      });
    });
  });

  describe('Find child elements of progress bar.', () => {
    it('should be one input inside the layout.', () => {
      const childCount = wrapper.findAll('input').length;
      expect(childCount).to.equal(1);
    });
  });

  describe('Listen to events.', () => {
    it(`should assert event is emitted one time.`, () => {
      wrapper.find('input').trigger('click');
      wrapper
        .find('ul')
        .findAll('li')
        .at(1)
        .trigger('click');
      expect(wrapper.emitted('changeIndex').length).to.equal(2);
    });
  });

  describe('Changing Props.', () => {
    it(`should changing value prop index 0: ${items[0]}.`, () => {
      wrapper.setProps({ index: 0 });
      expect(wrapper.find('input').element.value).to.equal(items.values[0].value);
    });
  });

  describe('Key handle testing.', () => {
    it(`should jump (april) item and keyup (move one up).`, () => {
      wrapper.setData({ isSelectedItem: true });
      wrapper.find('input').trigger('keypress');
      wrapper.find('input').trigger('onKeyUp');
      expect(wrapper.vm.selectedItem).to.equal(items.values[3].value);
    });

    it(`should be selectedIndex is 1 according to searchedWord(n).`, () => {
      wrapper.setData({ searchedWord: 'f' });
      wrapper.find('input').trigger('keypress');
      expect(wrapper.vm.selectedIndex).to.equal(1);
    });

    it(`should jump (March) item and key up (move one up).`, () => {
      wrapper.find('input').trigger('keypress');
      wrapper.find('input').trigger('keydown.up');
      expect(wrapper.vm.selectedItem).to.equal(items.values[2].value);
    });

    it(`should jump (January) item and key up (move one up) for hoverIndex is not null.`, () => {
      wrapper.setData({ hoverIndex: 1 });
      wrapper.find('input').trigger('keypress');
      wrapper.find('input').trigger('keydown.up');
      expect(wrapper.vm.selectedItem).to.equal(items.values[0].value);
    });

    it(`should jump (May) item and key down (move one bottom).`, () => {
      wrapper.find('input').trigger('keypress');
      wrapper.find('input').trigger('keydown.down');
      expect(wrapper.vm.selectedItem).to.equal(items.values[4].value);
    });

    it(`should jump (March) item and key down (move one bottom) for hoverIndex is not null.`, () => {
      wrapper.setData({ hoverIndex: 1 });
      wrapper.find('input').trigger('keypress');
      wrapper.find('input').trigger('keydown.down');
      expect(wrapper.vm.selectedItem).to.equal(items.values[2].value);
    });

    it(`should jump (April) item and key down (move one bottom) for dropdownMenu is null .`, () => {
      wrapper.vm.$refs.vxpDropdownMenu = null;
      wrapper.find('input').trigger('keypress');
      wrapper.find('input').trigger('keydown.down');
      expect(wrapper.vm.selectedItem).to.equal(items.values[4].value);
    });

    it(`should moving scroll to disappeared items.`, () => {
      wrapper.find('input').trigger('click');
      wrapper.find('input').trigger('keypress');
      for (let i = 0; i < 10; i++) {
        wrapper.find('input').trigger('keydown.down');
      }
      expect(wrapper.vm.selectedItem).to.equal(items.values[11].value);
    });

    it(`should select item on press Enter. `, () => {
      wrapper.find('input').trigger('click');
      wrapper.find('input').trigger('keypress');
      wrapper.find('input').trigger('keydown.down');
      wrapper.find('input').trigger('keyup.enter');
      expect(wrapper.vm.selectedItem).to.equal(items.values[4].value);
    });

    it(`should call closeDropDown method. `, () => {
      const closeDropDown = sinon.spy(wrapper.vm, 'closeDropDown');
      wrapper.find('input').trigger('keydown.tab');
      expect(closeDropDown.called).to.equal(true);
    });

    it(`should enter searchedWord not empty condition. `, () => {
      wrapper.setData({ searchedWord: 'test' });
      wrapper.find('input').trigger('keypress');
      expect(wrapper.vm.searchedWord).to.equal('test');
    });

    it(`should run if condition keyEnter method. `, () => {
      sinon.spy(wrapper.vm, 'toggleMenu');
      wrapper.setData({ hoverIndex: null });
      wrapper.find('input').trigger('keyup.enter');
      expect(wrapper.vm.toggleMenu.calledOnce).to.equal(true);
    });

    it(`should move scroll to disappeared items.`, () => {
      wrapper.setProps({ index: 3 });
      expect(wrapper.vm.selectedItem).to.equal(items.values[3].value);
    });
  });

  describe('Method maybeAdjustScroll test. ', () => {
    let sandbox, pixelsToPointerTopStub, pixelsToPointerBottomStub;
    beforeEach(() => {
      sandbox = sinon.createSandbox();
      pixelsToPointerTopStub = sandbox.stub(wrapper.vm, 'pixelsToPointerTop');
      pixelsToPointerBottomStub = sandbox.stub(wrapper.vm, 'pixelsToPointerBottom');
      sandbox.stub(wrapper.vm, 'viewport').returns({ top: 0, bottom: 0 });
    });
    afterEach(() => {
      sandbox.restore();
    });

    it(`should run maybeAdjustScroll method if condition. `, () => {
      pixelsToPointerTopStub.returns(0);
      wrapper.find('input').trigger('keypress');
      wrapper.find('input').trigger('keydown.down');
      expect(wrapper.vm.selectedItem).to.equal(items.values[4].value);
    });

    it(`should run maybeAdjustScroll method else if condition. `, () => {
      pixelsToPointerTopStub.returns(1);
      pixelsToPointerBottomStub.returns(0);
      wrapper.find('input').trigger('keypress');
      wrapper.find('input').trigger('keydown.down');
      expect(wrapper.vm.selectedItem).to.equal(items.values[4].value);
    });
  });

  describe('Method composedPath test. ', () => {
    it(`should run composedPath method if condition. `, () => {
      const composedPaths = wrapper.vm.composedPath(document.body);
      expect(composedPaths[0]).to.eq(document.body);
    });
  });

  describe('Method onBlur test. ', () => {
    it(`should run ignoreBlur false bock. `, () => {
      wrapper.setData({ ignoreBlur: true });
      wrapper.vm.onBlur();
      expect(wrapper.vm.ignoreBlur).to.equal(false);
    });

    it(`should run ignoreBlur false bock. `, () => {
      wrapper.setData({ ignoreBlur: false });
      wrapper.vm.onBlur({ path: 'test' });
      expect(wrapper.vm.ignoreBlur).to.equal(false);
    });
  });

  describe('Items label watch test. ', () => {
    it(`should run items label watch block. `, () => {
      wrapper.setProps({ items: { label: 'id', values: [{ id: 1, value: 'test' }] } });
      expect(wrapper.find('ul').findAll('li').length).to.equal(1);
    });
  });

  describe('Items label watch test. ', () => {
    it(`should run items label watch block. `, () => {
      wrapper.setProps({ items: { label: 'test.user.label', values: [{ id: 1, test: { name: 'test' } }] } });
      expect(wrapper.find('ul').findAll('li').length).to.equal(1);
    });
  });
});
