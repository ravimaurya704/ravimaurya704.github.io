import { useState } from "react";
import { profile } from "../data/resume";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { label: "LinkedIn", value: "linkedin.com/in/ravimaurya704", href: profile.linkedin },
  { label: "GitHub", value: "github.com/ravimaurya704", href: profile.github },
];

export default function Contact() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-10 text-center sm:p-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
          Contact
        </h2>
        <h3 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Let's build something data-driven together
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Based in {profile.location}, open to full-time Data Engineer, Data
          Analyst, and BI roles.
        </p>

        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="mt-10 rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            Show contact details
          </button>
        ) : (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-xl border border-slate-200 bg-white px-6 py-4 text-left transition hover:border-emerald-400/60 hover:shadow-sm"
              >
                <p className="text-xs text-slate-500">{link.label}</p>
                <p className="mt-1 truncate text-sm font-medium text-slate-800">
                  {link.value}
                </p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
