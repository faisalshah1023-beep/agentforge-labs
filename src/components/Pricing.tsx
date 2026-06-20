const pricingPlans = [
  {
    name: "Starter",
    price: "$150–$300",
    description: "Landing pages, simple automations, single-workflow builds",
    features: ["Focused scope", "One core workflow or page", "Testing and handoff"],
  },
  {
    name: "Growth",
    price: "$400–$900",
    description: "Multi-step automations, WhatsApp/booking systems, AI agents with memory",
    features: ["Multi-step workflow", "AI agent with memory", "Business tool integration"],
  },
  {
    name: "Custom/Agency",
    price: "Custom quote",
    priceNote: "Typically $1,000+ depending on scope",
    description: "Multi-agent systems, RAG pipelines, full MVP builds, white-label agency work",
    features: ["Custom architecture", "MCP/RAG integrations", "White-label delivery option"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#fffaf0] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-700">
             Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17151f] md:text-5xl">
             How Builds Are Priced
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-700">
            Every business is different, but these starting points help you choose
            the right level of build before requesting a custom proposal.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-7 ${
                index === 1
                  ? "border-2 border-amber-400 bg-[#17151f] text-white shadow-2xl shadow-amber-900/20"
                  : "border border-[#eadfcb] bg-[#f7f2e8] shadow-sm shadow-stone-900/5"
              }`}
            >
              {index === 1 && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-300 to-orange-400 px-4 py-1 text-xs font-semibold text-[#17151f]">
                  Popular
                </span>
              )}

              <h3 className={index === 1 ? "text-xl font-semibold text-white" : "text-xl font-semibold text-[#17151f]"}>
                {plan.name}
              </h3>
              <p className={index === 1 ? "mt-2 text-sm leading-relaxed text-stone-300" : "mt-2 text-sm leading-relaxed text-stone-700"}>
                {plan.description}
              </p>

              <div className="mt-7 flex items-end gap-2">
                <span className={index === 1 ? "text-5xl font-bold text-white" : "text-5xl font-bold text-[#17151f]"}>
                  {plan.price}
                </span>
              </div>
              {plan.priceNote ? (
                <p className={index === 1 ? "mt-2 text-sm text-stone-300" : "mt-2 text-sm text-stone-600"}>
                  {plan.priceNote}
                </p>
              ) : null}

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
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
                Get Custom Proposal
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
