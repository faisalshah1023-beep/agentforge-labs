const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AgentForge Labs",
    description:
      "AI automation agency building AI agents, RAG systems, WhatsApp automations, MCP integrations and custom workflows for service businesses.",
    url: "https://agentforge-labs.vercel.app",
    founder: "Shah Faisal",
    areaServed: "Worldwide",
    sameAs: ["https://www.linkedin.com/in/shah-faisal-2b57103a6"],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AgentForge Labs",
    serviceType: "AI Automation, Full-Stack Development, Workflow Automation",
    provider: {
      "@type": "Person",
      name: "Shah Faisal",
    },
    offers: [
      { "@type": "Offer", name: "AI Agents" },
      { "@type": "Offer", name: "RAG Systems" },
      { "@type": "Offer", name: "WhatsApp Automation" },
      { "@type": "Offer", name: "MCP Integrations" },
    ],
  },
];

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
