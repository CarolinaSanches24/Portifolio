import React from 'react';
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from '../../utils';

export const Projects = () => {
    return (
      <section id="projects" className={styles.container_projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.cards}>
      {projects.map((project) => {
        return(
          <div key = {project.id} className={styles.card}>
            <figure>
            <img src ={getImageUrl(project.imageSrc)} alt ={project.title}/>
            </figure>
            <figcaption>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </figcaption>
            </div>
        )
      })}

      </div>
      </section>
    );
  };
  