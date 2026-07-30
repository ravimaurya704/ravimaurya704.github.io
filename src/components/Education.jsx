import { education } from "../data/resume";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
        Education
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {education.map((edu) => (
          <div
            key={edu.school}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-slate-900">{edu.degree}</h3>
              <span className="font-mono text-xs text-slate-500">{edu.period}</span>
            </div>
            <p className="mt-1 text-sm text-slate-600">{edu.school}</p>
            <p className="mt-3 text-sm font-medium text-emerald-700">{edu.result}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{edu.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
