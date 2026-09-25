import { useState } from "react";
import { HiCheck, HiXMark, HiPlus, HiMinus } from "react-icons/hi2";
import Reveal from "../components/Reveal";
import CTAStrip from "../components/CTAStrip";

const plans = [
  {
    name: "Free",
    price: "₹0",
    highlight: false,
    features: [
      { text: "Limited AI requests", on: true },
      { text: "Standard analytics reports", on: true },
      { text: "Basic dashboard", on: true },
      { text: "Priority support", on: false },
      { text: "Custom integrations", on: false },
    ],
  },
  {
    name: "Standard",
    price: "₹999",
    highlight: true,
    features: [
      { text: "Increased AI request limits", on: true },
      { text: "Advanced analytics", on: true },
      { text: "Customizable dashboards", on: true },
      { text: "API access", on: true },
      { text: "Dedicated account manager", on: false },
    ],
  },
  {
    name: "Enterprise",
    price: "₹4,999",
    highlight: false,
    features: [
      { text: "Unlimited AI requests", on: true },
      { text: "Real-time predictive analytics", on: true },
      { text: "Dedicated account manager", on: true },
      { text: "Custom AI model training", on: true },
      { text: "24/7 phone support", on: true },
    ],
  },
];

const faqs = [
  "What AI models power your platform?",
  "Do you offer a free trial?",
  "Can I upgrade or downgrade anytime?",
  "Is there a mobile app available?",
  "Do you offer discounts for annual billing?",
  "How secure is my business data?",
];

function FaqItem({ q }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-ink-700 bg-ink-800">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left font-medium"
      >
        {q}
        {open ? <HiMinus className="text-saffron-500" /> : <HiPlus className="text-saffron-500" />}
      </button>
      {open && (
        <p className="px-5 pb-4 text-sm text-offwhite/60">
          Our team will walk you through this in detail — reach out via the contact form for a
          tailored answer specific to your use case.
        </p>
      )}
    </div>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  return (
    <>
      <section className="section text-center">
        <Reveal>
          <h1 className="text-4xl font-bold md:text-5xl">
            Select the Plan That Fits Your Business
          </h1>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 flex items-center justify-center gap-3">
          <span className={!annual ? "text-offwhite" : "text-offwhite/50"}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`h-7 w-14 rounded-full p-1 transition-colors ${annual ? "bg-saffron-500" : "bg-ink-700"}`}
          >
            <span
              className={`block h-5 w-5 rounded-full bg-white transition-transform ${
                annual ? "translate-x-7" : ""
              }`}
            />
          </button>
          <span className={annual ? "text-offwhite" : "text-offwhite/50"}>
            Annually <span className="text-saffron-500">(Save 25%)</span>
          </span>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => {
            const price = annual ? `₹${Math.round(parseInt(p.price.replace(/[₹,]/g, "")) * 0.75) || 0}` : p.price;
            return (
              <Reveal
                key={p.name}
                delay={i * 0.1}
                className={`rounded-2xl border p-8 text-left ${
                  p.highlight
                    ? "border-saffron-500 bg-ink-800 shadow-glow md:scale-105"
                    : "border-ink-700 bg-ink-800"
                }`}
              >
                <p className={`font-semibold ${p.highlight ? "text-saffron-400" : "text-offwhite/70"}`}>{p.name}</p>
                <p className="mt-3 text-4xl font-bold">
                  {price}
                  <span className="text-base font-normal text-offwhite/50">/mo</span>
                </p>
                <button className={p.highlight ? "btn-primary mt-6 w-full justify-center" : "btn-outline mt-6 w-full justify-center"}>
                  {p.name === "Free" ? "Try It Free" : "Purchase Now"}
                </button>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-3 text-sm">
                      {f.on ? (
                        <HiCheck className="shrink-0 text-saffron-500" />
                      ) : (
                        <HiXMark className="shrink-0 text-ink-600" />
                      )}
                      <span className={f.on ? "text-offwhite/80" : "text-offwhite/30"}>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section">
        <Reveal className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
        </Reveal>
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {faqs.map((q) => (
            <FaqItem key={q} q={q} />
          ))}
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
