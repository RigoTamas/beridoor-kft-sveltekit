import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from '@zerodevx/svelte-img/vite';
// import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	assetsInclude: ['**/*.jpg', '**/*.JPG', '**/*.png', '**/*.PNG'],
	plugins: [
		sveltekit(),
		imagetools({
			profiles: {
				run: new URLSearchParams('w=480;1024;1920&format=avif;webp;jpg')
			}
		})
	]
});
