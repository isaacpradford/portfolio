import { useEffect, useState } from "react"
import HeaderNav from "../components/HeaderNav"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "../css/cards.css";


const ProjectCard = ({ project, index }) => {

    const base64ToImageUrl = (base64String) => `data:image/jpeg;base64,${base64String}`;
	const headerUrl = base64ToImageUrl(project.header_picture);


    const afterStyle = {
        content: `"${project.title}"`
    };

    const cardClassName = `card-${index}`

    return (
    <div className="container">
        <div className={`card ${cardClassName}`}>
            <div className="imgBx">
                <img className="header-picture"src={headerUrl} alt="Project header"/>
            </div>
            <style>
                {`.${cardClassName}:after { content: ${afterStyle.content}; }`}
            </style>
            <div className="project-card contentBx" key={project._id}>
                <Link className="card-title" to={`/Projects/${project.title}`}>{project.title}</Link>
                <p className="size">Date Created: {project.date_created}</p>
                <p className="color">Description: {project.description1}</p>

                <Link className="card-title" to={`/Projects/${project.title}`}>Read More:</Link>
            </div>
        </div>
    </div>
    )
}

export const AllProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    document.body.classList = "";
    document.documentElement.style.setProperty('--background-color', "#f3f3f3");

	useEffect(() => {
		const headerNavA = document.querySelectorAll('.headerNav');
		headerNavA.forEach((item) => {
			item.classList.add("HeaderNavProjectLoad");
		})
    }, []);

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
                    console.log(response.data);
					setProjects(response.data);
				})
				.catch(function (error) {
					console.error(error);
				});
		};
		getProjectList();
	}, []);

    return(
        <div className="all-projects">
            <div className="header-box">
				<HeaderNav pages={["Music", "AboutMe", "Contact"]}/>
			</div>
            
            <div className="all-project-box">
                {projects.map((project, index) => (
                            <ProjectCard key={index} index={index} project={project} />
                        ))
                }
            </div>
        </div>
    )
}