
<template>
  <StackLayout>
    <StackLayout class="demo-panel">
      <FlexboxLayout horizontalAlignment="center" flexWrap="wrap">
        <Button id="gridlayout_columns_render_samples" class="grid-add-btn" text="🔷 Render Samples" @tap="gridRenderSampleSet"/>
        <Button id="gridlayout_columns_clear" class="grid-add-btn" text="❌  Clear All Grid" @tap="clearGrid"/>
      </FlexboxLayout>
    </StackLayout>
    <!-- Column list editor -->
    <StackLayout class="demo-panel">
      <Label text="Grid Columns" class="demo-panel__title"/>
        <!-- add new grid column-->
        <Button id="gridlayout_columns_add_button" horizontalAlignment="center" class="grid-add-btn" text="➕ Add New Column" @tap="addNewGridColumn"/>
        <FlexboxLayout horizontalAlignment="center" flexWrap="wrap" v-for="(columnChild, index) in columnChildrenList" :key="'gridCols_' + getRandInt()">
          <StackLayout orientation="horizontal" class="editor-param">
            <Label class="" text="Col :"/>
            <Label class="editor-param-title" :text="index"/>
          </StackLayout>
          <StackLayout v-if="(columnChildrenList[index].columnSelectType !== 'auto')" orientation="horizontal" class="editor-param">
            <Label v-if="(columnChildrenList[index].columnSelectType !== 'auto')" class="editor-param-title" text="Input:"/>
            <TextField
              :id="'gridlayout_columns_selectbox_px_input' + index"
              class="editor-param-input"
              v-show="(columnChildrenList[index].columnSelectType === 'px')"
              v-model="columnChildrenList[index].pxValue"
            />
            <TextField
              :id="'gridlayout_columns_selectbox_star_input' + index"
              class="editor-param-input"
              v-show="(columnChildrenList[index].columnSelectType === '*')"
              v-model="columnChildrenList[index].starValue"
            />
          </StackLayout>

          <StackLayout orientation="horizontal" class="editor-param">
            <Label class="editor-param-title" text="Type:"/>
            <select
                class="editor-param-input"
                :id="'gridlayout_columns_selectbox' + index"
                v-model="columnChildrenList[index].columnSelectType"
                aria-label="Select Column Type"
              >
                <option disabled value>Select Column Type</option>
                <option>px</option>
                <option>auto</option>
                <option>*</option>
            </select>
          </StackLayout>
            <Button
              :id="'gridlayout_columns_remove_button' + index"
              @tap="removeColumnAtIndex(index)"
              text="❌"
            />
        </FlexboxLayout>
      <!-- Column list editor -->
    </StackLayout>
   


    <!-- Row list editor -->
    <StackLayout class="demo-panel">
      <Label text="Grid Rows" class="demo-panel__title"/>
      <!-- add new grid column-->
      <Button  horizontalAlignment="center" id="gridlayout_rows_add_button" class="grid-add-btn" text="➕ Add New Row" @tap="addNewGridRow"/>
      <FlexboxLayout horizontalAlignment="center" flexWrap="wrap" v-for="(rowChild, index) in rowChildrenList" :key="'gridRows_' + getRandInt()" >
        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="" text="Row :"/>
          <Label class="editor-param-title" :text="index"/>
        </StackLayout>
        <StackLayout v-if="(rowChildrenList[index].rowSelectType !== 'auto')" orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="Input:"/>
          <TextField
            class="editor-param-input"
            :id="'gridlayout_rows_selectbox_px_input' + index"
            v-show="(rowChildrenList[index].rowSelectType === 'px')"
            v-model="rowChildrenList[index].pxValue"  
          />
          <TextField
            class="editor-param-input"
            :id="'gridlayout_rows_selectbox_star_input' + index"
            v-show="(rowChildrenList[index].rowSelectType === '*')"
            v-model="rowChildrenList[index].starValue"  
          />
        </StackLayout>

        <StackLayout orientation="horizontal" class="editor-param">
          <Label class="editor-param-title" text="Type:"/>
          <select
              class="editor-param-input"
              :id="'gridlayout_rows_selectbox' + index"
              v-model="rowChildrenList[index].rowSelectType"
              aria-label="Select Row Type"
            >
              <option disabled value>Select Row Type</option>
              <option>px</option>
              <option>auto</option>
              <option>*</option>
          </select>
        </StackLayout>

        <Button
          :id="'gridlayout_rows_remove_button' + index"
          @tap="removeRowAtIndex(index)"
          text="❌"
        />
      </FlexboxLayout>
    </StackLayout>    
    <!-- Row list editor -->

    <!--Grid Cells header-->
    <StackLayout class="demo-panel">
      <Label text="Grid Cells" class="demo-panel__title"/>
    <!--Grid cell list--->
      <StackLayout orientation="vertical" class="demo-panel-child" v-for="(gridItem, index) in gridItemList" :key="'gridCells_' + getRandInt()">
        <FlexboxLayout flexWrap="wrap" :class="{error: (maxRowNo < gridItem.row )}">
          <StackLayout orientation="horizontal" class="editor-param">
            <Label class="editor-param-title" text="Row No: "/>
            <TextField
              :id="'gridlayout_cells_row_number_input' + index"
              class="editor-param-input"
              v-model="gridItem.row"
            />
          </StackLayout>
          <StackLayout orientation="horizontal" class="editor-param">
            <Label class="editor-param-title" text="RowSpan: "/>
            <TextField
              :id="'gridlayout_cells_rowspan_input' + index"
              class="editor-param-input"
              v-model="gridItem.rowSpan"
            />
          </StackLayout>
          <StackLayout orientation="horizontal" class="editor-param">
            <Label class="editor-param-title" text="Text: "/>
            <TextField
              :id="'gridlayout_cells_text_input' + index"
              class="editor-param-input"
              v-model="gridItem.text"
            />
          </StackLayout>
          <StackLayout orientation="horizontal" class="editor-param">
            <Label class="editor-param-title" text="Color: "/>
            <select
              :id="'gridlayout_cells_color_selectbox' + index"
              class="editor-param-input"
              v-model="gridItem.backgroundColor"
              aria-label="Color"
            >
              <option disabled value>Color</option>
              <option>red</option>
              <option>green</option>
              <option>blue</option>
              <option>yellow</option>
              <option>cyan</option>
              <option>orange</option>
              <option>gray</option>
            </select>
          </StackLayout>
        </FlexboxLayout>
        <FlexboxLayout flexWrap="wrap" :class="{error: ( maxColNo < gridItem.col)}">
          <StackLayout orientation="horizontal" class="editor-param">
            <Label class="editor-param-title" text="Col No: "/>
            <TextField
              :id="'gridlayout_cells_col_number_input' + index"
              class="editor-param-input"
              v-model="gridItem.col"
            />
          </StackLayout>
          <StackLayout orientation="horizontal" class="editor-param">
            <Label class="editor-param-title" text="ColSpan: "/>
            <TextField
              :id="'gridlayout_cells_colspan_input' + index"
              class="editor-param-input"
              v-model="gridItem.colSpan"
            />
          </StackLayout>
          <StackLayout orientation="horizontal" class="editor-param">
            <Label class="editor-param-title" text="Width:"/>
            <TextField
              :id="'gridlayout_cells_width_input' + index"
              class="editor-param-input"
              v-model="gridItem.width"
            />
          </StackLayout>
          <StackLayout orientation="horizontal" class="editor-param">
            <Label class="editor-param-title" text="Height: "/>
            <TextField
              :id="'gridlayout_cells_height_input' + index"
              class="editor-param-input"
              v-model="gridItem.height"
            />
          </StackLayout>
          <Button
            :id="'gridlayout_cells_remove_button' + index"
            @tap="removeGridCell(gridItem.row, gridItem.col)"
            text="❌"
          />
        </FlexboxLayout>
      </StackLayout>
    </StackLayout>

    <StackLayout style="margin-top:20px" class="demo-panel">
      <Label text="Rendered Result" class="demo-panel__title"/>
      <GridLayout :columns="getColumnSelectType" :rows="getRowSelectType" backgroundColor="#3c495e">        
        <Label
          v-for="(gridChild) in gridItemList"
          v-bind="gridChild"
          :key="'gridChild_' + getRandInt()"
        />
      </GridLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label';
import Button from '../../../src/components/Button';
import GridLayout from '../../../src/layouts/GridLayout';
import TextField from '../../../src/components/TextField';
import StackLayout from '../../../src/layouts/StackLayout';
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';

export default {
  name: 'GridLayoutLiveDemo',
  data() {
    return {
      gridChildText: 'Test',// initial values
      gridChildWidth: 'auto',
      gridChildHeight: 'auto',
      gridChildtype: 'auto',
      gridItemList: [],// for grid cells
      columnChildrenList: [],
      rowChildrenList: [],
      currentColumnNo: 0, // for add/remove col/row
      currentRowNo:0,
      maxRowNo:0, // for visual effects
      maxColNo:0,
    };
  },
  mounted() {
    this.renderInitialGrid();
  },
  computed: {
    getColumnSelectType() {
      let columnSelectType = undefined;
      this.columnChildrenList.forEach(columnItem => {
        if (typeof columnSelectType === 'undefined') {
          columnSelectType = this.getGridTypeValue('col', columnItem);
        } else {
          columnSelectType += ', ' + this.getGridTypeValue('col', columnItem);
        }
      });
      return columnSelectType;
    },
    getRowSelectType() {
      let rowSelectType = undefined;
      this.rowChildrenList.forEach(rowItem => {
        if (typeof rowSelectType === 'undefined') {
          rowSelectType = this.getGridTypeValue('row', rowItem);
        } else {
          rowSelectType += ', ' + this.getGridTypeValue('row', rowItem);
        }
      });
      return rowSelectType;
    },
    
  },
  methods: {
    gridRenderSampleSet() {
      this.renderInitialGrid();
    },
    clearGrid() {
      this.rowChildrenList = [];
      this.columnChildrenList = [];
      this.updateGridItems();
    },
    getRandomColor(){
      const colors = ["red","green","blue","yellow", "cyan", "orange", "gray"];
      const rnd = Math.floor(Math.random() * 7);
      return colors[rnd];
    },
    updateGridItems(){
      let itemArr = [];
      this.columnChildrenList.forEach(columnItem => {
        this.rowChildrenList.forEach(rowItem => {
          const gridCell = this.getGridCell(rowItem.rowNo, columnItem.colNo);

          const text = gridCell.text ? gridCell.text: this.gridChildText;
          const width = gridCell.width ? gridCell.width: this.gridChildWidth;
          const height = gridCell.height ? gridCell.height : this.gridChildHeight;
          const backgroundColor = gridCell.backgroundColor ? gridCell.backgroundColor : this.getRandomColor();
          const colSpan = gridCell.colSpan ? gridCell.colSpan : "1";
          const rowSpan = gridCell.rowSpan ? gridCell.rowSpan : "1";

          if (this.currentColumnNo < columnItem.colNo) {
            this.currentColumnNo = columnItem.colNo;
          }
          if (this.currentRowNo < rowItem.rowNo) {
            this.currentRowNo = rowItem.rowNo;
            
          }

          const item = {
            text,
            width,
            height,
            backgroundColor,
            colSpan,
            rowSpan,
            row: rowItem.rowNo + "",
            col: columnItem.colNo + "",
          };
          itemArr.push(item);
        });
      });
      
      this.maxColNo = this.columnChildrenList.length -1;
      this.maxRowNo = this.rowChildrenList.length -1;
      this.gridItemList = itemArr;
    },
    getGridCell(rowNo,colNo) {
      let item= undefined;
      if (typeof this.gridItemList !== 'undefined' && this.gridItemList.length > 0) {
        this.gridItemList.forEach((cell) => {
          if (cell.row == rowNo && cell.col == colNo) {
            item = cell;
          }
        });
      }
      return item || {};
    },
    getGridTypeValue(type, gridItem){
      if (type === 'row'){
        if (gridItem.rowSelectType === 'auto') {
          return 'auto';
        } else if (gridItem.rowSelectType === 'px'){
          return gridItem.pxValue;
        }else if (gridItem.rowSelectType === '*'){
          return gridItem.starValue > 1 ? gridItem.starValue + '*': '*';
        }else {
          return undefined;
        }
      } else {
        if (gridItem.columnSelectType === 'auto') {
          return 'auto';
        } else if (gridItem.columnSelectType === 'px'){
          return gridItem.pxValue;
        }else if (gridItem.columnSelectType === '*'){
          return gridItem.starValue > 1 ? gridItem.starValue + '*': '*';
        }else {
          return undefined;
        }
      }
    },
    addNewGridColumn(){
      this.columnChildrenList.push({ colNo: ++this.currentColumnNo, columnSelectType: this.gridChildtype });
      this.updateGridItems();
    },
    addNewGridRow(){
      this.rowChildrenList.push({ rowNo: ++this.currentRowNo, rowSelectType: this.gridChildtype });
      this.updateGridItems();
    },
    renderInitialGrid(){
      this.columnChildrenList = [];
      this.columnChildrenList.push({ colNo: "0", columnSelectType:"*", starValue:"1" });
      this.columnChildrenList.push({ colNo: "1", columnSelectType:"px", pxValue:'100' });
      this.currentColumnNo = 1;

      this.rowChildrenList = [];
      this.rowChildrenList.push({ rowNo: "0", rowSelectType:"*", starValue:"1", });
      this.rowChildrenList.push({ rowNo: "1", rowSelectType:"px", pxValue:'100', });
      this.rowChildrenList.push({ rowNo: "2", rowSelectType:"auto", });
      this.currentRowNo = 2;
      
      this.updateGridItems();
    },
    removeGridCell(rowNo,colNo) {
      this.gridItemList = this.gridItemList.filter(cell => cell.row !== rowNo || cell.col !== colNo);
    },
    removeColumnAtIndex(index) {
      this.columnChildrenList.splice(index, 1);
      if (this.currentColumnNo > -1 ) {
        this.currentColumnNo--;
      }
      this.updateGridItems();
    },
    removeRowAtIndex(index) {
      this.rowChildrenList.splice(index, 1);
      if (this.currentRowNo > -1 ) {
        this.currentRowNo--;
      }
      this.updateGridItems();
    },
    getRandInt() {
      return Math.floor(Math.random() * 100000);
    },
  },
  components: {
    Label,
    GridLayout,
    StackLayout,
    Button,
    TextField,
    FlexboxLayout,
  },
};
</script>

<style lang="scss" scoped>


.editor-param {
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  max-width: 200px;
  &-title{
    width: 75px;
  }
}
.editor-param-input {
  width: 60px;
  margin-left: 5px;
}

select {
  border: 1px solid #eaeaea;
  border-radius: 3px;
  padding: 2px 10px 2px 0;
}
.error{
  background-color: #ff9999;
}

button {
  padding: unset;
  padding-left: 5px;
  padding-right: 5px;
  min-width: unset;
}

.grid-add-btn{
  padding: 10px 15px;
  width: 150px;
  margin: 0 5px 15px 5px;
}

.demo-panel {
  padding: 10px;
  border: #3c495e;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid #f1f1f1;

  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
.demo-panel-child {
  padding: 5px;
  border: #c0c0c0 solid 1px;
  border-radius: 5px;
  margin: 3px 0 0 0;
}
</style>
