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
					setProject(response.data);
				})
				.catch(function (error) {
					if (error.response && error.response.status === 404) {
					  setProject({ error: "Project not found" });
					} else {
					  console.error(error);
					  setProject(null);
					}
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
	document.body.style.justifyContent = "center";

	if (project && project.error === "Project not found") {
		return (
			<div>
				<h1 className="errorMessage">Looks like that project doesn't exist yet. </h1>
				<h1 className="errorMessage"> Try looking for another one!</h1>
			</div>
		)
	} else {
		const base64ToImageUrl = (base64String) => `data:image/jpeg;base64,${base64String}`;
		const headerUrl = base64ToImageUrl(project.header_picture);

		return (
		<div className="project-page">
			<img src={headerUrl} alt="Header Picture"/>
			<h1>{project.title}</h1>
			<ul>
				<h3>Tech Stack:</h3>
				{project.tech_stack && project.tech_stack.map((tech, index) => (
					<li key={index}>
					<h1>{tech}</h1>
					</li>
				))}
			</ul>
			<h1>{project.color}</h1>
			<h1>{project.date_created}</h1>
			{/* <img src={imageUrl} alt="Demo Picture" /> */}
			<h1>{project.description}</h1>

			<h1>{project.project_url}</h1>

		</div>
		);
	}
	
};
