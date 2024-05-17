<script lang="ts">
	import BlazeSlider, { type BlazeConfig } from 'blaze-slider';
	import '$lib/styles/blaze-slider.css';
	import 'blaze-slider/dist/blaze.css';
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';

	let blazeSliderElement: HTMLDivElement | null = null;
	export let sliderRef: BlazeSlider | null;
	export let sliderConfig: BlazeConfig;

	function onKeyDown(event: KeyboardEvent) {
		if (event.key === 'ArrowRight') {
			sliderRef?.next();
			sliderRef?.stopAutoplay();
		}
		if (event.key === 'ArrowLeft') {
			sliderRef?.prev();
			sliderRef?.stopAutoplay();
		}
	}
	onMount(() => {
		if (browser) {
			document.addEventListener('keydown', onKeyDown);
		}
	});
	onDestroy(() => {
		if (browser) {
			document.removeEventListener('keydown', onKeyDown);
		}
	});
	$: {
		if (blazeSliderElement && !sliderRef) {
			sliderRef = new BlazeSlider(blazeSliderElement, sliderConfig);
			sliderRef?.stopAutoplay();
		}
	}
</script>

<div class="blaze-slider" bind:this={blazeSliderElement}>
	<div class="blaze-container">
		<div class="relative ease-in blaze-track-container">
			<div class="blaze-track object-cover">
				<slot />
			</div>
			<div class="centeredVertically left-0 mx-2 md:mx-7 absolute">
				<button class="blaze-prev rotate-[270deg]" id="blaze-prev">
					<div class="w-7 lg:w-9">
						<svg viewBox="0 0 24 24" class="bg-white text-beridoorBlue rounded-3xl opacity-90"
							><path fill="currentColor" fill-rule="evenodd" d="m4 15 8-8 8 8-2 2-6-6-6 6z"></path></svg
						>
					</div>
				</button>
			</div>
			<div class="right-[50vh] left-[50vh] top-[calc(95vh-86px)] blaze-pagination absolute"></div>
			<div class="centeredVertically right-0 mx-2 md:mx-7 absolute">
				<button class="blaze-next rotate-90" id="blaze-next">
					<div class="w-7 lg:w-9">
						<svg viewBox="0 0 24 24" class="bg-white text-beridoorBlue rounded-3xl opacity-90"
							><path fill="currentColor" fill-rule="evenodd" d="m4 15 8-8 8 8-2 2-6-6-6 6z"></path></svg
						>
					</div>
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.centeredVertically {
		top: 50%;
		transform: translateY(-50%);
	}
</style>
