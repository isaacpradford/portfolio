import HeaderNav from "../components/HeaderNav";
import Logo from "../components/Logo";
// import SocialLinks from "../components/SocialLinks";
import { useState, useEffect } from "react";
import axios from "axios";
import {onLoadIntroAnimation, onLoadHomeProjectAnimation } from "../utilities/loadAnimations";

// Components
import { ProjectNavList } from "../components/ProjectNavList";

export const HomePage = () => {
	const [projects, setProjects] = useState([]);

	// Remove previous body classes
	document.body.classList = "";

	// Makes call to backend to get the list of all projects
	useEffect(() => {
		const getProjectList = () => {
			const options = {
				method: "GET",
				url: "http://localhost:5500/projects",
				headers: {},
			};

			axios
				.request(options)
				.then(function (response) {
					setProjects(response.data);
				})
				.catch(function (error) {
					console.error(error);
				});
		};
		getProjectList();
	}, []);

	const LoadAnimations = () => {
		onLoadHomeProjectAnimation();
		onLoadIntroAnimation();
	  };


	useEffect(() => {
		// Make sure to remove previous classes
		document.body.classList = "";

		document.body.style.overflow = 'hidden';
		document.documentElement.style.setProperty('--background-color', "#bc1545");
		document.documentElement.style.setProperty('--text-color-home', '#f3f3f3');
		document.documentElement.style.setProperty('--scrollbar-gutter-color', 'rgba(0, 0, 0, 0)');
		document.documentElement.style.setProperty('--scrollbar-thumb-color', "#6e0c28");
		
		const headerNavA = document.querySelectorAll('.headerNav li a');
		headerNavA.forEach((item) => {
			item.classList.add("HeaderNavHomeLoad");
		})

		LoadAnimations();
	}, [LoadAnimations])

	return (
		<div className="homePage">
			<HeaderNav />
			{/* <SocialLinks /> */}
			<Logo loadAnimation={true}/>
			<div className="projectBox">
				<ul className="projects">
					{projects.map((project, index) => {
						return <ProjectNavList key={index} project={project}/>;
					})}
				</ul>
			</div>
		</div>
	);
}
