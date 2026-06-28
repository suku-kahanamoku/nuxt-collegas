<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  words: { type: Array, required: true },
  typeSpeed: { type: Number, default: 100 },
  deleteSpeed: { type: Number, default: 50 },
  delay: { type: Number, default: 2000 },
  loop: { type: Boolean, default: true },
  showCursor: { type: Boolean, default: true },
});

const currentText = ref("");
const showCursor = ref(true);

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let timeoutId = null;
const isBlinking = ref(false);

const handleTyping = () => {
  const currentWord = props.words[wordIndex];
  isBlinking.value = false;

  if (!isDeleting) {
    currentText.value = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      if (!props.loop) {
        showCursor.value = false;
        return;
      }

      isBlinking.value = true;
      isDeleting = true;
      timeoutId = setTimeout(handleTyping, props.delay);
      return;
    }

    timeoutId = setTimeout(handleTyping, props.typeSpeed);
  } else {
    currentText.value = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % props.words.length;
    }

    timeoutId = setTimeout(handleTyping, props.deleteSpeed);
  }
};

onMounted(() => {
  handleTyping();
});

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId);
});
</script>

<template>
  <span class="typewriter-text">
    {{ currentText }}
    <span
      v-if="props.showCursor && showCursor"
      class="cursor"
      :class="{ blinking: isBlinking }"
    >
      |
    </span>
  </span>
</template>

<style scoped>
.cursor {
  font-weight: bold;
  color: #42b883;
}

.cursor.blinking {
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
