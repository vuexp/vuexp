<template>
    <StackLayout>
        <Button text="Show Alert Dialog" width="200" @tap="showAlertDialog" id="alertDialog_docs" />
        <div class="flex m-t-10">
            <Label text="Clicked Action:" class="label"></Label>
            <Label :text="eventText" class="form-input" id="alertDialog_event_label"></Label>
        </div>
    </StackLayout>
</template>

<script>
    import Label from '../../../src/components/Label';
    import StackLayout from '../../../src/layouts/StackLayout';
    import Button from '../../../src/components/Button';

    export default {
        name: "AlertDialogDoc",
        data() {
            return {
                eventText: '-'
            };
        },
        methods: {
            showAlertDialog: function() {
                alert({title: "Your title", message: "Your message", okButtonText: "OK"}).then(() => {
                    this.eventText = 'OK';
                });
            }
        },
        components: {
            StackLayout,
            Label,
            Button
        }
    };
</script>

<style lang="scss" scoped>
    .m-t-10 {
        margin-top: 10px;
    }
    .flex {
        display: flex;
        .label {
            font-size: 12px;
            font-weight: 800;
            cursor: pointer;
        }
        .form-input {
            border-radius: 5px;
            flex: 1;
            margin-left: 5px;
            border: 2px solid #ccc;
        }
    }
</style>

