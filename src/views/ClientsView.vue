<template>
  <MainLayout>
    <div class="min-h-screen bg-javida-light py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <!-- ENCABEZADO DE PÁGINA -->
        <header class="text-center max-w-3xl mx-auto">
          <h1
            class="text-3xl sm:text-4xl font-extrabold uppercase tracking-wider text-javida-primary mb-3"
          >
            Empresas que Confían en Nosotros
          </h1>
          <p class="text-javida-muted text-base leading-relaxed">
            Empresas del sector energético e industrial que han depositado su
            confianza en nuestra capacidad técnica.
          </p>
        </header>

        <!-- 1. GRID DE LOGOS / NOMBRES DE CLIENTES -->
        <section aria-label="Listado de Clientes">
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            <div
              v-for="(item, idx) in imagesClients"
              :key="idx"
              class="h-28 bg-white border border-javida-border rounded-xl p-5 flex items-center justify-center shadow-2xs hover:shadow-md hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 group"
            >
              <!-- Si existe imagen, se muestra con filtro grisáceo que cobra color en hover -->
              <img
                v-if="item.src"
                :src="item.src"
                :alt="`Logotipo de ${item.alt}`"
                loading="lazy"
                class="max-h-12 max-w-full object-contain filter group-hover:opacity-100 transition-all duration-300"
              />

              <!-- Fallback de texto en caso de que aún no tengas el archivo de alguna marca -->
              <span
                v-else
                class="font-bold text-slate-600 group-hover:text-javida-primary transition-colors text-center text-sm tracking-wide"
              >
                {{ item.alt }}
              </span>
            </div>
          </div>
        </section>

        <!-- 2. ALCANCE DE TRABAJOS Y EXPERIENCIA -->
        <!-- NUESTRA PROMESA / POR QUÉ CONFÍAN EN NOSOTROS -->
        <section
          class="bg-white border border-javida-border rounded-3xl p-8 sm:p-12 shadow-xs"
        >
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span
              class="text-xs font-bold uppercase tracking-wider text-javida-accent bg-blue-50 px-3 py-1 rounded-md"
            >
              Relaciones a Largo Plazo
            </span>
            <h2
              class="text-2xl sm:text-3xl font-extrabold text-javida-primary uppercase tracking-wide mt-3 mb-2"
            >
              Nuestro Compromiso con Cada Cliente
            </h2>
            <p class="text-javida-muted text-sm sm:text-base">
              Más que un proveedor, nos integramos como un aliado estratégico
              enfocado en la tranquilidad de sus operaciones.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Pilar 1 -->
            <div
              class="flex flex-col items-center text-center p-6 rounded-2xl bg-javida-light border border-javida-border/80"
            >
              <div
                class="w-14 h-14 rounded-2xl bg-white text-javida-accent border border-javida-border flex items-center justify-center text-xl shadow-2xs mb-5"
              >
                <font-awesome-icon icon="fa-solid fa-handshake" />
              </div>
              <h3 class="font-bold text-javida-primary text-base mb-2">
                Atención Personalizada y Directa
              </h3>
              <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Trato cercano sin intermediarios ni procesos burocráticos.
                Asignamos un responsable directo para atender sus requerimientos
                y resolver dudas al instante.
              </p>
            </div>

            <!-- Pilar 2 -->
            <div
              class="flex flex-col items-center text-center p-6 rounded-2xl bg-javida-light border border-javida-border/80"
            >
              <div
                class="w-14 h-14 rounded-2xl bg-white text-javida-accent border border-javida-border flex items-center justify-center text-xl shadow-2xs mb-5"
              >
                <font-awesome-icon icon="fa-solid fa-clock-rotate-left" />
              </div>
              <h3 class="font-bold text-javida-primary text-base mb-2">
                Respuesta y Disponibilidad Ágil
              </h3>
              <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Entendemos el valor del tiempo en su industria. Garantizamos
                tiempos de cotización rápidos y flexibilidad operativa para
                adaptarnos a sus calendarios.
              </p>
            </div>

            <!-- Pilar 3 -->
            <div
              class="flex flex-col items-center text-center p-6 rounded-2xl bg-javida-light border border-javida-border/80"
            >
              <div
                class="w-14 h-14 rounded-2xl bg-white text-javida-accent border border-javida-border flex items-center justify-center text-xl shadow-2xs mb-5"
              >
                <font-awesome-icon icon="fa-solid fa-file-circle-check" />
              </div>
              <h3 class="font-bold text-javida-primary text-base mb-2">
                Transparencia y Claridad Total
              </h3>
              <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Información abierta y reportes comprensibles en cada etapa.
                Presupuestos claros y sin costos ocultos para una relación
                basada en la honestidad.
              </p>
            </div>
          </div>

          <!-- Cita o mensaje institucional al pie -->
          <div
            class="mt-10 p-6 rounded-2xl bg-blue-50/50 border border-blue-100 text-center max-w-3xl mx-auto"
          >
            <p class="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
              "Nuestra mayor satisfacción es la confianza recurrente de quienes
              colaboran con nosotros proyecto tras proyecto."
            </p>
          </div>
        </section>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from "vue";
import MainLayout from "../layout/MainLayout.vue";
import { IMAGES_CLIENTS } from "../data/clients.js";

const imagesClients = ref(IMAGES_CLIENTS);
</script>

<style scoped></style>
