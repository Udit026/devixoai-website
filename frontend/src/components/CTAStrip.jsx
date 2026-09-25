import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";

export default function CTAStrip() {
  return (
    <div className="bg-saffron-gradient">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row md:px-10">
        <p className="text-center text-lg font-semibold text-ink-950 md:text-left">
          Any Questions? Our AI experts are available 24/7
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-offwhite transition-transform hover:scale-105"
        >
          Talk to Us <HiArrowUpRight />
        </Link>
      </div>
    </div>
  );
}
