export default {
  data() {
    return {
      searchText: '',
    };
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: Array,
      default() {
        return [];
      },
    },
    labelProp: {
      type: String,
      default: 'label',
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
      return this.notSelectedItems().filter(item => item[this.labelProp].toLocaleLowerCase().indexOf(this.searchText.toLocaleLowerCase()) > -1);
    },
  },
  methods: {
    selectItem(item) {
      const itemIndex = this.items.indexOf(item);
      this.selected.push(itemIndex);
      this.selectedChange();
    },
    selectedChange() {
      this.$emit('selectedChange', this.selected);
    },
    notSelectedItems() {
      return this.items.filter((item, index) => this.selected.indexOf(index) === -1);
    },
    removeSelection(item) {
      const itemIndex = this.items.indexOf(item);
      const selectedItemIndex = this.selected.indexOf(itemIndex);
      this.selected.splice(selectedItemIndex, 1);
      this.selectedChange();
    },
    searchTextChanged(newText) {
      this.$emit('searchTextChange', newText);
    },
    clearSearchText() {
      this.searchText = '';
    },
  },
};
