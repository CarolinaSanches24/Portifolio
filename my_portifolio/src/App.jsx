import styles from "./App.module.css";
import { About } from "./components/About/About";
import { HardSkills } from "./components/HardSkills/HardSkills";

// import { Experience } from "./components/Experience/Experience";
import { Home } from "./components/Home/Home";
import { NavBar } from "./components/Navbar/NavBar";
import { SoftSkillCard } from "./components/SoftSkills/SoftSkillCard";
import { SoftSkills } from "./components/SoftSkills/SoftSkills";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Home />
      <About />
      <SoftSkills />
      <SoftSkillCard />
      <HardSkills />
    </div>
  );
}

export default App;
