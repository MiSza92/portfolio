import { useState } from "react";
import SkillsCard from "../Skills/SkillsCard";
import SkillsText from "../Skills/SkillsText";
import "./SkillsStyle.css";
import skillsData from "../Skills/skillsData.json";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState({
    name: "",
    header: "",
    text: "",
  });

  return (
    <div className="skillsContainer">
      <SkillsText skill={selectedSkill} />

      <SkillsCard
        skills={skillsData.skills}
        setSelectedSkill={setSelectedSkill}
      />
    </div>
  );
};

export default Skills;
