<template>
  <div class="vxp-segmentedBar">
    <button
      class="vxp-segmentedBar__button"
      v-for="(tab, index) in children"
      :key="index"
      :class="{ 'vxp-segmentedBar__button--active': currentIndex === index }"
      role="tab"
      :aria-controls="`tab-${index}`"
      @click="updateSegmentedBarIndexes(index)"
      @keyup.enter="updateSegmentedBarIndexes(index)"
      @keyup.space="updateSegmentedBarIIndexes(index)"
      :style="currentIndex === index ? activeColorStyle : {}"
    >
      <span class="vxp-segmentedBar__button__title">{{ tab.title }}</span>
    </button>
  </div>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'SegmentedBar',
  model: {
    event: 'selectedIndexChanged',
    prop: 'selectedIndex',
  },
  props: {
    items: Array,
    selectedIndex: {
      type: Number,
      default: 0,
    },
    selectedBackgroundColor: {
      type: String,
    },
  },
  data() {
    return {
      currentIndex: this.selectedIndex || 0,
      childrenFromSlots: [],
    };
  },
  mounted() {
    this._renderSlots();
  },
  beforeUpdate() {
    /**
     * _renderSlots is recalled here, because when items data is updated titles need to be updated too.
     */
    this._renderSlots();
  },
  computed: {
    children() {
      if (this.items && this.items.length) {
        return this.items;
      }
      return this.childrenFromSlots;
    },
    activeColorStyle() {
      return {
        'background-color': this.selectedBackgroundColor,
        borderColor: this.selectedBackgroundColor,
      };
    },
  },
  methods: {
    updateSegmentedBarIndexes(index) {
      if (this.currentIndex !== index) {
        if (index < 0) {
          this.currentIndex = this.children.length - 1;
        } else if (index >= this.children.length) {
          this.currentIndex = 0;
        } else {
          this.currentIndex = index;
        }
        this.$emit('selectedIndexChanged', this.currentIndex);
      }
    },
    _renderSlots() {
      if (this.$slots && this.$slots.default && this.$slots.default.length) {
        this.childrenFromSlots = this.$slots.default.reduce((accum, tab) => {
          if (tab.componentOptions && tab.componentOptions.propsData && tab.componentOptions.tag === 'SegmentedBarItem') {
            accum.push({
              title: tab.componentOptions.propsData.title,
              webIcon: tab.componentOptions.propsData.webIcon,
            });
          } else {
            console.warn('SegmentedBar component only accepts SegmentedBarItem as child'); // eslint-disable-line
          }
          return accum;
        }, []);
      }
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.vxp-segmentedBar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  &__button {
    background: none;
    border: solid 1px dodgerblue;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-self: center;
    cursor: pointer;
    color: dodgerblue;
    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    &:hover {
      background-color: aliceblue;
    }
    &--active {
      background-color: dodgerblue;
      color: #fff;
      &:hover {
        background-color: #1b81e5;
      }
    }
    &__title {
      padding: 10px 2px 10px 2px;
    }
  }
}
</style>
