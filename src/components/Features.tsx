const services = [
  ["WEB", "Websites and Client Portals", "Fast, modern landing pages, service websites, booking flows, dashboards, and MVP interfaces built with full-stack development and vibe-coding speed."],
  ["CLN", "Clinic and Healthcare Automation", "AI receptionists, appointment reminders, patient intake, missed-call follow-up, FAQ agents, Gmail updates, and human handoff workflows."],
  ["RE", "Real Estate Lead Systems", "Property lead capture, WhatsApp follow-up, deal analysis, investor reports, Google Sheets pipelines, and CRM updates for agents and investors."],
  ["GYM", "Gym and Local Business Growth", "Membership lead qualification, class reminders, WhatsApp replies, review requests, trial booking, and automated follow-up systems."],
  ["AI", "Custom AI Agents", "Supervisor, planner, sales, support, research, email, calendar, and receptionist agents with memory, tools, RAG, and MCP access."],
  ["n8n", "n8n Workflow Automation", "100+ workflows built with webhooks, schedules, API requests, Google Sheets, Gmail, Airtable, Slack, Drive, and custom JavaScript logic."],
  ["GHL", "GoHighLevel and CRM Automation", "GHL WhatsApp/SMS agents, intro flows, follow-up systems, sales/support routing, pipeline updates, and knowledge-base workflows."],
  ["MVP", "Tech Founder MVP Builds", "Small SaaS tools, internal apps, automations, AI dashboards, workflow prototypes, and productized services for founders and small tech owners."],
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
            Real systems for businesses that sell services, book appointments, and manage leads
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-700">
            AgentForge Labs is not a generic template site. It is a
            full-stack build studio for websites, MVPs, client portals, AI agents,
            and automations that help small businesses respond faster and close
            more leads.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([icon, title, description]) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-[#eadfcb] bg-[#fffaf0] p-6 shadow-sm shadow-stone-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-900/10"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-orange-400 text-sm font-bold text-white shadow-lg shadow-amber-900/20">
                {icon}
              </div>
              <h3 className="text-lg font-semibold text-[#17151f]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">
                {description}
              </p>
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-amber-400/10 transition-transform duration-300 group-hover:scale-150" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
