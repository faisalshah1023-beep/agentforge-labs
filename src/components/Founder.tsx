const skills = [
  "AI Agents",
  "RAG Systems",
  "MCP",
  "n8n",
  "Next.js",
  "Automation Architecture",
];

export default function Founder() {
  return (
    <section className="bg-[#fffaf0] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto flex h-80 w-full max-w-sm items-center justify-center overflow-hidden rounded-[2rem] border border-[#eadfcb] bg-gradient-to-br from-[#17151f] via-[#2b2340] to-[#3a2513] shadow-2xl shadow-stone-900/10">
          <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-amber-300/20 blur-2xl" />
          <div className="absolute bottom-8 right-8 h-28 w-28 rounded-full bg-violet-500/25 blur-2xl" />
          <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full border border-amber-100/15 bg-amber-50/[0.08] text-5xl font-bold text-amber-200">
            SF
          </div>
          <p className="absolute bottom-6 text-xs font-semibold uppercase tracking-[0.25em] text-stone-400">
            Founder
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-700">
            Founder
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17151f] md:text-5xl">
            Built by Shah Faisal
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-700">
            AI Automation Engineer focused on building AI agents, RAG systems,
            MCP integrations, WhatsApp automations, and custom business software
            for growing companies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#eadfcb] bg-[#f7f2e8] px-4 py-2 text-sm font-semibold text-stone-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
