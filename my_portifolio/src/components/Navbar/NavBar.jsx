import { useState } from "react";

import styles from "./NavBar.module.css";
import { getImageUrl } from "../../utils";
export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <img
        className={styles.menuBtn}
        src={
          menuOpen
            ? getImageUrl("nav/closeIcon.png")
            : getImageUrl("nav/menuIcon.png")
        }
        alt="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <div className={styles.menu}>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre mim</a>
          </li>
          <li>
            <a href="#soft_skills">Soft Skills</a>
          </li>
          <li>
            <a href="#hard_skills">Hard Skills</a>
          </li>
          <li>
            <a href="#experience">Experiência</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
