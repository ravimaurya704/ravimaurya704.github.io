import { profile } from "../data/resume";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
        About
      </h2>
      <div className="mt-4 grid gap-10 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          {profile.summary.map((line, i) => (
            <p key={i} className="leading-relaxed text-slate-600">
              {line}
            </p>
          ))}
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-sm font-semibold text-slate-900">Certifications</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {profile.certifications.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-sm font-semibold text-slate-900">Visa Status</h3>
            <p className="mt-3 text-sm text-slate-600">{profile.visa}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
