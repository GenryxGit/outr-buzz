import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Outr Buzz — Design. Build. Buzz.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top — wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#ccff00",
            }}
          />
          <span
            style={{
              color: "#ffffff",
              fontSize: 20,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            OUTR BUZZ
          </span>
        </div>

        {/* Centre — headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p
            style={{
              color: "#ccff00",
              fontSize: 16,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Design Studio
          </p>
          <h1
            style={{
              color: "#ffffff",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              margin: 0,
              maxWidth: 800,
            }}
          >
            Design.{"\n"}Build.{"\n"}Buzz.
          </h1>
        </div>

        {/* Bottom — tagline */}
        <p
          style={{
            color: "#888888",
            fontSize: 20,
            margin: 0,
            maxWidth: 600,
          }}
        >
          Brand identity, UI/UX design, and development for brands that demand attention.
        </p>
      </div>
    ),
    { ...size }
  );
}
