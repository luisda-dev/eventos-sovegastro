import { useState } from "react";
import type { NavTarget } from "../data";
import NavBar from "../components/NavBar";

export default function Sala({ onNavigate }: { onNavigate: (target: NavTarget) => void }) {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: 1920,
        height: 1080,
        overflow: "hidden",
        background:
          "linear-gradient(rgba(16,32,117,0.52), rgba(16,32,117,0.52)), url(/assets/bg-salon.svg) center/cover no-repeat",
      }}
    >
      <NavBar active="sala" onNavigate={onNavigate} />

      <div
        style={{
          position: "absolute",
          left: 90,
          top: 140,
          width: 300,
          height: 800,
          borderRadius: 20,
          background: "rgb(217,217,217)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: 56,
            color: "#000",
            transform: "rotate(-90deg)",
            whiteSpace: "nowrap",
            letterSpacing: 1,
          }}
        >
          PATROCINANTES
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          left: 410,
          top: 140,
          width: 1100,
          height: 800,
          borderRadius: 20,
          background: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <div
          onClick={() => setVideoPlaying((v) => !v)}
          style={{
            width: 150,
            height: 150,
            borderRadius: 30,
            background: "rgb(8,234,227)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          {!videoPlaying ? (
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "28px solid transparent",
                borderBottom: "28px solid transparent",
                borderLeft: "44px solid #fff",
                marginLeft: 10,
              }}
            />
          ) : (
            <div style={{ display: "flex", gap: 14 }}>
              <div style={{ width: 18, height: 60, background: "#fff", borderRadius: 3 }} />
              <div style={{ width: 18, height: 60, background: "#fff", borderRadius: 3 }} />
            </div>
          )}
        </div>
        <span style={{ fontWeight: 600, fontSize: 48, color: "#fff" }}>STREAMING</span>
      </div>

      <div
        style={{
          position: "absolute",
          left: 1530,
          top: 140,
          width: 300,
          height: 800,
          borderRadius: 20,
          background: "rgb(217,217,217)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: 56, color: "rgb(2,120,38)" }}>
          SLIDO
        </span>
      </div>
    </div>
  );
}
