import PageHeader from "/components/PageHeader";
import ProjectItem from "./components/ProjectItem";
import useProjectsController from "./controller";
import ErrorNotice from "/components/ErrorNotice";

export default function ProjectsView() {
  const { projects, error } = useProjectsController();

  return (
    <div className="flex w-full flex-col items-center gap-8 px-6 py-16">
      <PageHeader
        title="Projects"
        subtitle="A selection of projects I have built or contributed to."
      />
      {error ? (
        <ErrorNotice message="Could not load the projects." />
      ) : projects ? (
        <>
          <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectItem key={project.name} project={project} />
            ))}
          </div>
          <div className="flex w-full max-w-6xl flex-col items-center gap-2 rounded-3xl border border-accent/20 bg-surface/50 px-6 py-10 text-center">
            <p className="font-semibold text-text-primary">
              More projects coming soon
            </p>
            <p className="max-w-md text-sm text-text-muted">
              I am always working on something new - check back later or
              explore my GitHub for the latest experiments.
            </p>
          </div>
        </>
      ) : (
        <p className="text-text-muted">Loading projects...</p>
      )}
    </div>
  );
}