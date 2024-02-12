<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import { createEventDispatcher, onMount } from 'svelte';
	export let src: string;
	export let alt: string;
	export let innerClass: string = '';
	const dispatch = createEventDispatcher<{ loaded: undefined }>();

	let ref: any;
	let loaded: boolean;
	onMount(() => {
		if (ref.complete) loaded = true;
	});
</script>

<div>
	<Img
		{src}
		{alt}
		class={innerClass}
		bind:ref
		on:load={() => {
			loaded = true;
			dispatch('loaded');
		}}
	/>
	<div class="blur" class:loaded />
</div>

<style>
	.blur {
		position: absolute;
		z-index: 30;
		inset: 0;
		backdrop-filter: blur(20px);
		pointer-events: none;
	}
	.loaded {
		display: none;
	}
</style>
