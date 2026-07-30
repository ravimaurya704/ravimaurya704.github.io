import { profile } from "../data/resume";
import heroBackground from "../assets/hero-background.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="relative h-20 w-full overflow-hidden sm:h-28 md:h-36 lg:h-40">
        <img
          src={heroBackground}
          alt={`${profile.name} — ${profile.title}, ${profile.location}`}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
      {/* Visually hidden but present for screen readers / SEO, since the name and
          title are rendered inside the banner image above rather than as text. */}
      <h1 className="sr-only">
        {profile.name} — {profile.title}
      </h1>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Top Skills
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {profile.topSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
