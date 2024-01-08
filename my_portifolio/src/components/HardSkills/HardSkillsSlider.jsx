import styles from "./HardSkills.module.css";
import learning from "../../data/learningTech.json";
import hardSkills from "../../data/hardSkills.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { getImageUrl } from "../../utils";
export const HardSkillsSlider = () => {
  return (
    <section className={styles.containerSlider}>
      <h1 className={styles.title}>Slider com React JS</h1>
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
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
    </section>
  );
};
