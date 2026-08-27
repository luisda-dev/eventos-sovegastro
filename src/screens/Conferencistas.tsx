import { useState } from "react";
import type { CSSProperties } from "react";
import type { NavTarget } from "../data";
import { BIO, SPEAKERS_BASE } from "../data";
import NavBar from "../components/NavBar";

const DAY_ACTIVE: CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: 16,
  color: "#fff",
  cursor: "pointer",
  borderBottom: "2px solid #fff",
  paddingBottom: 4,
};

const DAY_INACTIVE: CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 500,
  fontSize: 16,
  color: "rgb(177,177,177)",
  cursor: "pointer",
  borderBottom: "2px solid transparent",
  paddingBottom: 4,
};

function DayTabs({
  activeDay,
  onSelect,
}: {
  activeDay: number;
  onSelect: (day: number, e: React.MouseEvent) => void;
}) {
  return (
    <>
      {[1, 2, 3].map((d) => (
        <div key={d} onClick={(e) => onSelect(d, e)} style={d === activeDay ? DAY_ACTIVE : DAY_INACTIVE}>
          DÍA {d}
        </div>
      ))}
    </>
  );
}

export default function Conferencistas({ onNavigate }: { onNavigate: (target: NavTarget) => void }) {
  const [activeDays, setActiveDays] = useState<number[]>([2, 2, 2, 2]);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const setDay = (cardIndex: number, day: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDays((prev) => {
      const next = prev.slice();
      next[cardIndex] = day;
      return next;
    });
  };

  const speakers = SPEAKERS_BASE.map((sp) => ({
    img: sp.img,
    name: sp.name,
    role: sp.role,
  }));

  const selected = modalIndex != null ? speakers[modalIndex] : null;

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

      <NavBar active="conferencistas" onNavigate={onNavigate} />

      <div style={{ position: "absolute", left: 340, top: 460, display: "flex", gap: 40 }}>
        {speakers.map((sp, i) => (
          <div
            key={i}
            onClick={() => setModalIndex(i)}
            style={{
              width: 290,
              height: 350,
              borderRadius: 12,
              background: "rgb(20,31,85)",
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              padding: 15,
            }}
          >
            <img
              src={sp.img}
              alt={sp.name}
              style={{
                width: 260,
                height: 208,
                borderRadius: "12px 12px 7px 12px",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div style={{ marginTop: 14 }}>
              <div style={{ fontWeight: 700, fontSize: 24, color: "#fff" }}>{sp.name}</div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  color: "rgb(8,234,227)",
                  marginTop: 4,
                  letterSpacing: 0.5,
                }}
              >
                {sp.role}
              </div>
            </div>
            <div style={{ display: "flex", gap: 24, marginTop: 16 }}>
              <DayTabs activeDay={activeDays[i]} onSelect={(d, e) => setDay(i, d, e)} />
            </div>
          </div>
        ))}
      </div>

      {selected && modalIndex != null && (
        <div
          onClick={() => setModalIndex(null)}
          style={{
            position: "absolute",
            inset: 0,
            width: 1920,
            height: 1080,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: 928,
              height: 350,
              borderRadius: 12,
              background: "rgb(20,31,85)",
              boxShadow: "inset 0 0 0 2px rgb(8,234,227)",
              display: "flex",
              padding: 11,
              gap: 28,
            }}
          >
            <img
              src={selected.img}
              alt={selected.name}
              style={{
                width: 260,
                height: 208,
                borderRadius: "12px 12px 7px 12px",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", paddingTop: 4, flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 700, fontSize: 24, color: "#fff" }}>{selected.name}</div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  color: "rgb(8,234,227)",
                  marginTop: 4,
                  letterSpacing: 0.5,
                }}
              >
                {selected.role}
              </div>
              <div style={{ display: "flex", gap: 24, marginTop: 12 }}>
                <DayTabs activeDay={activeDays[modalIndex]} onSelect={(d, e) => setDay(modalIndex, d, e)} />
              </div>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: 14,
                  color: "#fff",
                  lineHeight: 1.5,
                  marginTop: 16,
                  maxHeight: 150,
                  overflow: "auto",
                  paddingRight: 8,
                }}
              >
                {BIO}
              </div>
            </div>
            <div
              onClick={() => setModalIndex(null)}
              style={{
                position: "absolute",
                right: 14,
                top: 12,
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 18,
                lineHeight: 1,
              }}
            >
              ×
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
