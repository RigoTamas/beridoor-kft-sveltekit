<script lang="ts">
	import Dropdown from './dropdown.svelte';
	import LogoImage from '$lib/assets/logo-new-cropped-3.png?as=run';
	import Img from '@zerodevx/svelte-img';
	import { SunSolid, MoonSolid, PhoneOutline, ClockSolid } from 'flowbite-svelte-icons';
	import DarkModeSwitcher from './dark-mode-switcher.svelte';
	import { termekek } from '$lib/data/termekek';

	const telikertChildren = Object.values(termekek).map((entry) => ({
		title: entry.title,
		path: `/termekek/${entry.path}`
	}));

	let isHamburgerMenuOpen = false;

	const menuItems = [
		{
			title: 'TÉLIKERT',
			children: telikertChildren
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

<header class="sticky top-0 lg:flex lg:items-center lg:justify-between px-4 py-3 mx-auto lg:bg-beridoorBlue w-full text-lg z-40">
	<div class="flex items-center justify-between">
		<a href="/" class="w-[140px]">
			<Img src={LogoImage} alt="logo" />
		</a>
		<a
			href="/kapcsolat/"
			class="px-7 hidden lg:block lg:text-gray-100 lg:hover:text-white text-beridoorBlue hover:text-black dark:text-gray-100 dark:hover:text-white"
			>Télikert már 1.490.000 Ft-tól</a
		>
		<button on:click={() => (isHamburgerMenuOpen = !isHamburgerMenuOpen)} type="button" class="lg:hidden block">
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

	<div>
		<div class="hidden lg:flex text-sm text-gray-100 lg:pb-3 lg:gap-8 justify-end">
			<DarkModeSwitcher />
			<div class="flex lg:gap-1 justify-center">
				<PhoneOutline class="text-gray-400 w-5 h-5" />
				<p>Személyes konzultáció</p>
				<a href="tel:+36 30 931 4070">+36 30 931 4070</a>
			</div>
			<div class="flex lg:gap-1 justify-center">
				<ClockSolid class="mt-[2px] text-gray-400 w-4 h-4" name="clock-filled" />
				<p>H-P 9:00 - 17:00</p>
			</div>
			<a href="/kapcsolat/">AJÁNLATKÉRÉS</a>
		</div>
		<nav class={`${isHamburgerMenuOpen ? 'block' : 'hidden'} lg:flex lg:flex-row flex-col py-3 lg:py-0 justify-between gap-3 lg:gap-6 `}>
			{#each menuItems as menuItem}
				{#if menuItem.children}
					<Dropdown
						myClass="lg:text-gray-100 lg:hover:text-white text-beridoorBlue hover:text-black dark:text-gray-100 dark:hover:text-white"
						title={menuItem.title}
						children={menuItem.children}
					></Dropdown>
				{:else}
					<a class="lg:text-gray-100 lg:hover:text-white text-beridoorBlue hover:text-black dark:text-gray-100 dark:hover:text-white" href={menuItem.path}
						>{menuItem.title}</a
					>
				{/if}
			{/each}
		</nav>
	</div>
</header>
