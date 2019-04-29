<template>
    <div class="nvw-frame">
        <StackLayout>
            <Label id="frameDoc-label" :text="labelValue" :textWrap="textWrap" />
            <slot></slot>
        </StackLayout>
    </div>
</template>

<script>
    import Label from '../../../src/components/Label'
    import StackLayout from '../../../src/layouts/StackLayout'
    import Gestures from '../../../src/mixins/GestureMixin';

    export default {
        name: 'Frame',
        mixins: [Gestures],
        data() {
            return {
                labelValue: 'FRAME',
                textWrap: true
            };
        },
        components: {
            Label,
            StackLayout
        }
    };
</script>
