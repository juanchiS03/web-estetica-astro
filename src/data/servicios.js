// src/data/servicios.js

export const siteConfig = {
  nombreCorto: "Sandra Mz. Córdoba",
  nombreLegal: "Estética Sandra Martínez Córdoba",
  tagline: "Centro de Estética · Logroño",
  descripcionFooter: "Cuidado experto en manicura, belleza avanzada y bienestar integral en el centro de Logroño.",
  
  contacto: {
    telefonoVisible: "+34 638 61 02 89",
    telefonoLlamada: "+34638610289",
    whatsappNumero: "34638610289",
    whatsappMensajeDefault: "Hola Sandra, me gustaría reservar una cita.",
    direccionCalle: "C. Vélez de Guevara, 30",
    direccionCiudad: "26005 Logroño, La Rioja",
    instagramUrl: "https://www.instagram.com/sandramzcordoba",
    instagramHandle: "@sandramzcordoba",
  },

  horario: [
    { dias: "Lunes a Viernes", horas: "09:30 – 20:00", cerrado: false },
    { dias: "Sábados", horas: "10:00 – 14:00", cerrado: false },
    { dias: "Domingos", horas: "Cerrado", cerrado: true },
  ],
  horarioResumenFooter: "Lun – Vie: 09:30 – 20:00 · Sáb: 10:00 – 14:00",

  hero: {
    etiqueta: "Estética Avanzada · Logroño",
    tituloLinea1: "Tus manos,",
    tituloCursiva: "tu mejor",
    tituloLinea2: "presentación",
    descripcion: "Especialistas en manicura de alta precisión, cuidado facial y rituales de bienestar. Dedícate el tiempo y la excelencia que mereces.",
    botonPrincipal: "Reservar Cita",
    botonSecundario: "Ver Tratamientos",
  },

  seccionServicios: {
    etiqueta: "Carta de Especialidades",
    titulo: "Nuestros Tratamientos",
    descripcion: "Ofrecemos una experiencia de belleza integral en Logroño, cuidando cada protocolo, la higiene y los detalles para tu máximo bienestar.",
  },

  seccionContacto: {
    etiqueta: "Reservas y Ubicación",
    titulo: "¿Hablamos o reservamos tu cita?",
    descripcion: "Atendemos con cita previa para dedicarte el tiempo exclusivo que cada tratamiento requiere. Escríbenos por WhatsApp o llámanos directamente.",
  },
};

// Función auxiliar para generar enlaces de WhatsApp automáticamente
export function getWhatsappUrl(mensajePersonalizado) {
  const texto = mensajePersonalizado || siteConfig.contacto.whatsappMensajeDefault;
  return `https://wa.me/${siteConfig.contacto.whatsappNumero}?text=${encodeURIComponent(texto)}`;
}

// Textos de las 3 tarjetas de la página principal
export const resumenServiciosHome = [
  {
    id: "manicura",
    category: "Cuidado de Manos y Pies",
    title: "Manicura Premium",
    description: "Cuidado integral de uñas y cutículas con nivelación, esmaltado de larga duración y diseños personalizados de alta precisión.",
    link: "/servicios/manicura",
    ctaText: "Ver tarifas y galería",
  },
  {
    id: "masajes",
    category: "Bienestar Corporal",
    title: "Masajes Spa",
    description: "Rituales relajantes y descontracturantes diseñados para aliviar tensiones, renovar la piel y devolver el equilibrio al cuerpo.",
    link: "/servicios/masajes-spa",
    ctaText: "Consultar tarifas",
  },
  {
    id: "laser",
    category: "Estética Avanzada",
    title: "Depilación Láser",
    description: "Eliminación del vello de forma progresiva, segura y duradera mediante tecnología láser avanzada adaptable a tu tipo de piel.",
    link: "/servicios/depilacion-laser",
    ctaText: "Consultar tarifas",
  },
];

// Página de Manicura: Textos y Tarifas
export const manicuraPageData = {
  etiqueta: "Especialidad del Centro",
  titulo: "Manicura",
  tituloCursiva: "Premium",
  descripcion: "Trabajamos con productos de alta gama e higiene esterilizada para cuidar la salud de tu uña natural, logrando acabados precisos y duraderos.",
  precios: [
    {
      nombre: "Manicura Semipermanente",
      duracion: "45 min",
      precio: "25€",
      detalle: "Limado, cuidado experto de cutículas, esmaltado de larga duración e hidratación final.",
    },
    {
      nombre: "Manicura con Nivelación (Base Rubber / Refuerzo)",
      duracion: "60 min",
      precio: "32€",
      detalle: "Aporta estructura y resistencia extra a la uña natural para un acabado liso y duradero.",
    },
    {
      nombre: "Puesta Nueva en Gel o Acrígel",
      duracion: "90 min",
      precio: "45€",
      detalle: "Extensión y reconstrucción de uñas a medida con acabado natural o diseño personalizado.",
    },
    {
      nombre: "Pedicura Spa Completa",
      duracion: "60 min",
      precio: "38€",
      detalle: "Tratamiento completo de durezas, exfoliación, cuidado de cutículas, esmaltado y masaje relajante.",
    },
  ],
};

// Páginas dinámicas ([servicios].astro): Láser y Masajes
export const serviciosData = [
  {
    slug: "depilacion-laser",
    categoria: "Estética Avanzada",
    titulo: "Depilación por Láser",
    descripcion: "Eliminación del vello no deseado de forma progresiva, segura y duradera mediante tecnología láser de alta eficacia adaptable a cada fototipo.",
    nota: "Consulta en el centro nuestros bonos de 5 sesiones y packs combinados de cuerpo entero con descuento especial.",
    precios: [
      {
        nombre: "Piernas Completas",
        duracion: "30 min",
        precio: "80€",
        detalle: "Incluye muslos, rodillas, medias piernas, empeine y dedos.",
      },
      {
        nombre: "Zona Bikini / Ingles",
        duracion: "20 min",
        precio: "50€",
        detalle: "Adaptado a tus preferencias (normal, brasileño o integral) con máxima delicadeza.",
      },
      {
        nombre: "Axilas",
        duracion: "15 min",
        precio: "30€",
        detalle: "Sesión rápida e indolora de alta efectividad desde las primeras aplicaciones.",
      },
    ],
  },
  {
    slug: "masajes-spa",
    categoria: "Bienestar Corporal",
    titulo: "Masajes & Ritual Spa",
    descripcion: "Desconexión total para cuerpo y mente en cabina climatizada con aromaterapia y aceites esenciales.",
    nota: "Todos nuestros masajes también están disponibles en formato Tarjeta Regalo física en el centro.",
    precios: [
      {
        nombre: "Masaje Relajante Aromático",
        duracion: "50 min",
        precio: "40€",
        detalle: "Maniobras suaves y envolventes con aceites templados para reducir el estrés y mejorar el descanso.",
      },
      {
        nombre: "Masaje Descontracturante Profundo",
        duracion: "50 min",
        precio: "45€",
        detalle: "Enfocado en liberar sobrecargas musculares y puntos de tensión en espalda, cuello y hombros.",
      },
      {
        nombre: "Ritual con Piedras Volcánicas",
        duracion: "60 min",
        precio: "55€",
        detalle: "Terapia geotermal de calor profundo que destensa la musculatura y equilibra la energía corporal.",
      },
    ],
  },
];