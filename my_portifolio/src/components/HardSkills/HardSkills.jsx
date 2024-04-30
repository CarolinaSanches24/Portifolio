import styles from "./HardSkills.module.css";
import learning from "../../data/learningTech.json";
import tools from "../../data/tools.json";
import hardSkills from "../../data/hardSkills.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { getImageUrl } from "../../utils";
import AnimatedText from "../AnimatedText/AnimatedText";

export const HardSkills = () => {
  const [slidePerView, setSlidePerView] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerView(1);
      } else {
        setSlidePerView(3);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section id="hard_skills">
      <h2 className={styles.title}>
        Hard <span style={{  color: "#576cbc"  }}>Skills</span>
      </h2>

      <div className={styles.container}>
        <AnimatedText>
          <p className={styles.subtitle}>Tecnologias que tenho conhecimento</p>
        </AnimatedText>
        <Swiper
          slidesPerView={slidePerView}
          pagination={{ clickable: true }}
          navigation
        >
          {hardSkills.map((skill) => (
            <SwiperSlide key={skill.id}>
              <img
                src={getImageUrl(skill.imageSrc)}
                alt={skill.title}
                className={styles.slide_item}
              />
              <figcaption>{skill.title}</figcaption>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.container_learning}>
        <AnimatedText>
          <p className={styles.subtitle}>Tecnologias que estou aprendendo</p>
        </AnimatedText>
        {learning.map((skill) => (
          <div key={skill.id}>
            {" "}
            {/* Adicione um elemento pai para cada item */}
            <img
              src={getImageUrl(skill.imageSrc)}
              alt={skill.title}
              className={styles.image_learning}
            />
            <figcaption className={styles.figcaption_learning}>
              {skill.title}
            </figcaption>
          </div>
        ))}
      </div>
      <div className={styles.container}>
        <AnimatedText>
          <p className={styles.subtitle}>Ferramentas que utilizo</p>
        </AnimatedText>
        <Swiper
          slidesPerView={slidePerView}
          pagination={{ clickable: true }}
          navigation
        >
          {tools.map((skill) => (
            <SwiperSlide key={skill.id}>
              <img
                src={getImageUrl(skill.imageSrc)}
                alt={skill.title}
                className={styles.slide_item}
              />
              <figcaption>{skill.title}</figcaption>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
