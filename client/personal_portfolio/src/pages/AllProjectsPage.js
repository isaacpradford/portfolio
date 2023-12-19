import { useEffect, useState } from "react"
import HeaderNav from "../components/HeaderNav"
import axios from "axios";

import "../css/cards.css";


const ProjectCard = ({ project }) => {
    return (
        <div className="project-card" key={project._id}>
            <h1>{project.title}</h1>
            <p>Date Created: {project.date_created}</p>
            <p>Description: {project.description1}</p>
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
        <div>
            {/* <div className="header-box">
				<HeaderNav pages={["Music", "AboutMe", "Contact"]}/>
			</div> */}

            {projects.map((project, index) => (
						<ProjectCard key={index} project={project} />
					))
            }
        </div>
    )
}