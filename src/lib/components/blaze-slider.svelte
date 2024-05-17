<script lang="ts">
	import BlazeSlider from 'blaze-slider';
	import '$lib/styles/blaze-slider.css';
	import Image from 'svimg/Image.svelte';
	import 'blaze-slider/dist/blaze.css';
	import Img from '@zerodevx/svelte-img';
	import { AngleRightOutline } from 'flowbite-svelte-icons';
	import BlurredImage from './blurred-image.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let images: { imageRenderable: any; alt: string; mainText?: string }[];
	let blazeSliderElement: HTMLDivElement | null = null;
	let sliderRef: BlazeSlider | null = null;
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
	function preloadNext(nextCount: number, prevCount: number) {
		if (sliderRef) {
			Array.from(sliderRef.slides)
				.slice(0, nextCount + 1)
				.map((slide) => slide.querySelector('img'))
				.forEach((s) => s?.setAttribute('loading', 'eager'));
			Array.from(sliderRef.slides)
				.slice(-prevCount)
				.map((slide) => slide.querySelector('img'))
				.forEach((s) => s?.setAttribute('loading', 'eager'));
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
			sliderRef = new BlazeSlider(blazeSliderElement, {
				all: {
					stopAutoplayOnInteraction: true,
					enableAutoplay: true,
					draggable: true,
					autoplayInterval: 4500,
					transitionDuration: 600,
					slidesToShow: 1
				}
			});
			sliderRef?.stopAutoplay();
		}
	}
</script>

<div class="blaze-slider" bind:this={blazeSliderElement}>
	<div class="blaze-container">
		<div class="relative ease-in blaze-track-container">
			<div class="blaze-track object-cover">
				{#each images as image, i}
					<div class="inline-block rounded-none overflow-hidden bg-cover bg-center relative w-full h-[calc(100vh-86px)]">
						<BlurredImage
							src={image.imageRenderable}
							useWrapperClass={false}
							alt={image.alt}
							innerClass={`z-10 pointer-events-none absolute left-0 top-0 w-full, h-full object-cover min-w-full min-h-full bg-cover bg-no-repeat`}
							on:loaded={() => {
								if (i === 0) {
									// start auto play
									sliderRef?.refresh();
								}
								preloadNext(2, 1);
							}}
						/>
						{#if image.mainText}
							<p class="z-40 centeredText outlineText text-white text-2xl xxs:text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl">
								{image.mainText}
							</p>
						{/if}
					</div>
				{/each}
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
	/* used for generation: https://codepen.io/darkylmnx/pen/YVmKbj, https://stackoverflow.com/questions/2570972/css-font-border */
	.outlineText {
		@media (min-width: 10px) {
			text-shadow:
				-1px -1px 0 #143143,
				-1px 0px 0 #143143,
				-1px 1px 0 #143143,
				0px -1px 0 #143143,
				0px 0px 0 #143143,
				0px 1px 0 #143143,
				1px -1px 0 #143143,
				1px 0px 0 #143143,
				1px 1px 0 #143143;
		}
		@media (min-width: 1024px) {
			text-shadow:
				-2px -2px 0 #143143,
				-2px -1px 0 #143143,
				-2px 0px 0 #143143,
				-2px 1px 0 #143143,
				-2px 2px 0 #143143,
				-1px -2px 0 #143143,
				-1px -1px 0 #143143,
				-1px 0px 0 #143143,
				-1px 1px 0 #143143,
				-1px 2px 0 #143143,
				0px -2px 0 #143143,
				0px -1px 0 #143143,
				0px 0px 0 #143143,
				0px 1px 0 #143143,
				0px 2px 0 #143143,
				1px -2px 0 #143143,
				1px -1px 0 #143143,
				1px 0px 0 #143143,
				1px 1px 0 #143143,
				1px 2px 0 #143143,
				2px -2px 0 #143143,
				2px -1px 0 #143143,
				2px 0px 0 #143143,
				2px 1px 0 #143143,
				2px 2px 0 #143143;
		}
		@media (min-width: 1536px) {
			text-shadow:
				-3px -3px 0 #143143,
				-3px -2px 0 #143143,
				-3px -1px 0 #143143,
				-3px 0px 0 #143143,
				-3px 1px 0 #143143,
				-3px 2px 0 #143143,
				-3px 3px 0 #143143,
				-2px -3px 0 #143143,
				-2px -2px 0 #143143,
				-2px -1px 0 #143143,
				-2px 0px 0 #143143,
				-2px 1px 0 #143143,
				-2px 2px 0 #143143,
				-2px 3px 0 #143143,
				-1px -3px 0 #143143,
				-1px -2px 0 #143143,
				-1px -1px 0 #143143,
				-1px 0px 0 #143143,
				-1px 1px 0 #143143,
				-1px 2px 0 #143143,
				-1px 3px 0 #143143,
				0px -3px 0 #143143,
				0px -2px 0 #143143,
				0px -1px 0 #143143,
				0px 0px 0 #143143,
				0px 1px 0 #143143,
				0px 2px 0 #143143,
				0px 3px 0 #143143,
				1px -3px 0 #143143,
				1px -2px 0 #143143,
				1px -1px 0 #143143,
				1px 0px 0 #143143,
				1px 1px 0 #143143,
				1px 2px 0 #143143,
				1px 3px 0 #143143,
				2px -3px 0 #143143,
				2px -2px 0 #143143,
				2px -1px 0 #143143,
				2px 0px 0 #143143,
				2px 1px 0 #143143,
				2px 2px 0 #143143,
				2px 3px 0 #143143,
				3px -3px 0 #143143,
				3px -2px 0 #143143,
				3px -1px 0 #143143,
				3px 0px 0 #143143,
				3px 1px 0 #143143,
				3px 2px 0 #143143,
				3px 3px 0 #143143;
		}
	}

	.centeredText {
		text-align: center;
		position: absolute;
		top: 50%;
		left: 0;
		right: 0;
		margin: auto;
		transform: translateY(-50%);
	}

	.centeredVertically {
		top: 50%;
		transform: translateY(-50%);
	}
</style>
