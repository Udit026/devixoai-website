import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Pricing", path: "/pricing" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const supportLinks = [
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "FAQ's", path: "/faq" },
  { name: "Terms & Condition", path: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-700 bg-ink-900">
      <div className="section grid gap-10 !py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="text-xl font-bold">
            <span className="text-saffron-500">Devixo</span>
            <span className="text-offwhite">AI India</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-offwhite/60">
            We build intelligent AI software and SaaS products that turn your business
            operations into automated, data-driven growth engines.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-offwhite">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.name}>
                <Link to={l.path} className="text-sm text-offwhite/60 hover:text-saffron-400">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-offwhite">Support</h4>
          <ul className="space-y-2.5">
            {supportLinks.map((l) => (
              <li key={l.name}>
                <Link to={l.path} className="text-sm text-offwhite/60 hover:text-saffron-400">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-offwhite">Contact Info</h4>
          <ul className="space-y-2.5 text-sm text-offwhite/60">
            <li>24/7 Support Center</li>
            <li>contact@devixoaiindia.com</li>
            <li>+91 98765-89076</li>
            <li>11 am - 6 pm, Mon-Sat</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-offwhite/50 md:flex-row md:px-10">
          <p>© 2026 DevixoAI India. All rights reserved.</p>
          <div className="flex gap-4">
            {[FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-600 transition-colors hover:border-saffron-500 hover:text-saffron-400"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
