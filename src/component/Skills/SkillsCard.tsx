// SkillsCard.tsx
import React, { useEffect, useState } from "react";
import "./SkillsCardStyle.css";

type SkillsCardProps = {
  skills: {
    name: string;
    header: string;
    text: string;
    url: string;
  }[];
  setSelectedSkill: React.Dispatch<React.SetStateAction<any>>;
};

const SkillsCard: React.FC<SkillsCardProps> = ({
  skills,
  setSelectedSkill,
}) => {
  const [active, setActive] = useState("");
  const handleAction = (selectedSkill: any) => {
    setSelectedSkill(selectedSkill);
    setActive(selectedSkill.name);
  };
  useEffect(() => {
    for (let i = 0; i < skills.length; i++) {
      let collection = document.getElementsByClassName(skills[i].name);
      if (collection[0].classList.contains("active")) {
        collection[0].classList.remove("active");
      }
      if (active === skills[i].name) {
        let collection = document.getElementsByClassName(active);
        collection[0].classList.add(`active`);
      }
    }
  }, [active]);
  return (
    <div className="grid">
      {skills.map((skill, index) => (
        <img
          key={index}
          src={skill.url}
          onMouseEnter={() => handleAction(skill)}
          // className={white ? `${skill.name}` : `${skill.name} active`}
          className={skill.name}
          // style={{ background: ` ${white ? "blue" : "red"}` }}
        />
      ))}
    </div>
  );
};

export default SkillsCard;
