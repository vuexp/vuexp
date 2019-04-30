<template>
  <StackLayout>
    <WrapLayout :width="width" :height="height" :orientation="orientation" id="wraplayout_">
      <Label
        v-for="(label, index) in labels"
        :id="'dynamic-generated-label' + ' label_'+ index"
        :text="label.text"
        :key="label.text + '__' + index"
        :width="label.width"
        :height="label.height"
        :backgroundColor="label.bgColor"
      ></Label>
    </WrapLayout>
    <WrapLayout class="beautify-stylings">
      <WrapLayout>
        <Label text="Children: "/>
        <button horizontalAlignment="50%"  @click="addNewLabel()">Add New Child</button>
        <button horizontalAlignment="50%" @click="removeLabels()">Remove Children</button>
        <button horizontalAlignment="50%" @click="removeLast()">Remove Last Child</button>
      </WrapLayout>
      <StackLayout orientation="horizontal">
        <Label text="Item Text: "></Label>
        <TextField
          v-model="itemText"
          @returnPress="onKeyUp"
          keyboardType="text"
          ref="itemInput"
          hint="Item Text"
        ></TextField>
      </StackLayout>
      <WrapLayout orientation="horizontal">
        <StackLayout>
          <Label text="Item Width: "></Label>
          <TextField keyboardType="number" v-model="itemWidth" hint="Item Width"></TextField>
        </StackLayout>
        <StackLayout>
          <Label text="Item Height: "></Label>
          <TextField keyboardType="number" v-model="itemHeight" hint="Item Height"></TextField>
        </StackLayout>
      </WrapLayout>
      <StackLayout orientation="horizontal">
        <Label text="Orientation: "></Label>
        <select horizontalAlignment="50%" v-model="orientation">
          <option value="horizontal">Horizontal</option>
          <option value="vertical">Vertical</option>
        </select>
      </StackLayout>
    </WrapLayout>
  </StackLayout>
</template>


<script>
import Label from '../../../src/components/Label';
import TextField from '../../../src/components/TextField';
import WrapLayout from '../../../src/layouts/WrapLayout';
import StackLayout from '../../../src/layouts/StackLayout';

class ColorAlternator {
  currentIndex = 0;
  items = ['#43b883', '#1c6b48', '#289062', '#49e95e', '#33745e'];
  constructor(colors) {
    if (colors) {
      this.items = colors;
    }
  }
  next() {
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    }
    if (this.items.length < this.currentIndex + 1) {
      this.currentIndex = 0;
    }
    return this.items[this.currentIndex++];
  }

  back() {
    this.currentIndex--;
  }
}

const colorAlternator = new ColorAlternator();

export default {
  name: 'WrapLayoutLiveDemoDoc',
  data() {
    return {
      labels: [],
      width: 350,
      height: 400,
      orientation: 'vertical',
      itemWidth: '150',
      itemHeight: '150',
      itemText: '',
    };
  },
  mounted() {
    this.populateSampleData();
  },
  methods: {
    addNewLabel() {
      this.labels.push({
        text: this.itemText,
        width: this.itemWidth,
        height: this.itemHeight,
        bgColor: colorAlternator.next(),
      });
      this.$refs.itemInput.$el.focus();
    },
    removeLabels() {
      this.labels = [];
    },
    removeLast() {
      this.labels.splice(this.labels.length - 1, 1);
      colorAlternator.back();
    },
    onKeyUp() {
      this.addNewLabel();
    },
    populateSampleData() {
      this.addSampleBox(1, '120');
      this.addSampleBox(2, '120');
      this.addSampleBox(3, '120');
      this.addSampleBox(4, '120');
      this.addSampleBox(5, '120');
      this.addSampleBox(6, '120');
    },
    addSampleBox(index, boxSize) {
      this.labels.push({
        text: generateNumericOrderName(index),
        width: boxSize,
        height: boxSize,
        bgColor: colorAlternator.next(),
      });
    },
  },
  components: {
    StackLayout,
    TextField,
    WrapLayout,
    Label,
  },
};

function generateNumericOrderName(number) {
  if (number == 11) {
    return '11th';
  }
  if (number == 12) {
    return '12th';
  }
  if (number == 13) {
    return '13th';
  }
  if (number % 10 === 1) {
    return number + 'st';
  }
  if (number % 10 === 2) {
    return number + 'nd';
  }
  if (number % 10 === 3) {
    return number + 'rd';
  }
  return number + 'th';
}
</script>

<style lang="scss" scoped>
.beautify-stylings * {
  margin: 3px;
}
</style>
