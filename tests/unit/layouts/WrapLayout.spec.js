import Vue from 'vue';
import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Label from '../../../src/core/components/Label/Label';
import WrapLayout from '../../../src/layouts/WrapLayout';

describe('WrapLayout', () => {
  // WrapLayout mock up values.
  // Props
  const orientation = 'vertical';
  // Attributes
  const wrapLayoutWidth = 450;
  const wrapLayoutHeight = 450;

  // Defining the child components which are Labels.
  const labelSizes = 100;

  const FirstLabel = {
    render(h) {
      return h(Label, {
        props: {
          text: 'First',
        },
        attrs: {
          width: labelSizes,
          height: labelSizes,
        },
      });
    },
  };
  const SecondLabel = {
    render(h) {
      return h(Label, {
        props: {
          text: 'Second',
        },
        attrs: {
          height: labelSizes,
          width: labelSizes,
        },
      });
    },
  };
  const ThirdLabel = {
    render(h) {
      return h(Label, {
        props: {
          text: 'Third',
        },
        attrs: {
          height: labelSizes,
          width: labelSizes,
        },
      });
    },
  };
  const ForthLabel = {
    render(h) {
      return h(Label, {
        props: {
          text: 'Forth',
        },
        attrs: {
          height: labelSizes,
          width: labelSizes,
        },
      });
    },
  };

  const wrapLayoutWrapper = mount(WrapLayout, {
    name: 'WrapLayout',
    props: {
      orientation: {
        type: String,
        default: 'horizontal',
      },
      itemWidth: {
        type: Number,
        default: NaN,
      },
      itemHeight: {
        type: Number,
        default: NaN,
      },
    },
    propsData: {
      orientation,
      itemWidth: NaN,
      itemHeight: NaN,
    },
    attrs: {
      backgroundColor: 'red',
      height: wrapLayoutHeight,
      width: wrapLayoutWidth,
    },
    slots: {
      default: [FirstLabel, SecondLabel, ThirdLabel, ForthLabel],
    },
  });

  describe('the component receives given props correctly.', () => {
    it(`orientation property is equal to ${orientation} and flexDirection style is changed by this prop.`, () => {
      expect(wrapLayoutWrapper.props().orientation).to.equal(orientation);
    });
    it(`flexDirection style of the layout component is equal to ${orientation === 'vertical' ? 'vertical' : 'horizontal'} `, () => {
      expect(wrapLayoutWrapper.element.style.flexDirection).to.equal('column');
    });
  });

  describe('component should resize the children according the itemWidth and itemHeight property', () => {
    it(`itemWidth and itemHeight property giving proper sizes to children elements`, () => {
      const itemWidth = 150;
      const itemHeight = 180;
      wrapLayoutWrapper.setProps({
        itemWidth: itemWidth,
        itemHeight: itemHeight,
      });
      return Vue.nextTick().then(() => {
        const labelWrappers = wrapLayoutWrapper.findAll(Label).wrappers;
        labelWrappers.forEach(wrapper => {
          expect(wrapper.element.style.width).to.equal(`${itemWidth}px`);
          expect(wrapper.element.style.height).to.equal(`${itemHeight}px`);
        });
      });
    });
  });

  describe('the attributes are passed to the style of the component sucessfully.', () => {
    it(`height attribute which is '${wrapLayoutHeight}' is passed to the component correctly.`, () => {
      expect(wrapLayoutWrapper.attributes().height).to.equal(wrapLayoutHeight.toString());
    });
    it(`height attribute which is '${wrapLayoutWidth}' is passed to the component correctly.`, () => {
      expect(wrapLayoutWrapper.attributes().width).to.equal(wrapLayoutWidth.toString());
    });
    it(`the height style of the component is equal to ${wrapLayoutHeight.toString().concat('px')}`, () => {
      expect(wrapLayoutWrapper.element.style.height).to.equal(wrapLayoutHeight.toString().concat('px'));
    });
    it(`the height style of the component is equal to ${wrapLayoutWidth.toString().concat('px')}`, () => {
      expect(wrapLayoutWrapper.element.style.width).to.equal(wrapLayoutWidth.toString().concat('px'));
    });
  });

  describe('the layout has child components in its slots and it renders children correctly.', () => {
    it('there are four label component inside the layout.', () => {
      const labelWrappers = wrapLayoutWrapper.findAll(Label).wrappers;
      expect(labelWrappers.length).to.equal(4);
    });

    it('label component displays the given text prop(`First`) correctly inside the layout.', () => {
      const labelWrappers = wrapLayoutWrapper.findAll(Label).wrappers;
      const label = labelWrappers[0].find(Label);
      expect(label.element.textContent.trim()).to.equal('First');
    });

    it('label component displays the given text prop(`Second`) correctly inside the layout.', () => {
      const labelWrappers = wrapLayoutWrapper.findAll(Label).wrappers;
      const label = labelWrappers[1].find(Label);
      expect(label.element.textContent.trim()).to.equal('Second');
    });
  });

  describe('the layout will render all its children elements with given itemWidth and itemHeight sizes', () => {});
});
