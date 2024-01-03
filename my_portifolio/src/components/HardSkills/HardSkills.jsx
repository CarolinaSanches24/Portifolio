import { getImageUrl } from "../../utils";

import hardSkills from "../../data/hardSkills.json";
import tools from "../../data/tools.json";
import learning from "../../data/learningTech.json";
import styles from "./HardSkills.module.css";
export const HardSkills = () => {
  return (
    <section id="hard_skills" className={styles.container}>
      <h2 className={styles.title}>
        Hard <span style={{ color: "#092635" }}>Skills</span>
      </h2>

      <div className={styles.content}>
        <div className={styles.hard_skills}>
          <p>Tecnologias que tenho conhecimento</p>
          {hardSkills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.tools}>
          <p>Ferramentas que utilizo</p>
          {tools.map((tool, id) => {
            return (
              <div key={id} className={styles.tool}>
                <div className={styles.toolImageContainer}>
                  <img src={getImageUrl(tool.imageSrc)} alt={tool.title} />
                </div>
                <p>{tool.title}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.bottomOrange} />
        <div className={styles.learning_tech}>
          <p>Tecnologias que estou aprendendo</p>
          {learning.map((item, id) => {
            return (
              <div key={id} className={styles.item}>
                <div className={styles.itemImageContainer}>
                  <img src={getImageUrl(item.imageSrc)} alt={item.title} />
                </div>

                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
