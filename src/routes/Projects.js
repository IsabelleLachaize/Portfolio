import React from 'react'
import NavBar from "../components/NavBar";
import HeroImg2 from "../components/HeroImg2";
import Footer from "../components/Footer";
import StaticCard from "../components/StaticCard";
import Work from "../components/Work";

const Projects = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="PROJETS" text="Plus sont à venir." />
      <Work />
      <StaticCard />
      <Footer />
    </div>
  )
}

export default Projects
