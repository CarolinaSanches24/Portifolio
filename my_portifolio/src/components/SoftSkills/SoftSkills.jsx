import { useState } from "react";
import { getImageUrl } from "../../utils";
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
      <div className={styles.container_Imagens}>
        <div
          className={styles.gridItem}
          onClick={() =>
            handleImageClick(
              "Exerci papéis de liderança, orientando e apoiando a equipe para atingir metas desafiadoras, incentivando a inovação e a busca pela excelência"
            )
          }
        >
          <img
            className={styles.soft_skill_Image}
            src={getImageUrl("soft_skills/lideranca.png")}
            alt="Imagem duas pessoas conversando"
          />
          <p className={styles.legend}>Liderança</p>
        </div>
        <div
          className={styles.gridItem}
          onClick={() =>
            handleImageClick(
              "Durante minhas experiências profissionais sempre me comuniquei de forma clara e consisa, mantendo o dialógo com a equipe em que estava trabalhando e mantendo-me sempre informada."
            )
          }
        >
          <img
            className={styles.soft_skill_Image}
            src={getImageUrl("soft_skills/comunicacao.png")}
            alt="Imagem duas pessoas conversando"
          />
          <p className={styles.legend}>Comunicação Eficaz</p>
        </div>
        <div
          className={styles.gridItem}
          onClick={() =>
            handleImageClick(
              "Sempre busquei compreender as necessidades e sentimentos dos colegas de equipe, promovendo um ambiente colaborativo e de apoio mútuo."
            )
          }
        >
          <img
            className={styles.soft_skill_Image}
            src={getImageUrl("soft_skills/empatia.png")}
            alt="Desenho duas pessoas se ajudando e uma lâmpada"
          />
          <p className={styles.legend}>Empatia</p>
        </div>
        <div
          className={styles.gridItem}
          onClick={() =>
            handleImageClick(
              "Participei ativamente de projetos que envolviam colaboração entre diferentes equipes, contribuindo para a sinergia e a consecução dos objetivos comuns."
            )
          }
        >
          <img
            className={styles.soft_skill_Image}
            src={getImageUrl("soft_skills/colaboracao.png")}
            alt="Imagem várias pessoas juntando pedaços de um objeto"
          />
          <p className={styles.legend}>Colaboração</p>
        </div>
        <div
          className={styles.gridItem}
          onClick={() =>
            handleImageClick(
              "Desenvolvi habilidades de organização e planejamento ao liderar minha equipe para resolução de um desafio da Cubos Academy, garantindo a entrega dentro dos prazos estabelecidos."
            )
          }
        >
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
          <p>{selectedText}</p>
        </div>
      </div>

      <div className={styles.container_card}>
        <div className={styles.card_comunicacao}>
          <img
            src={getImageUrl("soft_skills/comunicacao.png")}
            alt="Imagem duas pessoas conversando"
          />
          <div className={styles.text}>
            <h1>Comunicação Eficaz</h1>
            <p>
              Durante minhas experiências profissionais sempre me comuniquei de
              forma clara e consisa, mantendo o dialógo com a equipe em que
              estava trabalhando e mantendo-me sempre informada.
            </p>
          </div>
        </div>
        <div className={styles.card_empatia}>
          <img
            src={getImageUrl("soft_skills/empatia.png")}
            alt="Desenho duas pessoas se ajudando e uma lâmpada"
          />
          <div className={styles.text}>
            <h1>Empatia</h1>
            <p>
              Sempre busquei compreender as necessidades e sentimentos dos
              colegas de equipe, promovendo um ambiente colaborativo e de apoio
              mútuo
            </p>
          </div>
        </div>
        <div className={styles.card_colaboracao}>
          <img
            src={getImageUrl("soft_skills/colaboracao.png")}
            alt="Imagem várias pessoas juntando pedaços de um objeto"
          />
          <div className={styles.text}>
            <h1>Colaboração</h1>
            <p>
              Participei ativamente de projetos que envolviam colaboração entre
              diferentes equipes, contribuindo para a execução dos objetivos
              comuns.
            </p>
          </div>
        </div>
        <div className={styles.card_organizacao}>
          <img
            src={getImageUrl("soft_skills/organizacao.png")}
            alt="Equipe de planejamento organizando projetos"
          />
          <div className={styles.text}>
            <h1>Organização Planejamento</h1>
            <p>
              Desenvolvi habilidades de organização e planejamento ao liderar
              minha equipe para resolução de um desafio da Cubos Academy,
              garantindo a entrega dentro dos prazos estabelecidos.
            </p>
          </div>
        </div>
        <div className={styles.card_lideranca}>
          <img
            src={getImageUrl("soft_skills/lideranca.png")}
            alt="Líder ajudando equipe alcançar objetivo"
          />
          <div className={styles.text}>
            <h1>Liderança</h1>
            <p>
              Exerci papéis de liderança, orientando e apoiando a equipe para
              atingir metas desafiadoras, incentivando a inovação e a busca pela
              excelência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
