const useCases = [
  {
    title: "Team of AI Agents",
    subtitle: "WhatsApp-based multi-agent assistant for daily business operations.",
    problem:
      "Business owners and teams manage daily work across WhatsApp, email, calendars, contact lists, research tabs, and internal notes. Simple requests like scheduling a meeting, finding a contact, drafting an email, or researching a company can create unnecessary back-and-forth and manual work.",
    solution:
      "Team of AI Agents turns WhatsApp into a multi-agent operations assistant. It receives text messages and voice notes, transcribes audio, normalizes the request, and routes it to a Supervisor AI Agent that can use specialized tools for contacts, email, scheduling, research, memory, and voice responses.",
    targetUsers: [
      "Business owners managing work from WhatsApp",
      "Founders who need a lightweight AI executive assistant",
      "Sales and operations teams handling daily follow-ups",
      "Agencies and remote teams that rely on WhatsApp communication",
    ],
    workflowSummary: [
      "WhatsApp Trigger receives the incoming user message.",
      "Switch node detects whether the message is text or audio.",
      "Audio messages receive a temporary processing reply and are transcribed into text.",
      "Text messages are normalized through an Edit Fields node.",
      "The final user text is passed to a Supervisor AI Agent.",
      "The Supervisor uses DeepSeek Chat Model, Window Buffer Memory, Contacts Database, Email Agent, Calendar Agent, and Research Agent.",
      "An IF node decides whether external processing is needed.",
      "The assistant replies directly through WhatsApp or generates audio through an HTTP Request flow before responding.",
    ],
    keyFeatures: [
      "WhatsApp-first AI assistant for daily operations",
      "Text and voice-note support with transcription",
      "Supervisor Agent for intent routing and decision-making",
      "Conversation memory for follow-up questions",
      "Contact lookup, email support, calendar scheduling, and research tools",
      "Optional generated audio replies through an external API such as ElevenLabs",
    ],
    scenarios: [
      "Schedule a meeting with a contact from a WhatsApp voice note.",
      "Find a contact and draft a follow-up email from a short message.",
      "Research a company before a sales call and return a concise summary.",
      "Answer follow-up questions using recent conversation memory.",
      "Send either a text response or generated audio response back to the user.",
    ],
    technicalComponents: [
      "n8n workflow automation",
      "WhatsApp Trigger and WhatsApp Send Message nodes",
      "Switch node for text/audio routing",
      "Audio transcription step",
      "Edit Fields normalization",
      "Supervisor AI Agent with DeepSeek Chat Model",
      "Window Buffer Memory",
      "Contacts Database, Email Agent, Calendar Agent, and Research Agent",
      "IF routing and HTTP Request for external audio generation",
    ],
    businessValue:
      "The workflow reduces admin overhead by letting teams complete operational tasks from the communication channel they already use. It improves response speed, reduces context switching, and creates a scalable assistant that can be extended with CRM, invoicing, reporting, or customer support tools.",
    successCriteria: [
      "WhatsApp text and voice inputs are processed correctly.",
      "Voice notes are transcribed accurately.",
      "The Supervisor Agent routes tasks to the right tool or agent.",
      "Contacts, email, calendar, and research requests complete reliably.",
      "Users receive accurate WhatsApp replies in text or audio format.",
    ],
    accent: "from-emerald-400 to-cyan-300",
  },
  {
    title: "Human in the Loop Agent",
    subtitle: "AI-assisted sales email drafting with human approval before sending.",
    problem:
      "Sales teams spend too much time writing personalized outreach emails from scratch, but fully automated AI sending can be risky. Without human review, AI-generated emails may include incorrect details, weak positioning, off-brand tone, or unapproved claims before reaching a client.",
    solution:
      "Human in the Loop Agent generates a personalized sales email draft from Airtable project data, sends it to a human reviewer for approval, and only sends the email through Gmail after approval. If the reviewer declines the draft, a Revision Agent rewrites it using the feedback and sends it back into the approval loop.",
    targetUsers: [
      "Sales teams sending personalized outreach",
      "Founders managing follow-ups manually",
      "Agencies sending proposals, intros, and client updates",
      "Teams that want AI assistance without fully automated sending",
    ],
    workflowSummary: [
      "Airtable Trigger starts the workflow from a new or updated sales/project record.",
      "Sales Agent reads relevant details from the Project Database.",
      "DeepSeek Chat Model generates a personalized sales email draft.",
      "Set Email formats the draft into an email-ready structure.",
      "Get Feedback sends the draft to a human reviewer and waits for a response.",
      "Check Feedback evaluates whether the reviewer approved or declined the draft.",
      "Approved emails are sent through Gmail.",
      "Declined drafts are rewritten by the Revision Agent and returned to the approval loop.",
    ],
    keyFeatures: [
      "Airtable-triggered sales email automation",
      "Personalized AI-generated first drafts",
      "Human approval before any message is sent",
      "Reviewer feedback collection and evaluation",
      "Revision Agent for improving declined drafts",
      "Approval loop that repeats until the email is accepted",
    ],
    scenarios: [
      "Generate a new lead outreach email when a prospect is added to Airtable.",
      "Create a proposal follow-up after a discovery call record is updated.",
      "Rewrite a declined draft with reviewer feedback such as making it shorter or more consultative.",
      "Keep AI-generated sales communication from being sent without approval.",
      "Maintain consistent messaging quality across outreach campaigns.",
    ],
    technicalComponents: [
      "n8n workflow automation",
      "Airtable Trigger and Project Database lookup",
      "Sales Agent with DeepSeek Chat Model",
      "Set Email formatting node",
      "Get Feedback approval step",
      "Check Feedback decision node",
      "Revision Agent with structured output support",
      "Gmail Send Email node",
    ],
    approvalFlow: [
      "Sales Agent creates the first draft.",
      "The draft is formatted and sent to a reviewer.",
      "The reviewer approves or declines the message.",
      "Approved drafts are sent through Gmail.",
      "Declined drafts are revised using reviewer feedback.",
      "The revised email returns to the approval step until accepted.",
    ],
    businessValue:
      "The workflow gives sales teams the speed of AI drafting while preserving human control over client-facing communication. It reduces repetitive writing, improves consistency, protects brand voice, and prevents unapproved AI-generated emails from reaching prospects or clients.",
    successCriteria: [
      "Airtable records successfully trigger the workflow.",
      "Sales Agent uses project data to create relevant email drafts.",
      "Reviewers can approve, decline, and provide feedback.",
      "Approved emails are sent successfully through Gmail.",
      "Declined drafts are revised and returned to the approval loop.",
      "No AI-generated email is sent without human approval.",
    ],
    accent: "from-amber-300 to-orange-400",
  },
];

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-amber-200">
        {title}
      </h4>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <p key={item} className="flex gap-3 text-sm leading-relaxed text-stone-300">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
            <span>{item}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-[#17151f] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
            Workflow Use Cases
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Product-ready n8n systems with clear approval paths and agent teams
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-300">
            These workflow use cases show how AI agents can support real business operations while keeping the process practical, controlled, and measurable.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {useCases.map((useCase) => (
            <article
              key={useCase.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#201d2b] shadow-2xl shadow-black/20"
            >
              <div className={`h-1.5 bg-gradient-to-r ${useCase.accent}`} />
              <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone-400">
                    Use Case
                  </p>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">
                    {useCase.title}
                  </h3>
                  <p className="mt-3 text-base font-semibold text-amber-100">
                    {useCase.subtitle}
                  </p>

                  <div className="mt-8 space-y-5">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-amber-200">
                        Problem
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        {useCase.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-amber-200">
                        Solution
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        {useCase.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-amber-200">
                        Business Value
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        {useCase.businessValue}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <DetailList title="Target Users" items={useCase.targetUsers} />
                  <DetailList title="Key Features" items={useCase.keyFeatures} />
                  <DetailList title="Workflow Summary" items={useCase.workflowSummary} />
                  <DetailList title="Example User Scenarios" items={useCase.scenarios} />
                  <DetailList title="Technical Components" items={useCase.technicalComponents} />
                  {"approvalFlow" in useCase && useCase.approvalFlow ? (
                    <DetailList title="Human Approval Flow" items={useCase.approvalFlow} />
                  ) : (
                    <DetailList title="Success Criteria" items={useCase.successCriteria} />
                  )}
                  {"approvalFlow" in useCase && useCase.approvalFlow ? (
                    <div className="md:col-span-2">
                      <DetailList title="Success Criteria" items={useCase.successCriteria} />
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
