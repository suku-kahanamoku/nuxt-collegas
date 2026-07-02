/**
 * Po načtení stránky na pozadí prefetchuje JS chunky všech route komponent.
 * Výsledek: navigace na libovolnou stránku je okamžitá bez čekání na download.
 */
export default defineNuxtPlugin(() => {
  const router = useRouter();

  const prefetch = () => {
    router.getRoutes().forEach((route) => {
      const component = route.components?.default;
      if (typeof component === "function") {
        (component as () => Promise<unknown>)().catch(() => {});
      }
    });
  };

  if ("requestIdleCallback" in window) {
    (window as Window).requestIdleCallback(prefetch);
  } else {
    setTimeout(prefetch, 2000);
  }
});
