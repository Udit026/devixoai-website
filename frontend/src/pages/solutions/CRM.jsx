// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//     HiArrowUpRight,
//     HiOutlineUsers,
//     HiOutlineBolt,
//     HiOutlineBellAlert,
//     HiOutlineCircleStack,
//     HiOutlineArrowTrendingUp,
//     HiOutlineEnvelope,
//     HiOutlinePhone,
//     HiOutlineCalendarDays,
// } from "react-icons/hi2";
// import Reveal from "../../components/Reveal";
// import CTAStrip from "../../components/CTAStrip";
// import Counter from "../../components/Counter";
// import CRMImg from "../../assets/CRMImg.jpg";

// const stages = [
//     { name: "New Lead", deals: ["Acme Corp", "BlueSky Retail"] },
//     { name: "Contacted", deals: ["Nova Logistics"] },
//     { name: "Proposal", deals: ["Orbit Finance", "Vertex Labs"] },
//     { name: "Won", deals: ["Pinnacle Foods"] },
// ];

// const stats = [
//     { to: 34, suffix: "%", label: "More deals closed" },
//     { to: 2, suffix: "x", label: "Faster follow-ups" },
//     { to: 500, suffix: "+", label: "Contacts managed avg." },
// ];

// const benefits = [
//     { icon: HiOutlineUsers, title: "360° Customer View", desc: "Every call, email and note in one unified timeline per contact." },
//     { icon: HiOutlineBellAlert, title: "Smart Follow-Up Alerts", desc: "AI flags deals going cold before you lose them." },
//     { icon: HiOutlineArrowTrendingUp, title: "Pipeline Forecasting", desc: "Predict next month's revenue from live pipeline data." },
// ];

// const channels = [
//     { icon: HiOutlineEnvelope, label: "Email Sync" },
//     { icon: HiOutlinePhone, label: "Call Logging" },
//     { icon: HiOutlineCalendarDays, label: "Meeting Booking" },
//     { icon: HiOutlineCircleStack, label: "Data Enrichment" },
// ];

// export default function CRM() {
//     return (
//         <>
//             {/* HERO */}
//             <section className="relative overflow-hidden bg-saffron-glow">
//                 <motion.div
//                     className="pointer-events-none absolute -left-16 top-16 h-64 w-64 rounded-full bg-saffron-500/15 blur-3xl"
//                     animate={{ x: [0, 25, 0], y: [0, 20, 0] }}
//                     transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//                 />
//                 <motion.div
//                     className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-saffron-700/15 blur-3xl"
//                     animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
//                     transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//                 />

//                 <div className="section relative grid items-center gap-12 md:grid-cols-2">
//                     <Reveal>
//                         <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-xs font-medium text-saffron-400">
//                             <HiOutlineUsers /> SaaS CRM Platform
//                         </span>
//                         <h1 className="text-4xl font-bold leading-tight md:text-5xl">
//                             Manage Every Customer{" "}
//                             <span className="bg-saffron-gradient bg-clip-text text-transparent">Relationship</span>{" "}
//                             in One Place
//                         </h1>
//                         <p className="mt-6 text-offwhite/60 md:text-lg">
//                             DevixoAI CRM keeps your leads, deals and conversations organized automatically —
//                             with AI that tells you exactly who to follow up with, and when.
//                         </p>
//                         <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//                             <Link to="/contact" className="btn-primary">
//                                 Get Started Free <HiArrowUpRight />
//                             </Link>
//                             <Link to="/pricing" className="btn-outline">
//                                 View Pricing
//                             </Link>
//                         </div>
//                     </Reveal>

//                     <Reveal delay={0.15}>
//                         <motion.div
//                             animate={{ y: [0, -12, 0] }}
//                             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//                             className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-800 shadow-card"
//                         >
//                             {/* <div className="flex items-center gap-2 border-b border-ink-700 px-4 py-3">
//                                 <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
//                                 <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
//                                 <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
//                             </div> */}
//                             <img
//                                 // src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=900&q=60"
//                                 // src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=900&q=60"
//                                 src={CRMImg}
//                                 alt="CRM dashboard showing customer pipeline"
//                                 className="h-56 w-full object-cover sm:h-72 md:h-80"
//                             />
//                         </motion.div>
//                     </Reveal>
//                 </div>
//             </section>

//             {/* STATS */}
//             <section className="border-y border-ink-700 bg-ink-900/50 py-10">
//                 <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 sm:grid-cols-3">
//                     {stats.map((s, i) => (
//                         <Reveal key={s.label} delay={i * 0.1} className="text-center">
//                             <p className="text-3xl font-bold text-saffron-400">
//                                 <Counter to={s.to} suffix={s.suffix} />
//                             </p>
//                             <p className="mt-1 text-sm text-offwhite/50">{s.label}</p>
//                         </Reveal>
//                     ))}
//                 </div>
//             </section>

//             {/* ANIMATED PIPELINE VISUAL */}
//             <section className="section">
//                 <Reveal className="mx-auto max-w-2xl text-center">
//                     <h2 className="text-3xl font-bold md:text-4xl">Your Whole Pipeline, at a Glance</h2>
//                     <p className="mt-4 text-offwhite/60">
//                         Drag-and-drop deals through stages — or let AI move them for you as activity happens.
//                     </p>
//                 </Reveal>

//                 <div className="relative mt-14 overflow-x-auto pb-4">
//                     <div className="grid min-w-[640px] grid-cols-4 gap-4 sm:min-w-0">
//                         {stages.map((stage, i) => (
//                             <Reveal key={stage.name} delay={i * 0.1}>
//                                 <div className="rounded-xl border border-ink-700 bg-ink-900 p-3">
//                                     <p className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-offwhite/50">
//                                         {stage.name}
//                                         <span className="rounded-full bg-ink-800 px-2 py-0.5 text-[10px] text-offwhite/40">
//                                             {stage.deals.length}
//                                         </span>
//                                     </p>
//                                     <div className="space-y-2">
//                                         {stage.deals.map((deal) => (
//                                             <div
//                                                 key={deal}
//                                                 className="rounded-lg border border-ink-700 bg-ink-800 px-3 py-2.5 text-xs text-offwhite/70"
//                                             >
//                                                 {deal}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </Reveal>
//                         ))}
//                     </div>

//                     <motion.div
//                         className="pointer-events-none absolute top-14 hidden items-center gap-2 rounded-lg border border-saffron-500/40 bg-ink-950 px-3 py-2.5 text-xs font-medium text-saffron-400 shadow-glow lg:flex"
//                         style={{ width: "calc(25% - 12px)" }}
//                         animate={{ left: ["2%", "27%", "52%", "77%", "77%"] }}
//                         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.25, 0.5, 0.75, 1] }}
//                     >
//                         <HiOutlineBolt /> Zenith Retail — AI moving...
//                     </motion.div>
//                 </div>
//             </section>

//             {/* IMAGE + BENEFITS */}
//             <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
//                 <Reveal className="order-2 md:order-1">
//                     <h2 className="text-3xl font-bold md:text-4xl">Built for Sales Teams That Move Fast</h2>
//                     <div className="mt-8 space-y-6">
//                         {benefits.map((b) => (
//                             <div key={b.title} className="flex gap-4">
//                                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-xl text-saffron-500">
//                                     <b.icon />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-semibold">{b.title}</h3>
//                                     <p className="mt-1 text-sm text-offwhite/60">{b.desc}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </Reveal>
//                 <Reveal delay={0.1} className="order-1 md:order-2">
//                     <img
//                         src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=60"
//                         alt="Sales team collaborating using CRM"
//                         className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//                     />
//                 </Reveal>
//             </section>

//             {/* CONNECTED CHANNELS */}
//             <section className="section">
//                 <Reveal className="mx-auto max-w-2xl text-center">
//                     <h2 className="text-3xl font-bold md:text-4xl">Every Channel, Automatically Logged</h2>
//                     <p className="mt-4 text-offwhite/60">
//                         No more manual data entry — DevixoAI CRM captures it all in the background.
//                     </p>
//                 </Reveal>
//                 <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//                     {channels.map((c, i) => (
//                         <Reveal key={c.label} delay={i * 0.08}>
//                             <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card h-full text-center">
//                                 <c.icon className="mx-auto mb-3 text-2xl text-saffron-500" />
//                                 <p className="text-sm font-medium">{c.label}</p>
//                             </motion.div>
//                         </Reveal>
//                     ))}
//                 </div>
//             </section>

//             <CTAStrip />
//         </>
//     );
// }






// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//     HiArrowUpRight,
//     HiOutlineUsers,
//     HiOutlineBolt,
//     HiOutlineBellAlert,
//     HiOutlineCircleStack,
//     HiOutlineArrowTrendingUp,
//     HiOutlineEnvelope,
//     HiOutlinePhone,
//     HiOutlineCalendarDays,
// } from "react-icons/hi2";
// import Reveal from "../../components/Reveal";
// import CTAStrip from "../../components/CTAStrip";
// import Counter from "../../components/Counter";
// import CRMImg from "../../assets/CRMImg.jpg";

// const stages = [
//     { name: "New Lead", deals: ["Acme Corp", "BlueSky Retail"] },
//     { name: "Contacted", deals: ["Nova Logistics"] },
//     { name: "Proposal", deals: ["Orbit Finance", "Vertex Labs"] },
//     { name: "Won", deals: ["Pinnacle Foods"] },
// ];

// const stats = [
//     { to: 34, suffix: "%", label: "More deals closed" },
//     { to: 2, suffix: "x", label: "Faster follow-ups" },
//     { to: 500, suffix: "+", label: "Contacts managed avg." },
// ];

// const benefits = [
//     { icon: HiOutlineUsers, title: "360° Customer View", desc: "Every call, email and note in one unified timeline per contact." },
//     { icon: HiOutlineBellAlert, title: "Smart Follow-Up Alerts", desc: "AI flags deals going cold before you lose them." },
//     { icon: HiOutlineArrowTrendingUp, title: "Pipeline Forecasting", desc: "Predict next month's revenue from live pipeline data." },
// ];

// const channels = [
//     { icon: HiOutlineEnvelope, label: "Email Sync" },
//     { icon: HiOutlinePhone, label: "Call Logging" },
//     { icon: HiOutlineCalendarDays, label: "Meeting Booking" },
//     { icon: HiOutlineCircleStack, label: "Data Enrichment" },
// ];

// export default function CRM() {
//     return (
//         <>
//             {/* HERO */}
//             <section className="relative overflow-hidden bg-saffron-glow">
//                 <motion.div
//                     className="pointer-events-none absolute -left-16 top-16 h-64 w-64 rounded-full bg-saffron-500/15 blur-3xl"
//                     animate={{ x: [0, 25, 0], y: [0, 20, 0] }}
//                     transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//                 />
//                 <motion.div
//                     className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-saffron-700/15 blur-3xl"
//                     animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
//                     transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//                 />

//                 <div className="section relative grid items-center gap-12 md:grid-cols-2">
//                     <Reveal>
//                         <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-xs font-medium text-saffron-400">
//                             <HiOutlineUsers /> SaaS CRM Platform
//                         </span>
//                         <h1 className="text-4xl font-bold leading-tight md:text-5xl">
//                             Manage Every Customer{" "}
//                             <span className="bg-saffron-gradient bg-clip-text text-transparent">Relationship</span>{" "}
//                             in One Place
//                         </h1>
//                         <p className="mt-6 text-offwhite/60 md:text-lg">
//                             DevixoAI CRM keeps your leads, deals and conversations organized automatically —
//                             with AI that tells you exactly who to follow up with, and when.
//                         </p>
//                         <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//                             <Link to="/contact" className="btn-primary">
//                                 Get Started Free <HiArrowUpRight />
//                             </Link>
//                             <Link to="/pricing" className="btn-outline">
//                                 View Pricing
//                             </Link>
//                         </div>
//                     </Reveal>

//                     <Reveal delay={0.15}>
//                         <motion.div
//                             animate={{ y: [0, -12, 0] }}
//                             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//                             className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-800 shadow-card"
//                         >
                          
//                             <img
//                                 src={CRMImg}
//                                 alt="CRM dashboard showing customer pipeline"
//                                 className="h-56 w-full object-cover sm:h-72 md:h-80"
//                             />
//                         </motion.div>
//                     </Reveal>
//                 </div>
//             </section>

//             {/* STATS */}
//             <section className="border-y border-ink-700 bg-ink-900/50 py-10">
//                 <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 sm:grid-cols-3">
//                     {stats.map((s, i) => (
//                         <Reveal key={s.label} delay={i * 0.1} className="text-center">
//                             <p className="text-3xl font-bold text-saffron-400">
//                                 <Counter to={s.to} suffix={s.suffix} />
//                             </p>
//                             <p className="mt-1 text-sm text-offwhite/50">{s.label}</p>
//                         </Reveal>
//                     ))}
//                 </div>
//             </section>

//             {/* ANIMATED PIPELINE VISUAL */}
//             <section className="section">
//                 <Reveal className="mx-auto max-w-2xl text-center">
//                     <h2 className="text-3xl font-bold md:text-4xl">Your Whole Pipeline, at a Glance</h2>
//                     <p className="mt-4 text-offwhite/60">
//                         Drag-and-drop deals through stages — or let AI move them for you as activity happens.
//                     </p>
//                 </Reveal>

//                 <div className="relative mt-14 overflow-x-auto pb-4">
//                     <div className="grid min-w-[640px] grid-cols-4 gap-4 sm:min-w-0">
//                         {stages.map((stage, i) => (
//                             <Reveal key={stage.name} delay={i * 0.1}>
//                                 <div className="rounded-xl border border-ink-700 bg-ink-900 p-3">
//                                     <p className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-offwhite/50">
//                                         {stage.name}
//                                         <span className="rounded-full bg-ink-800 px-2 py-0.5 text-[10px] text-offwhite/40">
//                                             {stage.deals.length}
//                                         </span>
//                                     </p>
//                                     <div className="space-y-2">
//                                         {stage.deals.map((deal) => (
//                                             <div
//                                                 key={deal}
//                                                 className="rounded-lg border border-ink-700 bg-ink-800 px-3 py-2.5 text-xs text-offwhite/70"
//                                             >
//                                                 {deal}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </Reveal>
//                         ))}
//                     </div>

//                     <motion.div
//                         className="pointer-events-none absolute top-14 hidden items-center gap-2 rounded-lg border border-saffron-500/40 bg-ink-950 px-3 py-2.5 text-xs font-medium text-saffron-400 shadow-glow lg:flex"
//                         style={{ width: "calc(25% - 12px)" }}
//                         animate={{ left: ["2%", "27%", "52%", "77%", "77%"] }}
//                         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.25, 0.5, 0.75, 1] }}
//                     >
//                         <HiOutlineBolt /> Zenith Retail — AI moving...
//                     </motion.div>
//                 </div>
//             </section>

//             {/* IMAGE + BENEFITS */}
//             <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
//                 <Reveal className="order-2 md:order-1">
//                     <h2 className="text-3xl font-bold md:text-4xl">Built for Sales Teams That Move Fast</h2>
//                     <div className="mt-8 space-y-6">
//                         {benefits.map((b) => (
//                             <div key={b.title} className="flex gap-4">
//                                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-xl text-saffron-500">
//                                     <b.icon />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-semibold">{b.title}</h3>
//                                     <p className="mt-1 text-sm text-offwhite/60">{b.desc}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </Reveal>
//                 <Reveal delay={0.1} className="order-1 md:order-2">
//                     <img
//                         src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=60"
//                         alt="Sales team collaborating using CRM"
//                         className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
//                     />
//                 </Reveal>
//             </section>

//             {/* CONNECTED CHANNELS */}
//             <section className="section">
//                 <Reveal className="mx-auto max-w-2xl text-center">
//                     <h2 className="text-3xl font-bold md:text-4xl">Every Channel, Automatically Logged</h2>
//                     <p className="mt-4 text-offwhite/60">
//                         No more manual data entry — DevixoAI CRM captures it all in the background.
//                     </p>
//                 </Reveal>
//                 <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//                     {channels.map((c, i) => (
//                         <Reveal key={c.label} delay={i * 0.08}>
//                             <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card h-full text-center">
//                                 <c.icon className="mx-auto mb-3 text-2xl text-saffron-500" />
//                                 <p className="text-sm font-medium">{c.label}</p>
//                             </motion.div>
//                         </Reveal>
//                     ))}
//                 </div>
//             </section>

//             <CTAStrip />
//         </>
//     );
// }



import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiArrowUpRight,
  HiOutlineUsers,
  HiOutlineBolt,
  HiOutlineBellAlert,
  HiOutlineCircleStack,
  HiOutlineArrowTrendingUp,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineCalendarDays,
  HiOutlineIdentification,
  HiOutlineTag,
  HiOutlineClock,
  HiOutlineBanknotes,
  HiOutlineChartPie,
  HiOutlineDocumentChartBar,
} from "react-icons/hi2";
import Reveal from "../../components/Reveal";
import CTAStrip from "../../components/CTAStrip";
import Counter from "../../components/Counter";
import CRMImg from "../../assets/CRMImg.jpg";

const stages = [
  { name: "New Lead", deals: ["Acme Corp", "BlueSky Retail"] },
  { name: "Contacted", deals: ["Nova Logistics"] },
  { name: "Proposal", deals: ["Orbit Finance", "Vertex Labs"] },
  { name: "Won", deals: ["Pinnacle Foods"] },
];

const stats = [
  { to: 34, suffix: "%", label: "More deals closed" },
  { to: 2, suffix: "x", label: "Faster follow-ups" },
  { to: 500, suffix: "+", label: "Contacts managed avg." },
];

const channels = [
  { icon: HiOutlineEnvelope, label: "Email Sync" },
  { icon: HiOutlinePhone, label: "Call Logging" },
  { icon: HiOutlineCalendarDays, label: "Meeting Booking" },
  { icon: HiOutlineCircleStack, label: "Data Enrichment" },
];

// Rotating "topic" blocks for the Image + Benefits section.
// Each one swaps its own image + heading + benefit list on the same timer,
// so the section cycles through several CRM capabilities automatically.
const crmTopics = [
  {
    title: "Built for Sales Teams That Move Fast",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=60",
    alt: "Sales team collaborating using CRM",
    benefits: [
      { icon: HiOutlineUsers, title: "360° Customer View", desc: "Every call, email and note in one unified timeline per contact." },
      { icon: HiOutlineBellAlert, title: "Smart Follow-Up Alerts", desc: "AI flags deals going cold before you lose them." },
      { icon: HiOutlineArrowTrendingUp, title: "Pipeline Forecasting", desc: "Predict next month's revenue from live pipeline data." },
    ],
  },
  {
    title: "Contact Management Made Simple",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=60",
    alt: "Team reviewing customer contact records",
    benefits: [
      { icon: HiOutlineIdentification, title: "Centralized Contact Records", desc: "Every phone number, email and past order in one clean profile." },
      { icon: HiOutlineTag, title: "Tags & Smart Segments", desc: "Group contacts automatically by behavior, value or lifecycle stage." },
      { icon: HiOutlineClock, title: "Full Activity History", desc: "See every touchpoint a contact has had with your team, in order." },
    ],
  },
  {
    title: "Track Every Deal, Automatically",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60",
    alt: "Team analyzing deal and revenue data",
    benefits: [
      { icon: HiOutlineBanknotes, title: "Deal Value Tracking", desc: "Know exactly how much revenue is sitting in each pipeline stage." },
      { icon: HiOutlineChartPie, title: "Win/Loss Analysis", desc: "Understand why deals close or fall through, automatically tagged." },
      { icon: HiOutlineDocumentChartBar, title: "One-Click Reports", desc: "Generate sales performance reports for any period in seconds." },
    ],
  },
];

export default function CRM() {
  const [topicIndex, setTopicIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTopicIndex((i) => (i + 1) % crmTopics.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const topic = crmTopics[topicIndex];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-saffron-glow">
        <motion.div
          className="pointer-events-none absolute -left-16 top-16 h-64 w-64 rounded-full bg-saffron-500/15 blur-3xl"
          animate={{ x: [0, 25, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-saffron-700/15 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="section relative grid items-center gap-10 sm:gap-12 md:grid-cols-2">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-[11px] font-medium text-saffron-400 sm:mb-5 sm:text-xs">
              <HiOutlineUsers /> SaaS CRM Platform
            </span>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Manage Every Customer{" "}
              <span className="bg-saffron-gradient bg-clip-text text-transparent">Relationship</span>{" "}
              in One Place
            </h1>
            <p className="mt-5 text-sm text-offwhite/60 sm:mt-6 sm:text-base md:text-lg">
              DevixAI CRM keeps your leads, deals and conversations organized automatically —
              with AI that tells you exactly who to follow up with, and when.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:mt-8 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get Started Free <HiArrowUpRight />
              </Link>
              <Link to="/pricing" className="btn-outline">
                View Pricing
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-800 shadow-card"
            >
              <img
                src={CRMImg}
                alt="CRM dashboard showing customer pipeline"
                className="h-52 w-full object-cover sm:h-64 md:h-80"
              />
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-ink-700 bg-ink-900/50 py-8 sm:py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 sm:grid-cols-3 sm:gap-8">
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

      {/* ANIMATED PIPELINE VISUAL */}
      <section className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Your Whole Pipeline, at a Glance</h2>
          <p className="mt-3 text-sm text-offwhite/60 sm:mt-4 sm:text-base">
            Drag-and-drop deals through stages — or let AI move them for you as activity happens.
          </p>
        </Reveal>

        <div className="relative mt-10 overflow-x-auto pb-4 sm:mt-14">
          <div className="grid min-w-[640px] grid-cols-4 gap-4 sm:min-w-0">
            {stages.map((stage, i) => (
              <Reveal key={stage.name} delay={i * 0.1}>
                <div className="rounded-xl border border-ink-700 bg-ink-900 p-3">
                  <p className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-offwhite/50">
                    {stage.name}
                    <span className="rounded-full bg-ink-800 px-2 py-0.5 text-[10px] text-offwhite/40">
                      {stage.deals.length}
                    </span>
                  </p>
                  <div className="space-y-2">
                    {stage.deals.map((deal) => (
                      <div
                        key={deal}
                        className="rounded-lg border border-ink-700 bg-ink-800 px-3 py-2.5 text-xs text-offwhite/70"
                      >
                        {deal}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <motion.div
            className="pointer-events-none absolute top-14 hidden items-center gap-2 rounded-lg border border-saffron-500/40 bg-ink-950 px-3 py-2.5 text-xs font-medium text-saffron-400 shadow-glow lg:flex"
            style={{ width: "calc(25% - 12px)" }}
            animate={{ left: ["2%", "27%", "52%", "77%", "77%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.25, 0.5, 0.75, 1] }}
          >
            <HiOutlineBolt /> Zenith Retail — AI moving...
          </motion.div>
        </div>
      </section>

      {/* ROTATING IMAGE + BENEFITS — cycles through Sales Teams, Contact Management, Deal Tracking */}
      <section className="section !pt-0">
        <div className="grid items-center gap-10 sm:gap-12 md:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${topic.title}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="order-2 md:order-1"
            >
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">{topic.title}</h2>
              <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
                {topic.benefits.map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-saffron-500/10 text-lg text-saffron-500 sm:h-11 sm:w-11 sm:text-xl">
                      <b.icon />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold sm:text-base">{b.title}</h3>
                      <p className="mt-1 text-xs text-offwhite/60 sm:text-sm">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${topic.image}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="order-1 md:order-2"
            >
              <img
                src={topic.image}
                alt={topic.alt}
                className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 sm:mt-8">
          {crmTopics.map((t, i) => (
            <button
              key={t.title}
              onClick={() => setTopicIndex(i)}
              aria-label={`Show ${t.title}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === topicIndex ? "w-6 bg-saffron-500" : "w-1.5 bg-ink-600"
              }`}
            />
          ))}
        </div>
      </section>

      {/* CONNECTED CHANNELS */}
      <section className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Every Channel, Automatically Logged</h2>
          <p className="mt-3 text-sm text-offwhite/60 sm:mt-4 sm:text-base">
            No more manual data entry — DevixAI CRM captures it all in the background.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card h-full text-center">
                <c.icon className="mx-auto mb-3 text-xl text-saffron-500 sm:text-2xl" />
                <p className="text-xs font-medium sm:text-sm">{c.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTAStrip />
    </>
  );
}