import "../css/socials.css";

import TwitterIcon from "../images/twitter_icon.png";
import InstagramIcon from "../images/instagram_icon.png";
import LinkedInIcon from "../images/linkedin_icon.png";
import SoundCloudIcon from "../images/soundcloud_icon.png";

export const Socials = () => {

    return (
        <ul className="socials-list">
            <li>
                <a href="https://twitter.com/IsaacRadford" target="_blank" rel="noopener noreferrer">
                    <img src={TwitterIcon} alt="Twitter Logo" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/radford_isaac/" target="_blank" rel="noopener noreferrer">
                    <img src={InstagramIcon} alt="Instagram Logo" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/isaacpradford/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInIcon} alt="LinkedIn Logo" />
                </a>
            </li>
            <li>
                <a href="https://soundcloud.com/isaacradford" target="_blank" rel="noopener noreferrer">
                    <img src={SoundCloudIcon} alt="SoundCloud Logo" />
                </a>
            </li>
        </ul>
    )
}