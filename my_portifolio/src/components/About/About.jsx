import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.apresentation}>
        <h2 className={styles.title}>Sobre mim</h2>
        <article className={styles.description}>
          Sou uma pessoa comunicativa, criativa, que adora estar envolvida em
          projetos e desafios. Sempre gostei de estudar e aprender coisas novas.
          Acredito que o conhecimento pode mover montanhas.{" "}
        </article>

        <img
          src={getImageUrl("about/my_foto.png")}
          alt="Foto Carolina Sanches Sorrindo"
          className={styles.aboutImage}
        />
      </div>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/icon_frontend.png")}
              alt="Icone Front-end"
            />
            <h3>Frontend Developer</h3>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/icon_backend.png")}
              alt="Icone Back-end"
            />

            <h3>Backend Developer</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};
