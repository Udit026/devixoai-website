import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";
import PageHeader from "./PageHeader";
import CTAStrip from "../components/CTAStrip";

const faqs = [
  { q: "What is DevixoAI India?", a: "We are an AI software and SaaS development company helping businesses automate and scale." },
  { q: "How do I get started?", a: "Simply reach out via our contact form and our team will schedule a discovery call." },
  { q: "Do you offer custom AI models?", a: "Yes, we build and fine-tune custom AI models tailored to your business data." },
  { q: "What industries do you serve?", a: "We work across fintech, retail, healthcare, logistics and more." },
];

export default function Faq() {
  const [open, setOpen] = useState(null);
  return (
    <>
      <PageHeader title="FAQ's & Answers" subtitle="Everything you need to know about working with us." />
      <section className="section !pt-0 mx-auto max-w-3xl space-y-4">
        {faqs.map((f, i) => (
          <div key={f.q} className="rounded-xl border border-ink-700 bg-ink-800">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left font-medium">
              {f.q}
              {open === i ? <HiMinus className="text-saffron-500" /> : <HiPlus className="text-saffron-500" />}
            </button>
            {open === i && <p className="px-5 pb-4 text-sm text-offwhite/60">{f.a}</p>}
          </div>
        ))}
      </section>
      <CTAStrip />
    </>
  );
}
