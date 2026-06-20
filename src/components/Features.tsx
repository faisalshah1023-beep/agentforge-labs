const services = [
  ["AI Agents", "Custom agents for sales, support, operations and lead qualification."],
  ["RAG Knowledge Systems", "Private AI assistants trained on company data and documents."],
  ["WhatsApp Automation", "Lead capture, appointment booking and follow-up automation."],
  ["Workflow Automation", "n8n and custom workflows that eliminate repetitive tasks."],
  ["MCP Integrations", "Connect Claude, Cursor and AI systems to real business tools."],
  ["Custom Internal Tools", "Dashboards, portals and business applications."],
];

const voiceAgentServices = [
  ["Outbound Call Agents", "Automated outbound calls for appointment reminders, lead follow-up, and review requests."],
  ["Inbound Call Receptionists", "AI phone receptionists that answer calls, qualify leads, and book appointments in real time."],
  ["Voice + Calendar + CRM Integration", "Voice agents connected to calendar systems and CRMs so calls result in real booked appointments, not just transcripts."],
];

export default function Features() {
  return (
    <section id="services" className="bg-[#f7f2e8] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-violet-700">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17151f] md:text-5xl">
            Premium automation services for growing service businesses
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-700">
            We design, build, and integrate AI systems that connect to the tools
            your business already uses, then turn repetitive work into reliable
            workflows.
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-0 rounded-3xl border border-[#eadfcb] bg-[#fffaf0] p-6 shadow-sm shadow-stone-900/5 md:grid-cols-2 md:p-8">
          {services.map(([title, description]) => (
            <div
              key={title}
              className="border-b border-[#eadfcb] py-6 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <h3 className="text-lg font-semibold text-[#17151f]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-[#eadfcb] bg-[#fffaf0] p-6 shadow-sm shadow-stone-900/5 md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-violet-700">
              Voice AI Agents
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#17151f] md:text-4xl">
              Voice AI Agents
            </h3>
            <p className="mt-4 text-base leading-relaxed text-stone-700 md:text-lg">
              AI agents that can make and receive real phone calls — for appointment reminders, lead follow-up, intake calls, and customer support.
            </p>
          </div>

          <div className="mt-8 grid gap-x-10 md:grid-cols-3">
            {voiceAgentServices.map(([title, description]) => (
              <div key={title} className="border-t border-[#eadfcb] py-6">
                <h4 className="text-lg font-semibold text-[#17151f]">{title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "VAPI",
              "Retell AI",
              "ElevenLabs",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#eadfcb] bg-[#f7f2e8] px-3 py-1 text-xs font-medium text-stone-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
