import { useState, useEffect } from "react";
import axios from "axios";

// router
import { useParams } from "react-router-dom";

export const ProjectPage = () => {
	const [project, setProject] = useState([]);
	const { projectTitle } = useParams();
	document.body.removeAttribute("class");

	//
	useEffect(() => {
		const getProjectList = () => {
			const options = {
				method: "GET",
				url: `http://localhost:5500/projects/${projectTitle}`,
				params: {},
				headers: {},
			};

			axios
				.request(options)
				.then(function (response) {
					console.log(response.data);
					setProject(response.data);
				})
				.catch(function (error) {
					console.error(error);
				});
		};
		getProjectList();
	}, [projectTitle]);

	// Update background color
	useEffect(() => {
		if (project.color == "any") {
			document.body.style.backgroundColor = "#feffff";
		} else {
			document.body.style.backgroundColor = project.color;
		}
		}, [project.color]);
	
	document.body.classList.remove('outroBodyAnimation')

	return (
		
		<div className="project-page">
			<h1>{project.title}</h1>
		</div>
	);
};
