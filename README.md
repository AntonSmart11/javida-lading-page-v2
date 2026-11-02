# Grupo Javida — Plataforma Web Corporativa

Sitio web corporativo y catálogo técnico de servicios industriales para **Grupo Javida**, desarrollado con **Vue 3**, **Vite** y **Tailwind CSS**.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Vue 3](https://vuejs.org/) (Composition API con `<script setup>`)
- **Empaquetador & Dev Server:** [Vite](https://vitejs.dev/)
- **Enrutamiento:** [Vue Router 4](https://router.vuejs.org/) (modo `createWebHistory`)
- **Estilos:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Iconografía:** [Font Awesome](https://fontawesome.com/)
- **Seguridad & Backend:** Google reCAPTCHA v2 y endpoint PHP (`sendEmail.php`)

---

## 📁 Estructura del Proyecto

```text
javida-web/
├── public/
│   ├── .htaccess             # Reglas mod_rewrite para navegación en Apache / cPanel
│   ├── favicon.png           # Icono de pestaña
│   ├── robots.txt            # Reglas de rastreo para motores de búsqueda
│   └── sitemap.xml           # Mapa del sitio optimizado para indexación
├── src/
│   ├── assets/
│   │   └── images/           # Logotipos, clientes y fotografías técnicas (.webp)
│   ├── components/           # Componentes reutilizables (Footer, Navbar, etc.)
│   ├── data/
│   │   └── services.js       # Fuente única de datos para los 8 servicios
│   ├── layouts/
│   │   └── MainLayout.vue    # Plantilla envolvente (Navbar interactivo + Footer)
│   ├── router/
│   │   └── index.js          # Definición de rutas y actualización dinámica de SEO
│   ├── views/
│   │   ├── HomeView.vue          # Portada principal corporativa
│   │   ├── ServicesView.vue      # Catálogo general de servicios
│   │   ├── ServiceDetailView.vue # Vista dinámica por servicio (/servicios/:slug)
│   │   ├── AboutView.vue         # Filosofía, cobertura y Política Integral
│   │   ├── ClientsView.vue       # Portafolio de clientes e historial operativo
│   │   └── ContactView.vue       # Formulario con validación y reCAPTCHA
│   ├── App.vue               # Componente raíz
│   ├── main.js               # Inicialización de Vue, plugins y Font Awesome
│   └── style.css             # Directivas base de Tailwind CSS
├── .env                      # Variables de entorno locales (NO versionar)
├── .env.example              # Plantilla pública de variables requeridas
├── index.html                # Entrada HTML, metadatos y Schema.org JSON-LD
├── package.json
└── vite.config.js
```
