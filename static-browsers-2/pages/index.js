import { useState, useEffect } from "react";
import GradeWrapper from "../components/sections/gradingSection/GradeWrapper/gradeWrapper.style";

import NavBar from "../components/sections/navBar";
import Hero from "../components/sections/hero";
import HomePage from "../components/sections/homePage";
import GradingSectionHeading from "../components/sections/gradingSection/gradingSectionHeading";
import AGradeSection from "../components/sections/gradingSection/grades/aGrade";
import BGradeSection from "../components/sections/gradingSection/grades/bGrade";
import CGradeSection from "../components/sections/gradingSection/grades/cGrade";
import MinimalSupportSubSection from "../components/sections/minimalSupport";
import GradingSummary from "../components/sections/gradingSection/gradingSummary";
import Footer from "../components/sections/footer";

import DataContext from "../context/DataContext";

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

  return (
    <div>
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
