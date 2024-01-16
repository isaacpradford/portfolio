import HeaderNav from "../components/HeaderNav";
import Logo from "../components/Logo";
import { Socials } from "../components/Socials";

import Me from "../images/me.png";
import Banner from "../images/about_banner.png";

import "../css/about.css";

import { useEffect } from "react";

export const AboutMe = () => {
    useEffect(() => {
		const headerNavA = document.querySelectorAll('.headerNav');
		headerNavA.forEach((item) => {
			// item.classList.add("HeaderNavMusicLoad");
            item.classList.add("HeaderNavProjectLoad");
		})
    }, []);

       // Reset classes, update bg color, update scrollwheel
       document.body.classList = "";
       document.body.style.overflowY = 'scroll';
       document.body.style.overflowX = 'hidden';
       document.documentElement.style.setProperty('--background-color', "#f3f3f3");
       document.documentElement.style.setProperty('--scrollbar-gutter-color', 'rgba(0, 0, 0, 0)');
       document.documentElement.style.setProperty('--scrollbar-thumb-color', '#24abea');

    return (
        <div className="aboutContent">
        {/* <h1>Hello World</h1> */}
            <HeaderNav pages={["Projects", "Music", "Contact"]}/>
            <Logo loadAnimation={false}/>
            <div className="titleContent">
                <h1 className="aboutTitle">About Me:</h1>
                <h1 className="aboutTitle">About Me:</h1>
                <h1 className="aboutTitle">About Me:</h1>
                <h1 className="aboutTitle">About Me:</h1>
                <h1 className="aboutTitle">About Me:</h1>
                <h1 className="aboutTitle">About Me:</h1>
                <h1 className="aboutTitle">About Me:</h1>
                <h1 className="aboutTitle">About Me:</h1>
            </div>

            <div className="divider"></div>

            <img src={Me} className="aboutPicture" alt="A picture of me, the creator of the website, holding my nephew!"></img>

            <h1 className="introTitle">Hi, My Name is Isaac</h1>
            <div className="introDescription">
                <p>
                    I'm 24 years old and I grew up in Idaho. I’m a Web Developer studying at Brigham Young University-Idaho,
                    where I’m a senior and about to graduate with a Bachelor of Science in Software Engineering, along with two certificates in Software Design and Web Development.
                </p>
                <p>I'm currently looking for an internship, so if you're interested in my site or anything else on here, please reach out to me on my contact me page!</p>
            </div>
        </div>
    )
}