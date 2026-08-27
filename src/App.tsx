import { useEffect, useState } from "react";
import type { NavTarget } from "./data";
import { useIsMobile } from "./useIsMobile";
import Home from "./screens/Home";
import Sala from "./screens/Sala";
import Exposicion from "./screens/Exposicion";
import Conferencistas from "./screens/Conferencistas";
import HomeMobile from "./screens/mobile/HomeMobile";
import SalaMobile from "./screens/mobile/SalaMobile";
import ExposicionMobile from "./screens/mobile/ExposicionMobile";
import ConferencistasMobile from "./screens/mobile/ConferencistasMobile";

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

function DesktopStage({ screen, onNavigate }: { screen: NavTarget; onNavigate: (t: NavTarget) => void }) {
  const { scale, offsetX, offsetY } = useStageScale();

  return (
    <>
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
              lateral, anclado al borde real de la pantalla. Cubre el 40%
              derecho de la pantalla. */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "40%",
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
        {screen === "home" && <Home onNavigate={onNavigate} />}
        {screen === "sala" && <Sala onNavigate={onNavigate} />}
        {screen === "exposicion" && <Exposicion onNavigate={onNavigate} />}
        {screen === "conferencistas" && <Conferencistas onNavigate={onNavigate} />}
      </div>
    </>
  );
}

function MobileStage({ screen, onNavigate }: { screen: NavTarget; onNavigate: (t: NavTarget) => void }) {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Overlay azul plano: mismo tono que el desktop, sirve de base
          legible sobre la foto de fondo para todas las pantallas móviles
          (Inicio incluida — en vertical no hay espacio para el degradado
          decorativo lateral del layout de escritorio). */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(9,16,58,0.75)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {screen === "home" && <HomeMobile onNavigate={onNavigate} />}
        {screen === "sala" && <SalaMobile onNavigate={onNavigate} />}
        {screen === "exposicion" && <ExposicionMobile onNavigate={onNavigate} />}
        {screen === "conferencistas" && <ConferencistasMobile onNavigate={onNavigate} />}
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<NavTarget>("home");
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        height: isMobile ? "auto" : "100vh",
        overflow: isMobile ? "visible" : "hidden",
        background: "#0b1330",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Fondo a pantalla completa: cubre todo el viewport real, sin las
          bandas del letterbox que deja el stage de 1920x1080 escalado.
          En móvil se fija (no hace scroll) para que el contenido, que sí
          scrollea, siempre se vea sobre el mismo fondo. */}
      <div
        style={{
          position: isMobile ? "fixed" : "absolute",
          inset: 0,
          background: `url(${SCREEN_BACKGROUND[screen]}) center/cover no-repeat`,
        }}
      />

      {isMobile ? (
        <MobileStage screen={screen} onNavigate={setScreen} />
      ) : (
        <DesktopStage screen={screen} onNavigate={setScreen} />
      )}
    </div>
  );
}
