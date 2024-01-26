import "./SkillsTextStyle.css";

type SkillsTextProps = {
  skill: {
    name: string;
    header: string;
    text: string;
  } | null;
};
const SkillsText: React.FC<SkillsTextProps> = ({ skill }) => {
  if (!skill) {
    return null;
  }
  return (
    <div className="textContainer">
      <h1>{skill.header}</h1>
      <p>{skill.text}</p>
    </div>
  );
};

export default SkillsText;
