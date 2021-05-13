import React from "react";
import ImageSection from "../Components/ImageSection";
import ServicesSection from "../Components/ServicesSection";
import SkillsSection from "../Components/SkillsSection";
import Title from "../Components/Title";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

export default function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"About me"} span={"About me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Javascript"} progress={"40%"} width={"40%"} />
        <SkillsSection skill={"Typescript"} progress={"20%"} width={"20%"} />
        <SkillsSection skill={"React Js"} progress={"40%"} width={"40%"} />
        <SkillsSection skill={"Java"} progress={"10%"} width={"10%"} />
        <SkillsSection skill={"Web Design"} progress={"25%"} width={"25%"} />
        <SkillsSection skill={"UI/Ux Design"} progress={"56%"} width={"36%"} />
      </div>

      <Title title={"Services"} span={"Services"} />
      <div className="servives-container">
        <ServicesSection
          image={design}
          title={"Web design"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={intelligence}
          title={"Artificial Intelligence"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={gamedev}
          title={"Game Development"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
      </div>
    </div>
  );
}
