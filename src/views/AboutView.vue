<template>
  <MainLayout>
    <div class="bg-javida-light min-h-screen py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <!-- 1. INTRODUCCIÓN / NOSOTROS -->
        <section class="about-intro">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <!-- Texto e identidad -->
            <div class="lg:col-span-7">
              <span
                class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-100 text-sky-700 tracking-wider uppercase mb-5"
              >
                <font-awesome-icon icon="fa-solid fa-users" />
                Conoce Nuestra Empresa
              </span>

              <h1
                class="text-3xl sm:text-4xl font-extrabold text-javida-primary leading-tight mb-6"
              >
                Compromiso con la Excelencia e Integridad Industrial
              </h1>

              <p class="text-javida-muted text-base leading-relaxed mb-4">
                <strong>Grupo Javida</strong> somos una empresa mexicana con más
                de una década de experiencia verificable, que se respalda con la
                confianza de nuestros clientes. Nos encontramos consolidados con
                presencia en los sectores industriales más críticos del país,
                contando con bases operativas en Villahermosa y Cárdenas,
                Tabasco, así como en Monterrey, Nuevo León.
              </p>

              <p class="text-javida-muted text-base leading-relaxed mb-8">
                Proporcionamos servicios de instalación y mantenimiento a
                válvulas y equipos de proceso, torque controlado, pruebas de
                hermeticidad, corte en frío, así como servicios de fabricación y
                montaje de spools. Estamos comprometidos con proveer equipos y
                servicios de la más alta calidad en soluciones para las diversas
                industrias.
              </p>

              <div class="space-y-3 pt-2">
                <div
                  class="flex items-center gap-3 text-sm font-semibold text-javida-primary"
                >
                  <div
                    class="w-8 h-8 rounded-full bg-blue-100 text-javida-accent flex items-center justify-center shrink-0"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-shield-halved"
                      class="text-xs"
                    />
                  </div>
                  <span
                    >Operaciones con máxima seguridad y cero accidentes</span
                  >
                </div>

                <div
                  class="flex items-center gap-3 text-sm font-semibold text-javida-primary"
                >
                  <div
                    class="w-8 h-8 rounded-full bg-blue-100 text-javida-accent flex items-center justify-center shrink-0"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-microchip"
                      class="text-xs"
                    />
                  </div>
                  <span>Tecnología e instrumentación calibrada</span>
                </div>
              </div>
            </div>

            <!-- Imagen y Badge Flotante -->
            <div class="lg:col-span-5 relative">
              <img
                src="/src/assets/images/nosotros.webp"
                alt="Operaciones industriales Grupo Javida"
                class="w-full h-[400px] object-cover rounded-2xl shadow-xl border-4 border-white"
              />
              <div
                class="absolute -bottom-5 left-6 bg-white p-3.5 sm:p-4 rounded-xl shadow-lg border border-javida-border flex items-center gap-3.5"
              >
                <div
                  class="w-10 h-10 rounded-lg bg-javida-primary text-white flex items-center justify-center text-lg"
                >
                  <font-awesome-icon icon="fa-solid fa-check-double" />
                </div>
                <div>
                  <h5
                    class="text-sm font-bold text-javida-primary leading-tight"
                  >
                    Garantía de Calidad
                  </h5>
                  <span class="text-xs text-javida-muted"
                    >Servicio especializado en sitio</span
                  >
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 2. PILARES: OBJETIVO, MISIÓN, VISIÓN -->
        <section class="pillars">
          <div class="text-center mb-14">
            <h2
              class="text-3xl font-bold uppercase tracking-wider text-javida-primary"
            >
              Filosofía Organizacional
            </h2>
            <p class="text-javida-muted text-sm mt-2">
              Los principios que guían nuestras operaciones y relaciones de
              trabajo día con día.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(pilar, idx) in pilares"
              :key="idx"
              class="bg-white rounded-2xl border border-javida-border p-8 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden group"
            >
              <!-- Borde superior en hover -->
              <div
                class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-javida-primary to-javida-accent opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>

              <div
                class="w-14 h-14 rounded-xl bg-blue-50 text-javida-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-javida-primary group-hover:text-white transition-all"
              >
                <font-awesome-icon :icon="['fa-solid', pilar.icono]" />
              </div>

              <h3 class="text-xl font-bold text-javida-primary mb-3">
                {{ pilar.titulo }}
              </h3>

              <p class="text-slate-600 text-sm leading-relaxed mb-4 grow">
                {{ pilar.descripcion }}
              </p>

              <!-- Lista en caso de misión -->
              <ul
                v-if="pilar.puntos"
                class="space-y-2.5 pt-2 border-t border-slate-100"
              >
                <li
                  v-for="(pt, pIdx) in pilar.puntos"
                  :key="pIdx"
                  class="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-circle-check"
                    class="text-javida-accent mt-0.5"
                  />
                  <span
                    ><strong class="text-javida-primary">{{
                      pt.titulo
                    }}</strong>
                    {{ pt.texto }}</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- 3. NUEVA SECCIÓN: POLÍTICA INTEGRAL -->
        <section
          class="policy bg-white rounded-3xl border border-javida-border p-8 sm:p-12 shadow-sm"
        >
          <!-- Cabecera Institucional de la Política -->
          <div class="max-w-3xl mb-12">
            <div
              class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-javida-accent bg-blue-50 px-3 py-1 rounded-md mb-3"
            >
              Sistema de Gestión Integral
            </div>
            <h2
              class="text-2xl sm:text-3xl font-extrabold text-javida-primary uppercase tracking-wide mb-4"
            >
              Política Integral
            </h2>
            <p class="text-javida-muted text-sm sm:text-base leading-relaxed">
              En
              <strong class="text-javida-primary">GRUPO JAVIDA</strong>
              cumplimos los requisitos legales y regulatorios de calidad,
              seguridad y salud ocupacional y medio ambiente, aplicables a
              nuestras actividades, servicios y procesos. Así mismo, declaramos
              nuestro compromiso formal en tres ejes rectores:
            </p>
          </div>

          <!-- Cards de los 3 ejes -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              v-for="(pol, idx) in politicas"
              :key="idx"
              class="rounded-2xl border border-javida-border bg-slate-50/50 p-6 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div>
                <div
                  :class="[
                    'w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5',
                    pol.colorBg,
                  ]"
                >
                  <font-awesome-icon :icon="['fa-solid', pol.icono]" />
                </div>
                <h4 class="text-lg font-bold text-javida-primary mb-3">
                  {{ pol.area }}
                </h4>
                <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {{ pol.descripcion }}
                </p>
              </div>

              <div class="pt-6 mt-6 border-t border-slate-200/70">
                <span
                  class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider"
                >
                  Compromiso Normativo
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "../layout/MainLayout.vue";

// Pilares organizacionales
const pilares = [
  {
    titulo: "Objetivo",
    icono: "fa-bullseye",
    descripcion:
      "Garantizar la hermeticidad, confiabilidad y óptima operación de equipos e instalaciones industriales mediante pruebas de estanqueidad rigurosas, mantenimiento calificado a válvulas y fabricación especializada de spools, asegurando continuidad operativa y cero riesgos de fuga",
  },
  {
    titulo: "Misión",
    icono: "fa-compass",
    descripcion:
      "Proveer soluciones a nuestros clientes que generen la eficiencia y excelencia en el desarrollo de sus proyectos, cubriendo y excediendo  las expectativas; cumpliendo  con  los compromisos adquiridos. Con un servicio postventa a través del seguimiento y soporte técnico que asegure que nuestros clientes reciban lo que necesitan, cuando lo necesitan y donde lo necesitan.",
  },
  {
    titulo: "Visión",
    icono: "fa-eye",
    descripcion:
      "Ser considerado como un proveedor altamente confiable, para  el suministro de servicios especializados en las empresas de la industria energética y metalmecánica. A través de soluciones reales y eficientes con estricto cumplimiento de altos estándares de calidad y normatividad en materia de seguridad y protección al medio ambiente.",
  },
];

// Nueva Política Integral
const politicas = [
  {
    area: "Calidad",
    icono: "fa-award",
    colorBorder: "border-blue-500",
    colorBg: "bg-blue-50 text-blue-600",
    descripcion:
      "Satisfacer las necesidades y exceder las expectativas de calidad, servicio y tiempo de respuesta de nuestros clientes y partes interesadas, con un enfoque a la mejora continua de nuestros procesos y servicios.",
  },
  {
    area: "Medio Ambiente",
    icono: "fa-leaf",
    colorBorder: "border-emerald-500",
    colorBg: "bg-emerald-50 text-emerald-600",
    descripcion:
      "Prevenir la contaminación, proteger el medio ambiente y abordar el cambio climático, para mejorar nuestro desempeño ambiental, con la participación de personal consciente y competente.",
  },
  {
    area: "Seguridad y Salud Ocupacional",
    icono: "fa-shield-halved",
    colorBorder: "border-amber-500",
    colorBg: "bg-amber-50 text-amber-600",
    descripcion:
      "Eliminar peligros y reducir riesgos a la seguridad y la salud del personal, controlando y previniendo las condiciones y actos inseguros mediante la disciplina, el desarrollo de servicios y prácticas operativas.",
  },
];
</script>

<style scoped></style>
