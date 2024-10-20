<script>
	import { Button } from '$lib/components/ui/button';
</script>

<div
	class="md:w-[168px] md:flex-col justify-center items-center gap-3 inline-flex shrink-0 flex-row w-full"
>
	<enhanced:img
		class="h-[216px] object-cover relative rounded-full border dark:border-[var(--ring-offset)] max-w-[140px] md:max-w-[100%]"
		src="/static/bio-pic.jpg"
		alt="Dani in front of a mountain range in a suit and tie. They have purple hair and slightly tinted glasses."
	/>
	<div
		class="flex-col justify-start items-center flex text-center text-muted-foreground text-xl leading-tight gap-1 sm:item-start sm:text-left"
	>
		<p class="text-xl">Dani Sandoval</p>
		<Button
			target="_blank"
			class="p-0 h-auto text-lg -mt-2"
			variant="link"
			href="https://linktr.ee/dreamindani">@dreamindani</Button
		>
		<p class="text-lg text-muted-foreground/70">Head of Design</p>
		<p class="text-lg text-muted-foreground/70 -mt-2 hover:text-muted-foreground">
			<a href="https://equall.com" target="_blank">Equall</a>
		</p>
	</div>
</div>
