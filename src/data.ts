export type NavTarget = "home" | "sala" | "exposicion" | "conferencistas";

export interface Logo {
  id: string;
  img: string;
  alt: string;
}

export interface SpeakerBase {
  img: string;
  name: string;
  role: string;
}

export interface Tier {
  key: "platino" | "oro" | "plata";
  label: string;
  color: string;
  logos: Logo[];
}

export const TIERS_BASE: Tier[] = [
  {
    key: "platino",
    label: "Platino",
    color: "rgb(8,234,227)",
    logos: [
      { id: "hospitalar", img: "/assets/logos/hospitalar.png", alt: "Hospitalar" },
      { id: "hygea-medical", img: "/assets/logos/hygea-medical.png", alt: "Hygea Medical" },
      { id: "farma", img: "/assets/logos/farma.png", alt: "Farma" },
      { id: "pharmetique-labs", img: "/assets/logos/pharmetique-labs.png", alt: "Pharmetique Labs" },
      { id: "grupo-vargas", img: "/assets/logos/grupo-vargas.png", alt: "Grupo Vargas Farma Venezuela" },
      { id: "leti", img: "/assets/logos/leti.png", alt: "Grupo Leti" },
    ],
  },
  {
    key: "oro",
    label: "Oro",
    color: "rgb(234,189,8)",
    logos: [
      { id: "astor-medical", img: "/assets/logos/astor-medical.png", alt: "Astor Medical" },
      { id: "mck-calox", img: "/assets/logos/mck-calox.png", alt: "McK Pharmaceutical / Calox International" },
      { id: "biotech", img: "/assets/logos/biotech.png", alt: "Biotech" },
    ],
  },
  {
    key: "plata",
    label: "Plata",
    color: "rgb(192,192,192)",
    logos: [
      { id: "airela", img: "/assets/logos/airela.png", alt: "Airela Pharmacéutica" },
      { id: "drotafarma", img: "/assets/logos/drotafarma.png", alt: "Drotafarma" },
      { id: "ronava", img: "/assets/logos/ronava.png", alt: "Ronava" },
    ],
  },
];

export const SPEAKERS_BASE: SpeakerBase[] = [
  { img: "/assets/speakers/speaker-1.jpg", name: "DR. ANDRÉS CÁRDENAS", role: "GASTROENTEROLOGO" },
  { img: "/assets/speakers/speaker-2.jpg", name: "DR. REMES", role: "GASTROENTEROLOGO" },
  { img: "/assets/speakers/speaker-3.jpg", name: "DRA. ALBIS HANI", role: "GASTROENTEROLOGO" },
  { img: "/assets/speakers/speaker-4.jpg", name: "DRA. MÓNICA SÁNCHEZ", role: "GASTROENTEROLOGO" },
];

export const BIO =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare mollis molestie. Mauris faucibus ante sollicitudin quam lobortis, ut cursus magna accumsan. Vestibulum pellentesque, diam ac scelerisque feugiat, urna neque aliquet massa, eu dictum quam metus nec diam. Morbi fringilla massa a augue suscipit, nec tempor enim pellentesque. Sed blandit mauris ullamcorper, luctus mauris quis, blandit libero. Integer sodales arcu quis augue aliquet, in eleifend ipsum luctus. Nunc non leo consectetur, bibendum nisi ut, dictum magna. Aliquam arcu turpis, iaculis sit amet faucibus vel, maximus vel libero. Fusce quis blandit ipsum. Aenean feugiat auctor porta. Sed euismod nisl eget lacus ultricies fermentum. Nunc fermentum dui non rhoncus suscipit. Nunc arcu neque, luctus vitae nisi vitae, pharetra ullamcorper elit. Sed eu nisi a turpis viverra aliquet sit amet et enim. Phasellus finibus purus sed tortor vestibulum ornare. Fusce ut malesuada purus.";

export const EVENT_DATE = new Date("2026-10-29T00:00:00").getTime();

export const BANNERS = [
  "/assets/banners/2.jpg",
  "/assets/banners/3.jpg",
  "/assets/banners/4.jpg",
  "/assets/banners/5.jpg",
  "/assets/banners/6.jpg",
  "/assets/banners/7.jpg",
  "/assets/banners/8.jpg",
  "/assets/banners/10.jpg",
  "/assets/banners/11.jpg",
  "/assets/banners/12.jpg",
  "/assets/banners/14.jpg",
  "/assets/banners/15.jpg",
  "/assets/banners/16.jpg",
];
