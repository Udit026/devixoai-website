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
        className="absolute -left-1/4 -top-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-saffron-400/50 via-saffron-500/25 to-transparent blur-3xl sm:h-[500px] sm:w-[500px] lg:h-[750px] lg:w-[750px] xl:h-[900px] xl:w-[900px]"
        animate={{ x: [0, 100, -50, 0], y: [0, 60, -40, 0], scale: [1, 1.25, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Blob 2 — top-right, warm amber */}
      <motion.div
        className="absolute -right-1/4 top-0 h-[380px] w-[380px] rounded-full bg-gradient-to-bl from-amber-300/40 via-saffron-600/25 to-transparent blur-3xl sm:h-[480px] sm:w-[480px] lg:h-[700px] lg:w-[700px] xl:h-[850px] xl:w-[850px]"
        animate={{ x: [0, -80, 60, 0], y: [0, 80, 20, 0], scale: [1, 0.85, 1.2, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Blob 3 — bottom-center, soft glow */}
      <motion.div
        className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-orange-300/35 via-saffron-400/20 to-transparent blur-3xl sm:h-[450px] sm:w-[450px] lg:h-[650px] lg:w-[650px] xl:h-[800px] xl:w-[800px]"
        animate={{ x: [0, 50, -60, 0], y: [0, -50, 30, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Blob 4 — center-fill, only needed on very wide screens so the middle
          doesn't look empty between the corner blobs */}
      <motion.div
        className="absolute left-1/2 top-1/3 hidden h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-saffron-300/15 via-amber-300/20 to-saffron-400/15 blur-3xl xl:block"
        animate={{ scale: [1, 1.1, 0.95, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
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