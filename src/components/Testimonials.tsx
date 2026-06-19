const projects = [
  { category: "WhatsApp + MCP", title: "WhatsApp MCP Agent", description: "Multimodal WhatsApp assistant that handles text, voice notes, and images. It transcribes audio, analyzes images, routes messages through an AI agent, uses memory, searches a knowledge base, and calls MCP tools when it needs to take action.", result: "Built for real customer support, lead qualification, knowledge lookup, and tool-connected WhatsApp operations.", tags: ["WhatsApp Cloud API", "MCP", "RAG", "Gemini", "n8n"] },
  { category: "MCP Server", title: "Business Operations MCP Server", description: "Central MCP server exposing useful business tools to AI agents: todos, Airtable tasks, Gmail drafts, email sending, contact database lookup, and social post generation.", result: "Lets AI agents safely use real business tools instead of only generating text responses.", tags: ["MCP Server", "Gmail", "Airtable", "Google Sheets", "Social Media"] },
  { category: "Multi-Agent", title: "Team of AI Agents on WhatsApp", description: "Supervisor agent receives WhatsApp text or audio, transcribes voice notes, checks a contacts database, and delegates work to email, calendar, and research agents before replying back to the user.", result: "Turns WhatsApp into a business command center for research, scheduling, email, and customer communication.", tags: ["WhatsApp", "Supervisor Agent", "Calendar", "Research Agent", "DeepSeek"] },
  { category: "Appointment Booking", title: "Planner and Executive AI Booking Agent", description: "Two-agent appointment system where a planner understands the request and an executive agent creates Google Calendar events, sends Gmail confirmations, and keeps conversational memory.", result: "Designed for service businesses that need automatic booking, confirmations, and scheduling support.", tags: ["Google Calendar", "Gmail", "AI Agent", "Memory", "n8n"] },
  { category: "RAG Knowledge Base", title: "Drive to Pinecone Vector Database", description: "Automated document ingestion pipeline that watches Google Drive, downloads files, splits text, generates Gemini embeddings, and stores searchable knowledge inside Pinecone.", result: "Creates the knowledge layer needed for accurate RAG agents, support bots, and internal assistants.", tags: ["Google Drive", "Pinecone", "Gemini Embeddings", "RAG", "Vector DB"] },
  { category: "Voice AI", title: "Personal Assistant That Makes Phone Calls", description: "WhatsApp-based personal assistant that understands text and voice, uses contacts, calendar, email, phone-call tools, and a Pinecone knowledge base to take real actions for the user.", result: "Combines voice notes, RAG, phone calling, calendar, email, and contacts into one personal AI assistant.", tags: ["WhatsApp", "Phone Calls", "RAG", "Pinecone", "Calendar"] },
  { category: "Voice AI", title: "Emily Phone Call Agent", description: "VAPI-style outbound call workflow that triggers a phone call, checks live call status, waits while the call is ongoing, and updates fields when the conversation finishes.", result: "Useful for appointment reminders, lead follow-up calls, surveys, and automated outbound calling workflows.", tags: ["VAPI", "HTTP API", "Call Status", "Outbound Calls", "n8n"] },
  { category: "Clinic Automation", title: "Physical Therapy Clinic AI Receptionists", description: "Multiple clinic agents receive webhook requests, answer with memory, send Gmail messages, and handle patient communication for different clinic roles such as Kate, Rob, and Emily.", result: "Shows how a clinic can automate intake, follow-up, and patient support with specialized AI receptionists.", tags: ["Healthcare", "Gmail", "Webhooks", "AI Receptionist", "Memory"] },
  { category: "Restaurant Support", title: "Bella Vista Customer Bookings Support", description: "Restaurant support agent named Rachel uses chat memory, a Postgres knowledge base, booking email tools, and human support handoff to manage customer conversations.", result: "24/7 customer booking and support workflow with escalation when human help is needed.", tags: ["Restaurant", "Postgres", "Knowledge Base", "Bookings", "Human Handoff"] },
  { category: "Solar RAG", title: "Solar Panels Installer RAG Agent", description: "Solar installer assistant that indexes Google Drive files into Pinecone, embeds documents with Gemini, searches the vector database, and answers website or webhook questions using company knowledge.", result: "Ideal for installers and local service businesses that need quote support, FAQ answers, and document-grounded responses.", tags: ["Solar", "Pinecone", "Google Drive", "RAG", "Webhooks"] },
  { category: "GoHighLevel", title: "AI WhatsApp SMS Agents for GHL", description: "GoHighLevel-connected system with intro agent, follow-up agent, support and sales agent, knowledge-base updates, Supabase vectors, OpenAI chat models, and response routing.", result: "Built for agencies that want automated lead capture, SMS or WhatsApp replies, sales follow-up, and support workflows.", tags: ["GoHighLevel", "WhatsApp", "Supabase", "Sales Agent", "Support Agent"] },
  { category: "Content Automation", title: "LinkedIn Posting System", description: "End-to-end LinkedIn content engine that collects inputs, creates posts, selects content, generates images, publishes to LinkedIn, and saves post data for tracking.", result: "Helps creators and businesses publish consistent LinkedIn content with less manual planning and design work.", tags: ["LinkedIn", "Image Generation", "Google Sheets", "OpenAI", "Content"] },
  { category: "YouTube Automation", title: "Viral YouTube Shorts Publishing System", description: "Automated short-video pipeline that accepts a video topic, generates titles and prompts, creates images, generates video and sound, renders the project, uploads to YouTube, and sends email updates.", result: "Turns a topic into a publishable YouTube Shorts workflow with generation, rendering, upload, and reporting steps.", tags: ["YouTube", "Video Generation", "Google Drive", "Gmail", "n8n"] },
  { category: "Travel", title: "Travel Planning Agent", description: "Webhook-based travel assistant that extracts airport codes and dates, researches activities, resorts, and flights, then creates and emails a complete travel plan.", result: "Useful for travel agencies, assistants, and concierge businesses that need fast itinerary generation.", tags: ["Travel", "Flights", "Resorts", "Email Agent", "Webhooks"] },
  { category: "Real Estate", title: "Real Estate Deal Analyzer", description: "Form-triggered workflow that finds real estate deals, splits and cleans data, calculates investment numbers, aggregates results, logs them in Sheets, and emails an AI-generated summary.", result: "Screens property opportunities and prepares investor-ready analysis with less manual spreadsheet work.", tags: ["Real Estate", "Calculator", "Google Sheets", "Gemini", "Gmail"] },
  { category: "Email Automation", title: "Inbox Manager for Sorting Emails", description: "Gmail trigger classifies incoming mail with AI and routes each message into labels such as priority, personal, notifications, newsletter, business, administrative, and spam.", result: "Keeps inboxes organized automatically and helps busy founders or teams focus on important messages first.", tags: ["Gmail", "Groq", "Structured Output", "Labels", "Email"] },
  { category: "Lead Generation", title: "AI Lead Agent", description: "Chat-based lead agent that uses an AI model, memory, HTTP search, JavaScript processing, and Google Sheets logging to capture and organize lead data.", result: "A simple but practical lead capture flow for websites, chatbots, landing pages, and agency lead magnets.", tags: ["Lead Gen", "Google Sheets", "HTTP API", "JavaScript", "AI Agent"] },
  { category: "Human Review", title: "Human-in-the-Loop Sales Agent", description: "Airtable-triggered sales agent drafts client emails, requests feedback over Gmail, checks approval status, and sends the message or loops through revision until approved.", result: "Automates sales outreach while keeping humans in control before final client communication is sent.", tags: ["Airtable", "Gmail", "Human Review", "Sales Agent", "DeepSeek"] },
];

function WorkflowPreview({
  category,
  title,
  tags,
}: {
  category: string;
  title: string;
  tags: string[];
}) {
  const nodes = ["Trigger", "AI Agent", tags[0] ?? "Tool", tags[1] ?? "Action"];

  return (
    <div className="relative mb-6 overflow-hidden rounded-2xl border border-[#342d46] bg-[#17151f] p-4 shadow-inner shadow-black/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.18),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(109,93,252,0.22),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:18px_18px]" />

      <div className="relative z-10 flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-amber-200">
            Workflow Preview
          </p>
          <p className="mt-1 line-clamp-1 text-sm font-semibold text-white">
            {title}
          </p>
        </div>
        <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-amber-200">
          {category}
        </span>
      </div>

      <div className="relative z-10 mt-5 grid grid-cols-2 gap-3">
        {nodes.map((node, index) => (
          <div key={`${node}-${index}`} className="relative rounded-xl border border-white/10 bg-white/[0.07] p-3">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-amber-300 to-orange-400 text-xs font-black text-[#17151f]">
                {index + 1}
              </span>
              <span className="line-clamp-1 text-xs font-semibold text-stone-100">
                {node}
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-[#342d46]">
              <div className="h-1.5 rounded-full bg-gradient-to-r from-amber-300 to-violet-400" style={{ width: `${55 + index * 12}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-4 flex flex-wrap gap-2">
        {tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-full border border-amber-300/10 bg-amber-300/[0.06] px-2.5 py-1 text-[0.65rem] font-medium text-amber-100">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="projects" className="bg-[#f7f2e8] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-700">
            Client Systems
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17151f] md:text-5xl">
            Real systems you can offer to clinics, real estate teams, gyms, agencies, and tech founders
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex min-h-[25rem] flex-col rounded-3xl border border-[#eadfcb] bg-[#fffaf0] p-7 shadow-sm shadow-stone-900/5 transition-all hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-900/10"
            >
              <WorkflowPreview
                category={project.category}
                title={project.title}
                tags={project.tags}
              />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                {project.category}
              </p>
              <h3 className="text-xl font-semibold text-[#17151f]">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">
                {project.description}
              </p>
              <p className="mt-5 rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-4 text-sm font-medium leading-relaxed text-stone-800">
                {project.result}
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
