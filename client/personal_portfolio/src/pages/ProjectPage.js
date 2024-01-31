import { useState, useEffect } from "react";
import axios from "axios";

import YouTubeEmbed from "../components/youTubeEmbed";
import HeaderNav from "../components/HeaderNav";
import { Socials } from "../components/Socials";

import Logo from "../components/Logo";

// router
import { useParams } from "react-router-dom";

export const ProjectPage = () => {
	const [project, setProject] = useState([]);
	const { projectTitle } = useParams();
	const api_password = process.env.REACT_APP_API_PASSWORD;

	// Dismount previous animation class
	document.body.classList = "";

	// Set CSS variables for scrollbar colors and body
	document.body.classList = "";
	document.body.style.overflowY = 'scroll';
	document.body.style.overflowX = 'hidden';
	document.documentElement.style.setProperty('--background-color', "#f3f3f3");
	document.documentElement.style.setProperty('--text-color-project', project.color);
	document.documentElement.style.setProperty('--scrollbar-gutter-color', 'rgba(0, 0, 0, 0)');
	document.documentElement.style.setProperty('--scrollbar-thumb-color', project.color);
	document.documentElement.style.setProperty('--logo-color', project.color);	

	// Make the call to retrieve the data of the project
	useEffect(() => {
		const getProjectList = () => {
			const options = {
				method: "GET",
				url: `http://localhost:5500/projects/${projectTitle}`,
				params: {},
				headers: {
					password: api_password
				},
			};

			axios
				.request(options)
				.then(function (response) {
					setProject(response.data);
					console.log(response.data);
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


	// Add classes for animations
	useEffect(() => {
		const headerNavA = document.querySelectorAll('.headerNav');
		headerNavA.forEach((item) => {
			item.classList.add("HeaderNavProjectLoad");
		})

		document.querySelector('.project-title ').classList.add("ProjectTitleLoad");
		document.querySelector('.header-picture').classList.add("animate-project-picture");

		
		const bgSquare = document.querySelector('.bgSquare');
		const bgSquares = document.querySelectorAll('.bgSquare li');

		setTimeout(() => {
			bgSquare.style.display = "";
			bgSquares.forEach((item, index) => {
			  item.style.display = 'grid';
			  item.classList.add('animate-diamonds');
			  item.style.animationDelay = `${index * 0.1}s`;
			  item.style.backgroundColor = project.color;
			});
		  }, 1000); 
		  
		  const projectBody = document.querySelector('.project-body');
		  projectBody.style.opacity = 1;
		  const insideBody = projectBody.children;

		  
		  for (let i = 0; i < insideBody.length; i++) {
			  const element = insideBody[i];
			  setTimeout(() => {
				  element.classList.add('ProjectBodyLoad');
				}, i * 200);
			}

	  }, [project]);



	if (project && project.error === "Project not found") {
		return (
			<div>
				<h1 className="errorMessage">Looks like that project doesn't exist yet.</h1>
				<h1 className="errorMessage">Try looking for another one!</h1>
			</div>
		)
	} else {
		const base64ToImageUrl = (base64String) => `data:image/jpeg;base64,${base64String}`;
		const headerUrl = base64ToImageUrl(project.header_picture);
		const demoPictures = project.demo_picture || [];

		return (
		<div className="project-page">
			<div className="header-box">
				<HeaderNav />
			</div>

			<Logo loadAnimation={false}/>

			<div className="project">
					<ul className="bgSquare">
						<li id="bgSquare1"></li>
						<li id="bgSquare2"></li>
						<li id="bgSquare3"></li>
					</ul>	



					<img className="header-picture"src={headerUrl} alt="Project header"/>

				<div className="project-body">
					<h1 className="project-title" style={{ color: project.color }}>{project.title}</h1>
					<a href={`https://${project.demo_link}`} className="demo-link">{project.demo_link}</a>
					<h1 className="description description1">{project.description1}</h1>

					<div className="tech-tables">
						
					{project.frontend_stack && project.frontend_stack.length > 0 && (
						<table className="tech-stack">
							<thead>
							<tr>
								<th colSpan="2">Frontend Stack:</th>
							</tr>
							</thead>
							<tbody>
							{project.frontend_stack.map((tech, index) => (
								<tr key={index}>
								<td className="tech-cell">{tech}</td>
								</tr>
							))}
							</tbody>
						</table>
						)}

					{project.backend_stack && project.backend_stack.length > 0 && (
					<table className="tech-stack">
						<thead>
						<tr>
							<th colSpan="2">Backend Stack:</th>
						</tr>
						</thead>
						<tbody>
						{project.backend_stack.map((tech, index) => (
							<tr key={index}>
							<td className="tech-cell">{tech}</td>
							</tr>
						))}
						</tbody>
					</table>
					)}

					{project.tech_stack && project.tech_stack.length > 0 && (
					<table className="tech-stack">
						<thead>
						<tr>
							<th colSpan="2">Tech Stack:</th>
						</tr>
						</thead>
						<tbody>
						{project.tech_stack.map((tech, index) => (
							<tr key={index}>
							<td className="tech-cell">{tech}</td>
							</tr>
						))}
						</tbody>
					</table>
					)}
					</div>

					<h1 className="description description2">{project.description2}</h1>
					<h1 className="github-link">{project.project_url}</h1>

					{demoPictures.map((base64String, index) => (
						<img
						key={index}
						className="demo-picture"
						src={base64ToImageUrl(base64String)}
						alt={`Demo Picture ${index + 1}`}
						/>
					))}

					<ul className="bgAccentSquare">
						<li id="bgAccentSquare1"></li>
					</ul>

					<h1 className="description description3">{project.description3}</h1>

					<YouTubeEmbed youtubeLink = {project.youtube_link} />

					<div className="project-socials">
						<Socials />
					</div>
				</div>
			</div>
		</div>
		);
	}
	
};
