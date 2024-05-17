<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';

	export let showModal: boolean;

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	in:scale
	out:fly={{ duration: 200 }}
	class="border-beridoorBlue dark:border-white dark:bg-beridoorDarkModeBg bg-white"
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => {
		showModal = false;
	}}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="max-w-6xl p-1" on:click|stopPropagation>
		<slot name="header" />
		<slot />
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => (showModal = false)}>close modal</button>
	</div>
</dialog>

<style>
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
</style>
