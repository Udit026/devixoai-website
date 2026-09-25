import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiArrowUpRight,
  HiCheckCircle,
  HiOutlineBolt,
  HiOutlineCog6Tooth,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineArrowPath,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Reveal from "../../components/Reveal";
import CTAStrip from "../../components/CTAStrip";
import Counter from "../../components/Counter";

const steps = [
  {
    icon: HiOutlineDocumentMagnifyingGlass,
    title: "Map Your Workflow",
    desc: "We audit your repetitive processes and identify the highest-impact automation opportunities.",
  },
  {
    icon: HiOutlineCog6Tooth,
    title: "Build the Automation",
    desc: "Our AI agents are configured to handle your specific tasks — no rigid templates, fully custom.",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Deploy & Optimize",
    desc: "Go live in days, not months. We continuously fine-tune based on real usage data.",
  },
];

const benefits = [
  { icon: HiOutlineClock, title: "Save 20+ Hours a Week", desc: "Eliminate manual, repetitive work across departments." },
  { icon: HiOutlineShieldCheck, title: "Fewer Human Errors", desc: "Consistent, rule-based execution every single time." },
  { icon: HiOutlineChartBar, title: "Real-Time Visibility", desc: "Track every automated task with live dashboards." },
];

const stats = [
  { to: 20, suffix: "+", label: "Hours saved weekly" },
  { to: 90, suffix: "%", label: "Fewer manual errors" },
  { to: 5, suffix: " days", label: "Avg. time to deploy" },
];

export default function AIAutomation() {
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
              <HiOutlineBolt /> AI Automation Suite
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Put Your Busywork on{" "}
              <span className="bg-saffron-gradient bg-clip-text text-transparent">Autopilot</span>
            </h1>
            <p className="mt-6 text-offwhite/60 md:text-lg">
              DevixoAI's Automation Suite connects your tools and turns repetitive, multi-step
              processes into intelligent workflows that run themselves — so your team can focus
              on work that actually needs a human.
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
              {/* <div className="flex items-center gap-2 border-b border-ink-700 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              </div> */}
              <img
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=900&q=60"
                alt="Automated workflow dashboard"
                className="h-56 w-full object-cover sm:h-72 md:h-80"
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-5 -left-3 hidden rounded-xl border border-ink-700 bg-ink-900/90 px-4 py-3 shadow-card backdrop-blur sm:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="flex items-center gap-2 text-sm font-semibold text-saffron-400">
                <HiOutlineBolt /> Live now
              </p>
              <p className="text-xs text-offwhite/50">142 workflows running</p>
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
          <h2 className="text-3xl font-bold md:text-4xl">How the Automation Suite Works</h2>
          <p className="mt-4 text-offwhite/60">
            From audit to deployment, we handle the heavy lifting — you just approve the plan.
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
        <Reveal>
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=60"
            alt="Team reviewing automated reports"
            className="aspect-[4/3] w-full rounded-2xl border border-ink-700 object-cover shadow-card"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl font-bold md:text-4xl">Why Teams Choose Our Automation</h2>
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
          <h2 className="text-3xl font-bold md:text-4xl">Automate Across Every Department</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {["Sales & CRM Updates", "Invoice Processing", "Customer Onboarding", "Report Generation"].map((t, i) => (
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