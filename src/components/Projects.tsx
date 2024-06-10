import Project from "./Project";
import classes from "./Projects.module.scss";

export const Projects = ({ projects }: { projects: ProjectDataType[] }) => {
  return (
    <div className={classes.projects}>
      <div className={classes.container}>
        <h2 className="sectionTitle">
          <span>Some Exemplary Works</span>
        </h2>
        {projects.map((project) => (
          <Project key={project.url} {...project} />
          // <pre>
          //   <code>{JSON.stringify(project, null, 2)}</code>
          // </pre>
        ))}
      </div>
    </div>
  );
};
