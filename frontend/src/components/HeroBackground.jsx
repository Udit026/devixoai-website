import { motion } from "framer-motion";
// import { HiOutlineCpuChip, HiOutlineCloud, HiOutlineCodeBracket, HiOutlineCircleStack, HiOutlineBolt, HiOutlineSparkles } from "react-icons/hi2";
import { HiOutlineCpuChip, HiOutlineCloud, HiOutlineCodeBracket, HiOutlineCircleStack } from "react-icons/hi2";
const icons = [
//   { Icon: HiOutlineCpuChip, top: "12%", left: "8%", size: 28, duration: 6, delay: 0 },
//   { Icon: HiOutlineCloud, top: "20%", left: "85%", size: 32, duration: 7, delay: 0.5 },
//   { Icon: HiOutlineCodeBracket, top: "55%", left: "5%", size: 26, duration: 6.5, delay: 1 },
//   { Icon: HiOutlineCircleStack, top: "65%", left: "90%", size: 30, duration: 8, delay: 0.3 },
//   { Icon: HiOutlineBolt, top: "8%", left: "45%", size: 22, duration: 5.5, delay: 0.8 },
//   { Icon: HiOutlineSparkles, top: "78%", left: "50%", size: 24, duration: 7.5, delay: 1.2 },


  { Icon: HiOutlineCpuChip, top: "6%", left: "20%", size: 26, duration: 6, delay: 0 },
  { Icon: HiOutlineCloud, top: "10%", left: "78%", size: 28, duration: 7, delay: 0.5 },
  { Icon: HiOutlineCodeBracket, top: "34%", left: "16%", size: 24, duration: 6.5, delay: 1 },
  { Icon: HiOutlineCircleStack, top: "36%", left: "82%", size: 26, duration: 8, delay: 0.3 },
];


export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* moving gradient blobs */}
      <motion.div
        className="absolute h-72 w-72 rounded-full bg-saffron-500/20 blur-3xl sm:h-96 sm:w-96"
        style={{ top: "-5%", left: "-5%" }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-80 w-80 rounded-full bg-saffron-700/20 blur-3xl sm:h-[420px] sm:w-[420px]"
        style={{ top: "10%", right: "-8%" }}
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* floating tech icons — hidden on very small screens to avoid clutter */}
      <div className="hidden sm:block">
        {icons.map(({ Icon, top, left, size, duration, delay }, i) => (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center rounded-xl border border-saffron-500/20 bg-ink-800/60 p-2.5 text-saffron-400/70 backdrop-blur-sm"
            style={{ top, left }}
            animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
            transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
          >
            <Icon size={size} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}