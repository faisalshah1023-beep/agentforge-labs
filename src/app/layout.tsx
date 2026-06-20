import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentforge-labs.vercel.app"),
  title: "AgentForge Labs | AI Agents, RAG Systems & Automation Solutions",
  description:
    "We build AI agents, RAG systems, WhatsApp automations, MCP integrations and custom workflows for service businesses.",
  openGraph: {
    title: "AgentForge Labs | AI Agents, RAG Systems & Automation Solutions",
    description:
      "We build AI agents, RAG systems, WhatsApp automations, MCP integrations and custom workflows for service businesses.",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentForge Labs | AI Agents, RAG Systems & Automation Solutions",
    description:
      "AI agents, RAG systems, WhatsApp automations, MCP integrations and custom workflows for service businesses.",
    images: ["/opengraph-image"],
  },
  keywords: [
    "automation agency",
    "full stack developer",
    "full-stack development",
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
