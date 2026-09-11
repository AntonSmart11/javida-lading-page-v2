<template>
  <MainLayout>
    <!-- 1. HERO SECTION -->
    <section
      class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950"
    >
      <!-- CAROUSEL DE IMÁGENES DE FONDO -->
      <div class="absolute inset-0 z-0">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          :class="indiceActual === index ? 'opacity-100' : 'opacity-0'"
        >
          <img
            :src="slide.imagen"
            :alt="slide.alt"
            class="w-full h-full object-cover object-[80%_center] md:object-center transform scale-105 transition-transform duration-7000 ease-out"
            :class="indiceActual === index ? 'scale-100' : 'scale-105'"
          />
        </div>

        <!-- Capa oscura (Overlay) para asegurar contraste perfecto del texto -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/65 to-slate-900/30 z-10"
        ></div>
      </div>

      <!-- CONTENIDO PRINCIPAL DEL HERO (TEXTO Y BOTONES) -->
      <div
        class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full"
      >
        <div class="max-w-3xl text-white">
          <!-- Badge superior -->
          <!-- <div
            class="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6 backdrop-blur-xs"
          >
            <font-awesome-icon
              icon="fa-solid fa-shield-halved"
              class="text-javida-highlight"
            />
            Calidad, Seguridad y Capacidad Operativa
          </div> -->

          <!-- Título -->
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
          >
            Servicios Integrales para
            <span class="text-javida-highlight">la Industria</span>
          </h1>

          <!-- ESLOGAN DESTACADO CON LÍNEA LATERAL -->
          <div
            class="border-l-4 border-javida-highlight pl-4 sm:pl-5 py-1 mb-8"
          >
            <p class="text-xl sm:text-2xl font-bold text-white tracking-wide">
              Control en cada giro.
              <span class="text-javida-highlight"
                >Seguridad en cada línea.</span
              >
            </p>
          </div>

          <!-- Subtítulo dinámico o fijo -->
          <p class="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Especialistas en pruebas de hermeticidad, mantenimiento a válvulas,
            torque controlado, corte en frío, spools y más soluciones integrales
            bajo estrictos estándares de calidad.
          </p>

          <!-- Botones de Acción -->
          <div class="flex flex-wrap gap-4">
            <RouterLink
              to="/contacto"
              class="inline-flex items-center gap-2.5 bg-javida-accent hover:bg-javida-accent-hover text-white font-semibold px-7 py-3.5 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md"
            >
              Solicitar Cotización
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </RouterLink>
            <RouterLink
              to="/servicios"
              class="inline-flex items-center px-7 py-3.5 rounded-lg border border-white/40 hover:bg-white/10 text-white font-semibold backdrop-blur-xs transition-all"
            >
              Ver Servicios
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. SERVICIOS -->
    <section id="servicios" class="py-20 bg-javida-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold uppercase tracking-wider text-javida-primary mb-2"
          >
            Servicios Especializados
          </h2>
          <p class="text-javida-muted text-base">
            Soluciones técnicas diseñadas para asegurar la integridad de tus
            operaciones.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div
            v-for="(item, idx) in services"
            :key="idx"
            class="bg-white rounded-xl border border-javida-border overflow-hidden flex flex-col shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <!-- Imagen con Badge Flotante -->
            <div class="relative h-56 overflow-hidden">
              <img
                :src="item.imgHome"
                :alt="item.homeTitle"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
              />
              <div
                class="absolute top-3.5 right-3.5 w-11 h-11 bg-white/95 text-javida-primary rounded-lg flex items-center justify-center shadow-md text-lg"
              >
                <font-awesome-icon :icon="item.iconBadge" />
              </div>
            </div>

            <!-- Cuerpo de la tarjeta -->
            <div class="p-6 flex flex-col grow">
              <h3 class="text-xl font-bold text-javida-primary mb-2.5">
                {{ item.homeTitle }}
              </h3>
              <p class="text-javida-muted text-sm leading-relaxed mb-5 grow">
                {{ item.descripcionCorta }}
              </p>
              <RouterLink
                :to="item.enlace"
                class="inline-flex items-center gap-2 text-javida-accent font-semibold text-sm hover:gap-3 transition-all"
              >
                Ver detalles
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. SOBRE NOSOTROS -->
    <section id="nosotros" class="py-20 bg-javida-primary text-white">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <!-- Texto y Métricas -->
        <div class="lg:col-span-7">
          <h2 class="text-3xl font-bold uppercase tracking-wider mb-5">
            Sobre Nosotros
          </h2>
          <p class="leading-relaxed text-base mb-4">
            En <strong>Grupo Javida</strong> nos enfocamos en la seguridad
            operativa, protección ambiental y salud ocupacional. Ofrecemos
            soluciones técnicas de calidad certificada que cumplen estrictamente
            con las regulaciones vigentes.
          </p>
          <p class="leading-relaxed text-base mb-8">
            Lideramos el sector a través de personal altamente calificado y
            tecnología de última generación en mantenimiento e inspección.
          </p>

          <!-- <div class="grid grid-cols-3 gap-4 pt-6 border-t border-white/15">
            <div>
              <h4 class="text-3xl font-extrabold text-javida-highlight mb-1">
                100%
              </h4>
              <span class="text-xs text-slate-300 font-medium"
                >Cumplimiento Normativo</span
              >
            </div>
            <div>
              <h4 class="text-3xl font-extrabold text-javida-highlight mb-1">
                0
              </h4>
              <span class="text-xs text-slate-300 font-medium"
                >Tolerancia a Fugas</span
              >
            </div>
            <div>
              <h4 class="text-3xl font-extrabold text-javida-highlight mb-1">
                24/7
              </h4>
              <span class="text-xs text-slate-300 font-medium"
                >Soporte Técnico</span
              >
            </div>
          </div> -->
        </div>

        <!-- Imagen con borde decorativo -->
        <div class="lg:col-span-5">
          <img
            src="../assets/images/nosotros.webp"
            alt="Operaciones Grupo Javida"
            class="w-full h-80 lg:h-96 object-cover rounded-2xl border-4 border-white/10 shadow-2xl"
          />
        </div>
      </div>
    </section>

    <!-- 4. NUESTROS CLIENTES -->
    <section
      id="clientes"
      class="py-24 bg-javida-light border-y border-javida-border"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Título de Sección -->
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold uppercase tracking-wider text-javida-primary"
          >
            Empresas que Confían en Nosotros
          </h2>
        </div>

        <!-- Grid de Logos / Tarjetas -->
        <div
          class="bg-white rounded-2xl border border-javida-border p-6 shadow-sm"
        >
          <carousel :items="imagesClients" />
        </div>
      </div>
    </section>

    <!-- 5. UBICACIÓN -->
    <!-- <section id="ubicacion" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h2
            class="text-3xl font-bold uppercase tracking-wider text-javida-primary"
          >
            Presencia y Sedes
          </h2>
          <p class="text-javida-muted text-sm mt-2">
            Infraestructura operativa y oficinas con cobertura estratégica a
            nivel nacional.
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
                : 'bg-javida-light text-slate-600 border-javida-border hover:bg-white hover:text-javida-primary',
            ]"
          >
            <font-awesome-icon icon="fa-solid fa-building" class="text-xs" />
            <span>{{ sede.ciudad }}</span>
            <span class="text-[11px] opacity-75 font-normal"
              >({{ sede.tipo }})</span
            >
          </button>
        </div>

        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-javida-light rounded-3xl p-6 sm:p-10 border border-javida-border shadow-sm items-stretch"
        >
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
                <li class="flex items-start gap-4">
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
    </section> -->
    <LocationsSection />

    <!-- 6. FORMULARIO CONTÁCTANOS -->
    <ContactForm />
  </MainLayout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import MainLayout from "../layout/MainLayout.vue";
import LocationsSection from "../components/LocationsSection.vue";
import ContactForm from "../components/ContactForm.vue";
import Carousel from "../components/Carousel.vue";

import { IMAGES_CLIENTS } from "../data/clients.js";
import { SERVICIOS_EMPRESA } from "../data/services.js";

const imagesClients = ref(IMAGES_CLIENTS);
const services = ref(SERVICIOS_EMPRESA);

const slides = ref([
  {
    imagen: new URL("../assets/images/hero/portrait_1.webp", import.meta.url)
      .href,
    alt: "Torque de torre",
  },
  {
    imagen: new URL("../assets/images/hero/portrait_2.webp", import.meta.url)
      .href,
    alt: "Apriete",
  },
  {
    imagen: new URL("../assets/images/hero/portrait_3.webp", import.meta.url)
      .href,
    alt: "Pruebas",
  },
  {
    imagen: new URL("../assets/images/hero/portrait_4.webp", import.meta.url)
      .href,
    alt: "Lugar de trabajo",
  },
]);

const indiceActual = ref(0);
let intervaloSlide = null;

const iniciarTemporizador = () => {
  detenerTemporizador();
  // Cambia cada 6 segundos
  intervaloSlide = setInterval(() => {
    indiceActual.value = (indiceActual.value + 1) % slides.value.length;
  }, 6000);
};

const detenerTemporizador = () => {
  if (intervaloSlide) clearInterval(intervaloSlide);
};

onMounted(() => {
  iniciarTemporizador();
});

onUnmounted(() => {
  detenerTemporizador();
});
</script>

<style scoped></style>
