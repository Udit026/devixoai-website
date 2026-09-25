import { useParams } from "react-router-dom";
import PageHeader from "./PageHeader";
import Reveal from "../components/Reveal";
import CTAStrip from "../components/CTAStrip";

export default function BlogDetails() {
  const { id } = useParams();
  return (
    <>
      <PageHeader title="How AI is Transforming Enterprise Software" subtitle={`Post #${id} · Team DevixoAI · Sep 10, 2026`} />
      <section className="section !pt-0 mx-auto max-w-3xl">
        <Reveal className="mb-8 h-72 rounded-2xl border border-ink-700 bg-ink-800" />
        <Reveal delay={0.1} className="space-y-4 text-offwhite/70">
          <p>
            Generative AI and intelligent automation are no longer optional — they're becoming
            core infrastructure for competitive businesses. In this post we break down where
            most companies should start.
          </p>
          <p>
            From workflow automation to predictive analytics, the businesses winning today are
            the ones treating AI as a product layer, not a bolt-on feature.
          </p>
        </Reveal>
      </section>
      <CTAStrip />
    </>
  );
}
