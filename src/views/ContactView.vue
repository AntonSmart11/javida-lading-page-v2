<template>
  <MainLayout>
    <div class="min-h-screen bg-javida-light py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <!-- ENCABEZADO PRINCIPAL -->
        <header class="text-center max-w-3xl mx-auto">
          <h1
            class="text-3xl sm:text-4xl font-extrabold uppercase tracking-wider text-javida-primary mb-3"
          >
            Comunícate con Nosotros
          </h1>
          <p class="text-javida-muted text-base leading-relaxed">
            Estamos listos para atender tus dudas operativas, requerimientos
            técnicos y solicitudes de cotización.
          </p>
        </header>

        <!-- BLOQUE INTEGRADO: CANALES DIRECTOS + FORMULARIO -->
        <div
          class="bg-white rounded-3xl border border-javida-border shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12"
        >
          <!-- LADO IZQUIERDO: ATENCIÓN RÁPIDA (Sin duplicar direcciones) -->
          <aside
            class="lg:col-span-5 bg-gradient-to-b from-javida-primary to-javida-dark text-white p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div
                class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-javida-highlight bg-white/10 px-3 py-1 rounded-md mb-4"
              >
                Contacto Directo
              </div>

              <h2 class="text-2xl font-bold mb-3">Atención Inmediata</h2>
              <p class="text-slate-300 text-sm leading-relaxed mb-8">
                Si requieres soporte técnico urgente o asesoría sobre algún
                servicio, contáctanos por nuestras vías directas:
              </p>

              <div class="space-y-6">
                <!-- Teléfonos de Asistencia -->
                <div class="flex items-start gap-4">
                  <div
                    class="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-javida-highlight text-base shrink-0 mt-0.5"
                  >
                    <font-awesome-icon icon="fa-solid fa-phone" />
                  </div>
                  <div>
                    <h4
                      class="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1.5"
                    >
                      Líneas Telefónicas
                    </h4>
                    <div class="flex flex-col gap-1 text-sm font-medium">
                      <a
                        href="tel:9932789583"
                        class="hover:text-javida-highlight transition-colors flex items-center gap-2"
                      >
                        <span>993-286-0921</span>
                        <span
                          class="text-[10px] text-slate-400 font-normal uppercase tracking-wider"
                          >(Sur)</span
                        >
                      </a>
                      <a
                        href="tel:8126002858"
                        class="hover:text-javida-highlight transition-colors flex items-center gap-2"
                      >
                        <span>812-600-2858</span>
                        <span
                          class="text-[10px] text-slate-400 font-normal uppercase tracking-wider"
                          >(Norte)</span
                        >
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Correos Regionales -->
                <div class="flex items-start gap-4">
                  <div
                    class="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-javida-highlight text-base shrink-0 mt-0.5"
                  >
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                  </div>
                  <div class="flex-1">
                    <h4
                      class="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2"
                    >
                      Ventas y Cotizaciones
                    </h4>
                    <div class="grid grid-cols-1 gap-2 text-sm">
                      <div
                        class="bg-white/5 border border-white/10 rounded-lg p-2.5"
                      >
                        <span
                          class="text-[11px] font-bold text-javida-highlight uppercase tracking-wider block mb-0.5"
                        >
                          Región Sur
                        </span>
                        <a
                          href="mailto:ventas@javida.com.mx"
                          class="text-slate-200 hover:text-white transition-colors break-all font-medium"
                        >
                          ventas@javida.com.mx
                        </a>
                      </div>

                      <div
                        class="bg-white/5 border border-white/10 rounded-lg p-2.5"
                      >
                        <span
                          class="text-[11px] font-bold text-javida-highlight uppercase tracking-wider block mb-0.5"
                        >
                          Región Norte
                        </span>
                        <a
                          href="mailto:ventasmty@javida.com.mx"
                          class="text-slate-200 hover:text-white transition-colors break-all font-medium"
                        >
                          ventasmty@javida.com.mx
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Acceso directo al Mapa -->
                <div class="flex items-start gap-4 pt-2">
                  <div
                    class="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-javida-highlight text-base shrink-0 mt-0.5"
                  >
                    <font-awesome-icon icon="fa-solid fa-map-location-dot" />
                  </div>
                  <div>
                    <h4
                      class="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1"
                    >
                      Ubicación de Sedes
                    </h4>
                    <p class="text-xs text-slate-300 mb-2">
                      Contamos con oficinas centrales y bodegas operativas en
                      Tabasco y Nuevo León.
                    </p>
                    <a
                      href="#sedes-mapa"
                      class="text-xs font-semibold text-javida-highlight hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>Ver mapas y direcciones abajo</span>
                      <font-awesome-icon
                        icon="fa-solid fa-arrow-down"
                        class="text-[10px]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Horario al pie -->
            <div
              class="border-t border-white/15 pt-6 mt-8 flex items-center gap-3 text-xs text-slate-300"
            >
              <font-awesome-icon
                icon="fa-solid fa-clock"
                class="text-javida-highlight text-sm shrink-0"
              />
              <span>Horario de atención: Lun a Vie de 9:00 AM a 5:00 PM</span>
            </div>
          </aside>

          <!-- LADO DERECHO: FORMULARIO -->
          <main class="lg:col-span-7 p-8 sm:p-10 bg-white">
            <h3 class="text-xl font-bold text-javida-primary mb-6">
              Envíanos un Mensaje
            </h3>
            <ContactForm :modo-split="true" :mostrar-encabezado="false" />
          </main>
        </div>

        <!-- SECCIÓN DE UBICACIONES Y MAPAS (Anclada con id para scroll suave) -->
        <div id="sedes-mapa">
          <LocationsSection :fondo-gris="false" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "../layout/MainLayout.vue";
import ContactForm from "../components/ContactForm.vue";
import LocationsSection from "../components/LocationsSection.vue";
</script>

<style scoped></style>
