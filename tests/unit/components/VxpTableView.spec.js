import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import localVue from '../local-vue';

import StackLayout from '../../../src/layouts/StackLayout';
import GridLayout from '../../../src/layouts/GridLayout';
import VxpTableView from '../../../src/components/VxpTableView';
import VxpCheckbox from '../../../src/components/VxpCheckbox';
import VxpLabel from '../../../src/components/VxpLabel';

const onRowSelected = sinon.spy();
const onRowDeselected = sinon.spy();
const onSelectAllRows = sinon.spy();
const onDeselectAllRows = sinon.spy();

describe('VxpTableView Component Tests', () => {
  const headerFields = [
    {
      type: 'VxpLabel',
      props: { text: 'initials' },
      label: 'UID',
      sortable: false,
      width: 'auto',
      events: {
        tap: () => {
          /* tapped */
        },
      },
    },
    {
      type: 'VxpImage',
      props: { src: 'avatarURL' },
      label: 'Avtr',
      sortable: false,
      width: 'auto',
    },
    {
      type: 'Slider',
      props: { value: 'rank' },
      label: 'Rank',
      sortable: false,
      width: '*',
    },
  ];

  const data = [
    {
      firstName: 'osman ertem',
      lastName: 'unat',
      email: 'osmanertem@gmail.com',
      initials: 'OEU',
      avatarURL: 'https://ssl.gstatic.com/gb/images/a/911e3628e6.png',
      rank: 20,
    },
    {
      firstName: 'ercan',
      lastName: 'gerçek',
      email: 'ercangercek@gmail.com',
      initials: 'EG',
      avatarURL: 'https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png',
      rank: 80,
    },
    {
      firstName: 'ozan batuhan',
      lastName: 'ceylan',
      email: 'ozanceylan@gmail.com',
      initials: 'OBC',
      avatarURL: 'https://ssl.gstatic.com/gb/images/a/ea554714e7.png',
      rank: 30,
    },
  ];

  let cellClasses = [
    ['test-class-name-1', 'test-class-name-2', 'test-class-name-3'],
    ['test-class-name-1', 'test-class-name-2', 'test-class-name-3'],
    ['test-class-name-1', 'test-class-name-2', 'test-class-name-3'],
  ];

  let rowSelectionEnabled = true;
  let multirowSelection = true;
  let showHeaders = true;
  let isLoading = true;

  let wrapper = mount(VxpTableView, {
    name: 'VxpTableView',
    propsData: {
      headerFields,
      data,
      cellClasses,
      rowSelectionEnabled,
      multirowSelection,
      showHeaders,
      isLoading,
    },
    localVue,
    listeners: {
      onRowSelected,
      onRowDeselected,
      onSelectAllRows,
      onDeselectAllRows,
    },
  });

  describe('VxpTableView', () => {
    it('at least one StackLayout component inside the VxpTableView item.', () => {
      const resultList = wrapper.findAll(StackLayout).wrappers;
      expect(resultList.length).to.above(0);
    });
    it('at least one GridLayout component inside the VxpTableView item.', () => {
      const resultList = wrapper.findAll(GridLayout).wrappers;
      expect(resultList.length).to.above(0);
    });
    it('isLoading prop change is caught properly', () => {
      wrapper.setProps({ isLoading: false });
    });
    it('onSelectAllRows event is thrown correctly', () => {
      const resultList = wrapper.findAll(VxpCheckbox);
      resultList.at(0).trigger('click');
      expect(onSelectAllRows.called).to.equal(true);
    });
    it('onDeselectAllRows event is thrown correctly', () => {
      const resultList = wrapper.findAll(VxpCheckbox);
      resultList.at(0).trigger('click');
      expect(onDeselectAllRows.called).to.equal(true);
    });
    it('onRowSelected event is thrown correctly', () => {
      const resultList = wrapper.findAll(VxpCheckbox);
      resultList.at(1).trigger('click');
      expect(onRowSelected.called).to.equal(true);
    });
    it('onRowDeSelected event is thrown correctly', () => {
      const resultList = wrapper.findAll(VxpCheckbox);
      resultList.at(1).trigger('click');
      expect(onRowDeselected.called).to.equal(true);
    });
    it('can click on cells ', () => {
      const resultList = wrapper.findAll(VxpLabel);
      resultList.at(3).trigger('click');
    });
    it('onRowDeSelected event is thrown correctly', () => {
      wrapper.setProps({ multirowSelection: false });
      const resultList = wrapper.findAll(VxpCheckbox);
      resultList.at(1).trigger('click');
      resultList.at(2).trigger('click');
      expect(onRowDeselected.called).to.equal(true);
    });
    it('VxpTableView can handle no data situation', () => {
      wrapper.setProps({ data: [] });
    });
  });
});
