import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Img from '../../../src/components/Img';

describe('Image', () => {
  // Mock up values.
  const width = 200;
  const height = 300;
  const stretch = 'aspectFit';
  const src = 'https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/Image.png';
  const placeholder = 'Default Placeholder Text';

  const wrapper = mount(Img, {
    props: {
      src: String,
      stretch: {
        type: String,
        default: 'none',
      },
      width: [String, Number],
      height: [String, Number],
      placeholder: String,
    },
    propsData: {
      stretch,
      src,
      width,
      height,
      placeholder,
    },
  });

  describe('the component received given props correctly.', () => {
    it(`Given width property is equal to ${width}.`, () => {
      expect(wrapper.props().width).to.equal(width);
    });
    it(`Given height property is equal to ${height}.`, () => {
      expect(wrapper.props().height).to.equal(height);
    });
    it(`Given stretch property is equal to ${stretch}.`, () => {
      expect(wrapper.props().stretch).to.equal(stretch);
    });
    it(`Given src property is equal to ${src}.`, () => {
      expect(wrapper.props().src).to.equal(src);
    });
    it(`Given placeholder property is equal to ${placeholder}.`, () => {
      expect(wrapper.props().placeholder).to.equal(placeholder);
    });
  });
  describe('the component rendered the attributes and style values correctly.', () => {
    it(`given height value(${height}) is correct in the style.`, () => {
      expect(wrapper.attributes().height).to.equal(height.toString());
    });
    it(`given width value(${width}) is correct in the style.`, () => {
      expect(wrapper.attributes().width).to.equal(width.toString());
    });
    it(`given src url${src} is correct.`, () => {
      expect(wrapper.attributes().src).to.equal(src);
    });
    it(`class name for given stretch(${stretch}) property is equal to vxp-img--aspect-fit`, () => {
      expect(wrapper.classes()).to.include('vxp-img--aspect-fit');
    });
    it(`given placeholder value(${placeholder}) is correct in the style.`, () => {
      expect(wrapper.attributes().alt).to.equal(placeholder);
    });
  });
  describe('stretch none default test', () => {
    it(`class name for given stretch none, class is equal to default class`, () => {
      const wrapper = mount(Img, {
        propsData: {
          src,
        },
      });
      wrapper.setProps({ stretch: 'none' });
      expect(wrapper.classes().length).to.equal(1);
    });
  });
});
