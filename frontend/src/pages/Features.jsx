// import Reveal from "../components/Reveal";
// import CTAStrip from "../components/CTAStrip";
// import { HiCheckCircle } from "react-icons/hi2";

// const blackGrid = [
//   { title: "AI Chat Assistant", desc: "Instant, intelligent conversations with zero lag." },
//   { title: "Workflow Automation", desc: "Automate multi-step business processes end to end." },
//   { title: "Smart Document AI", desc: "Extract, summarize and act on documents automatically." },
//   { title: "Predictive Analytics", desc: "Forecast trends using your historical data." },
//   { title: "Custom API Access", desc: "Build on top of DevixoAI with a developer-first API." },
//   { title: "Voice & Video AI", desc: "AI-powered calls, transcription and meeting summaries." },
// ];

// export default function Features() {
//   return (
//     <>
//       <section className="section text-center">
//         <Reveal>
//           <h1 className="text-4xl font-bold md:text-5xl">
//             Everything You Expect and More Features Beyond
//           </h1>
//           <p className="mx-auto mt-4 max-w-xl text-offwhite/60">
//             DevixoAI India delivers all the key features, offering a versatile AI platform to
//             streamline your business operations.
//           </p>
//         </Reveal>
//       </section>

//       <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
//         <Reveal className="rounded-2xl border border-ink-700 bg-ink-800 p-6">
//           <div className="space-y-4">
//             <div className="h-3 w-2/3 rounded-full bg-ink-700" />
//             <div className="h-24 rounded-xl bg-saffron-gradient/20 border border-saffron-500/30" />
//             <div className="grid grid-cols-3 gap-3">
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className="h-16 rounded-lg bg-ink-900 border border-ink-700" />
//               ))}
//             </div>
//           </div>
//         </Reveal>
//         <Reveal delay={0.1}>
//           <h2 className="text-3xl font-bold">Gain Precise Insights for Your Business</h2>
//           <p className="mt-4 text-offwhite/60">
//             Our fast AI response system helps you tackle tasks efficiently, enabling you to
//             focus on what truly matters.
//           </p>
//           <ul className="mt-6 space-y-3">
//             {["Advanced Analytics Tools", "Real-time Data Sync", "Accurate AI Predictions"].map((t) => (
//               <li key={t} className="flex items-center gap-3 text-offwhite/80">
//                 <HiCheckCircle className="text-saffron-500" /> {t}
//               </li>
//             ))}
//           </ul>
//         </Reveal>
//       </section>

//       <section className="section">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">Discover Our Incredible AI Features</h2>
//           <p className="mt-4 text-offwhite/60">
//             With intuitive dashboards and a user-friendly interface, explore and analyze your
//             data, no matter your technical expertise.
//           </p>
//         </Reveal>

//         <div className="mt-14 grid gap-6 rounded-2xl border border-ink-700 bg-ink-950 p-8 md:grid-cols-3">
//           {blackGrid.map((f, i) => (
//             <Reveal key={f.title} delay={i * 0.08} className="rounded-xl border border-ink-700 bg-ink-900 p-6">
//               <div className="mb-4 h-10 w-10 rounded-lg bg-saffron-gradient" />
//               <h3 className="mb-2 font-semibold">{f.title}</h3>
//               <p className="text-sm text-offwhite/60">{f.desc}</p>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       <CTAStrip />
//     </>
//   );
// }




import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import CTAStrip from "../components/CTAStrip";
import Counter from "../components/Counter";
import {
  HiCheckCircle,
  HiArrowUpRight,
  HiOutlineChatBubbleLeftRight,
  HiOutlineArrowPathRoundedSquare,
  HiOutlineDocumentText,
  HiOutlineChartBar,
  HiOutlineCodeBracket,
  HiOutlineVideoCamera,
  HiOutlineBolt,
} from "react-icons/hi2";

const blackGrid = [
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "AI Chat Assistant",
    desc: "Instant, intelligent conversations with zero lag.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=700&q=60",
  },
  {
    icon: HiOutlineArrowPathRoundedSquare,
    title: "Workflow Automation",
    desc: "Automate multi-step business processes end to end.",
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=700&q=60",
  },
  {
    icon: HiOutlineDocumentText,
    title: "Smart Document AI",
    desc: "Extract, summarize and act on documents automatically.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=60",
  },
  {
    icon: HiOutlineChartBar,
    title: "Predictive Analytics",
    desc: "Forecast trends using your historical data.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=60",
  },
  {
    icon: HiOutlineCodeBracket,
    title: "Custom API Access",
    desc: "Build on top of DevixoAI with a developer-first API.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=60",
  },
  {
    icon: HiOutlineVideoCamera,
    title: "Voice & Video AI",
    desc: "AI-powered calls, transcription and meeting summaries.",
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=700&q=60",
  },
];
const engineStats = [
  { to: 12, suffix: "ms", label: "Avg. response time" },
  { to: 99, suffix: "%", label: "Model accuracy" },
  { to: 5, suffix: "B+", label: "Data points processed" },
];

export default function Features() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-saffron-glow">
        <motion.div
          className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-saffron-500/15 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -right-16 top-24 h-72 w-72 rounded-full bg-saffron-700/15 blur-3xl"
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="section relative text-center">
          <Reveal>
            <h1 className="text-4xl font-bold md:text-5xl">
              Everything You Expect and More Features Beyond
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-offwhite/60">
              DevixoAI India delivers all the key features, offering a versatile AI platform to
              streamline your business operations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* IMAGE + TEXT: real dashboard mock (replaces old skeleton blocks) */}
      <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
        <Reveal className="relative">
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-800 shadow-card"
          >
            <div className="flex items-center gap-2 border-b border-ink-700 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            </div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=60"
              alt="DevixoAI analytics dashboard"
              className="h-56 w-full object-cover sm:h-64 md:h-72"
            />
          </motion.div>

          <motion.div
            className="absolute -bottom-5 -right-3 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-3 shadow-card backdrop-blur sm:block"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
              <HiOutlineBolt /> Real-time
            </p>
            <p className="text-xs text-offwhite/50">Data refresh</p>
          </motion.div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-3xl font-bold">Gain Precise Insights for Your Business</h2>
          <p className="mt-4 text-offwhite/60">
            Our fast AI response system helps you tackle tasks efficiently, enabling you to
            focus on what truly matters.
          </p>
          <ul className="mt-6 space-y-3">
            {["Advanced Analytics Tools", "Real-time Data Sync", "Accurate AI Predictions"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-offwhite/80">
                <HiCheckCircle className="shrink-0 text-saffron-500" /> {t}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-primary mt-8 inline-flex">
            Get Started Now <HiArrowUpRight />
          </Link>
        </Reveal>
      </section>

      {/* NEW: AI ENGINE image+text, reversed on desktop, with animated counters */}
      <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
        <Reveal className="order-2 md:order-1">
          <h2 className="text-3xl font-bold">Powered by a Robust AI Engine</h2>
          <p className="mt-4 text-offwhite/60">
            Every feature on this page runs on the same core engine — built for speed, accuracy
            and scale, so your workflows never slow down as you grow.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {engineStats.map((s) => (
              <div key={s.label} className="rounded-xl border border-ink-700 bg-ink-800 p-4 text-center">
                <p className="text-xl font-bold text-saffron-400 sm:text-2xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-[11px] leading-tight text-offwhite/50 sm:text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=900&q=60"
            alt="AI engine processing data"
            className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
          />
        </Reveal>
      </section>

      {/* FEATURE GRID — now with real icons + hover-lift */}
      <section className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Discover Our Incredible AI Features</h2>
          <p className="mt-4 text-offwhite/60">
            With intuitive dashboards and a user-friendly interface, explore and analyze your
            data, no matter your technical expertise.
          </p>
        </Reveal>

        {/* <div className="mt-14 grid gap-6 rounded-2xl border border-ink-700 bg-ink-950 p-5 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
          {blackGrid.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, borderColor: "rgba(255,140,26,0.5)" }}
                transition={{ duration: 0.25 }}
                className="h-full rounded-xl border border-ink-700 bg-ink-900 p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-saffron-gradient text-xl text-ink-950">
                  <f.icon />
                </div>
                <h3 className="mb-2 font-semibold">{f.title}</h3>
                <p className="text-sm text-offwhite/60">{f.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div> */}
        <div className="mt-14 grid gap-6 rounded-2xl border border-ink-700 bg-ink-950 p-5 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
          {blackGrid.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, borderColor: "rgba(255,140,26,0.5)" }}
                transition={{ duration: 0.25 }}
                className="group h-full overflow-hidden rounded-xl border border-ink-700 bg-ink-900"
              >
                {/* image with gradient overlay + overlapping icon badge */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-lg bg-saffron-gradient text-xl text-ink-950 shadow-glow">
                    <f.icon />
                  </div>
                </div>

                <div className="p-6 pt-4">
                  <h3 className="mb-2 font-semibold">{f.title}</h3>
                  <p className="text-sm text-offwhite/60">{f.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>
  

      <CTAStrip />
    </>
  );
}