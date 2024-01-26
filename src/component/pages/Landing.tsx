import "./LandingStyle.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ich from "../../assets/ichBW.png";
import git from "../../assets/gitHubLogo.png";
import { useEffect, useState } from "react";

function Landing() {
  const [text] = useTypewriter({
    words: [
      "Web-Developer.",
      "Pizza Maniac.",
      "Cannabis Enthusiast.",
      "Cocaine Lover.",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 10,
    delaySpeed: 100,
  });
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="landingContainer">
      {windowSize[0] > 2100 ? (
        <div>
          <div className="textBox left">
            <p>Hi, I'm a</p>
            <span className="text">{text}</span>
            <span className="cursor">
              <Cursor cursorStyle="|" />
            </span>
          </div>
          <div className="textBox right">Feel free to look around !</div>
          <div className="textBox bottom">
            Visit my GitHub aswell !{" "}
            <a href="https://github.com/Synav92">
              <img src={git} alt="git logo" />
            </a>
          </div>
          <div className="photoBox">
            <img src={ich} className="ich" />
          </div>
        </div>
      ) : (
        <div className="miniBox">
          <div className="miniTextBox">
            <p>Hi, I'm a</p>
            <br />
            <span className="text">{text}</span>
            <span className="cursor">
              <Cursor cursorStyle="|" />
            </span>
          </div>
          <div className="miniIch">
            <img src={ich} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;
