<template>
  <MainLayout>
    <!-- ENCABEZADO DE LA VISTA -->
    <header
      class="py-16 bg-javida-light border-b border-javida-border text-center"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          class="text-3xl sm:text-4xl font-extrabold uppercase tracking-wider text-javida-primary mb-3"
        >
          Servicios Especializados
        </h1>
        <p class="text-javida-muted text-base max-w-3xl mx-auto">
          Ingeniería de campo, aseguramiento de hermeticidad y mantenimiento
          integral de instalaciones.
        </p>
      </div>
    </header>

    <!-- LISTADO DE SERVICIOS (Filas con fondos alternados) -->
    <div class="divide-y divide-javida-border">
      <section
        v-for="(item, index) in services"
        :key="item.id"
        :id="item.id"
        :class="['py-20', index % 2 !== 0 ? 'bg-javida-light' : 'bg-white']"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <!-- Columna de Información Técnica (7 cols) -->
            <div class="lg:col-span-7">
              <!-- Badge identificador -->
              <span
                class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-javida-accent mb-4"
              >
                <font-awesome-icon :icon="item.iconBadge" />
                {{ item.badge }}
              </span>

              <h2
                class="text-2xl sm:text-3xl font-bold text-javida-primary mb-4"
              >
                {{ item.titulo }}
              </h2>

              <p class="text-javida-muted text-base leading-relaxed mb-6">
                {{ item.lead }}
              </p>

              <!-- Lista de especificaciones con iconos de check -->
              <ul class="space-y-4 mb-8">
                <li
                  v-for="(spec, sIdx) in item.specs"
                  :key="sIdx"
                  class="flex items-start gap-3 text-sm text-javida-text leading-relaxed"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-circle-check"
                    class="text-javida-accent text-base mt-0.5 shrink-0"
                  />
                  <span>
                    <strong class="font-semibold text-javida-primary">{{
                      spec.negrita
                    }}</strong>
                    {{ spec.texto }}
                  </span>
                </li>
              </ul>

              <!-- Botón hacia cotización / contacto -->
              <RouterLink
                to="/contacto"
                class="inline-flex items-center gap-2 bg-javida-primary hover:bg-javida-accent text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all shadow-sm hover:-translate-y-0.5"
              >
                <span>Solicitar cotización</span>
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right"
                  class="text-xs"
                />
              </RouterLink>
            </div>

            <!-- Columna de Galería Asimétrica (5 cols) -->
            <div
              v-if="item.id === 'torques'"
              class="lg:col-span-5 grid grid-cols-2 grid-rows-2 gap-3 h-72 sm:h-80 lg:h-96"
            >
              <!-- Miniatura 1 (Izquierda Arriba) -->
              <div
                class="row-span-1 rounded-xl overflow-hidden border border-javida-border shadow-xs group"
              >
                <img
                  :src="item.galeria.thumb1"
                  :alt="item.galeria.alt"
                  loading="lazy"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <!-- Imagen principal (Derecha Alto Completo) -->
              <div
                class="col-start-2 row-span-2 rounded-xl overflow-hidden border border-javida-border shadow-xs group"
              >
                <img
                  :src="item.galeria.principal"
                  :alt="item.galeria.alt"
                  loading="lazy"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <!-- Miniatura 2 (Izquierda Abajo) -->
              <div
                class="col-start-1 row-span-1 rounded-xl overflow-hidden border border-javida-border shadow-xs group"
              >
                <img
                  :src="item.galeria.thumb2"
                  :alt="item.galeria.alt"
                  loading="lazy"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <!-- Estructura estándar original para los demás servicios -->
            <div v-else class="lg:col-span-5 grid grid-cols-2 gap-3">
              <div
                class="col-span-2 h-60 sm:h-64 rounded-xl overflow-hidden border border-javida-border shadow-xs group"
              >
                <img
                  :src="item.galeria.principal"
                  :alt="item.galeria.alt"
                  loading="lazy"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                class="h-32 sm:h-36 rounded-xl overflow-hidden border border-javida-border shadow-xs group"
              >
                <img
                  :src="item.galeria.thumb1"
                  :alt="item.galeria.alt"
                  loading="lazy"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                class="h-32 sm:h-36 rounded-xl overflow-hidden border border-javida-border shadow-xs group"
              >
                <img
                  :src="item.galeria.thumb2"
                  :alt="item.galeria.alt"
                  loading="lazy"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- BANNER CTA FINAL -->
    <section class="py-16 px-4 bg-slate-900 text-white text-center">
      <div class="max-w-4xl mx-auto">
        <h3 class="text-2xl sm:text-3xl font-bold mb-3">
          ¿Tienes requerimientos técnicos específicos para tu proyecto?
        </h3>
        <p class="text-slate-400 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
          Contacta directamente con nuestro departamento de ingeniería para
          evaluar tus especificaciones de trabajo.
        </p>
        <RouterLink
          to="/contacto"
          class="inline-flex items-center gap-2 bg-javida-accent hover:bg-javida-accent-hover text-white font-semibold px-8 py-3.5 rounded-lg text-sm transition-all shadow-md hover:-translate-y-0.5"
        >
          <span>Ir al Formulario de Contacto</span>
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-xs" />
        </RouterLink>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import { ref } from "vue";
import MainLayout from "../layout/MainLayout.vue";

import { SERVICIOS_EMPRESA } from "../data/services.js";

const services = ref(SERVICIOS_EMPRESA);
</script>

<style scoped></style>
