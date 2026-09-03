<template>
  <div class="min-h-screen flex flex-col bg-white text-javida-text">
    <!-- Navbar / Header Común -->
    <header
      class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-javida-border shadow-xs"
    >
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
      >
        <RouterLink href="/" class="flex items-center gap-3">
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

        <div class="hidden md:flex items-center">
          <RouterLink
            :to="{ path: '/contacto' }"
            class="bg-javida-accent hover:bg-javida-accent-hover text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-sm"
          >
            Solicitar Cotización
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="ml-2" />
          </RouterLink>
        </div>

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
        <a
          href="/#contacto"
          class="block text-javida-accent font-semibold pt-2"
          @click="menuOpen = false"
        >
          Solicitar Cotización
        </a>
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
            <RouterLink to="/" class="mb-3 block">
              <img
                :src="logoJavida"
                alt="Grupo Javida"
                class="h-17 w-auto object-contain brightness-150"
              />
            </RouterLink>
          </div>

          <!-- Columna 2: Dirección (lg:col-span-3) -->
          <div class="lg:col-span-3">
            <h4
              class="text-xs font-bold uppercase tracking-wider text-javida-highlight mb-4"
            >
              Dirección
            </h4>
            <p class="font-bold text-white mb-1">Oficina</p>
            <p class="text-slate-400 text-xs leading-relaxed">
              Calle Sindicato De Agricultura 301-B,<br />
              Col. Adolfo López Mateos, C.P. 86040<br />
              Villahermosa, Tab.
            </p>
          </div>

          <!-- Columna 3: Contacto (lg:col-span-3) -->
          <div class="lg:col-span-3">
            <h4
              class="text-xs font-bold uppercase tracking-wider text-javida-highlight mb-4"
            >
              Contacto
            </h4>
            <ul class="space-y-2 text-xs text-slate-400">
              <li>
                <span class="font-bold text-white">Cel.</span>
                <a
                  href="tel:8126002858"
                  class="hover:text-javida-highlight transition-colors ml-1"
                >
                  812-600-2858
                </a>
              </li>
              <li>
                <span class="font-bold text-white">Cel.</span>
                <a
                  href="tel:9932789583"
                  class="hover:text-javida-highlight transition-colors ml-1"
                >
                  993-278-9583
                </a>
              </li>
              <li class="pt-1">
                <span class="font-bold text-white">Email:</span>
                <a
                  href="mailto:ventas@javida.com.mx"
                  class="hover:text-javida-highlight transition-colors ml-1"
                >
                  ventas@javida.com.mx
                </a>
              </li>
            </ul>
          </div>

          <!-- Columna 4: Páginas (lg:col-span-3) -->
          <div class="lg:col-span-3">
            <h4
              class="text-xs font-bold uppercase tracking-wider text-javida-highlight mb-4"
            >
              Páginas
            </h4>
            <ul class="space-y-2.5 text-xs text-slate-400">
              <li v-for="link in navLinks" :key="link.name">
                <RouterLink
                  :to="link.to"
                  class="hover:text-white transition-colors"
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
          <p>© 2026 Javida. Todos los derechos reservados.</p>
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
