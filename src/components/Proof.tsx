const proofStats = [
  {
    label: "Build Experience",
    value: "100+",
    text: "Workflow and automation systems built across service business, agency, and tech-founder use cases.",
  },
  {
    label: "Live n8n Dashboard Snapshot",
    value: "98",
    text: "Production executions shown inside the n8n overview, with real workflow activity, debugging, and optimization experience.",
  },
  {
    label: "Practical Delivery",
    value: "5.45s",
    text: "Fast response flows, webhook-first systems, structured outputs, and business-friendly documentation.",
  },
];

export default function Proof() {
  return (
    <section id="proof" className="bg-[#f7f2e8] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-700">
            Proof
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17151f] md:text-5xl">
            Live proof from real n8n workflows, not a template
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-700">
            The systems shown here are based on real workflows, real integrations,
            and business problems clients understand.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {proofStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-[#eadfcb] bg-[#fffaf0] p-7 shadow-sm shadow-stone-900/5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
                {stat.label}
              </p>
              <p className="mt-5 text-5xl font-bold tracking-tight text-[#17151f]">
                {stat.value}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-stone-700">
                {stat.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-medium text-stone-600">
          Pulled directly from my n8n workspace — not placeholder numbers.
        </p>
      </div>
    </section>
  );
}
