<script lang="ts">
	// https://joyofcode.xyz/sveltekit-page-transitions
	import { fade } from 'svelte/transition';

	export let url: string;
</script>

{#key url}
	<div class="h-full" in:fade>
		<slot />
	</div>
{/key}
