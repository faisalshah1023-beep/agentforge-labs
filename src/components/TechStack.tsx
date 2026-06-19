const tools = [
  "n8n",
  "OpenAI API",
  "AI Agents",
  "Prompt Engineering",
  "MCP",
  "MCP Server Trigger",
  "Webhook Integrations",
  "REST APIs",
  "VAPI",
  "Retell AI",
  "WhatsApp API",
  "Conversational AI",
  "GoHighLevel",
  "Supabase Vector Store",
  "Pinecone Vector Store",
  "Postgres Chat Memory",
  "Groq",
  "DeepSeek",
  "Google Gemini",
  "Gmail Automation",
  "Google Sheets",
  "Notion",
  "CRM Pipelines",
  "Lead Management",
  "LinkedIn Automation",
  "YouTube Automation",
  "JavaScript",
  "GitHub",
  "HTML / CSS",
  "JSON / API Design",
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="bg-[#211d2c] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
              Tech Stack
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Tools I use daily to deliver production-grade automation systems
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-amber-100/10 bg-amber-50/[0.06] px-4 py-2 text-sm font-medium text-stone-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
