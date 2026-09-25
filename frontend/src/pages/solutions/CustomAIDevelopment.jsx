// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   HiArrowUpRight,
//   HiCheckCircle,
//   HiOutlineCpuChip,
//   HiOutlineCog6Tooth,
//   HiOutlineDocumentMagnifyingGlass,
//   HiOutlineArrowPath,
//   HiOutlineCodeBracketSquare,
//   HiOutlinePuzzlePiece,
//   HiOutlineRocketLaunch,
//   HiOutlineSparkles,
// } from "react-icons/hi2";
// import Reveal from "../../components/Reveal";
// import CTAStrip from "../../components/CTAStrip";
// import Counter from "../../components/Counter";

// const steps = [
//   {
//     icon: HiOutlineDocumentMagnifyingGlass,
//     title: "Discover & Scope",
//     desc: "We dig into your workflows and data to define exactly what the AI needs to solve — no generic templates, no guesswork.",
//   },
//   {
//     icon: HiOutlineCodeBracketSquare,
//     title: "Design & Build",
//     desc: "Our engineers architect and train a model built around your business logic, integrated directly into your existing stack.",
//   },
//   {
//     icon: HiOutlineArrowPath,
//     title: "Test, Ship & Support",
//     desc: "Rigorous testing, smooth deployment, and ongoing tuning as your data and needs evolve over time.",
//   },
// ];

// const benefits = [
//   { icon: HiOutlinePuzzlePiece, title: "Built Around Your Stack", desc: "No forcing your business into a rigid tool — the AI is shaped to fit how you already work." },
//   { icon: HiOutlineCpuChip, title: "Own Your Model & Data", desc: "Full ownership of the model, weights, and data — no vendor lock-in, no black box." },
//   { icon: HiOutlineRocketLaunch, title: "Scales With You", desc: "Architecture built to handle growing data, users, and use cases without a rebuild." },
// ];

// const stats = [
//   { to: 40, suffix: "+", label: "Custom models shipped" },
//   { to: 98, suffix: "%", label: "Client retention rate" },
//   { to: 6, suffix: " wks", label: "Avg. time to first build" },
// ];

// const useCases = [
//   "Document Intelligence & Extraction",
//   "Industry-Specific Copilots",
//   "Fraud & Anomaly Detection",
//   "Recommendation Engines",
// ];

// export default function CustomAIDevelopment() {
//   return (
//     <>
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-saffron-glow">
//         <motion.div
//           className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-saffron-500/15 blur-3xl"
//           animate={{ x: [0, 30, 0], y: [0, 25, 0], scale: [1, 1.1, 1] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="pointer-events-none absolute -right-16 top-32 h-72 w-72 rounded-full bg-saffron-700/15 blur-3xl"
//           animate={{ x: [0, -25, 0], y: [0, 20, 0], scale: [1, 1.15, 1] }}
//           transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
//         />

//         <div className="section relative grid items-center gap-12 md:grid-cols-2">
//           <Reveal>
//             <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-xs font-medium text-saffron-400">
//               <HiOutlineSparkles /> Custom AI Development
//             </span>
//             <h1 className="text-4xl font-bold leading-tight md:text-5xl">
//               AI Built Around{" "}
//               <span className="bg-saffron-gradient bg-clip-text text-transparent">Your Business</span>
//             </h1>
//             <p className="mt-6 text-offwhite/60 md:text-lg">
//               Off-the-shelf tools only get you so far. DevixoAI designs, trains, and ships custom
//               AI systems shaped around your exact workflows, data, and goals — from first
//               prototype to production at scale.
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
//                 src="https://picsum.photos/seed/custom-ai-hero/900/700"
//                 alt="Custom AI model architecture visualization"
//                 className="h-56 w-full object-cover sm:h-72 md:h-80"
//               />
//             </motion.div>

//             <motion.div
//               className="absolute -bottom-5 -left-3 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-3 shadow-card backdrop-blur sm:block"
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineCpuChip /> Model training
//               </p>
//               <p className="text-xs text-offwhite/50">Fine-tuning on your data</p>
//             </motion.div>

//             <motion.div
//               className="absolute -top-4 -right-4 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-3 py-2 shadow-card backdrop-blur md:block"
//               animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
//               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="text-xs font-semibold text-saffron-400">✓ Fully custom-built</p>
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
//           <h2 className="text-3xl font-bold md:text-4xl">How We Build Your Custom AI</h2>
//           <p className="mt-4 text-offwhite/60">
//             A hands-on process from problem to production — built with you, not just for you.
//           </p>
//         </Reveal>

//         <div className="relative mt-14 grid gap-8 md:grid-cols-3">
//           <div className="absolute left-0 right-0 top-9 hidden h-px bg-ink-700 md:block" />
//           {steps.map((s, i) => (
//             <Reveal key={s.title} delay={i * 0.12} className="relative text-center">
//               <motion.div
//                 whileHover={{ scale: 1.08, rotate: 3 }}
//                 transition={{ duration: 0.25 }}
//                 className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-saffron-gradient text-2xl text-ink-950 shadow-glow"
//               >
//                 <s.icon />
//               </motion.div>
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
//             src="https://picsum.photos/seed/custom-ai-team/900/700"
//             alt="Engineering team building a custom AI system"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//         <Reveal delay={0.1}>
//           <h2 className="text-3xl font-bold md:text-4xl">Why Teams Choose Custom AI</h2>
//           <p className="mt-4 text-offwhite/60">
//             Generic tools force you to adapt your business to the software. We build the software
//             around your business instead.
//           </p>
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
//           <h2 className="text-3xl font-bold md:text-4xl">Custom AI Across Industries</h2>
//           <p className="mt-4 text-offwhite/60">
//             From startups to enterprise teams, we've shipped models that solve real,
//             industry-specific problems.
//           </p>
//         </Reveal>
//         <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {useCases.map((t, i) => (
//             <Reveal key={t} delay={i * 0.08}>
//               <motion.div whileHover={{ y: -6, scale: 1.03 }} transition={{ duration: 0.25 }} className="card h-full text-center">
//                 <HiCheckCircle className="mx-auto mb-3 text-2xl text-saffron-500" />
//                 <p className="text-sm font-medium">{t}</p>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* CLOSING NOTE */}
//       <section className="section !pt-0">
//         <Reveal className="mx-auto max-w-3xl rounded-2xl border border-ink-700 bg-ink-800/60 p-8 text-center shadow-card">
//           <HiOutlineCog6Tooth className="mx-auto mb-4 text-3xl text-saffron-500" />
//           <h3 className="text-xl font-semibold">Not sure what to build yet?</h3>
//           <p className="mt-3 text-sm text-offwhite/60">
//             Book a free discovery call — we'll map your workflows and tell you honestly whether a
//             custom AI build is the right fit before you spend a rupee.
//           </p>
//         </Reveal>
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
  HiOutlineCpuChip,
  HiOutlineCog6Tooth,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineArrowPath,
  HiOutlineCodeBracketSquare,
  HiOutlinePuzzlePiece,
  HiOutlineRocketLaunch,
  HiOutlineSparkles,
} from "react-icons/hi2";
import Reveal from "../../components/Reveal";
import CTAStrip from "../../components/CTAStrip";
import Counter from "../../components/Counter";

const steps = [
  {
    icon: HiOutlineDocumentMagnifyingGlass,
    title: "Discover & Scope",
    desc: "We dig into your workflows and data to define exactly what the AI needs to solve — no generic templates, no guesswork.",
  },
  {
    icon: HiOutlineCodeBracketSquare,
    title: "Design & Build",
    desc: "Our engineers architect and train a model built around your business logic, integrated directly into your existing stack.",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Test, Ship & Support",
    desc: "Rigorous testing, smooth deployment, and ongoing tuning as your data and needs evolve over time.",
  },
];

const benefits = [
  { icon: HiOutlinePuzzlePiece, title: "Built Around Your Stack", desc: "No forcing your business into a rigid tool — the AI is shaped to fit how you already work." },
  { icon: HiOutlineCpuChip, title: "Own Your Model & Data", desc: "Full ownership of the model, weights, and data — no vendor lock-in, no black box." },
  { icon: HiOutlineRocketLaunch, title: "Scales With You", desc: "Architecture built to handle growing data, users, and use cases without a rebuild." },
];

const stats = [
  { to: 40, suffix: "+", label: "Custom models shipped" },
  { to: 98, suffix: "%", label: "Client retention rate" },
  { to: 6, suffix: " wks", label: "Avg. time to first build" },
];

const useCases = [
  "Document Intelligence & Extraction",
  "Industry-Specific Copilots",
  "Fraud & Anomaly Detection",
  "Recommendation Engines",
];

export default function CustomAIDevelopment() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-saffron-glow">
        <motion.div
          className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-saffron-500/15 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 25, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -right-16 top-32 h-72 w-72 rounded-full bg-saffron-700/15 blur-3xl"
          animate={{ x: [0, -25, 0], y: [0, 20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="section relative grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-xs font-medium text-saffron-400">
              <HiOutlineSparkles /> Custom AI Development
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              AI Built Around{" "}
              <span className="bg-saffron-gradient bg-clip-text text-transparent">Your Business</span>
            </h1>
            <p className="mt-6 text-offwhite/60 md:text-lg">
              Off-the-shelf tools only get you so far. DevixoAI designs, trains, and ships custom
              AI systems shaped around your exact workflows, data, and goals — from first
              prototype to production at scale.
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
                src="https://images.unsplash.com/photo-1763568258244-9d5aa9c3ce45?fm=jpg&q=60&w=1200&auto=format&fit=crop"
                alt="Custom AI model architecture visualization"
                className="h-56 w-full object-cover sm:h-72 md:h-80"
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-5 -left-3 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-3 shadow-card backdrop-blur sm:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
                <HiOutlineCpuChip /> Model training
              </p>
              <p className="text-xs text-offwhite/50">Fine-tuning on your data</p>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-3 py-2 shadow-card backdrop-blur md:block"
              animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs font-semibold text-saffron-400">✓ Fully custom-built</p>
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
          <h2 className="text-3xl font-bold md:text-4xl">How We Build Your Custom AI</h2>
          <p className="mt-4 text-offwhite/60">
            A hands-on process from problem to production — built with you, not just for you.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-ink-700 md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12} className="relative text-center">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ duration: 0.25 }}
                className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-saffron-gradient text-2xl text-ink-950 shadow-glow"
              >
                <s.icon />
              </motion.div>
              <h3 className="mt-5 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-offwhite/60">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* IMAGE + BENEFITS */}
      <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
        <Reveal>
          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=1200&auto=format&fit=crop"
            alt="Engineering team building a custom AI system"
            className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl font-bold md:text-4xl">Why Teams Choose Custom AI</h2>
          <p className="mt-4 text-offwhite/60">
            Generic tools force you to adapt your business to the software. We build the software
            around your business instead.
          </p>
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
          <h2 className="text-3xl font-bold md:text-4xl">Custom AI Across Industries</h2>
          <p className="mt-4 text-offwhite/60">
            From startups to enterprise teams, we've shipped models that solve real,
            industry-specific problems.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((t, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6, scale: 1.03 }} transition={{ duration: 0.25 }} className="card h-full text-center">
                <HiCheckCircle className="mx-auto mb-3 text-2xl text-saffron-500" />
                <p className="text-sm font-medium">{t}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section className="section !pt-0">
        <Reveal className="mx-auto max-w-3xl rounded-2xl border border-ink-700 bg-ink-800/60 p-8 text-center shadow-card">
          <HiOutlineCog6Tooth className="mx-auto mb-4 text-3xl text-saffron-500" />
          <h3 className="text-xl font-semibold">Not sure what to build yet?</h3>
          <p className="mt-3 text-sm text-offwhite/60">
            Book a free discovery call — we'll map your workflows and tell you honestly whether a
            custom AI build is the right fit before you spend a rupee.
          </p>
        </Reveal>
      </section>

      <CTAStrip />
    </>
  );
}