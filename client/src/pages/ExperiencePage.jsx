import React from "react";

const ExperiencePage = () => {
  return (
    <div id="experience" className="b-experience">
      <h1 className="b-experience__title">Experience:</h1>

      <div className="b-experience__timeline">
        {/* <div className="b-experience__timeline__dot"></div> */}
        <div className="b-experience__timeline__line"></div>
        <div className="b-experience__timeline__entry --1">
          <div className="b-experience__timeline__entry__title">
            <p>Bachelors of Science in</p>
            <h2>Software Engineering</h2>
            <h3>BYU-Idaho | January 2020 - July 2024</h3>
          </div>
          <div className="b-experience__timeline__entry__body">
            <p>
              Graduated with a Bachelor of Science in Software Engineering from
              BYU-Idaho
            </p>
            <ul className="b-experience__timeline__entry__body__list">
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="b-experience__timeline__entry --2">
          <div className="b-experience__timeline__entry__title">
            <p>Certificate in</p>
            <h2>Full Stack Web Development</h2>
            <h3>BYU-Idaho | Fall 2023</h3>
          </div>
          <div className="b-experience__timeline__entry__body">
            <p>Earned a certificate in Full Stack Web Development</p>
            <ul className="b-experience__timeline__entry__body__list">
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="b-experience__timeline__entry --3">
          <div className="b-experience__timeline__entry__title">
            <p>Certificate in</p>
            <h2>Software Design</h2>
            <h3>BYU-Idaho | Summer 2024</h3>
          </div>
          <div className="b-experience__timeline__entry__body">
            <p>Earned a certificate in Full Stack Web Development</p>
            <ul className="b-experience__timeline__entry__body__list">
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="b-experience__timeline__entry --4">
          <div className="b-experience__timeline__entry__title">
            <p>Full-Stack Web Developer</p>
            <h2>Subitt.io</h2>
            <h3>2024 - Present</h3>
          </div>
          <div className="b-experience__timeline__entry__body">
            <p>Earned a certificate in Full Stack Web Development</p>
            <ul className="b-experience__timeline__entry__body__list">
              <li>
                Developed in fast paced, start-up environment designing scalable
                software for both administrators and business owners to manage
                customers.
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
