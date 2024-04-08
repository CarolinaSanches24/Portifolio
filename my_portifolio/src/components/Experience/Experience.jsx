import styles from "./Experience.module.css";
export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h1>Experiência</h1>
      <div className={styles.container_cards}>
        <div className={styles.card}>
          <h2>Nome da empresa</h2>
          <p>Cargo:</p>
          <describe>
            Atuei como estágiaria Backend com linguagens de programação
            Typescript, JavaScript, SQL, desenvolvimento com Drive Domain
            Design (DDD)
          </describe>
        </div>
      </div>
    </section>
  );
};
