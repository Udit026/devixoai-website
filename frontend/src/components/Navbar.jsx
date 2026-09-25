import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiMenu, HiX } from "react-icons/hi";

const homeLinks = [
  { name: "AI Automation Suite", path: "/solutions/ai-automation" },
  { name: "SaaS CRM Platform", path: "/solutions/crm" },
  { name: "AI Chatbot & Support", path: "/solutions/ai-chatbot" },
  // { name: "Task Management", path: "/solutions/task-management" },
  { name: "Data Analytics AI", path: "/solutions/data-analytics" },
  { name: "Custom AI Development", path: "/solutions/custom-ai" },
];

const pagesLinks = [
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Integration", path: "/integration" },
  { name: "FAQ's & Answer", path: "/faq" },
  { name: "Blog Details", path: "/blog/1" },
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" },
];

const navLink =
  "flex items-center gap-1 text-sm font-medium text-offwhite/80 transition-colors hover:text-saffron-400";

function Dropdown({ label, items, isOpen, setIsOpen }) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={navLink}>
        {label}
        <HiChevronDown
          className={`transition-transform duration-200 ${isOpen ? "rotate-180 text-saffron-400" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full z-50 mt-3 w-64 rounded-xl border border-ink-700 bg-ink-850 p-2 shadow-card"
          >
            {items.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block rounded-lg px-4 py-2.5 text-sm text-offwhite/80 transition-colors hover:bg-ink-800 hover:text-saffron-400"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [homeOpen, setHomeOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-ink-700 bg-ink-950/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-saffron-500">Devixo</span>
          <span className="text-offwhite">AI India</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Dropdown label="Home" items={homeLinks} isOpen={homeOpen} setIsOpen={setHomeOpen} />
          <NavLink to="/features" className={navLink}>Features</NavLink>
          <NavLink to="/pricing" className={navLink}>Pricing</NavLink>
          <NavLink to="/blog" className={navLink}>Blog</NavLink>
          <Dropdown label="Pages" items={pagesLinks} isOpen={pagesOpen} setIsOpen={setPagesOpen} />
          <NavLink to="/contact" className={navLink}>Contact</NavLink>
        </div>

        <Link to="/contact" className="btn-primary hidden md:inline-flex text-sm !px-5 !py-2.5">
          Get Started
        </Link>

        <button className="text-2xl text-offwhite md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-ink-700 bg-ink-950 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {[...homeLinks, { name: "Features", path: "/features" }, { name: "Pricing", path: "/pricing" }, { name: "Blog", path: "/blog" }, ...pagesLinks, { name: "Contact", path: "/contact" }].map(
                (item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm text-offwhite/80 hover:bg-ink-800 hover:text-saffron-400"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
