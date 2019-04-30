<template>
  <div v-common-directive class="vxp-dock-layout">
    <div class="vxp-dock-layout__left" data-area="left" ref="left"></div>
    <div class="vxp-dock-layout__right">
      <div class="vxp-dock-layout__right__top" data-area="top" ref="top"></div>
      <div class="vxp-dock-layout__right__bottom">
        <div class="vxp-dock-layout__right__bottom__left">
          <div class="vxp-dock-layout__right__bottom__left__top">
            <div class="vxp-dock-layout__right__bottom__left__top_center" data-area="center" ref="center"></div>
          </div>
          <div class="vxp-dock-layout__right__bottom__left__bottom" data-area="bottom" ref="bottom"></div>
        </div>
        <div class="vxp-dock-layout__right__bottom__right" data-area="right" ref="right"></div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import Gestures from '../mixins/GestureMixin';
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'DockLayout',
  props: {
    stretchLastChild: {
      type: Boolean,
      default: true,
    },
  },
  mixins: [Gestures],
  updated() {
    this.processSlots();
  },
  mounted() {
    this.processSlots();
  },
  methods: {
    processSlots() {
      if (!this.$slots.default) {
        return; // there no slots
      }
      for (let slot of this.$slots.default) {
        let parent;
        const dock = slot.data && slot.data.attrs && slot.data.attrs.dock ? slot.data.attrs.dock : '';
        switch (dock) {
          case 'left':
          case 'top':
          case 'right':
          case 'bottom':
            parent = this.$refs[dock];
            break;
          default:
            parent = this.$refs.center;
            break;
        }

        if (slot.elm) {
          parent.appendChild(slot.elm);

          let [last] = this.$slots.default.slice(-1);

          if (parent.previousSibling && parent.previousSibling.classList) {
            parent.previousSibling.classList.remove('vxp-dock-layout__nonFlexible');
            // console.log("111111");
          } else if (parent.nextSibling && parent.nextSibling.classList) {
            parent.nextSibling.classList.remove('vxp-dock-layout__nonFlexible');
            // console.log("22222222");
          }

          if (slot === last && this.stretchLastChild) {
            if (parent.previousSibling && parent.previousSibling.classList) {
              parent.previousSibling.classList.add('vxp-dock-layout__nonFlexible');
              //   console.log("3333333");
            } else if (parent.nextSibling && parent.nextSibling.classList) {
              parent.nextSibling.classList.add('vxp-dock-layout__nonFlexible');
              //  console.log("4444444");
            }

            // console.log(slot.elm.parentElement.classList);
            // if (slot.elm.parentElement.classList.value.indexOf("vxp-dock-layout__right__bottom__left__top_center") != -1) {
            //   console.log("slot.elm.parentElement: ", slot.elm.parentElement);
            // }

            // console.log(slot.elm.parentElement)
            slot.elm.parentElement.classList.add('vxp-dock-layout__stretchLastChild');
            // slot.elm.parentElement.nextSibling.style.flex = "0";

            // if (slot.elm.classList.value.indexOf("vxp-dock-layout__right__bottom__left__top_center") != -1) {
            //   console.log("slot.elm. ", slot.elm);
            // }

            slot.elm.classList.add('vxp-dock-layout__stretchLastChild');
            // slot.elm.nextSibling.style.flex = "0";
          } else {
            // when dockLayout slots are updated on runtime, following classes may sometimes remain on classList although they must not.
            // we need to be sure that they are removed from class list

            if (slot.elm.parentElement.classList) {
              slot.elm.parentElement.classList.remove('vxp-dock-layout__stretchLastChild');
            }
            if (slot.elm.classList) {
              slot.elm.classList.remove('vxp-dock-layout__stretchLastChild');
            }
          }
        }
      }
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
};
</script>

<style lang="scss">
.vxp-dock-layout {
  display: flex;
  width: 100%;
  height: 100%;

  .vxp-dock-layout__nonFlexible {
    flex: 0;
  }
  .vxp-dock-layout__stretchLastChild {
    flex: 1;
  }
  * {
    display: flex;
  }

  &__right {
    display: flex;
    flex-direction: column;
    flex: 1;

    &__top {
      flex-direction: column;
    }

    &__bottom {
      display: flex;
      flex: 1;

      &__left {
        display: flex;
        flex: 1;
        flex-direction: column;

        &__top {
          display: flex;
          flex: 1;
        }

        &__bottom {
          flex-direction: column-reverse;
        }
      }

      &__right {
        flex-direction: row-reverse;
      }
    }
  }
}
</style>
