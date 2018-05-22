import React from "react";
import '../scss/style.css';

const Projects = props =>(
	<div className="wrapper" id="projects">
		<img src={props.pic} alt={props.title} className="project-pic img-responsive" />
		<h2 className="project-title">{props.title}</h2>
		<p className="project-description">{props.description}</p>
		<a href={props.link} className="project-link"><button>View On GitHub</button></a>
	</div>
);

export default Projects;