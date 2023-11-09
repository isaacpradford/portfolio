// import { useEffect } from "react";

// router
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export const ProjectNavList = ({ project }) => {	
	const navigate = useNavigate();
	const containerRef = useRef(null);

	const handleClick = (e) => {
		e.preventDefault();
		const projectContainers = document.querySelectorAll(".projectContainer");

		projectContainers.forEach((container) => {
		  if (container !== containerRef.current) {
			container.classList.add("outroNav");
		  }
		});

		document.body.classList.add("outroBodyAnimation");

		// Delay navigation to allow time for the animation to play
		setTimeout(() => {
		  navigate(`/${project.title}`); // Navigate to the new page
		}, 1250); // Adjust the delay time as needed
	  };


	return (
		<li className="projectLi">
			<div className="projectContainer"> 
			{project.date_created}
			<Link className="projectTitle" 
				  to={`/${project.title}`}
				  onClick={handleClick}>{project.title}</Link>
			</div>
		</li>
	);
};
