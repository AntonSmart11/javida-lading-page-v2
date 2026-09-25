<template>
  <MainLayout>
    <div v-if="servicio" class="min-h-screen bg-javida-light py-12 lg:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <nav
          class="flex items-center gap-2 text-xs font-semibold text-slate-500"
        >
          <RouterLink to="/" class="hover:text-javida-accent transition-colors"
            >Inicio</RouterLink
          >
          <span>/</span>
          <RouterLink
            to="/servicios"
            class="hover:text-javida-accent transition-colors"
            >Servicios</RouterLink
          >
          <span>/</span>
          <span class="text-javida-primary truncate">{{
            servicio.titulo
          }}</span>
        </nav>

        <header class="max-w-4xl space-y-4">
          <div
            class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-javida-accent bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-md"
          >
            <font-awesome-icon :icon="servicio.iconBadge" />
            <span>{{ servicio.badge }}</span>
          </div>

          <h1
            class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-javida-primary uppercase tracking-tight leading-tight"
          >
            {{ servicio.titulo }}
          </h1>

          <p
            class="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            {{ servicio.lead }}
          </p>
        </header>

        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
        >
          <div class="lg:col-span-7 space-y-8">
            <div
              class="bg-white rounded-2xl border border-javida-border p-6 sm:p-8 shadow-xs space-y-4"
            >
              <h2
                class="text-lg font-bold text-javida-primary border-b border-slate-100 pb-3"
              >
                Alcance y Metodología Operativa
              </h2>
              <p class="text-sm text-slate-600 leading-relaxed text-justify">
                {{ servicio.descripcionLarga }}
              </p>
            </div>

            <div
              class="bg-white rounded-2xl border border-javida-border p-6 sm:p-8 shadow-xs space-y-4"
            >
              <h3
                class="text-base font-bold text-javida-primary border-b border-slate-100 pb-3"
              >
                Puntos Críticos de Ejecución
              </h3>
              <ul class="space-y-3.5">
                <li
                  v-for="(spec, idx) in servicio.specs"
                  :key="idx"
                  class="flex items-start gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-circle-check"
                    class="text-javida-accent mt-1 text-sm shrink-0"
                  />
                  <span>
                    <strong class="text-javida-primary font-semibold">{{
                      spec.negrita
                    }}</strong>
                    {{ spec.texto }}
                  </span>
                </li>
              </ul>
            </div>

            <div
              v-if="servicio.aplicaciones?.length"
              class="bg-white rounded-2xl border border-javida-border p-6 sm:p-7 shadow-xs space-y-4"
            >
              <div
                class="flex items-center justify-between border-b border-slate-100 pb-3"
              >
                <div class="flex items-center gap-2.5">
                  <div
                    class="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-javida-accent text-xs shrink-0"
                  >
                    <font-awesome-icon icon="fa-solid fa-industry" />
                  </div>

                  <div>
                    <h3
                      class="text-xs font-bold uppercase tracking-wider text-slate-500"
                    >
                      Campos de Aplicación
                    </h3>
                    <p class="text-[11px] text-slate-400">
                      Instalaciones y sistemas donde interviene este servicio
                    </p>
                  </div>
                </div>

                <span
                  class="hidden sm:inline-block text-[11px] font-semibold text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full"
                  >Operatividad en Sitio</span
                >
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div
                  v-for="(app, index) in servicio.aplicaciones"
                  :key="index"
                  class="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-150/60 hover:bg-slate-50 transition-colors"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-check"
                    class="text-javida-accent mt-0.5 text-xs shrink-0"
                  />
                  <span
                    class="text-xs sm:text-[13px] text-slate-700 leading-snug font-medium"
                  >
                    {{ app }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div
              v-if="servicio.layoutGaleria === 'vertical'"
              class="grid grid-cols-2 gap-3 h-[420px] sm:h-[480px]"
            >
              <!-- Columna Izquierda: 2 imágenes horizontales apiladas -->
              <div class="flex flex-col gap-3 h-full">
                <!-- Foto 1 (Principal) -->
                <div
                  @click="abrirGaleria(0)"
                  class="flex-1 rounded-xl overflow-hidden border border-javida-border shadow-xs bg-slate-900 group cursor-pointer relative"
                >
                  <img
                    :src="servicio.galeria.principal"
                    :alt="servicio.galeria.alt"
                    loading="lazy"
                    decoding="async"
                    class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    class="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-2xs"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-magnifying-glass-plus"
                      class="text-sm"
                    />
                  </div>
                </div>

                <!-- Foto 2 (Thumb 1) -->
                <div
                  @click="abrirGaleria(1)"
                  class="flex-1 rounded-xl overflow-hidden border border-javida-border shadow-xs bg-slate-900 group cursor-pointer relative"
                >
                  <img
                    :src="servicio.galeria.thumb1"
                    :alt="servicio.galeria.alt"
                    loading="lazy"
                    decoding="async"
                    class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    class="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-2xs"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-magnifying-glass-plus"
                      class="text-sm"
                    />
                  </div>
                </div>
              </div>

              <!-- Columna Derecha: Foto Vertical de Altura Completa (Torre) -->
              <div
                @click="abrirGaleria(2)"
                class="h-full rounded-2xl overflow-hidden border border-javida-border shadow-sm bg-slate-900 group cursor-pointer relative"
              >
                <img
                  :src="servicio.galeria.thumb2"
                  :alt="servicio.galeria.alt"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  class="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-2xs"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-magnifying-glass-plus"
                    class="text-base"
                  />
                  <span>Ampliar torre</span>
                </div>
              </div>
            </div>

            <div v-else class="space-y-3">
              <!-- Foto Principal Ancha Arriba -->
              <div
                @click="abrirGaleria(0)"
                class="rounded-2xl overflow-hidden border border-javida-border shadow-sm bg-slate-900 group cursor-pointer relative"
              >
                <img
                  :src="servicio.galeria.principal"
                  :alt="servicio.galeria.alt"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-102 transition-transform duration-300"
                />
                <div
                  class="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-2xs"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-magnifying-glass-plus"
                    class="text-base"
                  />
                  <span>Ampliar fotografía</span>
                </div>
              </div>

              <!-- 2 Miniaturas Abajo -->
              <div class="grid grid-cols-2 gap-3">
                <div
                  @click="abrirGaleria(1)"
                  class="rounded-xl overflow-hidden border border-javida-border shadow-xs bg-slate-900 group cursor-pointer relative"
                >
                  <img
                    :src="servicio.galeria.thumb1"
                    :alt="servicio.galeria.alt"
                    loading="lazy"
                    decoding="async"
                    class="w-full h-36 sm:h-40 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    class="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-2xs"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-magnifying-glass-plus"
                      class="text-sm"
                    />
                  </div>
                </div>

                <div
                  @click="abrirGaleria(2)"
                  class="rounded-xl overflow-hidden border border-javida-border shadow-xs bg-slate-900 group cursor-pointer relative"
                >
                  <img
                    :src="servicio.galeria.thumb2"
                    :alt="servicio.galeria.alt"
                    loading="lazy"
                    decoding="async"
                    class="w-full h-36 sm:h-40 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    class="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-2xs"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-magnifying-glass-plus"
                      class="text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-gradient-to-b from-javida-primary to-javida-dark text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-4"
            >
              <h3 class="text-lg font-bold">
                ¿Requieres este servicio en tus instalaciones?
              </h3>
              <p class="text-xs text-slate-300 leading-relaxed">
                Cotiza directamente o brinda asesoría técnica sin costo con
                nuestro equipo operativo.
              </p>
              <RouterLink
                :to="`/contacto?servicio=${servicio.id}`"
                class="w-full inline-flex items-center justify-center gap-2 bg-javida-accent hover:bg-javida-accent-hover text-white font-semibold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>Solicitar Cotización de este Servicio</span>
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right"
                  class="text-xs"
                />
              </RouterLink>
            </div>

            <Teleport to="body">
              <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <div
                  v-if="modalAbierto"
                  @click.self="cerrarGaleria"
                  class="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                >
                  <button
                    @click="cerrarGaleria"
                    class="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all cursor-pointer z-60"
                    aria-label="Cerrar vista previa"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-xmark"
                      class="text-xl"
                    />
                  </button>

                  <button
                    @click="anteriorFoto"
                    class="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 w-12 h-12 rounded-full transition-all flex items-center justify-center cursor-pointer z-60"
                    aria-label="Foto anterior"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-chevron-left"
                      class="text-lg"
                    />
                  </button>

                  <button
                    @click="siguienteFoto"
                    class="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 w-12 h-12 rounded-full transition-all flex items-center justify-center cursor-pointer z-60"
                    aria-label="Foto siguiente"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-chevron-right"
                      class="text-lg"
                    />
                  </button>

                  <div
                    class="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
                  >
                    <img
                      :key="fotoActual.src"
                      :src="fotoActual.src"
                      :alt="fotoActual.alt"
                      class="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10 animate-fade-in"
                    />

                    <div
                      class="flex items-center gap-3 mt-4 text-xs text-slate-300"
                    >
                      <span
                        class="bg-white/15 px-3 py-1 rounded-full font-bold text-white tracking-widest"
                      >
                        {{ indiceActivo + 1 }} / {{ listaFotos.length }}
                      </span>

                      <p
                        v-if="fotoActual.alt"
                        class="truncate max-w-xs sm:max-w-md font-medium text-slate-400"
                      >
                        {{ fotoActual.alt }}
                      </p>
                    </div>
                  </div>
                </div>
              </Transition>
            </Teleport>
          </div>
        </div>
      </div>
    </div>

    <div
      v-else
      class="min-h-[70vh] flex items-center justify-center bg-javida-light px-4"
    >
      <div
        class="text-center max-w-md space-y-4 bg-white p-8 rounded-3xl border border-javida-border shadow-sm"
      >
        <font-awesome-icon
          icon="fa-solid fa-triangle-exclamation"
          class="text-4xl text-amber-500"
        />
        <h2 class="text-2xl font-bold text-javida-primary">
          Servicio no encontrado
        </h2>
        <p class="text-xs text-slate-500 leading-relaxed">
          El servicio que intentas consultar no existe o ha sido reubicado en
          nuestro catálogo.
        </p>
        <RouterLink
          to="/servicios"
          class="inline-block bg-javida-primary text-white font-semibold text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl hover:bg-javida-accent transition-colors"
        >
          Volver al Catálogo de Servicios
        </RouterLink>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import MainLayout from "../layout/MainLayout.vue";
import { SERVICIOS_EMPRESA } from "../data/services.js";

const route = useRoute();

const servicio = computed(() => {
  const paramSlug = route.params.slug;
  return SERVICIOS_EMPRESA.find((s) => s.id === paramSlug);
});

const modalAbierto = ref(false);
const indiceActivo = ref(0);
const fotoSeleccionada = ref({ src: "", alt: "" });

const listaFotos = computed(() => {
  if (!servicio.value?.galeria) return [];

  return [
    {
      src: servicio.value.galeria.principal,
      alt: servicio.value.galeria.alt || servicio.value.titulo,
    },
    {
      src: servicio.value.galeria.thumb1,
      alt: servicio.value.galeria.alt || servicio.value.titulo,
    },
    {
      src: servicio.value.galeria.thumb2,
      alt: servicio.value.galeria.alt || servicio.value.titulo,
    },
  ];
});

const fotoActual = computed(
  () => listaFotos.value[indiceActivo.value] || { src: "", alt: "" },
);

const abrirGaleria = (indice) => {
  indiceActivo.value = indice;
  modalAbierto.value = true;
  document.body.style.overflow = "hidden";
};

const cerrarGaleria = () => {
  modalAbierto.value = false;
  document.body.style.overflow = "";
};

const siguienteFoto = () => {
  indiceActivo.value = (indiceActivo.value + 1) % listaFotos.value.length;
};

const anteriorFoto = () => {
  indiceActivo.value =
    (indiceActivo.value - 1 + listaFotos.value.length) %
    listaFotos.value.length;
};

const manejarTeclado = (e) => {
  if (!modalAbierto.value) return;
  if (e.key === "Escape") cerrarGaleria();
  if (e.key === "ArrowRight") siguienteFoto();
  if (e.key === "LeftRight") anteriorFoto();
};

const abrirImagen = (src, alt) => {
  fotoSeleccionada.value = { src, alt };
  modalAbierto.value = true;
  document.body.style.overflow = "hidden";
};

const cerrarImagen = () => {
  modalAbierto.value = false;
  document.body.style.overflow = "";
};

watchEffect(() => {
  if (servicio.value) {
    document.title = `${servicio.value.titulo} | Grupo Javida`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", servicio.value.descripcionCorta);
    }
  }
});

onMounted(() => window.addEventListener("keydown", manejarTeclado));
onUnmounted(() => {
  window.removeEventListener("keydown", manejarTeclado);
  document.body.style.overflow = "";
});
</script>

<style scoped></style>
