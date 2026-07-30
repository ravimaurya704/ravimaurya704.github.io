import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
        Experience
      </h2>

      <div className="mt-10 space-y-6">
        {experience.map((job) => (
          <div
            key={job.company + job.period}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-400/40 hover:shadow-md sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
              <div className="flex items-center gap-3">
                {job.logo && (
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="h-10 w-10 shrink-0 rounded-lg border border-slate-200 object-contain p-1"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{job.role}</h3>
                  <p className="text-sm font-medium text-emerald-600">{job.company}</p>
                </div>
              </div>
              <span className="font-mono text-xs text-slate-500">{job.period}</span>
            </div>
            <p className="mt-1 text-sm text-slate-500">{job.location}</p>

            {job.tech.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            <ul className="mt-4 space-y-2">
              {job.points.map((point, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-600">
                  <span className="mt-1 text-emerald-500">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {job.clients && job.clients.length > 0 && (
              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Trusted By
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4">
                  {job.clients.map((client) =>
                    client.logo ? (
                      <img
                        key={client.name}
                        src={client.logo}
                        alt={client.name}
                        title={client.name}
                        className="h-10 w-auto max-w-[8rem] rounded-md object-contain"
                      />
                    ) : (
                      <span
                        key={client.name}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
                      >
                        {client.name}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
