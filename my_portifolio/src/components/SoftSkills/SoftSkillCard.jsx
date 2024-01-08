import { useState } from "react";
import styles from "./SoftSkills.module.css";
import { getImageUrl } from "../../utils";
import softSkillsData from "../../data/softSkills.json";

export const SoftSkillCard = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <article className={styles.container_card}>
      <p className={styles.title_card}>Clique nas imagens para mais Detalhes</p>
      {softSkillsData.map((skill) => (
        <figure
          key={skill.id}
          onClick={() => openPopup(skill)}
          className={styles.skill}
        >
          <div className={styles.softSkillImage}>
            <p className={styles.legend}>{skill.title}</p>
            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
          </div>
        </figure>
      ))}
      {selectedImage && (
        <div className={styles.popup}>
          <p>{selectedImage.description}</p>
          <button onClick={closePopup} className={styles.buttonClose}>
            Fechar
          </button>
        </div>
      )}
    </article>
  );
};
