<script lang="ts">
	import PictureGridWithText from '$lib/components/picture-grid-with-text.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<PictureGridWithText {data} basePath="/termekek" />
