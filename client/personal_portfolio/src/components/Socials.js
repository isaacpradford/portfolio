import "../css/socials.css";

import TwitterIcon from "../images/twitter_icon.png";
import InstagramIcon from "../images/instagram_icon.png";
import LinkedInIcon from "../images/linkedin_icon.png";
import SoundCloudIcon from "../images/soundcloud_icon.png";

export const Socials = () => {

    return (
        <ul className="socials-list">
            <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={TwitterIcon} alt="Twitter Logo" />
                </a>
            </li>
            <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={InstagramIcon} alt="Instagram Logo" />
                </a>
            </li>
            <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInIcon} alt="LinkedIn Logo" />
                </a>
            </li>
            <li>
                <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
                    <img src={SoundCloudIcon} alt="SoundCloud Logo" />
                </a>
            </li>
        </ul>
    )
}