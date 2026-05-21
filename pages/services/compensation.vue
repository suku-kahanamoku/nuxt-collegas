<script setup lang="ts">
definePageMeta({ title: "Odškodnění | Finanční poradenství" });
useHead({
  title: "Odškodnění | Finanční poradenství",
  meta: [{ name: "description", content: "Pracovní úrazy, autonehody, školní úrazy i jiné pojistné události. Zajišťujeme spravedlivé odškodnění v plné výši." }],
});

const types = [
  { icon: "directions_car", title: "Autonehody", description: "Odškodnění z povinného ručení a havarijního pojištění – bolestné, ztráta výdělku, trvalé následky." },
  { icon: "construction", title: "Pracovní úrazy", description: "Uplatňování nároků vůči zaměstnavateli a pojišťovně při pracovním úrazu nebo nemoci z povolání." },
  { icon: "school", title: "Školní úrazy", description: "Odškodnění za úrazy způsobené při školní výuce, akcích nebo sportu." },
  { icon: "local_hospital", title: "Zdravotní pochybení", description: "Pomoc při uplatňování nároků za pochybení ve zdravotní péči." },
];
</script>

<template>
  <div class="w-full">

    <UiServiceHero
      eyebrow="Finanční poradenství"
      title="Odškodnění"
      subtitle="Pracovní úrazy, autonehody, školní úrazy i jiné pojistné události. Zajišťujeme spravedlivé odškodnění v plné výši."
    />

    <section class="bg-surface-container-low py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter space-y-section-gap">

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-stack-xl">
          <div class="lg:col-span-8 space-y-stack-md">
            <h2 class="text-headline-lg font-serif text-primary-900">Spravedlivé odškodnění bez kompromisů</h2>
            <p class="text-body-md text-on-surface-variant">
              Pojišťovny mají motivaci vyplatit co nejméně. My stojíme na vaší straně a dbáme na to,
              aby odškodnění odpovídalo skutečné výši vzniklé škody – včetně bolestného, ztráty výdělku,
              trvalých následků a nákladů na péči.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Spolupracujeme se zkušenými advokáty a znalci, kteří dokáží správně ocenit každý nárok
              a efektivně ho uplatnit. V případě potřeby zastupujeme klienta při jednáních i soudním řízení.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-md">
          <UiValueCard v-for="t in types" :key="t.title" :icon="t.icon" :title="t.title" :description="t.description" />
        </div>

      </div>
    </section>

    <UiCtaSection
      title="Máte nárok na odškodnění?"
      body="Bezplatně posoudíme váš případ a sdělíme vám, na co máte nárok."
      primary-label="Bezplatná konzultace"
      primary-to="/contact"
      variant="dark"
    />

  </div>
</template>
