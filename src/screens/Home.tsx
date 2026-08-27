import { useEffect, useState } from "react";
import type { NavTarget } from "../data";
import { EVENT_DATE } from "../data";

const HOME_MENU: { label: string; target: NavTarget }[] = [
  { label: "Sala de Conferencias", target: "sala" },
  { label: "Sala de Exposición Comercial", target: "exposicion" },
  { label: "Conferencistas", target: "conferencistas" },
];

function useCountdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const diff = Math.max(0, EVENT_DATE - now);
  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;
  const totalHours = Math.floor(totalSeconds / 3600);
  const hours = totalHours % 24;
  const totalDays = Math.floor(totalHours / 24);
  const months = Math.floor(totalDays / 30);
  const days = totalDays % 30;

  return {
    months: String(months).padStart(2, "0"),
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export default function Home({ onNavigate }: { onNavigate: (target: NavTarget) => void }) {
  const countdown = useCountdown();

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: 1920,
        height: 1080,
        overflow: "hidden",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: 665,
          top: 33,
          width: 590,
          height: 44,
          fontWeight: 600,
          fontSize: 36,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "#fff",
        }}
      >
        SALA DE EVENTOS SOVEGASTRO
      </span>

      <img
        src="/assets/banner-congreso.png"
        alt="Banner 47° Congreso Nacional de Gastroenterología"
        style={{
          position: "absolute",
          left: 410,
          top: 101,
          width: 1100,
          height: 367,
          borderRadius: 30,
          boxShadow: "inset 0 0 0 1px rgb(8,234,227)",
          objectFit: "fill",
        }}
      />

      <div
        onClick={() => onNavigate("home")}
        style={{
          position: "absolute",
          left: 1487,
          top: 458,
          width: 366,
          height: 97,
          borderRadius: "100px 12px 100px 100px",
          background: "rgb(217,217,217)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 36, color: "#000" }}>INICIO</span>
      </div>

      <div
        style={{
          position: "absolute",
          left: 1487,
          top: 575,
          width: 366,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          zIndex: 2,
        }}
      >
        {HOME_MENU.map((item) => (
          <div
            key={item.target}
            onClick={() => onNavigate(item.target)}
            className="home-menu-item"
            style={{
              width: 366,
              minHeight: 70,
              borderRadius: "100px 12px 100px 100px",
              background: "rgb(217,217,217)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "10px 24px",
              cursor: "pointer",
              transition: "background 0.2s ease, transform 0.2s ease",
            }}
          >
            <span style={{ fontWeight: 600, fontSize: 24, color: "#000", lineHeight: 1.2 }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          left: 1487,
          top: 985,
          width: 366,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          zIndex: 2,
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 16, color: "#fff", letterSpacing: 1 }}>
          FALTA PARA EL EVENTO
        </span>
        <div style={{ display: "flex", gap: 12 }}>
          {[
            { value: countdown.months, label: "MESES" },
            { value: countdown.days, label: "DÍAS" },
            { value: countdown.hours, label: "HORAS" },
            { value: countdown.seconds, label: "SEGUNDOS" },
          ].map((c) => (
            <div
              key={c.label}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 70 }}
            >
              <span style={{ fontWeight: 700, fontSize: 40, color: "rgb(8,234,227)", lineHeight: 1 }}>
                {c.value}
              </span>
              <span style={{ fontWeight: 500, fontSize: 13, color: "#fff", marginTop: 4 }}>
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <img
        src="/assets/doctor.png"
        alt="Doctor"
        style={{
          position: "absolute",
          left: -175,
          top: 283,
          width: 840,
          height: 1125,
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />

      <style>{`
        .home-menu-item:hover {
          background: rgb(8,234,227);
          transform: scale(1.04);
        }
      `}</style>
    </div>
  );
}
