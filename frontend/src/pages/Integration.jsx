


// import { motion } from "framer-motion";
// import PageHeader from "./PageHeader";
// import Reveal from "../components/Reveal";
// import CTAStrip from "../components/CTAStrip";

// const tools = [
//   {
//     name: "Slack",
//     category: "Communication",
//     desc: "Get instant alerts and AI-generated summaries delivered straight into your team channels.",
//     logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/slack.svg",
//   },
//   {
//     name: "Google Workspace",
//     category: "Productivity",
//     desc: "Sync docs, sheets and calendars so your AI workflows stay connected to daily work.",
//     logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg",
//   },
//   {
//     name: "Microsoft 365",
//     category: "Productivity",
//     desc: "Plug into Outlook, Teams and Excel to automate reporting and communication.",
//     logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftoffice.svg",
//   },
//   {
//     name: "Zapier",
//     category: "Automation",
//     desc: "Connect DevixAI to 5,000+ apps without writing a single line of integration code.",
//     logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zapier.svg",
//   },
//   {
//     name: "AWS",
//     category: "Cloud",
//     desc: "Deploy and scale your custom AI models on infrastructure you already trust.",
//     logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg",
//   },
//   {
//     name: "Notion",
//     category: "Knowledge Base",
//     desc: "Train chatbots directly on your Notion docs and keep them updated automatically.",
//     logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/notion.svg",
//   },
//   {
//     name: "HubSpot",
//     category: "CRM",
//     desc: "Sync leads and customer data so your AI tools always work with the latest context.",
//     logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hubspot.svg",
//   },
//   {
//     name: "Stripe",
//     category: "Payments",
//     desc: "Trigger automations and analytics straight from real-time payment and billing events.",
//     logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stripe.svg",
//   },
// ];

// const angleStep = 360 / tools.length;
// const positionedTools = tools.map((t, i) => {
//   const angle = -90 + i * angleStep;
//   const rad = (angle * Math.PI) / 180;
//   return {
//     ...t,
//     x: 50 + 44 * Math.cos(rad),
//     y: 50 + 44 * Math.sin(rad),
//   };
// });

// const dotColors = ["#FF8C1A", "#FFC169", "#FFFFFF"];

// export default function Integration() {
//   return (
//     <>
//       <PageHeader
//         title="Integrations"
//         subtitle="Connect DevixAI with the tools your team already uses — no rip-and-replace, no workflow disruption."
//       />

//            {/* CIRCULAR SHOWCASE — desktop/tablet only */}
//       <section className="section !pt-0 relative hidden overflow-hidden md:block">
//         {/* animated background glow — replaces the flat black */}
//         <motion.div
//           className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-saffron-500/10 blur-3xl"
//           animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="pointer-events-none absolute -left-10 top-10 h-72 w-72 rounded-full bg-saffron-700/10 blur-3xl"
//           animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="pointer-events-none absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-saffron-500/10 blur-3xl"
//           animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
//           transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
//         />

//         <div className="relative mx-auto aspect-square w-full max-w-2xl lg:max-w-3xl">
//           <div className="absolute inset-[6%] rounded-full border border-dashed border-ink-700" />

//           {dotColors.map((color, i) => (
//             <motion.div
//               key={color}
//               className="absolute inset-[6%]"
//               initial={{ rotate: i * 120 }}
//               animate={{ rotate: i * 120 + 360 }}
//               transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
//             >
//               <span
//                 className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-glow"
//                 style={{ background: color }}
//               />
//             </motion.div>
//           ))}

//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//             <h2 className="max-w-[200px] text-lg font-bold sm:text-xl lg:max-w-[260px] lg:text-2xl">
//               Seamlessly Integrating with Your Preferred Tools
//             </h2>
//             <p className="mt-3 max-w-[190px] text-xs text-offwhite/60 lg:max-w-[230px] lg:text-sm">
//               Connect DevixAI with the platforms your team already relies on.
//             </p>
//           </div>

//           {positionedTools.map((t, i) => (
//             <motion.div
//               key={t.name}
//               initial={{ opacity: 0, scale: 0.85 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -4, scale: 1.04 }}
//               transition={{ duration: 0.4, delay: i * 0.05 }}
//               className="absolute flex w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 whitespace-nowrap rounded-xl border border-ink-700 bg-ink-800 p-3 text-center shadow-card lg:w-32 lg:gap-2.5 lg:p-4"
//               style={{ left: `${t.x}%`, top: `${t.y}%` }}
//             >
//               <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 lg:h-9 lg:w-9">
//                 <img src={t.logo} alt={`${t.name} logo`} className="h-full w-full object-contain" />
//               </div>
//               <span className="text-[11px] font-semibold leading-tight lg:text-xs">{t.name}</span>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* MOBILE FALLBACK — simple grid, no circular layout */}
//       <section className="section !pt-0 md:hidden">
//         <Reveal className="mb-8 text-center">
//           <h2 className="text-2xl font-bold">Seamlessly Integrating with Your Preferred Tools</h2>
//           <p className="mt-3 text-sm text-offwhite/60">
//             Connect DevixAI with the platforms your team already relies on.
//           </p>
//         </Reveal>
//         <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
//           {tools.map((t, i) => (
//             <Reveal key={t.name} delay={i * 0.05}>
//               <div className="flex flex-col items-center gap-2 rounded-xl border border-ink-700 bg-ink-800 p-3 text-center">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white p-1.5">
//                   <img src={t.logo} alt={`${t.name} logo`} className="h-full w-full object-contain" />
//                 </div>
//                 <span className="text-[11px] font-semibold leading-tight">{t.name}</span>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* DETAILED GRID — full descriptions, all screens */}
//       <section className="section">
//         <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
//           <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Explore Every Integration</h2>
//           <p className="mt-3 text-sm text-offwhite/60 sm:mt-4 sm:text-base">
//             Each connection is built to keep your AI workflows in sync with the tools you already use.
//           </p>
//         </Reveal>

//         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
//           {tools.map((t, i) => (
//             <Reveal key={t.name} delay={i * 0.06}>
//               <motion.div
//                 whileHover={{ y: -6 }}
//                 transition={{ duration: 0.25 }}
//                 className="card flex h-full flex-col items-center gap-3 text-center"
//               >
//                 <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2.5 shadow-card">
//                   <img src={t.logo} alt={`${t.name} logo`} className="h-full w-full object-contain" />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-semibold sm:text-base">{t.name}</h3>
//                   <span className="mt-1 inline-block rounded-full bg-saffron-500/10 px-2.5 py-0.5 text-[11px] font-medium text-saffron-400">
//                     {t.category}
//                   </span>
//                 </div>
//                 <p className="text-xs text-offwhite/60 sm:text-sm">{t.desc}</p>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* NOTE */}
//       <section className="section !pt-0">
//         <Reveal className="mx-auto max-w-2xl rounded-2xl border border-ink-700 bg-ink-800/60 p-6 text-center text-sm text-offwhite/60 shadow-card sm:p-8">
//           Don't see the tool you use? We build custom integrations for almost any API — tell us
//           what you're working with and we'll tell you honestly how fast we can connect it.
//         </Reveal>
//       </section>

//       <CTAStrip />
//     </>
//   );
// }







import { motion } from "framer-motion";
import PageHeader from "./PageHeader";
import Reveal from "../components/Reveal";
import CTAStrip from "../components/CTAStrip";

const tools = [
  {
    name: "Slack",
    category: "Communication",
    desc: "Get instant alerts and AI-generated summaries delivered straight into your team channels.",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/slack.svg",
  },
  {
    name: "Google Workspace",
    category: "Productivity",
    desc: "Sync docs, sheets and calendars so your AI workflows stay connected to daily work.",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg",
  },
  {
    name: "Microsoft 365",
    category: "Productivity",
    desc: "Plug into Outlook, Teams and Excel to automate reporting and communication.",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftoffice.svg",
  },
  {
    name: "Zapier",
    category: "Automation",
    desc: "Connect DevixoAI to 5,000+ apps without writing a single line of integration code.",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zapier.svg",
  },
  {
    name: "AWS",
    category: "Cloud",
    desc: "Deploy and scale your custom AI models on infrastructure you already trust.",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg",
  },
  {
    name: "Notion",
    category: "Knowledge Base",
    desc: "Train chatbots directly on your Notion docs and keep them updated automatically.",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/notion.svg",
  },
  {
    name: "HubSpot",
    category: "CRM",
    desc: "Sync leads and customer data so your AI tools always work with the latest context.",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hubspot.svg",
  },
  {
    name: "Stripe",
    category: "Payments",
    desc: "Trigger automations and analytics straight from real-time payment and billing events.",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stripe.svg",
  },
];

export default function Integration() {
  return (
    <>
      <PageHeader
        title="Integrations"
        subtitle="Connect DevixoAI with the tools your team already uses — no rip-and-replace, no workflow disruption."
      />

      <section className="section !pt-0 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {tools.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="card flex h-full flex-col items-center gap-3 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2.5 shadow-card">
                <img
                  src={t.logo}
                  alt={`${t.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold">{t.name}</h3>
                <span className="mt-1 inline-block rounded-full bg-saffron-500/10 px-2.5 py-0.5 text-[11px] font-medium text-saffron-400">
                  {t.category}
                </span>
              </div>
              <p className="text-sm text-offwhite/60">{t.desc}</p>
            </motion.div>
          </Reveal>
        ))}
      </section>

      {/* NOTE */}
      <section className="section !pt-0">
        <Reveal className="mx-auto max-w-2xl rounded-2xl border border-ink-700 bg-ink-800/60 p-6 text-center text-sm text-offwhite/60 shadow-card sm:p-8">
          Don't see the tool you use? We build custom integrations for almost any API — tell us
          what you're working with and we'll tell you honestly how fast we can connect it.
        </Reveal>
      </section>

      <CTAStrip />
    </>
  );
}


