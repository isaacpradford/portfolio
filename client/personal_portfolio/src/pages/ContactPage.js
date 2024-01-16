import HeaderNav from "../components/HeaderNav";
import Logo from "../components/Logo";
import { Socials } from "../components/Socials";

import { useEffect } from "react";

export const ContactMe = () => {
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
       document.documentElement.style.setProperty('--scrollbar-thumb-color', '#000000');

    return (
        <div>
        {/* <h1>Hello World</h1> */}
            <HeaderNav pages={["Projects", "Music", "AboutMe"]}/>
            <Logo loadAnimation={false}/>
        </div>
    )
}