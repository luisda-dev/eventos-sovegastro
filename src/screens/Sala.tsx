import { useState, useEffect } from "react";
import type { NavTarget } from "../data";
import { BANNERS } from "../data";
import NavBar from "../components/NavBar";

export default function Sala({ onNavigate }: { onNavigate: (target: NavTarget) => void }) {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
      <NavBar active="sala" onNavigate={onNavigate} />

      <div
        style={{
          position: "absolute",
          left: 90,
          top: 140,
          width: 300,
          height: 840,
          borderRadius: 20,
          background: "rgb(217,217,217)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          key={bannerIndex}
          src={BANNERS[bannerIndex]}
          alt="Banner Patrocinante"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            animation: "fadeIn 0.5s ease-in-out",
          }}
        />
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0.6; }
            to { opacity: 1; }
          }
        `}</style>
      </div>

      <div
        style={{
          position: "absolute",
          left: 410,
          top: 140,
          width: 1100,
          height: 710,
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
          left: 410,
          top: 868,
          width: 1100,
          height: 112,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/assets/logo-congreso.png"
          alt="Logo 47° Congreso Nacional de Gastroenterología"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          left: 1530,
          top: 140,
          width: 300,
          height: 840,
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
