<script>
	import '../app.css';
	import NavbarNew from '$lib/components/navbar/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<NavbarNew />
<slot />
<Footer />
