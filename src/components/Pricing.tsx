const proofPoints = [
  {
    name: "Build Experience",
    value: "100+",
    description: "100+ workflow and automation systems built across service business, agency, and tech-founder use cases.",
    items: ["Full-stack websites", "AI agents and workflows", "Client-style business systems", "Reusable automation packages"],
  },
  {
    name: "Real Workflow Activity",
    value: "98",
    description: "Production executions shown inside the n8n overview, with real workflow activity, debugging, and optimization experience.",
    items: ["Execution monitoring", "Failed-run handling", "API troubleshooting", "Client handoff thinking"],
  },
  {
    name: "Practical Delivery",
    value: "5.45s",
    description: "Systems are built around clear outcomes: faster response, cleaner operations, better lead follow-up, and easier client management.",
    items: ["Fast response flows", "Webhook-first systems", "Structured outputs", "Business-friendly documentation"],
  },
];

export default function Pricing() {
  return (
    <section id="proof" className="bg-[#fffaf0] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-700">
            Proof
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17151f] md:text-5xl">
            Proof that this is more than a template website
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-700">
            The systems shown here are based on real workflows, real integrations,
            and business problems clients understand: missed leads, slow replies,
            manual admin, messy inboxes, and disconnected tools.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {proofPoints.map((point, index) => (
            <div
              key={point.name}
              className={`relative flex flex-col rounded-3xl p-7 ${
                index === 1
                  ? "border-2 border-amber-400 bg-[#17151f] text-white shadow-2xl shadow-amber-900/20"
                  : "border border-[#eadfcb] bg-[#f7f2e8] shadow-sm shadow-stone-900/5"
              }`}
            >
              {index === 1 && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-300 to-orange-400 px-4 py-1 text-xs font-semibold text-[#17151f]">
                  Dashboard Metric
                </span>
              )}

              <h3 className={index === 1 ? "text-xl font-semibold text-white" : "text-xl font-semibold text-[#17151f]"}>
                {point.name}
              </h3>
              <p className={index === 1 ? "mt-2 text-sm leading-relaxed text-stone-300" : "mt-2 text-sm leading-relaxed text-stone-700"}>
                {point.description}
              </p>

              <div className="mt-7 flex items-end gap-2">
                <span className={index === 1 ? "text-5xl font-bold text-white" : "text-5xl font-bold text-[#17151f]"}>
                  {point.value}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {point.items.map((feature) => (
                  <li
                    key={feature}
                    className={index === 1 ? "flex items-start gap-2.5 text-sm text-stone-200" : "flex items-start gap-2.5 text-sm text-stone-700"}
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-all ${
                  index === 1
                    ? "bg-gradient-to-r from-amber-300 to-orange-400 text-[#17151f] shadow-lg shadow-amber-900/25 hover:brightness-105"
                    : "border border-[#d9cbb5] text-[#17151f] hover:border-amber-400 hover:text-violet-700"
                }`}
              >
                Discuss a Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
