<template>
    <div>
        <Slider :value="value" :min-value="minValue" :max-value="maxValue" @valueChange="onValueChanged($event)" />
        <div>
            <Label text="Value: "/>
            <Label id="slider__value__label" :text="value"></Label>
        </div>
        <div>
            <Label text="Min Value: ">
                <input type="number" v-model="minValue" id="slider__minValue__input"/>
            </Label>
        </div>
        <div>
            <Label text="Max Value: ">
                <input type="number" v-model="maxValue" id="slider__maxValue__input"/>
            </Label>
        </div>
        <div>
            <Label text="Set Value: ">
                <input type="number" v-model="value" id="slider__setValue__input"/>
            </Label>
        </div>
    </div>
</template>

<script>
    import Slider from '../../../src/components/Slider';
    import Label from '../../../src/components/Label';

    export default {
        name: "SliderDoc",
        components: {
            Slider,
            Label
        },
        data() {
            return {
                value: 70,
                minValue: 0,
                maxValue: 100
            };
        },
        methods: {
            onValueChanged(event) {
                this.value = event.target.value;
            }
        }
    };
</script>
