<template>
	<StackLayout>
		<AbsoluteLayout :backgroundColor="selectedContainerColor.value" :height="containerHeight">
			<Label v-for="(layoutChild, index) in layoutChildren" :key="index" :text="layoutChild.left + ', ' + layoutChild.top" :left="layoutChild.left" :top="layoutChild.top" :width="layoutChild.width" :height="layoutChild.height" :backgroundColor="layoutChild.backgroundColor" />
		</AbsoluteLayout>
		<StackLayout orientation="horizontal">
			<button id="absolutelayout__reset__button" @click="setInitialState" class="reset-btn"><span><i class="fa fa-refresh"></i> Reset</span></button>
		</StackLayout>
		<Label style="margin-top: 50px;" text="Container"></Label>
		<StackLayout orientation="horizontal">
			<div class="form-group">
				<input id="absolutelayout__height__input" type="number" v-model="containerHeight" placeholder="Height..." />
				<label for="input" class="control-label">Container Height</label><i class="bar"></i>
			</div>
			<div class="form-group p-l-2">
				<select style="height: 1.9rem;" id="absolutelayout__background__select" v-model="selectedContainerColor">
					<option v-for="colorOption in containerColorOptions" v-bind:value="colorOption">
						{{ colorOption.title }}
					</option>
				</select>
				<label for="select" class="control-label p-l-2">Container Background Color</label><i class="bar"></i>
			</div>
		</StackLayout>
		<Label style="margin-top: 25px; margin-bottom: 15px" text="Layout Children"></Label>
		<StackLayout orientation="horizontal">
			<button id="absolutelayout__addchild__button" @click="addChild" class="add-btn"><span><i class="fa fa-plus"></i> Add Child</span></button>
		</StackLayout>
		<div v-for="(layoutChild, index) in layoutChildren" class="child-row">
			<StackLayout orientation="horizontal">
				<label class="row-label"><i class="fa fa-list-ul"></i> {{layoutChild.text}}</label>
				<div class="form-group">
					<input :id="'absolutelayout__childleft__input' + index" type="number" v-model="layoutChild.left" placeholder="Left..." />
					<label for="input" class="control-label p-l-1">Left</label><i class="bar"></i>
				</div>
				<div class="form-group p-l-2">
					<input :id="'absolutelayout__childtop__input' + index" type="number" v-model="layoutChild.top" placeholder="Top..." />
					<label for="input" class="control-label p-l-2">Top</label><i class="bar"></i>
				</div>
				<div class="form-group p-l-2">
					<input :id="'absolutelayout__childwidth__input' + index" type="number" v-model="layoutChild.width" placeholder="Width..." />
					<label for="input" class="control-label p-l-2">Width</label><i class="bar"></i>
				</div>
				<div class="form-group p-l-2">
					<input :id="'absolutelayout__childheight__input' + index" type="number" v-model="layoutChild.height" placeholder="Height..." />
					<label for="input" class="control-label p-l-2">Height</label><i class="bar"></i>
				</div>
				<div class="form-group p-l-2 row-color-container">
					<select :id="'absolutelayout__childbackground__select' + index" style="height: 1.9rem; min-width: 10%;" id="actionitem__deleteicon__select" v-model="layoutChild.backgroundColor">
						<option v-for="boxColorOption in boxColorOptions" v-bind:value="boxColorOption.value">
							{{ boxColorOption.title }}
						</option>
					</select>
					<label for="select" class="control-label p-l-2">Background</label><i class="bar"></i>
				</div>
				<div class="form-group remove-btn-container">
					<button :id="'absolutelayout__removechild__button' + index" @click="removeChild(index)" class="remove-btn"><span><i class="fa fa-times"></i></span></button>
				</div>
			</StackLayout>
		</div>
	</StackLayout>
</template>

<script>

	import Label from '../../../src/components/Label'
	import StackLayout from '../../../src/layouts/StackLayout'
	import AbsoluteLayout from '../../../src/layouts/AbsoluteLayout'

	export default {
		name: "AbsoluteLayoutDoc",
		components: {
			StackLayout,
			AbsoluteLayout,
			Label
		},
		data() {
			return {
				containerColorOptions: [
					{ title: 'Blue', value: '#3c495e' },
					{ title: 'Green', value: '#12e887' },
					{ title: 'Purple', value: '#b84368' },
					{ title: 'Yellow', value: '#debb34' },
				],
				containerHeight: 0,
				selectedContainerColor: {},
				boxColorOptions: [
					{ title: 'Green', value: '#43b883' },
					{ title: 'Blue', value: '#576bd8' },
					{ title: 'Purple', value: '#b3809c' },
				],
				layoutChildren: []
			}
		},
		methods: {
			setInitialState() {
				this.containerHeight = 230;
				this.selectedContainerColor = { title: 'Blue', value: '#3c495e' };
				this.layoutChildren = [
					{ text: '10,10', left: 10, top: 10, width: 100, height: 100, backgroundColor: "#43b883" },
					{ text: '120,10', left: 120, top: 10, width: 100, height: 100, backgroundColor: "#43b883" },
					{ text: '10,120', left: 10, top: 120, width: 100, height: 100, backgroundColor: "#43b883" },
					{ text: '120,120', left: 120, top: 120, width: 100, height: 100, backgroundColor: "#43b883" },
				]
			},
			addChild() {
				const lastChild = this.layoutChildren[this.layoutChildren.length - 1];
				this.layoutChildren.push(
					{ text: `10, ${lastChild.top + 10}`, left: 10, top: lastChild.top + lastChild.height + 10, width: 100, height: 100, backgroundColor: "#43b883" }
				);
				this.containerHeight += lastChild.height + 10;
			},
			removeChild(index) {
				this.layoutChildren.splice(index, 1);
			}
		},
		mounted() {
			this.setInitialState();
		}
	};
</script>
<style lang="scss">
	@import url('/fonts/fontawesome.min.css');
	@import url('/custom-input.css');

	.p-l-1 {
		padding-left: 1rem !important;
	}

	.p-l-2 {
		padding-left: 2rem !important;
	}

	.child-row {
		border-bottom: 1px solid #43b883;
		margin-bottom: 1rem;
		.row-label {
			// margin-top: 2rem;
			min-width: 20%;
			// border: 1px solid;
			padding: 2rem 0;
		}
		.form-group {
			margin-top: 1.25rem;
			margin-bottom: 0.25rem;
			padding: 1rem;
			&.row-color-container {
				min-width: 10%;
			}
			&.remove-btn-container {
				padding: 0;
				text-align: center;
				margin-top: 2rem;
				margin-bottom: 0;
			}
		}
	}

	.reset-btn,
	.add-btn {
		position: relative;
		margin: 10px auto;
		display: block;
		padding: 0;
		overflow: hidden;
		border-width: 0;
		outline: none;
		border-radius: 2px;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
		background-color: #2ecc71;
		color: #ecf0f1;
	}

	.add-btn {
		background-color: #3a24b6;
		margin: 0;
	}

	.add-btn:hover .add-btn:focus {
		background-color: #6d73c4;
		cursor: pointer;
	}

	.reset-btn:hover,
	.reset-btn:focus {
		background-color: #27ae60;
		cursor: pointer;
	}

	.reset-btn span,
	.add-btn span {
		display: block;
		padding: 12px 24px;
	}
</style>