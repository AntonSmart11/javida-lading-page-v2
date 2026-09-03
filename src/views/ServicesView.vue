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
        v-for="(item, index) in servicios"
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
                <font-awesome-icon :icon="['fa-solid', item.iconBadge]" />
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
                <span>{{ item.btnTexto }}</span>
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right"
                  class="text-xs"
                />
              </RouterLink>
            </div>

            <!-- Columna de Galería Asimétrica (5 cols) -->
            <div class="lg:col-span-5 grid grid-cols-2 gap-3">
              <!-- Imagen principal (ancho doble) -->
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

              <!-- Miniatura 1 -->
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

              <!-- Miniatura 2 -->
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
import MainLayout from "../layout/MainLayout.vue";

const servicios = [
  {
    id: "mantenimiento",
    badge: "División de Mantenimiento",
    iconBadge: "fa-toolbox",
    titulo: "Mantenimiento Industrial y Válvulas",
    lead: "Intervención operativa orientada a garantizar la continuidad del proceso, mitigar desgastes mecánicos y preservar la vida útil de los componentes de conducción de fluidos.",
    btnTexto: "Solicitar Mantenimiento",
    specs: [
      {
        negrita: "Actuadores mecánicos:",
        texto:
          "Mantenimiento integral a actuadores de válvulas de seccionamiento para maniobras precisas en líneas de transporte.",
      },
      {
        negrita: "Reducción de paradas no programadas:",
        texto:
          "Detección oportuna de fatiga y desgaste preventivo bajo normativas de seguridad industrial.",
      },
      {
        negrita: "Alineación y calibración:",
        texto:
          "Verificación de apertura, cierre hermético y lubricación especializada.",
      },
    ],
    // Galería: 1 principal + 2 miniaturas
    galeria: {
      principal:
        "/src/assets/images/services/mantenimiento/servicio_mantenimiento_1.webp",
      thumb1:
        "/src/assets/images/services/mantenimiento/servicio_mantenimiento_2.webp",
      thumb2:
        "/src/assets/images/services/mantenimiento/servicio_mantenimiento_3.webp",
      alt: "Mantenimiento de válvulas y tuberías",
    },
  },
  {
    id: "hidrostaticas",
    badge: "Integridad y Presión",
    iconBadge: "fa-gauge-high",
    titulo: "Pruebas Hidrostáticas",
    lead: "Evaluación rigurosa de hermeticidad y resistencia mecánica en sistemas de tuberías, recipientes a presión y válvulas, garantizando una contención segura bajo condiciones severas de servicio.",
    btnTexto: "Cotizar Prueba Hidrostática",
    specs: [
      {
        negrita: "Verificación de resistencia estructural:",
        texto:
          "Monitoreo de esfuerzos con instrumentación calibrada y gráfica digital de presión vs. tiempo.",
      },
      {
        negrita: "Detección de defectos de fabricación:",
        texto:
          "Identificación preventiva de microfugas o fisuras en soldaduras y cuerpo de válvulas.",
      },
      {
        negrita: "Cumplimiento de estándares:",
        texto:
          "Apego estricto a las normas de seguridad para líneas de separación y transporte de hidrocarburos.",
      },
    ],
    galeria: {
      principal: "/src/assets/images/services/pruebas/servicio_prueba_2.webp",
      thumb1: "/src/assets/images/services/pruebas/servicio_prueba_1.webp",
      thumb2: "/src/assets/images/services/pruebas/servicio_prueba_3.webp",
      alt: "Equipos y manómetros para pruebas de presión",
    },
  },
  {
    id: "torques",
    badge: "Uniones Mecánicas",
    iconBadge: "fa-wrench",
    titulo: "Torque Controlado",
    lead: "Aplicación calibrada de torque mediante equipos hidráulicos o mecánicos en uniones bridadas, asegurando la compresión homogénea de juntas para evitar cualquier riesgo de escape o fuga.",
    btnTexto: "Solicitar Apriete de Bridas",
    specs: [
      {
        negrita: "Compresión uniforme del empaque:",
        texto:
          "Procedimiento cruzado que preserva la integridad de las juntas metálicas y espirales.",
      },
      {
        negrita: "Equipamiento certificado:",
        texto:
          "Llaves de torque y multiplicadores calibrados para tolerancias de apriete exactas.",
      },
      {
        negrita: "Aseguramiento hermético:",
        texto:
          "Cero emisiones fugitivas en recipientes de alta presión y ductos de proceso.",
      },
    ],
    galeria: {
      principal: "/src/assets/images/services/torque/servicio_torque_1.webp",
      thumb1: "/src/assets/images/services/torque/servicio_torque_2.webp",
      thumb2: "/src/assets/images/services/torque/servicio_torque_3.webp",
      alt: "Torqueado hidráulico y apriete de pernos",
    },
  },
];
</script>

<style scoped></style>
