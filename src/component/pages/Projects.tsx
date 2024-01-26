import "./ProjectsStyle.css";
import construction from "../../assets/construction.png";
import git from "../../assets/gitHubLogo.png";

function Projects() {
  return (
    <div className="projectsContainer">
      <img src={construction} className="constructionImg" />
      <div className="content">
        <h2>Sorry</h2>
        <p>There are currently no great projects to show.</p>
        Meanwhile you can visit my GitHub profile ! <br />
        <a href="https://github.com/Synav92">
          <img src={git} alt="git logo" className="logo" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
