<template>
  <div
    class="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none overflow-hidden"
  >
    <div
      class="h-full bg-gradient-to-r from-javida-accent via-javida-highlight to-javida-accent transition-all duration-300 ease-out"
      :class="cargandoRuta ? 'w-3/4 opacity-100' : 'w-full opacity-0'"
    ></div>
  </div>

  <RouterView v-slot="{ Component, route }">
    <Transition name="slide-fade" mode="out-in">
      <div :key="route.fullPath">
        <component :is="Component" />
      </div>
    </Transition>
  </RouterView>
</template>

<script setup>
import { ref } from "vue";
import { RouterView, useRouter } from "vue-router";

const router = useRouter();
const cargandoRuta = ref(false);

router.beforeEach(() => {
  cargandoRuta.value = true;
});

router.afterEach(() => {
  setTimeout(() => {
    cargandoRuta.value = false;
  }, 250);
});
</script>
