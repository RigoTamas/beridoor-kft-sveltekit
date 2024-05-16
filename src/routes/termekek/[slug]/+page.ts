import { error } from '@sveltejs/kit';
import path from 'path';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const viteImages = import.meta.glob(`../assets/portfolio/termekek/${params.slug}/*`, { import: 'default' });

	const imagesRenderable: {
		imageRenderable: any;
		alt: string;
		imageLabel: string | undefined;
		pathFromProjectRoot: string;
		projectType: string;
		text: string;
	}[] = [];
	const counter = {};
	for (const [imgPath, imageFunction] of Object.entries(viteImages)) {
		const projectTypePath = path.dirname(imgPath);
		const projectType = path.basename(projectTypePath);
		counter[projectType] = counter[projectType] != null ? counter[projectType] + 1 : 0;
		const imageRenderable = await imageFunction();
		imagesRenderable.push({
			imageRenderable,
			pathFromProjectRoot: imgPath.replace('../', 'src/'),
			projectType,
			imageLabel: labels[projectType]?.[counter[projectType]],
			alt: labels[projectType]?.[counter[projectType]] || path.basename(imgPath),
			text: items[projectType].text
		});
	}
	if (params.slug === 'hello-world') {
		return { slug: params.slug };
	}
	error(404, 'Not found');
};
