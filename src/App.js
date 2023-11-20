import React from "react";
import "./App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

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
    link: "https://github.com/astelmach01/Deep-RL-Mario-Research",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/headshot.png"}
          alt="Headshot"
          className="headshot"
        />
        <h1>Andrew Stelmach</h1>
        <p>Northeastern University - B.S. in Computer Science</p>
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
