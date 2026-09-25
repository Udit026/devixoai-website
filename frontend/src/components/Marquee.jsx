import { motion } from "framer-motion";

// Infinite auto-scrolling row — duplicate items so the loop is seamless.
export default function Marquee({ items, speed = 22 }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex w-max gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {row.map((tool, i) => (
          <div
            key={`${tool}-${i}`}
            className="flex w-40 shrink-0 items-center justify-center rounded-xl border border-ink-700 bg-ink-800 py-5 font-medium text-offwhite/70 transition-colors hover:border-saffron-500 hover:text-saffron-400"
          >
            {tool}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
