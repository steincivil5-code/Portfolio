import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Arthur Vega — Senior AI Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 45%, #4c1d95 100%)",
          color: "white",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, opacity: 0.85 }}>
          Senior AI Product Engineer
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>Arthur Vega</div>
          <div style={{ fontSize: 30, maxWidth: 900, opacity: 0.9, lineHeight: 1.35 }}>
            Production AI systems — LLM apps, agents, and cloud platforms that turn experiments into
            reliable products.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, opacity: 0.75 }}>arthurvega.dev</div>
      </div>
    ),
    { ...size }
  );
}
