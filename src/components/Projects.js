import React from "react";
import projects from "../data/projects.json";
import Project from "./Project";

const Projects = () => {
  return (
    <div>
      {projects.allProjects.map((data, i) => (
        <Project
          key={i}
          imgName={data.imgName}
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default Projects;
