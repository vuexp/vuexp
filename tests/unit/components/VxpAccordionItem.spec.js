import { expect } from 'chai';
import { mount, shallowMount } from '@vue/test-utils';
import sinon from 'sinon';
import VxpAccordionItem from '../../../src/components/VxpAccordionItem';
import localVue from '../local-vue';

describe('VxpAccordionItem', () => {
  it('should mount inner elements to its slots', () => {
    const defaultSlotItemId = 'defaultSlotItemId';
    const TestDiv = {
      render(h) {
        return h('div', {
          attrs: {
            id: defaultSlotItemId,
          },
        });
      },
    };
    const wrapper = shallowMount(VxpAccordionItem, {
      propsData: {},
      localVue,
      slots: {
        content: [TestDiv],
      },
    });
    expect(wrapper.isVueInstance()).to.be.eq(true);
    expect(wrapper.find(`#${defaultSlotItemId}`).exists()).to.be.true;
  });

  it('should set uniqueId via setUniqueId method', () => {
    const wrapper = mount(VxpAccordionItem, {
      localVue,
    });

    expect(wrapper.vm.$data.uniqueId).to.be.not.ok;
    wrapper.vm.setUniqueId(1);
    expect(wrapper.vm.$data.uniqueId).to.be.eq(1);
  });

  it('should activate card when parent emiitted a toggle-child event', done => {
    const parent = {
      mounted() {
        this.$nextTick(() => {
          this.$emit('toggle-child', 1);
        });
      },
    };
    const wrapper = mount(VxpAccordionItem, {
      data() {
        return {
          uniqueId: 1,
          isOpen: false,
        };
      },
      localVue,
      parentComponent: parent,
    });

    setTimeout(() => {
      expect(wrapper.vm.$data.isOpen).to.eq(true);
      done();
    });
  });

  it("should notify parent with 'child-clicked' event when header is clicked with argument of its id", () => {
    const spy = sinon.spy();
    const parent = {
      mounted() {
        this.$on('child-clicked', spy);
      },
    };

    const wrapper = mount(VxpAccordionItem, {
      data() {
        return {
          uniqueId: 1,
        };
      },
      localVue,
      parentComponent: parent,
    });

    wrapper.find('.item-header').trigger('click');
    expect(spy.called).to.be.true;
    expect(spy.getCall(0).args[0]).to.be.eq(1);
  });

  it("should notify parent with 'open' and 'closed' event when toggling", () => {
    const openSpy = sinon.spy();
    const closeSpy = sinon.spy();
    const wrapper = mount(VxpAccordionItem, {
      data() {
        return {
          isOpen: false,
        };
      },
      localVue,
      listeners: {
        open: openSpy,
        close: closeSpy,
      },
    });

    expect(wrapper.vm.$data.isOpen).to.be.false;
    expect(openSpy.called).to.be.false;
    expect(closeSpy.called).to.be.false;
    wrapper.vm.toggleCollapsed();
    expect(wrapper.vm.$data.isOpen).to.be.true;
    expect(openSpy.called).to.be.true;
    expect(closeSpy.called).to.be.false;
    wrapper.vm.toggleCollapsed();
    expect(wrapper.vm.$data.isOpen).to.be.false;
    expect(openSpy.called).to.be.true;
    expect(closeSpy.called).to.be.true;

    expect(openSpy.calledOnce).to.be.true;
    expect(closeSpy.calledOnce).to.be.true;
  });

  it("should notify parent with 'child-removed' event when it is destroyed", () => {
    const spy = sinon.spy();
    const parent = {
      mounted() {
        this.$on('child-removed', spy);
      },
    };

    const wrapper = mount(VxpAccordionItem, {
      data() {
        return {
          uniqueId: 1,
        };
      },
      localVue,
      parentComponent: parent,
    });

    wrapper.destroy();
    expect(spy.called).to.be.true;
    expect(spy.getCall(0).args[0]).to.be.eq(1);
  });

  it('should handle correct uniqueId', () => {
    const spy = sinon.spy();
    const testId = 1;
    const wrongTestId = 0;
    const wrapper = mount(VxpAccordionItem, {
      data() {
        return {
          uniqueId: testId,
        };
      },
      localVue,
      methods: {
        toggleCollapsed: spy,
      },
    });

    wrapper.vm.handleToggleRequest(wrongTestId);
    expect(spy.called).to.be.false;

    wrapper.vm.handleToggleRequest(testId);
    expect(spy.called).to.be.true;
  });
});
