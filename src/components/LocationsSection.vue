<template>
  <section
    :class="fondoGris ? 'bg-javida-light' : 'bg-white'"
    class="py-20 rounded-3xl"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado con horario unificado -->
      <div class="text-center max-w-2xl mx-auto mb-10">
        <h2
          class="text-3xl font-bold uppercase tracking-wider text-javida-primary"
        >
          Presencia y Sedes
        </h2>
        <p class="text-javida-muted text-sm mt-2">
          Infraestructura operativa y oficinas con cobertura estratégica a nivel
          nacional.
        </p>

        <div
          class="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-700 text-xs px-4 py-1.5 rounded-full mt-4 font-medium"
        >
          <font-awesome-icon
            icon="fa-solid fa-clock"
            class="text-javida-accent"
          />
          <span
            >Horario de atención general: Lunes a Viernes de 9:00 AM a 5:00
            PM</span
          >
        </div>
      </div>

      <!-- Selector de Sedes (Pills) -->
      <div class="flex flex-wrap justify-center gap-3 mb-8">
        <button
          v-for="(sede, index) in sedes"
          :key="sede.id"
          @click="sedeActiva = index"
          type="button"
          :class="[
            'px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer border flex items-center gap-2',
            sedeActiva === index
              ? 'bg-javida-primary text-white border-javida-primary shadow-sm'
              : 'bg-white text-slate-600 border-javida-border hover:bg-slate-50 hover:text-javida-primary',
          ]"
        >
          <font-awesome-icon icon="fa-solid fa-building" class="text-xs" />
          <span>{{ sede.ciudad }}</span>
          <span class="text-[11px] opacity-75 font-normal"
            >({{ sede.tipo }})</span
          >
        </button>
      </div>

      <!-- Contenedor Principal de la Sede Seleccionada -->
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-javida-light rounded-3xl p-6 sm:p-10 border border-javida-border shadow-sm items-stretch"
      >
        <!-- Ficha de Información de la Sede -->
        <div
          class="lg:col-span-5 flex flex-col justify-between bg-white p-8 rounded-2xl border border-javida-border/80 shadow-2xs"
        >
          <div>
            <div
              class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-javida-accent bg-blue-50 px-3 py-1 rounded-md mb-4"
            >
              {{ sedes[sedeActiva].tipo }}
            </div>

            <h3 class="text-2xl font-bold text-javida-primary mb-6">
              {{ sedes[sedeActiva].ciudad }}
            </h3>

            <ul class="space-y-5 text-sm text-javida-muted leading-relaxed">
              <!-- Dirección -->
              <li class="flex items-start gap-4">
                <div
                  class="w-9 h-9 rounded-lg bg-javida-light border border-javida-border flex items-center justify-center shrink-0 text-javida-accent"
                >
                  <font-awesome-icon icon="fa-solid fa-location-dot" />
                </div>
                <span class="pt-1 text-slate-700">
                  {{ sedes[sedeActiva].direccion }}
                </span>
              </li>

              <!-- Correo específico -->
              <li class="flex items-center gap-4">
                <div
                  class="w-9 h-9 rounded-lg bg-javida-light border border-javida-border flex items-center justify-center shrink-0 text-javida-accent"
                >
                  <font-awesome-icon icon="fa-solid fa-envelope" />
                </div>
                <div class="flex flex-col">
                  <a
                    :href="'mailto:' + sedes[sedeActiva].correo"
                    class="text-javida-accent hover:underline font-semibold"
                  >
                    {{ sedes[sedeActiva].correo }}
                  </a>
                  <span class="text-xs text-slate-400"
                    >Atención directa vía email</span
                  >
                </div>
              </li>
            </ul>
          </div>

          <!-- Botón de apertura externa -->
          <div class="pt-6 mt-8 border-t border-javida-border">
            <a
              :href="sedes[sedeActiva].linkMaps"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full inline-flex items-center justify-center gap-2 bg-javida-primary hover:bg-javida-dark text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all shadow-xs"
            >
              <span>Abrir en Google Maps</span>
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
                class="text-xs"
              />
            </a>
          </div>
        </div>

        <!-- Visor del mapa -->
        <div
          class="lg:col-span-7 h-[360px] lg:h-auto min-h-[360px] rounded-2xl overflow-hidden border border-javida-border shadow-xs bg-slate-100"
        >
          <iframe
            :key="sedes[sedeActiva].id"
            class="w-full h-full min-h-[360px] border-0"
            :src="sedes[sedeActiva].embedUrl"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { SEDES_EMPRESA } from "../data/locations";

defineProps({
  fondoGris: {
    type: Boolean,
    default: false,
  },
});

const sedes = ref(SEDES_EMPRESA);
const sedeActiva = ref(0);
</script>

<style scoped></style>
