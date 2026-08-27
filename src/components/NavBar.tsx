import type { CSSProperties } from "react";
import type { NavTarget } from "../data";

const NAV_ACTIVE_STYLE: CSSProperties = {
  padding: "14px 32px",
  borderRadius: "100px",
  background: "#fff",
  color: "rgb(16,32,117)",
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: "24px",
  cursor: "pointer",
  whiteSpace: "nowrap",
};

const NAV_INACTIVE_STYLE: CSSProperties = {
  padding: "14px 32px",
  borderRadius: "100px",
  background: "transparent",
  color: "#fff",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: "24px",
  cursor: "pointer",
  whiteSpace: "nowrap",
};

const NAV_ITEMS: { label: string; target: NavTarget }[] = [
  { label: "Inicio", target: "home" },
  { label: "Sala de Conferencias", target: "sala" },
  { label: "Exposición Comercial", target: "exposicion" },
  { label: "Conferencistas", target: "conferencistas" },
];

export default function NavBar({
  active,
  onNavigate,
}: {
  active: NavTarget;
  onNavigate: (target: NavTarget) => void;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: 456,
        top: 33,
        width: 1024,
        height: 63,
        borderRadius: 50,
        background: "rgba(255,255,255,0.25)",
        boxShadow: "inset 0 0 0 1px rgb(114,114,114)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "0 10px",
      }}
    >
      {NAV_ITEMS.map((item) => (
        <div
          key={item.target}
          onClick={() => onNavigate(item.target)}
          style={item.target === active ? NAV_ACTIVE_STYLE : NAV_INACTIVE_STYLE}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}
