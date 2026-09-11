<template>
  <div class="min-h-screen flex flex-col bg-white text-javida-text">
    <!-- Navbar / Header Común -->
    <header
      class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-javida-border shadow-xs"
    >
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
      >
        <RouterLink to="/" class="flex items-center gap-3">
          <img
            :src="logoJavida"
            alt="Grupo Javida"
            class="h-17 w-auto object-contain"
          />
        </RouterLink>

        <nav
          class="hidden md:flex items-center space-x-8 text-sm font-semibold text-javida-muted"
        >
          <RouterLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.to"
            class="hover:text-javida-accent transition-colors"
          >
            {{ link.name }}
          </RouterLink>
        </nav>

        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden text-javida-muted p-2"
        >
          <font-awesome-icon
            :icon="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
            class="text-xl"
          />
        </button>
      </div>

      <!-- Menú Móvil -->
      <div
        v-if="menuOpen"
        class="md:hidden border-t border-javida-border bg-white px-4 py-4 space-y-3"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.to"
          class="block text-javida-muted hover:text-javida-accent font-medium"
          @click="menuOpen = false"
        >
          {{ link.name }}
        </RouterLink>
      </div>
    </header>

    <!-- Centro dinámico: aquí se inyecta el contenido de cada página -->
    <main class="grow">
      <slot />
    </main>

    <!-- Footer Común -->
    <footer
      class="bg-javida-dark text-slate-300 border-t border-slate-800 pt-16 pb-8 text-sm"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Contenedor Principal en Grid de 4 Columnas -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12"
        >
          <!-- Columna 1: Logo e Identidad (lg:col-span-3) -->
          <div class="lg:col-span-3 flex flex-col items-start">
            <RouterLink to="/" class="mb-4 block">
              <img
                :src="logoJavida"
                alt="Grupo Javida"
                class="h-16 w-auto object-contain brightness-150"
              />
            </RouterLink>
            <p class="text-xs text-slate-400 leading-relaxed pr-4">
              Servicios integrales para la industria: pruebas de hermeticidad,
              mantenimiento de válvulas, torque controlado y soluciones
              especializadas.
            </p>
          </div>

          <!-- Columna 2: Sedes e Instalaciones (lg:col-span-4) -->
          <div class="lg:col-span-4">
            <h4
              class="text-xs font-bold uppercase tracking-wider text-javida-highlight mb-4"
            >
              Sedes e Instalaciones
            </h4>

            <div class="space-y-4 text-xs leading-relaxed text-slate-400">
              <!-- Sede Central -->
              <div>
                <p class="font-bold text-white flex items-center gap-1.5 mb-1">
                  <font-awesome-icon
                    icon="fa-solid fa-building"
                    class="text-javida-highlight text-[10px]"
                  />
                  <span>Oficinas Centrales:</span>
                </p>
                <p>
                  Calle Sindicato de Agricultura 301-B, Col. Adolfo López
                  Mateos, C.P. 86040, Villahermosa, Tabasco.
                </p>
              </div>

              <!-- Bodega Tabasco -->
              <div>
                <p class="font-bold text-white flex items-center gap-1.5 mb-1">
                  <font-awesome-icon
                    icon="fa-solid fa-warehouse"
                    class="text-javida-highlight text-[10px]"
                  />
                  <span>Bodega Operativa:</span>
                </p>
                <p>
                  Carr. Federal Villahermosa - Cárdenas, R/A González 1ra.
                  Secc., C.P. 86280, Centro, Tabasco.
                </p>
              </div>

              <!-- Sede Norte -->
              <div>
                <p class="font-bold text-white flex items-center gap-1.5 mb-1">
                  <font-awesome-icon
                    icon="fa-solid fa-location-dot"
                    class="text-javida-highlight text-[10px]"
                  />
                  <span>Sede Norte:</span>
                </p>
                <p>Zona Metropolitana de Monterrey, Nuevo León.</p>
              </div>
            </div>
          </div>

          <!-- Columna 3: Contacto Directo (lg:col-span-3) -->
          <div class="lg:col-span-3">
            <h4
              class="text-xs font-bold uppercase tracking-wider text-javida-highlight mb-4"
            >
              Atención Inmediata
            </h4>
            <ul class="space-y-3 text-xs text-slate-400">
              <!-- Teléfonos -->
              <li>
                <span class="font-bold text-white block mb-0.5"
                  >Líneas Telefónicas:</span
                >
                <div class="flex flex-col gap-1">
                  <a
                    href="tel:9932789583"
                    class="hover:text-javida-highlight transition-colors flex items-center"
                  >
                    <span class="mr-1">993-286-0921</span>
                    <span class="text-[10px] text-slate-500 font-medium">
                      (Sur)</span
                    >
                  </a>
                  <a
                    href="tel:8126002858"
                    class="hover:text-javida-highlight transition-colors flex items-center"
                  >
                    <span class="mr-1">812-600-2858</span>
                    <span class="text-[10px] text-slate-500 font-medium">
                      (Norte)</span
                    >
                  </a>
                </div>
              </li>

              <!-- Correos -->
              <li class="pt-1">
                <span class="font-bold text-white block mb-0.5"
                  >Ventas y Cotizaciones:</span
                >
                <div class="flex flex-col gap-1">
                  <a
                    href="mailto:ventas@javida.com.mx"
                    class="hover:text-javida-highlight transition-colors break-all"
                  >
                    ventas@javida.com.mx
                    <span class="text-[10px] text-slate-500 font-medium"
                      >(Sur)</span
                    >
                  </a>
                  <a
                    href="mailto:ventasmty@javida.com.mx"
                    class="hover:text-javida-highlight transition-colors break-all"
                  >
                    ventasmty@javida.com.mx
                    <span class="text-[10px] text-slate-500 font-medium"
                      >(Norte)</span
                    >
                  </a>
                </div>
              </li>

              <!-- Horario -->
              <li class="pt-2 border-t border-slate-800">
                <span class="text-slate-400 flex items-center gap-1.5">
                  <font-awesome-icon
                    icon="fa-solid fa-clock"
                    class="text-javida-highlight text-[10px]"
                  />
                  <span>Lun a Vie: 9:00 AM - 5:00 PM</span>
                </span>
              </li>
            </ul>
          </div>

          <!-- Columna 4: Navegación (lg:col-span-2) -->
          <div class="lg:col-span-2">
            <h4
              class="text-xs font-bold uppercase tracking-wider text-javida-highlight mb-4"
            >
              Páginas
            </h4>
            <ul class="space-y-2.5 text-xs text-slate-400">
              <li v-for="link in navLinks" :key="link.name">
                <RouterLink
                  :to="link.to"
                  class="hover:text-white transition-colors block py-0.5"
                >
                  {{ link.name }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Barra Inferior de Copyright -->
        <div
          class="border-t border-slate-800/80 pt-6 text-center text-xs text-slate-500"
        >
          <p>© 2026 Grupo Javida. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

import logoJavida from "../assets/images/grupo-javida.webp";

const menuOpen = ref(false);

const navLinks = [
  { name: "Inicio", to: "/" },
  { name: "Servicios", to: "/servicios" },
  { name: "Nosotros", to: "/nosotros" },
  { name: "Clientes", to: "/clientes" },
  { name: "Contacto", to: "/contacto" },
];
</script>
