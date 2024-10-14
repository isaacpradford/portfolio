import React, { useEffect, useState } from "react";
import { LuSunMoon } from "react-icons/lu";
import { GiMoonBats } from "react-icons/gi";

import Socials from "../Components/Socials";
import Street from "../assets/IMG_3990.jpg";

{
  /* <h1>https://www.framer.com/motion/</h1>
<h1>https://r3f.docs.pmnd.rs/getting-started/introduction</h1>
<h1>https://threejs.org/</h1> */
}

const HomePage = () => {
  const [invert, setInvert] = useState(false);
  const invertColors = document.documentElement.style.setProperty(
    "--invert",
    invert ? 1 : 0
  );

  const handleNightModeClick = () => setInvert(!invert);

  return (
    <div id="home" className="b-home">
      <div className="b-home__nightMode">
        <GiMoonBats
          
          fill="var(--project-color)"
          onClick={handleNightModeClick}
        />
      </div>
      <div className="b-home__title">
        <h1>Isaac Radford</h1>
        <h3>Software Engineering + Full Stack Web Development</h3>
      </div>

      <div className="b-home__image">
        {/* <img src={Street} alt="Image of Fairfax Avenue in California" /> */}
      </div>
      <div className="b-home__socials">
        <Socials />
      </div>
    </div>
  );
};

export default HomePage;
