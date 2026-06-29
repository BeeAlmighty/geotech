import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — digital engineering studio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const paper = "#0b0816";
const ink = "#f0ecfb";
const slate = "#c2b9d6";
const graphite = "#9389ad";
const mint = "#a78bfa";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: paper,
          backgroundImage:
            "radial-gradient(60% 60% at 85% 0%, rgba(167,139,250,0.2) 0%, transparent 60%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 64px 64px, 64px 64px",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        {/* top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 4,
            color: graphite,
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* the real maze-G mark */}
            <svg width="52" height="52" viewBox="0 0 100 100" fill="none" style={{ marginRight: 18 }}>
              <g stroke={slate} strokeWidth={7.5} strokeLinecap="square" strokeLinejoin="miter">
                <path d="M78 26 H26 V74 H74 V50 H52" />
                <path d="M64 38 H38 V62 H57" />
              </g>
              <circle cx="49" cy="50" r="9" fill={ink} />
              <circle cx="49" cy="50" r="5.5" fill={mint} />
            </svg>
            Geotech Digital Horizon Limited
          </div>
          <div>Lat 6.45° N</div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 82,
              lineHeight: 1.06,
              fontWeight: 700,
              color: ink,
              letterSpacing: -2,
            }}
          >
            Powering growth
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              fontSize: 82,
              lineHeight: 1.06,
              fontWeight: 700,
              color: ink,
              letterSpacing: -2,
            }}
          >
            through smart
            <span style={{ color: ink, marginLeft: 22, display: "flex", flexDirection: "column" }}>
              technology.
              <div style={{ display: "flex", height: 10, backgroundColor: mint, marginTop: -2 }} />
            </span>
          </div>
        </div>

        {/* bottom row: services */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
            fontSize: 26,
            color: slate,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: mint }}>01</span> Software
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: mint }}>02</span> Automation
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: mint }}>03</span> White-label SaaS
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
