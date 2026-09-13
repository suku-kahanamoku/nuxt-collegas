<script setup lang="ts">
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

interface GalleryItem {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const props = defineProps<{
  images: string[];
}>();

let lightbox: PhotoSwipeLightbox | null = null;
let itemsPromise: Promise<GalleryItem[]> | null = null;
let isOpening = false;
let isUnmounted = false;

function getLightbox() {
  lightbox ??= new PhotoSwipeLightbox({
    pswpModule: () => import("photoswipe"),
    spacing: 0.5,
    loop: false,
  });

  return lightbox;
}

function createGalleryItems() {
  return Promise.all(
    props.images.map(
      (src, index) =>
        new Promise<GalleryItem>((resolve, reject) => {
          const image = new Image();
          image.onload = () => {
            resolve({
              src,
              width: image.naturalWidth,
              height: image.naturalHeight,
              alt: `Fotografie ${index + 1}`,
            });
          };
          image.onerror = () =>
            reject(new Error(`Nepodařilo se načíst ${src}`));
          image.src = src;
        }),
    ),
  );
}

function prepareGallery() {
  itemsPromise ??= createGalleryItems();
  return itemsPromise;
}

function preloadGallery() {
  if (!props.images.length) {
    return;
  }

  void prepareGallery().catch(() => {
    itemsPromise = null;
  });
}

async function openGallery() {
  if (!props.images.length || isOpening) {
    return;
  }

  isOpening = true;

  try {
    const items = await prepareGallery();
    if (isUnmounted) {
      return;
    }

    getLightbox().loadAndOpen(0, items);
  } catch (error) {
    itemsPromise = null;
    console.error("Fotogalerii se nepodařilo otevřít.", error);
  } finally {
    isOpening = false;
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (!props.images.length || (event.key !== "Enter" && event.key !== " ")) {
    return;
  }

  event.preventDefault();
  void openGallery();
}

watch(
  () => props.images,
  () => {
    itemsPromise = null;
  },
  { deep: true },
);

onUnmounted(() => {
  isUnmounted = true;
  lightbox?.destroy();
  lightbox = null;
});
</script>

<template>
  <div
    :role="images.length ? 'button' : undefined"
    :tabindex="images.length ? 0 : undefined"
    :aria-label="images.length ? 'Otevřít fotogalerii' : undefined"
    @click="openGallery"
    @keydown="handleKeydown"
    @pointerenter="preloadGallery"
    @focus="preloadGallery"
  >
    <slot />
  </div>
</template>
