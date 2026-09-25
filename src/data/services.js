// src/data/services.js

export const SERVICIOS_EMPRESA = [
  {
    id: "mantenimiento",
    badge: "División de Mantenimiento",
    iconBadge: "fa-solid fa-toolbox",
    titulo: "Mantenimiento de Válvulas",
    homeTitle: "Mantenimiento de Válvulas",
    descripcionCorta:
      "Procedimientos preventivos y correctivos para optimizar la operatividad de equipos y cumplir con las normativas del sector.",
    descripcionLarga:
      "Servicio de inspección, mantenimiento preventivo y correctivo para válvulas industriales de compuerta, bola, retención y macho. Realizamos desensamble seguro en campo o taller, limpieza general de componentes mecánicos, cambio de empaquetaduras y sellos desgastados, lubricación especializada y verificación de apertura y cierre suave, asegurando la contención del flujo y la vida útil del equipo.",
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
    aplicaciones: [
      "Válvulas de corte y seccionamiento en ductos de transporte y recolección",
      "Válvulas de paro por emergencia (SDV / ESDV) y control de flujo",
      "Cabezales de pozos, baterías de separación y patines de medición",
      "Sistemas de agua de inyección, contra incendio, vapor y servicios auxiliares",
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
      alt: "Mantenimiento de válvulas",
    },
  },
  {
    id: "hidrostatica",
    badge: "Integridad y Alta Presión",
    iconBadge: "fa-solid fa-droplet",
    titulo: "Pruebas Hidrostáticas",
    homeTitle: "Pruebas Hidrostáticas",
    descripcionCorta:
      "Evaluación de resistencia mecánica y estanqueidad estructural mediante presurización controlada con agua conforme a normas ASME y API.",
    descripcionLarga:
      "Evaluación de resistencia física y ausencia de fugas en tuberías, recipientes o líneas de proceso mediante presurización controlada con agua. El proceso abarca el llenado de la línea purgando el aire para trabajar con seguridad, incremento paulatino de presión hasta el valor solicitado por el cliente, sostenimiento del tiempo acordado e inspección de uniones y soldaduras con registro de manómetros calibrados",
    enlace: "/servicios#hidrostatica",
    lead: "Comprobación de integridad estructural y hermeticidad en líneas de proceso, ductos y recipientes a presión mediante fluidos incompresibles certificados con registro gráfico continuo.",
    specs: [
      {
        negrita: "Resistencia mecánica estructural:",
        texto:
          "Presurización rigurosa para verificar la solidez de cordones de soldadura, bridas y componentes de contención.",
      },
      {
        negrita: "Monitoreo con carta manométrica:",
        texto:
          "Registro continuo de presión y temperatura mediante manógrafos y transmisores electrónicos calibrados.",
      },
      {
        negrita: "Apego normativo estricto:",
        texto:
          "Procedimientos ejecutados bajo códigos ASME B31.3, ASME B31.8, ASME Sec. VIII y API 598.",
      },
    ],
    aplicaciones: [
      "Ductos de transporte, líneas de recolección y flujo de hidrocarburos",
      "Recipientes a presión, separadores trifásicos y tanques de amortiguamiento",
      "Carretes de tubería prefabricados (spools) y cabezales de distribución (manifolds)",
      "Redes de agua contraincendio, enfriamiento y vapor de alta presión",
    ],
    galeria: {
      principal: new URL(
        "../assets/images/services/hidrostatica/pruebas_hidrostaticas.webp",
        import.meta.url,
      ).href,
      thumb1: new URL(
        "../assets/images/services/hidrostatica/pruebas_hidrostaticas.webp",
        import.meta.url,
      ).href,
      thumb2: new URL(
        "../assets/images/services/hidrostatica/pruebas_hidrostaticas.webp",
        import.meta.url,
      ).href,
      alt: "Equipos y bombas de alta presión para pruebas hidrostáticas",
    },
  },
  {
    id: "neumatica",
    badge: "Estanqueidad con Gas Inerte",
    iconBadge: "fa-solid fa-wind",
    titulo: "Pruebas Neumáticas",
    homeTitle: "Pruebas Neumáticas",
    enlace: "/servicios#neumatica",
    lead: "Verificación de hermeticidad en circuitos de instrumentación, líneas de gas y sistemas limpios mediante presurización gradual con aire o nitrógeno, priorizando protocolos de seguridad para fluidos compresibles.",
    descripcionCorta:
      "Detección de fugas y verificación de sello en sistemas donde no es viable el uso de líquidos, empleando aire seco o nitrógeno.",
    descripcionLarga:
      "Verificación de hermeticidad en tuberías, bridas y circuitos donde el agua no puede utilizarse debido a riesgos de corrosión o presencia de humedad. El sistema se presuriza de manera gradual con aire seco o nitrógeno a presiones seguras, aplicando soluciones detectoras en soldaduras y uniones para constatar que no existan microfugas.",
    specs: [
      {
        negrita: "Inspección sin contaminación húmeda:",
        texto:
          "Método idóneo para líneas criogénicas, ductos de gas seco y sistemas que no toleran trazas de humedad residual.",
      },
      {
        negrita: "Detección directa de microfugas:",
        texto:
          "Localización de puntos de escape en uniones bridadas, sellos y roscas mediante soluciones detectoras y trazadores.",
      },
      {
        negrita: "Protocolo de presurización escalonada:",
        texto:
          "Incrementos paulatinos con periodos de estabilización para mitigar la energía almacenada por el gas.",
      },
    ],
    aplicaciones: [
      "Líneas de gas combustible, gas seco de proceso y redes criogénicas",
      "Sistemas de instrumentación, tubing de control y aire de instrumentos",
      "Circuitos de proceso sensibles a la humedad, hidrocarburos refinados o catalizadores",
      "Pruebas de baja presión a asientos de válvulas y sellos de cabezales",
    ],
    galeria: {
      principal: new URL(
        "../assets/images/services/neumaticas/pruebas_neumaticas.webp",
        import.meta.url,
      ).href,
      thumb1: new URL(
        "../assets/images/services/neumaticas/pruebas_neumaticas.webp",
        import.meta.url,
      ).href,
      thumb2: new URL(
        "../assets/images/services/neumaticas/pruebas_neumaticas.webp",
        import.meta.url,
      ).href,
      alt: "Pruebas neumáticas con nitrógeno y manómetros certificados",
    },
  },
  {
    id: "vacio",
    badge: "Inspección de Fondos y Uniones",
    iconBadge: "fa-solid fa-gauge-simple",
    titulo: "Pruebas de Vacío",
    homeTitle: "Pruebas de Vacío",
    descripcionCorta:
      "Detección de discontinuidades pasantes en soldaduras de fondo de tanques y recipientes mediante presión diferencial negativa.",
    descripcionLarga:
      "Inspección para verificar la integridad de cordones de soldadura en fondos de tanques de almacenamiento y uniones donde solo se tiene acceso por una cara. Se aplica solución espumante sobre la soldadura y se asienta una caja de vacío con visor acrílico; al generar succión con una bomba o eyector, cualquier poro o fisura se hace visible al instante por la formación de burbujas continuas.",
    enlace: "/servicios#vacio",
    lead: "Evaluación no destructiva de soldaduras planas y en ángulo mediante cajas de vacío e inducción de presión negativa, identificando porosidades y microfisuras que comprometan la estanqueidad.",
    specs: [
      {
        negrita: "Inspección de fondos de tanques de almacenamiento:",
        texto:
          "Cumplimiento con estándar API 650 / API 653 en placas de fondo y uniones anulares sin necesidad de presurizar todo el tanque.",
      },
      {
        negrita: "Detección visual inmediata:",
        texto:
          "Identificación in situ de microfugas pasantes mediante formación continua de burbujas en solución espumante.",
      },
      {
        negrita: "Equipos adaptables a la geometría:",
        texto:
          "Cajas de vacío planas y esquineras con sellos elastoméricos de alta succión y vacuómetros calibrados.",
      },
    ],
    aplicaciones: [
      "Soldaduras de traslape y a tope en placas de fondo de tanques de almacenamiento (crudo, agua y refinados)",
      "Soldaduras de ángulo entre placa anular de fondo y el primer anillo de la envolvente",
      "Membranas y techos flotantes internos o externos en recipientes industriales",
      "Inspección post-reparación o reemplazo de placas metálicas en tanques en servicio",
    ],
    galeria: {
      principal: new URL(
        "../assets/images/services/vacio/pruebas_vacio.webp",
        import.meta.url,
      ).href,
      thumb1: new URL(
        "../assets/images/services/vacio/pruebas_vacio.webp",
        import.meta.url,
      ).href,
      thumb2: new URL(
        "../assets/images/services/vacio/pruebas_vacio.webp",
        import.meta.url,
      ).href,
      alt: "Caja de vacío para inspección de soldadura en tanques",
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
    descripcionLarga:
      "Servicio de apriete técnico de tornillería en uniones bridadas mediante llaves de torque mecánicas e hidráulicas calibradas. Se realiza bajo un patrón de apriete cruzado (en estrella) por etapas sucesivas, logrando que el empaque o junta se comprima de forma uniforme en toda la circunferencia, lo que evita deformaciones de brida y elimina fugas en juntas de proceso.",
    enlace: "/servicios#torques",
    lead: "Aplicación calibrada de torque mediante equipos hidráulicos o mecánicos en uniones bridadas, asegurando la compresión homogénea de juntas para evitar cualquier riesgo de escape o fuga.",
    aplicaciones: [
      "Bridas de proceso en recipientes sujetos a presión, reactores e intercambiadores de calor",
      "Interconexión de válvulas de seccionamiento, retención y paro de emergencia en ductos",
      "Cabezales de producción, múltiples de recolección y líneas de alta presión",
      "Cierres de tapas de registros de inspección (manholes) y conexiones de bombas de proceso",
    ],
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
    layoutGaleria: "vertical",
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
    descripcionLarga:
      "Fabricación en taller y montaje en campo de carretes de tubería (spools) conforme a medidas de campo o planos isométricos. El servicio incluye corte, preparación de extremos, alineación de bridas y accesorios, soldadura con personal calificado y colocación final en el sitio de la obra, cuidando que el tramo encaje de forma libre sin forzar las líneas existentes.",
    enlace: "/servicios#spools",
    lead: "Prefabricación en taller y montaje en campo de tramos de tubería con soldadura calificada y ajuste milimétrico, garantizando un acoplamiento perfecto libre de esfuerzos residuales.",
    aplicaciones: [
      "Interconexiones mecánicas (tie-ins) y ampliaciones en baterías y refinerías",
      "Líneas de succión y descarga para compresores, turbinas y sistemas de bombeo",
      "Cabezales de distribución (manifolds) y patines de medición o regulación",
      "Sustitución de tramos de tubería con pérdida de espesor durante paros de planta programados",
    ],
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
    titulo: "Corte en Frío",
    homeTitle: "Corte en Frío",
    descripcionCorta:
      "Corte mecánico y biselado simultáneo de tuberías sin generación de chispa ni alteración térmica en zonas clasificadas.",
    descripcionLarga:
      "Corte mecánico de tuberías mediante cortadoras portátiles de marco dividido accionadas de forma neumática o hidráulica. Al ser un proceso en frío que no genera chispas ni fuego, permite intervenir líneas en plantas activas o tuberías que contuvieron hidrocarburos, realizando el corte y biselado en una sola maniobra para dejar el extremo listo para soldadura.",
    enlace: "/servicios#corte-frio",
    lead: "Seccionamiento mecánico y preparación de extremos para soldadura mediante equipos neumáticos o hidráulicos portátiles, garantizando áreas de trabajo seguras en atmósferas explosivas sin aporte térmico.",
    aplicaciones: [
      "Intervención de líneas en refinerías, baterías y complejos petroquímicos sin permisos de fuego",
      "Preparación de extremos de tubería para interconexión de spools y válvulas de reemplazo",
      "Corte de ductos de hidrocarburos con remanentes de producto o vapores inflamables",
      "Desmantelamiento controlado y seguro de estructuras metálicas y tuberías fuera de servicio",
    ],
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
    descripcionLarga:
      "Operación de lanzamiento, corrida y recepción de diablos (pigs) de limpieza en ductos para desalojar agua tras pruebas hidrostáticas, parafinas, lodos o condensados. De forma complementaria, realizamos mantenimiento a trampas de envío y recibo: limpieza general, revisión y cambio de sellos u empaques de compuertas de apertura rápida y verificación de accesorios.",
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
    aplicaciones: [
      "Desalojo de agua y secado de líneas después de pruebas hidrostáticas",
      "Limpieza periódica de ductos para remover sedimentos o parafinas",
      "Reemplazo de empaques y sellos en compuertas de trampas lanzadoras/receptoras",
      "Mantenimiento a accesorios y válvulas de ecualización en trampas",
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
        "../assets/images/services/diablos/diablos.webp",
        import.meta.url,
      ).href,
      alt: "Operación de corridas de diablos y mantenimiento a trampas de envío y recibo",
    },
  },
];
