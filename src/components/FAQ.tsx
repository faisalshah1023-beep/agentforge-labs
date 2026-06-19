const faqs = [
  ["What do you build?", "I build full-stack websites, MVP interfaces, dashboards, client portals, AI agents, and automation systems for service businesses, agencies, and small tech founders."],
  ["Are you only an AI automation builder?", "No. I am a full-stack developer and vibe coder as well. Automation is one part of the offer, but I can also build the website, app, dashboard, API-connected tool, or MVP around the automation."],
  ["What real proof can I show to clients or recruiters?", "The site includes real workflow categories from my n8n workspace, visible dashboard metrics like 98 production executions and 5.45s average runtime, plus high-level client systems based on actual workflow screenshots."],
  ["Can you build WhatsApp and booking systems?", "Yes. I have built WhatsApp workflows that handle text, audio, and image messages, transcribe voice notes, analyze media, use memory, search knowledge bases, call MCP tools, book appointments, and reply through WhatsApp Cloud API."],
  ["Can you build MCP-connected agents?", "Yes. I have built MCP server workflows that expose tools like Gmail, Airtable todos, contacts, Google Sheets, email sending, and social content generation so agents can take structured actions."],
  ["Can you build RAG knowledge bases?", "Yes. I have built Google Drive to Pinecone and Supabase vector pipelines with document loading, text splitting, Gemini embeddings, and retrieval for support bots, solar agents, restaurant booking agents, and personal assistants."],
  ["What niches do you serve?", "AgentForge Labs is positioned for clinics, real estate teams, gyms, coaches, restaurants, solar installers, agencies, local services, and small tech owners who need websites, lead systems, booking flows, or automations."],
  ["How fast can a system be delivered?", "Simple websites, landing pages, and automations can often be delivered quickly. Complex multi-agent workflows, SaaS-style dashboards, WhatsApp systems, RAG agents, or CRM pipelines depend on integrations, credentials, test data, and approval flow."],
  ["Can this help me win Upwork, Fiverr, or remote jobs?", "Yes. The website is written like a real-world agency site so clients can quickly understand the niches, services, proof, and systems you can build."],
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#f7f2e8] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-700">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17151f] md:text-5xl">
            Questions business owners ask before starting a build
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map(([question, answer]) => (
            <details
              key={question}
              className="group rounded-2xl border border-[#eadfcb] bg-[#fffaf0] p-6 shadow-sm shadow-stone-900/5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-[#17151f]">
                {question}
                <span className="text-xl text-violet-700 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-stone-700">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
