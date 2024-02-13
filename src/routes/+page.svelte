<script lang="ts">
	import BlazeSlider from '$lib/components/blaze-slider.svelte';

	const getFilenameFormatted = (filePath: string) => {
		const filename = filePath.split('/').slice(-1)[0];
		const filenameExtensionRemoved = filename.split('.').slice(0, -1).join('.');
		return filenameExtensionRemoved.slice(3).replaceAll('_', ' ');
	};

	const viteImages = import.meta.glob('$lib/assets/fooldal/*.*', { eager: true, import: 'default', query: { as: 'run' } });
	const images: { imageRenderable: any; alt: string; mainText: string }[] = Object.entries(viteImages).map(([key, value]) => ({
		imageRenderable: value,
		alt: key,
		mainText: getFilenameFormatted(key)
	}));
</script>

<BlazeSlider {images} />
<main class="grid place-items-center pt-16 pb-8 md:pt-12 md:pb-16">
	<div>
		<h1 class="text-xl lg:text-2xl xl:text-3xl font-bold text-center lg:tracking-tight xl:tracking-tighter my-6">TÉLIKERTEK ÉPÍTÉSE EGYÉNI IGÉNYEK SZERINT</h1>
		<p class="texl-lg lg:text-xl mt-4 text-center py-6 dark:text-beridoorDarkModeSecondaryText text-beridoorLightModeSecondaryText">
			Egyedi kialakítású alumínium-, fa-, műanyag-, polikarbonát-, üveg szerkezetek, családi házak tervezése, kivitelezése, lakások bővítése, felújítása,
			látványterv készítése
		</p>
		<p class="text-lg mt-4 text-slate-600 max-w-xl"></p>
		<div class="mt-6 mx-4 flex flex-col justify-center sm:flex-row gap-3">
			<a
				href="/termekek/"
				class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white border-2 border-beridoorBlue hover:bg-gray-200 text-beridoorBlue flex gap-1 items-center justify-center"
			>
				<svg viewBox="0 0 48 48" class="text-beridoorBlue w-5 h-5"
					><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
						><path d="M11 14 25 4v40H11V14z" clip-rule="evenodd"></path><path d="m25 13 14 10v21M4 44h40"></path></g
					></svg
				>
				Munkáink
			</a>
			<a
				href="/kapcsolat/"
				class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white border-2 border-beridoorBlue hover:bg-gray-200 text-beridoorBlue flex gap-2 items-center justify-center"
			>
				<svg viewBox="0 0 24 24" class="text-beridoorBlue w-5 h-5"
					><path
						fill="currentColor"
						d="M21 8V7l-3 2-3-2v1l3 2m4-7H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M8 6a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1m8-5h-8V6h8"
					></path></svg
				>
				Ajánlatkérés
			</a>
		</div>
	</div>
</main>
