<script>
	import { EnvelopeOutline, PhoneOutline } from 'flowbite-svelte-icons';
	import logoImage from '$lib/assets/logo-new-cropped-3.png';
</script>

<footer class="mt-12 bg-beridoorBlue">
	<div class="grid lg:grid-cols lg:grid-cols-3 justify-center pt-4 mx-6 gap-12 lg:gap-8">
		<div class="flex flex-col mx-auto items-center gap-2 lg:gap-6">
			<div>
				<img src={logoImage} class="me-3 h-9 sm:h-16" alt="Beridoor Logo" />
			</div>

			<div class="mx-auto flex 2xl:flex-row lg:flex-col xxs:flex-row flex-col justify-center text-left align-middle gap-3 2xl:gap-6 mt-3">
				<p class="text-lg text-slate-100 text-center leading-6">PRECIZITÁS</p>
				<p class="text-lg text-slate-100 text-center leading-6">SZAKÉRTELEM</p>
				<p class="text-lg text-slate-100 text-center leading-6">RUGALMASSÁG</p>
			</div>
		</div>
		<div class="mx-auto flex justify-center align-middle items-center">
			<p class="text-lg text-slate-100 leading-6 text-center">
				Weboldalunkon kizárólag saját készítésű munkáink láthatóak. Termékeink magukban hordozzák a különleges, exklúzív kialakítást, minőséget, és a kedvező
				árat. A télikertek, teraszbeépítések, medencefedések, több lépcsőben is kivitelezhetőek, megkönnyítve ezzel az anyagi finanszírozás lehetőségét.
			</p>
		</div>
		<div class="text-center flex flex-col justify-center align-middle items-center gap-1 lg:gap-3">
			<a href="/kapcsolat/">
				<p class="text-lg text-slate-100">INGYENES AJÁNLATKÉRÉS</p>
			</a>
			<div class="flex">
				<PhoneOutline class="mt-1 mx-1 text-slate-100 w-6 h-6" />
				<p class="text-lg text-slate-100">
					<a class="text-right text-lg text-slate-100 my-1" href="tel:+36 30 931 4070">+36 30 931 4070</a>
				</p>
			</div>

			<div class="flex items-center space-x-2 text-slate-100">
				<EnvelopeOutline class="text-slate-100 mt-[1px] w-5 h-5" /><a href="/kapcsolat/">beridoorkft@gmail.com</a>
			</div>
		</div>
	</div>
	<div class="mt-8">
		<p class="text-center mx-2 text-sm text-slate-400 py-2">
			Télikert - Erkély és Teraszbeépítés – Növényház – Veranda – Szélfogó - Medence-Pezsgőfürdő fedés – Pincebevilágító – Kupola – Filagória – Pavilon –
			Pergola – Függönyfal - Elő- és Védőtető - Étterem kerthelyiségeinek teraszainak védelme – Átriumok udvarok lefedése – Sportlétesítmények - Oktatási
			intézmények – Termálfürdők – Gyárépületek
		</p>
	</div>
	<div class="">
		<p class="text-center mx-2 text-sm text-slate-400">
			copyright © Beridoor Télikert - Egyedi elképzelések - Egyedi enteriőr - Egyedi kivitelezés 2007 - <a class="hover:underline" href="/adatkezeles/"
				>Adatkezelési tájékoztató</a
			>
			- minden jog fenntartva - Website created by
			<a target="_blank" rel="noopener" class="hover:underline" href="https://github.com/RigoTamas/beridoor-kft-astro">Rigó Tamás</a>
			using template from <a href="https://web3templates.com" target="_blank" rel="noopener" class="hover:underline"> Web3Templates </a>
		</p>
	</div>
</footer>
