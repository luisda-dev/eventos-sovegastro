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

      {screen !== "home" && (
        /* Overlay azul plano al 75%, anclado al viewport real (no al
           stage de 1920x1080) para cubrir el 100% de la pantalla en
           cualquier resolución o aspect ratio. */
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(9,16,58,0.75)",
            pointerEvents: "none",
          }}
        />
      )}

      {screen === "home" && (
        <>
          {/* Overlay inferior: degradado azul a transparente para que el
              contador resalte sobre la foto de fondo. Se ancla al viewport
              real (no al stage de 1920x1080) para llegar siempre hasta el
              borde inferior de la pantalla, sin importar la resolución. */}
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              height: Math.max(240, 340 * scale),
              background:
                "linear-gradient(180deg, rgba(9,16,58,0) 0%, rgba(9,16,58,0.55) 45%, rgba(9,16,58,0.85) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Overlay lateral derecho: fondo azul degradado detrás del menú
              lateral, anclado al borde real de la pantalla. */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: Math.max(380, offsetX + 540 * scale),
              height: "100%",
              background:
                "linear-gradient(90deg, rgba(9,16,58,0) 0%, rgba(9,16,58,0.45) 35%, rgba(9,16,58,0.7) 100%)",
              pointerEvents: "none",
            }}
          />
        </>
      )}

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
