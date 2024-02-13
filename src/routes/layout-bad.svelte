<script>
	import '../app.css';
	// import { SEO } from "astro-seo";
	import { page } from '$app/stores';
	import Footer from '$lib/components/footer.svelte';
	// import Navbar from "@components/Navbar/Navbar.svelte";

	export let title = '';
	export let description = '';

	// const canonicalURL = new URL($page.path, $page.site).toString();
	// const resolvedImageWithDomain = new URL("/opengraph.jpg", $page.site).toString();

	// const makeTitle = `${title} | Beridoor Kft`;

	// // Check and set light/dark mode based on local storage
	// const htmlRootElement = document.getElementById("html-root");
	// const lightModeEnabled = localStorage.getItem("lightMode");
	// if (lightModeEnabled === "true") {
	//   htmlRootElement?.classList.remove("dark");
	// } else {
	//   htmlRootElement?.classList.add("dark");
	// }
</script>

<!DOCTYPE html>
<html lang="hu">
	<head>
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
		<link rel="manifest" href="/site.webmanifest" />
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
		<meta name="msapplication-TileColor" content="#da532c" />
		<meta name="theme-color" content="#1f3864" />
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		<!-- <meta name="generator" content={$page.generator} /> -->

		<!-- <SEO
      title={makeTitle}
      description={description}
      canonical={canonicalURL}
      openGraph={{
        basic: {
          url: canonicalURL,
          type: "website",
          title: "Beridoor Kft. Télikertek építése egyedi igények szerint",
          image: resolvedImageWithDomain,
        },
        image: {
          alt: "Beridoor télikert",
        },
      }}
    /> -->
	</head>
	<body class="dark:text-gray-100 dark:bg-beridoorDarkModeBg bg-white text-beridoorBlue">
		<!-- Google Tag Manager (noscript) -->
		<noscript>
			<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5PJNZ847" height="0" width="0" style="display:none;visibility:hidden"></iframe>
		</noscript>
		<!-- End Google Tag Manager (noscript) -->

		<div class="wrapper dark:text-gray-100 dark:bg-beridoorDarkModeBg bg-white text-beridoorBlue">
			<!-- <Navbar /> -->
			<slot />
			<Footer />
			<style>
				/* Improve Page speed */
				/* https://css-tricks.com/almanac/properties/c/content-visibility/ */
				img {
					content-visibility: auto;
				}
			</style>
		</div>

		<style>
			html,
			body {
				width: 100%;
				height: 100%;
			}

			/* https://dev.to/niorad/keeping-the-footer-at-the-bottom-with-css-grid-15mf */
			.wrapper {
				min-height: 100%;
				display: grid;
				grid-template-rows: auto 1fr auto;
				grid-template-columns: 100%;
			}
		</style>
	</body>
</html>
