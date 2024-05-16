<script>
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar/navbar.svelte';
	export let title = '';
	export let description = '';
</script>

<div class="wrapper dark:text-gray-100 dark:bg-beridoorDarkModeBg bg-white text-beridoorBlue">
	<Navbar />
	<slot />
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
	html,
	body {
		width: 100%;
		height: 100%;
	}

	/* https://dev.to/niorad/keeping-the-footer-at-the-bottom-with-css-grid-15mf */
	.wrapper {
		min-height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
		grid-template-columns: 100%;
	}
</style>
