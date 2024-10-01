import React from "react";

const ExperiencePage = () => {
  return (
    <div id="experience" className="b-experience">
      <h1>Experience:</h1>

      <div className="b-experience__timeline">
        <div className="b-experience__timeline__entry">
          <div className="b-experience__timeline__entry__title">
            <h3>January 2020 - July 2024</h3>
            <p>School of Physical Sciences, BYU-Idaho</p>
          </div>
          <div className="b-experience__timeline__entry__body">
            <h3>
              Graduated college with a Bachelor of Science in Software
              Engineering{" "}
            </h3>
          </div>
        </div>

        <div className="b-experience__timeline__entry">
          <div className="b-experience__timeline__entry__title">
            <h3>July 2023</h3>
            <p>School of Physical Sciences, BYU-Idaho</p>
          </div>
          <div className="b-experience__timeline__entry__body">
            <h3>Earned a certificate in Full Stack Web Development</h3>
            <p>Description description description</p>
          </div>
        </div>

        <div className="b-experience__timeline__entry">
          <div className="b-experience__timeline__entry__title">
            <h3>July 2024</h3>
            <p>School of Physical Sciences, BYU-Idaho</p>
            <p>Description description description</p>
          </div>
          <div className="b-experience__timeline__entry__body">
            <h3>Earned a certificate in Software Design</h3>
            <p>Description description description</p>
          </div>
        </div>

        <div className="b-experience__timeline__entry">
          <div className="b-experience__timeline__entry__title">
            <h3>Jan. 2024 - Present</h3>
            <p>Fullstack Web Developer, Subitt.io</p>
          </div>
          <div className="b-experience__timeline__entry__body">
            <h3>
              Developed in fast paced, start-up environment designing scalable
              software for both administrators and business owners to manage
              customers.
            </h3>
            <p>Description description description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
