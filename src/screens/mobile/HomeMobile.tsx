import type { NavTarget } from "../../data";
import { useCountdown } from "../../useCountdown";

const HOME_MENU: { label: string; target: NavTarget }[] = [
  { label: "Sala de Conferencias", target: "sala" },
  { label: "Sala de Exposición Comercial", target: "exposicion" },
  { label: "Conferencistas", target: "conferencistas" },
];

export default function HomeMobile({ onNavigate }: { onNavigate: (target: NavTarget) => void }) {
  const countdown = useCountdown();

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <div style={{ padding: "20px 16px 0" }}>
        <span
          style={{
            display: "block",
            fontWeight: 600,
            fontSize: 20,
            color: "#fff",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          SALA DE EVENTOS SOVEGASTRO
        </span>

        <img
          src="/assets/banner-congreso.png"
          alt="Banner 47° Congreso Nacional de Gastroenterología"
          style={{
            display: "block",
            width: "100%",
            aspectRatio: "5 / 1",
            borderRadius: 16,
            boxShadow: "inset 0 0 0 1px rgb(8,234,227)",
            objectFit: "contain",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          marginTop: 20,
          borderRadius: 20,
          overflow: "hidden",
          marginLeft: 16,
          marginRight: 16,
        }}
      >
        <img
          src="/assets/doctor.png"
          alt="Doctor"
          style={{
            display: "block",
            width: "100%",
            height: 350,
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(9,16,58,0) 40%, rgba(9,16,58,0.85) 100%)",
          }}
        />
      </div>

      <div style={{ padding: "20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <button
          onClick={() => onNavigate("home")}
          style={{
            width: "100%",
            padding: "16px 20px",
            borderRadius: 100,
            border: "none",
            background: "rgb(217,217,217)",
            fontWeight: 700,
            fontSize: 18,
            color: "#000",
            cursor: "pointer",
          }}
        >
          INICIO
        </button>

        {HOME_MENU.map((item) => (
          <button
            key={item.target}
            onClick={() => onNavigate(item.target)}
            style={{
              width: "100%",
              padding: "14px 20px",
              borderRadius: 100,
              border: "none",
              background: "rgb(217,217,217)",
              fontWeight: 600,
              fontSize: 16,
              color: "#000",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        style={{
          marginTop: "auto",
          padding: "20px 16px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 13, color: "#fff", letterSpacing: 1 }}>
          FALTA PARA EL EVENTO
        </span>
        <div style={{ display: "flex", gap: 14 }}>
          {[
            { value: countdown.months, label: "MESES" },
            { value: countdown.days, label: "DÍAS" },
            { value: countdown.hours, label: "HORAS" },
            { value: countdown.seconds, label: "SEGUNDOS" },
          ].map((c) => (
            <div
              key={c.label}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 52 }}
            >
              <span style={{ fontWeight: 700, fontSize: 26, color: "rgb(8,234,227)", lineHeight: 1 }}>
                {c.value}
              </span>
              <span style={{ fontWeight: 500, fontSize: 10, color: "#fff", marginTop: 4 }}>
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
