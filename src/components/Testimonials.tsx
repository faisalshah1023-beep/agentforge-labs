import Image from "next/image";

const projects = [
  { title: "AI Receptionist for Clinics", problem: "Clinic staff miss calls, repeat the same intake questions, and lose appointment opportunities after hours.", solution: "An AI receptionist answers FAQs, captures patient details, books appointments, and escalates sensitive requests to staff.", outcome: "More booked appointments with less front-desk admin.", tags: ["Clinic", "AI Agent", "Booking"] },
  { title: "Real Estate Lead Qualification Agent", problem: "Agents receive cold or incomplete leads and spend hours manually following up.", solution: "A lead agent qualifies buyers and sellers, captures budget and intent, updates a sheet or CRM, and triggers follow-up.", outcome: "Faster lead response and better prioritization of high-intent prospects.", tags: ["Real Estate", "CRM", "Follow-up"] },
  { title: "WhatsApp MCP Appointment Agent", image: "/workflows/whatsapp-mcp-agent.png", problem: "Clinics and service businesses lose time answering repeated WhatsApp messages, listening to voice notes, checking images, and manually booking appointments.", solution: "A multimodal WhatsApp MCP agent that understands text, voice messages, and images, then replies in text or voice. It uses RAG memory, MCP tools, and web search so it can answer questions, book appointments, and adapt to almost any niche by changing the instructions.", outcome: "Saves admin time, books appointments automatically, and gives each niche a smart WhatsApp assistant without rebuilding the whole system.", tags: ["WhatsApp MCP", "Voice + Image", "RAG Memory", "Appointments", "Web Search"] },
  { title: "RAG Knowledge Assistant", problem: "Teams waste time searching documents or answering the same internal questions repeatedly.", solution: "A private RAG assistant retrieves answers from approved documents, SOPs, PDFs, and knowledge bases.", outcome: "Staff get accurate answers faster without digging through files.", tags: ["RAG", "Pinecone", "Supabase"] },
  { title: "YouTube Content Automation Pipeline", problem: "Creators struggle to consistently research, script, package, and publish content ideas.", solution: "A content pipeline generates briefs, scripts, titles, metadata, assets, and publishing checklists from one idea.", outcome: "A repeatable content workflow that reduces production bottlenecks.", tags: ["YouTube", "Content", "Workflow"] },
  { title: "Gym Membership Follow-up System", problem: "Gyms lose leads after trial requests, missed calls, or delayed manual follow-up.", solution: "An automation qualifies new leads, sends reminders, follows up by WhatsApp or SMS, and updates the sales pipeline.", outcome: "More trial bookings and fewer lost membership opportunities.", tags: ["Gyms", "Leads", "CRM"] },
];

function WorkflowPreview({
  title,
  tags,
}: {
  title: string;
  tags: string[];
}) {
  const nodes = ["Trigger", "AI Agent", tags[0] ?? "Tool", tags[1] ?? "Action"];

  return (
    <div className="mb-6 overflow-hidden rounded-2xl border border-[#342d46] bg-[#17151f] p-4 shadow-inner shadow-black/30">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-amber-200">
            System Flow
          </p>
          <p className="mt-1 line-clamp-1 text-sm font-semibold text-white">
            {title}
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        {nodes.map((node, index) => (
          <div key={`${node}-${index}`} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-300 text-xs font-black text-[#17151f]">
              {index + 1}
            </span>
            <span className="line-clamp-1 text-xs font-semibold text-stone-100">
              {node}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-full border border-amber-300/10 bg-amber-300/[0.06] px-2.5 py-1 text-[0.65rem] font-medium text-amber-100">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ScreenshotPreview({ src, title }: { src: string; title: string }) {
  return (
    <div className="mb-6 overflow-hidden rounded-2xl border border-[#342d46] bg-[#17151f] p-2 shadow-2xl shadow-stone-950/20">
      <div className="flex items-center justify-between border-b border-amber-100/10 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-amber-200">
          Real n8n Workflow
        </span>
      </div>
      <Image
        src={src}
        alt={`${title} workflow screenshot`}
        width={1680}
        height={879}
        className="mt-2 h-auto w-full rounded-xl object-cover"
        sizes="(min-width: 1024px) 66vw, 100vw"
      />
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="projects" className="bg-[#f7f2e8] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-700">
            Recent Automation Systems
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17151f] md:text-5xl">
            Real automation systems built around clear business outcomes
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`flex min-h-[25rem] flex-col rounded-3xl border border-[#eadfcb] bg-[#fffaf0] p-7 shadow-sm shadow-stone-900/5 transition-all hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-900/10 ${project.image ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              {project.image ? (
                <ScreenshotPreview src={project.image} title={project.title} />
              ) : (
                <WorkflowPreview title={project.title} tags={project.tags} />
              )}
              <h3 className="text-xl font-semibold text-[#17151f]">{project.title}</h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-stone-700">
                <p><span className="font-semibold text-[#17151f]">Problem:</span> {project.problem}</p>
                <p><span className="font-semibold text-[#17151f]">Solution:</span> {project.solution}</p>
              </div>
              <p className="mt-5 rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-4 text-sm font-medium leading-relaxed text-stone-800">
                <span className="font-semibold">Business Outcome:</span> {project.outcome}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#eadfcb] bg-[#f7f2e8] px-3 py-1 text-xs font-medium text-stone-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
