<template>
  <StackLayout class="nubutton-doc-container theme--nuweb">
    <StackLayout orientation="horizontal">
      <StackLayout style="padding: 15px">
        <Label text="Primary" style="padding-bottom: 10px; text-align: center;"></Label>
        <VxpIconButton
          id="iconbutton__click__primarybutton"
          :isEnabled="isEnabled"
          @tap="increment($event)"
          iconName="fa"
          :icon="buttonIcon"
          :size="iconSize1"
          primary
          style="margin: 0 auto"
        />
      </StackLayout>
      <StackLayout style="padding: 15px">
        <Label text="Secondary" style="text-align: center;"></Label>
        <VxpIconButton
          id="iconbutton__click__secondarybutton"
          :isEnabled="isEnabled"
          @tap="increment($event)"
          iconName="fa"
          :icon="buttonIcon"
          :size="iconSize2"
          secondary
          style="margin: 0 auto"
        />
      </StackLayout>
      <StackLayout style="padding: 15px">
        <Label text="Alert" style="text-align: center;"></Label>
        <VxpIconButton
          id="iconbutton__click__alertbutton"
          :isEnabled="isEnabled"
          @tap="increment($event)"
          iconName="fa"
          :icon="buttonIcon"
          :size="iconSize3"
          style="margin: 0 auto"
          alert
        />
      </StackLayout>
    </StackLayout>

    <FlexboxLayout flexDirection="row" class="nubutton-doc-container__separator">
      <Label class="nubutton-doc-container__separator__label" fontAttributes="Bold" text="Configuration" />
      <hr class="nubutton-doc-container__separator__hr" width="65%" />
    </FlexboxLayout>

    <FlexboxLayout class="nubutton-doc-container__config" flexDirection="row" justifyContent="start" style="margin: 10px">
      <Label text="Disable State: " width="100" />
      <VxpCheckbox id="iconbutton__check__checkbox" class="nubutton-doc-container__config__checkbox" primary @change="isEnabled = !isEnabled" />
    </FlexboxLayout>
    <StackLayout class="prop-container">
      <Label text="Icon Class"></Label>
      <StackLayout style="margin-top:15px" orientation="horizontal">
        <StackLayout class="form-group">
          <select style="height: 1.9rem;" id="iconbutton__icon__select" v-model="buttonIcon">
            <option v-for="icon in icons" v-bind:value="icon">{{ icon }}</option>
          </select>
          <Label class="control-label" text="Icon"></Label>
          <i class="bar"></i>
        </StackLayout>
      </StackLayout>
    </StackLayout>
    <StackLayout class="prop-container">
      <Label text="Sizes"></Label>
      <StackLayout style="margin-top:15px" orientation="horizontal">
        <StackLayout class="form-group">
          <select style="height: 1.9rem;" id="iconbutton__iconsize1__select" v-model="iconSize1">
            <option v-for="size in sizes" v-bind:value="size">{{ size }}</option>
          </select>
          <Label class="control-label" text="Primary Icon Size"></Label>
          <i class="bar"></i>
        </StackLayout>
        <StackLayout class="form-group p-l-2">
          <select style="height: 1.9rem;" id="iconbutton__iconsize2__select" v-model="iconSize2">
            <option v-for="size in sizes" v-bind:value="size">{{ size }}</option>
          </select>
          <Label class="control-label p-l-2" text="Secondary Icon Size"></Label>
          <i class="bar"></i>
        </StackLayout>
        <StackLayout class="form-group p-l-2">
          <select style="height: 1.9rem;" id="iconbutton__iconsize3__select" v-model="iconSize3">
            <option v-for="(size, index) in sizes" v-bind:value="size" :key="index">{{ size }}</option>
          </select>
          <Label class="control-label p-l-2" text="Alert Icon Size"></Label>
          <i class="bar"></i>
        </StackLayout>
      </StackLayout>
    </StackLayout>
    <StackLayout class="prop-container">
      <Label text="Events"></Label>
      <StackLayout style="margin-top:15px">
        <StackLayout class="form-group">
          <Label id="iconbutton__enabled__label" text="Icon Button Enabled Status:">{{ isEnabled }}</Label>
        </StackLayout>
        <StackLayout class="form-group">
          <Label id="iconbutton__buttonicon__label" text="Icon Button Class Name:">{{ buttonIcon }}</Label>
        </StackLayout>
        <StackLayout orientation="horizontal">
          <StackLayout class="form-group">
            <Label id="iconbutton__primaryicon__label" text="Primary Icon Size:">{{ iconSize1 }}</Label>
          </StackLayout>
          <StackLayout class="form-group">
            <Label id="iconbutton__secondaryicon__label" text="Secondary Icon Size:">{{ iconSize2 }}</Label>
          </StackLayout>
          <StackLayout class="form-group">
            <Label id="iconbutton__alerticon__label" text="Alert Icon Size:">{{ iconSize3 }}</Label>
          </StackLayout>
        </StackLayout>
        <StackLayout class="form-group">
          <Label id="iconbutton__eventname__label" text="Clicked Icon Button ID:">{{ eventName }}</Label>
        </StackLayout>
        <StackLayout class="form-group" orientation="horizontal">
          <Label text="Click count:" width="100" />
          <Label id="iconbutton__clickcount__label" :text="counter.toString()" />
        </StackLayout>
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';
import VxpIconButton from '../../../src/components/VxpIconButton';
import Label from '../../../src/components/Label';
import VxpCheckbox from '../../../src/components/VxpCheckbox';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'IconButtonDoc',
  data() {
    return {
      counter: 0,
      isEnabled: true,
      eventName: '',
      buttonIcon: 'fa fa-exclamation-triangle',
      iconSize1: 15,
      iconSize2: 37,
      iconSize3: 45,
      icons: ['fa fa-smile-o', 'fa fa-user-circle-o', 'fa fa-exclamation-triangle'],
      sizes: ['10', '15', '20', '25', '30', '35', '37', '40', '45', '50', '55', '60', '65', '70'],
    };
  },
  methods: {
    increment(e) {
      this.counter++;
      this.eventName = e.target.id;
    },
  },
  components: {
    StackLayout,
    VxpCheckbox,
    FlexboxLayout,
    VxpIconButton,
    Label,
  },
};
</script>

<style lang="scss">
@import url('/fonts/fontawesome.min.css');
@import url('/custom-input.css');

.p-l-1 {
  padding-left: 1rem;
}

.p-l-2 {
  padding-left: 2rem !important;
}
.form-group {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.nubutton-doc-container {
  margin-top: 25px;
  margin-bottom: 25px;
  align-items: center;
  &__flexboxLayout {
    margin-bottom: 15px;
    align-items: center;
  }
  &__label {
    top: 3px;
    right: 5px;
  }
  &__separator {
    margin-top: 15px;
    width: 100%;
    &__label {
      opacity: 0.9;
      font-weight: bold;
    }
    &__hr {
      border-top: 2px solid black;
      opacity: 0.6;
      margin-top: 12px;
    }
  }
  &__config {
    margin-top: 25px;
    &__checkbox {
      top: 3px;
    }
  }
}
.prop-container {
  width: 90%;
  margin-top: 25px;
  background: rgb(243, 243, 243);
  padding: 1rem;

  .child-row {
    background: #e3e4e4;
    margin-bottom: 1rem;
    padding: 1rem;

    .remove-child-btn {
      padding: 0px;
      height: 2rem;
      width: 2rem;
      min-width: 2rem;
      margin-top: 1rem;
    }
    .child-label {
      min-width: 35%;
      margin-top: 1.5rem;
    }
  }
}
</style>
