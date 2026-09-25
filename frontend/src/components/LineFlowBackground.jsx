import { motion } from "framer-motion";

// A subtle animated "circuit / data-flow" background:
// a faint static grid + a few glowing lines that slide across on a loop.
export default function LineFlowBackground() {
  const lines = [
    { top: "18%", duration: 7, delay: 0 },
    { top: "42%", duration: 9, delay: 1.2 },
    { top: "66%", duration: 8, delay: 0.6 },
    { top: "85%", duration: 10, delay: 2 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,140,26,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,140,26,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {lines.map((l, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-1/3"
          style={{
            top: l.top,
            background: "linear-gradient(90deg, transparent, #FF8C1A, transparent)",
            boxShadow: "0 0 8px rgba(255,140,26,0.7)",
          }}
          initial={{ x: "-40vw", opacity: 0 }}
          animate={{ x: "140vw", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: l.duration,
            delay: l.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}