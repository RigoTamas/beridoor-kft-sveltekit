export const prerender = true;

export async function load({ url }: { url: { pathname: string } }) {
	return {
		url: url.pathname
	};
}
