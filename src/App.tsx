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
      <div
        style={{
          position: "absolute",
          left: offsetX,
          top: offsetY,
          width: 1920,
          height: 1080,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          boxShadow: "0 0 80px rgba(0,0,0,0.55)",
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
