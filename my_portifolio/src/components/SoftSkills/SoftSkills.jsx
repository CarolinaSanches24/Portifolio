import { useState } from "react";
import { getImageUrl } from "../../utils";
import softSkills from "../../data/softSkills.json";
import styles from "./SoftSkills.module.css";

export const SoftSkills = () => {
  const [selectedText, setSelectedText] = useState(
    "Clique nas Imagens para mais Detalhes"
  );

  const handleImageClick = (text) => {
    setSelectedText(text);
  };

  return (
    <section className={styles.container} id="soft_skills">
      <h2 className={styles.title}>
        Soft <span style={{ color: "#092635" }}>Skills</span>
      </h2>
      <div className={styles.content}>
        <div className={styles.soft_skills}>
          {softSkills.map((skill) => {
            return (
              <div key={skill.id} className={styles.skill}>
                <figure
                  className={styles.skillImageContainer}
                  onClick={() => handleImageClick(skill.description)}
                >
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  <p className={styles.legend}>{skill.title}</p>
                </figure>
              </div>
            );
          })}
        </div>
        <figcaption className={styles.container_text}>
          <p>{selectedText}</p>
        </figcaption>
      </div>
    </section>
  );
};
