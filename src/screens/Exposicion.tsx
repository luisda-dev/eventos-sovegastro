import { useState } from "react";
import type { NavTarget } from "../data";
import { TIERS_BASE } from "../data";
import NavBar from "../components/NavBar";

const TIER_LAYOUT: Record<string, { labelTop: number; dividerTop: number; cardsTop: number; arrowTop: number }> = {
  platino: { labelTop: 445, dividerTop: 469, cardsTop: 505, arrowTop: 558 },
  oro: { labelTop: 656, dividerTop: 681, cardsTop: 712, arrowTop: 765 },
  bronce: { labelTop: 867, dividerTop: 892, cardsTop: 923, arrowTop: 976 },
};

function rotate<T>(arr: T[], offset: number): T[] {
  const out: T[] = [];
  for (let i = 0; i < arr.length; i++) out.push(arr[(i + offset) % arr.length]);
  return out;
}

export default function Exposicion({ onNavigate }: { onNavigate: (target: NavTarget) => void }) {
  const [tierOffsets, setTierOffsets] = useState<Record<string, number>>({
    platino: 0,
    oro: 0,
    bronce: 0,
  });

  const rotateTier = (tier: string, dir: 1 | -1) => {
    setTierOffsets((prev) => {
      const len = TIERS_BASE.find((t) => t.key === tier)?.logos.length || 1;
      const next = (((prev[tier] + dir) % len) + len) % len;
      return { ...prev, [tier]: next };
    });
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: 1920,
        height: 1080,
        overflow: "hidden",
        background: "rgba(16,32,117,0.88)",
      }}
    >
      <img
        src="/assets/banner-congreso.png"
        alt="Banner"
        style={{
          position: "absolute",
          left: 340,
          top: 131,
          width: 1240,
          height: 236,
          borderRadius: 30,
          boxShadow: "inset 0 0 0 1px rgb(8,234,227)",
          objectFit: "cover",
        }}
      />

      <NavBar active="exposicion" onNavigate={onNavigate} />

      {TIERS_BASE.map((tier) => {
        const layout = TIER_LAYOUT[tier.key];
        const logos = rotate(tier.logos, tierOffsets[tier.key]);
        return (
          <div key={tier.key}>
            <div
              style={{
                position: "absolute",
                left: 340,
                top: layout.labelTop,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: tier.color,
                  boxShadow: "0 0 0 3px rgba(255,255,255,0.15) inset",
                }}
              />
              <span style={{ fontWeight: 600, fontSize: 32, color: tier.color }}>{tier.label}</span>
            </div>

            <div
              style={{
                position: "absolute",
                left: 456,
                top: layout.dividerTop,
                width: 1124,
                height: 1,
                background: "rgba(255,255,255,0.85)",
              }}
            />

            <div
              onClick={() => rotateTier(tier.key, -1)}
              style={{
                position: "absolute",
                left: 340,
                top: layout.arrowTop,
                width: 30,
                height: 20,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderRight: "16px solid rgb(8,234,227)",
                }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                left: 456,
                top: layout.cardsTop,
                width: 1070,
                display: "flex",
                gap: 18,
              }}
            >
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  style={{
                    width: 200,
                    height: 130,
                    borderRadius: 20,
                    background: "radial-gradient(176px 136px at 24% 16%, rgb(208,208,208), rgb(255,255,255))",
                    boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 14,
                  }}
                >
                  <img
                    src={logo.img}
                    alt={logo.alt}
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>

            <div
              onClick={() => rotateTier(tier.key, 1)}
              style={{
                position: "absolute",
                left: 1550,
                top: layout.arrowTop,
                width: 30,
                height: 20,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "16px solid rgb(8,234,227)",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
