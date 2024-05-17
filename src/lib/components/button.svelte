<script lang="ts">
	export let size: 'md' | 'lg' = 'md';
	export let block: boolean = false;
	export let style: 'outline' | 'primary' = 'primary';
	export let className: string = '';
	export let rest: any = {};

	const sizes = {
		md: 'px-5 py-2.5',
		lg: 'px-6 py-3'
	};

	const styles = {
		outline: 'hover:bg-beridoorBlue dark:hover:bg-white dark:hover:text-beridoorBlue hover:text-white',
		primary:
			'disabled:bg-gray-300 dark:disabled:bg-gray-500 dark:disabled:text-gray-300 bg-beridoorBlue dark:border-gray-300 text-white hover:bg-beridoorBlueLighter dark:border-2'
	};
</script>

<button {...rest} class={`rounded text-center transition ${block ? 'w-full' : ''} ${sizes[size] || ''} ${styles[style] || ''} ${className}`}>
	<slot />
</button>
