// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   HiArrowUpRight,
//   HiCheckCircle,
//   HiOutlineChatBubbleLeftRight,
//   HiOutlineCog6Tooth,
//   HiOutlineDocumentMagnifyingGlass,
//   HiOutlineArrowPath,
//   HiOutlineClock,
//   HiOutlineGlobeAlt,
//   HiOutlineUserGroup,
//   HiOutlineSparkles,
// } from "react-icons/hi2";
// import Reveal from "../../components/Reveal";
// import CTAStrip from "../../components/CTAStrip";
// import Counter from "../../components/Counter";
// import AIChat from "../../assets/AIChat.jpg";

// const steps = [
//   {
//     icon: HiOutlineDocumentMagnifyingGlass,
//     title: "Train on Your Data",
//     desc: "We feed your FAQs, docs, and support history so the bot speaks your product fluently from day one.",
//   },
//   {
//     icon: HiOutlineCog6Tooth,
//     title: "Configure the Flow",
//     desc: "Set up conversation flows, escalation rules, and tone — fully customized to your brand voice.",
//   },
//   {
//     icon: HiOutlineArrowPath,
//     title: "Go Live & Learn",
//     desc: "Deploy across web, WhatsApp, or app in days. The bot keeps improving from every conversation.",
//   },
// ];

// const benefits = [
//   { icon: HiOutlineClock, title: "24/7 Instant Replies", desc: "No more waiting in queue — customers get answers instantly, any time of day." },
//   { icon: HiOutlineGlobeAlt, title: "Multilingual Support", desc: "Talk to customers in their language without hiring a multilingual team." },
//   { icon: HiOutlineUserGroup, title: "Smart Human Handoff", desc: "Complex queries route to your team automatically, with full context attached." },
// ];

// const stats = [
//   { to: 95, suffix: "%", label: "Queries auto-resolved" },
//   { to: 3, suffix: "s", label: "Avg. response time" },
//   { to: 24, suffix: "/7", label: "Always available" },
// ];

// export default function AIChatbotSupport() {
//   return (
//     <>
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-saffron-glow">
//         <motion.div
//           className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-saffron-500/15 blur-3xl"
//           animate={{ x: [0, 30, 0], y: [0, 25, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="pointer-events-none absolute -right-16 top-32 h-72 w-72 rounded-full bg-saffron-700/15 blur-3xl"
//           animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
//           transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
//         />

//         <div className="section relative grid items-center gap-12 md:grid-cols-2">
//           <Reveal>
//             <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-xs font-medium text-saffron-400">
//               <HiOutlineSparkles /> AI Chatbot & Support
//             </span>
//             <h1 className="text-4xl font-bold leading-tight md:text-5xl">
//               Support That Never{" "}
//               <span className="bg-saffron-gradient bg-clip-text text-transparent">Sleeps</span>
//             </h1>
//             <p className="mt-6 text-offwhite/60 md:text-lg">
//               DevixoAI's Chatbot & Support suite handles customer questions instantly, resolves
//               common issues on its own, and hands off tricky ones to your team — with full
//               context, every time.
//             </p>
//             <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//               <Link to="/contact" className="btn-primary">
//                 Get Started Free <HiArrowUpRight />
//               </Link>
//               <Link to="/pricing" className="btn-outline">
//                 View Pricing
//               </Link>
//             </div>
//           </Reveal>

//           <Reveal delay={0.15} className="relative">
//             <motion.div
//               animate={{ y: [0, -14, 0] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//               className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-800 shadow-card"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=60"
//                 alt="AI chatbot support conversation"
//                 className="h-56 w-full object-cover sm:h-72 md:h-80"
//               />
//             </motion.div>

//             <motion.div
//               className="absolute -bottom-5 -left-3 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-3 shadow-card backdrop-blur sm:block"
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineChatBubbleLeftRight /> Online now
//               </p>
//               <p className="text-xs text-offwhite/50">1,204 chats resolved today</p>
//             </motion.div>
//           </Reveal>
//         </div>
//       </section>

//       {/* STATS */}
//       <section className="border-y border-ink-700 bg-ink-900/50 py-10">
//         <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 sm:grid-cols-3">
//           {stats.map((s, i) => (
//             <Reveal key={s.label} delay={i * 0.1} className="text-center">
//               <p className="text-3xl font-bold text-saffron-400">
//                 <Counter to={s.to} suffix={s.suffix} />
//               </p>
//               <p className="mt-1 text-sm text-offwhite/50">{s.label}</p>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="section">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">How the Support Bot Works</h2>
//           <p className="mt-4 text-offwhite/60">
//             From training to launch, we set up the full flow — you just review and approve.
//           </p>
//         </Reveal>

//         <div className="relative mt-14 grid gap-8 md:grid-cols-3">
//           <div className="absolute left-0 right-0 top-9 hidden h-px bg-ink-700 md:block" />
//           {steps.map((s, i) => (
//             <Reveal key={s.title} delay={i * 0.12} className="relative text-center">
//               <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-saffron-gradient text-2xl text-ink-950 shadow-glow">
//                 <s.icon />
//               </div>
//               <h3 className="mt-5 font-semibold">{s.title}</h3>
//               <p className="mt-2 text-sm text-offwhite/60">{s.desc}</p>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* IMAGE + BENEFITS */}
//       <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
//         <Reveal>
//           <img
//             src={AIChat}
//             alt="Team using AI support dashboard"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//         <Reveal delay={0.1}>
//           <h2 className="text-3xl font-bold md:text-4xl">Why Teams Choose Our Chatbot</h2>
//           <div className="mt-8 space-y-6">
//             {benefits.map((b) => (
//               <div key={b.title} className="flex gap-4">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-xl text-saffron-500">
//                   <b.icon />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">{b.title}</h3>
//                   <p className="mt-1 text-sm text-offwhite/60">{b.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Reveal>
//       </section>

//       {/* USE CASES GRID */}
//       <section className="section">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">Built for Every Support Channel</h2>
//         </Reveal>
//         <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {["Website Live Chat", "WhatsApp Support", "Order & Refund Queries", "Lead Qualification"].map((t, i) => (
//             <Reveal key={t} delay={i * 0.08}>
//               <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card h-full text-center">
//                 <HiCheckCircle className="mx-auto mb-3 text-2xl text-saffron-500" />
//                 <p className="text-sm font-medium">{t}</p>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       <CTAStrip />
//     </>
//   );
// }



import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiArrowUpRight,
  HiCheckCircle,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCog6Tooth,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineArrowPath,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
  HiOutlineSparkles,
} from "react-icons/hi2";
import Reveal from "../../components/Reveal";
import CTAStrip from "../../components/CTAStrip";
import Counter from "../../components/Counter";
import AIChat from "../../assets/AIChat.jpg";

const steps = [
  {
    icon: HiOutlineDocumentMagnifyingGlass,
    title: "Train on Your Data",
    desc: "We feed your FAQs, docs, and support history so the bot speaks your product fluently from day one.",
  },
  {
    icon: HiOutlineCog6Tooth,
    title: "Configure the Flow",
    desc: "Set up conversation flows, escalation rules, and tone — fully customized to your brand voice.",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Go Live & Learn",
    desc: "Deploy across web, WhatsApp, or app in days. The bot keeps improving from every conversation.",
  },
];

const benefits = [
  { icon: HiOutlineClock, title: "24/7 Instant Replies", desc: "No more waiting in queue — customers get answers instantly, any time of day." },
  { icon: HiOutlineGlobeAlt, title: "Multilingual Support", desc: "Talk to customers in their language without hiring a multilingual team." },
  { icon: HiOutlineUserGroup, title: "Smart Human Handoff", desc: "Complex queries route to your team automatically, with full context attached." },
];

const stats = [
  { to: 95, suffix: "%", label: "Queries auto-resolved" },
  { to: 3, suffix: "s", label: "Avg. response time" },
  { to: 24, suffix: "/7", label: "Always available" },
];

export default function AIChatbotSupport() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-saffron-glow">
        <motion.div
          className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-saffron-500/15 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -right-16 top-32 h-72 w-72 rounded-full bg-saffron-700/15 blur-3xl"
          animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="section relative grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-xs font-medium text-saffron-400">
              <HiOutlineSparkles /> AI Chatbot & Support
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Support That Never{" "}
              <span className="bg-saffron-gradient bg-clip-text text-transparent">Sleeps</span>
            </h1>
            <p className="mt-6 text-offwhite/60 md:text-lg">
              DevixoAI's Chatbot & Support suite handles customer questions instantly, resolves
              common issues on its own, and hands off tricky ones to your team — with full
              context, every time.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get Started Free <HiArrowUpRight />
              </Link>
              <Link to="/pricing" className="btn-outline">
                View Pricing
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-800 shadow-card"
            >
              <img
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=60"
                alt="AI chatbot support conversation"
                className="h-56 w-full object-cover sm:h-72 md:h-80"
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-5 -left-3 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-3 shadow-card backdrop-blur sm:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
                <HiOutlineChatBubbleLeftRight /> Online now
              </p>
              <p className="text-xs text-offwhite/50">1,204 chats resolved today</p>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-ink-700 bg-ink-900/50 py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <p className="text-3xl font-bold text-saffron-400">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-offwhite/50">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">How the Support Bot Works</h2>
          <p className="mt-4 text-offwhite/60">
            From training to launch, we set up the full flow — you just review and approve.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-ink-700 md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-saffron-gradient text-2xl text-ink-950 shadow-glow">
                <s.icon />
              </div>
              <h3 className="mt-5 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-offwhite/60">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* IMAGE + BENEFITS */}
      <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
        {/* <Reveal>
          <img
            src={AIChat}
            alt="Team using AI support dashboard"
            className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
          />
        </Reveal> */}
                  <Reveal delay={0.15} className="relative">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-800 shadow-card"
            >
              <img
                src={AIChat}
                alt="AI chatbot support conversation"
                className="h-64 w-full object-cover sm:h-80 md:h-96"
              />

              {/* dark gradient so chat bubbles stay readable over the photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />

              {/* chat bubbles overlay — appear one by one like a live conversation */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-3 sm:gap-2.5 sm:p-4">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="ml-auto max-w-[75%] rounded-2xl rounded-br-sm bg-saffron-gradient px-3 py-2 text-xs font-medium text-ink-950 shadow-card sm:max-w-[65%] sm:px-4 sm:py-2.5 sm:text-sm"
                >
                  Where's my order #4521?
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                  className="mr-auto flex max-w-[80%] items-start gap-2 sm:max-w-[70%]"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-800 text-xs text-saffron-400 sm:h-7 sm:w-7">
                    <HiOutlineSparkles />
                  </div>
                  <div className="rounded-2xl rounded-bl-sm bg-ink-900/90 px-3 py-2 text-xs text-offwhite/90 backdrop-blur sm:px-4 sm:py-2.5 sm:text-sm">
                    Checking your order now...
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.9 }}
                  className="mr-auto flex max-w-[85%] items-start gap-2 sm:max-w-[75%]"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-800 text-xs text-saffron-400 sm:h-7 sm:w-7">
                    <HiOutlineSparkles />
                  </div>
                  <div className="rounded-2xl rounded-bl-sm bg-ink-900/90 px-3 py-2 text-xs text-offwhite/90 backdrop-blur sm:px-4 sm:py-2.5 sm:text-sm">
                    ✅ Out for delivery — arriving today by 6 PM!
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-5 -left-3 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-3 shadow-card backdrop-blur sm:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
                <HiOutlineChatBubbleLeftRight /> Online now
              </p>
              <p className="text-xs text-offwhite/50">1,204 chats resolved today</p>
            </motion.div>
          </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl font-bold md:text-4xl">Why Teams Choose Our Chatbot</h2>
          <div className="mt-8 space-y-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-xl text-saffron-500">
                  <b.icon />
                </div>
                <div>
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="mt-1 text-sm text-offwhite/60">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* USE CASES GRID */}
      <section className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Built for Every Support Channel</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {["Website Live Chat", "WhatsApp Support", "Order & Refund Queries", "Lead Qualification"].map((t, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card h-full text-center">
                <HiCheckCircle className="mx-auto mb-3 text-2xl text-saffron-500" />
                <p className="text-sm font-medium">{t}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTAStrip />
    </>
  );
}