import HeaderNav from "../components/HeaderNav";
import HomeIntro from "../components/HomeIntro";
// import SocialLinks from "../components/SocialLinks";
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import { ProjectNavList } from "../components/ProjectNavList";
// import { header } from "express-validator";

export const HomePage = () => {
	const [projects, setProjects] = useState([]);
	// const containerRef = useRef(null);

	document.documentElement.style.setProperty('--background-color', "#bc1545");
	document.documentElement.style.setProperty('--scrollbar-gutter-color', 'rgba(0, 0, 0, 0)');
	document.documentElement.style.setProperty('--scrollbar-thumb-color', "#6e0c28");
	

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
		// onLoadBodyAnimation();
		onLoadNavAnimation();
		// onLoadIntroAnimation();
	  };

	  

	  const onLoadNavAnimation = () => {
		const projectLiElements = document.querySelectorAll(".projectLi");

		projectLiElements.forEach((li, index) => {
		  li.style.display = "grid"
		  document.body.style.justifyContent = "flex-end";

		  li.classList.add("animateNav");
		  li.style.animationDelay = `${index * 0.3 }s`; // Apply staggered delay
		});
	}

	const onLoadIntroAnimation = () => {
		document.body.classList.remove('outroBodyAnimation')
		const introElements = document.querySelectorAll(".introBox");

		// const headerNavItems = document.querySelector(".headerNav");
		// headerNavItems.classList.add("HeaderNavHomeLoad");


		// if (headerNavItems) {
		// 	if (!headerNavItems.classList.contains("HeaderNavHomeLoad")){
				
		// 	}
		// }

		introElements.forEach((item, index) => {
		  item.classList.add("animateHomeIntro");
		});

		// headerLiElements.forEach((item, index) => {
		// 	item.classList.add("animateHomeIntro");
		//   });
	}

	useEffect(() => {
		
		// const headerNav = document.querySelectorAll('.headerNav li a');

		// headerNav.forEach((item) => {
		// 	item.style.color = "#f3f3f3";
		// })

		LoadAnimations();
		
	}, [LoadAnimations])

	return (
		<div className="homePage">
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
