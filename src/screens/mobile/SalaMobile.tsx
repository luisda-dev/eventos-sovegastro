import { useState, useEffect } from "react";
import type { NavTarget } from "../../data";
import { BANNERS } from "../../data";
import NavBarMobile from "../../components/NavBarMobile";

export default function SalaMobile({ onNavigate }: { onNavigate: (target: NavTarget) => void }) {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <NavBarMobile active="sala" onNavigate={onNavigate} />

      <div
        style={{
          flex: 1,
          padding: 16,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <div
          onClick={() => setVideoPlaying((v) => !v)}
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: 16,
            background: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 14,
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 18,
              background: "rgb(8,234,227)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {!videoPlaying ? (
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "14px solid transparent",
                  borderBottom: "14px solid transparent",
                  borderLeft: "22px solid #fff",
                  marginLeft: 5,
                }}
              />
            ) : (
              <div style={{ display: "flex", gap: 7 }}>
                <div style={{ width: 9, height: 30, background: "#fff", borderRadius: 2 }} />
                <div style={{ width: 9, height: 30, background: "#fff", borderRadius: 2 }} />
              </div>
            )}
          </div>
          <span style={{ fontWeight: 600, fontSize: 22, color: "#fff" }}>STREAMING</span>
        </div>

        <div style={{ display: "flex", justifyContent: "center", padding: "4px 0" }}>
          <img
            src="/assets/logo-congreso.png"
            alt="Logo 47° Congreso Nacional de Gastroenterología"
            style={{
              maxHeight: 70,
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        <img
          key={bannerIndex}
          src={BANNERS[bannerIndex]}
          alt="Banner Patrocinante"
          style={{
            width: "100%",
            aspectRatio: "9 / 16",
            borderRadius: 16,
            objectFit: "cover",
            animation: "fadeIn 0.5s ease-in-out",
          }}
        />

        <div
          style={{
            width: "100%",
            padding: "24px 0",
            borderRadius: 16,
            background: "rgb(217,217,217)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: 26,
              color: "rgb(2,120,38)",
            }}
          >
            SLIDO
          </span>
        </div>
      </div>
    </div>
  );
}
