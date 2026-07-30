import { caseStudies, githubProjects } from "../data/resume";

function ProjectCard({ project }) {
  const isLinked = Boolean(project.link);
  const Wrapper = isLinked ? "a" : "article";
  const wrapperProps = isLinked
    ? { href: project.link, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-400/60 hover:shadow-md"
    >
      {project.context && (
        <p className="text-xs font-medium text-slate-500">{project.context}</p>
      )}
      <div className="mt-2 flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
        {isLinked && (
          <svg
            className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-emerald-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700"
          >
            {t}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
        Case Studies
      </h2>
      <p className="mt-2 text-sm text-slate-500">
        Selected BI delivery work from full-time roles.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {caseStudies.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <h2 className="mt-16 text-sm font-semibold uppercase tracking-widest text-emerald-600">
        Open-Source Projects
      </h2>
      <p className="mt-2 text-sm text-slate-500">
        Personal projects, live on GitHub — click any card to view the repo.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {githubProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
