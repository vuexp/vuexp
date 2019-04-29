<template>
	<Switcher v-model="value" @checkedChange="switchValueChange" />
</template>

<script>
	import Switcher from '../../../src/components/Switcher'

	export default {
		name: "SwitcherDoc",
		components: {
			Switcher
		},
		data() {
			return {
				value: true
			};
		},
		methods: {
			switchValueChange: function (event) {
				alert(this.value === true ? 'Switcher On' : 'Switcher Off');
			}
		}
	};
</script>
