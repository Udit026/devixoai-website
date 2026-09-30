import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
    >
      {/* Blob 1 — top-left, saffron core */}
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-saffron-400/50 via-saffron-500/25 to-transparent blur-3xl"
        animate={{ x: [0, 100, -50, 0], y: [0, 60, -40, 0], scale: [1, 1.25, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Blob 2 — top-right, warm amber */}
      <motion.div
        className="absolute -right-1/4 top-0 h-[550px] w-[550px] rounded-full bg-gradient-to-bl from-amber-300/40 via-saffron-600/25 to-transparent blur-3xl"
        animate={{ x: [0, -80, 60, 0], y: [0, 80, 20, 0], scale: [1, 0.85, 1.2, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Blob 3 — bottom-center, soft glow */}
      <motion.div
        className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-orange-300/35 via-saffron-400/20 to-transparent blur-3xl"
        animate={{ x: [0, 50, -60, 0], y: [0, -50, 30, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* faint grid texture for depth, fades toward the edges */}
      <div
        className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </motion.div>
  );
}