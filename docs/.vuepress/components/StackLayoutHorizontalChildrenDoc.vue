<template>
    <StackLayout class="stack" backgroundColor="#3c495e">
        <Label text="left" horizontalAlignment="left"
               width="33%" height="70" backgroundColor="#43b883"/>
        <Label text="center" horizontalAlignment="center"
               width="33%" height="70" backgroundColor="#289062"/>
        <Label text="right" horizontalAlignment="right"
               width="33%" height="70" backgroundColor="#1c6b48"/>
        <Label text="stretch" horizontalAlignment="stretch"
               height="70" backgroundColor="#43b883"/>
    </StackLayout>
</template>

<script>
    import StackLayout from '../../../src/layouts/StackLayout';
    import Label from '../../../src/components/Label';
    export default {
        name: "StackLayoutHorizontalChildrenDoc",
        components: {
            StackLayout,
            Label
        }
    };
</script>

<style lang="scss" scoped>
    .stack {
        width: 100%;
        height: 100%;
        min-height: 300px;
    }
</style>
