<script lang="ts">
	import Dropdown from './dropdown.svelte';
	import LogoImage from '$lib/assets/logo-new-cropped-3.png?as=run';
	import Img from '@zerodevx/svelte-img';

	let isHamburgerMenuOpen = false;

	const menuItems = [
		{
			title: 'TÉLIKERT',
			children: [
				{ title: 'Télikert', path: '/termekek/#telikert' },
				{ title: 'Teraszbeépítés', path: '/termekek/#terasz' },
				{ title: 'Medencefedés', path: '/termekek/#medencefedes' },
				{ title: 'Szélfogó', path: '/termekek/#szelfogo' },
				{ title: 'Elő-védőtető', path: '/termekek/#vedoteto' },
				{ title: 'Függönyfal', path: '/termekek/#fuggonyfal' },
				{ title: 'Bevilágító kupola', path: '/termekek/#kupola' }
			]
		},
		{
			title: 'SZOLGÁLTATÁSOK',
			children: [
				{ title: 'Lakásfelújítás', path: '/szolgaltatasok/#lakasfelujitas' },
				{ title: 'Nyílászáró', path: '/szolgaltatasok/#nyilaszaro' }
			]
		},
		{
			title: 'NAPVÉDELEM',
			path: '/napvedelem'
		},
		{
			title: 'RÓLUNK',
			children: [
				{ title: 'Rólunk', path: '/rolunk/#rolunk' },
				{ title: 'Munkatársaink', path: '/rolunk/#munkatarsaink' },
				{ title: 'Építőanyagok', path: '/rolunk/#anyagaink' }
			]
		},
		{
			title: 'KAPCSOLAT',
			path: '/kapcsolat/'
		}
	];
</script>

<header class="lg:flex lg:items-center lg:justify-between px-4 py-3">
	<div class="flex items-center justify-between">
		<div class="w-[140px]">
			<Img src={LogoImage} alt="logo" />
		</div>
		<button on:click={() => (isHamburgerMenuOpen = !isHamburgerMenuOpen)} type="button" class="lg:hidden block text-gray-500">
			<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
				{#if isHamburgerMenuOpen}
					<path
						fill-rule="evenodd"
						d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
					/>
				{:else}
					<path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
				{/if}
			</svg>
		</button>
	</div>
	<nav class={`${isHamburgerMenuOpen ? 'block' : 'hidden'} lg:flex lg:flex-row flex-col py-3 lg:py-0 justify-between gap-3`}>
		{#each menuItems as menuItem}
			{#if menuItem.children}
				<Dropdown title={menuItem.title} children={menuItem.children}></Dropdown>
			{:else}
				<a href={menuItem.path}>{menuItem.title}</a>
			{/if}
		{/each}
	</nav>
</header>
