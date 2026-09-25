import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicesView from "../views/ServicesView.vue";
import ServiceDetailView from "../views/ServiceDetailView.vue";
import AboutView from "../views/AboutView.vue";
import ClientsView from "../views/ClientsView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title:
        "Grupo Javida | Pruebas de Hermeticidad, Torque y Mantenimiento de Válvulas",
      description:
        "Soluciones integrales para la industria: pruebas de presión hidrostáticas y neumáticas, torque controlado, corte en frío y spools de tubería.",
    },
  },
  {
    path: "/servicios",
    name: "servicios",
    component: ServicesView,
    meta: {
      title:
        "Servicios Industriales | Hermeticidad, Válvulas, Torque y Spools | Grupo Javida",
      description:
        "Catálogo especializado de servicios técnicos: mantenimiento a válvulas, torque calibrado, corte en frío, corridas de diablos y fabricación de spools.",
    },
  },
  {
    path: "/servicios/:slug",
    name: "servicio-detalle",
    component: ServiceDetailView,
  },
  {
    path: "/nosotros",
    name: "nosotros",
    component: AboutView,
    meta: {
      title: "Sobre Nosotros | Grupo Javida",
      description:
        "Conoce la trayectoria de Grupo Javida, nuestra infraestructura operativa, rigor normativo y compromiso de cero fugas en el sector industrial.",
    },
  },
  {
    path: "/clientes",
    name: "clientes",
    component: ClientsView,
    meta: {
      title: "Empresas que Confían en Nosotros | Grupo Javida",
      description:
        "Respaldo operativo comprobado en proyectos de alta criticidad para empresas e instituciones líderes del sector industrial y energético.",
    },
  },
  {
    path: "/contacto",
    name: "contacto",
    component: ContactView,
    meta: {
      title:
        "Contacto y Cotizaciones | Sedes Villahermosa y Monterrey | Grupo Javida",
      description:
        "Solicita cotización técnica directa. Oficinas y bodegas operativas en Tabasco y Nuevo León con cobertura de servicios en todo México.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return { top: 0, behavior: "smooth" };
  },
});

router.afterEach((to) => {
  // Actualizar el título de la pestaña
  document.title =
    to.meta.title || "Grupo Javida | Servicios Integrales para la Industria";

  // Actualizar la meta descripción dinámica para SEO
  const descriptionElement = document.querySelector('meta[name="description"]');
  if (descriptionElement && to.meta.description) {
    descriptionElement.setAttribute("content", to.meta.description);
  }
});

export default router;
