<template>
    <StackLayout>
        <StackLayout  class="demo-panel">
            <Label text="Add new child" class="demo-panel__title"/>
            <StackLayout orientation="horizontal" style="margin-bottom:5px">
                <StackLayout orientation="horizontal" class="editor-param">
                    <Label text="Orientation: "/>
                    <select
                            id="stacklayout_orientation_content"
                            style="margin-left: 5px"
                            v-model="orientationType"
                    >
                        <option disabled value>Orientation</option>
                        <option>vertical</option>
                        <option>horizontal</option>
                    </select>
                </StackLayout>
                <StackLayout orientation="horizontal" class="editor-param">
                    <Label class="editor-param-title" text="Text: "/>
                    <input
                            id="stacklayout_childname_input"
                            class="editor-param-input"
                            type="text"
                            v-model="stackChildText"
                    >
                </StackLayout>
                <StackLayout orientation="horizontal" class="editor-param">
                    <Label class="editor-param-title" text="Width: "/>
                    <input
                            id="stacklayout_childtwidth_input"
                            class="editor-param-input"
                            type="text"
                            v-model="stackChildWidth"
                    >
                </StackLayout>
                <StackLayout orientation="horizontal" class="editor-param">
                    <Label class="editor-param-title" text="Height: "/>
                    <input
                            id="stacklayout_childheight_input"
                            class="editor-param-input"
                            type="text"
                            v-model="stackChildHeight"
                    >
                </StackLayout>
                <StackLayout orientation="horizontal" class="editor-param">
                    <Label class="editor-param-title" text="Color: "/>

                    <select
                            id="stacklayout_childcolor_selectbox"
                            style="margin-left: 5px"
                            v-model="stackChildColor"
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
            </StackLayout>

            <StackLayout orientation="horizontal">
                <StackLayout orientation="horizontal" class="editor-param">
                    <Label class="editor-param-title" text="Child Alignment Type: "/>
                    <select
                            id="stacklayout_childalignmenttype_selectbox"
                            style="margin-left: 5px"
                            v-model="stackChildAlignmentType"
                    >
                        <option disabled value>Alignment Type</option>
                        <option>verticalAlignment</option>
                        <option>horizontalAlignment</option>
                    </select>
                </StackLayout>
                <StackLayout orientation="horizontal" class="editor-param">
                    <Label class="editor-param-title" text="Child Alignment Value: "/>
                    <select
                            id="stacklayout_childalignmentvalue_selectbox"
                            style="margin-left: 5px"
                            v-model="stackChildAlignmentValue"
                    >
                        <option disabled value>Alignment Value</option>
                        <option>top</option>
                        <option>right</option>
                        <option>left</option>
                        <option>bottom</option>
                        <option>center</option>
                        <option>stretch</option>
                    </select>
                </StackLayout>
            </StackLayout>

            <StackLayout orientation="horizontal" class="editor-param">
                <StackLayout class="editor-param">
                    <button id="stacklayout_addchild_button" @click="addChildNode">➕Add Child</button>
                </StackLayout>
                <StackLayout class="editor-param">
                    <button
                            id="stacklayout_removeallchildren_button"
                            @click="clearStackChildList"
                    >❌Remove All Children</button>
                </StackLayout>
                <StackLayout class="editor-param">
                    <button id="stacklayoutdoc-checkbox-textwrap" @click="renderSampleSet">Render Sample Set</button>
                </StackLayout>
            </StackLayout>
        </StackLayout>

        <!-- Children list editor -->
        <StackLayout orientation="vertical" class="demo-panel">
            <Label :text="'Children list (' + stackChildrenList.length + ')'" class="demo-panel__title"/>
            <StackLayout orientation="horizontal" v-for="(stackChild, index) in stackChildrenList">
                <StackLayout orientation="horizontal" class="editor-param">
                    <Label class="editor-param-title" text="T: "/>
                    <input :id="'stacklayout_childreneditor_name' + index" type="text" style="width:50px" v-model="stackChildrenList[index].text">
                </StackLayout>
                <StackLayout orientation="horizontal" class="editor-param">
                    <Label class="editor-param-title" text="W:"/>
                    <input
                            :id="'stacklayout_childreneditor_width' + index"
                            class="editor-param-input"
                            type="text"
                            v-model="stackChildrenList[index].width"
                    >
                </StackLayout>
                <StackLayout orientation="horizontal" class="editor-param">
                    <Label class="editor-param-title" text="H: "/>
                    <input
                            :id="'stacklayout_childreneditor_height' + index"
                            class="editor-param-input"
                            type="text"
                            v-model="stackChildrenList[index].height"
                    >
                </StackLayout>
                <StackLayout orientation="horizontal" class="editor-param">
                    <Label class="editor-param-title" text="C: "/>
                    <select
                            :id="'stacklayout_childreneditor_color' + index"
                            style="margin-left: 5px"
                            v-model="stackChildrenList[index].backgroundColor"
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

                <StackLayout orientation="horizontal" class="editor-param">
                    <Label class="editor-param-title" text="AT: "/>
                    <select
                            :id="'stacklayout_childreneditor_alignment_type' + index"
                            style="margin-left: 5px"
                            v-model="stackChildrenList[index].alignmentType"
                    >
                        <option disabled value>Alignment Type</option>
                        <option>verticalAlignment</option>
                        <option>horizontalAlignment</option>
                    </select>
                </StackLayout>
                <StackLayout orientation="horizontal" class="editor-param">
                    <Label class="editor-param-title" text="AV: "/>
                    <select
                            :id="'stacklayout_childreneditor_alignment_value' + index"
                            class="editor-param-select"
                            v-model="stackChildrenList[index].alignmentValue"
                    >
                        <option disabled value>Alignment Value</option>
                        <option>top</option>
                        <option>right</option>
                        <option>left</option>
                        <option>bottom</option>
                        <option>center</option>
                        <option>stretch</option>
                    </select>
                </StackLayout>

                <StackLayout orientation="horizontal" class="editor-param">
                    <button :id="'stacklayout_childreneditor_removechild' + index" @click="removeChildAtIndex(index)">❌</button>
                </StackLayout>
            </StackLayout>
        </StackLayout>
        <!-- Children list editor -->

        <StackLayout style="margin-top:20px" class="demo-panel">
            <Label text="Rendered Result" class="demo-panel__title"/>
            <StackLayout id="stacklayout_thestacklayout" :orientation="orientationType" class="stack">
                <Label
                        v-for="(stackChild, index) in labelList"
                        v-bind="stackChild"
                        :key="'stackChild_' + getRandInt()"
                />
            </StackLayout>
        </StackLayout>
    </StackLayout>
</template>

<script>
    import Label from '../../../src/components/Label';
    import StackLayout from '../../../src/layouts/StackLayout';
    export default {
        name: 'StackLayoutLiveDemo',
        data() {
            return {
                orientationType: 'vertical',
                stackChildText: 'Test',
                stackChildWidth: '20',
                stackChildHeight: '20',
                stackChildColor: 'gray',
                stackChildAlignmentType: 'horizontalAlignment',
                stackChildAlignmentValue: 'left',
                stackChildrenList: [],
            };
        },
        computed: {
            labelList (){
                return this.stackChildrenList.map(stackChild => ({
                    text: stackChild.text,
                    [stackChild.alignmentType]: stackChild.alignmentValue,
                    width: stackChild.width,
                    height: stackChild.height,
                    backgroundColor: stackChild.backgroundColor
                }))
            }
        },
        mounted() {
            this.renderSampleSet();
        },
        methods: {
            addChildNode() {
                this.stackChildrenList.push({
                    text: this.stackChildText,
                    width: this.stackChildWidth,
                    height: this.stackChildHeight,
                    backgroundColor: this.stackChildColor,
                    alignmentType: this.stackChildAlignmentType,
                    alignmentValue: this.stackChildAlignmentValue
                });
            },
            clearStackChildList() {
                this.stackChildrenList = [];
            },
            renderSampleSet() {
                this.stackChildrenList = [];
                this.stackChildrenList.push({ text: 'left', alignmentType: 'horizontalAlignment', alignmentValue: 'left', width: 41, height: '', backgroundColor: 'gray' });
                this.stackChildrenList.push({ text: 'top', alignmentType: 'horizontalAlignment', alignmentValue: 'center', width: '', height: 42, backgroundColor: 'red' });
                this.stackChildrenList.push({ text: 'right', alignmentType: 'horizontalAlignment', alignmentValue: 'right', width: 43, height: '', backgroundColor: 'yellow' });
                this.stackChildrenList.push({ text: 'bottom', alignmentType: 'horizontalAlignment', alignmentValue: 'left', width: '', height: 44, backgroundColor: 'blue' });
                this.stackChildrenList.push({ text: 'center', alignmentType: 'horizontalAlignment', alignmentValue: 'left', backgroundColor: 'green' });
            },
            removeChildAtIndex(index) {
                this.stackChildrenList.splice(index, 1);
            },
            getRandInt() {
                return Math.floor(Math.random() * 100000);
            },
        },
        components: {
            Label,
            StackLayout,
        },
    };
</script>

<style lang="scss" scoped>
    .stack {
        width: 300px;
        height: 150px;
        margin-bottom: 30px;
        background-color: #3c495e;
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
    .editor-param-select {
        width: 100px;
        margin-left: 5px
    }
    button {
        height: 22px;
    }
    .demo-panel {
        padding: 10px;
        background-color: cyan;
        border: #3c495e;
        border-radius: 5px;
        margin:10px;
        &__title {
            font-size:20px;
            font-weight:bold;
            margin-bottom:10px;
        }
    }
</style>