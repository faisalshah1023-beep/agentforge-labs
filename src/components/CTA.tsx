export default function CTA() {
  return (
    <section id="contact" className="bg-[#f7f2e8] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#17151f] via-[#2b2340] to-[#3a2513] px-8 py-16 text-center shadow-2xl shadow-stone-950/20 md:px-16 md:py-24">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Need a website, app, or automation system that feels custom?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-stone-300">
              AgentForge Labs is run by Shah Faisal, a full-stack developer, vibe
              coder, and automation builder. Send your business problem, app idea,
              workflow screenshots, API docs, or tool list and I will turn it into
              a real working system.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="mailto:faisalshah1023@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-300 to-orange-400 px-8 py-3.5 text-base font-semibold text-[#17151f] shadow-xl shadow-amber-900/25 transition-all hover:brightness-105"
              >
                Start a Project
              </a>
              <a
                href="tel:+923175338412"
                className="inline-flex items-center justify-center rounded-full border border-amber-100/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:border-amber-300/40 hover:bg-white/10"
              >
                WhatsApp / Phone
              </a>
            </div>

            <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
              {[
                ["Email", "faisalshah1023@gmail.com", "mailto:faisalshah1023@gmail.com"],
                ["WhatsApp / Phone", "+92 317 533 8412", "tel:+923175338412"],
                ["LinkedIn", "linkedin.com/in/shah-faisal", "https://www.linkedin.com/in/shah-faisal-2b57103a6"],
                ["Instagram", "@shahfaisal._01", "https://www.instagram.com/shahfaisal._01"],
              ].map(([label, value, href]) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-2xl border border-amber-100/10 bg-amber-50/[0.06] p-4 transition-colors hover:border-amber-300/40"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-200">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">{value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
