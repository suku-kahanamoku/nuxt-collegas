<script setup lang="ts">
definePageMeta({ title: "Ochrana soukromí | COLLEGAS" });

useHead({
  title: "Ochrana soukromí | COLLEGAS",
  meta: [
    {
      name: "description",
      content:
        "Informace o zpracování osobních údajů ve společnosti Collegas s.r.o. podle GDPR.",
    },
  ],
});
</script>

<template>
  <div class="w-full">
    <section class="py-stack-lg md:py-section-gap bg-surface-container-lowest">
      <UContainer class="mx-auto px-gutter max-w-4xl">
        <h1
          class="text-headline-lg text-primary-800 mb-stack-md leading-tight"
        >
          Ochrana soukromi a zpracovani osobnich udaju
        </h1>
        <p class="font-body-md text-on-surface-variant mb-stack-lg">
          Tato stranka shrnuje informace o zpracovani osobnich udaju spolecnosti
          Collegas s.r.o. v souladu s GDPR. Text je zpracovan podle verejne
          dostupnych informaci z oficialniho dokumentu spolocnosti.
        </p>

        <div class="space-y-stack-lg">
          <section>
            <h2 class="font-headline-md text-primary-800 mb-stack-sm">
              Spravce osobnich udaju
            </h2>
            <p class="font-body-md text-on-surface-variant">
              Collegas s.r.o., IC: 02262975, sidlo Prazakova 1008/69, Styrice,
              639 00 Brno. Kontakt: info@collegas.cz, tel. +420 737 227 535.
            </p>
          </section>

          <section>
            <h2 class="font-headline-md text-primary-800 mb-stack-sm">
              Ucely a pravni zaklady zpracovani
            </h2>
            <ul
              class="list-disc pl-6 space-y-2 font-body-md text-on-surface-variant"
            >
              <li>poskytovani financnich sluzeb a zprostredkovani produktu,</li>
              <li>plneni zakonych povinnosti podle relevantnich predpisu,</li>
              <li>zpracovani na zaklade souhlasu, je-li udelen,</li>
              <li>
                opravneny zajem (napr. kontrola povinnosti, reklamace, spory),
              </li>
              <li>
                primy marketing vlastnich sluzeb, pokud to pravo umoznuje.
              </li>
            </ul>
          </section>

          <section>
            <h2 class="font-headline-md text-primary-800 mb-stack-sm">
              Prijemci osobnich udaju
            </h2>
            <p class="font-body-md text-on-surface-variant">
              Udaje mohou byt predavany zejmena spolupracujicim financnim
              institucim, obchodnim zastupcum, compliance/risk/AML partnerum,
              poskytovatelum systemu, CNB, FAU, pravnim zastupcum a dalsim
              statnim organum, pokud to vyzaduje pravni predpis nebo opravneny
              zajem.
            </p>
          </section>

          <section>
            <h2 class="font-headline-md text-primary-800 mb-stack-sm">
              Doba ulozeni udaju
            </h2>
            <p class="font-body-md text-on-surface-variant">
              Osobni udaje jsou zpracovavany po dobu poskytovani sluzeb. Po
              ukonceni spoluprace po dobu stanovenou pravnimi predpisy, pripadne
              nejmene 5 let od ukonceni poskytovani sluzeb, pokud zakon neurci
              jinak.
            </p>
          </section>

          <section>
            <h2 class="font-headline-md text-primary-800 mb-stack-sm">
              Vase prava
            </h2>
            <ul
              class="list-disc pl-6 space-y-2 font-body-md text-on-surface-variant"
            >
              <li>pravo na pristup k osobnim udajum,</li>
              <li>pravo na opravu a doplneni nepresnych udaju,</li>
              <li>pravo na omezeni zpracovani,</li>
              <li>pravo odvolat souhlas (je-li zpracovani na souhlasu),</li>
              <li>pravo vznesit namitku proti zpracovani,</li>
              <li>pravo podat stiznost u UOOU.</li>
            </ul>
          </section>

          <section>
            <h2 class="font-headline-md text-primary-800 mb-stack-sm">
              Uplatneni prav
            </h2>
            <p class="font-body-md text-on-surface-variant">
              Sva prava muzete uplatnit na kontaktech uvedenych vyse. Dozorovym
              uradem v Ceske republice je Urad pro ochranu osobnich udaju
              (www.uoou.cz).
            </p>
          </section>

          <section class="pt-stack-md border-t border-outline-variant">
            <p class="font-body-sm text-outline">
              Zdroj: verejne dostupny dokument "Zpracovani osobnich udaju" na
              collegas.cz.
            </p>
          </section>
        </div>
      </UContainer>
    </section>
  </div>
</template>
