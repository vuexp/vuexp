import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import sinon from 'sinon';
import VxpListView from '../../../src/components/VxpListView';
import StackLayout from '../../../src/layouts/StackLayout';
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';
import ScrollView from '../../../src/core/components/ScrollView/ScrollView';

describe('VxpListView', () => {
  const localVue = createLocalVue();
  localVue.component('StackLayout', StackLayout);
  localVue.component('FlexboxLayout', FlexboxLayout);
  localVue.component('ScrollView', ScrollView);

  const propsData = {
    items: [
      {
        id: 2,
        name: 'Yakari',
        type: 'list-item',
      },
      {
        type: 'separator',
      },
      {
        id: 3,
        name: 'Lorem',
        type: 'list-item',
      },
      {
        id: 4,
        name: 'Ipsum',
        type: 'list-item',
      },
      {
        id: 5,
        name: 'Dolor',
        type: 'list-item',
      },
    ],
    reversed: false,
    pullToRefresh: false,
    itemSelect: {
      'list-item-slot': 'item.type === "list-item"',
      'separator-slot': 'item.type === "separator"',
    },
  };
  const wrapper = shallowMount(VxpListView, {
    scopedSlots: {
      'list-item-slot': '<StackLayout slot-scope="{ item }"> <Label text="item.name"/> </StackLayout>',
      'separator-slot': '<StackLayout slot-scope="{ item }"> <Label text="separatorline"/> </StackLayout>',
    },
    propsData,
    localVue,
  });

  describe('Initializing phase', () => {
    it('should emit "listViewLoaded" event when rendering finished', done => {
      wrapper.vm.$nextTick(() => {
        expect(typeof wrapper.emitted().listViewLoaded).to.not.equal('undefined');
        done();
      });
    });
  });

  describe('Utilities', () => {
    it('selectorFn must return function for item template selection', () => {
      const selector = wrapper.vm.selectorFn('item.name === "Yakari"');
      expect(typeof selector).to.equal('function');
      expect(selector({ item: { name: 'Yakari' } })).to.equal(true);
    });
    it('getItemTemplate must return slot name that is suitable to given condition', () => {
      const selectorFnList = [
        {
          fn: wrapper.vm.selectorFn('item.name === "yyakarii"'),
          slotName: 'my-slot',
        },
      ];
      const item = { name: 'yyakarii' };
      const invalidItem = { name: 'ykri' };
      expect(wrapper.vm.getItemTemplate(item, selectorFnList)).to.equal('my-slot');
      expect(wrapper.vm.getItemTemplate(invalidItem, selectorFnList)).to.equal(null);
    });
    it("should scroll to given item's offset when scrollToIndex() called", () => {
      const index = 1;
      const itemElementToScroll = wrapper.vm.listView.querySelector(`[index="${index}"]`);
      itemElementToScroll.scrollIntoView = sinon.spy();
      wrapper.vm.scrollToIndex(index);
      expect(itemElementToScroll.scrollIntoView.called).to.equal(true);
      const listView = wrapper.vm.listView; // eslint-disable-line
      wrapper.vm.listView = null;
      wrapper.vm.scrollToIndex(index);
      expect(itemElementToScroll.scrollIntoView.calledTwice).to.equal(false);
      wrapper.vm.listView = listView;
      wrapper.vm.scrollToIndex(-1);
      expect(itemElementToScroll.scrollIntoView.calledTwice).to.equal(false);
    });
    // set spy for scrollTo method to html dom object
    wrapper.vm.listView.scrollTo = sinon.spy();
    it('should scroll to given offset when scrollTo() called', () => {
      const { listView } = wrapper.vm;
      const offset = 10;
      wrapper.vm.scrollTo(offset);
      expect(listView.scrollTo.calledWith({ top: offset, left: 0, behavior: 'smooth' })).to.equal(true);
    });
    it('should scroll to begin of listView when scrollToStart() called', () => {
      const { listView } = wrapper.vm;
      wrapper.vm.reversed = false;
      wrapper.vm.scrollToStart();
      expect(listView.scrollTo.calledWith({ top: 0, left: 0, behavior: 'smooth' })).to.equal(true);
      wrapper.vm.reversed = true;
      const offset = listView.scrollHeight + listView.offsetHeight;
      wrapper.vm.scrollToStart();
      expect(listView.scrollTo.calledWith({ top: offset, left: 0, behavior: 'smooth' })).to.equal(true);
      wrapper.vm.reversed = false;
      wrapper.vm.listView = null;
      wrapper.vm.scrollToStart();
      expect(listView.scrollTo.calledWith({ top: offset, left: 0, behavior: 'smooth' })).to.equal(true);
      wrapper.vm.listView = listView;
    });
    it('should scroll to end of listView when scrollToEnd() called', () => {
      const { listView } = wrapper.vm;
      const offset = listView.scrollHeight + listView.offsetHeight;
      wrapper.vm.reversed = false;
      wrapper.vm.scrollToEnd();
      expect(listView.scrollTo.calledWith({ top: offset, left: 0, behavior: 'smooth' })).to.equal(true);
      wrapper.vm.reversed = true;
      wrapper.vm.scrollToEnd();
      expect(listView.scrollTo.calledWith({ top: 0, left: 0, behavior: 'smooth' })).to.equal(true);
      wrapper.vm.listView = null;
      wrapper.vm.reversed = false;
      wrapper.vm.scrollToEnd();
      expect(listView.scrollTo.calledWith({ top: 0, left: 0, behavior: 'smooth' })).to.equal(true);
      wrapper.vm.listView = listView;
    });
    it('should emit "scrolled" event when onScroll triggered', () => {
      wrapper.vm.onScroll({ target: { scrollHeight: 1000, scrollTop: 0, offsetHeight: 30 } });
      expect(wrapper.emitted().scrolled).to.not.equal('undefined');
    });
    it('should change data source array when called showStatusIndicator method', done => {
      const { vm } = wrapper;
      vm.showStatusIndicator(false);
      vm.showStatusIndicator(true, { message: 'You have no items on list' });
      vm.$nextTick(() => {
        expect(Array.isArray(vm.statusIndicatorItemsData) && vm.statusIndicatorItemsData.length === 1).to.equal(true);
        done();
      });
    });
    it('should recalculate scroll threshold when items change', () => {
      expect(wrapper.vm.loadOnDemandThreshold).to.equal(null);
      wrapper.vm.items = [
        {
          id: 6,
          name: 'Dolor',
          type: 'list-item',
        },
      ];
      expect(wrapper.vm.loadOnDemandThreshold).to.equal(0);
    });
    it('should emit "tap" event when clicked triggered', () => {
      const testItem = {
        id: 5,
        name: 'Dolor',
        type: 'list-item',
      };
      const testIndex = 5;
      wrapper.vm.itemTap(testItem, testIndex);
      expect(wrapper.emitted().tap).to.not.equal('undefined');
    });
  });
});
