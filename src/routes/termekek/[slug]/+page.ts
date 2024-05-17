import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { termekek } from '$lib/data/termekek';

export const load: PageLoad = async ({ params }) => {
	try {
		const viteImages = import.meta.glob(`$lib/assets/portfolio/termekek/*/*`, { import: 'default', query: { as: 'run', aspect: '3:2' } });
		const termek = Object.values(termekek).find((element) => element.path === params.slug);
		if (!termek) {
			throw new Error('not found');
		}
		const imagesRenderable: { src: string; alt: string }[] = [];
		for (const [imgPath, imageFunction] of Object.entries(viteImages)) {
			if (imgPath.includes(`assets/portfolio/termekek/${params.slug}`)) {
				const imageRenderable = (await imageFunction()) as string;
				imagesRenderable.push({ src: imageRenderable, alt: imgPath.split('/').slice(-1)[0] });
			}
		}
		return { imagesRenderable, description: termek.text, slug: params.slug };
	} catch (e) {
		error(404, 'not found');
	}
};
