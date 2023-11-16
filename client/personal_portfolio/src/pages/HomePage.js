import HeaderNav from "../components/HeaderNav";
import HomeIntro from "../components/HomeIntro";
import SocialLinks from "../components/SocialLinks";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

// Components
import { ProjectNavList } from "../components/ProjectNavList";
// import { header } from "express-validator";

export const HomePage = () => {
	const [projects, setProjects] = useState([]);
	const containerRef = useRef(null);

	document.body.removeAttribute("class");
	
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


	// Handles animations for when the screen is loaded by calling these items when the div is loaded

	const onLoadNavAnimation = () => {
		const projectLiElements = document.querySelectorAll(".projectLi");

		projectLiElements.forEach((li, index) => {
		  li.style.display = "grid"
		  document.body.style.justifyContent = "flex-end";

		  li.classList.add("animateNav");
		  li.style.animationDelay = `${index * 0.3 }s`; // Apply staggered delay
		});
	}

	const onLoadBodyAnimation = () => {
		const body = document.body;
		if (getComputedStyle(body).backgroundColor !== 'rgb(188, 21, 69)') {
		  body.classList.add('homeBgColorAnimation');
		}
	}

	const onLoadIntroAnimation = () => {
		document.body.classList.remove('outroBodyAnimation')
		const introElements = document.querySelectorAll(".introBox");
		const headerLiElements = document.querySelectorAll(".headerLi");

		introElements.forEach((item, index) => {
		  item.classList.add("animateHomeIntro");
		});

		headerLiElements.forEach((item, index) => {
			item.classList.add("animateHomeIntro");
		  });
	}

	const LoadAnimations = () => {
		onLoadBodyAnimation();
		onLoadNavAnimation();
		onLoadIntroAnimation();
	  };

	

	return (
		<div onLoad={LoadAnimations()} >
			<HeaderNav />
			{/* <SocialLinks /> */}
			<HomeIntro />
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
