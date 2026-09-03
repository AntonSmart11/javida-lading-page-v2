<template>
  <div
    class="relative w-[90%] max-w-7xl mx-auto h-[200px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
  >
    <div
      v-for="(item, index) in props.items"
      :key="index"
      class="absolute flex items-center justify-center w-[300px] h-[200px] rounded-md animate-scroll-left bg-javida-light"
      :style="{
        'animation-delay': calcDelay(index + 1, props.items.length),
        left: itemLeft,
      }"
    >
      <img :src="item.src" :alt="item.alt" :class="imageClass" loading="lazy" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
  imageClass: {
    type: String,
    default:
      "max-h-30 max-w-[200px] object-contain filter transition-all duration-300",
  },
});

const calcDelay = (index, totalItems) => {
  const duration = 80;
  return `${(duration / totalItems) * (totalItems - index) * -1}s`;
};

const itemLeft = computed(() => {
  return `max(calc(300px * ${props.items.length}), 100%)`;
});
</script>
