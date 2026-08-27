export type NavTarget = "home" | "sala" | "exposicion" | "conferencistas";

export interface Logo {
  id: string;
  img: string;
  alt: string;
}

export interface SpeakerBase {
  img: string;
}

export const LOGOS: Logo[] = [
  { id: "pharmetique", img: "/assets/logos/pharmetique.svg", alt: "Pharmetique Labs" },
  { id: "leti", img: "/assets/logos/leti.svg", alt: "Grupo Leti" },
  { id: "farma", img: "/assets/logos/farma.svg", alt: "F Farma" },
  { id: "hospitalar", img: "/assets/logos/hospitalar.svg", alt: "Hospitalar" },
  { id: "hygea", img: "/assets/logos/hygea.svg", alt: "Hygea Medical" },
];

export const SPEAKERS_BASE: SpeakerBase[] = [
  { img: "/assets/speakers/speaker-1.svg" },
  { img: "/assets/speakers/speaker-2.svg" },
  { img: "/assets/speakers/speaker-3.svg" },
  { img: "/assets/speakers/speaker-4.svg" },
];

export const BIO =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare mollis molestie. Mauris faucibus ante sollicitudin quam lobortis, ut cursus magna accumsan. Vestibulum pellentesque, diam ac scelerisque feugiat, urna neque aliquet massa, eu dictum quam metus nec diam. Morbi fringilla massa a augue suscipit, nec tempor enim pellentesque. Sed blandit mauris ullamcorper, luctus mauris quis, blandit libero. Integer sodales arcu quis augue aliquet, in eleifend ipsum luctus. Nunc non leo consectetur, bibendum nisi ut, dictum magna. Aliquam arcu turpis, iaculis sit amet faucibus vel, maximus vel libero. Fusce quis blandit ipsum. Aenean feugiat auctor porta. Sed euismod nisl eget lacus ultricies fermentum. Nunc fermentum dui non rhoncus suscipit. Nunc arcu neque, luctus vitae nisi vitae, pharetra ullamcorper elit. Sed eu nisi a turpis viverra aliquet sit amet et enim. Phasellus finibus purus sed tortor vestibulum ornare. Fusce ut malesuada purus.";

export interface Tier {
  key: "platino" | "oro" | "bronce";
  label: string;
  color: string;
}

export const TIERS_BASE: Tier[] = [
  { key: "platino", label: "Platino", color: "rgb(8,234,227)" },
  { key: "oro", label: "Oro", color: "rgb(234,189,8)" },
  { key: "bronce", label: "Bronce", color: "rgb(207,114,0)" },
];

export const EVENT_DATE = new Date("2026-10-29T00:00:00").getTime();
