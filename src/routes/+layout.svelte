<script>
	import Header from '$lib/components/layout/header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Header />
{@render children()}
