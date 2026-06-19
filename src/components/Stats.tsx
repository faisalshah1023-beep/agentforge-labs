const solutions = [
  ["Clinics", "AI receptionist, patient intake, appointment booking, reminder messages, missed-call recovery, FAQs, and human handoff."],
  ["Real Estate", "Lead capture, property deal analysis, automated follow-up, buyer/seller qualification, CRM updates, and investor reports."],
  ["Gyms and Coaches", "Trial booking, lead qualification, WhatsApp replies, class reminders, review requests, and abandoned-lead recovery."],
  ["Small Tech Owners", "MVP dashboards, internal tools, AI features, API integrations, customer support agents, and workflow prototypes."],
  ["Agencies", "White-label n8n builds, GoHighLevel systems, client portals, workflow repair, AI agent setup, and repeatable automation packages."],
  ["Local Services", "Booking systems, quote request flows, customer support, email follow-up, Google Sheets operations, and job-status notifications."],
];

export default function Stats() {
  return (
    <section id="solutions" className="bg-[#fffaf0] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-violet-700">
              Use Cases
            </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17151f] md:text-5xl">
              Niches where automation turns into real business value
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-stone-700">
            The goal is simple: help service businesses respond faster, book more
            appointments, reduce manual admin, and look more professional online.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map(([title, description], index) => (
            <div
              key={title}
              className="rounded-3xl border border-[#eadfcb] bg-gradient-to-br from-[#fffaf0] to-[#f3ead8] p-6 shadow-sm shadow-stone-900/5"
            >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#17151f] text-sm font-bold text-amber-300">
                0{index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[#17151f]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
