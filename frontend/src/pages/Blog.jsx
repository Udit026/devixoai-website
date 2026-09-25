// import { Link } from "react-router-dom";
// import Reveal from "../components/Reveal";
// import CTAStrip from "../components/CTAStrip";

// const posts = [
//   { id: 1, title: "How AI is Transforming Enterprise Software", author: "Team DevixoAI", date: "Sep 10, 2026", excerpt: "Explore how generative AI is reshaping the way businesses build and scale software products." },
//   { id: 2, title: "5 Signs Your Business Needs Workflow Automation", author: "Team DevixoAI", date: "Aug 22, 2026", excerpt: "Manual processes eating your time? Here's how to spot the moment to automate." },
//   { id: 3, title: "Building Secure SaaS Products in 2026", author: "Team DevixoAI", date: "Aug 02, 2026", excerpt: "A practical guide to security best practices for modern SaaS architecture." },
// ];

// const categories = ["AI & Automation (4)", "SaaS (3)", "Product (2)", "Engineering (5)"];

// export default function Blog() {
//   return (
//     <>
//       <section className="section text-center">
//         <Reveal>
//           <h1 className="text-4xl font-bold md:text-5xl">Latest Insights & Updates</h1>
//           <p className="mx-auto mt-4 max-w-xl text-offwhite/60">
//             Stay informed with our latest articles covering AI trends, product tips and insights.
//           </p>
//         </Reveal>
//       </section>

//       <section className="section grid gap-10 !pt-0 lg:grid-cols-3">
//         <div className="space-y-8 lg:col-span-2">
//           {posts.map((p, i) => (
//             <Reveal key={p.id} delay={i * 0.1} className="card flex flex-col gap-4 sm:flex-row">
//               <div className="h-40 w-full shrink-0 rounded-xl bg-saffron-gradient/20 border border-saffron-500/20 sm:w-40" />
//               <div>
//                 <p className="text-xs text-offwhite/50">{p.author} · {p.date}</p>
//                 <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
//                 <p className="mt-2 text-sm text-offwhite/60">{p.excerpt}</p>
//                 <Link to={`/blog/${p.id}`} className="mt-3 inline-block text-sm font-semibold text-saffron-400 hover:underline">
//                   Read more →
//                 </Link>
//               </div>
//             </Reveal>
//           ))}
//         </div>

//         <Reveal delay={0.2} className="space-y-6">
//           <input placeholder="Search..." className="input-field" />
//           <div className="card">
//             <h4 className="mb-4 font-semibold">Categories</h4>
//             <ul className="space-y-2 text-sm text-offwhite/60">
//               {categories.map((c) => (
//                 <li key={c} className="hover:text-saffron-400 cursor-pointer">{c}</li>
//               ))}
//             </ul>
//           </div>
//         </Reveal>
//       </section>

//       <CTAStrip />
//     </>
//   );
// }




import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import CTAStrip from "../components/CTAStrip";

const posts = [
  {
    id: 1,
    title: "How AI is Transforming Enterprise Software",
    author: "Team DevixoAI",
    date: "Sep 10, 2026",
    excerpt: "Explore how generative AI is reshaping the way businesses build and scale software products.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "5 Signs Your Business Needs Workflow Automation",
    author: "Team DevixoAI",
    date: "Aug 22, 2026",
    excerpt: "Manual processes eating your time? Here's how to spot the moment to automate.",
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Building Secure SaaS Products in 2026",
    author: "Team DevixoAI",
    date: "Aug 02, 2026",
    excerpt: "A practical guide to security best practices for modern SaaS architecture.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=60",
  },
];

const categories = ["AI & Automation (4)", "SaaS (3)", "Product (2)", "Engineering (5)"];

export default function Blog() {
  return (
    <>
      <section className="section text-center">
        <Reveal>
          <h1 className="text-4xl font-bold md:text-5xl">Latest Insights & Updates</h1>
          <p className="mx-auto mt-4 max-w-xl text-offwhite/60">
            Stay informed with our latest articles covering AI trends, product tips and insights.
          </p>
        </Reveal>
      </section>

      <section className="section grid gap-10 !pt-0 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          {posts.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col gap-4 overflow-hidden rounded-2xl border border-ink-700 bg-ink-800 p-4 sm:flex-row"
              >
                <Link
                  to={`/blog/${p.id}`}
                  className="block aspect-video w-full shrink-0 overflow-hidden rounded-xl sm:aspect-square sm:w-44"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </Link>
                <div className="flex flex-col justify-center px-1 pb-1 sm:px-0">
                  <p className="text-xs text-offwhite/50">{p.author} · {p.date}</p>
                  <h3 className="mt-2 text-lg font-semibold">
                    <Link to={`/blog/${p.id}`} className="hover:text-saffron-400">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-offwhite/60">{p.excerpt}</p>
                  <Link
                    to={`/blog/${p.id}`}
                    className="mt-3 inline-block text-sm font-semibold text-saffron-400 hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="space-y-6">
          <input placeholder="Search..." className="input-field" />
          <div className="card">
            <h4 className="mb-4 font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm text-offwhite/60">
              {categories.map((c) => (
                <li key={c} className="cursor-pointer hover:text-saffron-400">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <CTAStrip />
    </>
  );
}