import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  return (
    <section id="projects" className={styles.container_projects}>
      <h2 className={styles.title}>Projetos FrontEnd</h2>
      <div className={styles.cards}>
        {projects.map((project) => {
          return (
            <div key={project.id} className={styles.card}>
              <figure>
                <img src={getImageUrl(project.imageSrc)} alt={project.title} />
              </figure>
              <figcaption>
                <div className={styles.content}>
                  <h1>{project.title}</h1>
                  <hr></hr>
                  <p className={styles.description}>{project.description}</p>
                  <ul>
                    {project.technologies.map((technology) => (
                      <li key={technology.id}>{technology.name}</li>
                    ))}
                  </ul>
                </div>
              </figcaption>
              <div className={styles.icons}>
                {project.icons &&
                  project.icons.map((icon, index) => (
                    <a key={index} href={icon.link}>
                      <img
                        src={getImageUrl(icon.icon)}
                        title={icon.name}
                        alt={icon.name}
                      />
                    </a>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
