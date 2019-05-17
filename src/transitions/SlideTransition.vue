<template>
  <transition name="slide" :enter-active-class="transitionEnterActiveClass" :leave-active-class="transitionLeaveActiveClass">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'SlideTransition',
  props: {
    direction: {
      type: String,
      default: 'left',
    },
    duration: {
      type: [String, Number],
      default: '500',
    },
  },
  computed: {
    transitionEnterActiveClass: function() {
      switch (this.direction) {
        case 'left':
          return `slideLeftIn-duration-${this.duration}`;
        case 'right':
          return `slideRightIn-duration-${this.duration}`;
        case 'up':
          return `slideUpIn-duration-${this.duration}`;
        case 'down':
          return `slideDownIn-duration-${this.duration}`;
        default:
          return `slideLeftIn-duration-${this.duration}`;
      }
    },
    transitionLeaveActiveClass: function() {
      switch (this.direction) {
        case 'left':
          return `slideLeftOut-duration-${this.duration}`;
        case 'right':
          return `slideRightOut-duration-${this.duration}`;
        case 'up':
          return `slideUpOut-duration-${this.duration}`;
        case 'down':
          return `slideDownOut-duration-${this.duration}`;
        default:
          return `slideLeftOut-duration-${this.duration}`;
      }
    },
  },
};
</script>

<style lang="scss">
@keyframes slideFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes slideFromRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes slideFromUp {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slideFromDown {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

$durations: 200, 500, 1000;

@mixin enterAnimation($animation, $duration) {
  animation: $animation #{$duration}ms ease-in;
}
@mixin leaveAnimation($animation, $duration) {
  animation: $animation #{$duration}ms ease-in reverse;
}

@each $duration in $durations {
  .slideLeftIn-duration-#{$duration} {
    @include enterAnimation(slideFromLeft, $duration);
  }

  .slideLeftOut-duration-#{$duration} {
    @include leaveAnimation(slideFromLeft, $duration);
  }

  .slideRightIn-duration-#{$duration} {
    @include enterAnimation(slideFromRight, $duration);
  }

  .slideRightOut-duration-#{$duration} {
    @include leaveAnimation(slideFromRight, $duration);
  }

  .slideUpIn-duration-#{$duration} {
    @include enterAnimation(slideFromUp, $duration);
  }

  .slideUpOut-duration-#{$duration} {
    @include leaveAnimation(slideFromUp, $duration);
  }

  .slideDownIn-duration-#{$duration} {
    @include enterAnimation(slideFromDown, $duration);
  }

  .slideDownOut-duration-#{$duration} {
    @include leaveAnimation(slideFromDown, $duration);
  }
}
</style>
