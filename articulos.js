// Registro central de publicaciones en pagina
const articles = [
    {
        id: "post-1",
        category: "didactica",
        categoryLabel: "Didáctica",
        date: "15 Oct 2026",
        title: "Indicadores Fisiológicos de Estrés en Porcinos",
        summary: "Revisión técnica de marcadores no invasivos como la temperatura ocular por infrarrojos, niveles de cortisol salival y variación de frecuencia cardíaca.",
        file: "contenido/didactica/indicadores-estres-porcinos.md"
    },
    {
        id: "post-2",
        category: "ensayos",
        categoryLabel: "Ensayos",
        date: "10 Oct 2026",
        title: "Modelado Matemático de Microclimas en Transporte Pequeño",
        summary: "Análisis de gradientes térmicos y dinámica de ventilación en vehículos para transporte de pequeños rumiantes y porcinos en clima tropical.",
        file: "contenido/ensayos/microclimas-transporte.md"
    },
    {
        id: "post-3",
        category: "divulgacion",
        categoryLabel: "Divulgación",
        date: "02 Oct 2026",
        title: "Guía Práctica de Bienestar para Pequeños Productores",
        summary: "Acciones sencillas y de bajo costo para mejorar el confort térmico, el acceso al agua limpia y la sombra en hatos familiares.",
        file: "contenido/divulgacion/guia-pequenos-productores.md"
    },
    {
        id: "post-4",
        category: "didactica",
        categoryLabel: "Didáctica",
        date: "20 Sep 2026",
        title: "Evaluación Visual de Cojeras y Marcha en Aves",
        summary: "Sistema de puntuación de cojeras (Gait Scoring) para la detección temprana de problemas podales y óseos en galpones.",
        file: "contenido/didactica/evaluacion-cojeras-aves.md"
    },
    {
        id: "post-5",
        category: "ensayos",
        categoryLabel: "Ensayos",
        date: "05 Sep 2026",
        title: "Impacto del Enriquecimiento Ambiental en Cerdos de Engorde",
        summary: "Estudio comparativo sobre objetos de manipulación, comportamiento estereotípico y lesiones cutáneas.",
        file: "contenido/ensayos/enriquecimiento-ambiental-cerdos.md"
    },
    {
        id: "post-6",
        category: "divulgacion",
        categoryLabel: "Divulgación",
        date: "28 Ago 2026",
        title: "Cinco Libertades vs. Dominación del Bienestar Animal",
        summary: "Explicación sencilla de la evolución conceptual del bienestar animal desde las 5 libertades hacia el modelo de los 5 dominios.",
        file: "contenido/divulgacion/evolucion-bienestar-animal.md"
    }
];

// Registro de Recursos PDF descargables (puedes agregar los tuyos aquí)
const pdfResources = [
    {
        title: "Formatos de Evaluación de Riesgos",
        description: "Plantillas descargables en PDF para inspección en predio.",
        category: "Formatos",
        file: "assets/pdf/formato-evaluacion-riesgos.pdf"
    },
    {
        title: "Guías Técnicas de Manejo Etológico",
        description: "Manuales ilustrados sobre comportamiento de rebaño.",
        category: "Manuales",
        file: "assets/pdf/guia-manejo-etologico.pdf"
    }
];