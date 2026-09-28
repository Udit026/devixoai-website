import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
      initial={{ clipPath: "circle(150% at 50% 50%)" }}
      exit={{ clipPath: "circle(0% at 50% 50%)" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex flex-col items-center gap-5">
        {/* rotating ring loader */}
        <div className="relative h-20 w-20">
          <span className="absolute inset-0 rounded-full border-2 border-ink-700" />
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-saffron-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
            <span className="text-saffron-500">DeviXo</span>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xs font-medium tracking-[0.2em] text-offwhite/50"
        >
          INITIALIZING AI...
        </motion.p>
      </div>
    </motion.div>
  );
}