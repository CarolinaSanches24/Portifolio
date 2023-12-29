import { getImageUrl } from "../../utils";
import styles from "./Home.module.css";
export const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.text_one}>OLÁ,</p>
        <p className={styles.text_two}>EU SOU</p>
        <p className={styles.text_tree}>CAROLINA SANCHES</p>
        <ul className={styles.education}>
          <li className={styles.item}>
            <div className={styles.course}>
              <img
                className={styles.icon}
                src={getImageUrl("home/icon_engenharia.png")}
                alt="icone engrenagem"
              />
              <p>Pós Graduanda de Engenharia de Software (Cursando)</p>
            </div>
            <p className={styles.school}>Faculdade Digital Descomplica</p>
          </li>

          <li className={styles.item}>
            <div className={styles.course}>
              <img
                src={getImageUrl("home/icon_licenciatura.png")}
                alt="icone livros"
                className={styles.icon}
              />
              <p>Graduada em Licenciatura em Informática</p>
            </div>
            <p className={styles.school}>
              Instituto Federal de Ciência e Tecnologia do Amapá -IFAP
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.course}>
              <img
                src={getImageUrl("home/icon_informatica.png")}
                alt="icone computador"
                className={styles.icon}
              />

              <p>Técnica em Informática</p>
            </div>
            <p className={styles.school}>
              Centro de Ensino Profissionalizante do Amapá
            </p>
          </li>
        </ul>
        <a
          href="mailto:carolmosilva34@gmail.com"
          className={styles.button_contact}
        >
          Contate-me
        </a>
        <div className={styles.container_social_contact}>
          <p>OU</p>
          <div className={styles.social_contact}>
            <a href="https://www.linkedin.com/in/carol-sanches-moraes/">
              <img src={getImageUrl("home/icon_linkedin.png")} />
            </a>
            <a href="https://github.com/CarolinaSanches24">
              <img src={getImageUrl("home/icon_github.png")} />
            </a>
            <a href="https://wa.me/qr/QKM33WTJHOH4G1">
              <img src={getImageUrl("home/icon_whatsapp.png")} />
            </a>
          </div>
        </div>
      </div>
      <img
        src={getImageUrl("home/my_photo.png")}
        alt="Fotografia Carolina Sanches em sua formatura"
        className={styles.my_photo}
      />
      <div className={styles.topOrange} />
      <div className={styles.bottomOrange} />
    </section>
  );
};
