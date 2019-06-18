export default {
  data() {
    return {
      searchText: '',
      labelPathArray: '',
    };
  },
  props: {
    items: {
      type: Object,
      validator(value) {
        return 'label' in value && 'values' in value && value.values instanceof Array && typeof value.label === 'string';
      },
      default() {
        return {
          label: '',
          values: [],
        };
      },
    },
    selected: {
      type: Array,
      default() {
        return [];
      },
    },
    hint: {
      type: String,
      default: '',
    },
    emptySuggestionsLabel: {
      type: String,
      default: '',
    },
  },
  computed: {
    displayItems() {
      if (!this.searchText) {
        return this.notSelectedItems();
      }
      return this.notSelectedItems().filter(
        item =>
          this.getLabel(item)
            .toLocaleLowerCase()
            .indexOf(this.searchText.toLocaleLowerCase()) > -1,
      );
    },
  },
  watch: {
    items: {
      immediate: true,
      deep: true,
      handler() {
        this.labelPathArray = this.items.label.split('.');
      },
    },
  },
  methods: {
    selectItem(item) {
      this.selected.push(item);
      this.selectedChange();
    },
    selectedChange() {
      this.$emit('selectedChange', this.selected);
    },
    notSelectedItems() {
      return this.items.values.filter(value => this.selected.indexOf(value) === -1);
    },
    removeSelection(item) {
      const itemIndex = this.selected.indexOf(item);
      this.selected.splice(itemIndex, 1);
      this.selectedChange();
    },
    searchTextChanged(newText) {
      this.$emit('searchTextChange', newText);
    },
    clearSearchText() {
      this.searchText = '';
    },
    getLabel(value) {
      let tempValue = { ...value };
      this.labelPathArray.forEach(labelPath => {
        if (tempValue) {
          tempValue = tempValue[labelPath];
        }
      });
      return tempValue;
    },
  },
};
