<script>
	export let data;
	import { Button } from '$lib/components/ui/button';

	const { name } = data;
</script>

<h1>Hello {name ? name : 'World'}</h1>
<p>
	Visit <Button variant="link" href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</Button> to read
	the documentation
</p>
