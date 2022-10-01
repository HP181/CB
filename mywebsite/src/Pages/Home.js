import React from "react";
// import Footer from "../Components/Footer";
import Contact from "../Pages/Contact";

import Banner from "../Components/Banner";
import Skill from "./Skills";
import Technologies from "../Components/Technologies";
import Life from "../Components/Life";

const Home = () => {
  return (
    <>
      <Banner />
      <Technologies />
      <Skill />
      <Life />
      <Contact />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
