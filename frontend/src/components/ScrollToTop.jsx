import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi2";

// Floating "back to top" button (bottom-right).
// Appears only when the user has scrolled close to the bottom (footer area).
// Change `offset` to show it earlier/later (px from the bottom of the page).
export default function ScrollToTop({ offset = 500 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - offset;
      setVisible(scrolledToBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [offset]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.8 }}
          whileHover={{ y: -4, scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-saffron-gradient text-xl text-ink-950 shadow-glow sm:bottom-8 sm:right-8"
        >
          <HiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}