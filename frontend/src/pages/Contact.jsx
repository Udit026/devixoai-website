// import { useState } from "react";
// import { HiOutlinePhone, HiOutlineEnvelope, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
// import Reveal from "../components/Reveal";
// import CTAStrip from "../components/CTAStrip";

// const infoCards = [
//   {
//     icon: HiOutlinePhone,
//     title: "Call Us",
//     desc: "Call us at (+91) 98765-43210, available Monday to Saturday, 11 AM to 6 PM.",
//   },
//   {
//     icon: HiOutlineEnvelope,
//     title: "Email Us",
//     desc: "Send us an email at contact@devixaiindia.com and we'll get back within 24 hours.",
//   },
//   {
//     icon: HiOutlineChatBubbleLeftRight,
//     title: "Chat with Us",
//     desc: "Our AI + human support team is here Monday to Saturday, 10 AM to 7 PM IST.",
//   },
// ];

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", company: "", mobile: "", message: "" });
//   const [status, setStatus] = useState({ loading: false, success: null, error: null });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // NOTE: no backend connected right now — form is UI-only.
//     // Hook this up to an API later (see the TODO below).
//     setStatus({ loading: false, success: "Message sent! We'll get back to you soon.", error: null });
//     setForm({ name: "", email: "", company: "", mobile: "", message: "" });
//   };

//   return (
//     <>
//       <section className="section text-center">
//         <Reveal>
//           <h1 className="text-4xl font-bold md:text-5xl">Get in Touch with Us</h1>
//           <p className="mx-auto mt-4 max-w-xl text-offwhite/60">
//             Have questions or need support? Reach out to us, and we'll be happy to assist you!
//           </p>
//         </Reveal>

//         <div className="mt-14 grid gap-6 md:grid-cols-3">
//           {infoCards.map((c, i) => (
//             <Reveal key={c.title} delay={i * 0.1} className="card text-left">
//               <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-500/10 text-2xl text-saffron-500">
//                 <c.icon />
//               </div>
//               <h3 className="mb-2 text-lg font-semibold">{c.title}</h3>
//               <p className="text-sm text-offwhite/60">{c.desc}</p>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       <section className="section grid gap-12 !pt-0 md:grid-cols-2">
//         <Reveal>
//           <span className="text-xs font-semibold uppercase tracking-widest text-saffron-500">
//             Any Query
//           </span>
//           <h2 className="mt-3 text-3xl font-bold md:text-4xl">
//             Feel free to fill out this form & contact us.
//           </h2>
//         </Reveal>

//         <Reveal delay={0.1}>
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div className="grid gap-5 sm:grid-cols-2">
//               <input required name="name" value={form.name} onChange={handleChange} placeholder="Full Name*" className="input-field" />
//               <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email*" className="input-field" />
//             </div>
//             <div className="grid gap-5 sm:grid-cols-2">
//               <input required name="company" value={form.company} onChange={handleChange} placeholder="Company Name*" className="input-field" />
//               <input required name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile*" className="input-field" />
//             </div>
//             <textarea
//               required
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               rows={5}
//               placeholder="Write Query Details*"
//               className="input-field resize-none"
//             />
//             <button type="submit" disabled={status.loading} className="btn-primary w-full sm:w-auto">
//               {status.loading ? "Sending..." : "Send Message"}
//             </button>
//             {status.success && <p className="text-sm text-green-400">{status.success}</p>}
//             {status.error && <p className="text-sm text-red-400">{status.error}</p>}
//           </form>
//         </Reveal>
//       </section>

//       <CTAStrip />
//     </>
//   );
// }



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlinePhone, HiOutlineEnvelope, HiOutlineChatBubbleLeftRight, HiCheckCircle, HiXCircle } from "react-icons/hi2";
import Reveal from "../components/Reveal";
import CTAStrip from "../components/CTAStrip";
import LineFlowBackground from "../components/LineFlowBackground";
const infoCards = [
  {
    icon: HiOutlinePhone,
    title: "Call Us",
    desc: "Call us at (+91) 98765-43210, available Monday to Saturday, 11 AM to 6 PM.",
  },
  {
    icon: HiOutlineEnvelope,
    title: "Email Us",
    desc: "Send us an email at contact@devixaiindia.com and we'll get back within 24 hours.",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "Chat with Us",
    desc: "Our AI + human support team is here Monday to Saturday, 10 AM to 7 PM IST.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", mobile: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: false, success: "Message sent! We'll get back to you soon.", error: null });
    setForm({ name: "", email: "", company: "", mobile: "", message: "" });
  };

  return (
    <>
      {/* HERO + INFO CARDS — with animated background */}
           <section className="relative overflow-hidden bg-saffron-glow">
        <LineFlowBackground />

        <div className="section relative text-center">
          <Reveal>
            <h1 className="text-4xl font-bold md:text-5xl">Get in Touch with Us</h1>
            <p className="mx-auto mt-4 max-w-xl text-offwhite/60">
              Have questions or need support? Reach out to us, and we'll be happy to assist you!
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {infoCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, borderColor: "rgba(255,140,26,0.5)" }}
                  transition={{ duration: 0.25 }}
                  className="card h-full text-left"
                >
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    transition={{ duration: 0.25 }}
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-500/10 text-2xl text-saffron-500"
                  >
                    <c.icon />
                  </motion.div>
                  <h3 className="mb-2 text-lg font-semibold">{c.title}</h3>
                  <p className="text-sm text-offwhite/60">{c.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section grid gap-12 !pt-0 md:grid-cols-2">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-saffron-500">
            Any Query
          </span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Feel free to fill out this form & contact us.
          </h2>
          <p className="mt-4 text-offwhite/60">
            Whether it's a question about pricing, a custom AI project, or just feedback — our
            team typically replies within a few hours.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.form onSubmit={handleSubmit} initial="rest" className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: "#FF8C1A" }}
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name*"
                className="input-field"
              />
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: "#FF8C1A" }}
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email*"
                className="input-field"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: "#FF8C1A" }}
                required
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company Name*"
                className="input-field"
              />
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: "#FF8C1A" }}
                required
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile*"
                className="input-field"
              />
            </div>
            <motion.textarea
              whileFocus={{ scale: 1.01, borderColor: "#FF8C1A" }}
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write Query Details*"
              className="input-field resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={status.loading}
              className="btn-primary w-full sm:w-auto"
            >
              {status.loading ? "Sending..." : "Send Message"}
            </motion.button>

            <AnimatePresence mode="wait">
              {status.success && (
                <motion.p
                  key="success"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 text-sm text-green-400"
                >
                  <HiCheckCircle /> {status.success}
                </motion.p>
              )}
              {status.error && (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 text-sm text-red-400"
                >
                  <HiXCircle /> {status.error}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </Reveal>
      </section>

      <CTAStrip />
    </>
  );
}