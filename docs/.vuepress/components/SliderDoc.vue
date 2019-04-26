<template>
    <div>
        <Slider :value="value" :min-value="minValue" :max-value="maxValue" @valueChange="onValueChanged($event)" />
        <div>
            <label>Value: </label>
            <label class="slider-value">{{value}}</label>
        </div>
            <label>
                Min Value:
                <input type="number" v-model="minValue" id="slider__min__value"/>
            </label>
        <div>
            <label>Max Value:
                <input type="number" v-model="maxValue" id="slider__max__value"/>
            </label>
        </div>
    </div>
</template>

<script>
    import Slider from '../../../src/components/Slider';

    export default {
        name: "SliderDoc",
        components: {
            Slider
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
