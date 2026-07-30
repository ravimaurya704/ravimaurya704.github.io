import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors ${
        solid
          ? "border-b border-slate-200 bg-white/80 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <a
            href="#top"
            className={`flex items-center gap-3 font-semibold tracking-tight transition-colors ${
              solid ? "text-slate-900" : "text-white"
            }`}
          >
            <Logo />
            Ravi Maurya
          </a>
          <span
            className={`hidden items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium sm:inline-flex ${
              solid
                ? "border-emerald-500/30 bg-emerald-50 text-emerald-700"
                : "border-white/30 bg-white/10 text-white backdrop-blur-sm"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            Open to Work
          </span>
        </div>

        <ul
          className={`hidden gap-8 text-sm md:flex transition-colors ${
            solid ? "text-slate-600" : "text-white/90"
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-emerald-500">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`md:hidden transition-colors ${solid ? "text-slate-600" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-slate-200 bg-white px-6 py-4 text-sm text-slate-700 md:hidden">
          <li>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
              Open to Work
            </span>
          </li>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
