import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import VxpAccordion from '../../../src/components/VxpAccordion';
import localVue from '../local-vue';

describe('VxpAccordion', () => {
  const initialExpandedItems = [];
  const autoCollapse = false;
  let wrapper;

  function createMockChild(id = null, methods = {}) {
    return {
      render(h) {
        return h('div');
      },
      data() {
        return {
          uniqueId: id,
        };
      },
      methods: {
        fireChildRegistered() {
          this.$parent.$parent.$emit('childRegistered', this);
        },
        fireChildClicked() {
          this.$parent.$parent.$emit('childClicked', this.uniqueId);
        },
        fireChildRemoved() {
          this.$parent.$parent.$emit('childRemoved', this.uniqueId);
        },
        setUniqueId(nextId) {
          this.uniqueId = nextId;
        },
        ...methods,
      },
    };
  }

  function getChild(wrapper, index) {
    return wrapper.find('.vxp-accordion').vm.$children[0].$children[index];
  }

  beforeEach(() => {
    wrapper = mount(VxpAccordion, {
      name: 'VxpAccordion',
      propsData: {
        initialExpandedItems,
        autoCollapse,
      },
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it(`initialExpandedItems property is equal to: ${initialExpandedItems}.`, () => {
    expect(wrapper.props().initialExpandedItems).to.eq(initialExpandedItems);
  });
  it(`autoCollapse is equal to: ${autoCollapse}.`, () => {
    expect(wrapper.props().autoCollapse).to.equal(autoCollapse);
  });

  it('should set uniqueId', () => {
    const setUniqueId = sinon.spy();
    const child = createMockChild(null, { setUniqueId });
    wrapper = mount(VxpAccordion, {
      slots: {
        default: [child],
      },
    });

    const childInstance = getChild(wrapper, 0);
    childInstance.fireChildRegistered();
    expect(setUniqueId.called).to.be.true;
    expect(setUniqueId.getCall(0).args[0]).to.be.eq('1');

    childInstance.fireChildRegistered();
    expect(setUniqueId.getCall(1).args[0]).to.be.eq('2');
  });

  it("should handle 'child-clicked' event", () => {
    const spyChildClicked = sinon.spy();
    const child = createMockChild(null, {});
    wrapper = mount(VxpAccordion, {
      slots: {
        default: [child],
      },
      methods: {
        handleChildClicked: spyChildClicked,
      },
    });

    const childInstance = getChild(wrapper, 0);
    childInstance.fireChildClicked();
    expect(spyChildClicked.called).to.be.true;
  });

  it("should handle expand event of 'initialItems'", done => {
    const spyHandleChildClicked = sinon.spy();
    const child = createMockChild(1, {});
    const itemIndex = [1];
    wrapper = mount(VxpAccordion, {
      propsData: {
        initialExpandedItems: itemIndex,
      },
      slots: {
        default: [child],
      },
      methods: {
        handleChildClicked: spyHandleChildClicked,
      },
      localVue,
    });

    setTimeout(() => {
      expect(spyHandleChildClicked.called).to.be.true;
      done();
    }, 10);
  });

  it("should handle 'initialItems' out of bounds", done => {
    const spyHandleChildClicked = sinon.spy();
    const child = createMockChild(1, {});
    const itemIndex = [-1];
    wrapper = mount(VxpAccordion, {
      propsData: {
        initialExpandedItems: itemIndex,
      },
      slots: {
        default: [child],
      },
      methods: {
        handleChildClicked: spyHandleChildClicked,
      },
      localVue,
    });

    setTimeout(() => {
      expect(spyHandleChildClicked.called).to.be.false;
      done();
    }, 10);
  });

  it("should handle 'child-clicked' event without autocollapse", done => {
    const spyOnExpanded = sinon.spy();
    const spyOnCollapsed = sinon.spy();
    const child = createMockChild(1, {});
    const itemIndex = [1];
    const autoCollapseProp = false;
    wrapper = mount(VxpAccordion, {
      propsData: {
        initialExpandedItems: itemIndex,
        autoCollapse: autoCollapseProp,
      },
      slots: {
        default: [child],
      },
      methods: {
        onExpanded: spyOnExpanded,
        onCollapsed: spyOnCollapsed,
      },
      localVue,
    });

    setTimeout(() => {
      expect(spyOnExpanded.called).to.be.true;
      expect(spyOnCollapsed.called).to.be.false;
      const childInstance = getChild(wrapper, 0);
      childInstance.fireChildClicked();
      expect(spyOnExpanded.called).to.be.true;
      expect(spyOnCollapsed.called).to.be.true;
      done();
    }, 10);
  });

  it("should handle 'child-clicked' event with autocollapse", done => {
    const spyOnExpanded = sinon.spy();
    const spyOnCollapsed = sinon.spy();
    const child = createMockChild(1, {});
    const itemIndex = [1];
    const autoCollapseProp = true;
    wrapper = mount(VxpAccordion, {
      propsData: {
        initialExpandedItems: itemIndex,
        autoCollapse: autoCollapseProp,
      },
      slots: {
        default: [child],
      },
      methods: {
        onExpanded: spyOnExpanded,
        onCollapsed: spyOnCollapsed,
      },
      localVue,
    });

    setTimeout(() => {
      expect(spyOnExpanded.called).to.be.true;
      expect(spyOnCollapsed.called).to.be.false;
      const childInstance = getChild(wrapper, 0);
      childInstance.fireChildClicked();
      expect(spyOnExpanded.called).to.be.true;
      expect(spyOnCollapsed.called).to.be.true;
      done();
    }, 10);
  });

  it("should handle 'remove-child' event", done => {
    const child = createMockChild(null, {});
    wrapper = mount(VxpAccordion, {
      slots: {
        default: [child],
      },
      methods: {},
      localVue,
    });

    setTimeout(() => {
      const childInstance = getChild(wrapper, 0);
      childInstance.fireChildRegistered();
      expect(wrapper.vm.$data.childrenToggleStatus[1]).to.be.false;
      childInstance.fireChildRemoved();
      expect(wrapper.vm.$data.childrenToggleStatus[1]).to.be.eq(undefined);
      done();
    }, 10);
  });

  it("should handle 'expanded' and 'collapsed' events", done => {
    const child = createMockChild(null, {});
    wrapper = mount(VxpAccordion, {
      slots: {
        default: [child],
      },
      methods: {},
      localVue,
    });

    setTimeout(() => {
      const childInstance = getChild(wrapper, 0);
      childInstance.fireChildRegistered();
      expect(wrapper.emitted('expanded')).to.equal(undefined);
      expect(wrapper.emitted('collapsed')).to.equal(undefined);
      childInstance.fireChildClicked();
      expect(wrapper.emitted('expanded').length).to.equal(1);
      expect(wrapper.emitted('collapsed')).to.equal(undefined);
      childInstance.fireChildClicked();
      expect(wrapper.emitted('expanded').length).to.equal(1);
      expect(wrapper.emitted('collapsed').length).to.equal(1);
      done();
    }, 10);
  });

  it("should handle 'initialItems' with empty values", done => {
    const spyHandleChildClicked = sinon.spy();
    const child = createMockChild(1, {});
    const itemIndex = null;
    wrapper = mount(VxpAccordion, {
      propsData: {
        initialExpandedItems: itemIndex,
      },
      slots: {
        default: [child],
      },
      methods: {
        handleChildClicked: spyHandleChildClicked,
      },
      localVue,
    });

    setTimeout(() => {
      expect(spyHandleChildClicked.called).to.be.false;
      done();
    }, 10);
  });
});
