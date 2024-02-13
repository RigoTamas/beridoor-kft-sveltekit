import { error } from '@sveltejs/kit';

export async function load() {
    // const viteImages = import.meta.glob("$lib/assets/fooldal/*");
    // console.log('viteImages', viteImages)
    // let images = [];

    // for (const [imgPath, imageFunction] of Object.entries(viteImages)) {
    //     const imageRenderable = await imageFunction();
    //     images.push({
    //         imageRenderable,
    //         alt: imgPath,
    //         pathFromProjectRoot: imgPath,
    //         mainText: imgPath.split('/').slice(-1)[0],
    //     });
    // }
    // return {images}
    return {}
}