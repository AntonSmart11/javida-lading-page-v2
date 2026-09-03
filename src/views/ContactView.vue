<template>
  <MainLayout>
    <div class="min-h-screen bg-javida-light py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <!-- ENCABEZADO -->
        <header class="text-center max-w-3xl mx-auto">
          <h1
            class="text-3xl sm:text-4xl font-extrabold uppercase tracking-wider text-javida-primary mb-3"
          >
            Comunícate con Nosotros
          </h1>
          <p class="text-javida-muted text-base leading-relaxed">
            Estamos listos para atender tus dudas, requerimientos y solicitudes
            de cotización.
          </p>
        </header>

        <!-- BLOQUE INTEGRADO: INFORMACIÓN + FORMULARIO (SPLIT CARD) -->
        <div
          class="bg-white rounded-3xl border border-javida-border shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12"
        >
          <!-- LADO IZQUIERDO: DETALLES DE CONTACTO (4 columnas en lg) -->
          <aside
            class="lg:col-span-5 bg-gradient-to-b from-javida-primary to-javida-dark text-white p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <h2 class="text-2xl font-bold mb-3">Atención Inmediata</h2>
              <p class="text-slate-300 text-sm leading-relaxed mb-8">
                Comunícate directamente con nuestro equipo técnico o visítanos
                en nuestras instalaciones.
              </p>

              <div class="space-y-6">
                <!-- Oficina -->
                <div class="flex items-start gap-4">
                  <div
                    class="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-javida-highlight text-lg shrink-0"
                  >
                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                  </div>
                  <div>
                    <h4
                      class="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1"
                    >
                      Oficina Central
                    </h4>
                    <p class="text-sm leading-relaxed text-slate-200">
                      Calle Sindicato de Agricultura 301-B, Col. Adolfo López
                      Mateos, C.P. 86040, Villahermosa, Tabasco.
                    </p>
                  </div>
                </div>

                <!-- Teléfonos -->
                <div class="flex items-start gap-4">
                  <div
                    class="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-javida-highlight text-lg shrink-0"
                  >
                    <font-awesome-icon icon="fa-solid fa-phone" />
                  </div>
                  <div>
                    <h4
                      class="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1"
                    >
                      Líneas Telefónicas
                    </h4>
                    <div class="flex flex-col space-y-1 text-sm">
                      <a
                        href="tel:8126002858"
                        class="hover:text-javida-highlight transition-colors font-medium"
                        >812-600-2858</a
                      >
                      <a
                        href="tel:9932789583"
                        class="hover:text-javida-highlight transition-colors font-medium"
                        >993-278-9583</a
                      >
                    </div>
                  </div>
                </div>

                <!-- Correo -->
                <div class="flex items-start gap-4">
                  <div
                    class="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-javida-highlight text-lg shrink-0"
                  >
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                  </div>
                  <div>
                    <h4
                      class="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1"
                    >
                      Correo Electrónico
                    </h4>
                    <a
                      href="mailto:ventas@javida.com.mx"
                      class="text-sm text-slate-200 hover:text-javida-highlight transition-colors"
                    >
                      ventas@javida.com.mx
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Horario al pie de la columna izquierda -->
            <div
              class="border-t border-white/15 pt-6 mt-8 flex items-center gap-3 text-xs text-slate-300"
            >
              <font-awesome-icon
                icon="fa-solid fa-clock"
                class="text-javida-highlight text-sm"
              />
              <span>Horario de atención: Lun a Vie de 9:00 AM a 5:00 PM</span>
            </div>
          </aside>

          <!-- LADO DERECHO: FORMULARIO COMPONENTE (7 columnas en lg) -->
          <main class="lg:col-span-7 p-8 sm:p-10 bg-white">
            <h3 class="text-xl font-bold text-javida-primary mb-6">
              Envíanos un Mensaje
            </h3>

            <!-- Componente reutilizado con modoSplit para encajar perfecto -->
            <ContactForm :modo-split="true" :mostrar-encabezado="false" />
          </main>
        </div>

        <!-- MAPA COMPLETO INTEGRADO AL FINAL -->
        <section
          class="rounded-3xl overflow-hidden border border-javida-border shadow-xs h-96"
        >
          <iframe
            class="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.869035137279!2d-92.9360875!3d17.9904221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd8324838640f%3A0x8e83344efb319aa8!2sSindicato%20de%20Agricultura%20301%2C%20Lopez%20Mateos%2C%2086040%20Villahermosa%2C%20Tab.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "../layout/MainLayout.vue";
import ContactForm from "../components/ContactForm.vue";
</script>

<style scoped></style>
