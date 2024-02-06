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
	const [backgroundColor, setBackgroundColor] = useState("#f3f3f3");
	const [animationColor, setAnimationColor] = useState("#000");
	const [isLoading, setIsLoading] = useState(false);
	const api_password = process.env.REACT_APP_API_PASSWORD;

	// Remove previous body classes
	document.body.classList = "";

	// Makes call to backend to get the list of all projects
	useEffect(() => {
		const getProjectList = () => {
			setIsLoading(true);
			const options = {
				method: "GET",
				url: "https://portfolio-api-mjjt.onrender.com/projects",
				headers: {
					password: api_password
				},
			};

			axios
				.request(options)
				.then(function (response) {
					setProjects(response.data);
				})
				.catch(function (error) {
					console.error(error);
				})
				.finally(() => {
					setIsLoading(false);
				});
		};
		getProjectList();
	}, []);

	useEffect(() => {
		// Make sure to remove previous classes
		document.body.classList = "";
		// document.body.style.overflowX = 'hidden';
		document.documentElement.style.setProperty("--background-color", backgroundColor);
		document.documentElement.style.setProperty("--animation-color", animationColor);
		document.documentElement.style.setProperty('--text-color-home', '#f3f3f3');
		document.documentElement.style.setProperty('--scrollbar-gutter-color', 'rgba(0, 0, 0, 0)');
		document.documentElement.style.setProperty('--scrollbar-thumb-color', "#15161d");
		document.documentElement.style.setProperty('--logo-color', animationColor);
		
		const headerNavA = document.querySelectorAll('.headerNav li a');
		headerNavA.forEach((item) => {
			item.classList.add("HeaderNavHomeLoad");
		})

	}, [backgroundColor, animationColor])
	
	useEffect(() => {
        if (!isLoading) {
            LoadAnimations();
        }
    }, [isLoading]);

	const LoadAnimations = () => {
		onLoadHomeProjectAnimation();
		onLoadIntroAnimation();
	  };

	const handleColorChange = (newColor, newAnimationColor) => {
		setBackgroundColor(newColor);
		setAnimationColor(newAnimationColor);
	  };

	  return (
        <div className="homePage">
            {isLoading ? (
				<>
					{/* <HeaderNav /> */}
					{/* <Logo loadAnimation={true} /> */}
					{/* <div className="homeArea">
                        <ul className="homeCircles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div> */}

					<div className="loadingAnimation">
						<h1 className="lds-title">Loading, please wait</h1>
						<div className="lds-ellipsis">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>


					<div className="colorBox">
                        <h1 className="clickMe">Click me:</h1>
                        <div className="colorButtons" id="radios">
                            <label for="input1"></label>
                            <input className="colorButton1"
                                id="input1"
                                defaultChecked
                                name="colorButton"
                                type="radio"
                                onChange={() => handleColorChange("#f3f3f3", "#15161d")} />

                            <label for="input2"></label>
                            <input className="colorButton2"
                                id="input2"
                                name="colorButton"
                                type="radio"
                                onChange={() => handleColorChange("#15161d", "#f3f3f3")} />

                            <label for="input3"></label>
                            <input className="colorButton3"
                                id="input3"
                                name="colorButton"
                                type="radio"
                                onChange={() => handleColorChange("#1B4332", "#74C69D")} />

                            <label for="input4"></label>
                            <input className="colorButton4"
                                id="input4"
                                name="colorButton"
                                type="radio"
                                onChange={() => handleColorChange("#2B2D42", "#3543D4")} />

                            <span id="slider"></span>
                        </div>
                    </div>
				</>
            ) : (
                // Display content when isLoading is false
                <>
				<div className="animated-bg"></div>
				<div className="animated-bg2"></div>
				<div className="animated-bg3"></div>

                    <HeaderNav />
                    <Logo loadAnimation={true} />
                    <div className="projectBox">
                        <ul className="projects">
                            {projects.map((project, index) => {
                                return <ProjectNavList key={index} project={project} />;
                            })}
                        </ul>
                    </div>

                    <div className="colorBox">
                        <h1 className="clickMe">Click me:</h1>
                        <div className="colorButtons" id="radios">
                            <label for="input1"></label>
                            <input className="colorButton1"
                                id="input1"
                                defaultChecked
                                name="colorButton"
                                type="radio"
                                onChange={() => handleColorChange("#f3f3f3", "#15161d")} />

                            <label for="input2"></label>
                            <input className="colorButton2"
                                id="input2"
                                name="colorButton"
                                type="radio"
                                onChange={() => handleColorChange("#15161d", "#f3f3f3")} />

                            <label for="input3"></label>
                            <input className="colorButton3"
                                id="input3"
                                name="colorButton"
                                type="radio"
                                onChange={() => handleColorChange("#1B4332", "#74C69D")} />

                            <label for="input4"></label>
                            <input className="colorButton4"
                                id="input4"
                                name="colorButton"
                                type="radio"
                                onChange={() => handleColorChange("#474bff", "#3543D4")} />

                            <span id="slider"></span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
