const footerLinks = {
  Services: [
    ["Websites + Apps", "#services"],
    ["Clinic Systems", "#solutions"],
    ["Real Estate Leads", "#solutions"],
    ["AI Automations", "#projects"],
  ],
  Portfolio: [
    ["Projects", "#projects"],
    ["Proof", "#proof"],
    ["Tech Stack", "#tech-stack"],
    ["Process", "#process"],
  ],
  Contact: [
    ["Email", "mailto:faisalshah1023@gmail.com"],
    ["WhatsApp", "tel:+923175338412"],
    ["LinkedIn", "https://www.linkedin.com/in/shah-faisal-2b57103a6"],
    ["Instagram", "https://www.instagram.com/shahfaisal._01"],
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2438] bg-[#17151f] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-violet-500 text-sm font-bold text-white">
                AF
              </span>
              <span className="text-lg font-semibold tracking-tight">
                AgentForge <span className="text-amber-300">Labs</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-400">
              AgentForge Labs builds full-stack websites, MVPs, AI agents, and
              automations for clinics, real estate teams, gyms, agencies, local
              services, and small tech founders.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white">{category}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-sm text-stone-400 transition-colors hover:text-amber-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-amber-100/10 pt-8 sm:flex-row">
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} Shah Faisal. All rights
            reserved.
          </p>
          <p className="text-sm text-stone-500">
            Full-Stack Development · AI Agents · Automation
          </p>
        </div>
      </div>
    </footer>
  );
}
