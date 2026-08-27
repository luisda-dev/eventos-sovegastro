import type { NavTarget } from "../data";

const NAV_ITEMS: { label: string; short: string; target: NavTarget }[] = [
  { label: "Inicio", short: "Inicio", target: "home" },
  { label: "Sala de Conferencias", short: "Conferencias", target: "sala" },
  { label: "Exposición Comercial", short: "Exposición", target: "exposicion" },
  { label: "Conferencistas", short: "Speakers", target: "conferencistas" },
];

export default function NavBarMobile({
  active,
  onNavigate,
}: {
  active: NavTarget;
  onNavigate: (target: NavTarget) => void;
}) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        display: "flex",
        gap: 8,
        padding: "10px 12px",
        overflowX: "auto",
        background: "rgba(9,16,58,0.92)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        boxShadow: "0 1px 0 rgba(255,255,255,0.12)",
      }}
    >
      {NAV_ITEMS.map((item) => (
        <button
          key={item.target}
          onClick={() => onNavigate(item.target)}
          style={{
            flex: "0 0 auto",
            padding: "9px 16px",
            borderRadius: 100,
            border: "none",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: 14,
            whiteSpace: "nowrap",
            cursor: "pointer",
            background: item.target === active ? "#fff" : "rgba(255,255,255,0.12)",
            color: item.target === active ? "rgb(16,32,117)" : "#fff",
          }}
        >
          {item.short}
        </button>
      ))}
    </nav>
  );
}
