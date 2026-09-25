// import PageHeader from "./PageHeader";
// import Reveal from "../components/Reveal";
// import CTAStrip from "../components/CTAStrip";

// const services = [
//   "Custom AI Software Development",
//   "SaaS Product Engineering",
//   "AI Chatbots & Virtual Assistants",
//   "Data Analytics & Business Intelligence",
//   "Workflow & Process Automation",
//   "Cloud Infrastructure & DevOps",
// ];

// export default function Services() {
//   return (
//     <>
//       <PageHeader title="Our Services" subtitle="End-to-end AI and SaaS development, tailored to your business goals." />
//       <section className="section !pt-0 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {services.map((s, i) => (
//           <Reveal key={s} delay={i * 0.08} className="card">
//             <div className="mb-4 h-10 w-10 rounded-lg bg-saffron-gradient" />
//             <h3 className="font-semibold">{s}</h3>
//           </Reveal>
//         ))}
//       </section>
//       <CTAStrip />
//     </>
//   );
// }




import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiArrowUpRight,
  HiOutlineCpuChip,
  HiOutlineCodeBracketSquare,
  HiOutlineChatBubbleLeftRight,
  HiOutlinePresentationChartLine,
  HiOutlineArrowPath,
  HiOutlineCloud,
} from "react-icons/hi2";
import PageHeader from "./PageHeader";
import Reveal from "../components/Reveal";
import CTAStrip from "../components/CTAStrip";

const services = [
  {
    icon: HiOutlineCpuChip,
    title: "Custom AI Software Development",
    desc: "AI systems designed and trained around your exact data, workflows and business logic — not a generic off-the-shelf model.",
    img: "https://images.unsplash.com/photo-1545987796-200677ee1011?fm=jpg&q=60&w=800&auto=format&fit=crop",
  },
  {
    icon: HiOutlineCodeBracketSquare,
    title: "SaaS Product Engineering",
    desc: "From idea to launch, we design, build and scale full SaaS platforms with clean architecture built to grow with you.",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=800&auto=format&fit=crop",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "AI Chatbots & Virtual Assistants",
    desc: "24/7 support and sales bots trained on your content, with smart human handoff for anything they can't resolve alone.",
    img: "https://images.unsplash.com/photo-1762340277380-04c2c30d0ef8?fm=jpg&q=60&w=800&auto=format&fit=crop",
  },
  {
    icon: HiOutlinePresentationChartLine,
    title: "Data Analytics & Business Intelligence",
    desc: "Real-time dashboards and predictive insights that turn scattered data into decisions you can actually act on.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=jpg&q=60&w=800&auto=format&fit=crop",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Workflow & Process Automation",
    desc: "We identify your team's repetitive work and replace it with intelligent automations that run themselves.",
    img: "https://images.unsplash.com/photo-1763568258244-9d5aa9c3ce45?fm=jpg&q=60&w=800&auto=format&fit=crop",
  },
  {
    icon: HiOutlineCloud,
    title: "Cloud Infrastructure & DevOps",
    desc: "Secure, scalable cloud architecture and CI/CD pipelines so your product ships fast and stays reliable at scale.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fm=jpg&q=60&w=800&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="End-to-end AI and SaaS development, tailored to your business goals."
      />
      <section className="section grid !pt-0 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-700 bg-ink-800 shadow-card"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-saffron-gradient text-xl text-ink-950 shadow-glow">
                  <s.icon />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-offwhite/60">{s.desc}</p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-saffron-400 transition group-hover:gap-2"
                >
                  Learn more <HiArrowUpRight />
                </Link>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </section>
      <CTAStrip />
    </>
  );
}