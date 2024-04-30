import { getImageUrl } from "../../utils";
import experience from "../../data/experience.json";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section id="experience" className={styles.container_experience}>
      <h2 className={styles.title}>Experiência</h2>
      <div className={styles.experience}>
        {experience.map((ex) => {
          return (
            <div key={ex.id} className={styles.card}>
              <div className={styles.content}>
                <img
                  src={getImageUrl(ex.imageSrc)}
                  alt={ex.title}
                  className={styles.company}
                />
                <div className={styles.text}>
                  <h2>{ex.title}</h2>
                  <p>{ex.description}</p>
                </div>
              </div>
              <div className={styles.technologies}>
                {ex.technologies.map((tech) => (
                  <img
                    key={ex.id}
                    src={getImageUrl(tech.icon)}
                    alt={tech.name} title={tech.name}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
