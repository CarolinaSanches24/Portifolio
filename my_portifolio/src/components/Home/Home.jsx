import { getImageUrl } from "../../utils";
import styles from "./Home.module.css";
export const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.text_content}>OLÁ,</p>
        <p className={styles.text_content}>EU SOU</p>
        <p className={styles.text_name_content}>CAROLINA SANCHES</p>
        <ul className={styles.education}>
          <div className={styles.education_itens}>
            <img
              className={styles.education_icon}
              src={getImageUrl("home/icon_engenharia.png")}
              alt="icone engrenagem"
            />
            <li className={styles.education_item}>
              <p className={styles.education_name_course}>
                Pós Graduanda de Engenharia de Software (Cursando)
              </p>
              <p className={styles.education_name_school}>
                Faculdade Digital Descomplica
              </p>
            </li>
          </div>
          <div className={styles.education_itens}>
            <img
              className={styles.education_icon}
              src={getImageUrl("home/icon_licenciatura.png")}
              alt="icone engrenagem"
            />
            <li className={styles.education_item}>
              <p className={styles.education_name_course}>
                Graduanda em Licenciatura em Informática
              </p>
              <p className={styles.education_name_school}>
                Instituto Federal de Ciência e Tecnologia do Amapá
              </p>
            </li>
          </div>
          <div className={styles.education_itens}>
            <img
              className={styles.education_icon}
              src={getImageUrl("home/icon_informatica.png")}
              alt="icone engrenagem"
            />
            <li className={styles.education_item}>
              <p className={styles.education_name_course}>
                Técnica em Informática
              </p>
              <p className={styles.education_name_school}>
                Centro de ensino profissionalizante do Amapá
              </p>
            </li>
          </div>
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
        src={getImageUrl("home/avatar.jpg")}
        alt="Fotografia Carolina Sanches em sua formatura"
        className={styles.my_photo}
      />
      <div className={styles.topOrange} />
      <div className={styles.bottomOrange} />
    </section>
  );
};
