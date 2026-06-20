const services = [
  ["AI", "AI Agents", "Custom agents for sales, support, operations and lead qualification."],
  ["RAG", "RAG Knowledge Systems", "Private AI assistants trained on company data and documents."],
  ["WA", "WhatsApp Automation", "Lead capture, appointment booking and follow-up automation."],
  ["n8n", "Workflow Automation", "n8n and custom workflows that eliminate repetitive tasks."],
  ["MCP", "MCP Integrations", "Connect Claude, Cursor and AI systems to real business tools."],
  ["DEV", "Custom Internal Tools", "Dashboards, portals and business applications."],
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

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
