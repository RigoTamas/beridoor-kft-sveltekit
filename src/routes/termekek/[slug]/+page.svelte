<script lang="ts">
	import type { PageData } from './$types';
	import { reveal } from 'svelte-reveal';
	import BlurredImage from '../../../lib/components/blurred-image.svelte';
	import Container from '$lib/components/container.svelte';
	import { termekek } from '$lib/data/termekek';
	import Button from '../../../lib/components/button.svelte';
	export let data: PageData;
</script>

<Container>
	<div>
		<div class="md:flex md:flex-wrap md:flex-row pt-16 pb-8 grid grid-cols-2 gap-4 justify-center">
			{#each Object.values(termekek) as item}
				<a href={item.path === data.slug ? '/termekek' : item.path}>
					<Button style={item.path === data.slug ? 'primary' : 'outline'} className={`md:text-lg`}>
						<p>{item.title}</p>
					</Button>
				</a>
			{/each}
		</div>
	</div>
	<div class="mx-auto items-center text-center">
		<p class="md:text-lg">{data.description}</p>
	</div>
	<div class="grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 pt-16 pb-8 gap-8 justify-center mx-6">
		{#each data.imagesRenderable as { src, alt }}
			<div use:reveal={{ transition: 'slide' }}>
				<BlurredImage {src} innerClass="w-[400px]" outerClass="rounded-lg" useWrapperClass={true} {alt} />
			</div>
		{/each}
	</div>
</Container>
