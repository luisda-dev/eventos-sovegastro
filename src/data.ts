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
  key: "platino" | "oro" | "bronce";
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
      { id: "astor-medical", img: "/assets/logos/astor-medical.png", alt: "Astor Medical" },
      { id: "leti", img: "/assets/logos/leti.png", alt: "Grupo Leti" },
      { id: "farma", img: "/assets/logos/farma.png", alt: "Farma" },
    ],
  },
  {
    key: "oro",
    label: "Oro",
    color: "rgb(234,189,8)",
    logos: [
      { id: "hospitalar", img: "/assets/logos/hospitalar.png", alt: "Hospitalar" },
      { id: "distrilab", img: "/assets/logos/distrilab.jpg", alt: "Distrilab" },
    ],
  },
  {
    key: "bronce",
    label: "Bronce",
    color: "rgb(207,114,0)",
    logos: [
      { id: "farmatodo", img: "/assets/logos/farmatodo.jpg", alt: "Farmatodo" },
      { id: "redvital", img: "/assets/logos/redvital.png", alt: "Redvital" },
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
