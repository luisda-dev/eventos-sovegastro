import { useState } from "react";
import type { CSSProperties } from "react";
import type { NavTarget } from "../../data";
import { BIO, SPEAKERS_BASE } from "../../data";
import NavBarMobile from "../../components/NavBarMobile";

const DAY_ACTIVE: CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: 14,
  color: "#fff",
  cursor: "pointer",
  background: "none",
  border: "none",
  borderBottom: "2px solid #fff",
  padding: 0,
  paddingBottom: 3,
};

const DAY_INACTIVE: CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 500,
  fontSize: 14,
  color: "rgb(177,177,177)",
  cursor: "pointer",
  background: "none",
  border: "none",
  borderBottom: "2px solid transparent",
  padding: 0,
  paddingBottom: 3,
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
        <button key={d} onClick={(e) => onSelect(d, e)} style={d === activeDay ? DAY_ACTIVE : DAY_INACTIVE}>
          DÍA {d}
        </button>
      ))}
    </>
  );
}

export default function ConferencistasMobile({ onNavigate }: { onNavigate: (target: NavTarget) => void }) {
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

  const speakers = SPEAKERS_BASE;
  const selected = modalIndex != null ? speakers[modalIndex] : null;

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <NavBarMobile active="conferencistas" onNavigate={onNavigate} />

      <div style={{ padding: 16 }}>
        <img
          src="/assets/banner-congreso.png"
          alt="Banner"
          style={{
            display: "block",
            width: "100%",
            aspectRatio: "3 / 1",
            borderRadius: 16,
            boxShadow: "inset 0 0 0 1px rgb(8,234,227)",
            objectFit: "fill",
          }}
        />
      </div>

      <div
        style={{
          padding: "0 16px 32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: 14,
        }}
      >
        {speakers.map((sp, i) => (
          <div
            key={i}
            onClick={() => setModalIndex(i)}
            style={{
              borderRadius: 12,
              background: "rgb(20,31,85)",
              overflow: "hidden",
              cursor: "pointer",
              padding: 10,
            }}
          >
            <img
              src={sp.img}
              alt={sp.name}
              style={{
                width: "100%",
                aspectRatio: "5 / 4",
                borderRadius: "10px 10px 6px 10px",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div style={{ marginTop: 10 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", lineHeight: 1.2 }}>{sp.name}</div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 11,
                  color: "rgb(8,234,227)",
                  marginTop: 3,
                  letterSpacing: 0.3,
                }}
              >
                {sp.role}
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
              <DayTabs activeDay={activeDays[i]} onSelect={(d, e) => setDay(i, d, e)} />
            </div>
          </div>
        ))}
      </div>

      {selected && modalIndex != null && (
        <div
          onClick={() => setModalIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "flex-end",
            zIndex: 30,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              borderRadius: "20px 20px 0 0",
              background: "rgb(20,31,85)",
              boxShadow: "inset 0 0 0 2px rgb(8,234,227)",
              padding: 20,
            }}
          >
            <div
              onClick={() => setModalIndex(null)}
              style={{
                position: "absolute",
                right: 14,
                top: 14,
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 20,
                lineHeight: 1,
                zIndex: 1,
              }}
            >
              ×
            </div>

            <img
              src={selected.img}
              alt={selected.name}
              style={{
                width: "100%",
                aspectRatio: "5 / 4",
                borderRadius: 12,
                objectFit: "cover",
                display: "block",
              }}
            />
            <div style={{ marginTop: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 22, color: "#fff" }}>{selected.name}</div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  color: "rgb(8,234,227)",
                  marginTop: 4,
                  letterSpacing: 0.5,
                }}
              >
                {selected.role}
              </div>
              <div style={{ display: "flex", gap: 20, marginTop: 14 }}>
                <DayTabs activeDay={activeDays[modalIndex]} onSelect={(d, e) => setDay(modalIndex, d, e)} />
              </div>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: 14,
                  color: "#fff",
                  lineHeight: 1.6,
                  marginTop: 16,
                }}
              >
                {BIO}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
