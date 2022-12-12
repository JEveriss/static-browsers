import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Hero from "../components/sections/hero";
import Footer from "../components/sections/footer";
import HomePage from "../components/sections/homePage";
import NavBar from "../components/sections/navBar";
import GradingSectionHeading from "../components/sections/gradingSection/gradingSectionHeading";
import AGradeSection from "../components/sections/gradingSection/grades/aGrade";
import BGradeSection from "../components/sections/gradingSection/grades/bGrade";
import CGradeSection from "../components/sections/gradingSection/grades/cGrade";
import MinimalSupportSubSection from "../components/sections/minimalSupport";
import GradeWrapper from "../components/sections/gradingSection/GradeWrapper/gradeWrapper.style"
import DataContext from "../context/DataContext";
import GradingSummary from "../components/sections/gradingSection/gradingSummary";

export default function Home() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const res = await fetch(
        "http://mywordpress.local/wp-json/wp/v2/posts/267"
      );
      const fetchedData = await res.json();
      setData(fetchedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("updating data");
  //   console.log(data);
  // }, [data]);

  return (
    <div className={styles.container}>
      <DataContext.Provider value={{ data: data }}>
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
      </DataContext.Provider>
    </div>
  );
}
