import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { NavBar } from "./components/Navbar/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
