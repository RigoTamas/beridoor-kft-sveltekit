<script lang="ts">
	import { page } from '$app/stores';

	const errorMessageMap: Record<string, string> = {
		'404': 'A keresett oldal nem található'
	};
</script>

<div class="text-4xl h-full grid place-content-center pt-8">
	<h1>{$page.status}: {errorMessageMap[$page.status] || $page.error?.message}</h1>
</div>
