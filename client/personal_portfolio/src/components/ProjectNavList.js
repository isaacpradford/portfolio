// router
import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const ProjectNavList = ({ project }) => {	
	const navigate = useNavigate();
	const containerRef = useRef(null);

	const handleClick = (e) => {
		e.preventDefault();
		const projectContainers = document.querySelectorAll(".projectContainer");

		projectContainers.forEach((container) => {
			if (!container.contains(e.target)) {
			  container.classList.add("outroNav");
			} else {
			  container.classList.add("clickedNav");
			}
		  });

		document.body.classList.add("outroBodyAnimation");

		// Delay navigation to allow time for the animation to play
		setTimeout(() => {
		  navigate(`/Projects/${project.title}`); // Navigate to the new page
		}, 1000);
	  };

	return (
		<li className="projectLi">
			<div className="projectContainer"> 
			{project.date_created}
			<Link className="projectTitle" 
				  to={`/Projects/${project.title}`}
				  onClick={handleClick}>{project.title}</Link>
			</div>
		</li>
	);
};
