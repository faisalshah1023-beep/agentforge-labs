const testimonials = [
  {
    name: "Clinic Operations Lead",
    industry: "Healthcare",
    result: "Reduced manual appointment handling with an AI receptionist workflow.",
  },
  {
    name: "Real Estate Consultant",
    industry: "Real Estate",
    result: "Improved lead qualification speed with automated follow-up and reporting.",
  },
  {
    name: "Local Fitness Owner",
    industry: "Fitness",
    result: "Recovered more trial leads using WhatsApp reminders and CRM updates.",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-[#f7f2e8] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-700">
            Social Proof
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17151f] md:text-5xl">
            Built around outcomes clients care about
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-[#eadfcb] bg-[#fffaf0] p-7 shadow-sm shadow-stone-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300"
            >
              <p className="text-sm leading-relaxed text-stone-700">
                &ldquo;{testimonial.result}&rdquo;
              </p>
              <div className="mt-6 border-t border-[#eadfcb] pt-5">
                <p className="font-semibold text-[#17151f]">{testimonial.name}</p>
                <p className="mt-1 text-sm text-violet-700">{testimonial.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
