import React from "react";
import "./experience.css";

const positions = [
  {
    title: "Data Scientist",
    companies: ["Genentech", "Tive Inc."],
  },
];

function Experience() {
  return (
    <div className="experience-section">
      {positions.map((position, index) => (
        <div key={index} className="experience-card">
          <div className="position-title">{position.title}</div>
          <ul className="company-list">
            {position.companies.map((company, companyIndex) => (
              <li key={companyIndex}>{company}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
