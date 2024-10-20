<script>
	import MoonStar from 'lucide-svelte/icons/moon-star';
	import SunMoon from 'lucide-svelte/icons/sun-moon';

	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	on:click={toggleMode}
	variant="ghost"
	size="icon"
	class="text-primary-foreground dark:text-primary"
>
	<SunMoon class="scale-100 dark:scale-0" />
	<MoonStar class="absolute scale-0 dark:scale-100" />
	<span class="sr-only">Toggle theme</span>
</Button>
