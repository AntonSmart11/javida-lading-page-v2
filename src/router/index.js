import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicesView from "../views/ServicesView.vue";
import AboutView from "../views/AboutView.vue";
import ClientsView from "../views/ClientsView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Grupo Javida | Servicios Industriales y Torque Controlado",
    },
  },
  {
    path: "/servicios",
    name: "servicios",
    component: ServicesView,
    meta: {
      title: "Servicios Industriales y Torque Controlado | Grupo Javida",
    },
  },
  {
    path: "/nosotros",
    name: "nosotros",
    component: AboutView,
    meta: {
      title: "Sobre Nosotros y Política Integral | Grupo Javida",
    },
  },
  {
    path: "/clientes",
    name: "clientes",
    component: ClientsView,
    meta: {
      title: "Nuestros Clientes y Alianzas | Grupo Javida",
    },
  },
  {
    path: "/contacto",
    name: "contacto",
    component: ContactView,
    meta: {
      title: "Contáctanos y Cotizaciones | Grupo Javida",
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
  const defaultTitle = "Grupo Javida | Soluciones para la Industria Energética";
  document.title = to.meta.title || defaultTitle;
});

export default router;
