import { ImageResponse } from "next/og";

// iPhone/iPad "Add to Home Screen" + Safari tab icon. Apple icons must be
// opaque (iOS adds the rounded corners itself), so we fill the ink background
// and centre the maze-G mark with padding. File convention auto-wires the
// <link rel="apple-touch-icon">.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#15191e",
        }}
      >
        <svg width="118" height="118" viewBox="0 0 100 100" fill="none">
          <g
            stroke="#f4f1e8"
            strokeWidth={7.5}
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            <path d="M78 26 H26 V74 H74 V50 H52" />
            <path d="M64 38 H38 V62 H57" />
          </g>
          <circle cx="49" cy="50" r="9" fill="#f4f1e8" />
          <circle cx="49" cy="50" r="5.5" fill="#1fe0a0" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
