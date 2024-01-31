import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";

import HeaderNav from "../components/HeaderNav"
import Logo from "../components/Logo";

import "../css/cards.css";

const ProjectCard = ({ project, index }) => {
    const base64ToImageUrl = (base64String) => `data:image/jpeg;base64,${base64String}`;
	const headerUrl = base64ToImageUrl(project.ap_picture);

    const afterStyle = {
        content: `"${project.title}"`
    };
    const cardClassName = `card-${index}`;

    return (
    <div className="container">
        <div className={`card ${cardClassName}`}>
            <div className="imgBx">
                <img className="header-picture"src={headerUrl} alt="Project header"/>
            </div>
            <style>
                {`.${cardClassName}:after { content: ${afterStyle.content}; } `}
            </style>
            <div className="project-card contentBx" key={project._id}>
                <Link className="card-title" to={`/Projects/${project.title}`}>{project.title}</Link>
                <p className="size date-created">Date Created: {project.date_created}</p>
                <Link className="read-more" to={`/Projects/${project.title}`}>Read More:</Link>
            </div>
        </div>
    </div>
    )
}

export const AllProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [allProjects, setAllProjects] = useState([]);
    const api_password = process.env.REACT_APP_API_PASSWORD;

    // Reset classes, update bg color
    document.body.classList = "";
    document.body.style.overflowY = 'scroll';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.setProperty('--background-color', "#f3f3f3");
    document.documentElement.style.setProperty('--scrollbar-gutter-color', 'rgba(0, 0, 0, 0)');
    document.documentElement.style.setProperty('--scrollbar-thumb-color', '#211257');
    document.documentElement.style.setProperty('--logo-color', '#211257');

    const filterProjects = (language) => {
        resetForm();
        const filteredProjects = language
            ? allProjects.filter((project) => 
            (project.frontend_stack && project.frontend_stack.includes(language)) ||
            (project.backend_stack && project.backend_stack.includes(language))   ||
            (project.tech_stack && project.tech_stack.includes(language))
            )
            : allProjects;

        setProjects(filteredProjects);
    }

    // Make initial Axios call, set Projects state
    useEffect(() => {
		const getProjectList = () => {
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
                    console.log(response.data);
					setProjects(response.data);
                    setAllProjects(response.data);
				})
				.catch(function (error) {
					console.error(error);
				});
		};
		getProjectList();
	}, []);

    // Make cards load individually
    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('card-animation');
            }, 200 * index); 
        });
    }, [projects]);

    // Load header nav animation
	useEffect(() => {
		const headerNavA = document.querySelectorAll('.headerNav');
		headerNavA.forEach((item) => {
			item.classList.add("HeaderNavProjectLoad");
		})
    }, []);

    // Reset form for language selector
    const resetForm = () => {
        setProjects(allProjects);
    }

    return(
        <div className="content-wrapper">
            <div className="all-projects">
                <ul className="all-projects-bg">
                    {/* <li id="all-projects-square3"></li> */}
                    {/* <li id="all-projects-square2"></li>
                    <li id="all-projects-square1"></li> */}
                </ul>

                <Logo />

                <div className="header-box">
                    <HeaderNav pages={["Music", "AboutMe", "Contact"]}/>
                </div>

                <h1 className="page-title">All Projects</h1>
                
                <div className="hidden-toggles language-input">
                    <input name="coloration-level" 
                        type="radio" 
                        id="coloration-low" 
                        className="hidden-toggles__input"
                        onChange={resetForm}
                        />
                    <label htmlFor="coloration-low" className="hidden-toggles__label">All</label>
                    
                    <input name="coloration-level" 
                        type="radio" 
                        id="coloration-medium-1" 
                        className="hidden-toggles__input" 
                        onChange={() => filterProjects("React")}
                        />
                    <label htmlFor="coloration-medium-1" className="hidden-toggles__label">React</label>

                    <input name="coloration-level" 
                        type="radio" 
                        id="coloration-medium-2" 
                        className="hidden-toggles__input" 
                        onChange={() => filterProjects("Node")}/>
                    <label htmlFor="coloration-medium-2" className="hidden-toggles__label">Node</label>

                    <input name="coloration-level" 
                        type="radio" 
                        id="coloration-medium-3" 
                        className="hidden-toggles__input" 
                        onChange={() => filterProjects("Python")}
                        />
                    <label htmlFor="coloration-medium-3" className="hidden-toggles__label">Python</label>	

                    <input name="coloration-level" 
                        type="radio" 
                        id="coloration-medium-4" 
                        className="hidden-toggles__input" 
                        onChange={() => filterProjects("C++")}/>
                    <label htmlFor="coloration-medium-4" className="hidden-toggles__label">C++</label>
                </div>

                <div className="all-project-box">
                    {projects.map((project, index) => (
                                <ProjectCard key={index} index={index} project={project} />
                            )
                        )
                    }
                </div>

            </div>
        </div>
    )
}