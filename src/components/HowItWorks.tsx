const steps = [
  ["01", "Discovery Call", "We identify the business goal, bottleneck, current tools, and the automation opportunity with the fastest path to ROI."],
  ["02", "Automation Blueprint", "We map the triggers, data sources, AI logic, integrations, approval points, and success metrics before building."],
  ["03", "Build & Integration", "We connect the AI agents, RAG systems, WhatsApp flows, n8n workflows, APIs, databases, and business tools."],
  ["04", "Launch & Optimization", "We test the system with real inputs, launch safely, monitor performance, and improve the workflow after real usage."],
];

export default function HowItWorks() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#17151f] py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.14),transparent_32%),radial-gradient(circle_at_80%_40%,rgba(109,93,252,0.2),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            From idea to live automation in four clear steps
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-300">
            The same process works for websites, MVPs, dashboards, booking
            systems, WhatsApp agents, CRM follow-ups, and internal tools.
          </p>
        </div>

        <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, description]) => (
            <div
              key={number}
              className="rounded-3xl border border-amber-100/10 bg-[#241f35]/70 p-6 backdrop-blur"
            >
              <span className="text-sm font-bold tracking-[0.3em] text-amber-300">
                STEP {number}
              </span>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
