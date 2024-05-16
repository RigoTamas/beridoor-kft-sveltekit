<script lang="ts">
	import { browser } from '$app/environment';
	import { SunSolid, MoonSolid } from 'flowbite-svelte-icons';
	let lightMode = browser && localStorage.getItem('lightMode') === 'true'; // default is dark
	function handleSwitchDarkMode() {
		lightMode = !lightMode;
		if (browser) {
			localStorage.setItem('lightMode', lightMode ? 'true' : 'false');
		}
		lightMode ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
	}
</script>

{#if lightMode}
	<button on:click={handleSwitchDarkMode}>
		<MoonSolid class="pb-[1px] hover:text-white text-gray-400 w-6 h-6" />
	</button>
{:else}
	<button on:click={handleSwitchDarkMode}>
		<SunSolid class="pb-[1px] hover:text-yellow-300 text-gray-400 w-6 h-6" />
	</button>
{/if}
