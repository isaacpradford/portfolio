import React, { useState, useEffect } from "react";
import { getProjectNameList } from "../functions/Projects";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjectList = async () => {
      try {
        const res = await getProjectNameList();
        setProjects(res);
      } catch (err) {
        console.log(err);
      }
    };
    getProjectList();
  }, []);
  console.log(projects);

  return (
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <Link to={`/projects/${project.title}`}> {project.title} </Link>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
