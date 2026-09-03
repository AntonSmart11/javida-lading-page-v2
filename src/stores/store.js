import { ref } from "vue";

export const services = ref([
  {
    id: 1,
    img: "mantenimiento.webp",
    alt: "Servicio de mantenimiento a válvulas",
    icon: "fa-solid fa-toolbox",
    title: "Mantenimiento Industrial",
    text: "Aplicamos procedimientos de mantenimiento para prevenir fallos, mejorar la operatividad y cumplir con normativas de seguridad en la industria de hidrocarburos.",
    code: "mantenimiento",
    bullets: [
      "El mantenimiento regular es crucial para garantizar la seguridad operativa, optimizar la eficiencia de los procesos y proteger el medio ambiente.",
      "Se realiza mantenimiento a actuadores mecánicos de las válvulas de seccionamiento, lo cuál asegura su correcto funcionamiento, lo que es vital para las acciones operativas en las líneas de proceso.",
      "Un mantenimiento adecuado reduce los costos a largo plazo al extender la vida útil de los equipos y minimizar las paradas de producción.",
    ],
  },
  {
    id: 2,
    img: "pruebas.webp",
    alt: "Servicio de pruebas hidrostáticas",
    icon: "fa-solid fa-gauge",
    title: "Pruebas Hidrostáticas",
    text: "Evaluamos la integridad de equipos sometidos a presión, detectando fugas o fallas estructurales para asegurar su correcto desempeño y prolongar su vida útil.",
    code: "pruebas",
    bullets: [
      "Las pruebas hidrostáticas aseguran la hermeticidad y la integridad estructural de ductos y sistemas de tuberías de transporte. Esto es crucial para verificar que puedan soportar las presiones internas de operación sin fugas, previniendo incidentes y garantizando un transporte seguro.",
      "Estas pruebas permiten identificar fugas en válvulas de diversos tipos, revelando posibles defectos en la materia prima. El objetivo es garantizar la operatividad segura y eficiente de las válvulas durante su servicio, evitando problemas futuros.",
      "Las pruebas hidrostáticas son fundamentales para confirmar su capacidad de contención y resistencia a la presión interna, asegurando su correcto funcionamiento en los procesos de separación de hidrocarburos.",
    ],
  },
  {
    id: 3,
    img: "torque.webp",
    alt: "Servicio de torqueo",
    icon: "fa-solid fa-wrench",
    title: "Torque Controlado",
    text: "Aplicamos torque controlado a los pernos de las bridas para garantizar un sellado adecuado y evitar fugas en sistemas de tuberías.",
    code: "torque",
    bullets: [
      "Se aplica fuerza rotacional a los pernos de una conexión bridada, comprimiendo la empaquetadura (junta) entre las bridas.",
      "Garantizamos una unión mecánica fuerte y hermética, esencial para prevenir fugas de fluidos o gases en sistemas industriales (tuberías, recipientes a presión, etc.) y asegurar la integridad de la conexión durante la operación.",
    ],
  },
]);

export const imagesClients = ref([
  {
    src: "/src/assets/images/clients/arendal.webp",
    alt: "Arendal",
  },
  {
    src: "/src/assets/images/clients/ccyes.webp",
    alt: "CCYES",
  },
  {
    src: "/src/assets/images/clients/comursa.webp",
    alt: "Comursa",
  },
  {
    src: "/src/assets/images/clients/diavaz.webp",
    alt: "Diavaz",
  },
  {
    src: "/src/assets/images/clients/duratec.webp",
    alt: "Duratec",
  },
  {
    src: "/src/assets/images/clients/exaiom.webp",
    alt: "Exaiom",
  },
  {
    src: "/src/assets/images/clients/flv.webp",
    alt: "FLV",
  },
  {
    src: "/src/assets/images/clients/ga.webp",
    alt: "Exaiom",
  },
  {
    src: "/src/assets/images/clients/grupo_carso.webp",
    alt: "Grupo Carso",
  },
  {
    src: "/src/assets/images/clients/indheca.webp",
    alt: "Indheca",
  },
  {
    src: "/src/assets/images/clients/jm_corporativo.webp",
    alt: "JS Corporativo",
  },
  {
    src: "/src/assets/images/clients/mayurse.webp",
    alt: "Mayurse",
  },
  {
    src: "/src/assets/images/clients/measures_solutions.webp",
    alt: "Measures Solutions",
  },
  {
    src: "/src/assets/images/clients/pimex.webp",
    alt: "Pimex",
  },
  {
    src: "/src/assets/images/clients/r&o.webp",
    alt: "R&O",
  },
  {
    src: "/src/assets/images/clients/semat.webp",
    alt: "Semat",
  },
  {
    src: "/src/assets/images/clients/servipetrol.webp",
    alt: "Servi Petrol",
  },
  {
    src: "/src/assets/images/clients/techcorr.webp",
    alt: "Techcorr",
  },
]);
