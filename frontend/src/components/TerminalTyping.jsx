import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const defaultLines = [
  "$ deploying ai_model.py",
  "> optimizing workflow...",
  "> training on 12,400 records",
  "> connecting integrations: slack, aws",
  "> model accuracy: 98.4%",
  "$ status: live ✓",
];

// Floating terminal card that types out lines one character at a time,
// pauses, then erases and moves to the next line — loops forever.
export default function TerminalTyping({ lines = defaultLines, className = "" }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting

  useEffect(() => {
    const currentLine = lines[lineIndex];
    let timeout;

    if (phase === "typing") {
      if (text.length < currentLine.length) {
        timeout = setTimeout(() => setText(currentLine.slice(0, text.length + 1)), 35);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 900);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 500);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 15);
      } else {
        setLineIndex((i) => (i + 1) % lines.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, lineIndex, lines]);

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      className={`w-64 overflow-hidden rounded-xl border border-ink-700 bg-ink-900/95 shadow-card backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-ink-700 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
      </div>
      <div className="min-h-[64px] px-3 py-3 font-mono text-[11px] leading-relaxed text-saffron-400">
        {text}
        <span className="animate-pulse">▌</span>
      </div>
    </motion.div>
  );
}