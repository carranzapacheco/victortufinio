import heroArqueo from "@/assets/hero-arqueologia.jpg";
import heroIng from "@/assets/hero-ingenieria.jpg";
import pCarreteras from "@/assets/proyecto-carreteras.jpg";
import pSolar from "@/assets/proyecto-solar.jpg";
import pArqueo from "@/assets/proyecto-arqueo.jpg";
import pElectrico from "@/assets/proyecto-electrico.jpg";
import pSaneamiento from "@/assets/proyecto-saneamiento.jpg";
import pPuentes from "@/assets/proyecto-puentes.jpg";
import pMineria from "@/assets/proyecto-mineria.jpg";

export const HERO_IMAGES = { heroArqueo, heroIng };

export const COMPANY = {
  name: "Víctor Hugo Tufinio Culquichicón",
  short: "VÍCTOR TUFINIO & Consultores",
  tagline: "Arqueología · Ingeniería · Infraestructura",
  phone: "+51 999 000 000",
  whatsapp: "51999000000",
  email: "contacto@vhtc-arqueologos.com",
  address: "Av. Principal 123, Lima, Perú",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  items: string[];
  icon: string; // react-icons name handled in component
};

export const SERVICES: Service[] = [
  {
    slug: "arqueologia",
    title: "Gestión Arqueológica",
    short:
      "Prospección, evaluación, monitoreo, rescate e investigación arqueológica con respaldo técnico del Ministerio de Cultura.",
    icon: "shovel",
    items: [
      "Prospección y reconocimiento arqueológico",
      "Certificados de Inexistencia de Restos Arqueológicos (CIRA)",
      "Proyecto de Evaluación Arqueológica (PEA)",
      "Plan de Monitoreo Arqueológico (PMA)",
      "Rescate e investigación arqueológica",
      "Informes técnicos y publicación científica",
      "Supervisión técnica especializada",
    ],
  },
  {
    slug: "topografia",
    title: "Topografía y Catastro",
    short:
      "Levantamientos, catastro, saneamiento técnico legal y formalización predial ante SUNARP.",
    icon: "map",
    items: [
      "Levantamientos topográficos de precisión",
      "Catastro urbano y rural",
      "Saneamiento técnico legal",
      "Independización y subdivisión de predios",
      "Formalización ante SUNARP",
    ],
  },
  {
    slug: "electrica",
    title: "Ingeniería Eléctrica",
    short:
      "Diseño, ejecución y supervisión de proyectos eléctricos para zonas rurales y urbanas.",
    icon: "bolt",
    items: [
      "Proyectos eléctricos integrales",
      "Electrificación rural y urbana",
      "Instalación de postes y líneas eléctricas",
      "Supervisión técnica de obras",
    ],
  },
  {
    slug: "solar",
    title: "Energía Solar",
    short:
      "Sistemas fotovoltaicos a medida para minería, campamentos y comunidades rurales.",
    icon: "sun",
    items: [
      "Sistemas fotovoltaicos on-grid y off-grid",
      "Kits solares para viviendas y negocios",
      "Soluciones energéticas para minería",
      "Energía para campamentos remotos",
      "Sistemas de bombeo solar",
      "Soluciones rurales sostenibles",
    ],
  },
  {
    slug: "saneamiento",
    title: "Saneamiento",
    short:
      "Infraestructura para agua potable, alcantarillado y redes sanitarias de uso público.",
    icon: "droplet",
    items: [
      "Sistemas de agua potable",
      "Alcantarillado y redes sanitarias",
      "Reservorios y plantas de tratamiento",
      "Diseño hidráulico integral",
    ],
  },
  {
    slug: "expedientes",
    title: "Gestión de Expedientes",
    short:
      "Elaboración, tramitología y seguimiento administrativo de expedientes técnicos.",
    icon: "folder",
    items: [
      "Elaboración de expedientes técnicos",
      "Tramitología ante entidades públicas",
      "Seguimiento administrativo",
      "Levantamiento de observaciones",
    ],
  },
];

export type Project = {
  title: string;
  category: "Carreteras" | "Puentes" | "Energía" | "Arqueología" | "Saneamiento" | "Minería";
  location: string;
  year: string;
  image: string;
  description: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Carretera de penetración Andina",
    category: "Carreteras",
    location: "Cajamarca, Perú",
    year: "2024",
    image: pCarreteras,
    description:
      "Estudios de topografía, monitoreo arqueológico y gestión de expedientes para 48 km de vía interregional.",
  },
  {
    title: "Puente de arco Río Marañón",
    category: "Puentes",
    location: "Amazonas, Perú",
    year: "2023",
    image: pPuentes,
    description:
      "Supervisión técnica y liberación arqueológica del entorno de obra para puente de 180 m de luz.",
  },
  {
    title: "Planta solar campamento minero",
    category: "Energía",
    location: "Arequipa, Perú",
    year: "2024",
    image: pSolar,
    description:
      "Sistema fotovoltaico de 2.4 MWp con almacenamiento para autoabastecimiento de campamento minero.",
  },
  {
    title: "Rescate arqueológico pre-inca",
    category: "Arqueología",
    location: "La Libertad, Perú",
    year: "2023",
    image: pArqueo,
    description:
      "PEA, rescate y publicación científica sobre contextos funerarios Mochica en zona de obra civil.",
  },
  {
    title: "Línea de transmisión 60 kV",
    category: "Energía",
    location: "Áncash, Perú",
    year: "2024",
    image: pElectrico,
    description:
      "Proyecto, supervisión y monitoreo arqueológico de línea de transmisión rural de 32 km.",
  },
  {
    title: "Reservorio y planta de tratamiento",
    category: "Saneamiento",
    location: "Piura, Perú",
    year: "2022",
    image: pSaneamiento,
    description:
      "Diseño hidráulico y gestión integral de expediente técnico para reservorio de 2 500 m³.",
  },
  {
    title: "Liberación arqueológica de tajo",
    category: "Minería",
    location: "Apurímac, Perú",
    year: "2024",
    image: pMineria,
    description:
      "PMA y rescate en zona de expansión de mina a tajo abierto bajo lineamientos del MINCUL.",
  },
];

export const STATS = [
  { value: 20, suffix: "+", label: "Años de experiencia" },
  { value: 150, suffix: "+", label: "Proyectos entregados" },
  { value: 100, suffix: "+", label: "Clientes corporativos" },
  { value: 24, suffix: "", label: "Regiones del Perú", note: "Cobertura nacional" },
];

export const WHY_US = [
  { title: "Experiencia multidisciplinaria", desc: "Equipo de arqueólogos, ingenieros y topógrafos en una sola firma." },
  { title: "Gestión integral", desc: "Acompañamos cada expediente desde la planificación hasta la liberación final." },
  { title: "Respaldo técnico", desc: "Profesionales colegiados y metodologías certificadas." },
  { title: "Optimización de tiempos", desc: "Reducimos observaciones y plazos administrativos." },
  { title: "Soluciones rápidas y eficientes", desc: "Procesos estandarizados y herramientas digitales." },
  { title: "Atención personalizada", desc: "Un punto de contacto técnico permanente por proyecto." },
];

export const ABOUT_FEATURES = [
  "Más de 20 años de experiencia profesional",
  "Gestión técnica y administrativa integral",
  "Atención personalizada y acompañamiento permanente",
  "Reducción de observaciones y retrasos",
  "Optimización de tiempos y procesos",
  "Soluciones integrales en un solo servicio",
  "Resultados eficientes y respaldo técnico garantizado",
];

export const NAV_LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/experiencia", label: "Experiencia" },
  { to: "/contacto", label: "Contacto" },
] as const;
