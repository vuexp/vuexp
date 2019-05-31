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
      this.selected.push(item);
      this.selectedChange();
    },
    selectedChange() {
      this.$emit('selectedChange', this.selected);
    },
    notSelectedItems() {
      return this.items.filter(item => this.selected.indexOf(item) === -1);
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
  },
};
