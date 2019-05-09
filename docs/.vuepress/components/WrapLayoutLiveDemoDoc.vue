<template>
  <StackLayout>
    <StackLayout class="demo-panel">
      <Label class="demo-panel__title" text="Container Configuration"></Label>
      <StackLayout class="form-group">
        <StackLayout orientation="horizontal">          
          <Label text="Background Color: " class="editor-param hidden-sm" width="200"/>
          <Label text="Bg Color: " class="editor-param hidden-lg" width="200"/>
          <select v-model="containerBackground" id="wraplayout_backgroundColor_input">
            <option disabled value>Color</option>
            <option v-for="color in colors" :key="color.value" :value="color.value">{{color.label}}</option>
          </select>
        </StackLayout>
        <StackLayout orientation="horizontal" class="m-t-5">
          <Label text="Width: " class="editor-param" width="200"/>
          <TextField keyboardType="number" v-model="width" id="wraplayout_width_input"/>
        </StackLayout>
        <StackLayout orientation="horizontal" class="m-t-5">
          <Label text="Height: " class="editor-param" width="200"/>
          <TextField keyboardType="number" v-model="height" id="wraplayout_height_input"/>
        </StackLayout>
        <StackLayout orientation="horizontal" class="m-t-5">
          <Label text="Orientation: " width="200"></Label>
          <select horizontalAlignment="50%" v-model="orientation" id="wraplayout_orientation_input">
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>
        </StackLayout>
        <StackLayout orientation="horizontal" class="m-t-5">
          <Label text="Item Width: " class="editor-param" width="200"/>
          <TextField
            keyboardType="number"
            v-model="containerItemWidth"
            id="wraplayout_itemWidth_input"
          />
        </StackLayout>
        <StackLayout orientation="horizontal" class="m-t-5">
          <Label text="Item Height: " class="editor-param" width="200"/>
          <TextField
            keyboardType="number"
            v-model="containerItemHeight"
            id="wraplayout_itemHeight_input"
          />
        </StackLayout>
      </StackLayout>
    </StackLayout>

    <StackLayout class="demo-panel">
      <Label class="demo-panel__title" text="Add Children"></Label>
      <StackLayout class="form-group">
        <StackLayout orientation="horizontal">
          <Label text="Actions: " width="110"/>
          <Button
            class="m-g-3"
            @tap="addNewLabel()"
            id="wraplayout_addNewChild__button"
          >Add New Child</Button>
          <Button
            class="m-g-3"
            @tap="removeLabels()"
            id="wraplayout_removeAll__button"
          >Remove Children</Button>
          <Button
            class="m-g-3"
            @tap="removeLast()"
            id="wraplayout_removeLast__button"
          >Remove Last Child</Button>
        </StackLayout>
        <StackLayout orientation="horizontal" class="m-t-5">
          <Label text="Text: " width="140"></Label>
          <TextField
            v-model="itemText"
            @returnPress="onKeyUp"
            keyboardType="text"
            ref="itemInput"
            hint="Item Text"
            id="wraplayout_itemText_input"
          ></TextField>
        </StackLayout>
        <StackLayout orientation="horizontal" class="m-t-5">
          <Label text="Width: " width="140"></Label>
          <TextField
            keyboardType="number"
            v-model="itemWidth"
            hint="Item Width"
            id="wraplayout_innerItem_itemWidth_input"
          ></TextField>
        </StackLayout>
        <StackLayout orientation="horizontal" class="m-t-5">
          <Label text="Height: " width="140"></Label>
          <TextField
            keyboardType="number"
            v-model="itemHeight"
            hint="Item Height"
            id="wraplayout_innerItem_itemHeight_input"
          ></TextField>
        </StackLayout>
      </StackLayout>
    </StackLayout>

    <StackLayout class="demo-panel">
      <Label class="demo-panel__title" text="Rendered Result"></Label>
      <WrapLayout
        :width="width"
        :height="height"
        :itemWidth="containerWidth"
        :itemHeight="containerHeight"
        :orientation="orientation"
        :backgroundColor="containerBackground"
        id="wraplayout_thewraplayout"
        class="wrap_demo_item"
      >
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
    </StackLayout>

    <StackLayout class="demo-panel">
      <Label class="demo-panel__title" text="Children List"></Label>
      <StackLayout class="form-group">
          <WrapLayout  
              class="child-panel-container"
              orientation="vertical"
              v-for="(label,index) in labels"
              :key="index" 
              >          
          <Label text="Text :" class="m-g-3"></Label>
          <TextField
            v-model="label.text"      
            :id="'wraplayout_childreneditor_text_input' + index"
          ></TextField>

          <Label text="Width: " class="m-g-3"></Label>
          <TextField
            keyboardType="number"
            v-model="label.width"
            :id="'wraplayout_childreneditor_width_input' + index"
          ></TextField>

          <Label text="Height: " class="m-g-3"></Label>
          <TextField
            keyboardType="number"
            v-model="label.height"
            :id="'wraplayout_childreneditor_height_input' + index"
          ></TextField>

          <Label text="Color: " class="m-g-3"></Label>
          <select v-model="label.bgColor" :id="'wraplayout_childreneditor_bgColor_input' + index">
            <option disabled value>Color</option>
            <option v-for="color in colors" :key="color.value" :value="color.value">{{color.label}}</option>
          </select>             
          <Button
            class="fa fa-remove hidden-sm"             
            @tap="removeItem(index)"
            :id="'wraplayout_childreneditor_removeItem_button' + index"
          ></Button>
          </WrapLayout>
      </StackLayout>
    </StackLayout>
    
  </StackLayout>
</template>


<script>
import Label from '../../../src/components/Label';
import Button from '../../../src/components/Button';
import TextField from '../../../src/components/TextField';
import WrapLayout from '../../../src/layouts/WrapLayout';
import StackLayout from '../../../src/layouts/StackLayout';
import PredefinedColors from '../../shared/colors';

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

const colorAlternator = new ColorAlternator(PredefinedColors.map(i=> i.value));

export default {
  name: 'WrapLayoutLiveDemoDoc',
  data() {
    return {
      labels: [],
      width: "460",
      height: "380",
      orientation: 'horizontal',
      containerItemWidth: '',
      containerItemHeight: '',
      itemWidth: '', 
      itemHeight: '',
      itemText: '',
      containerBackground: '',
      colors: PredefinedColors
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
    removeItem(index) {
      this.labels.splice(index, 1);
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
  computed: {
    containerWidth(){
      if(this.containerItemWidth) {
        return Number(this.containerItemWidth);
      }
      return null;
    },
    containerHeight(){
      if(this.containerItemHeight) {
        return Number(this.containerItemHeight);
      }
      return null;
    }
  },
  components: {
    StackLayout,
    TextField,
    WrapLayout,
    Label,
    Button
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
@import url('/fonts/fontawesome.min.css');
@import url('/custom-input.css');

@media only screen and (max-width: 800px) {
  .hidden-sm {
    display: none;
  }
}

@media only screen and (min-width: 800px) {
  .hidden-lg {
    display: none;
  }
}

.m-g-3 {
  margin: 3px;
}

.m-t-5 {
  margin-top: 5px;
}

.c-pointer {
  cursor: pointer;
}

.btn {
  border: 1px solid #ccc;
  border-radius: 3px;
  background: #fef;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background: #ccc;
  }
}

.child-panel-container {
  border:1px solid #c3bbbb;
  border-radius: 5px;
  padding: 5px;
  margin: 3px;
}

.demo-panel {
  overflow:auto;
  padding: 10px;
  background-color: #eee;
  border: #6c495e;
  border-radius: 5px;
  margin: 10px;
  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}

.editor-param {
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.editor-param-input {
  width: 40px;
  margin-left: 5px;
}
</style>
