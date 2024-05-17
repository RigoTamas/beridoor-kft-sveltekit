<script lang="ts">
	import { reveal } from 'svelte-reveal';
	import '$lib/styles/blaze-slider.css';
	import BlurredImage from '$lib/components/blurred-image.svelte';
	import Container from '$lib/components/container.svelte';
	import { browser } from '$app/environment';

	import { termekek } from '$lib/data/termekek';
	import Button from '$lib/components/button.svelte';
	import Modal from './modal.svelte';
	import BlazeSliderImpl from './blaze-slider.svelte';
	import type { BlazeConfig } from 'blaze-slider';
	import type BlazeSlider from 'blaze-slider';

	export let basePath: string;
	export let data: { slug?: string; description?: string; imagesRenderable: { src: string; alt: string }[] };

	let showModal = false;
	let currentActiveImageIndex = 0;
	let sliderRef: BlazeSlider | null = null;

	const sliderConfig: BlazeConfig = {
		all: {
			enableAutoplay: false,
			draggable: true,
			transitionDuration: 600,
			slidesToShow: 1
		}
	};

	const onClickImage = (index: number) => {
		currentActiveImageIndex = index;
		showModal = true;
	};

	const reArrangeListToStartFromIndex = <T extends unknown[]>({ list, index }: { list: T; index: number }) => {
		return list.slice(index).concat(list.slice(0, index)) as T;
	};
</script>

<Container>
	<div>
		<div class="md:flex md:flex-wrap md:flex-row pt-16 pb-8 grid grid-cols-2 gap-4 justify-center">
			{#each Object.values(termekek) as item}
				<a href={item.path === data.slug ? basePath : `${basePath}/${item.path}`}>
					<Button style={item.path === data.slug ? 'primary' : 'outline'} className={`md:text-lg`}>
						<p>{item.title}</p>
					</Button>
				</a>
			{/each}
		</div>
	</div>
	{#if data.description}
		<div class="mx-auto items-center text-center">
			<p class="md:text-lg">{data.description}</p>
		</div>
	{/if}
	<div class="grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 pt-16 pb-8 gap-8 justify-center mx-6">
		{#each data.imagesRenderable as { src, alt }, index}
			<button on:click={() => onClickImage(index)} use:reveal={{ preset: 'fade', duration: 800, blur: 1 }}>
				<BlurredImage {src} innerClass="w-[400px]" outerClass="rounded-lg" useWrapperClass={true} {alt} />
			</button>
		{/each}
	</div>
</Container>

{#key showModal}
	<!-- this if is needed because we need to destroy the blazeSlider element on modal close and create a new one so that the indexing works properly -->
	<Modal bind:showModal>
		<BlazeSliderImpl bind:sliderRef {sliderConfig}>
			{#each reArrangeListToStartFromIndex({ list: data.imagesRenderable, index: currentActiveImageIndex }) as { src, alt }}
				<button on:click={() => (showModal = true)}>
					<BlurredImage {src} outerClass="rounded-lg" useWrapperClass={true} {alt} />
				</button>
			{/each}
		</BlazeSliderImpl>
	</Modal>
{/key}
