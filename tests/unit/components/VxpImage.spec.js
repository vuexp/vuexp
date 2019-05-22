import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import VxpImage from '../../../src/components/VxpImage';
import Img from '../../../src/core/components/Img/Img';

describe('VxpImage Unit Tests', () => {
  const width = 200;
  const height = 300;
  const stretch = 'aspectFit';
  const src = 'https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/Image.png';
  const placeholder = 'Default Placeholder Text';

  const wrapper = mount(VxpImage, {
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

  describe('VxpImage uses Img component correctly.', () => {
    it('Img component is present underneath VxpImage.', () => {
      expect(wrapper.find(Img).exists()).to.equal(true);
    });
  });

  describe('VxpImage passes props to Img component correctly.', () => {
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
  });

  describe('the component rendered the attributes and style values correctly.', () => {
    it(`given placeholder value(${placeholder}) is correct in the style.`, () => {
      expect(wrapper.attributes().alt).to.equal(placeholder);
    });
  });
});
