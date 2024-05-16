<script lang="ts">
	import type { FocusEventHandler } from 'svelte/elements';

	let isDropdownOpen = false;
	export let myClass = '';
	export let title: string;
	export let children: { title: string; path: string }[];

	const handleDropdownFocusLoss: FocusEventHandler<HTMLDivElement> = ({ relatedTarget, currentTarget }) => {
		// use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
		if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return; // check if the new focus target doesn't present in the dropdown tree (exclude ul\li padding area because relatedTarget, in this case, will be null)
		isDropdownOpen = false;
	};
</script>

<div class={`lg:relative ${myClass}`}>
	<div on:focusout={handleDropdownFocusLoss}>
		<button on:click={() => (isDropdownOpen = !isDropdownOpen)} class="relative flex items-center gap-1">
			{title}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="3"
				stroke="currentColor"
				class={`w-3 h-3 mt-0.5 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'} duration-100`}
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
			</svg>
		</button>
		{#if isDropdownOpen}
			<div
				class="lg:absolute lg:z-40 lg:left-1/2 lg:-ml-24 lg:mt-2 lg:py-2 w-48 rounded-lg lg:shadow-xl lg:bg-white lg:dark:text-beridoorBlue lg:dark:hover:text-black text-beridoorBlue hover:text-black dark:text-gray-100 dark:hover:text-white"
			>
				{#each children as child}
					<a href={child.path} class="block lg:px-4 px-3 lg:py-2 py-1">{child.title}</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
