import React from "react";
import "./App.css";
import "normalize.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Experience from "./experience";
import { useSpring, animated, config } from "react-spring";

// Define your projects here. Include name, description, and background image.
const projects = [
  {
    name: "tinylang",
    description: "a simpler langchain",
    bgImage: "tinylang.png",
    link: "https://github.com/astelmach01/tinylang",
  },
  {
    name: "cosmo",
    description: "your AI assistant",
    bgImage: "cosmo.png",
    link: "https://github.com/astelmach01/Cosmo-backend",
  },
  {
    name: "mar.IO",
    description: "neural nets play mario",
    bgImage: "mario.jpeg",
    link: "https://github.com/astelmach01/mar.IO",
  },
];

function AnimatedLetter({ char, delay }) {
  const styles = useSpring({
    loop: { reverse: true },
    from: {
      transform: "translateY(0px)",
      color: "#0f0", // Glowing green color
      textShadow: `0 0 8px #0f0, 0 0 16px #0f0`, // Soft glow
    },
    to: {
      transform: "translateY(-10px)",
    },
    config: { duration: 2000 },
    delay,
  });

  return <animated.span style={styles}>{char}</animated.span>;
}

function AnimatedName({ name }) {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3rem",
    fontWeight: "bold",
    fontFamily: 'Consolas, "Courier New", monospace',
  };

  return (
    <h1 style={containerStyle}>
      {name.split("").map((char, index) => {
        // If the character is a space, return a non-breaking space within the span
        if (char === " ") {
          return (
            <span key={index} style={{ whiteSpace: 'pre-wrap' }}>
              &nbsp;
            </span>
          );
        }
        return <AnimatedLetter char={char} key={index} delay={index * 100} />;
      })}
    </h1>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img
            src={process.env.PUBLIC_URL + "/headshot.png"}
            alt="Headshot"
            className="headshot"
          />
          <AnimatedName name="Andrew Stelmach" />
          <p>Northeastern University - B.S. in Computer Science</p>
          <Experience />
        </div>
      </header>
      <div className="bio">
        <TypeAnimation
          cursor={true}
          sequence={[
            "i am a data scientist",
            3000,
            "i am a mathematician",
            3000,
            "i am a creator of intelligent solutions",
            3000,
            "i am committed to helping others with technology",
            3000,
            "i am advancing the field of AI research",
            3000,
            "i am driven by curiosity",
            3000,
          ]}
          speed={45} // Typing speed
          deletionSpeed={80}
          style={{ fontSize: "1.5em" }}
          wrapper="div"
          repeat={Infinity} // Repeat this animation
        />
      </div>
      <main>
        <div className="project-container">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="project"
              style={{
                animation: `fadeInUp 1s ease-out forwards ${index * 0.2}s`,
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/" + project.bgImage}
                alt={project.name}
                className="project-background"
              />
              <div className="project-content">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </main>
      <footer>
        <a
          href="https://github.com/astelmach01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://linkedin.com/in/andrew-stelmach"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={32} />
        </a>
      </footer>
    </div>
  );
}

export default App;
