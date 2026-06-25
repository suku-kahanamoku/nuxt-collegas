<script setup lang="ts">
definePageMeta({ title: "Daně a právo | Finanční poradenství" });

useHead({
	title: "Daně a právo | Finanční poradenství",
	meta: [
		{
			name: "description",
			content:
				"Připravujeme obsah stránky Daně a právo. Kontaktujte nás pro individuální konzultaci.",
		},
	],
});
</script>

<template>
	<div class="py-section-gap">
		<UContainer class="mx-auto px-gutter">
			<h1 class="text-headline-lg font-serif text-primary-800 mb-stack-md">
				Daně a právo
			</h1>
			<p class="text-body-md text-on-surface-variant mb-stack-lg">
				Obsah této stránky právě připravujeme. Pokud chcete řešit daňové nebo
				právní poradenství, ozvěte se nám.
			</p>
			<UiButton to="/contact">Domluvit konzultaci</UiButton>
		</UContainer>
	</div>
</template>
