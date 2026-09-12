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
      principal: new URL(
        "../assets/images/services/mantenimiento/servicio_mantenimiento_1.webp",
        import.meta.url,
      ).href,
      thumb1: new URL(
        "../assets/images/services/mantenimiento/servicio_mantenimiento_2.webp",
        import.meta.url,
      ).href,
      thumb2: new URL(
        "../assets/images/services/mantenimiento/servicio_mantenimiento_3.webp",
        import.meta.url,
      ).href,
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
      principal: new URL(
        "../assets/images/services/pruebas/servicio_prueba_1.webp",
        import.meta.url,
      ).href,
      thumb1: new URL(
        "../assets/images/services/pruebas/servicio_prueba_2.webp",
        import.meta.url,
      ).href,
      thumb2: new URL(
        "../assets/images/services/pruebas/servicio_prueba_3.webp",
        import.meta.url,
      ).href,
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
      principal: new URL(
        "../assets/images/services/torque/servicio_torque_1.webp",
        import.meta.url,
      ).href,
      thumb1: new URL(
        "../assets/images/services/torque/servicio_torque_2.webp",
        import.meta.url,
      ).href,
      thumb2: new URL(
        "../assets/images/services/torque/servicio_torque_3.webp",
        import.meta.url,
      ).href,
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
    imgHome: new URL("../assets/images/spool.webp", import.meta.url).href,
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
      principal: new URL(
        "../assets/images/services/spools/servicio_spool_1.webp",
        import.meta.url,
      ).href,
      thumb1: new URL(
        "../assets/images/services/spools/servicio_spool_2.webp",
        import.meta.url,
      ).href,
      thumb2: new URL(
        "../assets/images/services/spools/servicio_spool_3.webp",
        import.meta.url,
      ).href,
      alt: "Fabricación e instalación de spools de tubería industrial",
    },
  },
  {
    id: "corte-frio",
    badge: "Intervención Segura",
    iconBadge: "fa-solid fa-snowflake",
    titulo: "Corte en Frío y Biselado de Tuberías",
    homeTitle: "Corte en Frío",
    descripcionCorta:
      "Corte mecánico y biselado simultáneo de tuberías sin generación de chispa ni alteración térmica en zonas clasificadas.",
    imgHome: new URL("../assets/images/corte-frio.webp", import.meta.url).href,
    enlace: "/servicios#corte-frio",
    lead: "Seccionamiento mecánico y preparación de extremos para soldadura mediante equipos neumáticos o hidráulicos portátiles, garantizando áreas de trabajo seguras en atmósferas explosivas sin aporte térmico.",
    specs: [
      {
        negrita: "Cero zonas afectadas por calor (HAZ):",
        texto:
          "Proceso 100% mecánico que preserva las propiedades metalúrgicas del acero sin deformaciones ni endurecimiento.",
      },
      {
        negrita: "Operación en áreas clasificadas:",
        texto:
          "Técnica libre de flama y chispa que minimiza riesgos en plantas químicas, refinerías y líneas con remanentes de hidrocarburo.",
      },
      {
        negrita: "Corte y biselado simultáneo:",
        texto:
          "Geometrías de bisel precisas (V, J o compuesto) listas para ensamble inmediato de soldadura o instalación de spools.",
      },
    ],
    galeria: {
      principal: new URL(
        "../assets/images/services/corte-frio/servicio_corte_frio_1.webp",
        import.meta.url,
      ).href,
      thumb1: new URL(
        "../assets/images/services/corte-frio/servicio_corte_frio_2.webp",
        import.meta.url,
      ).href,
      thumb2: new URL(
        "../assets/images/services/corte-frio/servicio_corte_frio_3.webp",
        import.meta.url,
      ).href,
      alt: "Equipo de corte en frío y biselado portátil en tubería de proceso",
    },
  },
  {
    id: "diablos-ductos",
    badge: "Integridad de Ductos",
    iconBadge: "fa-solid fa-arrows-split-up-and-left",
    titulo: "Corridas de Diablos y Mantenimiento a Trampas",
    homeTitle: "Corridas y Trampas de Diablos",
    descripcionCorta:
      "Lanzamiento, recepción y corridas de diablos de limpieza e inspección, junto al mantenimiento integral de trampas lanzadoras y receptoras.",
    imgHome: new URL("../assets/images/diablos.webp", import.meta.url).href,
    enlace: "/servicios#diablos-ductos",
    lead: "Servicio especializado de limpieza mecánica, desalojo de fluidos e inspección de líneas de transporte mediante corridas de diablos (pigs), complementado con el mantenimiento preventivo y correctivo de trampas lanzadoras y receptoras.",
    specs: [
      {
        negrita: "Corridas operativas de limpieza:",
        texto:
          "Desalojo de condensados, parafinas, sedimentos y preparación de líneas para pruebas hidrostáticas o inspección geométrica.",
      },
      {
        negrita: "Mantenimiento a trampas de diablos:",
        texto:
          "Inspección y reacondicionamiento de cierres rápidos (quick-opening closures), sellos, empaques, válvulas de ecualización e indicadores de paso.",
      },
      {
        negrita: "Monitoreo y rastreo seguro:",
        texto:
          "Control y seguimiento de corrida en puntos clave del ducto para asegurar la llegada y extracción segura de la herramienta.",
      },
    ],
    galeria: {
      principal: new URL(
        "../assets/images/services/diablos/servicio_diablo_1.webp",
        import.meta.url,
      ).href,
      thumb1: new URL(
        "../assets/images/services/diablos/servicio_diablo_2.webp",
        import.meta.url,
      ).href,
      thumb2: new URL(
        "../assets/images/services/diablos/servicio_diablo_3.webp",
        import.meta.url,
      ).href,
      alt: "Operación de corridas de diablos y mantenimiento a trampas de envío y recibo",
    },
  },
];
