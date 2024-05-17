<script lang="ts">
	export let className = '';
</script>

<div class={`max-w-screen-xl mx-auto md:px-12 xs:px-6 px-4 ${className}`}>
	<slot />
</div>
