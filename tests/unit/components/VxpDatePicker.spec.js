import { expect } from 'chai';
import { mount, shallowMount } from '@vue/test-utils';
import localVue from '../local-vue';
import VxpLabel from '../../../src/components/VxpLabel';
import VxpDropDown from '../../../src/components/VxpDropDown';
import VxpDatePicker from '../../../src/components/VxpDatePicker';

describe('VxpDatePicker Test.', () => {
  const dayPlaceholder = 'Test Day';
  const monthPlaceholder = 'Test Month';
  const yearPlaceholder = 'Test Year';
  const disabled = false;
  const day = 6;
  const month = 1;
  const year = 2015;
  const label = 'Birth Date';
  const errors = ['error line 1', 'error line 2', 'error line 3'];
  let wrapper;
  wrapper = shallowMount(VxpDatePicker, {
    propsData: {
      day,
      month,
      year,
      dayPlaceholder,
      monthPlaceholder,
      yearPlaceholder,
      disabled,
      label,
      errors,
    },
    localVue,
    sync: false,
  });

  describe('The component received given props correctly.', () => {
    it(`should given dayPlaceHolder property is equal to ${dayPlaceholder}.`, () => {
      expect(wrapper.props().dayPlaceholder).to.equal(dayPlaceholder);
    });

    it(`should given monthPlaceholder property is equal to ${monthPlaceholder}.`, () => {
      expect(wrapper.props().monthPlaceholder).to.equal(monthPlaceholder);
    });

    it(`should given yearPlaceholder property is equal to ${yearPlaceholder}.`, () => {
      expect(wrapper.props().yearPlaceholder).to.equal(yearPlaceholder);
    });

    it(`should disabled property is equal to ${disabled}.`, () => {
      expect(wrapper.props().disabled).to.equal(disabled);
    });

    it(`should given day property is equal to ${day}.`, () => {
      expect(wrapper.props().day).to.equal(day);
    });

    it(`should given month property is equal to ${month}.`, () => {
      expect(wrapper.props().month).to.equal(month);
    });

    it(`should given year property is equal to ${year}.`, () => {
      expect(wrapper.props().year).to.equal(year);
    });

    it(`should given label property is equal to ${label}.`, () => {
      expect(wrapper.props().label).to.equal(label);
    });

    it(`should given errors property is equal to ${errors}.`, () => {
      expect(wrapper.props().errors).to.equal(errors);
    });
  });

  describe('Find child elements of progress bar.', () => {
    it('should be three dropdown inside the layout.', () => {
      const childCount = wrapper.findAll(VxpDropDown).length;
      expect(childCount).to.equal(3);
    });

    it('should be one label inside the layout.', () => {
      const childCount = wrapper.findAll(VxpLabel).length;
      expect(childCount).to.equal(4);
    });
  });

  describe('Listen to events and Changing Props.', () => {
    it(`should assert event has been emitted one time`, done => {
      const wrapper1 = mount(VxpDatePicker, { sync: false }, localVue);
      wrapper1.setProps({ day: 7, month: 3, year: 2016 });
      wrapper1.vm.$nextTick(() => {
        expect(wrapper1.emitted('dateChange').length).to.equal(1);
        done();
      });
    });
  });

  describe('Check days, months count.', () => {
    const wrapper2 = mount(VxpDatePicker, {
      propsData: {
        day,
        month,
        year,
      },
      sync: false,
      localVue,
    });
    it(`should days length should be 31`, () => {
      expect(
        wrapper2
          .findAll(VxpDropDown)
          .at(0)
          .findAll('li').length,
      ).to.equal(31);
    });

    it(`should months length should be 12`, () => {
      expect(
        wrapper2
          .findAll(VxpDropDown)
          .at(1)
          .findAll('li').length,
      ).to.equal(12);
    });
  });

  describe('February should 28 days. ', () => {
    it(`should assert event has been emitted one time`, done => {
      const wrapper3 = mount(VxpDatePicker, {
        propsData: {
          day,
          month,
          year,
        },
        sync: false,
        localVue,
      });
      expect(
        wrapper3
          .findAll(VxpDropDown)
          .at(0)
          .findAll('li').length,
      ).to.equal(31);

      wrapper3.setProps({ month: 2 });
      wrapper3.vm.$nextTick(() => {
        expect(
          wrapper3
            .findAll(VxpDropDown)
            .at(0)
            .findAll('li').length,
        ).to.equal(28);
        done();
      });
    });
  });
});
