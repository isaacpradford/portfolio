import React from "react";

const ExperiencePage = () => {
  return (
    <div id="experience" className="b-experience">
      <h1 className="b-experience__title">Experience:</h1>

      <div className="b-experience__timeline">
        <h1 className="b-experience__timeline__title">Education</h1>
        <div className="b-experience__timeline__entry">
          <div className="b-experience__timeline__entry__date">
            <h5>Bachelor of Science in</h5>
            <p>2020 - 2024</p>
          </div>
          <div className="b-experience__timeline__entry__role">
            <h4>Software Engineering</h4>
            <p>
              Graduated with a Bachelor of Science in Software Engineering from
              BYU-Idaho
            </p>
          </div>
        </div>

        <div className="b-experience__timeline__entry">
          <div className="b-experience__timeline__entry__date">
            <h5>Certificate of</h5>
            <p>Fall 2023</p>
          </div>
          <div className="b-experience__timeline__entry__role">
            <h4>Full Stack Web Development</h4>
            <p>Earned a certificate of Web Development from BYU-Idaho</p>
          </div>
        </div>

        <div className="b-experience__timeline__entry">
          <div className="b-experience__timeline__entry__date">
            <h5>Certificate of</h5>
            <p>Summer 2024</p>
          </div>
          <div className="b-experience__timeline__entry__role">
            <h4>Software Design</h4>
            <p>Earned a certificate of Software Design from BYU-Idaho</p>
          </div>
        </div>

        <h1 className="b-experience__timeline__title">Work Experience</h1>
        <div className="b-experience__timeline__entry">
          <div className="b-experience__timeline__entry__date">
            <h4>Subitt.io</h4>
            <p>2024 - Present</p>
          </div>
          <div className="b-experience__timeline__entry__role">
            <h4>Full Stack Web Developer</h4>
            <p>
              Developed in fast paced, start-up environment designing scalable
              software for a variety of interfaces such as:
              <ul>
                {/* <li>
                  Built an Admin Page for administrators of the website to view
                  businesses, customers, registrations, analytics, and support
                  requests in a single location
                </li>
                <li>
                  Redesigned the business dashboard for business owners to
                  manage customers
                </li> */}
              </ul>
            </p>
          </div>
        </div>

        <div className="b-experience__timeline__line"></div>
      </div>
    </div>
  );
};

export default ExperiencePage;

{
  /* <div className="b-experience__timeline__entry --1">
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

        <h1 className="b-experience__timeline__title">Work Experience</h1>

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
        </div> */
}
