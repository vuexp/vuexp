<script>
import { debounce } from '../helpers/helpers';

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
    pullToRefresh: Boolean, // just placeholder
    itemSelect: Object,
  },
  data() {
    return {
      listView: null,
      loadOnDemandThreshold: null,
      statusIndicatorVisible: false,
      statusIndicatorItemsData: [], // this property must be overriden just in showStatusIndicator method.
    };
  },
  render(h) {
    return this.renderListView(h, this.renderListItems(h));
  },
  methods: {
    setListViewElement() {
      const { scrollView, itemContainer } = this.$refs;
      this.listView = scrollView.$el;
      if (this.listView.scrollHeight === this.listView.clientHeight) {
        this.listView = itemContainer.$el;
      }
    },
    renderListView(h, children) {
      const { reversed, orientation } = this;
      const scrollViewProps = {
        class: {
          'vxp-scrollable': true,
          ['vxp-scrollable--' + orientation]: true,
        },
        props: { orientation },
        attrs: this.$attrs,
        ref: 'scrollView',
        nativeOn: {
          scroll: debounce(this.onScroll, 100),
        },
      };
      const stackLayoutProps = {
        class: {
          reversed: reversed,
        },
        props: { orientation },
        nativeOn: {
          scroll: debounce(this.onScroll, 100),
        },
        ref: 'itemContainer',
      };
      return h('ScrollView', scrollViewProps, [h('StackLayout', stackLayoutProps, children)]);
    },
    renderListItems(h) {
      const { list, $scopedSlots, itemSelect, selectorFn, getItemTemplate } = this;
      const selectorFnList = [];
      const listItemVNodes = [];
      if (itemSelect) {
        Object.keys(itemSelect).forEach(slotName => {
          selectorFnList.push({
            slotName,
            fn: selectorFn(itemSelect[slotName]),
          });
        });
      }

      list.forEach((item, index) => {
        const slot = getItemTemplate(item, selectorFnList);
        const scopedSlot = $scopedSlots[slot] || Object.values($scopedSlots)[0];

        listItemVNodes.push(
          h(
            'FlexboxLayout',
            {
              attrs: {
                index,
              },
              class: {
                'list-item': true,
                'list-item__status-indicator': item.isStatusIndicator,
              },
              on: {
                tap: this.itemTap.bind(this, item, index),
              },
              key: item.id || index,
            },
            [
              scopedSlot({
                item,
                $index: index,
              }),
            ],
          ),
        );
      });
      return listItemVNodes;
    },
    selectorFn(condition) {
      return new Function('ctx', `with(ctx) { return !!(${condition}) }`);
    },
    getItemTemplate(item, selectorFnList) {
      if (Array.isArray(selectorFnList)) {
        for (let i = 0; i < selectorFnList.length; i += 1) {
          const { fn } = selectorFnList[i];
          if (typeof fn === 'function' && fn({ item })) {
            return selectorFnList[i].slotName;
          }
        }
      }
      return null;
    },
    itemTap(item, index) {
      this.$emit('tap', item, index);
    },
    onScroll(event) {
      const { target } = event;
      const { scrollHeight, scrollTop, offsetHeight } = target;
      const { reversed, loadOnDemandThreshold } = this;
      if ((reversed && scrollTop <= loadOnDemandThreshold) || (!reversed && scrollTop >= scrollHeight - offsetHeight - loadOnDemandThreshold)) {
        this.$emit('loadMoreItems');
      }
      this.$emit('scrolled');
    },
    scrollTo(offset, animated = true) {
      this.listView.scrollTo({
        top: offset,
        left: 0,
        behavior: animated ? 'smooth' : 'auto',
      });
    },
    scrollToStart(animated = true) {
      const { listView } = this;
      if (!listView) {
        return;
      }

      if (!this.reversed) {
        this.scrollTo(0, animated);
      } else {
        this.scrollTo(listView.scrollHeight + listView.offsetHeight, animated);
      }
    },
    scrollToEnd(animated = true) {
      const { listView } = this;
      if (!listView) {
        return;
      }

      if (!this.reversed) {
        this.scrollTo(listView.scrollHeight + listView.offsetHeight, animated);
      } else {
        this.scrollTo(0, animated);
      }
    },
    scrollToIndex(index) {
      const { listView } = this;
      if (!listView) {
        return;
      }
      try {
        const itemElement = listView.querySelector(`[index="${index}"]`);
        itemElement.scrollIntoView(this.reversed);
      } catch (e) {
        console.error('Cannot scroll to item with given index:', e.message); // eslint-disable-line
      }
    },
    showStatusIndicator(showIndicator, item) {
      if (!this.listView || (!this.statusIndicatorVisible && !showIndicator)) {
        return console.error('Listview may not be rendered yet. Cannot show status indicator.'); // eslint-disable-line
      }
      this.statusIndicatorVisible = !!showIndicator;
      this.statusIndicatorItemsData = [
        {
          ...item,
          isStatusIndicator: true,
        },
      ];
    },
  },
  mounted() {
    this.setListViewElement();
    this.$nextTick(() => {
      this.$emit('listViewLoaded');
    });
  },
  computed: {
    list() {
      if (!this.statusIndicatorVisible) {
        return this.items;
      } else {
        return this.statusIndicatorItemsData;
      }
    },
  },
  watch: {
    items() {
      this.loadOnDemandThreshold = this.listView.scrollHeight / 3;
    },
  },
};
</script>

<style lang="scss">
.vxp-scrollable {
  .list-item {
    display: list-item; /* for web */
    list-style-type: none;
    cursor: default;

    &__status-indicator {
      margin: auto;
      align-items: center;
      height: 100%;
      display: flex;
      justify-content: center;
    }
  }

  // chrome scrollbar styles
  &::-webkit-scrollbar-track-piece {
    background-color: #eee;
  }

  &::-webkit-scrollbar-thumb:vertical,
  &::-webkit-scrollbar-thumb:horizontal {
    height: 30px;
    background-color: #ccc;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  // moz scrollbar styles
  scrollbar-color: #ccc #eee;
  scrollbar-width: thin;

  &--scrollbar-hidden {
    &.vxp-scrollable--horizontal {
      overflow-x: scroll;
    }

    &.vxp-scrollable--vertical {
      overflow-y: scroll;
    }

    &::-webkit-scrollbar {
      width: 0;
    }
    scrollbar-width: none;
  }
}

.reversed {
  /* vertical only */
  flex-direction: column-reverse;
  overflow-y: auto;
}
</style>
