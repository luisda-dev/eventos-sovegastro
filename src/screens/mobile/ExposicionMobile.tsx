import type { NavTarget } from "../../data";
import { TIERS_BASE } from "../../data";
import NavBarMobile from "../../components/NavBarMobile";

export default function ExposicionMobile({ onNavigate }: { onNavigate: (target: NavTarget) => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <NavBarMobile active="exposicion" onNavigate={onNavigate} />

      <div style={{ padding: 16 }}>
        <img
          src="/assets/banner-congreso.png"
          alt="Banner"
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

      <div style={{ padding: "0 16px 32px", display: "flex", flexDirection: "column", gap: 28 }}>
        {TIERS_BASE.map((tier) => (
          <div key={tier.key}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: tier.color,
                  boxShadow: "0 0 0 2px rgba(255,255,255,0.15) inset",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontWeight: 600, fontSize: 20, color: tier.color }}>{tier.label}</span>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.85)" }} />
            </div>

            <div
              style={{
                display: "flex",
                gap: 12,
                overflowX: "auto",
                paddingBottom: 4,
                scrollSnapType: "x mandatory",
              }}
            >
              {tier.logos.map((logo) => (
                <div
                  key={logo.id}
                  style={{
                    flex: "0 0 auto",
                    width: 150,
                    height: 100,
                    borderRadius: 14,
                    background: "radial-gradient(176px 136px at 24% 16%, rgb(208,208,208), rgb(255,255,255))",
                    boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 12,
                    scrollSnapAlign: "start",
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
          </div>
        ))}
      </div>
    </div>
  );
}
