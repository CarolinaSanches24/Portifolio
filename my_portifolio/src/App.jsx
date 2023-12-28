import styles from "./App.module.css";
import { Home } from "./components/Home/Home";
import { NavBar } from "./components/Navbar/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
