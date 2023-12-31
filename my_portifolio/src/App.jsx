import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Home } from "./components/Home/Home";
import { NavBar } from "./components/Navbar/NavBar";
import { SoftSkills } from "./components/SoftSkills/SoftSkills";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Home />
      <About />
      <SoftSkills />
      <Experience />
    </div>
  );
}

export default App;
