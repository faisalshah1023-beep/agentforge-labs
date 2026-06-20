const faqs = [
  ["How long does implementation take?", "Simple automations can often launch in a few days. Custom AI agents, RAG systems, WhatsApp flows, and multi-step business systems usually depend on scope, integrations, credentials, and testing needs."],
  ["Do you work with existing systems?", "Yes. We can integrate with existing CRMs, Google Sheets, Gmail, WhatsApp, databases, websites, internal tools, APIs, and n8n workflows."],
  ["Can you integrate WhatsApp?", "Yes. We build WhatsApp automations for lead capture, appointment booking, FAQs, follow-ups, reminders, CRM updates, and human handoff."],
  ["What is a RAG system?", "A RAG system lets an AI assistant answer from approved company data, documents, SOPs, PDFs, and knowledge bases instead of relying on generic responses."],
  ["Do you provide support after launch?", "Yes. Support, testing, optimization, workflow fixes, and iteration can be included after launch so the system improves with real usage."],
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#f7f2e8] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-700">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17151f] md:text-5xl">
            Questions business owners ask before starting a build
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map(([question, answer]) => (
            <details
              key={question}
              className="group rounded-2xl border border-[#eadfcb] bg-[#fffaf0] p-6 shadow-sm shadow-stone-900/5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-[#17151f]">
                {question}
                <span className="text-xl text-violet-700 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-stone-700">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
