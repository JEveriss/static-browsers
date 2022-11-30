import styles from "../styles/Home.module.css";
import Hero from "../sections/hero";
import Footer from "../sections/footer";
import HomePage from "../sections/homePage";
import NavBar from "../sections/navBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Hero />
      <HomePage />
      <Footer />
    </div>
  );
}
