<script>
export default {
  name: 'VxpListView',
  props: {
    items: {
      type: Array,
      required: true,
    },
    reversed: {
      type: Boolean,
      default: false,
    },
    pullToRefresh: Boolean,
    itemSelect: Object,
    nativeListSelectionHover: Boolean,
  },
  data() {
    return {
      listView: null,
      statusIndicatorVisible: false,
      rowHeight: 'auto',
    };
  },
  methods: {
    addPullToRefreshWrapper(h, listView) {
      return h(
        'PullToRefresh',
        {
          on: {
            refresh: this.onPullToRefreshTriggered,
          },
        },
        [listView],
      );
    },
    renderListView(h, children) {
      return h(
        'ListView',
        {
          attrs: {
            separatorColor: 'transparent',
          },
          props: {
            items: this.items,
          },
          on: {
            itemTap: this.itemTap,
            loadMoreItems: this.loadMoreItems,
            loaded: this.listViewLoaded,
            itemLoading: this.itemLoading,
            layoutChanged: this.layoutChanged,
          },
          ref: 'listView',
        },
        children,
      );
    },
    renderListItems(h) {
      const { $scopedSlots, itemSelect } = this;
      const vTemplateSlots = Object.keys($scopedSlots).map(slotName => {
        const scopedSlot = $scopedSlots[slotName];
        // scopedSlot() always returns as array
        // https://github.com/vuejs/vue/blob/ab50e8e1da2f4f944af683252481728485fedf16/test/unit/features/component/component-scoped-slot.spec.js#L447
        const [template] = scopedSlot({ item: {}, index: -1 });
        return h('v-template', {
          attrs: {
            if: itemSelect ? itemSelect[slotName].toString() : 'true',
          },
          scopedSlots: {
            default: template.data.scopedSlots.default,
          },
        });
      });
      return vTemplateSlots;
    },
    itemTap({ item, index }) {
      if (item && !item.isStatusIndicator) {
        this.$emit('tap', item, index);
      }
    },
    /**
     * Will be triggered when layout of the listview is changed
     */
    layoutChanged() {
      const { listView } = this;
      if (listView.ios) {
        setTimeout(() => {
          // When new data is loaded into listview,
          // layout size is updating according to size on that time
          // if the current size is smaller then initial size, current one will be set as actual size
          // and will not be resized to initial size again.
          // Note: requestLayout is not same with refresh() functionality, 'refresh' is loading all items again,
          // requestLayout is re-rendering layout of the listview which is displaying on the screen
          listView.requestLayout(); //Invalidates the layout of the view and triggers a new layout pass
        }, 1);
      }
    },
    itemLoading({ view, ios, index, object }) {
      let item = object.items[index];
      if (item && item.isStatusIndicator) {
        // set indicator item's height same as listview height to center it vertically
        let listViewHeight = object.getActualSize().height;
        object.set('rowHeight', listViewHeight);
      } else if (object.get('rowHeight') !== 'auto') {
        // set default row height
        object.set('rowHeight', 'auto');
      }
      if (this.reversed) {
        view.scaleY = -1;
      }
      if (ios && !this.nativeListSelectionHover) {
        ios.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone; // eslint-disable-line
      }
      if (!this.statusIndicatorVisible) {
        this.$emit('scrolled');
      }
    },
    loadMoreItems() {
      if (this.statusIndicatorVisible) {
        return;
      }
      this.$emit('loadMoreItems');
    },
    scrollToStart(animated = true) {
      this.scrollToIndex(0, animated);
    },
    scrollToEnd(animated = true) {
      const lastIndex = this.items.length - 1;
      this.scrollToIndex(lastIndex, animated);
    },
    scrollToIndex(index, animated = true) {
      try {
        const { listView } = this;
        if (!listView) {
          return;
        }
        if (animated) {
          setTimeout(() => {
            listView.scrollToIndexAnimated(index);
          }, 100);
        } else {
          setTimeout(() => {
            listView.scrollToIndex(index);
          }, 100);
        }
      } catch (e) {
        console.error('Cannot scroll to item with given index:', e.message); // eslint-disable-line
      }
    },
    listViewLoaded(e) {
      this.listView = e.object;
      if (this.reversed) {
        this.listView.scaleY = -1;
      }
      if (this.listView.ios) {
        this.listView.ios.bounces = this.pullToRefresh;
      }
      this.$emit('listViewLoaded');
    },
    onPullToRefreshTriggered(e) {
      this.$emit('pullToRefreshTriggered', e.object);
    },
    showStatusIndicator(showIndicator, item) {
      if (!this.listView || (!this.statusIndicatorVisible && !showIndicator)) {
        return console.error('Listview may not be rendered yet. Cannot show status indicator.'); // eslint-disable-line
      }
      let items = this.items; // eslint-disable-line prefer-destructuring
      if (showIndicator) {
        items = [
          {
            ...item,
            isStatusIndicator: true,
          },
        ];
      }
      this.statusIndicatorVisible = !!showIndicator;
      this.listView.set('items', items);
      this.listView.refresh();
    },
  },
  render(h) {
    const listView = this.renderListView(h, this.renderListItems(h));
    if (this.pullToRefresh) {
      return this.addPullToRefreshWrapper(h, listView);
    } else {
      return listView;
    }
  },
};
</script>
