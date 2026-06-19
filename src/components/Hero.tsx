const trustBadges = [
  "Full-Stack Development",
  "Vibe Coding",
  "AI Automation",
  "100+ Workflows Built",
  "n8n",
  "Next.js",
  "MCP Servers",
  "RAG Agents",
  "GoHighLevel",
];

const workflowRows = [
  ["Clinics", "AI receptionist", "Bookings"],
  ["Real Estate", "Lead follow-up", "Deal analysis"],
  ["Gyms", "Membership leads", "Reminders"],
];

const clientTypes = [
  "Clinics and healthcare offices",
  "Real estate agents and investors",
  "Gyms, coaches, and local services",
  "Small SaaS and tech founders",
  "Agencies needing white-label builds",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#17151f] pt-28 pb-20 text-white md:pt-36 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(245,158,11,0.22),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(109,93,252,0.28),transparent_32%),linear-gradient(135deg,#17151f_0%,#241f35_48%,#34241b_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-50/8 px-4 py-1.5 text-sm font-medium text-amber-100 shadow-lg shadow-black/20 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.9)]" />
              AI automation engineer, full-stack developer, and vibe coder
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Automation systems for service businesses that want more clients and less admin
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-300 md:text-xl">
              AgentForge Labs builds websites, dashboards, AI agents, and
              workflow automations for clinics, real estate teams, gyms, local
              service businesses, and small tech founders. Built by Shah Faisal,
              a full-stack developer and vibe coder with 100+ automation
              workflows shipped.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-300 to-orange-400 px-7 py-3.5 text-base font-semibold text-[#17151f] shadow-xl shadow-amber-900/25 transition-all hover:shadow-amber-700/40 hover:brightness-105"
              >
                Book a Build Call
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-amber-100/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:border-amber-300/40 hover:bg-white/10"
              >
                See Client Systems
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-amber-100/10 bg-amber-50/[0.06] px-4 py-2 text-sm font-medium text-stone-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-400/20 via-violet-500/15 to-blue-500/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-amber-100/10 bg-[#211d2c]/85 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Agency Systems
                  </p>
                  <p className="mt-1 text-xs text-amber-200">
                    built for real business niches
                  </p>
                </div>
                <span className="rounded-full bg-amber-300/15 px-3 py-1 text-xs font-semibold text-amber-200">
                  Client-ready
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {workflowRows.map((row, index) => (
                  <div
                    key={row.join("-")}
                    className="rounded-2xl border border-amber-100/10 bg-[#17151f]/60 p-4"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
                        Flow 0{index + 1}
                      </span>
                      <span className="text-xs text-amber-200">Automated</span>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-3">
                      {row.map((item) => (
                        <div
                          key={item}
                          className="rounded-xl bg-white/[0.06] px-3 py-3 text-sm text-stone-200"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["100+", "workflows built"],
                  ["98", "prod executions"],
                  ["5.45s", "avg runtime"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-amber-300/10 bg-amber-300/[0.06] p-4"
                  >
                    <p className="text-2xl font-bold text-amber-100">{value}</p>
                    <p className="mt-1 text-xs text-stone-500">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-amber-100/10 bg-[#17151f]/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
                  Built For
                </p>
                <div className="mt-3 grid gap-2">
                  {clientTypes.map((type) => (
                    <div
                      key={type}
                      className="rounded-xl bg-white/[0.06] px-3 py-2 text-sm text-stone-200"
                    >
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
