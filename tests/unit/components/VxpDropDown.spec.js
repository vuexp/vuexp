import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from '@vue/test-utils';
import VxpDropDown from '../../../src/components/VxpDropDown';
import localVue from '../local-vue';

describe('VxpDropDown', () => {
  const placeholder = 'Select One';
  const disabled = false;
  const items = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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

    it(`should placeholder disabled is equal to ${disabled}.`, () => {
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
      expect(wrapper.find('input').element.value).to.equal(items[0]);
    });
  });

  describe('Key handle testing.', () => {
    it(`should jump (april) item and keyup (move one up).`, () => {
      wrapper.setData({ isSelectedItem: true });
      wrapper.find('input').trigger('keypress');
      expect(wrapper.vm.selectedItem).to.equal(items[3]);
    });

    it(`should be selectedIndex is 10 according to searchedWord(n).`, () => {
      wrapper.setData({ searchedWord: 'n' });
      wrapper.find('input').trigger('keypress');
      expect(wrapper.vm.selectedIndex).to.equal(10);
    });

    it(`should jump (april) item and key up (move one up).`, () => {
      wrapper.find('input').trigger('keypress');
      wrapper.find('input').trigger('keydown.up');
      expect(wrapper.vm.selectedItem).to.equal(items[2]);
    });

    it(`should jump (january) item and key up (move one up) for hoverIndex is not null.`, () => {
      wrapper.setData({ hoverIndex: 1 });
      wrapper.find('input').trigger('keypress');
      wrapper.find('input').trigger('keydown.up');
      expect(wrapper.vm.selectedItem).to.equal(items[0]);
    });

    it(`should jump (april) item and key down (move one bottom).`, () => {
      wrapper.find('input').trigger('keypress');
      wrapper.find('input').trigger('keydown.down');
      expect(wrapper.vm.selectedItem).to.equal(items[4]);
    });

    it(`should jump (march) item and key down (move one bottom) for hoverIndex is not null.`, () => {
      wrapper.setData({ hoverIndex: 1 });
      wrapper.find('input').trigger('keypress');
      wrapper.find('input').trigger('keydown.down');
      expect(wrapper.vm.selectedItem).to.equal(items[2]);
    });

    it(`should jump (april) item and key down (move one bottom) for dropdownMenu is null .`, () => {
      wrapper.vm.$refs.vxpDropdownMenu = null;
      wrapper.find('input').trigger('keypress');
      wrapper.find('input').trigger('keydown.down');
      expect(wrapper.vm.selectedItem).to.equal(items[4]);
    });

    it(`should moving scroll to disappeared items.`, () => {
      wrapper.find('input').trigger('click');
      wrapper.find('input').trigger('keypress');
      for (let i = 0; i < 10; i++) {
        wrapper.find('input').trigger('keydown.down');
      }
      expect(wrapper.vm.selectedItem).to.equal(items[11]);
    });

    it(`should select item on press Enter. `, () => {
      wrapper.find('input').trigger('click');
      wrapper.find('input').trigger('keypress');
      wrapper.find('input').trigger('keydown.down');
      wrapper.find('input').trigger('keyup.enter');
      expect(wrapper.vm.selectedItem).to.equal(items[4]);
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

    it(`should move scroll to disappeared items.`, () => {
      wrapper.setProps({ index: 3 });
      expect(wrapper.vm.selectedItem).to.equal(items[3]);
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
      expect(wrapper.vm.selectedItem).to.equal(items[4]);
    });

    it(`should run maybeAdjustScroll method else if condition. `, () => {
      pixelsToPointerTopStub.returns(1);
      pixelsToPointerBottomStub.returns(0);
      wrapper.find('input').trigger('keypress');
      wrapper.find('input').trigger('keydown.down');
      expect(wrapper.vm.selectedItem).to.equal(items[4]);
    });
  });

  describe('Method composedPath test. ', () => {
    it(`should run composedPath method if condition. `, () => {
      const composedPaths = wrapper.vm.composedPath(document.body);
      expect(composedPaths[0]).to.eq(document.body);
    });
  });
});
