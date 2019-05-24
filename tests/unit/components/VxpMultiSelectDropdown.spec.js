import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import localVue from '../local-vue';
import VxpMultiSelectDropdown from '../../../src/components/VxpMultiSelectDropdown';
import TextField from '../../../src/core/components/TextField/TextField';
import Label from '../../../src/core/components/Label/Label';
import platform from '../../../src/platform';

describe('VxpMultiSelectDropdown', () => {
  const selectedItemWrapperClassSelector = '.vxp-multiselectdropdown__pill';
  const suggestionItemClassSelector = '.vxp-multiselectdropdown__suggestions-box__selectable-item';
  const suggestionBoxWrapperClassSelector = '.vxp-multiselectdropdown__suggestions-box';

  const wrapperClass = 'vxp-multiselectdropdown';
  const testHint = 'This is a test hint';
  const labelPropName = 'test2Label';
  const emptySuggestionsLabel = 'this is a suggestion';
  const testItems = [
    {
      test2Label: 'item1',
    },
    {
      test2Label: 'item2',
    },
    {
      test2Label: 'item3',
    },
  ];
  const testSelectedIndexes = [1];

  const createNativeModalMock = cb => {
    return sinon.stub(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 10);
      }).then(cb);
    });
  };

  const createComponent = data => {
    return mount(VxpMultiSelectDropdown, {
      ...data,
      localVue,
    });
  };

  const createMockedComponent = (propsToOverride = {}, listeners = {}, mountingOptions = {}) => {
    return createComponent({
      propsData: {
        items: testItems,
        selected: testSelectedIndexes,
        hint: testHint,
        labelProp: labelPropName,
        emptySuggestionsLabel,
        ...propsToOverride,
      },
      listeners: {
        ...listeners,
      },
      ...mountingOptions,
    });
  };

  let wrapper = createComponent();
  afterEach(() => {
    wrapper.destroy();
  });

  it('mounts with default props', () => {
    wrapper = createComponent();
    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it(`will have a wrapper with ${wrapperClass} class`, () => {
    wrapper = createComponent();
    expect(wrapper.vm.$el.className).to.contains(wrapperClass);
  });

  it('will have correct initial props', () => {
    wrapper = createComponent();
    expect(wrapper.props().items instanceof Array).to.eq(true);
    expect(wrapper.props().items.length).to.eq(0);

    expect(wrapper.props().selected instanceof Array).to.eq(true);
    expect(wrapper.props().selected.length).to.eq(0);

    expect(wrapper.props().labelProp).to.eq('label');

    expect(wrapper.props().hint).to.eq('');

    expect(wrapper.props().emptySuggestionsLabel).to.eq('');
  });

  it('will have correct initial data', () => {
    wrapper = createComponent();
    expect(wrapper.vm._data.searchText).to.eq('');
    expect(wrapper.vm._data.suggestionsOpened).to.eq(false);
  });

  it('will have correct props', () => {
    wrapper = createMockedComponent();

    expect(wrapper.props().items instanceof Array).to.eq(true);
    expect(wrapper.props().items.length).to.eq(testItems.length);

    expect(wrapper.props().selected instanceof Array).to.eq(true);
    expect(wrapper.props().selected.length).to.eq(1);
    expect(wrapper.props().selected[0]).to.eq(1);

    expect(wrapper.props().labelProp).to.eq(labelPropName);

    expect(wrapper.props().hint).to.eq(testHint);

    expect(wrapper.props().emptySuggestionsLabel).to.eq(emptySuggestionsLabel);
  });

  it('will have default elements inside', () => {
    wrapper = createComponent();
    expect(wrapper.contains(TextField)).to.eq(true);
  });

  it('will have correct computed props', () => {
    wrapper = createMockedComponent();
    expect(wrapper.vm.displayItems.length).to.eq(testItems.length - testSelectedIndexes.length);
  });

  describe('user interaction behaviour item selection', () => {
    it('tapping text field will change suggestionsOpened to true', () => {
      wrapper = createMockedComponent();
      wrapper.find(TextField).trigger('click');
      expect(wrapper.vm._data.suggestionsOpened).to.eq(true);
    });

    it('tapping outside text field will change suggestionsOpened to false', () => {
      wrapper = createMockedComponent(null, null, {
        attachToDocument: true,
      });

      wrapper.setData({
        suggestionsOpened: true,
      });

      wrapper.element.parentNode.dispatchEvent(new Event('mousedown'));
      expect(wrapper.vm._data.suggestionsOpened).to.eq(false);
    });

    it('tapping inside text field will not change suggestionsOpened to false', () => {
      wrapper = createMockedComponent(null, null, {
        attachToDocument: true,
      });

      wrapper.setData({
        suggestionsOpened: true,
      });

      wrapper.find(TextField).trigger('mousedown');
      expect(wrapper.vm._data.suggestionsOpened).to.eq(true);
    });

    it('tapping text field will open suggestions box', () => {
      wrapper = createMockedComponent();
      let suggestionBox = wrapper.find(suggestionBoxWrapperClassSelector);
      expect(suggestionBox.exists()).to.eq(false);
      wrapper.find(TextField).trigger('click');
      suggestionBox = wrapper.find(suggestionBoxWrapperClassSelector);
      expect(suggestionBox.exists()).to.eq(true);
    });

    it('suggestion labelProp should display correct values', () => {
      wrapper = createMockedComponent({
        items: [
          {
            label: 'item1',
            value: 1,
          },
          {
            labelWrong: 'item2',
            value: 2,
          },
          {
            label: 'item3',
            value: 3,
          },
        ],
        labelProp: 'label',
        selected: [],
      });

      wrapper.setData({
        suggestionsOpened: true,
      });

      const suggestionBox = wrapper.find(suggestionBoxWrapperClassSelector);
      const suggestedItems = suggestionBox.findAll(suggestionItemClassSelector);
      expect(suggestedItems.length).to.eq(3);

      const suggestionLabel1 = suggestedItems.wrappers[0].find(Label);
      expect(suggestionLabel1.props().text).to.eq('item1');

      const suggestionLabel2 = suggestedItems.wrappers[1].find(Label);
      expect(suggestionLabel2.props().text).to.eq('');

      const suggestionLabel3 = suggestedItems.wrappers[2].find(Label);
      expect(suggestionLabel3.props().text).to.eq('item3');
    });

    it('tapping selectable item removes it from selectable list and adds to selected list', () => {
      const selectedChangeListener = sinon.spy();
      wrapper = createMockedComponent(
        {
          items: [
            {
              label: 'item1',
            },
          ],
          labelProp: 'label',
          selected: [],
        },
        {
          selectedChange: selectedChangeListener,
        },
      );

      wrapper.setData({
        suggestionsOpened: true,
      });

      let selectedItems = wrapper.findAll(selectedItemWrapperClassSelector);
      let suggestedItems = wrapper.findAll(suggestionItemClassSelector);
      expect(selectedItems.length).to.eq(0);
      expect(suggestedItems.length).to.eq(1);
      expect(selectedChangeListener.called).to.eq(false);

      const firstSuggestedItem = wrapper.find(suggestionItemClassSelector);
      firstSuggestedItem.trigger('click');

      suggestedItems = wrapper.findAll(suggestionItemClassSelector);

      expect(suggestedItems.length).to.eq(0);
      expect(selectedChangeListener.called).to.eq(true);
      expect(selectedChangeListener.getCall(0).args[0]).to.eql([0]);

      selectedItems = wrapper.findAll(selectedItemWrapperClassSelector);
      expect(selectedItems.length).to.eq(1);
    });

    it('tapping selected item removes it from selected list and adds it to selectables list', () => {
      const selectedChangeListener = sinon.spy();
      wrapper = createMockedComponent(
        {
          items: [
            {
              [labelPropName]: 'item1',
            },
          ],
          selected: [0],
        },
        {
          selectedChange: selectedChangeListener,
        },
      );

      wrapper.setData({
        suggestionsOpened: true,
      });

      let selectedItem = wrapper.find(selectedItemWrapperClassSelector);
      expect(selectedItem.exists()).to.eq(true);
      expect(selectedChangeListener.called).to.eq(false);

      selectedItem.trigger('click');

      expect(selectedChangeListener.called).to.eq(true);
      expect(selectedChangeListener.getCall(0).args[0]).to.eql([]);

      selectedItem = wrapper.find(selectedItemWrapperClassSelector);
    });

    it('when tap selectable items suggestion box is closed if all items are selected', () => {
      const selectableItem = {
        [labelPropName]: 'label1',
      };

      const selectableItem2 = {
        [labelPropName]: 'label2',
      };
      wrapper = createMockedComponent({
        items: [selectableItem, selectableItem2],
        selected: [],
      });

      wrapper.setData({
        suggestionsOpened: true,
      });

      wrapper.vm.selectableItemTapped(selectableItem);
      expect(wrapper.props().selected.length).to.eq(1);
      expect(wrapper.vm._data.suggestionsOpened).to.eq(true);

      wrapper.vm.selectableItemTapped(selectableItem2);
      expect(wrapper.props().selected.length).to.eq(2);
      expect(wrapper.vm._data.suggestionsOpened).to.eq(false);
    });

    it('will try to show modal when clicked to selected item if platform is native', done => {
      nativeScope(() => {
        wrapper = createMockedComponent(null, null, {
          mocks: {
            $showModal: createNativeModalMock(() => {
              expect(true).to.eq(true);
              done();
            }),
          },
        });
        wrapper.vm.selectedItemTapped(testItems[testSelectedIndexes[0]]);
      });
    });

    it('will try to show modal when activateSuggestions called if platform is native', done => {
      nativeScope(() => {
        wrapper = createMockedComponent(null, null, {
          mocks: {
            $showModal: createNativeModalMock(() => {
              expect(true).to.eq(true);
              done();
            }),
          },
        });
        wrapper.vm.activateSuggestions();
      });
    });
  });

  describe('search behaviour', () => {
    it('will emit searchTextChange event when search input is typed', () => {
      const searchText = 'searchingText';
      const searchTextChange = sinon.spy();
      wrapper = createMockedComponent(null, {
        searchTextChange,
      });
      wrapper.find(TextField).setValue(searchText);
      wrapper.find(TextField).trigger('input');

      expect(searchTextChange.called).to.eq(true);
      expect(searchTextChange.getCall(0).args[0]).to.eq(searchText);
    });

    it('will show a clear icon when a text is entered', () => {
      wrapper = createMockedComponent();
      const searchText = 'searchingText';
      const removeSearchIcon = wrapper.find('.vxp-multiselectdropdown__pill-remove-search');
      expect(removeSearchIcon.isVisible()).to.eq(false);
      wrapper.setData({
        searchText,
      });
      expect(removeSearchIcon.isVisible()).to.eq(true);
    });

    it('will clear searchText when clear icon clicked', () => {
      wrapper = createMockedComponent();
      const searchText = 'searchingText';
      const removeSearchIcon = wrapper.find('.vxp-multiselectdropdown__pill-remove-search');
      wrapper.setData({
        searchText,
      });
      removeSearchIcon.trigger('click');
      expect(wrapper.vm._data.searchText).to.eq('');
    });

    it('will show filtered items according to searchText', () => {
      const toBeShownAfterFilterObject = {
        [labelPropName]: 'filtered_1',
      };
      wrapper = createMockedComponent({
        items: [
          {
            [labelPropName]: 'test_filter_1',
          },
          toBeShownAfterFilterObject,
          {
            [labelPropName]: 'not_filter_1',
          },
        ],
        selected: [0],
      });

      wrapper.setData({
        searchText: 'filtered',
      });

      expect(wrapper.vm.displayItems).eql([
        {
          [labelPropName]: 'filtered_1',
        },
      ]);
    });
  });
});

function nativeScope(testFn) {
  const platformOriginal = platform.platform;
  platform.platform = 'native';
  testFn();
  platform.platform = platformOriginal;
}
