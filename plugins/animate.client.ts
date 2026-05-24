import "animate.css";

export default defineNuxtPlugin(() => {
  animate();
  window?.addEventListener("scroll", animate, { passive: true });
});

function animate() {
  document
    ?.querySelectorAll(".from-bottom:not(.animate__animated)")
    .forEach((el) => {
      const bounding = el.getBoundingClientRect();
      if (bounding.top < window.innerHeight - 200) {
        el.classList.add("animate__animated", "animate__fadeInUp");
      }
    });
}
