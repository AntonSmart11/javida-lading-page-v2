// src/data/services.js

export const SERVICIOS_EMPRESA = [
  {
    id: "mantenimiento",
    badge: "División de Mantenimiento",
    iconBadge: "fa-solid fa-toolbox",
    titulo: "Mantenimiento Industrial y Válvulas",
    homeTitle: "Mantenimiento industrial",
    descripcionCorta:
      "Procedimientos preventivos y correctivos para optimizar la operatividad de equipos y cumplir con las normativas del sector.",
    imgHome: new URL("../assets/images/mantenimiento.webp", import.meta.url)
      .href,
    enlace: "/servicios#mantenimiento",
    lead: "Intervención operativa orientada a garantizar la continuidad del proceso, mitigar desgastes mecánicos y preservar la vida útil de los componentes de conducción de fluidos.",
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
    id: "hermeticidad",
    badge: "Integridad y Presión",
    iconBadge: "fa-solid fa-gauge-high",
    titulo: "Pruebas de Hermeticidad",
    homeTitle: "Pruebas de Hermeticidad",
    descripcionCorta:
      "Evaluación rigurosa de integridad y estanqueidad mediante pruebas hidrostáticas, neumáticas y de contención en sistemas sometidos a presión.",
    imgHome: new URL("../assets/images/pruebas.webp", import.meta.url).href,
    enlace: "/servicios#hermeticidad",
    lead: "Evaluación rigurosa de estanqueidad y resistencia mecánica en sistemas de tuberías, recipientes a presión y válvulas, empleando métodos hidrostáticos y neumáticos certificados.",
    specs: [
      {
        negrita: "Métodos hidrostáticos y neumáticos:",
        texto:
          "Comprobación de resistencia estructural y estanqueidad con agua o aire inertes según la especificación del sistema.",
      },
      {
        negrita: "Detección oportuna de microfugas:",
        texto:
          "Identificación preventiva de pérdidas de presión en sellos, uniones bridadas, soldaduras y cuerpos de válvulas.",
      },
      {
        negrita: "Cumplimiento de estándares:",
        texto:
          "Apego estricto a las normas de seguridad para líneas de separación y transporte de fluidos e hidrocarburos.",
      },
    ],
    galeria: {
      principal: "/src/assets/images/services/pruebas/servicio_prueba_1.webp",
      thumb1: "/src/assets/images/services/pruebas/servicio_prueba_2.webp",
      thumb2: "/src/assets/images/services/pruebas/servicio_prueba_3.webp",
      alt: "Equipos y manómetros para pruebas de presión",
    },
  },
  {
    id: "torques",
    badge: "Uniones Mecánicas",
    iconBadge: "fa-solid fa-wrench",
    titulo: "Torque Controlado",
    homeTitle: "Torque Controlado",
    descripcionCorta:
      "Apriete calibrado y preciso de uniones bridadas para asegurar sellado total y prevenir cualquier fallo de contención.",
    imgHome: new URL("../assets/images/torque.webp", import.meta.url).href,
    enlace: "/servicios#torques",
    lead: "Aplicación calibrada de torque mediante equipos hidráulicos o mecánicos en uniones bridadas, asegurando la compresión homogénea de juntas para evitar cualquier riesgo de escape o fuga.",
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
  {
    id: "spools",
    badge: "Fabricación y Montaje",
    iconBadge: "fa-solid fa-diagram-project",
    titulo: "Fabricación e Instalación de Spools",
    homeTitle: "Fabricación de Spools",
    descripcionCorta:
      "Habilitado, corte, soldadura calificada y montaje en sitio de carretes de tubería con ajuste dimensional milimétrico.",
    imgHome: new URL("../assets/images/spools.webp", import.meta.url).href,
    enlace: "/servicios#spools",
    lead: "Prefabricación en taller y montaje en campo de tramos de tubería con soldadura calificada y ajuste milimétrico, garantizando un acoplamiento perfecto libre de esfuerzos residuales.",
    specs: [
      {
        negrita: "Soldadura calificada bajo norma:",
        texto:
          "Procedimientos WPS certificados para tuberías de acero al carbón, aleados e inoxidables.",
      },
      {
        negrita: "Alineación y ensamble de precisión:",
        texto:
          "Tolerancias estrictas de cabeceo y paralelismo en bridas para evitar tensiones mecánicas.",
      },
      {
        negrita: "Inspección y pruebas integradas:",
        texto:
          "Verificación por ensayos no destructivos (END), trazabilidad documental y pruebas de hermeticidad previas a la puesta en marcha.",
      },
    ],
    galeria: {
      principal: "/src/assets/images/services/spools/servicio_spool_1.webp",
      thumb1: "/src/assets/images/services/spools/servicio_spool_2.webp",
      thumb2: "/src/assets/images/services/spools/servicio_spool_3.webp",
      alt: "Fabricación e instalación de spools de tubería industrial",
    },
  },
];
