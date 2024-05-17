<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar/navbar.svelte';
	import Transition from '$lib/components/transition.svelte';

	export let data: { url: string };
	export let title = '';
	export let description = '';
</script>

<div class="wrapper dark:text-gray-100 dark:bg-beridoorDarkModeBg bg-white text-beridoorBlue">
	<Navbar />
	<main>
		<Transition url={data.url}>
			<slot />
		</Transition>
	</main>
	<Footer />
	<style>
		/* Improve Page speed */
		/* https://css-tricks.com/almanac/properties/c/content-visibility/ */
		img {
			content-visibility: auto;
		}
	</style>
</div>

<style>
	/* https://dev.to/niorad/keeping-the-footer-at-the-bottom-with-css-grid-15mf */
	.wrapper {
		min-height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
		grid-template-columns: 100%;
	}
</style>
