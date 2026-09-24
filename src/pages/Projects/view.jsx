import ProjectItem from "./components/ProjectItem";
import useProjectsController from "./controller";

export default function ProjectsView() {
  const projects = useProjectsController();
  return (
    <div className="mt-2">
      {projects ? (
        projects.map((p) => <ProjectItem key={p.name} data={p} />)
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
}
