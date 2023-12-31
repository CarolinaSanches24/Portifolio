import { getImageUrl } from "../../utils";
import styles from "./SoftSkills.module.css";
export const SoftSkills = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container_Imagens}>
        <div className={styles.gridItem}>
          <img
            className={styles.soft_skill_Image}
            src={getImageUrl("soft_skills/comunicacao.png")}
            alt="Imagem duas pessoas conversando"
          />
          <p className={styles.legend}>Comunicação Eficaz</p>
        </div>
        <div className={styles.gridItem}>
          <img
            className={styles.soft_skill_Image}
            src={getImageUrl("soft_skills/empatia.png")}
            alt="Desenho duas pessoas se ajudando e uma lâmpada"
          />
          <p className={styles.legend}>Empatia</p>
        </div>
        <div className={styles.gridItem}>
          <img
            className={styles.soft_skill_Image}
            src={getImageUrl("soft_skills/colaboracao.png")}
            alt="Imagem várias pessoas juntando pedaços de um objeto"
          />
          <p className={styles.legend}>Colaboração</p>
        </div>
        <div className={styles.gridItem}>
          <img
            className={styles.soft_skill_Image}
            src={getImageUrl("soft_skills/organizacao.png")}
            alt="Equipe de planejamento organizando projetos"
          />
          <p className={styles.legend}>Organização e Planejamento</p>
        </div>
      </div>
      <div className={styles.container_two}>
        <div className={styles.container_text}>
          <p>Clique nas Imagens para mais Detalhes</p>
        </div>
        <p className={styles.legend}>Liderança</p>
        <img
          className={styles.soft_skill_Image}
          src={getImageUrl("soft_skills/lideranca.png")}
          alt="icone engrenagem"
        />
      </div>
    </section>
  );
};
