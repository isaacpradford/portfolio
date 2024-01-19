import HeaderNav from "../components/HeaderNav";
import Logo from "../components/Logo";
import { Socials } from "../components/Socials";
import { ContactForm } from "../components/ContactForm";
import "../css/contact.css";

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
       document.documentElement.style.setProperty('--scrollbar-thumb-color', '#24df91');
       document.documentElement.style.setProperty('--logo-color', '#24df91');

    return (
        <div className="contactContent">
        {/* <h1>Hello World</h1> */}
            <HeaderNav pages={["Projects", "Music", "AboutMe"]}/>
            <Logo loadAnimation={false}/>

            <div className="contactDesc">
                <h1 className="contactTitle">Want to chat?</h1>
                <h3>You can contact me here or at any of the social links below!</h3>
            </div>

            <div class="area" >
                <ul class="bars">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>

                <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
            </div >

            <ContactForm />

            <Socials />
        </div>
    )
}