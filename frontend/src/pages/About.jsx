
// import { motion } from "framer-motion";
// import {
//   HiOutlineLightBulb,
//   HiOutlineHeart,
//   HiOutlineRocketLaunch,
//   HiOutlineGlobeAsiaAustralia,
// } from "react-icons/hi2";
// import PageHeader from "./PageHeader";
// import Reveal from "../components/Reveal";
// import CTAStrip from "../components/CTAStrip";
// import Counter from "../components/Counter";

// const values = [
//   {
//     icon: HiOutlineLightBulb,
//     title: "Build for Real Problems",
//     desc: "We don't chase trends. Every product we ship starts with a real workflow that's broken and needs fixing.",
//   },
//   {
//     icon: HiOutlineHeart,
//     title: "Obsess Over Craft",
//     desc: "From code to design, we sweat the details most teams skip — because that's what separates good from forgettable.",
//   },
//   {
//     icon: HiOutlineRocketLaunch,
//     title: "Move Fast, Stay Honest",
//     desc: "We ship quickly, but never at the cost of telling clients the truth about what will and won't work.",
//   },
//   {
//     icon: HiOutlineGlobeAsiaAustralia,
//     title: "Think Beyond Borders",
//     desc: "Based in India, building for the world — our clients span industries, timezones, and continents.",
//   },
// ];

// const stats = [
//   { to: 50, suffix: "+", label: "Projects delivered" },
//   { to: 15, suffix: "+", label: "Industries served" },
//   { to: 4, suffix: "", label: "Years building AI" },
// ];

// export default function About() {
//   return (
//     <>
//       <PageHeader
//         title="About DevixoAI India"
//         subtitle="We're on a mission to make AI-powered software accessible to every business — not just the ones with enterprise budgets."
//       />

//       {/* WHO WE ARE */}
//       <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
//         <Reveal className="relative overflow-hidden rounded-2xl border border-ink-700 shadow-card">
//           <motion.img
//             animate={{ scale: [1, 1.04, 1] }}
//             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//             src="https://images.unsplash.com/photo-1758873269317-51888e824b28?fm=jpg&q=60&w=1200&auto=format&fit=crop"
//             alt="DevixoAI team collaborating in the office"
//             className="h-72 w-full object-cover md:h-full"
//           />
//         </Reveal>
//         <Reveal delay={0.1}>
//           <h2 className="text-2xl font-bold md:text-3xl">Who We Are</h2>
//           <p className="mt-4 text-offwhite/60">
//             DevixoAI India is a team of AI engineers, designers and product builders crafting
//             custom AI software and SaaS platforms for ambitious businesses across India and
//             beyond.
//           </p>
//           <p className="mt-4 text-offwhite/60">
//             We started with a simple frustration: powerful AI tools existed, but most small and
//             mid-sized businesses couldn't access them without hiring an entire engineering team.
//             So we built DevixoAI to close that gap — combining deep technical expertise with a
//             product mindset, so every business gets AI that actually fits how they work.
//           </p>
//           <p className="mt-4 text-offwhite/60">
//             Today, our work spans automation, custom AI models, chatbots, analytics platforms and
//             full SaaS products — all built in-house, end to end.
//           </p>
//         </Reveal>
//       </section>

//       {/* STATS */}
//       <section className="border-y border-ink-700 bg-ink-900/50 py-10">
//         <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 px-6 sm:grid-cols-3">
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

//       {/* VALUES */}
//       <section className="section">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">What We Stand For</h2>
//           <p className="mt-4 text-offwhite/60">
//             The principles that shape every product we build and every client relationship we
//             keep.
//           </p>
//         </Reveal>

//         <div className="mt-14 grid gap-6 sm:grid-cols-2">
//           {values.map((v, i) => (
//             <Reveal key={v.title} delay={i * 0.1}>
//               <motion.div
//                 whileHover={{ y: -6 }}
//                 transition={{ duration: 0.25 }}
//                 className="card flex h-full gap-4"
//               >
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-xl text-saffron-500">
//                   <v.icon />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">{v.title}</h3>
//                   <p className="mt-1 text-sm text-offwhite/60">{v.desc}</p>
//                 </div>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       <CTAStrip />
//     </>
//   );
// }





// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   HiArrowUpRight,
//   HiOutlineLightBulb,
//   HiOutlineHeart,
//   HiOutlineRocketLaunch,
//   HiOutlineGlobeAsiaAustralia,
//   HiOutlineFlag,
//   HiOutlineEye,
//   HiOutlineMagnifyingGlass,
//   HiOutlinePencilSquare,
//   HiOutlineCodeBracket,
//   HiOutlineSparkles,
// } from "react-icons/hi2";
// import Reveal from "../components/Reveal";
// import CTAStrip from "../components/CTAStrip";
// import Counter from "../components/Counter";
// import Marquee from "../components/Marquee";
// import LineFlowBackground from "../components/LineFlowBackground";

// const values = [
//   {
//     icon: HiOutlineLightBulb,
//     title: "Build for Real Problems",
//     desc: "We don't chase trends. Every product we ship starts with a real workflow that's broken and needs fixing.",
//   },
//   {
//     icon: HiOutlineHeart,
//     title: "Obsess Over Craft",
//     desc: "From code to design, we sweat the details most teams skip — because that's what separates good from forgettable.",
//   },
//   {
//     icon: HiOutlineRocketLaunch,
//     title: "Move Fast, Stay Honest",
//     desc: "We ship quickly, but never at the cost of telling clients the truth about what will and won't work.",
//   },
//   {
//     icon: HiOutlineGlobeAsiaAustralia,
//     title: "Think Beyond Borders",
//     desc: "Based in India, building for the world — our clients span industries, timezones, and continents.",
//   },
// ];

// const stats = [
//   { to: 50, suffix: "+", label: "Projects delivered" },
//   { to: 15, suffix: "+", label: "Industries served" },
//   { to: 4, suffix: "", label: "Years building AI" },
// ];

// const focusAreas = ["Custom AI Models", "SaaS Products", "Workflow Automation", "AI Chatbots", "Data Analytics"];

// const milestones = [
//   {
//     year: "2022",
//     title: "DevixoAI is founded",
//     desc: "A small team of engineers sets out to make practical AI available to everyday businesses.",
//   },
//   {
//     year: "2023",
//     title: "First automation suite ships",
//     desc: "Our first workflow-automation product goes live with early clients and real feedback.",
//   },
//   {
//     year: "2024",
//     title: "SaaS platform launch",
//     desc: "CRM, chatbot and analytics modules come together on one connected platform.",
//   },
//   {
//     year: "2025",
//     title: "Going global",
//     desc: "We start delivering projects across industries, timezones and continents.",
//   },
//   {
//     year: "2026",
//     title: "Scaling intelligent products",
//     desc: "Custom AI models and deeper integrations become the core of what we build.",
//   },
// ];

// const process = [
//   { icon: HiOutlineMagnifyingGlass, title: "Discover", desc: "We learn your workflow, your data and where the biggest time-sinks hide." },
//   { icon: HiOutlinePencilSquare, title: "Design", desc: "We map the solution and share clear prototypes before writing production code." },
//   { icon: HiOutlineCodeBracket, title: "Build", desc: "Engineers ship in short cycles, so you see working software every week." },
//   { icon: HiOutlineRocketLaunch, title: "Launch & Support", desc: "We deploy, monitor and keep improving the product after go-live." },
// ];

// const techStack = ["React", "Node.js", "Python", "PostgreSQL", "TensorFlow", "OpenAI", "AWS", "Docker", "Next.js", "FastAPI"];

// export default function About() {
//   return (
//     <>
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-saffron-glow">
//         <LineFlowBackground />
//         <div className="section relative text-center">
//           <Reveal>
//             <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-[11px] font-medium text-saffron-400 sm:mb-5 sm:text-xs">
//               <HiOutlineSparkles /> About DevixoAI India
//             </span>
//             <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
//               We Turn{" "}
//               <span className="bg-saffron-gradient bg-clip-text text-transparent">Complex AI</span>{" "}
//               into Software That Just Works
//             </h1>
//             <p className="mx-auto mt-5 max-w-2xl text-sm text-offwhite/60 sm:mt-6 sm:text-base md:text-lg">
//               We're on a mission to make AI-powered software accessible to every business — not
//               just the ones with enterprise budgets.
//             </p>
//           </Reveal>
//         </div>
//       </section>

//       {/* WHO WE ARE */}
//       <section className="section grid items-center gap-10 !pt-0 sm:gap-12 md:grid-cols-2">
//         <Reveal className="relative overflow-hidden rounded-2xl border border-ink-700 shadow-card">
//           <motion.img
//             animate={{ scale: [1, 1.04, 1] }}
//             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//             src="https://images.unsplash.com/photo-1758873269317-51888e824b28?fm=jpg&q=60&w=1200&auto=format&fit=crop"
//             alt="DevixoAI team collaborating in the office"
//             className="h-64 w-full object-cover sm:h-80 md:h-full"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
//           <motion.div
//             className="absolute bottom-4 left-4 rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-2.5 shadow-card backdrop-blur"
//             animate={{ y: [0, -6, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           >
//             <p className="text-sm font-semibold text-saffron-400">Since 2022</p>
//             <p className="text-xs text-offwhite/60">Built in India, for the world</p>
//           </motion.div>
//         </Reveal>

//         <Reveal delay={0.25}>
//           <h2 className="text-2xl font-bold sm:text-3xl">Who We Are</h2>
//           <p className="mt-4 text-sm text-offwhite/60 sm:text-base">
//             DevixoAI India is a team of AI engineers, designers and product builders crafting
//             custom AI software and SaaS platforms for ambitious businesses across India and
//             beyond.
//           </p>
//           <p className="mt-4 text-sm text-offwhite/60 sm:text-base">
//             We started with a simple frustration: powerful AI tools existed, but most small and
//             mid-sized businesses couldn't access them without hiring an entire engineering team.
//             So we built DevixoAI to close that gap — combining deep technical expertise with a
//             product mindset, so every business gets AI that actually fits how they work.
//           </p>
//           <p className="mt-4 text-sm text-offwhite/60 sm:text-base">
//             Today, our work spans automation, custom AI models, chatbots, analytics platforms and
//             full SaaS products — all built in-house, end to end.
//           </p>
//           <div className="mt-6 flex flex-wrap gap-2">
//             {focusAreas.map((f) => (
//               <span
//                 key={f}
//                 className="rounded-full border border-saffron-500/30 bg-saffron-500/10 px-3 py-1 text-[11px] font-medium text-saffron-400 sm:text-xs"
//               >
//                 {f}
//               </span>
//             ))}
//           </div>
//         </Reveal>
//       </section>

//       {/* STATS */}
//       <section className="border-y border-ink-700 bg-ink-900/50 py-8 sm:py-10">
//         <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 px-6 sm:grid-cols-3 sm:gap-8">
//           {stats.map((s, i) => (
//             <Reveal key={s.label} delay={i * 0.1} className="text-center">
//               <p className="text-2xl font-bold text-saffron-400 sm:text-3xl">
//                 <Counter to={s.to} suffix={s.suffix} />
//               </p>
//               <p className="mt-1 text-xs text-offwhite/50 sm:text-sm">{s.label}</p>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* MISSION + VISION */}
//       <section className="section">
//         <div className="grid gap-6 md:grid-cols-2">
//           {[
//             {
//               icon: HiOutlineFlag,
//               title: "Our Mission",
//               text: "To put practical, reliable AI in the hands of every business — with software that is simple to adopt, honest about its limits, and built to deliver measurable results.",
//             },
//             {
//               icon: HiOutlineEye,
//               title: "Our Vision",
//               text: "A world where any team, of any size, can automate the boring parts of their work and spend their time on the parts only humans can do.",
//             },
//           ].map((c, i) => (
//             <Reveal key={c.title} delay={i * 0.15}>
//               <motion.div
//                 whileHover={{ y: -6, borderColor: "rgba(255,140,26,0.5)" }}
//                 transition={{ duration: 0.25 }}
//                 className="card relative h-full overflow-hidden"
//               >
//                 <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-saffron-500/10 blur-2xl" />
//                 <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-gradient text-xl text-ink-950 shadow-glow">
//                   <c.icon />
//                 </div>
//                 <h3 className="relative text-lg font-semibold sm:text-xl">{c.title}</h3>
//                 <p className="relative mt-2 text-sm text-offwhite/60 sm:text-base">{c.text}</p>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* JOURNEY TIMELINE */}
//       <section className="section !pt-0">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Our Journey So Far</h2>
//           <p className="mt-3 text-sm text-offwhite/60 sm:mt-4 sm:text-base">
//             A few milestones that shaped how we build and who we build for.
//           </p>
//         </Reveal>

//         <div className="relative mx-auto mt-10 max-w-4xl sm:mt-14">
//           {/* line that draws itself as the section scrolls into view */}
//           <motion.div
//             className="absolute left-3 top-0 h-full w-px origin-top bg-gradient-to-b from-saffron-500 via-saffron-500/40 to-transparent md:left-1/2"
//             initial={{ scaleY: 0 }}
//             whileInView={{ scaleY: 1 }}
//             viewport={{ once: true, amount: 0.1 }}
//             transition={{ duration: 1.6, ease: "easeOut" }}
//           />
//           {milestones.map((m, i) => (
//             <Reveal
//               key={m.year}
//               className={`relative pb-10 pl-10 md:w-1/2 md:pb-14 md:pl-0 ${
//                 i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
//               }`}
//             >
//               <span
//                 className={`absolute left-[6px] top-1.5 h-3 w-3 rounded-full bg-saffron-500 shadow-glow ring-4 ring-ink-950 md:left-auto ${
//                   i % 2 === 0 ? "md:-right-1.5" : "md:-left-1.5"
//                 }`}
//               />
//               <span className="text-sm font-bold text-saffron-400">{m.year}</span>
//               <h3 className="mt-1 text-base font-semibold sm:text-lg">{m.title}</h3>
//               <p className="mt-1 text-sm text-offwhite/60">{m.desc}</p>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* HOW WE WORK */}
//       <section className="section !pt-0">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">How We Work</h2>
//           <p className="mt-3 text-sm text-offwhite/60 sm:mt-4 sm:text-base">
//             A simple, transparent process — you always know what is being built and why.
//           </p>
//         </Reveal>

//         <div className="relative mt-10 grid gap-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
//           <div className="absolute left-0 right-0 top-8 hidden h-px bg-ink-700 lg:block" />
//           {process.map((s, i) => (
//             <Reveal key={s.title} delay={i * 0.12} className="relative text-center">
//               <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-saffron-gradient text-2xl text-ink-950 shadow-glow">
//                 <s.icon />
//               </div>
//               <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-saffron-400">
//                 Step {i + 1}
//               </p>
//               <h3 className="mt-1 font-semibold">{s.title}</h3>
//               <p className="mt-2 text-sm text-offwhite/60">{s.desc}</p>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* VALUES */}
//       <section className="section !pt-0">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">What We Stand For</h2>
//           <p className="mt-3 text-sm text-offwhite/60 sm:mt-4 sm:text-base">
//             The principles that shape every product we build and every client relationship we
//             keep.
//           </p>
//         </Reveal>

//         <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6">
//           {values.map((v, i) => (
//             <Reveal key={v.title} delay={i * 0.1}>
//               <motion.div
//                 whileHover={{ y: -6 }}
//                 transition={{ duration: 0.25 }}
//                 className="card flex h-full gap-4"
//               >
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-xl text-saffron-500">
//                   <v.icon />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">{v.title}</h3>
//                   <p className="mt-1 text-sm text-offwhite/60">{v.desc}</p>
//                 </div>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* TECH STACK MARQUEE */}
//       <section className="border-y border-ink-700 bg-ink-900/50 py-8">
//         <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-offwhite/40">
//           Technologies we build with
//         </p>
//         <Marquee items={techStack} />
//       </section>

//       {/* LIFE AT DEVIXOAI — image mosaic */}
//       <section className="section">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Life at DevixoAI</h2>
//           <p className="mt-3 text-sm text-offwhite/60 sm:mt-4 sm:text-base">
//             Curious minds, shared screens and a lot of good ideas — this is where the work happens.
//           </p>
//         </Reveal>

//         <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 md:h-[440px] md:grid-cols-4 md:grid-rows-2">
//           {[
//             { src: "https://images.unsplash.com/photo-1758873269317-51888e824b28?fm=jpg&q=60&w=1200&auto=format&fit=crop", alt: "Team collaborating", big: true },
//             { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=60", alt: "Team discussion" },
//             { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=60", alt: "Working at screens" },
//             { src: "https://images.unsplash.com/photo-1763568258314-24ef37bb52e2?auto=format&fit=crop&w=800&q=60", alt: "Code on a laptop screen" },
//             { src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=60", alt: "Technology and circuits" },
//           ].map((img, i) => (
//             <Reveal
//               key={img.src}
//               delay={i * 0.08}
//               className={
//                 img.big
//                   ? "col-span-2 aspect-[16/9] md:row-span-2 md:aspect-auto"
//                   : "aspect-square md:aspect-auto"
//               }
//             >
//               <div className="group h-full w-full overflow-hidden rounded-2xl border border-ink-700 shadow-card">
//                 <img
//                   src={img.src}
//                   alt={img.alt}
//                   className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
//                 />
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* CLOSING CTA */}
//       <section className="section !pt-0">
//         <Reveal>
//           <div className="relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-800 px-6 py-10 text-center shadow-card sm:px-10 sm:py-14">
//             <motion.div
//               className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-saffron-500/15 blur-3xl"
//               animate={{ x: [0, 25, 0], y: [0, 15, 0] }}
//               transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
//             />
//             <motion.div
//               className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-saffron-700/15 blur-3xl"
//               animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
//               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//             />
//             <h2 className="relative text-2xl font-bold sm:text-3xl md:text-4xl">
//               Let's Build Something Intelligent Together
//             </h2>
//             <p className="relative mx-auto mt-3 max-w-xl text-sm text-offwhite/60 sm:mt-4 sm:text-base">
//               Have a workflow that needs fixing or an AI idea you want to test? Tell us about it —
//               we'll tell you honestly what is possible.
//             </p>
//             <div className="relative mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
//               <Link to="/contact" className="btn-primary">
//                 Talk to Our Team <HiArrowUpRight />
//               </Link>
//               <Link to="/services" className="btn-outline">
//                 Explore Services
//               </Link>
//             </div>
//           </div>
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
  HiOutlineLightBulb,
  HiOutlineHeart,
  HiOutlineRocketLaunch,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineFlag,
  HiOutlineEye,
  HiOutlineMagnifyingGlass,
  HiOutlinePencilSquare,
  HiOutlineCodeBracket,
  HiOutlineSparkles,
} from "react-icons/hi2";
import Reveal from "../components/Reveal";
import CTAStrip from "../components/CTAStrip";
import Counter from "../components/Counter";
import Marquee from "../components/Marquee";
import LineFlowBackground from "../components/LineFlowBackground";

const values = [
  {
    icon: HiOutlineLightBulb,
    title: "Build for Real Problems",
    desc: "We don't chase trends. Every product we ship starts with a real workflow that's broken and needs fixing.",
  },
  {
    icon: HiOutlineHeart,
    title: "Obsess Over Craft",
    desc: "From code to design, we sweat the details most teams skip — because that's what separates good from forgettable.",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "Move Fast, Stay Honest",
    desc: "We ship quickly, but never at the cost of telling clients the truth about what will and won't work.",
  },
  {
    icon: HiOutlineGlobeAsiaAustralia,
    title: "Think Beyond Borders",
    desc: "Based in India, building for the world — our clients span industries, timezones, and continents.",
  },
];

const stats = [
  { to: 50, suffix: "+", label: "Projects delivered" },
  { to: 15, suffix: "+", label: "Industries served" },
  { to: 4, suffix: "", label: "Years building AI" },
];

const focusAreas = ["Custom AI Models", "SaaS Products", "Workflow Automation", "AI Chatbots", "Data Analytics"];

const milestones = [
  {
    year: "2022",
    title: "DevixoAI is founded",
    desc: "A small team of engineers sets out to make practical AI available to everyday businesses.",
  },
  {
    year: "2023",
    title: "First automation suite ships",
    desc: "Our first workflow-automation product goes live with early clients and real feedback.",
  },
  {
    year: "2024",
    title: "SaaS platform launch",
    desc: "CRM, chatbot and analytics modules come together on one connected platform.",
  },
  {
    year: "2025",
    title: "Going global",
    desc: "We start delivering projects across industries, timezones and continents.",
  },
  {
    year: "2026",
    title: "Scaling intelligent products",
    desc: "Custom AI models and deeper integrations become the core of what we build.",
  },
];

const process = [
  { icon: HiOutlineMagnifyingGlass, title: "Discover", desc: "We learn your workflow, your data and where the biggest time-sinks hide." },
  { icon: HiOutlinePencilSquare, title: "Design", desc: "We map the solution and share clear prototypes before writing production code." },
  { icon: HiOutlineCodeBracket, title: "Build", desc: "Engineers ship in short cycles, so you see working software every week." },
  { icon: HiOutlineRocketLaunch, title: "Launch & Support", desc: "We deploy, monitor and keep improving the product after go-live." },
];

const techStack = ["React", "Node.js", "Python", "PostgreSQL", "TensorFlow", "OpenAI", "AWS", "Docker", "Next.js", "FastAPI"];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-saffron-glow">
        <LineFlowBackground />
        <div className="section relative text-center">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-[11px] font-medium text-saffron-400 sm:mb-5 sm:text-xs">
              <HiOutlineSparkles /> About DevixoAI India
            </span>
            <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              We Turn{" "}
              <span className="bg-saffron-gradient bg-clip-text text-transparent">Complex AI</span>{" "}
              into Software That Just Works
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm text-offwhite/60 sm:mt-6 sm:text-base md:text-lg">
              We're on a mission to make AI-powered software accessible to every business — not
              just the ones with enterprise budgets.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section grid items-center gap-10 !pt-0 sm:gap-12 md:grid-cols-2">
        <Reveal className="relative overflow-hidden rounded-2xl border border-ink-700 shadow-card">
          <motion.img
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1758873269317-51888e824b28?fm=jpg&q=60&w=1200&auto=format&fit=crop"
            alt="DevixoAI team collaborating in the office"
            className="h-64 w-full object-cover sm:h-80 md:h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
          <motion.div
            className="absolute bottom-4 left-4 rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-2.5 shadow-card backdrop-blur"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-sm font-semibold text-saffron-400">Since 2022</p>
            <p className="text-xs text-offwhite/60">Built in India, for the world</p>
          </motion.div>
        </Reveal>

        <Reveal delay={0.25}>
          <h2 className="text-2xl font-bold sm:text-3xl">Who We Are</h2>

          {/* Official company introduction */}
          <p className="mt-4 text-sm leading-relaxed text-offwhite/70 sm:text-base">
            Devixo India Pvt Ltd is a premier technology and digital innovation firm committed to
            redefining how businesses operate in the digital age. We combine deep architectural
            expertise with state-of-the-art Artificial Intelligence to build products that are
            robust, secure, and future-ready.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-offwhite/70 sm:text-base">
            Whether you are a startup looking to disrupt an industry or an enterprise striving for
            digital transformation, our multidisciplinary team delivers excellence across software
            engineering, AI-driven automation, and strategic digital growth.
          </p>

          {/* Our story (kept from the earlier version) */}
          {/* <p className="mt-4 text-sm leading-relaxed text-offwhite/60 sm:text-base">
            We started with a simple frustration: powerful AI tools existed, but most small and
            mid-sized businesses couldn't access them without hiring an entire engineering team.
            So we built DevixoAI to close that gap — combining deep technical expertise with a
            product mindset, so every business gets AI that actually fits how they work.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-offwhite/60 sm:text-base">
            Today, our work spans automation, custom AI models, chatbots, analytics platforms and
            full SaaS products — all built in-house, end to end.
          </p> */}
          <div className="mt-6 flex flex-wrap gap-2">
            {focusAreas.map((f) => (
              <span
                key={f}
                className="rounded-full border border-saffron-500/30 bg-saffron-500/10 px-3 py-1 text-[11px] font-medium text-saffron-400 sm:text-xs"
              >
                {f}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* STATS */}
      <section className="border-y border-ink-700 bg-ink-900/50 py-8 sm:py-10">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 px-6 sm:grid-cols-3 sm:gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <p className="text-2xl font-bold text-saffron-400 sm:text-3xl">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-xs text-offwhite/50 sm:text-sm">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="section">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: HiOutlineFlag,
              title: "Our Mission",
              text: "To put practical, reliable AI in the hands of every business — with software that is simple to adopt, honest about its limits, and built to deliver measurable results.",
            },
            {
              icon: HiOutlineEye,
              title: "Our Vision",
              text: "A world where any team, of any size, can automate the boring parts of their work and spend their time on the parts only humans can do.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6, borderColor: "rgba(255,140,26,0.5)" }}
                transition={{ duration: 0.25 }}
                className="card relative h-full overflow-hidden"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-saffron-500/10 blur-2xl" />
                <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-gradient text-xl text-ink-950 shadow-glow">
                  <c.icon />
                </div>
                <h3 className="relative text-lg font-semibold sm:text-xl">{c.title}</h3>
                <p className="relative mt-2 text-sm text-offwhite/60 sm:text-base">{c.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      {/* <section className="section !pt-0"> */}
        {/* <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Our Journey So Far</h2>
          <p className="mt-3 text-sm text-offwhite/60 sm:mt-4 sm:text-base">
            A few milestones that shaped how we build and who we build for.
          </p>
        </Reveal> */}

        {/* <div className="relative mx-auto mt-10 max-w-4xl sm:mt-14"> */}
          {/* line that draws itself as the section scrolls into view */}
          {/* <motion.div
            className="absolute left-3 top-0 h-full w-px origin-top bg-gradient-to-b from-saffron-500 via-saffron-500/40 to-transparent md:left-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          {milestones.map((m, i) => (
            <Reveal
              key={m.year}
              className={`relative pb-10 pl-10 md:w-1/2 md:pb-14 md:pl-0 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              <span
                className={`absolute left-[6px] top-1.5 h-3 w-3 rounded-full bg-saffron-500 shadow-glow ring-4 ring-ink-950 md:left-auto ${
                  i % 2 === 0 ? "md:-right-1.5" : "md:-left-1.5"
                }`}
              />
              <span className="text-sm font-bold text-saffron-400">{m.year}</span>
              <h3 className="mt-1 text-base font-semibold sm:text-lg">{m.title}</h3>
              <p className="mt-1 text-sm text-offwhite/60">{m.desc}</p>
            </Reveal>
          ))}
        </div> */}
      {/* </section> */}

      {/* HOW WE WORK */}
      <section className="section !pt-0">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">How We Work</h2>
          <p className="mt-3 text-sm text-offwhite/60 sm:mt-4 sm:text-base">
            A simple, transparent process — you always know what is being built and why.
          </p>
        </Reveal>

        <div className="relative mt-10 grid gap-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-ink-700 lg:block" />
          {process.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-saffron-gradient text-2xl text-ink-950 shadow-glow">
                <s.icon />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-saffron-400">
                Step {i + 1}
              </p>
              <h3 className="mt-1 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-offwhite/60">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="section !pt-0">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">What We Stand For</h2>
          <p className="mt-3 text-sm text-offwhite/60 sm:mt-4 sm:text-base">
            The principles that shape every product we build and every client relationship we
            keep.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="card flex h-full gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-xl text-saffron-500">
                  <v.icon />
                </div>
                <div>
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="mt-1 text-sm text-offwhite/60">{v.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TECH STACK MARQUEE */}
      <section className="border-y border-ink-700 bg-ink-900/50 py-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-offwhite/40">
          Technologies we build with
        </p>
        <Marquee items={techStack} />
      </section>

      {/* LIFE AT DEVIXOAI — image mosaic */}
      <section className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Life at DevixoAI</h2>
          <p className="mt-3 text-sm text-offwhite/60 sm:mt-4 sm:text-base">
            Curious minds, shared screens and a lot of good ideas — this is where the work happens.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 md:h-[440px] md:grid-cols-4 md:grid-rows-2">
          {[
            { src: "https://images.unsplash.com/photo-1758873269317-51888e824b28?fm=jpg&q=60&w=1200&auto=format&fit=crop", alt: "Team collaborating", big: true },
            { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=60", alt: "Team discussion" },
            { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=60", alt: "Working at screens" },
            { src: "https://images.unsplash.com/photo-1763568258314-24ef37bb52e2?auto=format&fit=crop&w=800&q=60", alt: "Code on a laptop screen" },
            { src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=60", alt: "Technology and circuits" },
          ].map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 0.08}
              className={
                img.big
                  ? "col-span-2 aspect-[16/9] md:row-span-2 md:aspect-auto"
                  : "aspect-square md:aspect-auto"
              }
            >
              <div className="group h-full w-full overflow-hidden rounded-2xl border border-ink-700 shadow-card">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section !pt-0">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-800 px-6 py-10 text-center shadow-card sm:px-10 sm:py-14">
            <motion.div
              className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-saffron-500/15 blur-3xl"
              animate={{ x: [0, 25, 0], y: [0, 15, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-saffron-700/15 blur-3xl"
              animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <h2 className="relative text-2xl font-bold sm:text-3xl md:text-4xl">
              Let's Build Something Intelligent Together
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-sm text-offwhite/60 sm:mt-4 sm:text-base">
              Have a workflow that needs fixing or an AI idea you want to test? Tell us about it —
              we'll tell you honestly what is possible.
            </p>
            <div className="relative mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Talk to Our Team <HiArrowUpRight />
              </Link>
              <Link to="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <CTAStrip />
    </>
  );
}