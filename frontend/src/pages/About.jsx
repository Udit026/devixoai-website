// import PageHeader from "./PageHeader";
// import Reveal from "../components/Reveal";
// import CTAStrip from "../components/CTAStrip";

// export default function About() {
//   return (
//     <>
//       <PageHeader title="About DevixoAI India" subtitle="We're on a mission to make AI-powered software accessible to every business." />
//       <section className="section grid gap-10 !pt-0 md:grid-cols-2">
//         <Reveal className="rounded-2xl border border-ink-700 bg-ink-800 h-72" />
//         <Reveal delay={0.1}>
//           <h2 className="text-2xl font-bold">Who We Are</h2>
//           <p className="mt-4 text-offwhite/60">
//             DevixoAI India is a team of AI engineers, designers and product builders crafting
//             custom AI software and SaaS platforms for ambitious businesses across India and
//             beyond.
//           </p>
//         </Reveal>
//       </section>
//       <CTAStrip />
//     </>
//   );
// }




import { motion } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlineHeart,
  HiOutlineRocketLaunch,
  HiOutlineGlobeAsiaAustralia,
} from "react-icons/hi2";
import PageHeader from "./PageHeader";
import Reveal from "../components/Reveal";
import CTAStrip from "../components/CTAStrip";
import Counter from "../components/Counter";

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

export default function About() {
  return (
    <>
      <PageHeader
        title="About DevixoAI India"
        subtitle="We're on a mission to make AI-powered software accessible to every business — not just the ones with enterprise budgets."
      />

      {/* WHO WE ARE */}
      <section className="section grid items-center gap-12 !pt-0 md:grid-cols-2">
        <Reveal className="relative overflow-hidden rounded-2xl border border-ink-700 shadow-card">
          <motion.img
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1758873269317-51888e824b28?fm=jpg&q=60&w=1200&auto=format&fit=crop"
            alt="DevixoAI team collaborating in the office"
            className="h-72 w-full object-cover md:h-full"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-2xl font-bold md:text-3xl">Who We Are</h2>
          <p className="mt-4 text-offwhite/60">
            DevixoAI India is a team of AI engineers, designers and product builders crafting
            custom AI software and SaaS platforms for ambitious businesses across India and
            beyond.
          </p>
          <p className="mt-4 text-offwhite/60">
            We started with a simple frustration: powerful AI tools existed, but most small and
            mid-sized businesses couldn't access them without hiring an entire engineering team.
            So we built DevixoAI to close that gap — combining deep technical expertise with a
            product mindset, so every business gets AI that actually fits how they work.
          </p>
          <p className="mt-4 text-offwhite/60">
            Today, our work spans automation, custom AI models, chatbots, analytics platforms and
            full SaaS products — all built in-house, end to end.
          </p>
        </Reveal>
      </section>

      {/* STATS */}
      <section className="border-y border-ink-700 bg-ink-900/50 py-10">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 px-6 sm:grid-cols-3">
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

      {/* VALUES */}
      <section className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">What We Stand For</h2>
          <p className="mt-4 text-offwhite/60">
            The principles that shape every product we build and every client relationship we
            keep.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
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

      <CTAStrip />
    </>
  );
}