<template>
  <MainLayout>
    <!-- 1. HERO SECTION -->
    <section
      id="inicio"
      :style="{ backgroundImage: `url(${heroImage})` }"
      class="relative min-h-[85vh] flex items-center bg-cover bg-center"
    >
      <!-- Overlay Degradado -->
      <div class="absolute inset-0 bg-slate-900/70"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="max-w-2xl text-white">
          <div
            class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide backdrop-blur-xs mb-6"
          >
            <font-awesome-icon
              icon="fa-solid fa-shield-halved text-javida-highlight"
            />
            Calidad, Eficiencia y Seguridad Industrial
          </div>

          <h1
            class="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6"
          >
            Soluciones Integrales para la
            <span class="text-javida-highlight">Industria Energética</span>
          </h1>

          <p class="text-lg leading-relaxed mb-8">
            Especialistas en pruebas hidrostáticas, mantenimiento a válvulas y
            torque controlado con los más altos estándares normativos.
          </p>

          <div class="flex flex-wrap gap-4">
            <a
              href="#contacto"
              class="inline-flex items-center gap-2.5 bg-javida-accent hover:bg-javida-accent-hover text-white font-semibold px-7 py-3.5 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md"
            >
              Solicitar Cotización
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </a>
            <a
              href="#servicios"
              class="inline-flex items-center px-7 py-3.5 rounded-lg border border-white/40 hover:bg-white/10 text-white font-semibold backdrop-blur-xs transition-all"
            >
              Ver Servicios
            </a>
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
            v-for="(item, idx) in servicios"
            :key="idx"
            class="bg-white rounded-xl border border-javida-border overflow-hidden flex flex-col shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <!-- Imagen con Badge Flotante -->
            <div class="relative h-56 overflow-hidden">
              <img
                :src="item.img"
                :alt="item.titulo"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
              />
              <div
                class="absolute top-3.5 right-3.5 w-11 h-11 bg-white/95 text-javida-primary rounded-lg flex items-center justify-center shadow-md text-lg"
              >
                <font-awesome-icon :icon="['fa-solid', item.iconClass]" />
              </div>
            </div>

            <!-- Cuerpo de la tarjeta -->
            <div class="p-6 flex flex-col grow">
              <h3 class="text-xl font-bold text-javida-primary mb-2.5">
                {{ item.titulo }}
              </h3>
              <p class="text-javida-muted text-sm leading-relaxed mb-5 grow">
                {{ item.descripcion }}
              </p>
              <a
                :href="item.enlace"
                class="inline-flex items-center gap-2 text-javida-accent font-semibold text-sm hover:gap-3 transition-all"
              >
                Ver detalles
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
              </a>
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
            Nuestros Clientes
          </h2>
        </div>

        <!-- Grid de Logos / Tarjetas -->
        <div
          class="bg-white rounded-2xl border border-javida-border p-6 shadow-sm"
        >
          <carousel :items="imagesClients" />
        </div>

        <!-- Botón "Ver más" (Píldora redondeada idéntica a la captura) -->
        <div class="mt-10 text-center">
          <a
            href="/clientes"
            class="inline-block bg-javida-accent hover:bg-javida-accent-hover text-white font-medium px-10 py-2.5 rounded-full text-sm transition-all shadow-sm transform hover:-translate-y-0.5"
          >
            <span>Ver más clientes</span>
            <font-awesome-icon
              icon="fa-solid fa-arrow-right"
              class="text-xs ml-2"
            />
          </a>
        </div>
      </div>
    </section>

    <!-- 5. UBICACIÓN -->
    <section id="ubicacion" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold uppercase tracking-wider text-javida-primary"
          >
            Nuestras oficinas
          </h2>
          <p class="text-javida-muted text-sm mt-2">
            Instalaciones y centro operativo en el corazón energético del
            sureste.
          </p>
        </div>

        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-javida-light rounded-3xl p-8 sm:p-10 border border-javida-border shadow-sm items-stretch"
        >
          <!-- Detalles Oficina -->
          <div
            class="lg:col-span-5 flex flex-col justify-between bg-white p-8 rounded-2xl border border-javida-border/80 shadow-2xs"
          >
            <div>
              <div
                class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-javida-accent bg-blue-50 px-3 py-1 rounded-md mb-4"
              >
                Oficinas Centrales
              </div>
              <h3 class="text-2xl font-bold text-javida-primary mb-6">
                Villahermosa, Tabasco
              </h3>

              <ul class="space-y-5 text-sm text-javida-muted leading-relaxed">
                <li class="flex items-start gap-4">
                  <div
                    class="w-9 h-9 rounded-lg bg-javida-light border border-javida-border flex items-center justify-center shrink-0 text-javida-accent"
                  >
                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                  </div>
                  <span class="pt-1"
                    >Calle Sindicato de Agricultura 301-B, Col. Adolfo López
                    Mateos, C.P. 86040, Villahermosa, Tabasco.</span
                  >
                </li>

                <li class="flex items-center gap-4">
                  <div
                    class="w-9 h-9 rounded-lg bg-javida-light border border-javida-border flex items-center justify-center shrink-0 text-javida-accent"
                  >
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                  </div>
                  <a
                    href="mailto:ventas@javida.com.mx"
                    class="hover:text-javida-accent transition-colors font-medium"
                  >
                    ventas@javida.com.mx
                  </a>
                </li>

                <li class="flex items-center gap-4">
                  <div
                    class="w-9 h-9 rounded-lg bg-javida-light border border-javida-border flex items-center justify-center shrink-0 text-javida-accent"
                  >
                    <font-awesome-icon icon="fa-solid fa-clock" />
                  </div>
                  <span>Lunes a Viernes: 9:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>

            <div class="pt-8 mt-8 border-t border-javida-border">
              <a
                href="https://maps.app.goo.gl/TzvBM51FULwyb29H6"
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

          <!-- Mapa Embed -->
          <div
            class="lg:col-span-7 h-[380px] lg:h-auto min-h-[380px] rounded-2xl overflow-hidden border border-javida-border shadow-xs"
          >
            <iframe
              class="w-full h-full min-h-[380px] border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.869035137279!2d-92.9360875!3d17.9904221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd8324838640f%3A0x8e83344efb319aa8!2sSindicato%20de%20Agricultura%20301%2C%20Lopez%20Mateos%2C%2086040%20Villahermosa%2C%20Tab.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. FORMULARIO CONTÁCTANOS -->
    <ContactForm />
  </MainLayout>
</template>

<script setup>
import { ref } from "vue";
import MainLayout from "../layout/MainLayout.vue";
import ContactForm from "../components/ContactForm.vue";
import Carousel from "../components/Carousel.vue";
import { imagesClients } from "../stores/store.js";
import heroImage from "../assets/images/portrait.webp";

const menuOpen = ref(false);

// Estado reactivo para el formulario de contacto
const contacto = ref({
  nombre: "",
  apellido: "",
  empresa: "",
  telefono: "",
  correo: "",
  mensaje: "",
  captchaValido: false,
});

const enviando = ref(false);

// Servicios con sus imágenes y badges exactos
const servicios = [
  {
    titulo: "Mantenimiento Industrial",
    descripcion:
      "Procedimientos preventivos y correctivos para optimizar la operatividad de equipos y cumplir con las normativas del sector.",
    img: new URL("../assets/images/mantenimiento.webp", import.meta.url).href,
    iconClass: "fa-toolbox",
    enlace: "/servicios#mantenimiento",
  },
  {
    titulo: "Pruebas Hidrostáticas",
    descripcion:
      "Evaluación de integridad estructural y hermeticidad en sistemas sometidos a presión, garantizando cero fugas operativas.",
    img: new URL("../assets/images/pruebas.webp", import.meta.url).href,
    iconClass: "fa-gauge-high",
    enlace: "/servicios#hidrostaticas",
  },
  {
    titulo: "Torque Controlado",
    descripcion:
      "Apriete calibrado y preciso de uniones bridadas para asegurar sellado total y prevenir cualquier fallo de contención.",
    img: new URL("../assets/images/torque.webp", import.meta.url).href,
    iconClass: "fa-wrench",
    enlace: "/servicios#torques",
  },
];

const enviarFormulario = async () => {
  enviando.value = true;
  try {
    console.log("Enviando datos a backend PHP:", contacto.value);
    // Conexión pendiente con sendEmail.php
  } catch (error) {
    console.error(error);
  } finally {
    enviando.value = false;
  }
};
</script>

<style scoped></style>
