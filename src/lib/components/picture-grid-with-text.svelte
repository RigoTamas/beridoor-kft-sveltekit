<script lang="ts">
	import { reveal } from 'svelte-reveal';
	import BlurredImage from '$lib/components/blurred-image.svelte';
	import Container from '$lib/components/container.svelte';
	import { termekek } from '$lib/data/termekek';
	import Button from '$lib/components/button.svelte';

	export let basePath: string;
	export let data: { slug?: string; description?: string; imagesRenderable: { src: string; alt: string }[] };
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
		{#each data.imagesRenderable as { src, alt }}
			<div use:reveal={{ preset: 'fade', duration: 800, blur: 1 }}>
				<BlurredImage {src} innerClass="w-[400px]" outerClass="rounded-lg" useWrapperClass={true} {alt} />
			</div>
		{/each}
	</div>
</Container>
