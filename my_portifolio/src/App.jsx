import styles from "./App.module.css";
import { NavBar } from "./components/Navbar/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
    </div>
  );
}

export default App;
