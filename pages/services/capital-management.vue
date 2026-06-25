<script setup lang="ts">
definePageMeta({ title: "Správa kapitálu | Finanční poradenství" });

useHead({
	title: "Správa kapitálu | Finanční poradenství",
	meta: [
		{
			name: "description",
			content:
				"Připravujeme obsah stránky správy kapitálu. Kontaktujte nás pro individuální konzultaci.",
		},
	],
});
</script>

<template>
	<div class="py-section-gap">
		<UContainer class="mx-auto px-gutter">
			<h1 class="text-headline-lg font-serif text-primary-800 mb-stack-md">
				Správa kapitálu
			</h1>
			<p class="text-body-md text-on-surface-variant mb-stack-lg">
				Obsah této stránky právě připravujeme. Pokud chcete řešit investice,
				financování nebo investiční příležitosti, ozvěte se nám.
			</p>
			<UiButton to="/contact">Domluvit konzultaci</UiButton>
		</UContainer>
	</div>
</template>
