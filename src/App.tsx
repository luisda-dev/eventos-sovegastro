import { useEffect, useState } from "react";
import type { NavTarget } from "./data";
import Home from "./screens/Home";
import Sala from "./screens/Sala";
import Exposicion from "./screens/Exposicion";
import Conferencistas from "./screens/Conferencistas";

function useStageScale() {
  const [stage, setStage] = useState({ scale: 1, offsetX: 0, offsetY: 0 });

  useEffect(() => {
    const recalc = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const scale = Math.min(w / 1920, h / 1080);
      const offsetX = (w - 1920 * scale) / 2;
      const offsetY = (h - 1080 * scale) / 2;
      setStage({ scale, offsetX, offsetY });
    };
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  return stage;
}

const SCREEN_BACKGROUND: Record<NavTarget, string> = {
  home: "/assets/bg-home.jpg",
  sala: "/assets/bg-salon.jpg",
  exposicion: "/assets/bg-salon.jpg",
  conferencistas: "/assets/bg-salon.jpg",
};

// Capa de degradado azul sobre la foto de fondo: oscurece la parte superior
// y las esquinas para que el texto blanco y el banner resalten (Inicio usa
// una foto real de auditorio, sin el tono azul del resto de las pantallas).
const SCREEN_OVERLAY: Record<NavTarget, string> = {
  home: "linear-gradient(180deg, rgba(6,12,40,0.88) 0%, rgba(11,19,64,0.72) 22%, rgba(11,19,64,0.35) 45%, rgba(11,19,64,0.55) 100%), radial-gradient(120% 90% at 50% 0%, rgba(9,16,58,0.15) 0%, rgba(6,10,35,0.75) 100%)",
  sala: "none",
  exposicion: "none",
  conferencistas: "none",
};

export default function App() {
  const [screen, setScreen] = useState<NavTarget>("home");
  const { scale, offsetX, offsetY } = useStageScale();

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#0b1330",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Fondo a pantalla completa: cubre todo el viewport real, sin las
          bandas del letterbox que deja el stage de 1920x1080 escalado. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `url(${SCREEN_BACKGROUND[screen]}) center/cover no-repeat`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: SCREEN_OVERLAY[screen],
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: offsetX,
          top: offsetY,
          width: 1920,
          height: 1080,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {screen === "home" && <Home onNavigate={setScreen} />}
        {screen === "sala" && <Sala onNavigate={setScreen} />}
        {screen === "exposicion" && <Exposicion onNavigate={setScreen} />}
        {screen === "conferencistas" && <Conferencistas onNavigate={setScreen} />}
      </div>
    </div>
  );
}
