import React, { useState, useEffect } from "react";
import { getProjectNameList } from "../functions/Projects";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [iterator, setIterator] = useState(0);

  // Get list of project names for displaying links
  useEffect(() => {
    const getProjectList = async () => {
      try {
        const res = await getProjectNameList();
        setProjects([...res, ...res, ...res]); //, ...res, ...res, ...res
      } catch (err) {
        console.log(err);
      }
    };
    getProjectList();
  }, []);

  // Add from beginning to end of list
  useEffect(() => {
    const interval = setInterval(() => {
      if (projects.length) {
        setProjects((prevProjects) => {
          const newIt = iterator + 1;
          setIterator(newIt);
          const newProject = prevProjects[iterator]; // Get the last item to re-add to the top of the list
          return [...prevProjects, newProject]; // Add the new item at the top, remove the last one
        });
      }
    }, 1000); // Time interval for adding / deleting items
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [projects]);

  return (
    <div className="b-home">
      <ul className="b-home__projects">
        {projects?.map((project, index) => (
          <li
            key={`${project.title}-${index}`}
            className={`b-home__projects__list`}
          >
            <Link to={`/projects/${project.title}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
