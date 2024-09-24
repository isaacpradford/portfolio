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
        setProjects([...res]); //, ...res, ...res, ...res
      } catch (err) {
        console.log(err);
      }
    };
    getProjectList();
  }, []);

  // Add ten items from beginning to end of list every 15 seconds
  useEffect(() => {
    const tenSecondInterval = setInterval(() => {
      if (projects.length) {
        setProjects((prevProjects) => {
          const nextIterator = iterator + 6; // Iterate the first six cause there's six projects in the db

          // Append the next 10 projects from the current list
          const newProjects = prevProjects.slice(iterator, nextIterator);

          // If we reach the end, loop the iterator
          const newIterator =
            nextIterator >= prevProjects.length ? 0 : nextIterator;

          // Update the iterator and append the new projects
          setIterator(newIterator);
          return [...prevProjects, ...newProjects]; // Append new projects to the list
        });
      }
    }, 15000); // Every 15 seconds

    return () => clearInterval(tenSecondInterval); // unmount
  }, [projects, iterator]);

  // Clear the entire list after 250 seconds / the length of the animation
  useEffect(() => {
    const interval = setInterval(() => {
      projects.length = 6;
      const newIt = iterator - iterator;
      setIterator(newIt);
    }, 250000);

    return () => clearInterval(interval);
  });

  return (
    <div className="b-home">
      <div className="b-home__banner">
        <p className="b-home__banner__text">projects</p>
        <p className="b-home__banner__text">projects</p>
        <p className="b-home__banner__text">projects</p>
      </div>

      <ul className="b-home__projects">
        {projects?.map((project, index) => (
          <li
            key={`${project?.title}-${index}`}
            className={`b-home__projects__list`}
          >
            <Link to={`/projects/${project?.title}`}>{project?.title}</Link>
          </li>
        ))}
      </ul>

      <div className="b-home__intro">
        {/* <span className="b-home__intro__title">
          <h1 className="b-home__intro__name">Hi, my name's Isaac~</h1>
          <p className="b-home__intro__flicker">|</p>
        </span> */}
        <p className="b-home__intro__description">
          I'm a Software Engineer with job experience in object oriented
          projects and WebDev.
        </p>

        <p className="b-home__intro__about">
          Click <Link to={`/about`}>about</Link> to learn more about me!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
