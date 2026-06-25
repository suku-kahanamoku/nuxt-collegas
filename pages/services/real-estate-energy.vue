<script setup lang="ts">
definePageMeta({ title: "Reality a energie | Finanční poradenství" });

useHead({
	title: "Reality a energie | Finanční poradenství",
	meta: [
		{
			name: "description",
			content:
				"Připravujeme obsah stránky Reality a energie. Kontaktujte nás pro individuální konzultaci.",
		},
	],
});
</script>

<template>
	<div class="py-section-gap">
		<UContainer class="mx-auto px-gutter">
			<h1 class="text-headline-lg font-serif text-primary-800 mb-stack-md">
				Reality a energie
			</h1>
			<p class="text-body-md text-on-surface-variant mb-stack-lg">
				Obsah této stránky právě připravujeme. Pokud chcete řešit energetickou
				optimalizaci, realitní služby, správu nemovitostí nebo developerské
				projekty, ozvěte se nám.
			</p>
			<UiButton to="/contact">Domluvit konzultaci</UiButton>
		</UContainer>
	</div>
</template>
