import { useState, useEffect } from "react";
import GradeWrapper from "../components/sections/gradingSection/GradeWrapper/gradeWrapper.style";

import NavBar from "../components/sections/navBar";
import Hero from "../components/sections/hero";
import HomePage from "../components/sections/homePage";
import GradingSectionHeading from "../components/sections/gradingSection/gradingSectionHeading";
import MinimalSupportSubSection from "../components/sections/minimalSupport";
import GradingSummary from "../components/sections/gradingSection/gradingSummary";
import Footer from "../components/sections/footer";

import DataContext from "../context/DataContext";
import GradeSection from "../components/sections/gradingSection/grades/grade";

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
          {data.acf ? (
            <>
              <GradeSection
                gradeSupportDetails={data.acf.aGradeSupportDetails}
                gradeSupportTableMobile={data.acf.aGradeSupportTableMobile}
                gradeSupportTableDesktop={data.acf.aGradeSupportTableDesktop}
                letter={"A"}
              />
              <GradeSection
                gradeSupportDetails={data.acf.bGradeSupportDetails}
                gradeSupportTableMobile={data.acf.bGradeSupportTableMobile}
                gradeSupportTableDesktop={data.acf.bGradeSupportTableDesktop}
                letter={"B"}
              />
              <GradeSection
                gradeSupportDetails={data.acf.cGradeSupportDetails}
                gradeSupportTableMobile={data.acf.cGradeSupportTableMobile}
                gradeSupportTableDesktop={data.acf.cGradeSupportTableDesktop}
                letter={"C"}
              />
            </>
          ) : null}

          <MinimalSupportSubSection />
          
        </GradeWrapper>
        <GradingSummary />
        <Footer />
      </DataContext.Provider>
    </div>
  );
}
