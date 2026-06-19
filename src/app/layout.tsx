import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AgentForge Labs | Full-Stack Apps, AI Agents & Automation Systems",
  description:
    "AgentForge Labs builds full-stack websites, MVPs, AI agents, and automation systems for clinics, real estate teams, gyms, agencies, and small tech founders.",
  keywords: [
    "automation agency",
    "full stack developer",
    "vibe coder",
    "AgentForge Labs",
    "n8n workflows",
    "OpenAI automation",
    "MCP server",
    "RAG agent",
    "VAPI voice agents",
    "GoHighLevel automation",
    "WhatsApp automation",
    "workflow automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
