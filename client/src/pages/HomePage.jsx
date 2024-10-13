import React from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Socials from "../Components/Socials";
import ScrollingBanner from "../Components/LoopingBanner";
import SpinningLoader from "./SpinningLoader";

import Foreground from "../Components/Foreground";

{
  /* <h1>https://www.framer.com/motion/</h1>
<h1>https://r3f.docs.pmnd.rs/getting-started/introduction</h1>
<h1>https://threejs.org/</h1> */
}

const HomePage = () => {
  return (
    <div id="home" className="b-home">
      <div className="b-home__title">
        <h1>Test test test</h1>
      </div>
      <div className="b-home__socials">
        <Socials />
      </div>
    </div>
  );
};

export default HomePage;
