
import React from "react";
import ProjectData from "../ProjectData.js"
import Project from "./Project"

class Projects extends React.Component {
  render(){
    let projects = ProjectData.projects.map(project => {
      return <Project title={project.name} summary={project.summary} link={project.link} image={project.image} site={project.site} />
    })

    console.log(projects)
    return (
      <div>
        {projects}
      </div>
    );
  }
}

export default Projects;
