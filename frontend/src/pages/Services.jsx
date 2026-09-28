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




// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   HiArrowUpRight,
//   HiOutlineCpuChip,
//   HiOutlineCodeBracketSquare,
//   HiOutlineChatBubbleLeftRight,
//   HiOutlinePresentationChartLine,
//   HiOutlineArrowPath,
//   HiOutlineCloud,
// } from "react-icons/hi2";
// import PageHeader from "./PageHeader";
// import Reveal from "../components/Reveal";
// import CTAStrip from "../components/CTAStrip";

// const services = [
//   {
//     icon: HiOutlineCpuChip,
//     title: "Custom AI Software Development",
//     desc: "AI systems designed and trained around your exact data, workflows and business logic — not a generic off-the-shelf model.",
//     img: "https://images.unsplash.com/photo-1545987796-200677ee1011?fm=jpg&q=60&w=800&auto=format&fit=crop",
//   },
//   {
//     icon: HiOutlineCodeBracketSquare,
//     title: "SaaS Product Engineering",
//     desc: "From idea to launch, we design, build and scale full SaaS platforms with clean architecture built to grow with you.",
//     img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=800&auto=format&fit=crop",
//   },
//   {
//     icon: HiOutlineChatBubbleLeftRight,
//     title: "AI Chatbots & Virtual Assistants",
//     desc: "24/7 support and sales bots trained on your content, with smart human handoff for anything they can't resolve alone.",
//     img: "https://images.unsplash.com/photo-1762340277380-04c2c30d0ef8?fm=jpg&q=60&w=800&auto=format&fit=crop",
//   },
//   {
//     icon: HiOutlinePresentationChartLine,
//     title: "Data Analytics & Business Intelligence",
//     desc: "Real-time dashboards and predictive insights that turn scattered data into decisions you can actually act on.",
//     img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=jpg&q=60&w=800&auto=format&fit=crop",
//   },
//   {
//     icon: HiOutlineArrowPath,
//     title: "Workflow & Process Automation",
//     desc: "We identify your team's repetitive work and replace it with intelligent automations that run themselves.",
//     img: "https://images.unsplash.com/photo-1763568258244-9d5aa9c3ce45?fm=jpg&q=60&w=800&auto=format&fit=crop",
//   },
//   {
//     icon: HiOutlineCloud,
//     title: "Cloud Infrastructure & DevOps",
//     desc: "Secure, scalable cloud architecture and CI/CD pipelines so your product ships fast and stays reliable at scale.",
//     img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fm=jpg&q=60&w=800&auto=format&fit=crop",
//   },
// ];

// export default function Services() {
//   return (
//     <>
//       <PageHeader
//         title="Our Services"
//         subtitle="End-to-end AI and SaaS development, tailored to your business goals."
//       />
//       <section className="section grid !pt-0 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {services.map((s, i) => (
//           <Reveal key={s.title} delay={i * 0.08}>
//             <motion.div
//               whileHover={{ y: -6 }}
//               transition={{ duration: 0.25 }}
//               className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-700 bg-ink-800 shadow-card"
//             >
//               <div className="relative h-40 w-full overflow-hidden">
//                 <motion.img
//                   whileHover={{ scale: 1.08 }}
//                   transition={{ duration: 0.4 }}
//                   src={s.img}
//                   alt={s.title}
//                   className="h-full w-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
//                 <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-saffron-gradient text-xl text-ink-950 shadow-glow">
//                   <s.icon />
//                 </div>
//               </div>
//               <div className="flex flex-1 flex-col p-6">
//                 <h3 className="font-semibold">{s.title}</h3>
//                 <p className="mt-2 flex-1 text-sm text-offwhite/60">{s.desc}</p>
//                 <Link
//                   to="/contact"
//                   className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-saffron-400 transition group-hover:gap-2"
//                 >
//                   Learn more <HiArrowUpRight />
//                 </Link>
//               </div>
//             </motion.div>
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
  HiOutlineMegaphone,
  HiOutlineSparkles,
} from "react-icons/hi2";
import PageHeader from "./PageHeader";
import Reveal from "../components/Reveal";
import CTAStrip from "../components/CTAStrip";

const services = [
  {
    icon: HiOutlineCpuChip,
    number: "01",
    title: "AI Automation",
    desc: "Streamline operations, eliminate manual bottlenecks, and unlock predictive insights. We integrate advanced large language models (LLMs), intelligent agents, and custom machine learning workflows into your core business ecosystem.",
    tags: ["LLMs", "Intelligent Agents", "Custom ML Workflows", "Predictive Insights"],
    img: "https://images.unsplash.com/photo-1545987796-200677ee1011?fm=jpg&q=60&w=900&auto=format&fit=crop",
  },
  {
    icon: HiOutlineCodeBracketSquare,
    number: "02",
    title: "Custom Software Development",
    desc: "Scalable, secure, and high-performance applications built from the ground up. From robust cloud backends (C#, .NET, and secure databases) to sleek, responsive front-ends (React, Mobile iOS/Android), we build software that lasts.",
    tags: ["C#", ".NET", "Secure Databases", "React", "iOS", "Android"],
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=900&auto=format&fit=crop",
  },
  {
    icon: HiOutlineMegaphone,
    number: "03",
    title: "Digital Marketing & Brand Strategy",
    desc: "Amplify your digital footprint. We craft data-driven digital marketing campaigns, optimize technical SEO and edge-routing performance, and build brand narratives that capture attention and drive conversions.",
    tags: ["Marketing Campaigns", "Technical SEO", "Edge-Routing Performance", "Brand Narratives"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=jpg&q=60&w=900&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Technology, AI and digital growth — delivered by one multidisciplinary team."
      />

      <section className="relative overflow-hidden">
        {/* soft decorative glows behind the cards */}
        <motion.div
          className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-saffron-500/10 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-saffron-700/10 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="section relative !pt-0">
          {/* SECTION TITLE */}
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-1.5 text-[11px] font-medium text-saffron-400 sm:text-xs">
              <HiOutlineSparkles /> Core Services
            </span>
            <h2 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl">
              Engineering Excellence{" "}
              <span className="bg-saffron-gradient bg-clip-text pb-1 text-transparent">
                Across Sectors
              </span>
            </h2>
          </Reveal>

          {/* SERVICE CARDS */}
          <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 0.12}
                // with 3 cards on a 2-column grid, let the last one span full width
                className={i === services.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-700 bg-white shadow-card transition-colors duration-300 hover:border-saffron-500/50"
                >
                  {/* image */}
                  <div className="relative h-44 w-full overflow-hidden sm:h-48">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-saffron-gradient text-xl text-white shadow-glow">
                      <s.icon />
                    </div>
                    <span className="absolute right-4 top-3 text-3xl font-extrabold leading-none text-white/80 sm:text-4xl">
                      {s.number}
                    </span>
                  </div>

                  {/* content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-lg font-semibold leading-snug sm:text-xl">{s.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-offwhite/70">
                      {s.desc}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
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
                      Discuss this service <HiArrowUpRight />
                    </Link>
                  </div>

                  {/* animated accent line at the bottom on hover */}
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-saffron-gradient transition-all duration-500 group-hover:w-full" />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}