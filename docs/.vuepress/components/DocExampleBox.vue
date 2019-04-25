<template>
  <div class="nudoc-example">
    <div class="nudoc-example__header">
      <div class="nudoc-example__header__title">Usage</div>
      <div class="nudoc-example__header__expand" @click="expand">Expand</div>
      <div class="nudoc-example__header__codebox" v-if="codeBox">
        <a :href="codeBox" target="_blank">Sandbox</a>
      </div>
    </div>
    <div class="nudoc-example__usage">
      <div class="nudoc-example__usage__header" v-show="expanded">
        <div class="nudoc-example__usage__header__item" @click="showUsage('html')">HTML</div>
        <div class="nudoc-example__usage__header__item" @click="showUsage('js')">JS</div>
        <div class="nudoc-example__usage__header__item" @click="showUsage('scss')">SCSS</div>
      </div>
    </div>
    <div class="nudoc-example__content" :class="contentClass">
      <slot></slot>
    </div>
    <div class="nudoc-example__code" ref="code"></div>
  </div>
</template>

<script>
export default {
  name: "NuExample",
  data() {
    return {
      expanded: false,
      showHTML: false,
      showJS: false,
      showSCSS: false
    };
  },
  props: {
    codeBox: String
  },
  computed: {
    contentClass: function() {
      return this.showHTML
        ? "nudoc-example__content--show-html"
        : this.showJS
          ? "nudoc-example__content--show-js"
          : this.showSCSS
            ? "nudoc-example__content--show-scss"
            : "";
    }
  },
  methods: {
    expand: function() {
      this.expanded = !this.expanded;
      if (this.expanded) {
        this.showHTML = true;
      } else {
        this.showHTML = false;
        this.showJS = false;
        this.showSCSS = false;
      }
    },
    showUsage: function(content) {
      switch (content) {
        case "js":
          this.showHTML = false;
          this.showJS = true;
          this.showSCSS = false;
          break;
        case "scss":
          this.showHTML = false;
          this.showJS = false;
          this.showSCSS = true;
          break;
        case "html":
        default:
          this.showHTML = true;
          this.showJS = false;
          this.showSCSS = false;
          break;
      }
    }
  }
};
</script>

<style lang="scss">
.nudoc-example {
  background-color: #ffffff;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);

  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  &__header {
    background-color: #2d3750;
    color: #fff;
    font-size: 20px;
    padding: 10px 10px;
    display: flex;

    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    &__title {
      flex: 1;
    }

    &__expand {
      flex: 0 0 90px;
      text-align: center;
      cursor: pointer;
    }

    &__codebox {
      flex: 0 0 90px;
      text-align: center;

      a:hover {
        cursor: pointer;
      }
    }
  }

  &__usage {
    &__header {
      display: flex;
      background-color: #526594;
      color: #fff;

      &__item {
        font-size: 14px;
        text-align: center;
        line-height: 24px;
        padding: 9px 18px;
        -webkit-transition: background-color 0.35s
          cubic-bezier(0.35, 0, 0.25, 1);
        transition: background-color 0.35s cubic-bezier(0.35, 0, 0.25, 1);
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        text-transform: uppercase;
        float: left;
        font-weight: 500;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  &__content {
    padding: 15px;
    min-height: 200px;

    > .language-html,
    > .language-js,
    > .language-scss {
      display: none;
    }

    &--expanded {
      > .language-html,
      > .language-js,
      > .language-scss {
        display: none;
      }
    }

    &--show-html {
      > .language-html {
        display: block;
      }
    }

    &--show-js {
      > .language-js {
        display: block;
      }
    }

    &--show-scss {
      > .language-scss {
        display: block;
      }
    }
  }
}
</style>
