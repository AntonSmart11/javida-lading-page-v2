<template>
  <MainLayout>
    <!-- ENCABEZADO DE LA VISTA -->
    <!-- <header
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
    </header> -->

    <!-- LISTADO DE SERVICIOS (Filas con fondos alternados) -->
    <!-- <div class="divide-y divide-javida-border">
      <section
        v-for="(item, index) in services"
        :key="item.id"
        :id="item.id"
        :class="['py-20', index % 2 !== 0 ? 'bg-javida-light' : 'bg-white']"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-7">
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

            <div
              v-if="item.id === 'torques'"
              class="lg:col-span-5 grid grid-cols-2 grid-rows-2 gap-3 h-72 sm:h-80 lg:h-96"
            >
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
    </div> -->

    <!-- BANNER CTA FINAL -->
    <!-- <section class="py-16 px-4 bg-slate-900 text-white text-center">
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
    </section> -->

    <div class="min-h-screen bg-javida-light py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header class="text-center max-w-3xl mx-auto">
          <span
            class="text-xs font-bold uppercase tracking-widest text-javida-accent bg-blue-50 border border-blue-200/60 px-3.5 py-1 rounded-full mb-3 inline-block"
          >
            Ingeniería de Campo y Mantenimiento
          </span>
          <h1
            class="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-wider text-javida-primary mb-4"
          >
            Servicios Especializados
          </h1>
          <p class="text-javida-muted text-base leading-relaxed">
            Soluciones integrales de aseguramiento
          </p>
        </header>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          <article
            v-for="servicio in SERVICIOS_EMPRESA"
            :key="servicio.id"
            class="bg-white rounded-2xl border border-javida-border shado-xs hover:shado-md transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
          >
            <div>
              <div
                class="relative w-full aspect-[16/10] md:aspect-[4/3] lg:aspect[16/10] overflow-hidden bg-slate-900"
              >
                <img
                  :src="servicio.galeria.principal"
                  :alt="servicio.titulo"
                  loading="lazy"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"
                ></div>
              </div>

              <div class="p-6">
                <div class="flex items-center gap-2.5 text-javida-accent mb-2">
                  <font-awesome-icon
                    :icon="servicio.iconBadge"
                    class="text-sm"
                  />
                  <span class="text-xs font-bold uppercase tracking-wider"
                    >Especialidad</span
                  >
                </div>

                <h2
                  class="text-lg font-bold text-javida-primary group-hover:text-javida-accent transition-colors mb-3 leading-snug"
                >
                  {{ servicio.titulo }}
                </h2>

                <p class="text-xs text-javida-muted leading-relaxed mb-4">
                  {{ servicio.descripcionCorta }}
                </p>
              </div>
            </div>

            <div class="p-6 pt-0 border-t border-slate-100 mt-2">
              <RouterLink
                :to="`/servicios/${servicio.id}`"
                class="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-javida-primary group-hover:text-javida-accent pt-4 transition-colors"
              >
                <span>Conoce el procedimiento</span>
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right"
                  class="text-xs transform group-hover:translate-x-1 transition-transform"
                />
              </RouterLink>
            </div>
          </article>
        </div>

        <div
          class="bg-gradient-to-r from-javida-primary to-javida-dark rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div class="max-w-xl text-center md:text-left">
            <h3 class="text-2xl font-bold mb-2">
              ¿Requieres asistencia para definir el alcance de tú proyecto?
            </h3>
            <p class="text-slate-300 text-sm leading-relaxed">
              Nuestro equipo operativo te brinda asesoría técnica sin costo para
              determinar pruebas de presión, procedimientos de torque, entre
              otros...
            </p>
          </div>

          <RouterLink
            to="/contacto?servicio=asesoria"
            class="bg-javida-accent hover:bg-javida-accent-hover text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-all whitespace-nowrap shadow-sm hover:-translate-y-0.5"
          >
            Solicitar Asesoría Sin Costo
          </RouterLink>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from "vue";
import MainLayout from "../layout/MainLayout.vue";

import { SERVICIOS_EMPRESA } from "../data/services.js";
</script>

<style scoped></style>
