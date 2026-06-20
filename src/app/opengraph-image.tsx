import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AgentForge Labs AI automation systems";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg,#17151f,#2b2340,#3a2513)",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "80px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ color: "#fcd34d", fontSize: 34, fontWeight: 700 }}>
            AgentForge Labs
          </div>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, maxWidth: 980 }}>
            AI Agents, RAG Systems & Automation Solutions
          </div>
          <div style={{ color: "#d6d3d1", fontSize: 30, maxWidth: 900 }}>
            WhatsApp automation, MCP integrations, n8n workflows and custom business systems.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
