import HeaderNav from "../components/HeaderNav";
import HomeIntro from "../components/HomeIntro";
import SocialLinks from "../components/SocialLinks";
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import { ProjectNavList } from "../components/ProjectNavList";
import { header } from "express-validator";

// Home page should really be more about nav?
export const HomePage = () => {
	const [projects, setProjects] = useState([]);
	document.body.removeAttribute("class");
	

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

	const onLoadNavAnimation = () => {
		const projectLiElements = document.querySelectorAll(".projectLi");
		projectLiElements.forEach((li, index) => {
		  li.classList.add("animateNav");
		  li.style.animationDelay = `${index * 0.3 }s`; // Apply staggered delay
		});
	}

	const onLoadBodyAnimation = () => {
		document.body.classList.add('homeBgColorAnimation');
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
		<div onLoad={LoadAnimations()}>
			<HeaderNav />
			{/* <SocialLinks /> */}
			<HomeIntro />
			<ul className="projects">
				{projects.map((project, index) => {
					return <ProjectNavList key={index} project={project}/>;
				})}
			</ul>
		</div>
	);
};
