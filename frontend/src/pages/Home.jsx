// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { HiArrowUpRight, HiCheckCircle, HiOutlineBolt, HiOutlineChartBar, HiOutlineCpuChip } from "react-icons/hi2";
// import Reveal from "../components/Reveal";
// import CTAStrip from "../components/CTAStrip";
// import Counter from "../components/Counter";
// import Marquee from "../components/Marquee";
// import HeroBackground from "../components/HeroBackground";
// import heroImg from "../assets/heroImg.jpg";

// const integrations = ["Slack", "Microsoft", "Google", "Notion", "Zapier", "AWS", "HubSpot", "Stripe"];

// const features = [
//   { title: "AI-Powered Automation", desc: "Automate repetitive workflows with intelligent agents that learn from your data." },
//   { title: "Real-Time Analytics", desc: "Turn raw business data into actionable insights with live dashboards." },
//   { title: "Seamless Integrations", desc: "Connect with the tools you already use — no code required." },
//   { title: "Enterprise Security", desc: "Bank-grade encryption and role-based access across your organization." },
//   { title: "Scalable SaaS Infra", desc: "Built on cloud-native architecture that grows with your business." },
//   { title: "24/7 Dedicated Support", desc: "Our team is always on standby to help you ship faster." },
// ];

// const stats = [
//   { to: 10, suffix: "K+", label: "Active Users" },
//   { to: 99, suffix: ".9%", label: "Uptime SLA" },
//   { to: 40, suffix: "+", label: "Integrations" },
//   { to: 24, suffix: "/7", label: "Support" },
// ];

// export default function Home() {
//   return (
//     <>
//       {/* HERO */}
//       {/* <section className="relative overflow-hidden bg-saffron-glow">
//         <motion.div
//           className="pointer-events-none absolute -left-20 top-24 h-56 w-56 rounded-full bg-saffron-500/20 blur-3xl"
//           animate={{ y: [0, 24, 0] }}
//           transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="pointer-events-none absolute -right-16 top-56 h-72 w-72 rounded-full bg-saffron-700/20 blur-3xl"
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         /> */}

//       <section className="relative overflow-hidden bg-saffron-glow">
//         <HeroBackground />

//         {/* Floating software visual — right side, large screens only */}
//         <motion.div
//           className="pointer-events-none absolute right-6 top-28 z-10 hidden w-72 xl:block 2xl:right-16 2xl:w-80"
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0, y: [0, -16, 0], rotate: [-2, 2, -2] }}
//           transition={{
//             opacity: { duration: 0.8, delay: 0.6 },
//             x: { duration: 0.8, delay: 0.6 },
//             y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
//             rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
//           }}
//         >
//           <div className="overflow-hidden rounded-2xl border border-saffron-500/30 bg-ink-800 shadow-glow">
//             {/* <div className="flex items-center gap-1.5 border-b border-ink-700 px-3 py-2">
//               <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
//               <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
//               <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
//             </div> */}
//             <img
//               src={heroImg}
//               alt="AI software code interface"
//               className="h-44 w-full object-cover"
//             />
//           </div>
//         </motion.div>



//         <div className="section relative flex flex-col items-center pb-16 pt-20 text-center md:pt-28">
//           <Reveal>
//             <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-xs font-medium text-saffron-400">
//               🚀 AI-Powered SaaS Solutions
//             </span>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
//               Build Smarter with{" "}
//               <span className="bg-saffron-gradient bg-clip-text text-transparent">
//                 AI-Driven
//               </span>{" "}
//               Software
//             </h1>
//           </Reveal>
//           <Reveal delay={0.2}>
//             <p className="mt-6 max-w-xl text-base text-offwhite/60 md:text-lg">
//               DevixoAI India helps businesses automate, analyze, and accelerate growth with
//               custom AI software and SaaS platforms built for scale.
//             </p>
//           </Reveal>
//           <Reveal delay={0.3} className="mt-8 flex flex-col gap-4 sm:flex-row">
//             <Link to="/contact" className="btn-primary">
//               Get Started Free <HiArrowUpRight />
//             </Link>
//             <Link to="/features" className="btn-outline">
//               Explore Features
//             </Link>
//           </Reveal>

//           <Reveal delay={0.4} className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-offwhite/50">
//             <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
//             <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
//           </Reveal>

//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="relative mt-16 w-full max-w-5xl"
//           >
//             <div className="rounded-2xl border border-ink-700 bg-ink-800 p-3 shadow-card animate-float">
//               <div className="flex items-center gap-2 border-b border-ink-700 px-3 pb-3">
//                 <span className="h-3 w-3 rounded-full bg-red-500/70" />
//                 <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
//                 <span className="h-3 w-3 rounded-full bg-green-500/70" />
//               </div>
//               <img
//                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=60"
//                 alt="DevixoAI product dashboard"
//                 className="mt-3 h-48 w-full rounded-lg object-cover sm:h-64 md:h-80"
//               />
//             </div>

//             <motion.div
//               className="absolute -left-4 top-8 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-3 shadow-card backdrop-blur sm:block md:-left-10"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineBolt /> 3x Faster
//               </p>
//               <p className="text-xs text-offwhite/50">Task automation</p>
//             </motion.div>

//             <motion.div
//               className="absolute -right-4 bottom-8 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-3 shadow-card backdrop-blur sm:block md:-right-10"
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineChartBar /> +48%
//               </p>
//               <p className="text-xs text-offwhite/50">Efficiency gain</p>
//             </motion.div>
//           </motion.div>

//           <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
//             {stats.map((s, i) => (
//               <Reveal key={s.label} delay={i * 0.08} className="rounded-xl border border-ink-700 bg-ink-800 p-4 text-center">
//                 <p className="text-2xl font-bold text-saffron-400 md:text-3xl">
//                   <Counter to={s.to} suffix={s.suffix} />
//                 </p>
//                 <p className="mt-1 text-xs text-offwhite/50">{s.label}</p>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* LOGOS MARQUEE */}
//       <section className="border-y border-ink-700 bg-ink-900/50 py-8">
//         <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-offwhite/40">
//           Trusted by teams using
//         </p>
//         <Marquee items={integrations} />
//       </section>

//       {/* IMAGE + TEXT: insights */}
//       <section className="section grid items-center gap-12 md:grid-cols-2">
//         <Reveal>
//           <img
//             src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60"
//             alt="Team analyzing business data"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//         <Reveal delay={0.1}>
//           <h2 className="text-3xl font-bold md:text-4xl">Convert Your Data into Meaningful Insights</h2>
//           <p className="mt-4 text-offwhite/60">
//             Gain precise insights for your business with our advanced AI analytics engine.
//             Make informed decisions based on accurate, real-time data.
//           </p>
//           <ul className="mt-6 space-y-3">
//             {["Actionable Insights", "Enhanced Decision-Making", "Improved Efficiency"].map((t) => (
//               <li key={t} className="flex items-center gap-3 text-offwhite/80">
//                 <HiCheckCircle className="shrink-0 text-saffron-500" /> {t}
//               </li>
//             ))}
//           </ul>
//           <Link to="/features" className="btn-primary mt-8 inline-flex">
//             Get Started Now <HiArrowUpRight />
//           </Link>
//         </Reveal>
//       </section>

//       {/* IMAGE + TEXT: reversed on desktop */}
//       <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
//         <Reveal className="order-2 md:order-1">
//           <h2 className="text-3xl font-bold md:text-4xl">Upgrade Your Business with Our AI Suite</h2>
//           <div className="mt-6 space-y-6">
//             {[
//               { icon: HiOutlineCpuChip, title: "Smart Task Management", desc: "Effortlessly organize, plan and track work with AI-assisted tools." },
//               { icon: HiOutlineBolt, title: "Real-Time Collaboration", desc: "Work with your team, share updates instantly and stay in sync." },
//               { icon: HiOutlineChartBar, title: "Instant Notifications", desc: "Get real-time alerts for important updates so nothing slips through." },
//             ].map((f) => (
//               <div key={f.title} className="flex gap-4">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-xl text-saffron-500">
//                   <f.icon />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">{f.title}</h3>
//                   <p className="mt-1 text-sm text-offwhite/60">{f.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Reveal>
//         <Reveal delay={0.1} className="order-1 md:order-2">
//           <img
//             src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=60"
//             alt="Person using AI-powered dashboard"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//       </section>

//       {/* FEATURES GRID — with hover-tilt */}
//       <section className="section">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">Everything You Need to Scale with AI</h2>
//           <p className="mt-4 text-offwhite/60">
//             DevixoAI India delivers a full-stack platform to automate operations and grow revenue.
//           </p>
//         </Reveal>

//         <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {features.map((f, i) => (
//             <Reveal key={f.title} delay={i * 0.08}>
//               <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card h-full">
//                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-gradient text-lg font-bold text-ink-950">
//                   {i + 1}
//                 </div>
//                 <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
//                 <p className="text-sm text-offwhite/60">{f.desc}</p>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* TESTIMONIAL */}
//       <section className="section">
//         <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-ink-700 bg-ink-800 p-8 text-center sm:flex-row sm:text-left">
//           <img
//             src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=60"
//             alt="Client of DevixoAI India"
//             className="h-20 w-20 shrink-0 rounded-full border-2 border-saffron-500 object-cover"
//           />
//           <div>
//             <p className="text-offwhite/80">
//               "DevixoAI India automated 60% of our support workload in under a month. The AI
//               suite paid for itself faster than we expected."
//             </p>
//             <p className="mt-3 text-sm font-semibold text-saffron-400">Ritika Sharma</p>
//             <p className="text-xs text-offwhite/50">Operations Head, a growing D2C brand</p>
//           </div>
//         </Reveal>
//       </section>

//       {/* NEWSLETTER CTA */}
//       <section className="section !pt-0 text-center">
//         <Reveal>
//           <h2 className="text-3xl font-bold md:text-4xl">
//             Ready to Enhance Your Sales &amp; Customer Satisfaction?
//           </h2>
//           <form
//             onSubmit={(e) => e.preventDefault()}
//             className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
//           >
//             <input type="email" required placeholder="Enter your email" className="input-field" />
//             <button type="submit" className="btn-primary shrink-0 justify-center">
//               Sign Up Free
//             </button>
//           </form>
//           <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-offwhite/50">
//             <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
//             <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
//           </p>
//         </Reveal>
//       </section>

//       <CTAStrip />
//     </>
//   );
// }





// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { HiArrowUpRight, HiCheckCircle, HiOutlineBolt, HiOutlineChartBar, HiOutlineCpuChip } from "react-icons/hi2";
// import Reveal from "../components/Reveal";
// import CTAStrip from "../components/CTAStrip";
// import Counter from "../components/Counter";
// import Marquee from "../components/Marquee";
// import HeroBackground from "../components/HeroBackground";
// import RotatingWord from "../components/RotatingWord";
// import Img from "../assets/Img.jpg";

// const integrations = ["Slack", "Microsoft", "Google", "Notion", "Zapier", "AWS", "HubSpot", "Stripe"];

// const features = [
//   { title: "AI-Powered Automation", desc: "Automate repetitive workflows with intelligent agents that learn from your data." },
//   { title: "Real-Time Analytics", desc: "Turn raw business data into actionable insights with live dashboards." },
//   { title: "Seamless Integrations", desc: "Connect with the tools you already use — no code required." },
//   { title: "Enterprise Security", desc: "Bank-grade encryption and role-based access across your organization." },
//   { title: "Scalable SaaS Infra", desc: "Built on cloud-native architecture that grows with your business." },
//   { title: "24/7 Dedicated Support", desc: "Our team is always on standby to help you ship faster." },
// ];

// const stats = [
//   { to: 10, suffix: "K+", label: "Active Users" },
//   { to: 99, suffix: ".9%", label: "Uptime SLA" },
//   { to: 40, suffix: "+", label: "Integrations" },
//   { to: 24, suffix: "/7", label: "Support" },
// ];

// export default function Home() {
//   return (
//     <>
//       {/* HERO */}

//       <section className="relative overflow-hidden bg-saffron-glow">
//         <HeroBackground />

//         {/* Floating software visual — right side, large screens only */}
//         <motion.div
//           className="pointer-events-none absolute right-6 top-28 z-10 hidden w-72 xl:block 2xl:right-16 2xl:w-80"
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0, y: [0, -16, 0], rotate: [-2, 2, -2] }}
//           transition={{
//             opacity: { duration: 0.8, delay: 0.6 },
//             x: { duration: 0.8, delay: 0.6 },
//             y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
//             rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
//           }}
//         >

//         </motion.div>



//         <div className="section relative flex flex-col items-center pb-16 pt-20 text-center md:pt-28">
//           <Reveal>
//             <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-xs font-medium text-saffron-400">
//               🚀 AI-Powered SaaS Solutions
//             </span>
//           </Reveal>
//           <Reveal delay={0.1}>
//             {/* <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
//               Build Smarter with{" "}
//               <span className="bg-saffron-gradient bg-clip-text text-transparent">
//                 AI-Driven
//               </span>{" "}
//               Software
//             </h1> */}
//             <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
//               Build Smarter with{" "}
//               <RotatingWord words={["AI-Driven", "Data-Powered", "Cloud-Native", "Automation-First"]} />{" "}
//               Software
//             </h1>
//           </Reveal>
//           <Reveal delay={0.2}>
//             <p className="mt-6 max-w-xl text-base text-offwhite/60 md:text-lg">
//               DevixoAI India helps businesses automate, analyze, and accelerate growth with
//               custom AI software and SaaS platforms built for scale.
//             </p>
//           </Reveal>
//           <Reveal delay={0.3} className="mt-8 flex flex-col gap-4 sm:flex-row">
//             <Link to="/contact" className="btn-primary">
//               Get Started Free <HiArrowUpRight />
//             </Link>
//             <Link to="/features" className="btn-outline">
//               Explore Features
//             </Link>
//           </Reveal>

//           <Reveal delay={0.4} className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-offwhite/50">
//             <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
//             <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
//           </Reveal>

//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="relative mt-16 w-full max-w-5xl"
//           >
//             <div className="rounded-2xl border border-ink-700 bg-ink-800 p-3 shadow-card animate-float">
//               {/* <div className="flex items-center gap-2 border-b border-ink-700 px-3 pb-3">
//                 <span className="h-3 w-3 rounded-full bg-red-500/70" />
//                 <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
//                 <span className="h-3 w-3 rounded-full bg-green-500/70" />
//               </div> */}

//               <div className="mt-3 flex justify-center">
//                 <img
//                   src={Img}
//                   alt="DevixoAI product dashboard"
//                   className="max-h-56 rounded-lg object-contain sm:max-h-72 md:max-h-80"
//                 />
//               </div>
//             </div>

//             <motion.div
//               className="absolute -left-4 top-8 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-3 shadow-card backdrop-blur sm:block md:-left-10"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineBolt /> 3x Faster
//               </p>
//               <p className="text-xs text-offwhite/50">Task automation</p>
//             </motion.div>

//             <motion.div
//               className="absolute -right-4 bottom-8 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-3 shadow-card backdrop-blur sm:block md:-right-10"
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineChartBar /> +48%
//               </p>
//               <p className="text-xs text-offwhite/50">Efficiency gain</p>
//             </motion.div>
//           </motion.div>

//           <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
//             {stats.map((s, i) => (
//               <Reveal key={s.label} delay={i * 0.08} className="rounded-xl border border-ink-700 bg-ink-800 p-4 text-center">
//                 <p className="text-2xl font-bold text-saffron-400 md:text-3xl">
//                   <Counter to={s.to} suffix={s.suffix} />
//                 </p>
//                 <p className="mt-1 text-xs text-offwhite/50">{s.label}</p>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* LOGOS MARQUEE */}
//       <section className="border-y border-ink-700 bg-ink-900/50 py-8">
//         <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-offwhite/40">
//           Trusted by teams using
//         </p>
//         <Marquee items={integrations} />
//       </section>

//       {/* IMAGE + TEXT: insights */}
//       <section className="section grid items-center gap-12 md:grid-cols-2">
//         <Reveal>
//           <img
//             src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60"
//             alt="Team analyzing business data"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//         <Reveal delay={0.1}>
//           <h2 className="text-3xl font-bold md:text-4xl">Convert Your Data into Meaningful Insights</h2>
//           <p className="mt-4 text-offwhite/60">
//             Gain precise insights for your business with our advanced AI analytics engine.
//             Make informed decisions based on accurate, real-time data.
//           </p>
//           <ul className="mt-6 space-y-3">
//             {["Actionable Insights", "Enhanced Decision-Making", "Improved Efficiency"].map((t) => (
//               <li key={t} className="flex items-center gap-3 text-offwhite/80">
//                 <HiCheckCircle className="shrink-0 text-saffron-500" /> {t}
//               </li>
//             ))}
//           </ul>
//           <Link to="/features" className="btn-primary mt-8 inline-flex">
//             Get Started Now <HiArrowUpRight />
//           </Link>
//         </Reveal>
//       </section>

//       {/* IMAGE + TEXT: reversed on desktop */}
//       <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
//         <Reveal className="order-2 md:order-1">
//           <h2 className="text-3xl font-bold md:text-4xl">Upgrade Your Business with Our AI Suite</h2>
//           <div className="mt-6 space-y-6">
//             {[
//               { icon: HiOutlineCpuChip, title: "Smart Task Management", desc: "Effortlessly organize, plan and track work with AI-assisted tools." },
//               { icon: HiOutlineBolt, title: "Real-Time Collaboration", desc: "Work with your team, share updates instantly and stay in sync." },
//               { icon: HiOutlineChartBar, title: "Instant Notifications", desc: "Get real-time alerts for important updates so nothing slips through." },
//             ].map((f) => (
//               <div key={f.title} className="flex gap-4">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-xl text-saffron-500">
//                   <f.icon />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">{f.title}</h3>
//                   <p className="mt-1 text-sm text-offwhite/60">{f.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Reveal>
//         <Reveal delay={0.1} className="order-1 md:order-2">
//           <img
//             src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=60"
//             alt="Person using AI-powered dashboard"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//       </section>

//       {/* FEATURES GRID — with hover-tilt */}
//       <section className="section">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">Everything You Need to Scale with AI</h2>
//           <p className="mt-4 text-offwhite/60">
//             DevixoAI India delivers a full-stack platform to automate operations and grow revenue.
//           </p>
//         </Reveal>

//         <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {features.map((f, i) => (
//             <Reveal key={f.title} delay={i * 0.08}>
//               <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card h-full">
//                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-gradient text-lg font-bold text-ink-950">
//                   {i + 1}
//                 </div>
//                 <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
//                 <p className="text-sm text-offwhite/60">{f.desc}</p>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* TESTIMONIAL */}
//       <section className="section">
//         <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-ink-700 bg-ink-800 p-8 text-center sm:flex-row sm:text-left">
//           <img
//             src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=60"
//             alt="Client of DevixoAI India"
//             className="h-20 w-20 shrink-0 rounded-full border-2 border-saffron-500 object-cover"
//           />
//           <div>
//             <p className="text-offwhite/80">
//               "DevixoAI India automated 60% of our support workload in under a month. The AI
//               suite paid for itself faster than we expected."
//             </p>
//             <p className="mt-3 text-sm font-semibold text-saffron-400">Radhika Sharma</p>
//             <p className="text-xs text-offwhite/50">Operations Head, a growing D2C brand</p>
//           </div>
//         </Reveal>
//       </section>

//       {/* NEWSLETTER CTA */}
//       <section className="section !pt-0 text-center">
//         <Reveal>
//           <h2 className="text-3xl font-bold md:text-4xl">
//             Ready to Enhance Your Sales &amp; Customer Satisfaction?
//           </h2>
//           <form
//             onSubmit={(e) => e.preventDefault()}
//             className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
//           >
//             <input type="email" required placeholder="Enter your email" className="input-field" />
//             <button type="submit" className="btn-primary shrink-0 justify-center">
//               Sign Up Free
//             </button>
//           </form>
//           <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-offwhite/50">
//             <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
//             <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
//           </p>
//         </Reveal>
//       </section>

//       <CTAStrip />
//     </>
//   );
// }





// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { HiArrowUpRight, HiCheckCircle, HiOutlineBolt, HiOutlineChartBar, HiOutlineCpuChip } from "react-icons/hi2";
// import Reveal from "../components/Reveal";
// import CTAStrip from "../components/CTAStrip";
// import Counter from "../components/Counter";
// import Marquee from "../components/Marquee";
// import HeroBackground from "../components/HeroBackground";
// import RotatingWord from "../components/RotatingWord";

// const integrations = ["Slack", "Microsoft", "Google", "Notion", "Zapier", "AWS", "HubSpot", "Stripe"];

// const features = [
//   { title: "AI-Powered Automation", desc: "Automate repetitive workflows with intelligent agents that learn from your data." },
//   { title: "Real-Time Analytics", desc: "Turn raw business data into actionable insights with live dashboards." },
//   { title: "Seamless Integrations", desc: "Connect with the tools you already use — no code required." },
//   { title: "Enterprise Security", desc: "Bank-grade encryption and role-based access across your organization." },
//   { title: "Scalable SaaS Infra", desc: "Built on cloud-native architecture that grows with your business." },
//   { title: "24/7 Dedicated Support", desc: "Our team is always on standby to help you ship faster." },
// ];

// const stats = [
//   { to: 10, suffix: "K+", label: "Active Users" },
//   { to: 99, suffix: ".9%", label: "Uptime SLA" },
//   { to: 40, suffix: "+", label: "Integrations" },
//   { to: 24, suffix: "/7", label: "Support" },
// ];

// // Placeholder images for now — swap each `src` for your own screenshots later.
// // The box below uses a fixed aspect-ratio, so whichever image you drop in,
// // it will always fill the frame with no gaps and no odd resizing.
// const heroImages = [
//   "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=60",
// ];

// export default function Home() {
//   const [imgIndex, setImgIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setImgIndex((i) => (i + 1) % heroImages.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-saffron-glow">
//         <HeroBackground />

//         <div className="section relative flex flex-col items-center pb-16 pt-20 text-center md:pt-28">
//           <Reveal>
//             <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-xs font-medium text-saffron-400">
//               🚀 AI-Powered SaaS Solutions
//             </span>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
//               Build Smarter with{" "}
//               <RotatingWord words={["AI-Driven", "Data-Powered", "Cloud-Native", "Automation-First"]} />{" "}
//               Software
//             </h1>
//           </Reveal>
//           <Reveal delay={0.2}>
//             <p className="mt-6 max-w-xl text-base text-offwhite/60 md:text-lg">
//               DevixoAI India helps businesses automate, analyze, and accelerate growth with
//               custom AI software and SaaS platforms built for scale.
//             </p>
//           </Reveal>
//           <Reveal delay={0.3} className="mt-8 flex flex-col gap-4 sm:flex-row">
//             <Link to="/contact" className="btn-primary">
//               Get Started Free <HiArrowUpRight />
//             </Link>
//             <Link to="/features" className="btn-outline">
//               Explore Features
//             </Link>
//           </Reveal>

//           <Reveal delay={0.4} className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-offwhite/50">
//             <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
//             <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
//           </Reveal>

//           {/* Rotating image slideshow — fixed aspect-ratio box so every image
//               (whatever size it is) always fills the frame with no gaps and
//               no oversized/undersized jumps between slides. */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="relative mt-16 w-full max-w-5xl"
//           >
//             <div className="rounded-2xl border border-ink-700 bg-ink-800 p-3 shadow-card">
//               <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg sm:aspect-[16/8] md:aspect-[16/7]">
//                 <AnimatePresence mode="wait">
//                   <motion.img
//                     key={heroImages[imgIndex]}
//                     src={heroImages[imgIndex]}
//                     alt="DevixoAI product showcase"
//                     initial={{ opacity: 0, scale: 1.05 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.98 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                     className="absolute inset-0 h-full w-full object-cover"
//                   />
//                 </AnimatePresence>
//               </div>
//             </div>

//             <motion.div
//               className="absolute -left-4 top-8 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-3 shadow-card backdrop-blur sm:block md:-left-10"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineBolt /> 3x Faster
//               </p>
//               <p className="text-xs text-offwhite/50">Task automation</p>
//             </motion.div>

//             <motion.div
//               className="absolute -right-4 bottom-8 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-3 shadow-card backdrop-blur sm:block md:-right-10"
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineChartBar /> +48%
//               </p>
//               <p className="text-xs text-offwhite/50">Efficiency gain</p>
//             </motion.div>

//             {/* dot indicators */}
//             <div className="mt-4 flex items-center justify-center gap-2">
//               {heroImages.map((img, i) => (
//                 <button
//                   key={img}
//                   onClick={() => setImgIndex(i)}
//                   aria-label={`Show slide ${i + 1}`}
//                   className={`h-1.5 rounded-full transition-all duration-300 ${
//                     i === imgIndex ? "w-6 bg-saffron-500" : "w-1.5 bg-ink-600"
//                   }`}
//                 />
//               ))}
//             </div>
//           </motion.div>

//           <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
//             {stats.map((s, i) => (
//               <Reveal key={s.label} delay={i * 0.08} className="rounded-xl border border-ink-700 bg-ink-800 p-4 text-center">
//                 <p className="text-2xl font-bold text-saffron-400 md:text-3xl">
//                   <Counter to={s.to} suffix={s.suffix} />
//                 </p>
//                 <p className="mt-1 text-xs text-offwhite/50">{s.label}</p>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* LOGOS MARQUEE */}
//       <section className="border-y border-ink-700 bg-ink-900/50 py-8">
//         <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-offwhite/40">
//           Trusted by teams using
//         </p>
//         <Marquee items={integrations} />
//       </section>

//       {/* IMAGE + TEXT: insights */}
//       <section className="section grid items-center gap-12 md:grid-cols-2">
//         <Reveal>
//           <img
//             src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60"
//             alt="Team analyzing business data"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//         <Reveal delay={0.1}>
//           <h2 className="text-3xl font-bold md:text-4xl">Convert Your Data into Meaningful Insights</h2>
//           <p className="mt-4 text-offwhite/60">
//             Gain precise insights for your business with our advanced AI analytics engine.
//             Make informed decisions based on accurate, real-time data.
//           </p>
//           <ul className="mt-6 space-y-3">
//             {["Actionable Insights", "Enhanced Decision-Making", "Improved Efficiency"].map((t) => (
//               <li key={t} className="flex items-center gap-3 text-offwhite/80">
//                 <HiCheckCircle className="shrink-0 text-saffron-500" /> {t}
//               </li>
//             ))}
//           </ul>
//           <Link to="/features" className="btn-primary mt-8 inline-flex">
//             Get Started Now <HiArrowUpRight />
//           </Link>
//         </Reveal>
//       </section>

//       {/* IMAGE + TEXT: reversed on desktop */}
//       <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
//         <Reveal className="order-2 md:order-1">
//           <h2 className="text-3xl font-bold md:text-4xl">Upgrade Your Business with Our AI Suite</h2>
//           <div className="mt-6 space-y-6">
//             {[
//               { icon: HiOutlineCpuChip, title: "Smart Task Management", desc: "Effortlessly organize, plan and track work with AI-assisted tools." },
//               { icon: HiOutlineBolt, title: "Real-Time Collaboration", desc: "Work with your team, share updates instantly and stay in sync." },
//               { icon: HiOutlineChartBar, title: "Instant Notifications", desc: "Get real-time alerts for important updates so nothing slips through." },
//             ].map((f) => (
//               <div key={f.title} className="flex gap-4">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-xl text-saffron-500">
//                   <f.icon />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">{f.title}</h3>
//                   <p className="mt-1 text-sm text-offwhite/60">{f.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Reveal>
//         <Reveal delay={0.1} className="order-1 md:order-2">
//           <img
//             src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=60"
//             alt="Person using AI-powered dashboard"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//       </section>

//       {/* FEATURES GRID — with hover-tilt */}
//       <section className="section">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">Everything You Need to Scale with AI</h2>
//           <p className="mt-4 text-offwhite/60">
//             DevixoAI India delivers a full-stack platform to automate operations and grow revenue.
//           </p>
//         </Reveal>

//         <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {features.map((f, i) => (
//             <Reveal key={f.title} delay={i * 0.08}>
//               <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card h-full">
//                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-gradient text-lg font-bold text-ink-950">
//                   {i + 1}
//                 </div>
//                 <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
//                 <p className="text-sm text-offwhite/60">{f.desc}</p>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* TESTIMONIAL */}
//       <section className="section">
//         <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-ink-700 bg-ink-800 p-8 text-center sm:flex-row sm:text-left">
//           <img
//             src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=60"
//             alt="Client of DevixoAI India"
//             className="h-20 w-20 shrink-0 rounded-full border-2 border-saffron-500 object-cover"
//           />
//           <div>
//             <p className="text-offwhite/80">
//               "DevixoAI India automated 60% of our support workload in under a month. The AI
//               suite paid for itself faster than we expected."
//             </p>
//             <p className="mt-3 text-sm font-semibold text-saffron-400">Radhika Sharma</p>
//             <p className="text-xs text-offwhite/50">Operations Head, a growing D2C brand</p>
//           </div>
//         </Reveal>
//       </section>

//       {/* NEWSLETTER CTA */}
//       <section className="section !pt-0 text-center">
//         <Reveal>
//           <h2 className="text-3xl font-bold md:text-4xl">
//             Ready to Enhance Your Sales &amp; Customer Satisfaction?
//           </h2>
//           <form
//             onSubmit={(e) => e.preventDefault()}
//             className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
//           >
//             <input type="email" required placeholder="Enter your email" className="input-field" />
//             <button type="submit" className="btn-primary shrink-0 justify-center">
//               Sign Up Free
//             </button>
//           </form>
//           <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-offwhite/50">
//             <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
//             <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
//           </p>
//         </Reveal>
//       </section>

//       <CTAStrip />
//     </>
//   );
// }



// isme nerual background or terminal k saath  hai 


// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { HiArrowUpRight, HiCheckCircle, HiOutlineBolt, HiOutlineChartBar, HiOutlineCpuChip } from "react-icons/hi2";
// import Reveal from "../components/Reveal";
// import CTAStrip from "../components/CTAStrip";
// import Counter from "../components/Counter";
// import Marquee from "../components/Marquee";
// import RotatingWord from "../components/RotatingWord";
// import NeuralBackground from "../components/NeuralBackground";
// import TerminalTyping from "../components/TerminalTyping";

// const integrations = ["Slack", "Microsoft", "Google", "Notion", "Zapier", "AWS", "HubSpot", "Stripe"];

// const features = [
//   { title: "AI-Powered Automation", desc: "Automate repetitive workflows with intelligent agents that learn from your data." },
//   { title: "Real-Time Analytics", desc: "Turn raw business data into actionable insights with live dashboards." },
//   { title: "Seamless Integrations", desc: "Connect with the tools you already use — no code required." },
//   { title: "Enterprise Security", desc: "Bank-grade encryption and role-based access across your organization." },
//   { title: "Scalable SaaS Infra", desc: "Built on cloud-native architecture that grows with your business." },
//   { title: "24/7 Dedicated Support", desc: "Our team is always on standby to help you ship faster." },
// ];

// const stats = [
//   { to: 10, suffix: "K+", label: "Active Users" },
//   { to: 99, suffix: ".9%", label: "Uptime SLA" },
//   { to: 40, suffix: "+", label: "Integrations" },
//   { to: 24, suffix: "/7", label: "Support" },
// ];

// // Placeholder images for now — swap each `src` for your own screenshots later.
// // The box below uses a fixed aspect-ratio, so whichever image you drop in,
// // it will always fill the frame with no gaps and no odd resizing.
// const heroImages = [
//   "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=60",
// ];

// export default function Home() {
//   const [imgIndex, setImgIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setImgIndex((i) => (i + 1) % heroImages.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-saffron-glow">
//         {/* Neural-network particle background — sits behind everything in the hero */}
//         <NeuralBackground />

//         <div className="section relative flex flex-col items-center pb-16 pt-20 text-center md:pt-28">
//           <Reveal>
//             <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-xs font-medium text-saffron-400">
//               🚀 AI-Powered SaaS Solutions
//             </span>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
//               Build Smarter with{" "}
//               <RotatingWord words={["AI-Driven", "Data-Powered", "Cloud-Native", "Automation-First"]} />{" "}
//               Software
//             </h1>
//           </Reveal>
//           <Reveal delay={0.2}>
//             <p className="mt-6 max-w-xl text-base text-offwhite/60 md:text-lg">
//               DevixoAI India helps businesses automate, analyze, and accelerate growth with
//               custom AI software and SaaS platforms built for scale.
//             </p>
//           </Reveal>
//           <Reveal delay={0.3} className="mt-8 flex flex-col gap-4 sm:flex-row">
//             <Link to="/contact" className="btn-primary">
//               Get Started Free <HiArrowUpRight />
//             </Link>
//             <Link to="/features" className="btn-outline">
//               Explore Features
//             </Link>
//           </Reveal>

//           <Reveal delay={0.4} className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-offwhite/50">
//             <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
//             <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
//           </Reveal>

//           {/* Rotating image slideshow — fixed aspect-ratio box so every image
//               (whatever size it is) always fills the frame with no gaps and
//               no oversized/undersized jumps between slides. */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="relative mt-16 w-full max-w-5xl"
//           >
//             <div className="rounded-2xl border border-ink-700 bg-ink-800 p-3 shadow-card">
//               <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg sm:aspect-[16/8] md:aspect-[16/7]">
//                 <AnimatePresence mode="wait">
//                   <motion.img
//                     key={heroImages[imgIndex]}
//                     src={heroImages[imgIndex]}
//                     alt="DevixoAI product showcase"
//                     initial={{ opacity: 0, scale: 1.05 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.98 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                     className="absolute inset-0 h-full w-full object-cover"
//                   />
//                 </AnimatePresence>
//               </div>
//             </div>

//             <motion.div
//               className="absolute -left-4 top-8 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-3 shadow-card backdrop-blur sm:block md:-left-10"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineBolt /> 3x Faster
//               </p>
//               <p className="text-xs text-offwhite/50">Task automation</p>
//             </motion.div>

//             <motion.div
//               className="absolute -right-4 bottom-8 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-3 shadow-card backdrop-blur sm:block md:-right-10"
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineChartBar /> +48%
//               </p>
//               <p className="text-xs text-offwhite/50">Efficiency gain</p>
//             </motion.div>

//             {/* Typing terminal — floats above the top-right corner of the
//                 showcase image, hidden on small screens to avoid clutter */}
//             <TerminalTyping className="absolute -top-10 right-2 z-10 hidden lg:block xl:-right-12" />

//             {/* dot indicators */}
//             <div className="mt-4 flex items-center justify-center gap-2">
//               {heroImages.map((img, i) => (
//                 <button
//                   key={img}
//                   onClick={() => setImgIndex(i)}
//                   aria-label={`Show slide ${i + 1}`}
//                   className={`h-1.5 rounded-full transition-all duration-300 ${
//                     i === imgIndex ? "w-6 bg-saffron-500" : "w-1.5 bg-ink-600"
//                   }`}
//                 />
//               ))}
//             </div>
//           </motion.div>

//           <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
//             {stats.map((s, i) => (
//               <Reveal key={s.label} delay={i * 0.08} className="rounded-xl border border-ink-700 bg-ink-800 p-4 text-center">
//                 <p className="text-2xl font-bold text-saffron-400 md:text-3xl">
//                   <Counter to={s.to} suffix={s.suffix} />
//                 </p>
//                 <p className="mt-1 text-xs text-offwhite/50">{s.label}</p>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* LOGOS MARQUEE */}
//       <section className="border-y border-ink-700 bg-ink-900/50 py-8">
//         <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-offwhite/40">
//           Trusted by teams using
//         </p>
//         <Marquee items={integrations} />
//       </section>

//       {/* IMAGE + TEXT: insights */}
//       <section className="section grid items-center gap-12 md:grid-cols-2">
//         <Reveal>
//           <img
//             src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60"
//             alt="Team analyzing business data"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//         <Reveal delay={0.1}>
//           <h2 className="text-3xl font-bold md:text-4xl">Convert Your Data into Meaningful Insights</h2>
//           <p className="mt-4 text-offwhite/60">
//             Gain precise insights for your business with our advanced AI analytics engine.
//             Make informed decisions based on accurate, real-time data.
//           </p>
//           <ul className="mt-6 space-y-3">
//             {["Actionable Insights", "Enhanced Decision-Making", "Improved Efficiency"].map((t) => (
//               <li key={t} className="flex items-center gap-3 text-offwhite/80">
//                 <HiCheckCircle className="shrink-0 text-saffron-500" /> {t}
//               </li>
//             ))}
//           </ul>
//           <Link to="/features" className="btn-primary mt-8 inline-flex">
//             Get Started Now <HiArrowUpRight />
//           </Link>
//         </Reveal>
//       </section>

//       {/* IMAGE + TEXT: reversed on desktop */}
//       <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
//         <Reveal className="order-2 md:order-1">
//           <h2 className="text-3xl font-bold md:text-4xl">Upgrade Your Business with Our AI Suite</h2>
//           <div className="mt-6 space-y-6">
//             {[
//               { icon: HiOutlineCpuChip, title: "Smart Task Management", desc: "Effortlessly organize, plan and track work with AI-assisted tools." },
//               { icon: HiOutlineBolt, title: "Real-Time Collaboration", desc: "Work with your team, share updates instantly and stay in sync." },
//               { icon: HiOutlineChartBar, title: "Instant Notifications", desc: "Get real-time alerts for important updates so nothing slips through." },
//             ].map((f) => (
//               <div key={f.title} className="flex gap-4">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-xl text-saffron-500">
//                   <f.icon />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">{f.title}</h3>
//                   <p className="mt-1 text-sm text-offwhite/60">{f.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Reveal>
//         <Reveal delay={0.1} className="order-1 md:order-2">
//           <img
//             src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=60"
//             alt="Person using AI-powered dashboard"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//       </section>

//       {/* FEATURES GRID — with hover-tilt */}
//       <section className="section">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">Everything You Need to Scale with AI</h2>
//           <p className="mt-4 text-offwhite/60">
//             DevixoAI India delivers a full-stack platform to automate operations and grow revenue.
//           </p>
//         </Reveal>

//         <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {features.map((f, i) => (
//             <Reveal key={f.title} delay={i * 0.08}>
//               <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card h-full">
//                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-gradient text-lg font-bold text-ink-950">
//                   {i + 1}
//                 </div>
//                 <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
//                 <p className="text-sm text-offwhite/60">{f.desc}</p>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* TESTIMONIAL */}
//       <section className="section">
//         <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-ink-700 bg-ink-800 p-8 text-center sm:flex-row sm:text-left">
//           <img
//             src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=60"
//             alt="Client of DevixoAI India"
//             className="h-20 w-20 shrink-0 rounded-full border-2 border-saffron-500 object-cover"
//           />
//           <div>
//             <p className="text-offwhite/80">
//               "DevixoAI India automated 60% of our support workload in under a month. The AI
//               suite paid for itself faster than we expected."
//             </p>
//             <p className="mt-3 text-sm font-semibold text-saffron-400">Radhika Sharma</p>
//             <p className="text-xs text-offwhite/50">Operations Head, a growing D2C brand</p>
//           </div>
//         </Reveal>
//       </section>

//       {/* NEWSLETTER CTA */}
//       <section className="section !pt-0 text-center">
//         <Reveal>
//           <h2 className="text-3xl font-bold md:text-4xl">
//             Ready to Enhance Your Sales &amp; Customer Satisfaction?
//           </h2>
//           <form
//             onSubmit={(e) => e.preventDefault()}
//             className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
//           >
//             <input type="email" required placeholder="Enter your email" className="input-field" />
//             <button type="submit" className="btn-primary shrink-0 justify-center">
//               Sign Up Free
//             </button>
//           </form>
//           <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-offwhite/50">
//             <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
//             <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
//           </p>
//         </Reveal>
//       </section>

//       <CTAStrip />
//     </>
//   );
// }



// ye dardk k according hai 



// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { HiArrowUpRight, HiCheckCircle, HiOutlineBolt, HiOutlineChartBar, HiOutlineCpuChip } from "react-icons/hi2";
// import Reveal from "../components/Reveal";
// import CTAStrip from "../components/CTAStrip";
// import Counter from "../components/Counter";
// import Marquee from "../components/Marquee";
// import RotatingWord from "../components/RotatingWord";
// import NeuralBackground from "../components/NeuralBackground";
// import TerminalTyping from "../components/TerminalTyping";
// import TiltCard from "../components/TiltCard";
// import MagneticButton from "../components/MagneticButton";

// const integrations = ["Slack", "Microsoft", "Google", "Notion", "Zapier", "AWS", "HubSpot", "Stripe"];

// const features = [
//   { title: "AI-Powered Automation", desc: "Automate repetitive workflows with intelligent agents that learn from your data." },
//   { title: "Real-Time Analytics", desc: "Turn raw business data into actionable insights with live dashboards." },
//   { title: "Seamless Integrations", desc: "Connect with the tools you already use — no code required." },
//   { title: "Enterprise Security", desc: "Bank-grade encryption and role-based access across your organization." },
//   { title: "Scalable SaaS Infra", desc: "Built on cloud-native architecture that grows with your business." },
//   { title: "24/7 Dedicated Support", desc: "Our team is always on standby to help you ship faster." },
// ];

// const stats = [
//   { to: 10, suffix: "K+", label: "Active Users" },
//   { to: 99, suffix: ".9%", label: "Uptime SLA" },
//   { to: 40, suffix: "+", label: "Integrations" },
//   { to: 24, suffix: "/7", label: "Support" },
// ];

// // Placeholder images for now — swap each `src` for your own screenshots later.
// // The box below uses a fixed aspect-ratio, so whichever image you drop in,
// // it will always fill the frame with no gaps and no odd resizing.
// const heroImages = [
//   "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=60",
// ];

// export default function Home() {
//   const [imgIndex, setImgIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setImgIndex((i) => (i + 1) % heroImages.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-saffron-glow">
//         {/* Neural-network particle background — sits behind everything in the hero */}
//         <NeuralBackground />

//         <div className="section relative flex flex-col items-center pb-16 pt-20 text-center md:pt-28">
//           <Reveal>
//             <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-xs font-medium text-saffron-400">
//                AI-Powered SaaS Solutions
//             </span>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
//               Build Smarter with{" "}
//               <RotatingWord words={["AI-Driven", "Data-Powered", "Cloud-Native", "Automation-First"]} />{" "}
//               Software
//             </h1>
//           </Reveal>
//           <Reveal delay={0.2}>
//             <p className="mt-6 max-w-xl text-base text-offwhite/60 md:text-lg">
//               DevixoAI India helps businesses automate, analyze, and accelerate growth with
//               custom AI software and SaaS platforms built for scale.
//             </p>
//           </Reveal>
//           <Reveal delay={0.3} className="mt-8 flex flex-col gap-4 sm:flex-row">
//             <MagneticButton>
//               <Link to="/contact" className="btn-primary">
//                 Get Started Free <HiArrowUpRight />
//               </Link>
//             </MagneticButton>
//             <MagneticButton>
//               <Link to="/features" className="btn-outline">
//                 Explore Features
//               </Link>
//             </MagneticButton>
//           </Reveal>

//           <Reveal delay={0.4} className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-offwhite/50">
//             <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
//             <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
//           </Reveal>

//           {/* Rotating image slideshow — fixed aspect-ratio box so every image
//               (whatever size it is) always fills the frame with no gaps and
//               no oversized/undersized jumps between slides. */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="relative mt-16 w-full max-w-5xl"
//           >
//             <TiltCard className="rounded-2xl border border-ink-700 bg-ink-800 p-3 shadow-card">
//               <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg sm:aspect-[16/8] md:aspect-[16/7]">
//                 <AnimatePresence mode="wait">
//                   <motion.img
//                     key={heroImages[imgIndex]}
//                     src={heroImages[imgIndex]}
//                     alt="DevixoAI product showcase"
//                     initial={{ opacity: 0, scale: 1.05 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.98 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                     className="absolute inset-0 h-full w-full object-cover"
//                   />
//                 </AnimatePresence>
//               </div>
//             </TiltCard>

//             <motion.div
//               className="absolute -left-4 top-8 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-3 shadow-card backdrop-blur sm:block md:-left-10"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineBolt /> 3x Faster
//               </p>
//               <p className="text-xs text-offwhite/50">Task automation</p>
//             </motion.div>

//             <motion.div
//               className="absolute -right-4 bottom-8 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-3 shadow-card backdrop-blur sm:block md:-right-10"
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineChartBar /> +48%
//               </p>
//               <p className="text-xs text-offwhite/50">Efficiency gain</p>
//             </motion.div>

//             {/* Typing terminal — floats above the top-right corner of the
//                 showcase image, hidden on small screens to avoid clutter */}
//             <TerminalTyping className="absolute -top-10 right-2 z-10 hidden lg:block xl:-right-12" />

//             {/* Pulsing live-status badge — small premium touch */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 1.2, duration: 0.5 }}
//               className="absolute -top-4 left-4 z-10 hidden items-center gap-2 rounded-full border border-ink-700 bg-ink-900/90 px-3 py-1.5 shadow-card backdrop-blur sm:flex md:left-8"
//             >
//               <span className="relative flex h-2 w-2">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
//               </span>
//               <span className="text-xs font-medium text-offwhite/70">AI models live now</span>
//             </motion.div>

//             {/* dot indicators */}
//             <div className="mt-4 flex items-center justify-center gap-2">
//               {heroImages.map((img, i) => (
//                 <button
//                   key={img}
//                   onClick={() => setImgIndex(i)}
//                   aria-label={`Show slide ${i + 1}`}
//                   className={`h-1.5 rounded-full transition-all duration-300 ${i === imgIndex ? "w-6 bg-saffron-500" : "w-1.5 bg-ink-600"
//                     }`}
//                 />
//               ))}
//             </div>
//           </motion.div>

//           <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
//             {stats.map((s, i) => (
//               <Reveal key={s.label} delay={i * 0.08} className="rounded-xl border border-ink-700 bg-ink-800 p-4 text-center">
//                 <p className="text-2xl font-bold text-saffron-400 md:text-3xl">
//                   <Counter to={s.to} suffix={s.suffix} />
//                 </p>
//                 <p className="mt-1 text-xs text-offwhite/50">{s.label}</p>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* LOGOS MARQUEE */}
//       <section className="border-y border-ink-700 bg-ink-900/50 py-8">
//         <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-offwhite/40">
//           Trusted by teams using
//         </p>
//         <Marquee items={integrations} />
//       </section>

//       {/* IMAGE + TEXT: insights */}
//       <section className="section grid items-center gap-12 md:grid-cols-2">
//         {/* <Reveal>
//           <img
//             src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60"
//             alt="Team analyzing business data"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//         <Reveal delay={0.1}> */}
//         <Reveal>
//           <img
//             src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60"
//             alt="Team analyzing business data"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//         <Reveal delay={0.35}>
//           <h2 className="text-3xl font-bold md:text-4xl">Convert Your Data into Meaningful Insights</h2>
//           <p className="mt-4 text-offwhite/60">
//             Gain precise insights for your business with our advanced AI analytics engine.
//             Make informed decisions based on accurate, real-time data.
//           </p>
//           <ul className="mt-6 space-y-3">
//             {["Actionable Insights", "Enhanced Decision-Making", "Improved Efficiency"].map((t) => (
//               <li key={t} className="flex items-center gap-3 text-offwhite/80">
//                 <HiCheckCircle className="shrink-0 text-saffron-500" /> {t}
//               </li>
//             ))}
//           </ul>
//           <Link to="/features" className="btn-primary mt-8 inline-flex">
//             Get Started Now <HiArrowUpRight />
//           </Link>
//         </Reveal>
//       </section>

//       {/* IMAGE + TEXT: reversed on desktop */}
//       {/* <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
//         <Reveal className="order-2 md:order-1">
//           <h2 className="text-3xl font-bold md:text-4xl">Upgrade Your Business with Our AI Suite</h2>
//           <div className="mt-6 space-y-6">
//             {[
//               { icon: HiOutlineCpuChip, title: "Smart Task Management", desc: "Effortlessly organize, plan and track work with AI-assisted tools." },
//               { icon: HiOutlineBolt, title: "Real-Time Collaboration", desc: "Work with your team, share updates instantly and stay in sync." },
//               { icon: HiOutlineChartBar, title: "Instant Notifications", desc: "Get real-time alerts for important updates so nothing slips through." },
//             ].map((f) => (
//               <div key={f.title} className="flex gap-4">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-xl text-saffron-500">
//                   <f.icon />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">{f.title}</h3>
//                   <p className="mt-1 text-sm text-offwhite/60">{f.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Reveal>
//         <Reveal delay={0.1} className="order-1 md:order-2">
//           <img
//             src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=60"
//             alt="Person using AI-powered dashboard"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//       </section> */}
//       {/* IMAGE + TEXT: reversed on desktop */}
//       <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
//         <Reveal delay={0.35} className="order-2 md:order-1">
//           <h2 className="text-3xl font-bold md:text-4xl">Upgrade Your Business with Our AI Suite</h2>
//           <div className="mt-6 space-y-6">
//             {[
//               { icon: HiOutlineCpuChip, title: "Smart Task Management", desc: "Effortlessly organize, plan and track work with AI-assisted tools." },
//               { icon: HiOutlineBolt, title: "Real-Time Collaboration", desc: "Work with your team, share updates instantly and stay in sync." },
//               { icon: HiOutlineChartBar, title: "Instant Notifications", desc: "Get real-time alerts for important updates so nothing slips through." },
//             ].map((f) => (
//               <div key={f.title} className="flex gap-4">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-xl text-saffron-500">
//                   <f.icon />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">{f.title}</h3>
//                   <p className="mt-1 text-sm text-offwhite/60">{f.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Reveal>
//         <Reveal className="order-1 md:order-2">
//           <img
//             src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=60"
//             alt="Person using AI-powered dashboard"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//       </section>
//       {/* FEATURES GRID — with hover-tilt */}
//       <section className="section">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">Everything You Need to Scale with AI</h2>
//           <p className="mt-4 text-offwhite/60">
//             DevixoAI India delivers a full-stack platform to automate operations and grow revenue.
//           </p>
//         </Reveal>

//         <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {features.map((f, i) => (
//             <Reveal key={f.title} delay={i * 0.08}>
//               <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card h-full">
//                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-gradient text-lg font-bold text-ink-950">
//                   {i + 1}
//                 </div>
//                 <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
//                 <p className="text-sm text-offwhite/60">{f.desc}</p>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* TESTIMONIAL */}
//       <section className="section">
//         <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-ink-700 bg-ink-800 p-8 text-center sm:flex-row sm:text-left">
//           <img
//             src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=60"
//             alt="Client of DevixoAI India"
//             className="h-20 w-20 shrink-0 rounded-full border-2 border-saffron-500 object-cover"
//           />
//           <div>
//             <p className="text-offwhite/80">
//               "DevixoAI India automated 60% of our support workload in under a month. The AI
//               suite paid for itself faster than we expected."
//             </p>
//             <p className="mt-3 text-sm font-semibold text-saffron-400">Radhika Sharma</p>
//             <p className="text-xs text-offwhite/50">Operations Head, a growing D2C brand</p>
//           </div>
//         </Reveal>
//       </section>

//       {/* NEWSLETTER CTA */}
//       <section className="section !pt-0 text-center">
//         <Reveal>
//           <h2 className="text-3xl font-bold md:text-4xl">
//             Ready to Enhance Your Sales &amp; Customer Satisfaction?
//           </h2>
//           <form
//             onSubmit={(e) => e.preventDefault()}
//             className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
//           >
//             <input type="email" required placeholder="Enter your email" className="input-field" />
//             <button type="submit" className="btn-primary shrink-0 justify-center">
//               Sign Up Free
//             </button>
//           </form>
//           <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-offwhite/50">
//             <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
//             <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
//           </p>
//         </Reveal>
//       </section>
//       {/* kjljkjlj */}
//       <CTAStrip />
//     </>
//   );
// }





// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { HiArrowUpRight, HiCheckCircle, HiOutlineBolt, HiOutlineChartBar, HiOutlineCpuChip } from "react-icons/hi2";
// import Reveal from "../components/Reveal";
// import CTAStrip from "../components/CTAStrip";
// import Counter from "../components/Counter";
// import Marquee from "../components/Marquee";
// import RotatingWord from "../components/RotatingWord";
// import NeuralBackground from "../components/NeuralBackground";
// import TerminalTyping from "../components/TerminalTyping";
// import TiltCard from "../components/TiltCard";
// import MagneticButton from "../components/MagneticButton";

// const integrations = ["Slack", "Microsoft", "Google", "Notion", "Zapier", "AWS", "HubSpot", "Stripe"];

// const features = [
//   { title: "AI-Powered Automation", desc: "Automate repetitive workflows with intelligent agents that learn from your data." },
//   { title: "Real-Time Analytics", desc: "Turn raw business data into actionable insights with live dashboards." },
//   { title: "Seamless Integrations", desc: "Connect with the tools you already use — no code required." },
//   { title: "Enterprise Security", desc: "Bank-grade encryption and role-based access across your organization." },
//   { title: "Scalable SaaS Infra", desc: "Built on cloud-native architecture that grows with your business." },
//   { title: "24/7 Dedicated Support", desc: "Our team is always on standby to help you ship faster." },
// ];

// const stats = [
//   { to: 10, suffix: "K+", label: "Active Users" },
//   { to: 99, suffix: ".9%", label: "Uptime SLA" },
//   { to: 40, suffix: "+", label: "Integrations" },
//   { to: 24, suffix: "/7", label: "Support" },
// ];

// // Placeholder images for now — swap each `src` for your own screenshots later.
// // (To use local images: import them from ../assets and put the imported names here.)
// const heroImages = [
//   "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=60",
// ];

// export default function Home() {
//   const [imgIndex, setImgIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setImgIndex((i) => (i + 1) % heroImages.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-saffron-glow">
//         {/* Deeper orange so the network stays visible on a white background */}
//         <NeuralBackground color="230, 115, 0" />

//         <div className="section relative flex flex-col items-center pb-16 pt-20 text-center md:pt-28">
//           <Reveal>
//             <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-xs font-medium text-saffron-400">
//               AI-Powered SaaS Solutions
//             </span>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
//               Build Smarter with{" "}
//               <RotatingWord words={["AI-Driven", "Data-Powered", "Cloud-Native", "Automation-First"]} />{" "}
//               Software
//             </h1>
//           </Reveal>
//           <Reveal delay={0.2}>
//             <p className="mt-6 max-w-xl text-base text-offwhite/70 md:text-lg">
//               DevixoAI India helps businesses automate, analyze, and accelerate growth with
//               custom AI software and SaaS platforms built for scale.
//             </p>
//           </Reveal>
//           <Reveal delay={0.3} className="mt-8 flex flex-col gap-4 sm:flex-row">
//             <MagneticButton>
//               <Link to="/contact" className="btn-primary">
//                 Get Started Free <HiArrowUpRight />
//               </Link>
//             </MagneticButton>
//             <MagneticButton>
//               <Link to="/features" className="btn-outline">
//                 Explore Features
//               </Link>
//             </MagneticButton>
//           </Reveal>

//           <Reveal delay={0.4} className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-offwhite/60">
//             <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
//             <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
//           </Reveal>

//           {/* Rotating image slideshow — fixed aspect-ratio box so every image
//               always fills the frame with no gaps or size jumps between slides. */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="relative mt-16 w-full max-w-5xl"
//           >
//             <TiltCard className="rounded-2xl border border-ink-700 bg-white p-3 shadow-card">
//               <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg sm:aspect-[16/8] md:aspect-[16/7]">
//                 <AnimatePresence mode="wait">
//                   <motion.img
//                     key={heroImages[imgIndex]}
//                     src={heroImages[imgIndex]}
//                     alt="DevixoAI product showcase"
//                     initial={{ opacity: 0, scale: 1.05 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.98 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                     className="absolute inset-0 h-full w-full object-cover"
//                   />
//                 </AnimatePresence>
//               </div>
//             </TiltCard>

//             <motion.div
//               className="absolute -left-4 top-8 hidden rounded-xl border border-ink-700 bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:block md:-left-10"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineBolt /> 3x Faster
//               </p>
//               <p className="text-xs text-offwhite/60">Task automation</p>
//             </motion.div>

//             <motion.div
//               className="absolute -right-4 bottom-8 hidden rounded-xl border border-ink-700 bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:block md:-right-10"
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineChartBar /> +48%
//               </p>
//               <p className="text-xs text-offwhite/60">Efficiency gain</p>
//             </motion.div>

//             {/* Typing terminal — stays dark on purpose: a dark terminal pops
//                 nicely against the white page */}
//             <TerminalTyping className="absolute -top-10 right-2 z-10 hidden lg:block xl:-right-12" />

//             {/* Pulsing live-status badge */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 1.2, duration: 0.5 }}
//               className="absolute -top-4 left-4 z-10 hidden items-center gap-2 rounded-full border border-ink-700 bg-white/95 px-3 py-1.5 shadow-card backdrop-blur sm:flex md:left-8"
//             >
//               <span className="relative flex h-2 w-2">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
//               </span>
//               <span className="text-xs font-medium text-offwhite/80">AI models live now</span>
//             </motion.div>

//             {/* dot indicators */}
//             <div className="mt-4 flex items-center justify-center gap-2">
//               {heroImages.map((img, i) => (
//                 <button
//                   key={img}
//                   onClick={() => setImgIndex(i)}
//                   aria-label={`Show slide ${i + 1}`}
//                   className={`h-1.5 rounded-full transition-all duration-300 ${
//                     i === imgIndex ? "w-6 bg-saffron-500" : "w-1.5 bg-ink-600"
//                   }`}
//                 />
//               ))}
//             </div>
//           </motion.div>

//           <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
//             {stats.map((s, i) => (
//               <Reveal
//                 key={s.label}
//                 delay={i * 0.08}
//                 className="rounded-xl border border-ink-700 bg-white p-4 text-center shadow-card"
//               >
//                 <p className="text-2xl font-bold text-saffron-400 md:text-3xl">
//                   <Counter to={s.to} suffix={s.suffix} />
//                 </p>
//                 <p className="mt-1 text-xs text-offwhite/60">{s.label}</p>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* LOGOS MARQUEE — soft gray band to separate it from the white hero */}
//       <section className="border-y border-ink-700 bg-[#FAFAFB] py-8">
//         <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-offwhite/50">
//           Trusted by teams using
//         </p>
//         <Marquee items={integrations} />
//       </section>

//       {/* IMAGE + TEXT: insights */}
//       <section className="section grid items-center gap-12 md:grid-cols-2">
//         <Reveal>
//           <img
//             src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60"
//             alt="Team analyzing business data"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//         <Reveal delay={0.35}>
//           <h2 className="text-3xl font-bold md:text-4xl">Convert Your Data into Meaningful Insights</h2>
//           <p className="mt-4 text-offwhite/70">
//             Gain precise insights for your business with our advanced AI analytics engine.
//             Make informed decisions based on accurate, real-time data.
//           </p>
//           <ul className="mt-6 space-y-3">
//             {["Actionable Insights", "Enhanced Decision-Making", "Improved Efficiency"].map((t) => (
//               <li key={t} className="flex items-center gap-3 text-offwhite/80">
//                 <HiCheckCircle className="shrink-0 text-saffron-500" /> {t}
//               </li>
//             ))}
//           </ul>
//           <Link to="/features" className="btn-primary mt-8 inline-flex">
//             Get Started Now <HiArrowUpRight />
//           </Link>
//         </Reveal>
//       </section>

//       {/* IMAGE + TEXT: reversed on desktop */}
//       <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
//         <Reveal delay={0.35} className="order-2 md:order-1">
//           <h2 className="text-3xl font-bold md:text-4xl">Upgrade Your Business with Our AI Suite</h2>
//           <div className="mt-6 space-y-6">
//             {[
//               { icon: HiOutlineCpuChip, title: "Smart Task Management", desc: "Effortlessly organize, plan and track work with AI-assisted tools." },
//               { icon: HiOutlineBolt, title: "Real-Time Collaboration", desc: "Work with your team, share updates instantly and stay in sync." },
//               { icon: HiOutlineChartBar, title: "Instant Notifications", desc: "Get real-time alerts for important updates so nothing slips through." },
//             ].map((f) => (
//               <div key={f.title} className="flex gap-4">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-xl text-saffron-500">
//                   <f.icon />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">{f.title}</h3>
//                   <p className="mt-1 text-sm text-offwhite/70">{f.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Reveal>
//         <Reveal className="order-1 md:order-2">
//           <img
//             src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=60"
//             alt="Person using AI-powered dashboard"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//       </section>

//       {/* FEATURES GRID — soft gray band so the section stands out on white */}
//       <div className="border-y border-ink-700 bg-[#FAFAFB]">
//         <section className="section">
//           <Reveal className="mx-auto max-w-2xl text-center">
//             <h2 className="text-3xl font-bold md:text-4xl">Everything You Need to Scale with AI</h2>
//             <p className="mt-4 text-offwhite/70">
//               DevixoAI India delivers a full-stack platform to automate operations and grow revenue.
//             </p>
//           </Reveal>

//           <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {features.map((f, i) => (
//               <Reveal key={f.title} delay={i * 0.08}>
//                 <motion.div
//                   whileHover={{ y: -6 }}
//                   transition={{ duration: 0.25 }}
//                   className="card h-full bg-white shadow-card"
//                 >
//                   <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-gradient text-lg font-bold text-white">
//                     {i + 1}
//                   </div>
//                   <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
//                   <p className="text-sm text-offwhite/70">{f.desc}</p>
//                 </motion.div>
//               </Reveal>
//             ))}
//           </div>
//         </section>
//       </div>

//       {/* TESTIMONIAL */}
//       <section className="section">
//         <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-ink-700 bg-white p-8 text-center shadow-card sm:flex-row sm:text-left">
//           <img
//             src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=60"
//             alt="Client of DevixoAI India"
//             className="h-20 w-20 shrink-0 rounded-full border-2 border-saffron-500 object-cover"
//           />
//           <div>
//             <p className="text-offwhite/80">
//               "DevixoAI India automated 60% of our support workload in under a month. The AI
//               suite paid for itself faster than we expected."
//             </p>
//             <p className="mt-3 text-sm font-semibold text-saffron-400">Radhika Sharma</p>
//             <p className="text-xs text-offwhite/60">Operations Head, a growing D2C brand</p>
//           </div>
//         </Reveal>
//       </section>

//       {/* NEWSLETTER CTA */}
//       <section className="section !pt-0 text-center">
//         <Reveal>
//           <h2 className="text-3xl font-bold md:text-4xl">
//             Ready to Enhance Your Sales &amp; Customer Satisfaction?
//           </h2>
//           <form
//             onSubmit={(e) => e.preventDefault()}
//             className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
//           >
//             <input type="email" required placeholder="Enter your email" className="input-field" />
//             <button type="submit" className="btn-primary shrink-0 justify-center">
//               Sign Up Free
//             </button>
//           </form>
//           <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-offwhite/60">
//             <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
//             <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
//           </p>
//         </Reveal>
//       </section>

//       <CTAStrip />
//     </>
//   );
// }



// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   HiArrowUpRight,
//   HiCheckCircle,
//   HiOutlineBolt,
//   HiOutlineChartBar,
//   HiOutlineCpuChip,
//   HiOutlineCamera,
//   HiOutlineAcademicCap,
//   HiOutlineWallet,
//   HiOutlineRocketLaunch,
// } from "react-icons/hi2";
// import Reveal from "../components/Reveal";
// import CTAStrip from "../components/CTAStrip";
// import Counter from "../components/Counter";
// import Marquee from "../components/Marquee";
// import NeuralBackground from "../components/NeuralBackground";
// import TerminalTyping from "../components/TerminalTyping";
// import TiltCard from "../components/TiltCard";
// import MagneticButton from "../components/MagneticButton";

// const integrations = ["Slack", "Microsoft", "Google", "Notion", "Zapier", "AWS", "HubSpot", "Stripe"];

// const features = [
//   { title: "AI-Powered Automation", desc: "Automate repetitive workflows with intelligent agents that learn from your data." },
//   { title: "Real-Time Analytics", desc: "Turn raw business data into actionable insights with live dashboards." },
//   { title: "Seamless Integrations", desc: "Connect with the tools you already use — no code required." },
//   { title: "Enterprise Security", desc: "Bank-grade encryption and role-based access across your organization." },
//   { title: "Scalable SaaS Infra", desc: "Built on cloud-native architecture that grows with your business." },
//   { title: "24/7 Dedicated Support", desc: "Our team is always on standby to help you ship faster." },
// ];

// const stats = [
//   { to: 10, suffix: "K+", label: "Active Users" },
//   { to: 99, suffix: ".9%", label: "Uptime SLA" },
//   { to: 40, suffix: "+", label: "Integrations" },
//   { to: 24, suffix: "/7", label: "Support" },
// ];

// // Featured projects — content provided by the office.
// // `img` is optional: add a real screenshot URL/import to any project and it will
// // replace the gradient illustration automatically.
// const projects = [
//   {
//     icon: HiOutlineCamera,
//     number: "01",
//     name: "ClicknShare",
//     category: "Education · Media",
//     tagline: "AI-Powered School Media & Face Recognition Platform",
//     desc: "A next-generation media ecosystem designed for schools, featuring automated face recognition technology that effortlessly delivers event photos to the right parents in real time.",
//     tags: ["Face Recognition", "School Media", "Real-Time Delivery"],
//     gradient: "from-saffron-500 to-saffron-700",
//     img: "",
//   },
//   {
//     icon: HiOutlineAcademicCap,
//     number: "02",
//     name: "Net2school",
//     category: "Education",
//     tagline: "The Ultimate Digital School Ecosystem",
//     desc: "Bridging the gap between institutions, educators, and parents. Net2school streamlines school administration, attendance, academic tracking, and communication into a single intuitive platform.",
//     tags: ["Administration", "Live Streaming",],
//     gradient: "from-saffron-400 to-saffron-600",
//     img: "",
//   },
//   {
//     icon: HiOutlineWallet,
//     number: "03",
//     name: "Kiddy Wallet",
//     category: "Finance",
//     tagline: "Smart Financial Literacy & Pocket Money Management",
//     desc: "An intuitive financial tool designed to introduce children and families to digital money management, fostering smart saving habits in a secure and controlled environment.",
//     tags: ["Financial Literacy", "Pocket Money", "Secure & Controlled"],
//     gradient: "from-saffron-600 to-saffron-800",
//     img: "",
//   },
// ];

// // Words that rotate in the hero headline: "Transforming Ideas into ___ Digital Realities"
// const heroWords = ["Intelligent", "Scalable", "Automated", "Result-Driven"];

// // Placeholder images for now — swap each `src` for your own screenshots later.
// // (To use local images: import them from ../assets and put the imported names here.)
// const heroImages = [
//   "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=60",
// ];

// export default function Home() {
//   const [imgIndex, setImgIndex] = useState(0);
//   const [wordIndex, setWordIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setImgIndex((i) => (i + 1) % heroImages.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setWordIndex((i) => (i + 1) % heroWords.length);
//     }, 2500);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-saffron-glow">
//         {/* Deeper orange so the network stays visible on a white background */}
//         <NeuralBackground color="230, 115, 0" />

//         <div className="section relative flex flex-col items-center pb-16 pt-20 text-center md:pt-28">
//           <Reveal>
//             <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-xs font-medium text-saffron-400">
//               AI-Powered SaaS Solutions
//             </span>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <h1 className="max-w-4xl text-3xl font-bold leading-[1.25] sm:text-4xl md:text-5xl lg:text-6xl">
//               <span className="block">Transforming Ideas into</span>
//               {/* Fixed-height line: the rotating word swaps inside it, so the
//                   layout never jumps and descenders (g, y, p) never get clipped */}
//               <span className="relative block min-h-[1.35em]">
//                 <AnimatePresence mode="wait">
//                   <motion.span
//                     key={heroWords[wordIndex]}
//                     initial={{ opacity: 0, y: 18 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -18 }}
//                     transition={{ duration: 0.35, ease: "easeOut" }}
//                     className="inline-block bg-saffron-gradient bg-clip-text pb-2 text-transparent"
//                   >
//                     {heroWords[wordIndex]}
//                   </motion.span>
//                 </AnimatePresence>
//               </span>
//               <span className="block">Digital Realities</span>
//             </h1>
//           </Reveal>
//           <Reveal delay={0.2}>
//             <p className="mt-6 max-w-2xl text-base text-offwhite/70 md:text-lg">
//               At Devixo India Pvt Ltd, we engineer high-performance software, cutting-edge AI
//               automation, and result-driven digital marketing solutions designed to scale modern
//               enterprises.
//             </p>
//           </Reveal>
//           <Reveal delay={0.3} className="mt-8 flex flex-col gap-4 sm:flex-row">
//             <MagneticButton>
//               <Link to="/services" className="btn-primary">
//                 Explore Our Solutions <HiArrowUpRight />
//               </Link>
//             </MagneticButton>
//             <MagneticButton>
//               <Link to="/contact" className="btn-outline">
//                 Get in Touch
//               </Link>
//             </MagneticButton>
//           </Reveal>

//           <Reveal delay={0.4} className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-offwhite/60">
//             <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
//             <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
//           </Reveal>

//           {/* Rotating image slideshow — fixed aspect-ratio box so every image
//               always fills the frame with no gaps or size jumps between slides. */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="relative mt-16 w-full max-w-5xl"
//           >
//             <TiltCard className="rounded-2xl border border-ink-700 bg-white p-3 shadow-card">
//               <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg sm:aspect-[16/8] md:aspect-[16/7]">
//                 <AnimatePresence mode="wait">
//                   <motion.img
//                     key={heroImages[imgIndex]}
//                     src={heroImages[imgIndex]}
//                     alt="DevixoAI product showcase"
//                     initial={{ opacity: 0, scale: 1.05 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.98 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                     className="absolute inset-0 h-full w-full object-cover"
//                   />
//                 </AnimatePresence>
//               </div>
//             </TiltCard>

//             <motion.div
//               className="absolute -left-4 top-8 hidden rounded-xl border border-ink-700 bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:block md:-left-10"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineBolt /> 3x Faster
//               </p>
//               <p className="text-xs text-offwhite/60">Task automation</p>
//             </motion.div>

//             <motion.div
//               className="absolute -right-4 bottom-8 hidden rounded-xl border border-ink-700 bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:block md:-right-10"
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineChartBar /> +48%
//               </p>
//               <p className="text-xs text-offwhite/60">Efficiency gain</p>
//             </motion.div>

//             {/* Typing terminal — stays dark on purpose: a dark terminal pops
//                 nicely against the white page */}
//             <TerminalTyping className="absolute -top-10 right-2 z-10 hidden lg:block xl:-right-12" />

//             {/* Pulsing live-status badge */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 1.2, duration: 0.5 }}
//               className="absolute -top-4 left-4 z-10 hidden items-center gap-2 rounded-full border border-ink-700 bg-white/95 px-3 py-1.5 shadow-card backdrop-blur sm:flex md:left-8"
//             >
//               <span className="relative flex h-2 w-2">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
//               </span>
//               <span className="text-xs font-medium text-offwhite/80">AI models live now</span>
//             </motion.div>

//             {/* dot indicators */}
//             <div className="mt-4 flex items-center justify-center gap-2">
//               {heroImages.map((img, i) => (
//                 <button
//                   key={img}
//                   onClick={() => setImgIndex(i)}
//                   aria-label={`Show slide ${i + 1}`}
//                   className={`h-1.5 rounded-full transition-all duration-300 ${
//                     i === imgIndex ? "w-6 bg-saffron-500" : "w-1.5 bg-ink-600"
//                   }`}
//                 />
//               ))}
//             </div>
//           </motion.div>

//           <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
//             {stats.map((s, i) => (
//               <Reveal
//                 key={s.label}
//                 delay={i * 0.08}
//                 className="rounded-xl border border-ink-700 bg-white p-4 text-center shadow-card"
//               >
//                 <p className="text-2xl font-bold text-saffron-400 md:text-3xl">
//                   <Counter to={s.to} suffix={s.suffix} />
//                 </p>
//                 <p className="mt-1 text-xs text-offwhite/60">{s.label}</p>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* LOGOS MARQUEE — soft gray band to separate it from the white hero */}
//       <section className="border-y border-ink-700 bg-[#FAFAFB] py-8">
//         <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-offwhite/50">
//           Trusted by teams using
//         </p>
//         <Marquee items={integrations} />
//       </section>

//       {/* IMAGE + TEXT: insights */}
//       <section className="section grid items-center gap-12 md:grid-cols-2">
//         <Reveal>
//           <img
//             src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60"
//             alt="Team analyzing business data"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//         <Reveal delay={0.35}>
//           <h2 className="text-3xl font-bold md:text-4xl">Convert Your Data into Meaningful Insights</h2>
//           <p className="mt-4 text-offwhite/70">
//             Gain precise insights for your business with our advanced AI analytics engine.
//             Make informed decisions based on accurate, real-time data.
//           </p>
//           <ul className="mt-6 space-y-3">
//             {["Actionable Insights", "Enhanced Decision-Making", "Improved Efficiency"].map((t) => (
//               <li key={t} className="flex items-center gap-3 text-offwhite/80">
//                 <HiCheckCircle className="shrink-0 text-saffron-500" /> {t}
//               </li>
//             ))}
//           </ul>
//           <Link to="/features" className="btn-primary mt-8 inline-flex">
//             Get Started Now <HiArrowUpRight />
//           </Link>
//         </Reveal>
//       </section>

//       {/* IMAGE + TEXT: reversed on desktop */}
//       <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
//         <Reveal delay={0.35} className="order-2 md:order-1">
//           <h2 className="text-3xl font-bold md:text-4xl">Upgrade Your Business with Our AI Suite</h2>
//           <div className="mt-6 space-y-6">
//             {[
//               { icon: HiOutlineCpuChip, title: "Smart Task Management", desc: "Effortlessly organize, plan and track work with AI-assisted tools." },
//               { icon: HiOutlineBolt, title: "Real-Time Collaboration", desc: "Work with your team, share updates instantly and stay in sync." },
//               { icon: HiOutlineChartBar, title: "Instant Notifications", desc: "Get real-time alerts for important updates so nothing slips through." },
//             ].map((f) => (
//               <div key={f.title} className="flex gap-4">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-xl text-saffron-500">
//                   <f.icon />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">{f.title}</h3>
//                   <p className="mt-1 text-sm text-offwhite/70">{f.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Reveal>
//         <Reveal className="order-1 md:order-2">
//           <img
//             src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=60"
//             alt="Person using AI-powered dashboard"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//       </section>

//       {/* FEATURES GRID — soft gray band so the section stands out on white */}
//       <div className="border-y border-ink-700 bg-[#FAFAFB]">
//         <section className="section">
//           <Reveal className="mx-auto max-w-2xl text-center">
//             <h2 className="text-3xl font-bold md:text-4xl">Everything You Need to Scale with AI</h2>
//             <p className="mt-4 text-offwhite/70">
//               DevixoAI India delivers a full-stack platform to automate operations and grow revenue.
//             </p>
//           </Reveal>

//           <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {features.map((f, i) => (
//               <Reveal key={f.title} delay={i * 0.08}>
//                 <motion.div
//                   whileHover={{ y: -6 }}
//                   transition={{ duration: 0.25 }}
//                   className="card h-full bg-white shadow-card"
//                 >
//                   <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-gradient text-lg font-bold text-white">
//                     {i + 1}
//                   </div>
//                   <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
//                   <p className="text-sm text-offwhite/70">{f.desc}</p>
//                 </motion.div>
//               </Reveal>
//             ))}
//           </div>
//         </section>
//       </div>

//       {/* INNOVATION IN ACTION — featured projects */}
//       <section className="relative overflow-hidden">
//         <motion.div
//           className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-saffron-500/10 blur-3xl"
//           animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-saffron-700/10 blur-3xl"
//           animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         />

//         <div className="section relative">
//           <Reveal className="mx-auto max-w-3xl text-center">
//             <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-[11px] font-medium text-saffron-400 sm:text-xs">
//               <HiOutlineRocketLaunch /> Featured Projects
//             </span>
//             <h2 className="text-3xl font-bold leading-snug md:text-4xl">
//               Innovation{" "}
//               <span className="bg-saffron-gradient bg-clip-text pb-1 text-transparent">in Action</span>
//             </h2>
//             <p className="mt-4 text-sm text-offwhite/70 sm:text-base">
//               Explore our flagship products solving real-world challenges across education,
//               finance, and media.
//             </p>
//           </Reveal>

//           <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
//             {projects.map((pr, i) => (
//               <Reveal
//                 key={pr.name}
//                 delay={i * 0.12}
//                 // 3 cards on a 2-column grid: let the last one span full width on tablets
//                 className={i === projects.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
//               >
//                 <motion.div
//                   whileHover={{ y: -8 }}
//                   transition={{ duration: 0.25 }}
//                   className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-700 bg-white shadow-card transition-colors duration-300 hover:border-saffron-500/50"
//                 >
//                   {/* visual header: real screenshot if provided, else animated gradient illustration */}
//                   <div className={`relative h-44 w-full overflow-hidden bg-gradient-to-br sm:h-48 ${pr.gradient}`}>
//                     {pr.img ? (
//                       <>
//                         <img
//                           src={pr.img}
//                           alt={pr.name}
//                           className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                       </>
//                     ) : (
//                       <>
//                         {/* soft highlights + dotted pattern */}
//                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
//                         <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:18px_18px]" />
//                         <motion.div
//                           className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/20 blur-2xl"
//                           animate={{ x: [0, -14, 0], y: [0, 12, 0] }}
//                           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//                         />
//                         <motion.div
//                           className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/40 bg-white/20 text-4xl text-white shadow-glow backdrop-blur"
//                           animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
//                           transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
//                         >
//                           <pr.icon />
//                         </motion.div>
//                       </>
//                     )}

//                     <span className="absolute left-4 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-saffron-600 shadow-card">
//                       {pr.category}
//                     </span>
//                     <span className="absolute bottom-3 right-4 text-3xl font-extrabold leading-none text-white/80 sm:text-4xl">
//                       {pr.number}
//                     </span>
//                   </div>

//                   {/* content */}
//                   <div className="flex flex-1 flex-col p-5 sm:p-6">
//                     <h3 className="text-xl font-bold leading-snug">{pr.name}</h3>
//                     <p className="mt-1 text-sm font-semibold leading-snug text-saffron-400">
//                       {pr.tagline}
//                     </p>
//                     <p className="mt-3 flex-1 text-sm leading-relaxed text-offwhite/70">{pr.desc}</p>

//                     <div className="mt-5 flex flex-wrap gap-2">
//                       {pr.tags.map((t) => (
//                         <span
//                           key={t}
//                           className="rounded-full border border-saffron-500/30 bg-saffron-500/10 px-2.5 py-1 text-[11px] font-medium text-saffron-400"
//                         >
//                           {t}
//                         </span>
//                       ))}
//                     </div>

//                     <Link
//                       to="/contact"
//                       className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-saffron-400 transition-all group-hover:gap-2"
//                     >
//                       Request a demo <HiArrowUpRight />
//                     </Link>
//                   </div>

//                   {/* animated accent line on hover */}
//                   <span className="absolute bottom-0 left-0 h-1 w-0 bg-saffron-gradient transition-all duration-500 group-hover:w-full" />
//                 </motion.div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIAL */}
//       <section className="section">
//         <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-ink-700 bg-white p-8 text-center shadow-card sm:flex-row sm:text-left">
//           <img
//             src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=60"
//             alt="Client of DevixoAI India"
//             className="h-20 w-20 shrink-0 rounded-full border-2 border-saffron-500 object-cover"
//           />
//           <div>
//             <p className="text-offwhite/80">
//               "DevixoAI India automated 60% of our support workload in under a month. The AI
//               suite paid for itself faster than we expected."
//             </p>
//             <p className="mt-3 text-sm font-semibold text-saffron-400">Radhika Sharma</p>
//             <p className="text-xs text-offwhite/60">Operations Head, a growing D2C brand</p>
//           </div>
//         </Reveal>
//       </section>

//       {/* NEWSLETTER CTA */}
//       <section className="section !pt-0 text-center">
//         <Reveal>
//           <h2 className="text-3xl font-bold md:text-4xl">
//             Ready to Enhance Your Sales &amp; Customer Satisfaction?
//           </h2>
//           <form
//             onSubmit={(e) => e.preventDefault()}
//             className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
//           >
//             <input type="email" required placeholder="Enter your email" className="input-field" />
//             <button type="submit" className="btn-primary shrink-0 justify-center">
//               Sign Up Free
//             </button>
//           </form>
//           <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-offwhite/60">
//             <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
//             <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
//           </p>
//         </Reveal>
//       </section>

//       <CTAStrip />
//     </>
//   );
// }




// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   HiArrowUpRight,
//   HiCheckCircle,
//   HiOutlineBolt,
//   HiOutlineChartBar,
//   HiOutlineCpuChip,
//   HiOutlineCamera,
//   HiOutlineAcademicCap,
//   HiOutlineWallet,
//   HiOutlineRocketLaunch,
//   HiOutlineShieldCheck,
//   HiOutlineArrowPathRoundedSquare,
// } from "react-icons/hi2";
// import Reveal from "../components/Reveal";
// import CTAStrip from "../components/CTAStrip";
// import Counter from "../components/Counter";
// import Marquee from "../components/Marquee";
// import NeuralBackground from "../components/NeuralBackground";
// import TerminalTyping from "../components/TerminalTyping";
// import TiltCard from "../components/TiltCard";
// import MagneticButton from "../components/MagneticButton";
// import AuroraBackground from "../components/AuroraBackground";

// const integrations = ["Slack", "Microsoft", "Google", "Notion", "Zapier", "AWS", "HubSpot", "Stripe"];

// const stats = [
//   { to: 10, suffix: "K+", label: "Active Users" },
//   { to: 99, suffix: ".9%", label: "Uptime SLA" },
//   { to: 40, suffix: "+", label: "Integrations" },
//   { to: 24, suffix: "/7", label: "Support" },
// ];

// // "The Devixo Advantage" — content provided by the office.
// const advantages = [
//   {
//     icon: HiOutlineCpuChip,
//     number: "01",
//     title: "Cutting-Edge AI Integration",
//     desc: "We don't just build apps; we build intelligent systems infused with state-of-the-art AI capabilities.",
//     tags: ["Intelligent Systems", "State-of-the-Art AI"],
//   },
//   {
//     icon: HiOutlineShieldCheck,
//     number: "02",
//     title: "Architectural Rigor",
//     desc: "Built on enterprise-grade standards, ensuring absolute security, lightning-fast performance, and infinite scalability.",
//     tags: ["Absolute Security", "Lightning-Fast Performance", "Infinite Scalability"],
//   },
//   {
//     icon: HiOutlineArrowPathRoundedSquare,
//     number: "03",
//     title: "End-to-End Execution",
//     desc: "From conceptualization and UI/UX design to full-stack development, AI deployment, and post-launch digital marketing.",
//     tags: ["UI/UX Design", "Full-Stack Development", "AI Deployment", "Digital Marketing"],
//   },
// ];

// // Featured projects — content provided by the office.
// // `img` is optional: add a real screenshot URL/import to any project and it will
// // replace the gradient illustration automatically.
// const projects = [
//   {
//     icon: HiOutlineCamera,
//     number: "01",
//     name: "ClicknShare",
//     category: "Education · Media",
//     tagline: "AI-Powered School Media & Face Recognition Platform",
//     desc: "A next-generation media ecosystem designed for schools, featuring automated face recognition technology that effortlessly delivers event photos to the right parents in real time.",
//     tags: ["Face Recognition", "School Media", "Real-Time Delivery"],
//     gradient: "from-saffron-500 to-saffron-700",
//     img: "",
//   },
//   {
//     icon: HiOutlineAcademicCap,
//     number: "02",
//     name: "Net2school",
//     category: "Education",
//     tagline: "The Ultimate Digital School Ecosystem",
//     desc: "Bridging the gap between institutions, educators, and parents. Net2school streamlines school administration, attendance, academic tracking, and communication into a single intuitive platform.",
//     tags: ["Administration", "Attendance", "Academic Tracking", "Communication"],
//     gradient: "from-saffron-400 to-saffron-600",
//     img: "",
//   },
//   {
//     icon: HiOutlineWallet,
//     number: "03",
//     name: "Kiddy Wallet",
//     category: "Finance",
//     tagline: "Smart Financial Literacy & Pocket Money Management",
//     desc: "An intuitive financial tool designed to introduce children and families to digital money management, fostering smart saving habits in a secure and controlled environment.",
//     tags: ["Financial Literacy", "Pocket Money", "Secure & Controlled"],
//     gradient: "from-saffron-600 to-saffron-800",
//     img: "",
//   },
// ];

// // Words that rotate in the hero headline: "Transforming Ideas into ___ Digital Realities"
// const heroWords = ["Intelligent", "Scalable", "Automated", "Result-Driven"];

// // Placeholder images for now — swap each `src` for your own screenshots later.
// // (To use local images: import them from ../assets and put the imported names here.)
// const heroImages = [
//   "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=60",
//   "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=60",
// ];

// export default function Home() {
//   const [imgIndex, setImgIndex] = useState(0);
//   const [wordIndex, setWordIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setImgIndex((i) => (i + 1) % heroImages.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setWordIndex((i) => (i + 1) % heroWords.length);
//     }, 2500);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       {/* HERO */}
//           <section className="relative overflow-hidden bg-saffron-glow">
//         <AuroraBackground />
//         {/* Deeper orange so the network stays visible on a white background */}
//         <NeuralBackground color="230, 115, 0" />
//         <div className="section relative flex flex-col items-center pb-16 pt-20 text-center md:pt-28">
//           <Reveal>
//             <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-xs font-medium text-saffron-400">
//               AI-Powered SaaS Solutions
//             </span>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <h1 className="max-w-4xl text-3xl font-bold leading-[1.25] sm:text-4xl md:text-5xl lg:text-6xl">
//               <span className="block">Transforming Ideas into</span>
//               {/* Fixed-height line: the rotating word swaps inside it, so the
//                   layout never jumps and descenders (g, y, p) never get clipped */}
//               <span className="relative block min-h-[1.35em]">
//                 <AnimatePresence mode="wait">
//                   <motion.span
//                     key={heroWords[wordIndex]}
//                     initial={{ opacity: 0, y: 18 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -18 }}
//                     transition={{ duration: 0.35, ease: "easeOut" }}
//                     className="inline-block bg-saffron-gradient bg-clip-text pb-2 text-transparent"
//                   >
//                     {heroWords[wordIndex]}
//                   </motion.span>
//                 </AnimatePresence>
//               </span>
//               <span className="block">Digital Realities</span>
//             </h1>
//           </Reveal>
//           <Reveal delay={0.2}>
//             <p className="mt-6 max-w-2xl text-base text-offwhite/70 md:text-lg">
//               At Devixo India Pvt Ltd, we engineer high-performance software, cutting-edge AI
//               automation, and result-driven digital marketing solutions designed to scale modern
//               enterprises.
//             </p>
//           </Reveal>
//           <Reveal delay={0.3} className="mt-8 flex flex-col gap-4 sm:flex-row">
//             <MagneticButton>
//               <Link to="/services" className="btn-primary">
//                 Explore Our Services <HiArrowUpRight />
//               </Link>
//             </MagneticButton>
//             <MagneticButton>
//               <Link to="/contact" className="btn-outline">
//                 Get in Touch
//               </Link>
//             </MagneticButton>
//           </Reveal>

//           <Reveal delay={0.4} className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-offwhite/60">
//             <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
//             <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
//           </Reveal>

//           {/* Rotating image slideshow — fixed aspect-ratio box so every image
//               always fills the frame with no gaps or size jumps between slides. */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="relative mt-16 w-full max-w-5xl"
//           >
//             <TiltCard className="rounded-2xl border border-ink-700 bg-white p-3 shadow-card">
//               <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg sm:aspect-[16/8] md:aspect-[16/7]">
//                 <AnimatePresence mode="wait">
//                   <motion.img
//                     key={heroImages[imgIndex]}
//                     src={heroImages[imgIndex]}
//                     alt="DevixoAI product showcase"
//                     initial={{ opacity: 0, scale: 1.05 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.98 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                     className="absolute inset-0 h-full w-full object-cover"
//                   />
//                 </AnimatePresence>
//               </div>
//             </TiltCard>

//             <motion.div
//               className="absolute -left-4 top-8 hidden rounded-xl border border-ink-700 bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:block md:-left-10"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineBolt /> 3x Faster
//               </p>
//               <p className="text-xs text-offwhite/60">Task automation</p>
//             </motion.div>

//             <motion.div
//               className="absolute -right-4 bottom-8 hidden rounded-xl border border-ink-700 bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:block md:-right-10"
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
//                 <HiOutlineChartBar /> +48%
//               </p>
//               <p className="text-xs text-offwhite/60">Efficiency gain</p>
//             </motion.div>

//             {/* Typing terminal — stays dark on purpose: a dark terminal pops
//                 nicely against the white page */}
//             <TerminalTyping className="absolute -top-10 right-2 z-10 hidden lg:block xl:-right-12" />

//             {/* Pulsing live-status badge */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 1.2, duration: 0.5 }}
//               className="absolute -top-4 left-4 z-10 hidden items-center gap-2 rounded-full border border-ink-700 bg-white/95 px-3 py-1.5 shadow-card backdrop-blur sm:flex md:left-8"
//             >
//               <span className="relative flex h-2 w-2">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
//               </span>
//               <span className="text-xs font-medium text-offwhite/80">AI models live now</span>
//             </motion.div>

//             {/* dot indicators */}
//             <div className="mt-4 flex items-center justify-center gap-2">
//               {heroImages.map((img, i) => (
//                 <button
//                   key={img}
//                   onClick={() => setImgIndex(i)}
//                   aria-label={`Show slide ${i + 1}`}
//                   className={`h-1.5 rounded-full transition-all duration-300 ${
//                     i === imgIndex ? "w-6 bg-saffron-500" : "w-1.5 bg-ink-600"
//                   }`}
//                 />
//               ))}
//             </div>
//           </motion.div>

//           <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
//             {stats.map((s, i) => (
//               <Reveal
//                 key={s.label}
//                 delay={i * 0.08}
//                 className="rounded-xl border border-ink-700 bg-white p-4 text-center shadow-card"
//               >
//                 <p className="text-2xl font-bold text-saffron-400 md:text-3xl">
//                   <Counter to={s.to} suffix={s.suffix} />
//                 </p>
//                 <p className="mt-1 text-xs text-offwhite/60">{s.label}</p>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* LOGOS MARQUEE — soft gray band to separate it from the white hero */}
//       <section className="border-y border-ink-700 bg-[#FAFAFB] py-8">
//         <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-offwhite/50">
//           Trusted by teams using
//         </p>
//         <Marquee items={integrations} />
//       </section>

//       {/* IMAGE + TEXT: insights */}
//       <section className="section grid items-center gap-12 md:grid-cols-2">
//         <Reveal>
//           <img
//             src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60"
//             alt="Team analyzing business data"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//         <Reveal delay={0.35}>
//           <h2 className="text-3xl font-bold md:text-4xl">Convert Your Data into Meaningful Insights</h2>
//           <p className="mt-4 text-offwhite/70">
//             Gain precise insights for your business with our advanced AI analytics engine.
//             Make informed decisions based on accurate, real-time data.
//           </p>
//           <ul className="mt-6 space-y-3">
//             {["Actionable Insights", "Enhanced Decision-Making", "Improved Efficiency"].map((t) => (
//               <li key={t} className="flex items-center gap-3 text-offwhite/80">
//                 <HiCheckCircle className="shrink-0 text-saffron-500" /> {t}
//               </li>
//             ))}
//           </ul>
//           <Link to="/features" className="btn-primary mt-8 inline-flex">
//             Get Started Now <HiArrowUpRight />
//           </Link>
//         </Reveal>
//       </section>

//       {/* IMAGE + TEXT: reversed on desktop */}
//       <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
//         <Reveal delay={0.35} className="order-2 md:order-1">
//           <h2 className="text-3xl font-bold md:text-4xl">Upgrade Your Business with Our AI Suite</h2>
//           <div className="mt-6 space-y-6">
//             {[
//               { icon: HiOutlineCpuChip, title: "Smart Task Management", desc: "Effortlessly organize, plan and track work with AI-assisted tools." },
//               { icon: HiOutlineBolt, title: "Real-Time Collaboration", desc: "Work with your team, share updates instantly and stay in sync." },
//               { icon: HiOutlineChartBar, title: "Instant Notifications", desc: "Get real-time alerts for important updates so nothing slips through." },
//             ].map((f) => (
//               <div key={f.title} className="flex gap-4">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-xl text-saffron-500">
//                   <f.icon />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">{f.title}</h3>
//                   <p className="mt-1 text-sm text-offwhite/70">{f.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Reveal>
//         <Reveal className="order-1 md:order-2">
//           <img
//             src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=60"
//             alt="Person using AI-powered dashboard"
//             className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//           />
//         </Reveal>
//       </section>

//       {/* INNOVATION IN ACTION — featured projects */}
//       <section className="relative overflow-hidden">
//         <motion.div
//           className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-saffron-500/10 blur-3xl"
//           animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-saffron-700/10 blur-3xl"
//           animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         />

//         <div className="section relative">
//           <Reveal className="mx-auto max-w-3xl text-center">
//             <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-[11px] font-medium text-saffron-400 sm:text-xs">
//               <HiOutlineRocketLaunch /> Featured Projects
//             </span>
//             <h2 className="text-3xl font-bold leading-snug md:text-4xl">
//               Innovation{" "}
//               <span className="bg-saffron-gradient bg-clip-text pb-1 text-transparent">in Action</span>
//             </h2>
//             <p className="mt-4 text-sm text-offwhite/70 sm:text-base">
//               Explore our flagship products solving real-world challenges across education,
//               finance, and media.
//             </p>
//           </Reveal>

//           <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
//             {projects.map((pr, i) => (
//               <Reveal
//                 key={pr.name}
//                 delay={i * 0.12}
//                 // 3 cards on a 2-column grid: let the last one span full width on tablets
//                 className={i === projects.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
//               >
//                 <motion.div
//                   whileHover={{ y: -8 }}
//                   transition={{ duration: 0.25 }}
//                   className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-700 bg-white shadow-card transition-colors duration-300 hover:border-saffron-500/50"
//                 >
//                   {/* visual header: real screenshot if provided, else animated gradient illustration */}
//                   <div className={`relative h-44 w-full overflow-hidden bg-gradient-to-br sm:h-48 ${pr.gradient}`}>
//                     {pr.img ? (
//                       <>
//                         <img
//                           src={pr.img}
//                           alt={pr.name}
//                           className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                       </>
//                     ) : (
//                       <>
//                         {/* soft highlights + dotted pattern */}
//                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
//                         <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:18px_18px]" />
//                         <motion.div
//                           className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/20 blur-2xl"
//                           animate={{ x: [0, -14, 0], y: [0, 12, 0] }}
//                           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//                         />
//                         <motion.div
//                           className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/40 bg-white/20 text-4xl text-white shadow-glow backdrop-blur"
//                           animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
//                           transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
//                         >
//                           <pr.icon />
//                         </motion.div>
//                       </>
//                     )}

//                     <span className="absolute left-4 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-saffron-600 shadow-card">
//                       {pr.category}
//                     </span>
//                     <span className="absolute bottom-3 right-4 text-3xl font-extrabold leading-none text-white/80 sm:text-4xl">
//                       {pr.number}
//                     </span>
//                   </div>

//                   {/* content */}
//                   <div className="flex flex-1 flex-col p-5 sm:p-6">
//                     <h3 className="text-xl font-bold leading-snug">{pr.name}</h3>
//                     <p className="mt-1 text-sm font-semibold leading-snug text-saffron-400">
//                       {pr.tagline}
//                     </p>
//                     <p className="mt-3 flex-1 text-sm leading-relaxed text-offwhite/70">{pr.desc}</p>

//                     <div className="mt-5 flex flex-wrap gap-2">
//                       {pr.tags.map((t) => (
//                         <span
//                           key={t}
//                           className="rounded-full border border-saffron-500/30 bg-saffron-500/10 px-2.5 py-1 text-[11px] font-medium text-saffron-400"
//                         >
//                           {t}
//                         </span>
//                       ))}
//                     </div>

//                     <Link
//                       to="/contact"
//                       className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-saffron-400 transition-all group-hover:gap-2"
//                     >
//                       Request a demo <HiArrowUpRight />
//                     </Link>
//                   </div>

//                   {/* animated accent line on hover */}
//                   <span className="absolute bottom-0 left-0 h-1 w-0 bg-saffron-gradient transition-all duration-500 group-hover:w-full" />
//                 </motion.div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* THE DEVIXO ADVANTAGE — soft gray band */}
//       <div className="border-y border-ink-700 bg-[#FAFAFB]">
//         <section className="section">
//           <Reveal className="mx-auto max-w-3xl text-center">
//             <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-[11px] font-medium text-saffron-400 sm:text-xs">
//               <HiOutlineShieldCheck /> Why Choose Devixo India?
//             </span>
//             <h2 className="text-3xl font-bold leading-snug md:text-4xl">
//               The Devixo{" "}
//               <span className="bg-saffron-gradient bg-clip-text pb-1 text-transparent">Advantage</span>
//             </h2>
//           </Reveal>

//           <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
//             {advantages.map((a, i) => (
//               <Reveal
//                 key={a.title}
//                 delay={i * 0.12}
//                 // 3 cards on a 2-column grid: last one spans full width on tablets
//                 className={i === advantages.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
//               >
//                 <motion.div
//                   whileHover={{ y: -8 }}
//                   transition={{ duration: 0.25 }}
//                   className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-700 bg-white p-6 shadow-card transition-colors duration-300 hover:border-saffron-500/50 sm:p-7"
//                 >
//                   {/* big faded number in the corner */}
//                   <span className="pointer-events-none absolute -right-2 -top-4 select-none text-8xl font-extrabold leading-none text-saffron-500/10 transition-colors duration-300 group-hover:text-saffron-500/20">
//                     {a.number}
//                   </span>

//                   <motion.div
//                     animate={{ y: [0, -5, 0] }}
//                     transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
//                     className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron-gradient text-2xl text-white shadow-glow"
//                   >
//                     <a.icon />
//                   </motion.div>

//                   <h3 className="relative mt-5 text-lg font-bold leading-snug sm:text-xl">{a.title}</h3>
//                   <p className="relative mt-3 flex-1 text-sm leading-relaxed text-offwhite/70">{a.desc}</p>

//                   <div className="relative mt-5 flex flex-wrap gap-2">
//                     {a.tags.map((t) => (
//                       <span
//                         key={t}
//                         className="flex items-center gap-1 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-2.5 py-1 text-[11px] font-medium text-saffron-400"
//                       >
//                         <HiCheckCircle className="shrink-0" /> {t}
//                       </span>
//                     ))}
//                   </div>

//                   <span className="absolute bottom-0 left-0 h-1 w-0 bg-saffron-gradient transition-all duration-500 group-hover:w-full" />
//                 </motion.div>
//               </Reveal>
//             ))}
//           </div>

//           <Reveal delay={0.2} className="mt-10 text-center sm:mt-12">
//             <MagneticButton>
//               <Link to="/contact" className="btn-primary">
//                 Talk to Our Team <HiArrowUpRight />
//               </Link>
//             </MagneticButton>
//           </Reveal>
//         </section>
//       </div>

//       {/* TESTIMONIAL */}
//       <section className="section">
//         <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-ink-700 bg-white p-8 text-center shadow-card sm:flex-row sm:text-left">
//           <img
//             src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=60"
//             alt="Client of DevixoAI India"
//             className="h-20 w-20 shrink-0 rounded-full border-2 border-saffron-500 object-cover"
//           />
//           <div>
//             <p className="text-offwhite/80">
//               "DevixoAI India automated 60% of our support workload in under a month. The AI
//               suite paid for itself faster than we expected."
//             </p>
//             <p className="mt-3 text-sm font-semibold text-saffron-400">Radhika Sharma</p>
//             <p className="text-xs text-offwhite/60">Operations Head, a growing D2C brand</p>
//           </div>
//         </Reveal>
//       </section>

//       {/* NEWSLETTER CTA */}
//       <section className="section !pt-0 text-center">
//         <Reveal>
//           <h2 className="text-3xl font-bold md:text-4xl">
//             Ready to Enhance Your Sales &amp; Customer Satisfaction?
//           </h2>
//           <form
//             onSubmit={(e) => e.preventDefault()}
//             className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
//           >
//             <input type="email" required placeholder="Enter your email" className="input-field" />
//             <button type="submit" className="btn-primary shrink-0 justify-center">
//               Sign Up Free
//             </button>
//           </form>
//           <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-offwhite/60">
//             <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
//             <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
//           </p>
//         </Reveal>
//       </section>

//       <CTAStrip />
//     </>
//   );
// }




import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiArrowUpRight,
  HiCheckCircle,
  HiOutlineBolt,
  HiOutlineChartBar,
  HiOutlineCpuChip,
  HiOutlineCamera,
  HiOutlineAcademicCap,
  HiOutlineWallet,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck,
  HiOutlineArrowPathRoundedSquare,
} from "react-icons/hi2";
import Reveal from "../components/Reveal";
import CTAStrip from "../components/CTAStrip";
import Counter from "../components/Counter";
import Marquee from "../components/Marquee";
import NeuralBackground from "../components/NeuralBackground";
import TerminalTyping from "../components/TerminalTyping";
import TiltCard from "../components/TiltCard";
import MagneticButton from "../components/MagneticButton";
import AuroraBackground from "../components/AuroraBackground";
import cuttingEdgeImg from "../assets/CuttingEdgeAIIntegration.png";
import architecturalImg from "../assets/ArchitecturalRegor.png";
import endToEndImg from "../assets/EndtoEndEncryption.png";

const integrations = ["Slack", "Microsoft", "Google", "Notion", "Zapier", "AWS", "HubSpot", "Stripe"];

const stats = [
  { to: 10, suffix: "K+", label: "Active Users" },
  { to: 99, suffix: ".9%", label: "Uptime SLA" },
  { to: 40, suffix: "+", label: "Integrations" },
  { to: 24, suffix: "/7", label: "Support" },
];

// "The Devixo Advantage" — content provided by the office.
const advantages = [
  {
    icon: HiOutlineCpuChip,
    number: "01",
    title: "Cutting-Edge AI Integration",
    desc: "We don't just build apps; we build intelligent systems infused with state-of-the-art AI capabilities.",
    tags: ["Intelligent Systems", "State-of-the-Art AI"],
    img: cuttingEdgeImg,
  },
  {
    icon: HiOutlineShieldCheck,
    number: "02",
    title: "Architectural Rigor",
    desc: "Built on enterprise-grade standards, ensuring absolute security, lightning-fast performance, and infinite scalability.",
    tags: ["Absolute Security", "Lightning-Fast Performance", "Infinite Scalability"],
    img: architecturalImg,
  },
  {
    icon: HiOutlineArrowPathRoundedSquare,
    number: "03",
    title: "End-to-End Execution",
    desc: "From conceptualization and UI/UX design to full-stack development, AI deployment, and post-launch digital marketing.",
    tags: ["UI/UX Design", "Full-Stack Development", "AI Deployment", "Digital Marketing"],
    img: endToEndImg,
  },
];
// Featured projects — content provided by the office.
// `img` is optional: add a real screenshot URL/import to any project and it will
// replace the gradient illustration automatically.
const projects = [
  {
    icon: HiOutlineCamera,
    number: "01",
    name: "ClicknShare",
    category: "Education · Media",
    tagline: "AI-Powered School Media & Face Recognition Platform",
    desc: "A next-generation media ecosystem designed for schools, featuring automated face recognition technology that effortlessly delivers event photos to the right parents in real time.",
    tags: ["Face Recognition", "School Media", "Real-Time Delivery"],
    gradient: "from-saffron-500 to-saffron-700",
    img: "",
  },
  {
    icon: HiOutlineAcademicCap,
    number: "02",
    name: "Net2school",
    category: "Education",
    tagline: "The Ultimate Digital School Ecosystem",
    desc: "Bridging the gap between institutions, educators, and parents. Net2school streamlines school administration, attendance, academic tracking, and communication into a single intuitive platform.",
    tags: ["Administration", "Attendance", "Academic Tracking", "Communication"],
    gradient: "from-saffron-400 to-saffron-600",
    img: "",
  },
  {
    icon: HiOutlineWallet,
    number: "03",
    name: "Kiddy Wallet",
    category: "Finance",
    tagline: "Smart Financial Literacy & Pocket Money Management",
    desc: "An intuitive financial tool designed to introduce children and families to digital money management, fostering smart saving habits in a secure and controlled environment.",
    tags: ["Financial Literacy", "Pocket Money", "Secure & Controlled"],
    gradient: "from-saffron-600 to-saffron-800",
    img: "",
  },
];

// Words that rotate in the hero headline: "Transforming Ideas into ___ Digital Realities"
const heroWords = ["Intelligent", "Scalable", "Automated", "Result-Driven"];

// Placeholder images for now — swap each `src` for your own screenshots later.
// (To use local images: import them from ../assets and put the imported names here.)
const heroImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=60",
];

export default function Home() {
  const [imgIndex, setImgIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((i) => (i + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((i) => (i + 1) % heroWords.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO */}
          <section className="relative overflow-hidden bg-saffron-glow">
        <AuroraBackground />
        {/* Deeper orange so the network stays visible on a white background */}
        <NeuralBackground color="230, 115, 0" />
        <div className="section relative flex flex-col items-center pb-16 pt-20 text-center md:pt-28">
          <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-xs font-medium text-saffron-400">
              AI-Powered SaaS Solutions
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="max-w-4xl text-3xl font-bold leading-[1.25] sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block">Transforming Ideas into</span>
              {/* Fixed-height line: the rotating word swaps inside it, so the
                  layout never jumps and descenders (g, y, p) never get clipped */}
              <span className="relative block min-h-[1.35em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={heroWords[wordIndex]}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="inline-block bg-saffron-gradient bg-clip-text pb-2 text-transparent"
                  >
                    {heroWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="block">Digital Realities</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-base text-offwhite/70 md:text-lg">
              At Devixo India Pvt Ltd, we engineer high-performance software, cutting-edge AI
              automation, and result-driven digital marketing solutions designed to scale modern
              enterprises.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <MagneticButton>
              <Link to="/services" className="btn-primary">
                Explore Our Services <HiArrowUpRight />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link to="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </MagneticButton>
          </Reveal>

          <Reveal delay={0.4} className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-offwhite/60">
            <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
            <span className="flex items-center gap-2"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
          </Reveal>

          {/* Rotating image slideshow — fixed aspect-ratio box so every image
              always fills the frame with no gaps or size jumps between slides. */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative mt-16 w-full max-w-5xl"
          >
            <TiltCard className="rounded-2xl border border-ink-700 bg-white p-3 shadow-card">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg sm:aspect-[16/8] md:aspect-[16/7]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={heroImages[imgIndex]}
                    src={heroImages[imgIndex]}
                    alt="DevixoAI product showcase"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </TiltCard>

            <motion.div
              className="absolute -left-4 top-8 hidden rounded-xl border border-ink-700 bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:block md:-left-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
                <HiOutlineBolt /> 3x Faster
              </p>
              <p className="text-xs text-offwhite/60">Task automation</p>
            </motion.div>

            <motion.div
              className="absolute -right-4 bottom-8 hidden rounded-xl border border-ink-700 bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:block md:-right-10"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
                <HiOutlineChartBar /> +48%
              </p>
              <p className="text-xs text-offwhite/60">Efficiency gain</p>
            </motion.div>

            {/* Typing terminal — stays dark on purpose: a dark terminal pops
                nicely against the white page */}
            <TerminalTyping className="absolute -top-10 right-2 z-10 hidden lg:block xl:-right-12" />

            {/* Pulsing live-status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-4 left-4 z-10 hidden items-center gap-2 rounded-full border border-ink-700 bg-white/95 px-3 py-1.5 shadow-card backdrop-blur sm:flex md:left-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-medium text-offwhite/80">AI models live now</span>
            </motion.div>

            {/* dot indicators */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {heroImages.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setImgIndex(i)}
                  aria-label={`Show slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === imgIndex ? "w-6 bg-saffron-500" : "w-1.5 bg-ink-600"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className="rounded-xl border border-ink-700 bg-white p-4 text-center shadow-card"
              >
                <p className="text-2xl font-bold text-saffron-400 md:text-3xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs text-offwhite/60">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOGOS MARQUEE — soft gray band to separate it from the white hero */}
      <section className="border-y border-ink-700 bg-[#FAFAFB] py-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-offwhite/50">
          Trusted by teams using
        </p>
        <Marquee items={integrations} />
      </section>

      {/* IMAGE + TEXT: insights */}
      <section className="section grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60"
            alt="Team analyzing business data"
            className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
          />
        </Reveal>
        <Reveal delay={0.35}>
          <h2 className="text-3xl font-bold md:text-4xl">Convert Your Data into Meaningful Insights</h2>
          <p className="mt-4 text-offwhite/70">
            Gain precise insights for your business with our advanced AI analytics engine.
            Make informed decisions based on accurate, real-time data.
          </p>
          <ul className="mt-6 space-y-3">
            {["Actionable Insights", "Enhanced Decision-Making", "Improved Efficiency"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-offwhite/80">
                <HiCheckCircle className="shrink-0 text-saffron-500" /> {t}
              </li>
            ))}
          </ul>
          <Link to="/features" className="btn-primary mt-8 inline-flex">
            Get Started Now <HiArrowUpRight />
          </Link>
        </Reveal>
      </section>

      {/* IMAGE + TEXT: reversed on desktop */}
      <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
        <Reveal delay={0.35} className="order-2 md:order-1">
          <h2 className="text-3xl font-bold md:text-4xl">Upgrade Your Business with Our AI Suite</h2>
          <div className="mt-6 space-y-6">
            {[
              { icon: HiOutlineCpuChip, title: "Smart Task Management", desc: "Effortlessly organize, plan and track work with AI-assisted tools." },
              { icon: HiOutlineBolt, title: "Real-Time Collaboration", desc: "Work with your team, share updates instantly and stay in sync." },
              { icon: HiOutlineChartBar, title: "Instant Notifications", desc: "Get real-time alerts for important updates so nothing slips through." },
            ].map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-xl text-saffron-500">
                  <f.icon />
                </div>
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-offwhite/70">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=60"
            alt="Person using AI-powered dashboard"
            className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
          />
        </Reveal>
      </section>

      {/* INNOVATION IN ACTION — featured projects */}
      <section className="relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-saffron-500/10 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-saffron-700/10 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="section relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-[11px] font-medium text-saffron-400 sm:text-xs">
              <HiOutlineRocketLaunch /> Featured Projects
            </span>
            <h2 className="text-3xl font-bold leading-snug md:text-4xl">
              Innovation{" "}
              <span className="bg-saffron-gradient bg-clip-text pb-1 text-transparent">in Action</span>
            </h2>
            <p className="mt-4 text-sm text-offwhite/70 sm:text-base">
              Explore our flagship products solving real-world challenges across education,
              finance, and media.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((pr, i) => (
              <Reveal
                key={pr.name}
                delay={i * 0.12}
                // 3 cards on a 2-column grid: let the last one span full width on tablets
                className={i === projects.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-700 bg-white shadow-card transition-colors duration-300 hover:border-saffron-500/50"
                >
                  {/* visual header: real screenshot if provided, else animated gradient illustration */}
                  <div className={`relative h-44 w-full overflow-hidden bg-gradient-to-br sm:h-48 ${pr.gradient}`}>
                    {pr.img ? (
                      <>
                        <img
                          src={pr.img}
                          alt={pr.name}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </>
                    ) : (
                      <>
                        {/* soft highlights + dotted pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
                        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:18px_18px]" />
                        <motion.div
                          className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/20 blur-2xl"
                          animate={{ x: [0, -14, 0], y: [0, 12, 0] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/40 bg-white/20 text-4xl text-white shadow-glow backdrop-blur"
                          animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <pr.icon />
                        </motion.div>
                      </>
                    )}

                    <span className="absolute left-4 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-saffron-600 shadow-card">
                      {pr.category}
                    </span>
                    <span className="absolute bottom-3 right-4 text-3xl font-extrabold leading-none text-white/80 sm:text-4xl">
                      {pr.number}
                    </span>
                  </div>

                  {/* content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-xl font-bold leading-snug">{pr.name}</h3>
                    <p className="mt-1 text-sm font-semibold leading-snug text-saffron-400">
                      {pr.tagline}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-offwhite/70">{pr.desc}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {pr.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-saffron-500/30 bg-saffron-500/10 px-2.5 py-1 text-[11px] font-medium text-saffron-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-saffron-400 transition-all group-hover:gap-2"
                    >
                      Request a demo <HiArrowUpRight />
                    </Link>
                  </div>

                  {/* animated accent line on hover */}
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-saffron-gradient transition-all duration-500 group-hover:w-full" />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

            {/* THE DEVIXO ADVANTAGE — soft gray band */}
      <div className="border-y border-ink-700 bg-[#FAFAFB]">
        <section className="section">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-[11px] font-medium text-saffron-400 sm:text-xs">
              <HiOutlineShieldCheck /> Why Choose Devixo India?
            </span>
            <h2 className="text-3xl font-bold leading-snug md:text-4xl">
              The Devixo{" "}
              <span className="bg-saffron-gradient bg-clip-text pb-1 text-transparent">Advantage</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 0.12}
                className={i === advantages.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-700 bg-white shadow-card transition-colors duration-300 hover:border-saffron-500/50"
                >
                  {/* image header */}
                  <div className="relative h-32 w-full overflow-hidden bg-ink-950 sm:h-36">
                    <img
                      src={a.img}
                      alt={a.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />

                    <span className="absolute right-3 top-2.5 text-2xl font-extrabold leading-none text-white/40 sm:text-3xl">
                      {a.number}
                    </span>

                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-saffron-gradient text-lg text-white shadow-glow sm:h-11 sm:w-11 sm:text-xl"
                    >
                      <a.icon />
                    </motion.div>
                  </div>

                  {/* content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-base font-bold leading-snug sm:text-lg">{a.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-offwhite/70">{a.desc}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {a.tags.map((t) => (
                        <span
                          key={t}
                          className="flex items-center gap-1 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-2.5 py-1 text-[11px] font-medium text-saffron-400"
                        >
                          <HiCheckCircle className="shrink-0" /> {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-saffron-gradient transition-all duration-500 group-hover:w-full" />
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10 text-center sm:mt-12">
            <MagneticButton>
              <Link to="/contact" className="btn-primary">
                Talk to Our Team <HiArrowUpRight />
              </Link>
            </MagneticButton>
          </Reveal>
        </section>
      </div>

      {/* TESTIMONIAL */}
      <section className="section">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-ink-700 bg-white p-8 text-center shadow-card sm:flex-row sm:text-left">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=60"
            alt="Client of DevixoAI India"
            className="h-20 w-20 shrink-0 rounded-full border-2 border-saffron-500 object-cover"
          />
          <div>
            <p className="text-offwhite/80">
              "DevixoAI India automated 60% of our support workload in under a month. The AI
              suite paid for itself faster than we expected."
            </p>
            <p className="mt-3 text-sm font-semibold text-saffron-400">Radhika Sharma</p>
            <p className="text-xs text-offwhite/60">Operations Head, a growing D2C brand</p>
          </div>
        </Reveal>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="section !pt-0 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Enhance Your Sales &amp; Customer Satisfaction?
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input type="email" required placeholder="Enter your email" className="input-field" />
            <button type="submit" className="btn-primary shrink-0 justify-center">
              Sign Up Free
            </button>
          </form>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-offwhite/60">
            <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> No credit card needed</span>
            <span className="flex items-center gap-1"><HiCheckCircle className="text-saffron-500" /> Free 14-day trial</span>
          </p>
        </Reveal>
      </section>

      <CTAStrip />
    </>
  );
}