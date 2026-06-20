const tools = [
  "OpenAI",
  "Claude",
  "n8n",
  "LangChain",
  "Pinecone",
  "Supabase",
  "WhatsApp",
  "Vercel",
  "MCP",
];

export default function TrustBar() {
  return (
    <section className="border-y border-amber-100/10 bg-[#17151f] py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
          Built Using Modern AI Infrastructure
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9">
          {tools.map((tool, index) => (
            <div
              key={tool}
              className="group rounded-2xl border border-amber-100/10 bg-amber-50/[0.06] px-4 py-4 text-center text-sm font-semibold text-stone-200 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-amber-300/10"
              style={{ transitionDelay: `${index * 20}ms` }}
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
