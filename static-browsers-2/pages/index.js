import styles from "../styles/Home.module.css";
import Hero from "../sections/hero";
import Footer from "../sections/footer";
import HomePage from "../sections/homePage";
import NavBar from "../sections/navBar";
import GradingSectionHeading from "../sections/gradingSection/gradingSectionHeading";
import AGradeSection from "../sections/gradingSection/grades/aGrade";
import BGradeSection from "../sections/gradingSection/grades/bGrade";
import CGradeSection from "../sections/gradingSection/grades/cGrade";
import MinimalSupportSubSection from "../sections/minimalSupport";
import GradingSummary from "../sections/gradingSection/gradingSummary";
import GradeWrapper from "../sections/gradingSection/gradeWrapper/gradeWrapper.style";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Hero />
      <HomePage />
      <GradeWrapper>
        <GradingSectionHeading />
        <AGradeSection />
        <BGradeSection />
        <CGradeSection />
        <MinimalSupportSubSection />
      </GradeWrapper>
      <GradingSummary />
      <Footer />
    </div>
  );
}
