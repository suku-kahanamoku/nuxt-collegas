import "animate.css";

export default defineNuxtPlugin((nuxtApp: any) => {
  if (typeof window === "undefined") return;

  const selector =
    ".from-bottom, .from-top, .from-left, .from-right, .zoom-in, .animate-on-scroll";

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;

          let defaultAnim = "fadeInUp";
          if (el.classList.contains("from-right")) {
            defaultAnim = "fadeInRight";
          }
          //
          else if (el.classList.contains("from-left")) {
            defaultAnim = "fadeInLeft";
          }
          //
          else if (el.classList.contains("from-top")) {
            defaultAnim = "fadeInDown";
          }
          //
          else if (el.classList.contains("zoom-in")) {
            defaultAnim = "zoomIn";
          }

          const anim = (el.dataset.animate as string) || defaultAnim;
          if (!el.classList.contains("animate__animated")) {
            el.classList.add("animate__animated", `animate__${anim}`);
          }
          observer.unobserve(el);
        }
      });
    },
    { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
  );

  const observeAll = () => {
    document.querySelectorAll(selector).forEach((el) => {
      if ((el as HTMLElement).classList.contains("animate__animated")) return;
      io.observe(el);
    });
  };

  nuxtApp.hook("app:mounted", () => {
    // initial scan
    observeAll();

    // watch for dynamically added nodes
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) =>
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches && node.matches(selector)) io.observe(node);
          node.querySelectorAll &&
            node.querySelectorAll(selector).forEach((el) => io.observe(el));
        }),
      );
    });

    mo.observe(document.body, { childList: true, subtree: true });

    nuxtApp.hook("app:beforeUnmount", () => {
      mo.disconnect();
      io.disconnect();
    });
  });
});
