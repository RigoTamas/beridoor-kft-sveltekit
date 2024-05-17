<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import { createEventDispatcher, onMount } from 'svelte';
	export let src: string;
	export let alt: string;
	export let innerClass: string = '';
	export let outerClass: string = '';
	export let useWrapperClass: boolean;
	const dispatch = createEventDispatcher<{ loaded: undefined }>();

	let ref: any;
	let loaded: boolean;
	onMount(() => {
		if (ref?.complete) loaded = true;
	});
</script>

<div class={`${useWrapperClass ? 'wrap' : ''} ${outerClass}`}>
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
	<div class={loaded ? 'loaded' : 'blur'} />
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
	.wrap {
		position: relative;
		overflow: hidden;
	}
</style>
